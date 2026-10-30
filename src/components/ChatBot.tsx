"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { FiMessageSquare, FiX, FiSend, FiTrash2, FiCpu } from "react-icons/fi";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const QUICK_CHIPS_FA = [
  { label: "💰 هزینه و زمان طراحی سایت؟", prompt: "هزینه و زمان طراحی سایت اختصاصی با آراد چقدره و چطوری محاسبه میشه؟" },
  { label: "⚡ چطور سرعتم رو ۱۰۰ می‌کنی؟", prompt: "چطور سرعت سایتم رو به نمره ۱۰۰ لایت‌هاوس می‌رسونی؟" },
  { label: "🔥 نمونه‌کارهای خفنت چیاست؟", prompt: "خفن‌ترین نمونه‌کارهایی که آراد زده کدوما هستن؟" },
  { label: "📞 چطور با آراد جلسه بذارم؟", prompt: "چطور می‌تونم مستقیم با خود آراد صحبت کنم یا سفارش بدم؟" },
];

const QUICK_CHIPS_EN = [
  { label: "💰 Project Scope & Investment?", prompt: "What is the typical investment range and timeline for a bespoke Next.js 16 project?" },
  { label: "⚡ How do you reach 100 PageSpeed?", prompt: "How do you guarantee a 100/100 Lighthouse score and sub-0.8s load times?" },
  { label: "🔥 Flagship Case Studies?", prompt: "Can you provide a summary of your flagship production case studies?" },
  { label: "📞 Book Direct Consultation?", prompt: "How can I schedule a direct technical consultation with Arad?" },
];

function cleanStreamText(raw: string): string {
  if (!raw.includes("data:")) return raw;
  const lines = raw.split("\n");
  let result = "";
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (!trimmed.startsWith("data:")) {
      result += (result ? "\n" : "") + line;
      continue;
    }
    const payload = trimmed.replace(/^data:\s*/, "");
    if (payload === "[DONE]") continue;
    try {
      const parsed = JSON.parse(payload);
      if (typeof parsed?.text === "string") {
        result += parsed.text;
      } else if (typeof parsed?.content === "string") {
        result += parsed.content;
      }
    } catch {
      // ignore partial or non-json
    }
  }
  return result;
}

function renderFormattedContent(content: string) {
  const parts = content.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export default function ChatBot() {
  const { lang } = useThemeLanguage();
  const isFa = lang === "fa";

  const initialGreeting = isFa
    ? "سلام! 👋 من دستیار هوشمند آراد وفایی هستم.\nدرباره توسعه اختصاصی با Next.js 16، اتوماسیون هوش مصنوعی و بات‌های تلگرام، افزایش سرعت لود به زیر ۰.۸ ثانیه یا شروع پروژه هر سوالی داری راحت بپرس!"
    : "Hello! 👋 I'm Arad Vafaee's AI engineering assistant.\nAsk me anything regarding Next.js 16 bespoke web platforms, AI & Telegram bot automation, sub-0.8s load times, or booking a project!";

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "welcome", role: "assistant", content: initialGreeting },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update greeting when language changes if no conversation yet
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length <= 1) {
        return [{ id: "welcome", role: "assistant", content: initialGreeting }];
      }
      return prev;
    });
  }, [initialGreeting]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
      const timer = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, scrollToBottom]);

  const handleSend = async (customPrompt?: string) => {
    const userText = (customPrompt || input).trim();
    if (!userText || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userText,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    const assistantId = (Date.now() + 1).toString();
    const assistantMessage: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
    };

    setMessages([...newMessages, assistantMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(isFa ? "خطا در برقراری ارتباط با سرور" : "Failed to connect to assistant");
      }

      if (!response.body) {
        throw new Error(isFa ? "پاسخی دریافت نشد" : "Empty response body");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulated += chunk;
        const displayContent = cleanStreamText(accumulated);

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId ? { ...msg, content: displayContent } : msg
          )
        );
      }
    } catch {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content: isFa
                  ? "متأسفانه در برقراری ارتباط خطایی رخ داد. لطفاً پیام خود را از طریق فرم تماس یا تلگرام ارسال نمایید."
                  : "An error occurred while connecting to the assistant. Please reach out directly via the Contact page or Telegram.",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([
      { id: "welcome", role: "assistant", content: initialGreeting },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const chips = isFa ? QUICK_CHIPS_FA : QUICK_CHIPS_EN;

  return (
    <>
      <div className={`fixed bottom-6 ${isFa ? "left-6" : "right-6"} z-50 flex items-center gap-3`}>
        {showTooltip && !isOpen && (
          <div className="animate-fade-in flex items-center gap-2 bg-[#121215]/95 border border-white/20 text-zinc-200 text-xs py-2 px-3.5 rounded-2xl shadow-xl shadow-black/50 backdrop-blur-md max-w-[260px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>
              {isFa
                ? "سوالی درباره پروژه‌ها داری؟ با دستیار آراد گپ بزن! 👋"
                : "Questions about your project? Chat with Arad's AI! 👋"}
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-zinc-400 hover:text-white p-0.5 rounded transition-colors"
              aria-label={isFa ? "بستن راهنما" : "Close tooltip"}
            >
              <FiX className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          aria-label={isOpen ? "Close AI Chat" : "Open Arad AI Chat Assistant"}
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#18181b] border border-white/20 text-white shadow-xl hover:border-white/50 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-black" />
          </span>

          {isOpen ? (
            <FiX className="w-6 h-6 transition-transform group-hover:rotate-90 duration-300" />
          ) : (
            <FiMessageSquare className="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Arad AI Chat Assistant"
          dir={isFa ? "rtl" : "ltr"}
          className={`animate-fade-in-scale fixed z-50 bottom-24 ${
            isFa ? "left-4 right-4 sm:right-auto sm:left-6" : "right-4 left-4 sm:left-auto sm:right-6"
          } sm:w-[410px] h-[580px] max-h-[82vh] bg-[#0c1017]/95 border border-white/15 rounded-3xl shadow-2xl shadow-black/80 backdrop-blur-2xl flex flex-col overflow-hidden`}
        >
          <header className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-white/10 border border-white/20 text-white">
                <FiCpu className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0c1017]" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white flex items-center gap-1.5">
                  {isFa ? "دستیار هوشمند آراد وفایی" : "Arad Vafaee AI Assistant"}
                </h3>
                <p className="text-[11px] text-zinc-400 font-medium">
                  {isFa ? "پاسخ آنی به سوالات فنی و بیزینسی" : "Instant answers to technical & scope inquiries"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleClear}
                title={isFa ? "پاک کردن پیام‌ها" : "Clear conversation"}
                className="p-2 text-zinc-400 hover:text-rose-400 hover:bg-white/5 rounded-xl transition-all"
                aria-label={isFa ? "پاک کردن پیام‌ها" : "Clear conversation"}
              >
                <FiTrash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                aria-label={isFa ? "بستن پنجره" : "Close window"}
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.role === "user" ? (isFa ? "items-start" : "items-end") : (isFa ? "items-end" : "items-start")
                }`}
              >
                <div
                  className={`max-w-[88%] text-[13px] leading-relaxed rounded-2xl px-4 py-3 whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-white text-zinc-950 font-medium rounded-br-xs shadow-md"
                      : "bg-white/[0.06] border border-white/10 text-zinc-100 rounded-bl-xs shadow-sm"
                  }`}
                >
                  {renderFormattedContent(m.content)}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className={`flex ${isFa ? "items-end justify-end" : "items-start justify-start"}`}>
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-bounce" />
                  <span
                    className="w-2 h-2 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: "0.15s" }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 2 && (
            <div className="px-4 pb-2 pt-1 flex flex-wrap gap-1.5">
              {chips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip.prompt)}
                  disabled={isLoading}
                  className="text-[11px] py-1.5 px-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-all active:scale-95 disabled:opacity-50"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          )}

          <footer className="p-3 border-t border-white/10 bg-white/[0.02]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isFa ? "پیامت رو اینجا بنویس..." : "Type your technical or project inquiry..."}
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label={isFa ? "ارسال پیام" : "Send message"}
                className="flex items-center justify-center w-10 h-10 rounded-2xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-all shadow-md shrink-0"
              >
                <FiSend className={`w-4 h-4 ${isFa ? "rtl:rotate-180" : ""}`} />
              </button>
            </form>
            <p className="text-[10px] text-zinc-500 text-center mt-2 font-mono">
              {isFa ? "هوش مصنوعی اختصاصی پورتفولیو • پاسخگویی بلادرنگ" : "ARAD VAFAEE AI LAB • REAL-TIME COPILOT"}
            </p>
          </footer>
        </div>
      )}
    </>
  );
}
