"use client";

import { useState, FormEvent } from "react";
import { FaTelegram, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiMail, FiCheck, FiSend, FiClock, FiPhoneCall } from "react-icons/fi";
import { PERSONAL_DATA } from "@/lib/constants";

interface ContactProps {
  lang: "fa" | "en";
}

export default function Contact({ lang }: ContactProps) {
  const isFa = lang === "fa";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || (isFa ? "خطایی رخ داد." : "An error occurred."));
      }
    } catch {
      setStatus("error");
      setErrorMessage(isFa ? "خطا در برقراری ارتباط با سرور." : "Server connection error.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="telemetry-pill">
            <span className="telemetry-pill-dot" />
            <FiMail className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
            <span>{isFa ? "درگاه ارتباط رسمی و مشاوره" : "Executive Direct Inquiries"}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[var(--text-primary)]">
            {isFa ? "ارتباط مستقیم جهت بررسی پروژه و همکاری" : "Initiate a Direct Technical Dialogue"}
          </h2>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            {isFa
              ? "جهت ثبت سفارش، تدوین معماری فنی یا مشاوره در حوزه سئوی ساختاریافته و سرعت؛ پیام خود را ارسال فرمایید تا در کوتاه‌ترین زمان پاسخ داده شود."
              : "For custom platform development, AI search architecture, or performance engineering inquiries, submit the brief below."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {isFa ? "کانال‌های ارتباطی مستقیم:" : "DIRECT CHANNELS:"}
              </span>
              <span className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1">
                <FiClock className="w-3.5 h-3.5" />
                <span>{isFa ? "پاسخگویی زیر ۲ ساعت" : "SLA < 2h"}</span>
              </span>
            </div>

            {/* Telegram */}
            <div className="architectural-card p-5 rounded-xl flex items-center justify-between gap-4 relative">
              <div className="cad-corner-tl" />
              <div className="cad-corner-tr">COMMS // TG</div>
              <a
                href={PERSONAL_DATA.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 flex-1"
              >
                <div className="w-10 h-10 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-primary)]">
                  <FaTelegram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[var(--text-muted)]">
                    {isFa ? "تلگرام (پاسخ سریع)" : "Telegram (Priority)"}
                  </div>
                  <div className="text-sm font-bold font-mono text-[var(--text-primary)]">@v1arad</div>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard("@v1arad", "tg")}
                className="tactile-btn px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
              >
                {copiedKey === "tg" ? (isFa ? "کپی شد" : "Copied") : (isFa ? "کپی" : "Copy")}
              </button>
            </div>

            {/* WhatsApp / Phone */}
            <div className="architectural-card p-5 rounded-xl flex items-center justify-between gap-4 relative">
              <div className="cad-corner-tl" />
              <div className="cad-corner-tr">COMMS // VOICE</div>
              <a
                href={PERSONAL_DATA.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 flex-1"
              >
                <div className="w-10 h-10 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-primary)]">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[var(--text-muted)]">
                    {isFa ? "واتس‌اپ / تماس تلفنی" : "WhatsApp / Call"}
                  </div>
                  <div className="text-sm font-bold font-mono text-[var(--text-primary)] dir-ltr text-left">
                    {PERSONAL_DATA.socials.phone}
                  </div>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard(PERSONAL_DATA.socials.phone, "phone")}
                className="tactile-btn px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
              >
                {copiedKey === "phone" ? (isFa ? "کپی شد" : "Copied") : (isFa ? "کپی" : "Copy")}
              </button>
            </div>

            {/* Instagram */}
            <div className="architectural-card p-5 rounded-xl flex items-center justify-between gap-4 relative">
              <div className="cad-corner-tl" />
              <div className="cad-corner-tr">COMMS // IG</div>
              <a
                href={PERSONAL_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 flex-1"
              >
                <div className="w-10 h-10 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-primary)]">
                  <FaInstagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[var(--text-muted)]">
                    {isFa ? "اینستاگرام" : "Instagram"}
                  </div>
                  <div className="text-sm font-bold font-mono text-[var(--text-primary)]">@v1arad</div>
                </div>
              </a>
              <a
                href={PERSONAL_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="tactile-btn px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
              >
                {isFa ? "مشاهده" : "Open"}
              </a>
            </div>

            {/* Direct Channel Assurance */}
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] text-[11px] text-[var(--text-muted)] leading-relaxed space-y-1">
              <span className="font-bold text-[var(--text-primary)] block">
                {isFa ? "تعهد حفظ محرمانگی (NDA):" : "Confidentiality & NDA:"}
              </span>
              <p>
                {isFa
                  ? "تمام اطلاعات پروژه و اسناد کسب‌وکار شما با رعایت کامل محرمانگی بررسی شده و در صورت نیاز قرارداد NDA منعقد خواهد شد."
                  : "All architectural briefs and business metrics are handled with strict technical confidentiality."}
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="architectural-card p-6 sm:p-8 rounded-2xl relative space-y-5">
              <div className="cad-corner-tl" />
              <div className="cad-corner-tr">INQUIRY // SECURE_POST</div>

              <div className="border-b border-[var(--border)] pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  {isFa ? "فرم ثبت مشخصات و نیازمندی‌های پروژه:" : "PROJECT INQUIRY FORM:"}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Fast Chips */}
                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-2">
                    {isFa ? "زمینه یا نوع خدمت مدنظر:" : "SERVICE FOCUS:"}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { fa: "طراحی وب‌سایت اختصاصی", en: "Custom Web Platform" },
                      { fa: "سئو معنایی و هوش مصنوعی (AEO)", en: "AI SEO & AEO" },
                      { fa: "ارتقای سرعت (Lighthouse 100)", en: "Speed Optimization" },
                      { fa: "وب‌اپلیکیشن یا ربات تلگرام", en: "Web App / Telegram Bot" },
                    ].map((service) => (
                      <button
                        key={service.fa}
                        type="button"
                        onClick={() => {
                          const tag = isFa ? service.fa : service.en;
                          setFormData((prev) => ({
                            ...prev,
                            message: prev.message.startsWith(`[${tag}]`) ? prev.message : `[${tag}] ${prev.message}`,
                          }));
                        }}
                        className="px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] text-[11px] font-mono text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                      >
                        + {isFa ? service.fa : service.en}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                    {isFa ? "نام و نام‌خانوادگی یا نام برند / شرکت *" : "FULL NAME / BRAND *"}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] transition-colors font-sans"
                    placeholder={isFa ? "مثلاً: مهندس علی رضایی (یا هلدینگ آریا)" : "Jane Doe (or Company Name)"}
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                      {isFa ? "آدرس ایمیل کاری *" : "BUSINESS EMAIL *"}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] transition-colors font-mono"
                      placeholder="client@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                      {isFa ? "شماره تماس (جهت هماهنگی سریع)" : "CONTACT NUMBER"}
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      autoComplete="tel"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] transition-colors font-mono dir-ltr"
                      placeholder="09123456789"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                    {isFa ? "شرح خلاصه پروژه یا اهداف تجاری *" : "PROJECT SUMMARY & OBJECTIVES *"}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    autoComplete="off"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] transition-colors resize-none font-sans"
                    placeholder={
                      isFa
                        ? "شرح خلاصه نیازمندی‌ها، ددلاین زمانی مورد نظر، یا ویژگی‌های فنی که مدنظرتان است..."
                        : "Describe your project requirements, target timeline, or technical expectations..."
                    }
                  />
                </div>

                {/* Status Messages */}
                {status === "error" && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                    {errorMessage}
                  </div>
                )}

                {status === "success" && (
                  <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-mono">
                    {isFa
                      ? "درخواست شما با موفقیت ثبت شد. ظرف حداکثر ۲ ساعت با شما ارتباط برقرار خواهد شد."
                      : "Inquiry received. I will review and reply within 2 business hours."}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="tactile-btn btn-border-beam w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-95 transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  <FiSend className="w-4 h-4" />
                  <span>
                    {status === "loading"
                      ? isFa ? "در حال ارسال..." : "Transmitting..."
                      : isFa ? "ارسال درخواست همکاری و بررسی پروژه" : "Submit Technical Inquiry"}
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}