"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaTelegram, FaWhatsapp, FaInstagram } from "react-icons/fa";
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]/20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            {isFa ? "ارتباط و شروع سفارش پروژه" : "Get In Touch & Start Project"}
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            {isFa
              ? "جهت ثبت سفارش، دریافت مشاوره تخصصی سئو و هوش مصنوعی، یا شروع گفتگو پیام بفرستید."
              : "Send a message for project inquiries, AI/AEO consultation, or direct collaboration."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* ستون کانال‌های ارتباط مستقیم */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {isFa ? "راه‌های دسترسی مستقیم و فوری" : "Direct & Fast Communication"}
            </h3>

            {/* کارت تلگرام */}
            <div className="bento-card p-5 flex items-center justify-between gap-4">
              <a
                href={PERSONAL_DATA.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 flex-1"
              >
                <div className="w-11 h-11 rounded-xl border flex items-center justify-center text-[#229ED9]"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    borderColor: "var(--border)",
                  }}
                >
                  <FaTelegram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{isFa ? "تلگرام (پاسخ سریع)" : "Telegram (Fast Reply)"}</div>
                  <div className="font-semibold" style={{ color: "var(--text-primary)" }}>@v1arad</div>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard("@v1arad", "tg")}
                className="px-3 py-1.5 rounded-lg border text-xs transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  backgroundColor: "var(--bg-elevated)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                {copiedKey === "tg" ? (isFa ? "کپی شد!" : "Copied!") : (isFa ? "کپی آیدی" : "Copy")}
              </button>
            </div>

            {/* کارت واتس‌اپ و تماس */}
            <div className="bento-card p-5 flex items-center justify-between gap-4">
              <a
                href={PERSONAL_DATA.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 flex-1"
              >
                <div className="w-11 h-11 rounded-xl border flex items-center justify-center text-emerald-500"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    borderColor: "var(--border)",
                  }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{isFa ? "واتس‌اپ / تماس" : "WhatsApp / Phone"}</div>
                  <div className="font-semibold dir-ltr" style={{ color: "var(--text-primary)" }}>{PERSONAL_DATA.socials.phone}</div>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard(PERSONAL_DATA.socials.phone, "phone")}
                className="px-3 py-1.5 rounded-lg border text-xs transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  backgroundColor: "var(--bg-elevated)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                {copiedKey === "phone" ? (isFa ? "کپی شد!" : "Copied!") : (isFa ? "کپی شماره" : "Copy")}
              </button>
            </div>

            {/* کارت اینستاگرام */}
            <div className="bento-card p-5 flex items-center justify-between gap-4">
              <a
                href={PERSONAL_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 flex-1"
              >
                <div className="w-11 h-11 rounded-xl border flex items-center justify-center text-pink-500"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    borderColor: "var(--border)",
                  }}
                >
                  <FaInstagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{isFa ? "اینستاگرام" : "Instagram"}</div>
                  <div className="font-semibold" style={{ color: "var(--text-primary)" }}>@v1arad</div>
                </div>
              </a>
              <a
                href={PERSONAL_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg border text-xs transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  backgroundColor: "var(--bg-elevated)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                {isFa ? "مشاهده" : "Open"}
              </a>
            </div>
          </motion.div>

          {/* فرم ارسال پیام */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bento-card p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium mb-1" style={{ color: "var(--text-secondary)" }}>
                  {isFa ? "اسمت چیه؟ *" : "Full Name *"}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                  placeholder={isFa ? "مثلاً: علی رضایی" : "Jane Doe"}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium mb-1" style={{ color: "var(--text-secondary)" }}>
                    {isFa ? "ایمیل *" : "Email Address *"}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="example@mail.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-medium mb-1" style={{ color: "var(--text-secondary)" }}>
                    {isFa ? "شماره تماس (اختیاری)" : "Phone Number"}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    autoComplete="tel"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="09123456789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium mb-1" style={{ color: "var(--text-secondary)" }}>
                  {isFa ? "پیامت چیه؟ *" : "Your Message *"}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  autoComplete="off"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                  placeholder={isFa ? "جزئیات پروژه، سوالت، یا هر چیزی که داری بگو..." : "Describe your project or inquiry..."}
                ></textarea>
              </div>


              {status === "error" && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-xs">
                  {errorMessage}
                </div>
              )}

              {status === "success" && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs">
                  {isFa
                    ? "پیامت رسید! اولین فرصتی که داشتم باهات در تماسم 🙌"
                    : "Message sent! I'll get back to you soon 🙌"}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-xl font-bold text-sm hover:brightness-110 transition-all disabled:opacity-50 shadow-md"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-contrast)",
                }}
              >
                {status === "loading"
                  ? isFa ? "در حال ارسال..." : "Sending..."
                  : isFa ? "بزن بریم! ارسال پیام 🚀" : "Send Message"}
              </button>
            </form>
          </motion.div>


        </div>
      </div>
    </section>
  );
}