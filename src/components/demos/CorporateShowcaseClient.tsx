"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitcher, { ThemeOption } from "@/components/demos/ThemeSwitcher";
import ShowcaseGuide from "@/components/demos/ShowcaseGuide";
import SpeedGauge from "@/components/demos/SpeedGauge";
import { PERSONAL_DATA } from "@/lib/constants";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiCalendar,
  FiUser,
  FiShield,
  FiStar,
  FiArrowUpRight,
  FiPhoneCall,
  FiChevronLeft,
} from "react-icons/fi";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const CORPORATE_THEMES: ThemeOption[] = [
  {
    id: "slate",
    nameFa: "رسمی و مینیمال (Executive Slate)",
    nameEn: "Executive Slate",
    colors: ["#0f172a", "#334155", "#38bdf8"],
    descriptionFa: "مناسب برای دفاتر حقوقی، شرکت‌های بازرگانی و هلدینگ‌های بین‌المللی",
    descriptionEn: "Tailored for law firms, trading corporations, and corporate holdings",
  },
  {
    id: "gold",
    nameFa: "سرمه‌ای و طلایی لوکس (Royal Gold)",
    nameEn: "Royal Gold",
    colors: ["#0a192f", "#1e3a8a", "#f59e0b"],
    descriptionFa: "مناسب برای کلینیک‌های زیبایی و پزشکی، سرمایه‌گذاری و برندهای لوکس",
    descriptionEn: "Tailored for luxury medical clinics, private equity, and high-end services",
  },
  {
    id: "tech",
    nameFa: "مدرن تکنولوژی (Cyber Tech)",
    nameEn: "Cyber Tech",
    colors: ["#090a0f", "#10b981", "#06b6d4"],
    descriptionFa: "مناسب برای استارتاپ‌ها، شرکت‌های هوش مصنوعی و فین‌تک",
    descriptionEn: "Tailored for tech startups, AI ventures, and FinTech platforms",
  },
];

export default function CorporateShowcaseClient() {
  const [activeTheme, setActiveTheme] = useState("gold");
  const [bookingStep, setBookingStep] = useState<"form" | "confirmed">("form");
  const [selectedService, setSelectedService] = useState("پوست و لیزر");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("امروز - ساعت ۱۸:۳۰");

  // Dynamic theme colors
  const themeStyles = {
    slate: {
      bg: "bg-slate-950",
      cardBg: "bg-slate-900/90",
      border: "border-slate-800",
      accent: "text-sky-400",
      accentBg: "bg-sky-500",
      accentBorder: "border-sky-500/40",
      pillBg: "bg-sky-500/10 text-sky-300 border-sky-500/20",
      gradient: "from-sky-500/20 to-transparent",
    },
    gold: {
      bg: "bg-[#060c18]",
      cardBg: "bg-[#0b1528]/90",
      border: "border-amber-900/30",
      accent: "text-amber-400",
      accentBg: "bg-amber-500",
      accentBorder: "border-amber-500/40",
      pillBg: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      gradient: "from-amber-500/20 to-transparent",
    },
    tech: {
      bg: "bg-[#090a0f]",
      cardBg: "bg-[#11141f]/90",
      border: "border-emerald-900/30",
      accent: "text-emerald-400",
      accentBg: "bg-emerald-500",
      accentBorder: "border-emerald-500/40",
      pillBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      gradient: "from-emerald-500/20 to-transparent",
    },
  }[activeTheme as "slate" | "gold" | "tech"] || {
    bg: "bg-[#060c18]",
    cardBg: "bg-[#0b1528]/90",
    border: "border-amber-900/30",
    accent: "text-amber-400",
    accentBg: "bg-amber-500",
    accentBorder: "border-amber-500/40",
    pillBg: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    gradient: "from-amber-500/20 to-transparent",
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setBookingStep("confirmed");
  };

  return (
    <div className="space-y-16">
      {/* Top Floating Control Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] shadow-xl">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border)] text-xs font-semibold hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
          >
            <FiArrowRight className="w-4 h-4 rtl:rotate-180" />
            <span>بازگشت به سایت اصلی</span>
          </Link>
          <span className="text-xs text-[var(--text-muted)] hidden md:inline">
            طراحی اختصاصی سایت شرکتی و کلینیک‌ها
          </span>
        </div>

        <ThemeSwitcher
          themes={CORPORATE_THEMES}
          activeTheme={activeTheme}
          onThemeChange={setActiveTheme}
          lang="fa"
        />
      </div>

      {/* Showcase Onboarding Guide */}
      <ShowcaseGuide
        nicheTitleFa="طراحی سایت شرکتی، هلدینگ‌ها و کلینیک‌های زیبایی"
        nicheTitleEn="Corporate, Law Firms & Medical Aesthetic Clinics"
        lang="fa"
        keyFeaturesFa={[
          "سرعت لود ۰.۸ ثانیه و بدون لودینگ سفید",
          "فرم رزرواسیون آنلاین بدون رفرش صفحه",
          "سئو تضمینی برای کلمات کلیدی درآمدزا",
        ]}
        keyFeaturesEn={[
          "Sub-second load time, zero white flashes",
          "Seamless online appointment booking",
          "Engineered for high-ticket client acquisition",
        ]}
      />

      {/* LIVE INTERACTIVE DEMO CONTAINER */}
      <div id="demo-section" className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <h2 className="text-lg font-black text-[var(--text-primary)]">
              دموی زنده تعاملی (تست کنید)
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--border-hover)]">
            TEMPLATES: {activeTheme.toUpperCase()}
          </span>
        </div>

        {/* The Live Interactive Website Preview Window */}
        <div
          className={`rounded-3xl border ${themeStyles.border} ${themeStyles.bg} transition-all duration-500 overflow-hidden shadow-2xl relative`}
        >
          {/* Mock Browser Header Bar */}
          <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-gray-400">
              https://demo.novin-clinic.aradvafaee.ir
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>0.78s</span>
            </div>
          </div>

          {/* Demo Website Interior */}
          <div className="p-6 sm:p-10 space-y-12 text-white">
            {/* Demo Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg ${themeStyles.accentBg} text-black shadow-lg`}
                >
                  NC
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">
                    {activeTheme === "gold"
                      ? "کلینیک فوق‌تخصصی رویال نوین"
                      : activeTheme === "slate"
                      ? "هلدینگ بین‌المللی ارس"
                      : "آزمایشگاه هوش مصنوعی سیناپس"}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {activeTheme === "gold"
                      ? "مرکز جامع مراقبت و زیبایی پوست"
                      : activeTheme === "slate"
                      ? "خدمات جامع مشاوره سرمایه‌گذاری و حقوقی"
                      : "راهکارهای سازمانی پردازش داده و AI"}
                  </p>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-6 text-xs text-gray-300">
                <span className="hover:text-white cursor-pointer">صفحه نخست</span>
                <span className="hover:text-white cursor-pointer">خدمات تخصصی</span>
                <span className="hover:text-white cursor-pointer">پزشکان متخصص</span>
                <span className="hover:text-white cursor-pointer">نتایج مراجعین</span>
              </div>

              <a
                href="#booking-box"
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-transform hover:scale-105 ${themeStyles.accentBg} text-black`}
              >
                رزرو وقت آنلاین
              </a>
            </div>

            {/* Demo Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
              <div className="lg:col-span-7 space-y-6">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${themeStyles.pillBg}`}
                >
                  <FiStar className="w-3.5 h-3.5 fill-current" />
                  <span>
                    {activeTheme === "gold"
                      ? "دارای بالاترین درجه رضایت مراجعین در سال ۱۴۰۴"
                      : "مشاور ارشد بیش از ۵۰ شرکت معتبر بین‌المللی"}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight text-white">
                  {activeTheme === "gold" ? (
                    <>
                      تجربه زیبایی به سبک استاندارد،{" "}
                      <span className={themeStyles.accent}>بدون دردسر و با رزرو آنی</span>
                    </>
                  ) : activeTheme === "slate" ? (
                    <>
                      تضمین امنیت حقوقی و مالی سرمایه شما با{" "}
                      <span className={themeStyles.accent}>برترین تیم متخصصان</span>
                    </>
                  ) : (
                    <>
                      تحول دیجیتال و پیاده‌سازی هوش مصنوعی{" "}
                      <span className={themeStyles.accent}>با زیرساخت‌های نسل جدید</span>
                    </>
                  )}
                </h1>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
                  {activeTheme === "gold"
                    ? "در کلینیک رویال نوین، نوبت‌دهی بدون اتلاف وقت و با بهره‌گیری از پیشرفته‌ترین تجهیزات پزشکی روز دنیا انجام می‌پذیرد."
                    : "پلتفرمی با قابلیت‌های انحصاری، سرعت باورنکردنی و امنیت سایبری در تراز شرکت‌های فورچون ۵۰۰."}
                </p>

                {/* Social Proof Stats */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className={`p-3 rounded-2xl border ${themeStyles.border} ${themeStyles.cardBg}`}>
                    <span className={`block text-xl font-black ${themeStyles.accent}`}>
                      ۱۵۰۰+
                    </span>
                    <span className="text-[11px] text-gray-400">مراجع موفق</span>
                  </div>
                  <div className={`p-3 rounded-2xl border ${themeStyles.border} ${themeStyles.cardBg}`}>
                    <span className={`block text-xl font-black ${themeStyles.accent}`}>
                      ۹۹.۸٪
                    </span>
                    <span className="text-[11px] text-gray-400">رضایت مشتریان</span>
                  </div>
                  <div className={`p-3 rounded-2xl border ${themeStyles.border} ${themeStyles.cardBg}`}>
                    <span className={`block text-xl font-black ${themeStyles.accent}`}>
                      ۰.۸s
                    </span>
                    <span className="text-[11px] text-gray-400">سرعت رزرو</span>
                  </div>
                </div>
              </div>

              {/* Interactive Booking Module */}
              <div
                id="booking-box"
                className={`lg:col-span-5 p-6 rounded-3xl border ${themeStyles.border} ${themeStyles.cardBg} backdrop-blur-md shadow-2xl relative`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FiCalendar className={`w-4 h-4 ${themeStyles.accent}`} />
                    <h4 className="font-bold text-sm text-white">رزرو نوبت مشاوره آنلاین</h4>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    سیستم لایو
                  </span>
                </div>

                {bookingStep === "form" ? (
                  <form onSubmit={handleBooking} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] text-gray-300 mb-1">
                        انتخاب خدمت مورد نظر:
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="پوست و لیزر">لیزر و جوانسازی پوست</option>
                        <option value="تزریق فیلر و بوتاکس">تزریق فیلر و بوتاکس تخصصی</option>
                        <option value="مشاوره کاشت مو">مشاوره VIP کاشت مو و ابرو</option>
                        <option value="آنالیز هوشمند چهره">آنالیز سه‌بعدی و هوشمند چهره</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] text-gray-300 mb-1">نام و نام‌خانوادگی:</label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: دکتر علیرضا نادری"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-gray-300 mb-1">شماره تماس (جهت تایید):</label>
                      <input
                        type="tel"
                        required
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400 text-left"
                        dir="ltr"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className={`w-full py-2.5 rounded-xl font-bold text-xs transition-transform active:scale-95 ${themeStyles.accentBg} text-black shadow-lg flex items-center justify-center gap-1.5`}
                      >
                        <span>ثبت و تایید نوبت آنلاین</span>
                        <FiChevronLeft className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-[10px] text-gray-400 text-center">
                      🔒 ثبت اطلاعات با رمزنگاری سروری و ارسال آنی پیامک تایید
                    </p>
                  </form>
                ) : (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto text-xl animate-bounce">
                      <FiCheck />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">نوبت با موفقیت ثبت شد!</h4>
                      <p className="text-xs text-gray-300 mt-1">
                        آقای/خانم <span className="font-bold text-white">{clientName}</span>، پیامک تایید نوبت برای خدمت{" "}
                        <span className={themeStyles.accent}>{selectedService}</span> برای شماره {clientPhone} ارسال گردید.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setBookingStep("form");
                        setClientName("");
                        setClientPhone("");
                      }}
                      className="px-4 py-1.5 rounded-xl border border-white/20 text-xs text-gray-300 hover:text-white"
                    >
                      ثبت نوبت آزمایشی جدید
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Speed & ROI Benchmark Widget */}
      <SpeedGauge lang="fa" />

      {/* Why Choose Custom Next.js for Corporate */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
            <FiShield className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[var(--text-primary)]">
            امنیت در تراز سازمانی و بدون پلاگین
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            برخلاف وردپرس که به خاطر افزونه‌های کرک‌شده و نال مدام در معرض هک و باگ امنیتی است، سایت‌های اختصاصی ما به صورت کد ایزوله کامپایل شده و هیچ راه نفوذی ندارند.
          </p>
        </div>

        <div className="p-6 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center">
            <FiClock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[var(--text-primary)]">
            لود زیر ۰.۸ ثانیه برای حفظ اعتبار برند
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            یک مدیر یا پزشک متخصص نباید سایتی داشته باشد که مشتری ۵ ثانیه به صفحه سفید خیره شود. اعتبار و کلاس کاری شما با سرعت باز شدن سایت سنجیده می‌شود.
          </p>
        </div>

        <div className="p-6 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
            <FiUser className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[var(--text-primary)]">
            طراحی اختصاصی مطابق پرستیژ برند شما
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            هیچ قالب آماده‌ای نمی‌تواند حس لوکس و یونیک بودن بیزینس شما را منتقل کند. ما تک‌تک پیکسل‌ها، تایپوگرافی و هویت بصری را مختص شما خلق می‌کنیم.
          </p>
        </div>
      </div>

      {/* CTA Box for Corporate Clients */}
      <div className="p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-[var(--bg-surface)] text-center space-y-6 shadow-2xl relative overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          آماده‌اید وب‌سایت شرکتی یا کلینیک خود را به سطح اول بازار برسانید؟
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
          برای مشاوره اختصاصی، بررسی نیازمندی‌ها و استعلام زمان‌بندی پروژه، مستقیماً از طریق تلگرام یا تماس تلفنی با من در ارتباط باشید.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={PERSONAL_DATA.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl font-bold text-sm bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 flex items-center gap-2"
          >
            <FaTelegram className="w-5 h-5" />
            <span>مشاوره و سفارش در تلگرام</span>
          </a>
          <a
            href={`tel:${PERSONAL_DATA.socials.phone}`}
            className="px-6 py-3 rounded-2xl font-bold text-sm border border-white/20 bg-white/5 text-white transition-all hover:bg-white/10 flex items-center gap-2"
          >
            <FiPhoneCall className="w-4 h-4 text-emerald-400" />
            <span dir="ltr">{PERSONAL_DATA.socials.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
