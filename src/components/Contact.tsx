"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
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

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
    } catch (err) {
      setStatus("error");
      setErrorMessage(isFa ? "خطا در برقراری ارتباط با سرور." : "Server connection error.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border)]/20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            {isFa ? "ارتباط و شروع پروژه" : "Get In Touch"}
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            {isFa
              ? "جهت ثبت سفارش، دریافت مشاوره تخصصی سئو و هوش مصنوعی، یا گفتگو پیام بفرستید."
              : "Send a message for project inquiries, SEO & AI consultation, or collaboration."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              {isFa ? "اطلاعات تماس مستمر" : "Direct Channels"}
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              <a
                href={PERSONAL_DATA.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] font-bold">
                  TG
                </div>
                <div>
                  <div className="text-xs text-gray-400">{isFa ? "تلگرام" : "Telegram"}</div>
                  <div className="font-semibold text-white">@v1arad</div>
                </div>
              </a>

              <a
                href={PERSONAL_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] font-bold">
                  IG
                </div>
                <div>
                  <div className="text-xs text-gray-400">{isFa ? "اینستاگرام" : "Instagram"}</div>
                  <div className="font-semibold text-white">@v1arad</div>
                </div>
              </a>

              <a
                href={PERSONAL_DATA.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] font-bold">
                  WA
                </div>
                <div>
                  <div className="text-xs text-gray-400">{isFa ? "واتس‌اپ" : "WhatsApp"}</div>
                  <div className="font-semibold text-white">+98 939 460 6013</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)]"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  {isFa ? "نام و نام خانوادگی *" : "Full Name *"}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-white text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder={isFa ? "مثلاً: علی حسینی" : "John Doe"}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    {isFa ? "ایمیل *" : "Email Address *"}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-white text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    placeholder="example@mail.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    {isFa ? "شماره تماس" : "Phone Number"}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-white text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    placeholder="09123456789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  {isFa ? "متن پیام *" : "Your Message *"}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-white text-sm focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  placeholder={isFa ? "جزئیات پروژه یا درخواست مشاوره..." : "Describe your project or inquiry..."}
                ></textarea>
              </div>

              {status === "error" && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  {errorMessage}
                </div>
              )}

              {status === "success" && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                  {isFa
                    ? "پیام شما با موفقیت ارسال شد. در اسرع وقت پاسخ خواهم داد."
                    : "Message sent successfully. I will get back to you soon."}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-xl bg-[var(--accent)] text-[#021024] font-bold text-sm hover:bg-opacity-90 transition-all disabled:opacity-50"
              >
                {status === "loading"
                  ? isFa ? "در حال ارسال..." : "Sending..."
                  : isFa ? "ارسال پیام" : "Send Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}