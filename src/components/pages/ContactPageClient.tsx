"use client";

import Link from "next/link";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import Contact from "@/components/Contact";
import { FiArrowRight, FiArrowLeft, FiMail, FiPhoneCall, FiClock, FiSend } from "react-icons/fi";
import { PERSONAL_DATA } from "@/lib/constants";

export default function ContactPageClient() {
  const { lang } = useThemeLanguage();
  const isFa = lang === "fa";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          {isFa ? <FiArrowRight className="w-4 h-4" /> : <FiArrowLeft className="w-4 h-4" />}
          <span>{isFa ? "بازگشت به صفحه اصلی" : "Back to Home"}</span>
        </Link>
        <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
          COMMS // DIRECT_GATEWAYS
        </span>
      </div>

      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="telemetry-pill">
          <span className="telemetry-pill-dot" />
          <FiMail className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
          <span>{isFa ? "شروع همکاری و مشاوره اختصاصی" : "Start a Conversation"}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[var(--text-primary)]">
          {isFa ? (
            <>
              ارتباط مستقیم برای <span className="text-gradient-silver">پیاده‌سازی پروژه‌های شاخص</span>
            </>
          ) : (
            <>
              Let&apos;s Build Something <span className="text-gradient-silver">Extraordinary Together</span>
            </>
          )}
        </h1>

        <p className="text-xs sm:text-base text-[var(--text-secondary)] leading-relaxed">
          {isFa
            ? "برای سفارش وب‌سایت جدید، ارتقای سرعت سایت فعلی، اتوماسیون با هوش مصنوعی یا توسعه وب‌اپلیکیشن اختصاصی؛ پیام خود را ارسال فرمایید تا ظرف کمتر از ۲ ساعت پاسخ دهم."
            : "Reach out to discuss new web systems, performance overhauls, custom AI bots, or full-stack applications. Average response time is under 2 hours."}
        </p>
      </div>

      {/* AEO Direct Answer Capsule */}
      <section className="architectural-card p-6 sm:p-7 rounded-2xl relative space-y-3">
        <div className="cad-corner-tl" />
        <div className="cad-corner-tr">AEO // SLA_CHANNELS</div>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--text-primary)]">
          <span className="w-2 h-2 rounded-full bg-[var(--text-primary)]" />
          <span>{isFa ? "راه‌های تماس مستقیم (پاسخ مستقیم AEO)" : "Direct Channels (AEO Direct Answer)"}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[var(--text-secondary)] pt-1">
          <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] space-y-1">
            <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 font-mono">
              <FiPhoneCall className="w-3.5 h-3.5 text-[var(--text-primary)]" />
              <span>{isFa ? "تماس و واتساپ:" : "Direct Phone & WA:"}</span>
            </span>
            <p className="font-mono dir-ltr text-left text-[var(--text-primary)] font-semibold">{PERSONAL_DATA.socials.phone}</p>
          </div>
          <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] space-y-1">
            <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 font-mono">
              <FiSend className="w-3.5 h-3.5 text-[var(--text-primary)]" />
              <span>{isFa ? "تلگرام مستقیم:" : "Direct Telegram:"}</span>
            </span>
            <p className="font-mono text-[var(--text-primary)] font-semibold">@v1arad (t.me/v1arad)</p>
          </div>
          <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] space-y-1">
            <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 font-mono">
              <FiClock className="w-3.5 h-3.5 text-[var(--text-primary)]" />
              <span>{isFa ? "زمان پاسخگویی:" : "Response SLA:"}</span>
            </span>
            <p className="font-mono text-[var(--text-primary)] font-semibold">{isFa ? "حداکثر ۲ ساعت کاری" : "< 2 business hours"}</p>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form Component */}
      <div>
        <Contact lang={lang} />
      </div>

    </div>
  );
}
