"use client";

import { motion } from "framer-motion";
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
import { IconType } from "react-icons";

interface SkillsProps {
  lang: "fa" | "en";
}

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "group-hover:text-white" },
  TypeScript: { icon: SiTypescript, color: "group-hover:text-[#3178C6]" },
  MongoDB: { icon: SiMongodb, color: "group-hover:text-[#47A248]" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
  "Framer Motion": { icon: SiFramer, color: "group-hover:text-[#0055FF]" },
  Django: { icon: SiDjango, color: "group-hover:text-[#092E20]" },
  "Node.js": { icon: SiNodedotjs, color: "group-hover:text-[#5FA04E]" },
  JavaScript: { icon: SiJavascript, color: "group-hover:text-[#F7DF1E]" },
  Bootstrap: { icon: SiBootstrap, color: "group-hover:text-[#7952B3]" },
  Python: { icon: SiPython, color: "group-hover:text-[#3776AB]" },
};

export default function Skills({ lang }: SkillsProps) {
  const isFa = lang === "fa";

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-3" style={{ color: "var(--text-primary)" }}>
          {isFa ? "ماتریس مهارت‌ها و معماری ارزش‌آفرینی" : "Skill Matrix & Core Architecture"}
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
          {isFa
            ? "ترکیبی دقیق از ابزارهای سطح اول جهانی برای خلق وب‌سایت‌هایی که هرگز قطع نمی‌شوند و در ثانیه‌ای لود می‌شوند."
            : "An engineered combination of high-speed full-stack development and search/AI generative optimization."}
        </p>
      </div>

      {/* شبکه Bento Grid مدرن */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* جعبه اول (بزرگ): استک اصلی توسعه وب */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="md:col-span-2 bento-card p-6 sm:p-8 flex flex-col justify-between group hover:border-[var(--accent)]"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse"></span>
                <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                  {isFa ? "هسته اصلی توسعه نرم‌افزار و سرعت (Core Stack)" : "Core Development Stack"}
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full font-mono border"
                style={{
                  backgroundColor: "var(--accent-subtle)",
                  color: "var(--accent)",
                  borderColor: "var(--border-hover)",
                }}
              >
                Next.js 16 + React 19
              </span>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {isFa
                ? "توسعه وب‌اپلیکیشن‌های ماژولار و سئو-محور با تمرکز بر رندر ترکیبی سرور (RSC)، کشینگ بهینه در حافظه لبه و بدون باگ‌های رایج حافظه."
                : "Building modular, SEO-first web applications using React Server Components, efficient edge caching, and zero memory leaks."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PERSONAL_DATA.mainSkills.map((skill) => {
                const config = skillIcons[skill.name];
                const Icon = config?.icon;
                return (
                  <div
                    key={skill.name}
                    className="group p-3 rounded-xl border flex items-center gap-3 transition-all hover:border-[var(--accent)]"
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {Icon && <Icon className={`w-6 h-6 text-gray-400 transition-colors ${config.color}`} />}
                    <div className="text-left rtl:text-right overflow-hidden">
                      <div className="text-xs font-semibold flex items-center justify-between gap-1" style={{ color: "var(--text-primary)" }}>
                        <span>{skill.name}</span>
                        <span className="text-[10px] font-mono text-[var(--accent)]">{skill.level}</span>
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
        </motion.div>

        {/* جعبه دوم: تخصص ویژه هوش مصنوعی (AEO & GEO) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bento-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[var(--accent)]"
          style={{
            background: "linear-gradient(135deg, var(--accent-subtle) 0%, var(--bg-surface) 60%)",
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]"></span>
              <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>
                {isFa ? "سئو برای موتورهای هوش مصنوعی (AEO & GEO)" : "AI Search Engine Readiness"}
              </h3>
            </div>
            <p className="text-xs leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {isFa
                ? "کدنویسی ساختاریافته به نحوی که وقتی کاربران در ChatGPT، Perplexity یا کلود سوالی می‌پرسند، وب‌سایت شما به عنوان پاسخ مستقیم معرفی شود."
                : "Tailoring semantic structures for ChatGPT, Perplexity, and Claude using entity graphs and llms.txt standard."}
            </p>

            <ul className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
              <li className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-bold">✓</span>
                {isFa ? "اسکیماهای چندلایه برای درک ربات‌های هوش مصنوعی" : "Schema.org Multi-Entity Graph"}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-bold">✓</span>
                {isFa ? "استاندارد رسمی بین‌المللی llms.txt" : "Official llms.txt Compliance"}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--accent)] font-bold">✓</span>
                {isFa ? "پاسخ مستقیم و نقل‌قول منبع (Featured Snippets)" : "Direct Citation Architecture"}
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-mono"
            style={{
              borderColor: "var(--border)",
              color: "var(--accent)",
            }}
          >
            <span>LLM Crawlers Allowed</span>
            <span>100% Verified</span>
          </div>
        </motion.div>

        {/* جعبه سوم: بهینه‌سازی سرعت و فریم‌ریت موبایل */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bento-card p-6 sm:p-8 flex flex-col justify-between group hover:border-[var(--accent)]"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>
                {isFa ? "اجرای بی‌نهایت روان ۶۰FPS در موبایل" : "60 FPS Mobile UX"}
              </h3>
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              {isFa
                ? "حذف هرگونه کُندی، پرش صفحه یا لگ، تا کاربر حتی با گوشی‌های معمولی و ارزان‌قیمت حسی مثل کار با اپلیکیشن‌های آیفون را تجربه کند."
                : "Zero layout thrashing and pure GPU composited transforms, ensuring smooth 60fps on mid-tier devices."}
            </p>
          </div>

          <div className="p-3 rounded-lg border text-xs font-mono space-y-1"
            style={{
              backgroundColor: "var(--bg-elevated)",
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <div className="flex justify-between">
              <span>{isFa ? "سرعت لود اولیه محتوا (LCP):" : "LCP (Largest Contentful Paint):"}</span>
              <span className="text-[var(--accent)] font-bold">&lt; 0.8s</span>
            </div>
            <div className="flex justify-between">
              <span>{isFa ? "ثبات صفحه بدون پرش (CLS):" : "CLS (Cumulative Layout Shift):"}</span>
              <span className="text-[var(--accent)] font-bold">0.00</span>
            </div>
          </div>
        </motion.div>

        {/* جعبه چهارم (بزرگ): سایر تکنولوژی‌ها و ابزارهای بک‌اند */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="md:col-span-2 bento-card p-6 sm:p-8 flex flex-col justify-between group hover:border-[var(--accent)]"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
              <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>
                {isFa ? "اکوسیستم پایداری داده‌ها و زیرساخت بک‌اند" : "Ecosystem & Backend Infrastructure"}
              </h3>
            </div>

            <p className="text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
              {isFa
                ? "بانک‌های اطلاعاتی امن و زیرساخت‌های سروری که در زمان کمپین‌ها و حراجی‌های پربازدید، سایت شما هرگز کرش نکرده یا قطع نشود."
                : "Proficiency in complementary frameworks and tools for scalable APIs and rock-solid database uptime."}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {PERSONAL_DATA.secondarySkills.map((skillName) => {
                const config = skillIcons[skillName];
                const Icon = config?.icon;
                return (
                  <div
                    key={skillName}
                    className="group flex items-center gap-2 px-3.5 py-2 rounded-lg border transition-all hover:border-[var(--accent)]"
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {Icon && (
                      <Icon className={`w-4 h-4 text-gray-400 transition-colors ${config?.color || ""}`} />
                    )}
                    <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>
                      {skillName}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t text-xs"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
            }}
          >
            {isFa
              ? "امنیت اتصال به درگاه پرداخت بانکی، حفظ اطلاعات کاربران و احراز هویت پیامکی بدون قطعی."
              : "Complete RESTful APIs architecture, secure DB pooling, and payment gateway integrations."}
          </div>
        </motion.div>

      </div>
    </section>
  );
}