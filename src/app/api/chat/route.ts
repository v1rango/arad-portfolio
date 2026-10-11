import { NextRequest, NextResponse } from "next/server";
import { CHATBOT_SYSTEM_PROMPT } from "@/lib/chatbot-prompt";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "کلید ارتباط با هوش مصنوعی تنظیم نشده است." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { messages } = body as { messages?: ChatMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "پیامی برای ارسال یافت نشد." },
        { status: 400 }
      );
    }

    const sanitizedMessages: ChatMessage[] = messages
      .slice(-10)
      .map((msg) => ({
        role: (msg.role === "assistant" ? "assistant" : "user") as "user" | "assistant",
        content: String(msg.content || "").slice(0, 1000),
      }))
      .filter((msg) => msg.content.trim().length > 0);

    if (sanitizedMessages.length === 0) {
      return NextResponse.json(
        { error: "متن پیام خالی است." },
        { status: 400 }
      );
    }

    const model = process.env.GROQ_MODEL || "qwen/qwen3.8-27b";

    const payload = {
      model,
      messages: [
        { role: "system", content: CHATBOT_SYSTEM_PROMPT },
        ...sanitizedMessages,
      ],
      temperature: 0.7,
      max_tokens: 800,
      stream: true,
    };

    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!groqResponse.ok) {
      const errText = await groqResponse.text();
      return NextResponse.json(
        { error: "خطا در برقراری ارتباط با سرویس هوش مصنوعی", details: errText },
        { status: groqResponse.status }
      );
    }

    if (!groqResponse.body) {
      return NextResponse.json(
        { error: "پاسخی از سرور دریافت نشد." },
        { status: 500 }
      );
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const transformStream = new TransformStream({
      async transform(chunk, controller) {
        const text = decoder.decode(chunk, { stream: true });
        const lines = text.split("\n");

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith("data:")) continue;

          const dataStr = trimmed.replace(/^data:\s*/, "");
          if (dataStr === "[DONE]") {
            controller.enqueue(encoder.encode("data: [DONE]\n\n"));
            continue;
          }

          try {
            const parsed = JSON.parse(dataStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ text: content })}\n\n`)
              );
            }
          } catch {
          }
        }
      },
    });

    return new Response(groqResponse.body.pipeThrough(transformStream), {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("[Chat API Error]:", error);
    return NextResponse.json(
      { error: "خطای ناشناخته در سرور چت" },
      { status: 500 }
    );
  }
}
