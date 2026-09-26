"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [useJsFallback, setUseJsFallback] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // اگر مرورگر از انیمیشن مدرن و بدون هزینه CSS پشتیبانی کند، نیازی به لیسنر JS نیست
    if (typeof CSS !== "undefined" && CSS.supports && CSS.supports("animation-timeline", "scroll()")) {
      return;
    }

    setUseJsFallback(true);
    let ticking = false;

    const updateScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    // فعال‌سازی لیسنر پس از لود اولیه جهت عدم ایجاد Forced Reflow در بدو ورود
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        className={`h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)] ${
          useJsFallback ? "transition-all duration-75 ease-out" : "css-scroll-progress w-full"
        }`}
        style={useJsFallback ? { width: `${scrollProgress}%` } : undefined}
      />
    </div>
  );
}

