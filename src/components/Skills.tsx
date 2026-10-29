"use client";

import { PERSONAL_DATA } from "@/lib/constants";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiDjango,
  SiNodedotjs,
  SiJavascript,
  SiBootstrap,
  SiPython,
} from "react-icons/si";
import { FiCpu, FiCheck } from "react-icons/fi";
import { IconType } from "react-icons";

interface SkillsProps {
  lang: "fa" | "en";
}

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "text-[var(--text-primary)]" },
  TypeScript: { icon: SiTypescript, color: "text-[var(--text-primary)]" },
  MongoDB: { icon: SiMongodb, color: "text-[var(--text-primary)]" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-[var(--text-primary)]" },
  "Framer Motion": { icon: SiFramer, color: "text-[var(--text-primary)]" },
  Django: { icon: SiDjango, color: "text-[var(--text-primary)]" },
  "Node.js": { icon: SiNodedotjs, color: "text-[var(--text-primary)]" },
  JavaScript: { icon: SiJavascript, color: "text-[var(--text-primary)]" },
  Bootstrap: { icon: SiBootstrap, color: "text-[var(--text-primary)]" },
  Python: { icon: SiPython, color: "text-[var(--text-primary)]" },
};

export default function Skills({ lang }: SkillsProps) {
  const isFa = lang === "fa";

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 border-t border-[var(--border)]">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="telemetry-pill">
          <span className="telemetry-pill-dot" />
          <FiCpu className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
          <span>{isFa ? "ماتریس فناوری و زیرساخت" : "Architecture & Tech Stack Matrix"}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[var(--text-primary)]">
          {isFa ? "مهندسی سیستم‌ها با استاندارد مقیاس‌پذیر جهانی" : "Production-Tested Engineering Stack"}
        </h2>

        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          {isFa
            ? "ترکیبی دقیق از مدرن‌ترین فریمورک‌ها برای خلق پلتفرم‌هایی بدون قطعی، با لود زیر ۰.۸ ثانیه و بیشترین بازدهی اقتصادی."
            : "Precision full-stack stack built for fault tolerance, sub-0.8s execution, and native AI engine discoverability."}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Core Stack Card */}
        <div className="md:col-span-2 architectural-card p-6 sm:p-8 flex flex-col justify-between group rounded-2xl relative">
          <div className="cad-corner-tl" />
          <div className="cad-corner-tr">STACK // CORE_RUNTIME</div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--text-primary)] animate-pulse" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  {isFa ? "هسته اصلی توسعه نرم‌افزار (Core Runtime)" : "Core Runtime Engine"}
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full font-mono border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold">
                Next.js 16 + React 19
              </span>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed mb-6 text-[var(--text-secondary)]">
              {isFa
                ? "توسعه وب‌اپلیکیشن‌های ماژولار و سئو-محور با تمرکز بر رندر ترکیبی سرور (RSC)، کشینگ بهینه در حافظه لبه و بدون باگ‌های رایج حافظه."
                : "Modular, SEO-first architecture powered by React Server Components, aggressive edge caching, and zero memory leaks."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PERSONAL_DATA.mainSkills.map((skill) => {
                const config = skillIcons[skill.name];
                const Icon = config?.icon;
                return (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center gap-3 transition-all hover:border-[var(--text-primary)]"
                  >
                    {Icon && (
                      <Icon
                        className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors flex-shrink-0"
                        title={skill.name}
                        aria-label={skill.name}
                      />
                    )}
                    <div className="text-left rtl:text-right overflow-hidden flex-1">
                      <div className="text-xs font-bold flex items-center justify-between gap-1 text-[var(--text-primary)]">
                        <span>{skill.name}</span>
                        <span className="text-[10px] font-mono text-[var(--text-muted)]">{skill.level}</span>
                      </div>
                      {isFa && skill.simpleFa && (
                        <div className="text-[10px] text-[var(--text-secondary)] mt-0.5 truncate">
                          {skill.simpleFa}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* AI & AEO Card */}
        <div className="architectural-card p-6 sm:p-8 flex flex-col justify-between relative rounded-2xl">
          <div className="cad-corner-tl" />
          <div className="cad-corner-tr">AEO // KNOWLEDGE_GRAPH</div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--text-primary)]" />
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                {isFa ? "سئو برای موتورهای هوش مصنوعی (AEO & GEO)" : "Generative Engine Optimization"}
              </h3>
            </div>
            <p className="text-xs leading-relaxed mb-6 text-[var(--text-secondary)]">
              {isFa
                ? "کدنویسی ساختاریافته به نحوی که مدل‌های زبانی ChatGPT، Perplexity و Claude داده‌های شما را به عنوان پاسخ مستقیم نقل کنند."
                : "Semantic JSON-LD graphs and llms.txt endpoints engineered for citation authority in ChatGPT, Perplexity, and Claude."}
            </p>

            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] font-mono">
              <li className="flex items-center gap-2">
                <FiCheck className="w-3.5 h-3.5 text-[var(--text-primary)] flex-shrink-0" />
                <span>{isFa ? "اسکیماهای چندلایه Schema.org" : "Schema.org Multi-Entity Graph"}</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="w-3.5 h-3.5 text-[var(--text-primary)] flex-shrink-0" />
                <span>{isFa ? "استاندارد رسمی llms.txt و llms-full.txt" : "Standard llms.txt & llms-full.txt"}</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="w-3.5 h-3.5 text-[var(--text-primary)] flex-shrink-0" />
                <span>{isFa ? "کپسول‌های پاسخ مستقیم Featured Snippets" : "Direct Citation Answer Capsules"}</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-primary)] font-bold">
            <span>LLM CRAWLERS PERMITTED</span>
            <span>100% COMPLIANT</span>
          </div>
        </div>

        {/* 60 FPS Mobile UX Card */}
        <div className="architectural-card p-6 sm:p-8 flex flex-col justify-between rounded-2xl relative">
          <div className="cad-corner-tl" />
          <div className="cad-corner-tr">GPU // 60FPS_UX</div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--text-primary)]" />
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                {isFa ? "رندر ۶۰FPS با شتاب سخت‌افزاری GPU" : "60 FPS GPU-Accelerated UX"}
              </h3>
            </div>
            <p className="text-xs leading-relaxed mb-4 text-[var(--text-secondary)]">
              {isFa
                ? "حذف کامل کدهای مسدودکننده (Render-blocking) و انیمیشن‌های سنگین جاوااسکریپتی برای اجرای بی‌نقص حتی روی گوشی‌های میان‌رده."
                : "Zero JS runtime overhead for animations; hardware-composited GPU transforms deliver fluid 60fps across mobile browsers."}
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-mono space-y-1.5 text-[var(--text-secondary)]">
            <div className="flex justify-between">
              <span>{isFa ? "سرعت لود اولیه (LCP):" : "LCP Target:"}</span>
              <span className="text-[var(--text-primary)] font-bold">&lt; 0.8s</span>
            </div>
            <div className="flex justify-between">
              <span>{isFa ? "ثبات صفحه بدون پرش (CLS):" : "CLS Score:"}</span>
              <span className="text-[var(--text-primary)] font-bold">0.00</span>
            </div>
          </div>
        </div>

        {/* Backend & Data Integrity Card */}
        <div className="md:col-span-2 architectural-card p-6 sm:p-8 flex flex-col justify-between rounded-2xl relative">
          <div className="cad-corner-tl" />
          <div className="cad-corner-tr">BACKEND // CLOUD_RESILIENCE</div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--text-primary)]" />
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                {isFa ? "اکوسیستم پایداری داده‌ها و زیرساخت بک‌اند" : "Backend Resilience & Scale"}
              </h3>
            </div>

            <p className="text-xs mb-6 text-[var(--text-secondary)] leading-relaxed">
              {isFa
                ? "بانک‌های اطلاعاتی امن، مدیریت اتصالات و زیرساخت‌های سروری که در زمان کمپین‌ها و حراجی‌های سنگین هرگز متوقف نمی‌شوند."
                : "High-throughput APIs, connection pooling, and resilient microservices capable of sustaining traffic surges without degradation."}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {PERSONAL_DATA.secondarySkills.map((skillName) => {
                const config = skillIcons[skillName];
                const Icon = config?.icon;
                return (
                  <div
                    key={skillName}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] transition-all hover:border-[var(--text-primary)]"
                  >
                    {Icon && (
                      <Icon
                        className="w-4 h-4 text-[var(--text-secondary)]"
                        title={skillName}
                        aria-label={skillName}
                      />
                    )}
                    <span className="text-xs font-mono font-medium text-[var(--text-primary)]">
                      {skillName}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--border)] text-xs font-mono text-[var(--text-muted)]">
            {isFa
              ? "پشتیبانی از درگاه‌های پرداخت شتاب، وب‌هوک‌های بلادرنگ و احراز هویت دوعاملی سازمانی."
              : "Direct banking gateway integrations, webhook validation, and enterprise role-based security."}
          </div>
        </div>

      </div>
    </section>
  );
}