"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingMobileBar from "@/components/FloatingMobileBar";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

const Projects = dynamic(() => import("@/components/Projects"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));

export default function PortfolioContainer() {
  const { theme, setTheme, lang, setLang } = useThemeLanguage();
  const isFa = lang === "fa";

  return (
    <div
      data-theme={theme}
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isFa ? "rtl" : "ltr"
      }`}
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
      dir={isFa ? "rtl" : "ltr"}
    >
      <Header
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />
      
      <main className="space-y-12 sm:space-y-16">
        {/* Formal Typographic Hero */}
        <Hero lang={lang} />

        {/* Core Services Section */}
        <div className="section-deferred">
          <Services lang={lang} />
        </div>

        {/* Featured Case Studies & Projects */}
        <div className="section-deferred">
          <Projects lang={lang} />
        </div>

        {/* Client Reviews & Verified Outcomes */}
        <div className="section-deferred">
          <Testimonials lang={lang} />
        </div>

        {/* Frequently Asked Questions */}
        <div className="section-deferred">
          <FAQ lang={lang} />
        </div>

        {/* Minimal Executive Quick CTA Banner */}
        <div className="section-deferred">
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="architectural-card p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <span className="cad-corner-tl" aria-hidden="true">+</span>
              <span className="cad-corner-tr font-mono" aria-hidden="true">DISPATCH//Q1</span>

              <div className="telemetry-pill mx-auto mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isFa ? "آماده پذیرش و مهندسی پروژه" : "SYSTEM_READY // INITIATE_PROJECT"}</span>
              </div>

              <h2 className="text-xl sm:text-3xl font-black text-[var(--text-primary)]">
                {isFa ? "آماده‌اید پروژه خود را با استاندارد جهانی پیاده‌سازی کنید؟" : "Ready to Engineer Your Next Digital Milestone?"}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
                {isFa
                  ? "برای مشاوره مستقیم فنی، برآورد دقیق هزینه و زمان تحویل، یا بررسی معماری سیستم با من در تماس باشید."
                  : "Get in touch for direct consultation, precise timeline estimation, and architecture planning."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="btn-border-beam tactile-btn w-full sm:w-auto px-8 py-3.5 font-bold text-xs text-[var(--text-primary)] active:scale-95"
                >
                  {isFa ? "درخواست مشاوره و شروع پروژه" : "Book Technical Consultation"}
                </Link>
                <Link
                  href="/estimator"
                  className="tactile-btn w-full sm:w-auto px-7 py-3.5 text-xs font-bold text-[var(--text-primary)]"
                >
                  {isFa ? "محاسبه آنلاین هزینه" : "Interactive Cost Estimator"}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer lang={lang} />
      <FloatingMobileBar lang={lang} />
    </div>
  );
}
