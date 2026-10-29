"use client";

import { TESTIMONIALS_DATA } from "@/lib/constants";
import { FiMessageSquare } from "react-icons/fi";

interface TestimonialsProps {
  lang: "fa" | "en";
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const isFa = lang === "fa";

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="telemetry-pill mb-3">
            <FiMessageSquare className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>{isFa ? "بازخورد رسمی مدیران فنی و کارفرمایان" : "CLIENT_TELEMETRY // VERIFIED_REVIEWS"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {isFa ? "نظرات کارفرمایان و همکاران فنی" : "Executive Testimonials & Verified Reviews"}
          </h2>
          <p className="text-xs sm:text-sm max-w-2xl mx-auto mt-2 text-[var(--text-secondary)]">
            {isFa
              ? "بازخورد مدیران محصول، مدیران مارکتینگ و توسعه‌دهندگانی که افتخار همکاری با آن‌ها را داشته‌ام."
              : "Feedback from tech leads, founders, and product directors on delivered architectures."}
          </p>
        </div>

        {/* Testimonials Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, index) => {
            const displayName = isFa ? (item.nameFa || item.name) : (item.nameEn || item.name);
            const displayRole = isFa ? (item.roleFa || item.role) : (item.roleEn || item.role);
            const displayCompany = isFa ? (item.companyFa || item.company) : (item.companyEn || item.company);
            const initialChar = displayName.charAt(0);

            return (
              <div
                key={item.id}
                className="architectural-card p-6 flex flex-col justify-between group relative"
              >
                {/* CAD Technical Marks */}
                <span className="cad-corner-tl">+</span>
                <span className="cad-corner-tr font-mono">{`REV//0${index + 1}`}</span>

                <div>
                  <div className="flex items-center justify-between mb-4 mt-2">
                    <div className="flex items-center gap-1 text-zinc-300">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <span key={i} className="text-xs">★</span>
                      ))}
                    </div>
                    <span
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]"
                    >
                      {isFa ? "تأیید شده" : "VERIFIED"}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed italic mb-6 text-[var(--text-primary)]">
                    &quot;{isFa ? item.commentFa : item.commentEn}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] font-bold font-mono flex items-center justify-center text-sm shadow-sm group-hover:border-[var(--text-primary)] transition-colors">
                    {initialChar}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)]">
                      {displayName}
                    </h3>
                    <p className="text-[11px] text-[var(--text-secondary)] font-mono">
                      {displayRole} • <span className="font-semibold text-[var(--text-primary)]">{displayCompany}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}