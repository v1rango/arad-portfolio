"use client";

import React from "react";
import { FiSliders } from "react-icons/fi";

export interface ThemeOption {
  id: string;
  nameFa: string;
  nameEn: string;
  colors: string[]; // 2-3 color hexes for preview circles
  descriptionFa?: string;
  descriptionEn?: string;
}

interface ThemeSwitcherProps {
  themes: ThemeOption[];
  activeTheme: string;
  onThemeChange: (themeId: string) => void;
  lang: "fa" | "en";
}

export default function ThemeSwitcher({
  themes,
  activeTheme,
  onThemeChange,
  lang,
}: ThemeSwitcherProps) {
  const isFa = lang === "fa";

  return (
    <div className="flex flex-wrap items-center gap-2 p-1.5 sm:p-2 rounded-2xl border backdrop-blur-md transition-all shadow-lg"
      style={{
        backgroundColor: "var(--bg-elevated)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-[var(--accent)] border-l rtl:border-l-0 rtl:border-r"
        style={{ borderColor: "var(--border)" }}
      >
        <FiSliders className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">
          {isFa ? "انتخاب تم نمایشی:" : "Select Theme:"}
        </span>
      </div>

      <div className="flex items-center gap-1.5 flex-wrap">
        {themes.map((theme) => {
          const isActive = theme.id === activeTheme;
          return (
            <button
              key={theme.id}
              onClick={() => onThemeChange(theme.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all relative ${
                isActive
                  ? "shadow-md scale-105"
                  : "opacity-75 hover:opacity-100 hover:scale-102"
              }`}
              style={{
                backgroundColor: isActive ? "var(--bg-surface)" : "transparent",
                border: isActive ? "1px solid var(--accent)" : "1px solid transparent",
                color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
              }}
              title={isFa ? theme.descriptionFa : theme.descriptionEn}
            >
              {/* Color dots preview */}
              <div className="flex items-center -space-x-1 rtl:space-x-reverse">
                {theme.colors.map((c, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full ring-1 ring-black/20"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>

              <span>{isFa ? theme.nameFa : theme.nameEn}</span>

              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
