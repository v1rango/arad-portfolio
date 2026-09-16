"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/lib/constants";

interface TestimonialsProps {
  lang: "fa" | "en";
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const isFa = lang === "fa";

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]/20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            {isFa ? "نظرات کارفرمایان و همکاران فنی" : "Testimonials & Partner Reviews"}
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            {isFa
              ? "بازخورد مدیران محصول، مدیران مارکتینگ و توسعه‌دهندگانی که افتخار همکاری با آن‌ها را داشته‌ام."
              : "Feedback from tech leads, founders, and marketing directors on delivered projects."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="bento-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border"
                    style={{
                      backgroundColor: "var(--accent-subtle)",
                      color: "var(--accent)",
                      borderColor: "var(--border-hover)",
                    }}
                  >
                    {isFa ? "تأیید شده" : "Verified"}
                  </span>
                </div>

                <p className="text-xs leading-relaxed italic mb-6" style={{ color: "var(--text-primary)" }}>
                  &quot;{isFa ? item.commentFa : item.commentEn}&quot;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{item.name}</h4>
                  <p className="text-[11px]" style={{ color: "var(--text-secondary)" }}>
                    {item.role} • {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}