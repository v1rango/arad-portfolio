"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/lib/constants";

interface TestimonialsProps {
  lang: "fa" | "en";
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const isFa = lang === "fa";

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border)]/20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            {isFa ? "نظرات و رضایت همکاران" : "Testimonials & Reviews"}
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            {isFa
              ? "تجربه همکاری کارفرمایان و مدیران فنی با پروژه‌های توسعه داده شده."
              : "Feedback from tech leads and partners on project delivery and performance."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] flex flex-col justify-between hover:border-[var(--accent)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>

                <p className="text-xs text-gray-200 leading-relaxed italic mb-6">
                  "{isFa ? item.commentFa : item.commentEn}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]/30">
                <div className="w-9 h-9 rounded-full bg-[var(--accent)] text-[#021024] font-bold flex items-center justify-center text-xs">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{item.name}</h3>
                  <p className="text-[11px] text-gray-400">
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