import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().trim().min(2).max(50),
  email: z.string().trim().email().max(100),
  message: z.string().trim().min(5).max(1000),
});

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const now = Date.now();
    const windowMs = 60 * 60 * 1000;
    const limit = 10;

    const userRate = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    if (now - userRate.lastReset > windowMs) {
      userRate.count = 0;
      userRate.lastReset = now;
    }

    if (userRate.count >= limit) {
      return NextResponse.json(
        { error: "تعداد درخواست‌های شما بیش از حد مجاز است. لطفاً بعداً تلاش کنید." },
        { status: 429 }
      );
    }

    userRate.count += 1;
    rateLimitMap.set(ip, userRate);

    const body = await req.json();
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0]?.message || "ورودی‌ها معتبر نیستند.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, email, message } = validationResult.data;
    const cleanMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "aradvafaee1@gmail.com",
      subject: `[Contact Form] پیام جدید از طرف ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #f8fafc;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">پیام جدید از پورتفولیو</h2>
          <p style="margin-top: 16px;"><strong>نام فرستنده:</strong> ${name}</p>
          <p><strong>ایمیل:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>IP فرستنده:</strong> ${ip}</p>
          <hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 20px 0;" />
          <p style="font-weight: bold; color: #334155;">متن پیام:</p>
          <div style="background-color: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; white-space: pre-wrap; color: #1e293b;">
            ${cleanMessage}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "خطا در ارسال ایمیل. لطفا دوباره تلاش کنید." },
      { status: 500 }
    );
  }
}