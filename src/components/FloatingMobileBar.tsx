"use client";

import { useEffect, useState } from "react";
import { FiPhone, FiSend, FiZap } from "react-icons/fi";
import { PERSONAL_DATA } from "@/lib/constants";

interface FloatingMobileBarProps {
  lang?: "fa" | "en";
}

export default function FloatingMobileBar({ lang = "fa" }: FloatingMobileBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isFa = lang === "fa";

  useEffect(() => {
    const handleScroll = () => {
      // فقط بعد از اسکرول به اندازه ۲۵۰ پیکسل ظاهر شود
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label={isFa ? "دسترسی سریع همراه" : "Mobile Quick Actions"}
      className="md:hidden fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] inset-x-3 z-40 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      <div
        className="glass-panel flex items-center justify-between p-1.5 rounded-2xl"
      >
        {/* تماس مستقیم */}
        <a
          href={`tel:${PERSONAL_DATA.socials.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold text-[var(--text-primary)] hover:text-emerald-400 active:scale-95 transition-all"
        >
          <FiPhone className="w-4 h-4 text-emerald-400" />
          <span>{isFa ? "تماس" : "Call"}</span>
        </a>

        <div className="w-[1px] h-6 bg-white/10" />

        {/* چت تلگرام */}
        <a
          href={PERSONAL_DATA.socials.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold text-[var(--text-primary)] hover:text-cyan-400 active:scale-95 transition-all"
        >
          <FiSend className="w-4 h-4 text-cyan-400" />
          <span>{isFa ? "تلگرام" : "Telegram"}</span>
        </a>

        {/* دکمه اصلی شروع پروژه / استعلام */}
        <a
          href="#contact"
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-black shadow-lg shadow-emerald-500/20 active:scale-95 transition-all bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-sans"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-950 animate-ping" />
          <FiZap className="w-4 h-4" />
          <span>{isFa ? "شروع پروژه" : "Start Now"}</span>
        </a>
      </div>
    </aside>
  );
}
