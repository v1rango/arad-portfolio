"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { FiMessageSquare, FiX, FiSend, FiTrash2, FiCpu } from "react-icons/fi";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const QUICK_CHIPS = [
  { label: "💰 هزینه و زمان طراحی سایت؟", prompt: "هزینه و زمان طراحی سایت اختصاصی با آراد چقدره و چطوری محاسبه میشه؟" },
  { label: "⚡ چطور سرعتم رو ۱۰۰ می‌کنی؟", prompt: "چطور سرعت سایتم رو به نمره ۱۰۰ لایت‌هاوس می‌رسونی؟" },
  { label: "🔥 نمونه‌کارهای خفنت چیاست؟", prompt: "خفن‌ترین نمونه‌کارهایی که آراد زده کدوما هستن؟" },
  { label: "📞 چطور با آراد جلسه بذارم؟", prompt: "چطور می‌تونم مستقیم با خود آراد صحبت کنم یا سفارش بدم؟" },
];

const INITIAL_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content: "سلام رفیق! 👋 من دستیار هوشمند آراد وفایی‌ام.\nدرباره طراحی سایت‌های موشکی، سئو نوین، افزایش سرعت لود به ۱۰۰ یا شروع پروژه هر سوالی داری راحت ازم بپرس!",
};

function renderFormattedContent(content: string) {
  const parts = content.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-emerald-400">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
        throw new Error("خطا در برقراری ارتباط");
      }

      if (!response.body) {
        throw new Error("پاسخی دریافت نشد");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        let hasNewData = false;
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) continue;

          const dataStr = trimmed.replace(/^data:\s*/, "");
          if (dataStr === "[DONE]") continue;

          try {
            const parsed = JSON.parse(dataStr);
            if (parsed.text) {
              accumulated += parsed.text;
              hasNewData = true;
            }
          } catch {
          }
        }

        if (hasNewData) {
          const snapshot = accumulated;
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantId ? { ...msg, content: snapshot } : msg
            )
          );
        }
      }

      if (!accumulated) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? {
                  ...msg,
                  content:
                    "داش شرمنده، یه لحظه اتصالم قطع شد! یه بار دیگه سؤالت رو بپرس رفیق.",
                }
              : msg
          )
        );
      }
    } catch {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content:
                  "رفیق ارتباط با هوش مصنوعی برقرار نشد! لطفاً چند لحظه بعد دوباره امتحان کن یا مستقیماً به تلگرام آراد (@v1arad) پیام بده.",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-50 flex items-end flex-col gap-3">
        {showTooltip && !isOpen && (
          <div className="animate-fade-in flex items-center gap-2 bg-[#0d121f]/95 border border-emerald-500/30 text-zinc-200 text-xs py-2 px-3.5 rounded-2xl shadow-xl shadow-black/40 backdrop-blur-md max-w-[240px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>سوالی درباره پروژه‌ها داری؟ با دستیار آراد گپ بزن! 👋</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-zinc-400 hover:text-white p-0.5 rounded transition-colors"
              aria-label="بستن راهنما"
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
          aria-label={isOpen ? "بستن چت‌بات" : "باز کردن چت‌بات هوشمند آراد"}
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-[#090a0f]" />
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
          aria-label="پنجره چت هوشمند با دستیار آراد"
          className="animate-fade-in-scale fixed z-50 bottom-24 left-4 right-4 sm:right-auto sm:left-6 sm:w-[410px] h-[580px] max-h-[82vh] bg-[#0c101c]/95 border border-white/10 rounded-3xl shadow-2xl shadow-black/70 backdrop-blur-2xl flex flex-col overflow-hidden"
        >
          <header className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 text-emerald-400">
                <FiCpu className="w-5 h-5 animate-pulse" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0c101c]" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white flex items-center gap-1.5">
                  دستیار هوشمند آراد
                </h3>
                <p className="text-[11px] text-emerald-400 font-medium">
                  چت بات هوشمند اختصاصی پورتفولیو
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleClear}
                title="پاک کردن پیام‌ها"
                className="p-2 text-zinc-400 hover:text-rose-400 hover:bg-white/5 rounded-xl transition-all"
                aria-label="پاک کردن پیام‌ها"
              >
                <FiTrash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                aria-label="بستن پنجره"
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
                  m.role === "user" ? "items-start" : "items-end"
                }`}
              >
                <div
                  className={`max-w-[88%] text-[13px] leading-relaxed rounded-2xl px-4 py-3 whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-gradient-to-tr from-emerald-600 to-teal-600 text-white rounded-br-xs shadow-md shadow-emerald-950/40"
                      : "bg-white/[0.05] border border-white/10 text-zinc-100 rounded-bl-xs shadow-sm"
                  }`}
                >
                  {renderFormattedContent(m.content)}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-end justify-end">
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl rounded-bl-xs px-4 py-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" />
                  <span
                    className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce"
                    style={{ animationDelay: "0.15s" }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 2 && (
            <div className="px-4 pb-2 pt-1 flex flex-wrap gap-1.5">
              {QUICK_CHIPS.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip.prompt)}
                  disabled={isLoading}
                  className="text-[11px] py-1.5 px-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-zinc-300 hover:text-emerald-300 transition-all text-right active:scale-95 disabled:opacity-50"
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
                placeholder="پیامت رو اینجا بنویس رفیق..."
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="ارسال پیام"
                className="flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-all shadow-md shadow-emerald-500/20 shrink-0"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[10px] text-zinc-500 text-center mt-2 font-medium">
              هوش مصنوعی اختصاصی پورتفولیو • پاسخگویی بلادرنگ
            </p>
          </footer>
        </div>
      )}
    </>
  );
}
