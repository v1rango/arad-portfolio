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
import { IconType } from "react-icons";

interface SkillsProps {
  lang: "fa" | "en";
}

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "hover:text-white" },
  TypeScript: { icon: SiTypescript, color: "hover:text-[#3178C6]" },
  MongoDB: { icon: SiMongodb, color: "hover:text-[#47A248]" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "hover:text-[#06B6D4]" },
  "Framer Motion": { icon: SiFramer, color: "hover:text-[#0055FF]" },
  Django: { icon: SiDjango, color: "hover:text-[#092E20]" },
  "Node.js": { icon: SiNodedotjs, color: "hover:text-[#5FA04E]" },
  JavaScript: { icon: SiJavascript, color: "hover:text-[#F7DF1E]" },
  Bootstrap: { icon: SiBootstrap, color: "hover:text-[#7952B3]" },
  Python: { icon: SiPython, color: "hover:text-[#3776AB]" },
};

export default function Skills({ lang }: SkillsProps) {
  const isFa = lang === "fa";

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--accent)] to-blue-400 bg-clip-text text-transparent">
          {isFa ? "مهارت‌ها و تکنولوژی‌ها" : "Skills & Technologies"}
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base">
          {isFa
            ? "ابزارها و فریم‌ورک‌هایی که روزانه در پروژه‌ها استفاده می‌کنم"
            : "Tools and frameworks I work with daily"}
        </p>
      </div>

      {/* مهارت‌های اصلی */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-gray-300 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
          {isFa ? "مهارت‌های اصلی (Main Stack)" : "Core Stack"}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {PERSONAL_DATA.mainSkills.map((skill) => {
            const skillConfig = skillIcons[skill.name];
            const Icon = skillConfig?.icon;

            return (
              <div
                key={skill.name}
                className="group relative p-4 rounded-xl bg-[#031738]/60 border border-[var(--border)]/40 hover:border-[var(--accent)]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent)]/10 flex flex-col items-center gap-3 text-center"
              >
                {Icon && (
                  <Icon
                    className={`w-8 h-8 text-gray-400 transition-colors duration-300 ${skillConfig.color}`}
                  />
                )}
                <span className="font-semibold text-sm text-gray-200 group-hover:text-white">
                  {skill.name}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-mono border border-[var(--accent)]/20">
                  {skill.level}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* مهارت‌های فرعی و ابزارها */}
      <div>
        <h3 className="text-lg font-semibold text-gray-300 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          {isFa ? "مهارت‌های فرعی و ابزارها" : "Secondary Skills & Tools"}
        </h3>
        <div className="flex flex-wrap gap-3">
          {PERSONAL_DATA.secondarySkills.map((skillName) => {
            const skillConfig = skillIcons[skillName];
            const Icon = skillConfig?.icon;

            return (
              <div
                key={skillName}
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#031738]/40 border border-[var(--border)]/30 hover:border-[var(--accent)]/40 hover:bg-[#031738] transition-all duration-300"
              >
                {Icon && (
                  <Icon
                    className={`w-5 h-5 text-gray-400 transition-colors duration-300 ${
                      skillConfig?.color || ""
                    }`}
                  />
                )}
                <span className="text-sm text-gray-300 group-hover:text-white font-medium">
                  {skillName}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}