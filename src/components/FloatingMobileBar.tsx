"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiPhone, FiSend, FiZap } from "react-icons/fi";
import { PERSONAL_DATA } from "@/lib/constants";

interface FloatingMobileBarProps {
  lang?: "fa" | "en";
}

export default function FloatingMobileBar({ lang = "en" }: FloatingMobileBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isFa = lang === "fa";

  useEffect(() => {
    const handleScroll = () => {
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
      <div className="glass-panel flex items-center justify-between p-1.5 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]/90 backdrop-blur-xl shadow-2xl">
        <a
          href={`tel:${PERSONAL_DATA.socials.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold text-[var(--text-primary)] hover:opacity-80 active:scale-95 transition-all"
        >
          <FiPhone className="w-4 h-4 text-[var(--text-primary)]" />
          <span>{isFa ? "تماس" : "Call"}</span>
        </a>

        <div className="w-[1px] h-6 bg-[var(--border)]" />

        <a
          href={PERSONAL_DATA.socials.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold text-[var(--text-primary)] hover:opacity-80 active:scale-95 transition-all"
        >
          <FiSend className="w-4 h-4 text-[var(--text-primary)]" />
          <span>{isFa ? "تلگرام" : "Telegram"}</span>
        </a>

        <Link
          href="/contact"
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-black shadow-lg active:scale-95 transition-all bg-[var(--text-primary)] text-[var(--bg-primary)] font-sans"
        >
          <FiZap className="w-4 h-4" />
          <span>{isFa ? "شروع پروژه" : "Start Now"}</span>
        </Link>
      </div>
    </aside>
  );
}
