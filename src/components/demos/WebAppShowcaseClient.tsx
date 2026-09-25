"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitcher, { ThemeOption } from "@/components/demos/ThemeSwitcher";
import ShowcaseGuide from "@/components/demos/ShowcaseGuide";
import SpeedGauge from "@/components/demos/SpeedGauge";
import { PERSONAL_DATA } from "@/lib/constants";
import {
  FiArrowRight,
  FiActivity,
  FiDatabase,
  FiCpu,
  FiServer,
  FiSearch,
  FiPlay,
  FiCheckCircle,
  FiRefreshCw,
  FiLayers,
  FiBarChart2,
  FiArrowUpRight,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

const WEBAPP_THEMES: ThemeOption[] = [
  {
    id: "glass",
    nameFa: "شیشه‌ای مدرن (Glassmorphism)",
    nameEn: "Glassmorphism",
    colors: ["#090a0f", "#06b6d4", "#3b82f6"],
    descriptionFa: "افکت بلور و شیشه‌ای خیره‌کننده مناسب برای پلتفرم‌های تکنولوژی و کریپتو",
    descriptionEn: "Frosted glass aesthetic tailored for tech ventures and Web3 platforms",
  },
  {
    id: "saas",
    nameFa: "کلین و خطی (SaaS Linear)",
    nameEn: "SaaS Linear",
    colors: ["#0b0e14", "#10b981", "#6366f1"],
    descriptionFa: "مینیمال، سریع و تمیز به سبک مطرح‌ترین ابزارهای سیلیکون‌ولی مانند Linear و Stripe",
    descriptionEn: "Clean, ultra-crisp engineering aesthetic tailored for modern SaaS and internal CRMs",
  },
  {
    id: "terminal",
    nameFa: "ترمینال و مهندسی (Dark Terminal)",
    nameEn: "Dark Terminal",
    colors: ["#000000", "#22c55e", "#facc15"],
    descriptionFa: "کنتراست بالا و دانسیته متراکم داده مناسب برای داشبوردهای مانیتورینگ و فین‌تک",
    descriptionEn: "High-contrast, data-dense interface tailored for DevOps and financial monitoring",
  },
];

interface OrderRow {
  id: string;
  customer: string;
  type: string;
  amount: number;
  status: "موفق" | "در صف" | "بررسی";
  time: string;
}

const DEMO_ROWS: OrderRow[] = [
  { id: "ORD-9421", customer: "امیرحسین رضایی", type: "اشتراک سازمانی PRO", amount: 4800000, status: "موفق", time: "لحظاتی پیش" },
  { id: "ORD-9420", customer: "دکتر نیلوفر پارسا", type: "پکیج نوبت‌دهی آنلاین", amount: 2600000, status: "موفق", time: "۴ دقیقه پیش" },
  { id: "ORD-9419", customer: "شرکت بازرگانی آوید", type: "لایسنس اختصاصی API", amount: 8900000, status: "در صف", time: "۱۸ دقیقه پیش" },
  { id: "ORD-9418", customer: "استودیو معماری هیراد", type: "فضای ابری اختصاصی", amount: 1500000, status: "موفق", time: "۴۵ دقیقه پیش" },
  { id: "ORD-9417", customer: "برند پوشاک زروان", type: "افزونه پردازش بلک‌فرایدی", amount: 5200000, status: "بررسی", time: "۱ ساعت پیش" },
];

export default function WebAppShowcaseClient() {
  const [activeTheme, setActiveTheme] = useState("saas");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePeriod, setActivePeriod] = useState<"day" | "week" | "month">("month");
  const [isAutomating, setIsAutomating] = useState(false);
  const [automationStep, setAutomationStep] = useState(0);

  // Dynamic theme colors
  const themeStyles = {
    glass: {
      bg: "bg-[#090e17]/80 backdrop-blur-2xl",
      cardBg: "bg-white/[0.04] backdrop-blur-xl",
      border: "border-cyan-500/20",
      accent: "text-cyan-400",
      accentBg: "bg-cyan-500",
      accentBorder: "border-cyan-500/40",
      pillBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    },
    saas: {
      bg: "bg-[#0b0e14]",
      cardBg: "bg-[#111622]/90",
      border: "border-emerald-900/30",
      accent: "text-emerald-400",
      accentBg: "bg-emerald-500",
      accentBorder: "border-emerald-500/40",
      pillBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    },
    terminal: {
      bg: "bg-black",
      cardBg: "bg-zinc-950",
      border: "border-zinc-800",
      accent: "text-green-400 font-mono",
      accentBg: "bg-green-500",
      accentBorder: "border-green-500/40",
      pillBg: "bg-green-500/10 text-green-300 border-green-500/20 font-mono",
    },
  }[activeTheme as "glass" | "saas" | "terminal"] || {
    bg: "bg-[#0b0e14]",
    cardBg: "bg-[#111622]/90",
    border: "border-emerald-900/30",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-500",
    accentBorder: "border-emerald-500/40",
    pillBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  };

  const filteredRows = DEMO_ROWS.filter(
    (r) =>
      r.customer.includes(searchQuery) ||
      r.type.includes(searchQuery) ||
      r.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const triggerAutomationTest = () => {
    if (isAutomating) return;
    setIsAutomating(true);
    setAutomationStep(1);

    setTimeout(() => setAutomationStep(2), 600);
    setTimeout(() => setAutomationStep(3), 1200);
    setTimeout(() => {
      setAutomationStep(4);
      setTimeout(() => {
        setIsAutomating(false);
      }, 1500);
    }, 1800);
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
            طراحی وب‌اپلیکیشن، پنل مدیریت و SaaS
          </span>
        </div>

        <ThemeSwitcher
          themes={WEBAPP_THEMES}
          activeTheme={activeTheme}
          onThemeChange={setActiveTheme}
          lang="fa"
        />
      </div>

      {/* Showcase Onboarding Guide */}
      <ShowcaseGuide
        nicheTitleFa="طراحی وب‌اپلیکیشن اختصاصی، داشبورد مدیریت و اتوماسیون (Next.js + NestJS)"
        nicheTitleEn="Custom Web Applications, High-Performance Dashboards & Automation"
        lang="fa"
        keyFeaturesFa={[
          "معماری فوق‌العاده سبک با زمان پاسخ سرور ۴۲ میلی‌ثانیه",
          "جداول داده تعاملی با فیلتر آنی بدون رفرش",
          "خط لوله اتوماسیون تسک‌ها با ارسال لحظه‌ای پیامک و فاکتور",
        ]}
        keyFeaturesEn={[
          "Sub-50ms ultra-low latency server response time",
          "Zero-reload real-time data table filtering",
          "Automated background processing pipelines",
        ]}
      />

      {/* LIVE INTERACTIVE DEMO CONTAINER */}
      <div id="demo-section" className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <h2 className="text-lg font-black text-[var(--text-primary)]">
              دموی زنده پنل مدیریت و اتوماسیون (داشبورد و تسک را تست کنید)
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--border-hover)]">
            UI SYSTEM: {activeTheme.toUpperCase()}
          </span>
        </div>

        {/* Demo Window */}
        <div
          className={`rounded-3xl border ${themeStyles.border} ${themeStyles.bg} transition-all duration-500 overflow-hidden shadow-2xl relative`}
        >
          {/* Mock Browser Header */}
          <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-gray-400">
              https://dashboard.enterprise.aradvafaee.ir/analytics
            </div>
            <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>TTFB: 42ms</span>
            </div>
          </div>

          {/* Interior Dashboard */}
          <div className="p-6 sm:p-8 space-y-8 text-white">
            {/* Top Dashboard Nav */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <FiLayers className={`w-5 h-5 ${themeStyles.accent}`} />
                  <span>مرکز کنترل و اتوماسیون کسب‌و‌کار</span>
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  پایش لحظه‌ای رویدادها، پردازش تراکنش‌ها و خط لوله ابری
                </p>
              </div>

              {/* Time Period Selector */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10 self-start sm:self-auto">
                <button
                  onClick={() => setActivePeriod("day")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activePeriod === "day"
                      ? `${themeStyles.accentBg} text-black font-bold`
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  ۲۴ ساعت گذشته
                </button>
                <button
                  onClick={() => setActivePeriod("week")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activePeriod === "week"
                      ? `${themeStyles.accentBg} text-black font-bold`
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  هفته جاری
                </button>
                <button
                  onClick={() => setActivePeriod("month")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activePeriod === "month"
                      ? `${themeStyles.accentBg} text-black font-bold`
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  ماهانه
                </button>
              </div>
            </div>

            {/* Live KPI Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className={`p-5 rounded-2xl border ${themeStyles.border} ${themeStyles.cardBg} space-y-2`}>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>درآمد پردازش‌شده</span>
                  <FiBarChart2 className={`w-4 h-4 ${themeStyles.accent}`} />
                </div>
                <div className="text-2xl font-black font-mono text-white">
                  {activePeriod === "day" ? "۲۳,۵۰۰,۰۰۰" : activePeriod === "week" ? "۱۴۸,۲۰۰,۰۰۰" : "۶۸۴,۰۰۰,۰۰۰"} <span className="text-xs font-sans text-gray-400">تومان</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  ↑ ۱۸.۴٪ نسبت به دوره قبل
                </span>
              </div>

              <div className={`p-5 rounded-2xl border ${themeStyles.border} ${themeStyles.cardBg} space-y-2`}>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>زمان پاسخ سرور (TTFB)</span>
                  <FiZap className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-2xl font-black font-mono text-emerald-400">
                  ۴۲ میلی‌ثانیه
                </div>
                <span className="text-[11px] text-gray-400 font-mono">
                  معماری Edge Cache کلودفلر
                </span>
              </div>

              <div className={`p-5 rounded-2xl border ${themeStyles.border} ${themeStyles.cardBg} space-y-2`}>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>پایداری آپ‌تایم (Uptime)</span>
                  <FiServer className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-black font-mono text-white">
                  ۹۹.۹۹٪
                </div>
                <span className="text-[11px] text-emerald-400 font-mono">
                  بدون حتی ۱ دقیقه قطعی در سال
                </span>
              </div>

              <div className={`p-5 rounded-2xl border ${themeStyles.border} ${themeStyles.cardBg} space-y-2`}>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>اتوماسیون‌های موفق</span>
                  <FiActivity className={`w-4 h-4 ${themeStyles.accent}`} />
                </div>
                <div className="text-2xl font-black font-mono text-white">
                  ۱۲,۴۹۱
                </div>
                <span className="text-[11px] text-emerald-400 font-mono">
                  ارسال پیامک و صدور آنی فاکتور
                </span>
              </div>
            </div>

            {/* Interactive Live Automation Visualizer Box */}
            <div className={`p-6 rounded-3xl border ${themeStyles.border} ${themeStyles.cardBg} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-2">
                    <FiCpu className={`w-4 h-4 ${themeStyles.accent}`} />
                    <span>تست زنده خط لوله اتوماسیون (Next.js Server Actions + Background Job)</span>
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    کلیک کنید تا ببینید سیستم چطور در کسر ثانیه ۴ مرحله کاری را خودکار انجام می‌دهد:
                  </p>
                </div>

                <button
                  onClick={triggerAutomationTest}
                  disabled={isAutomating}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 active:scale-95 ${
                    isAutomating
                      ? "opacity-50 cursor-not-allowed bg-gray-700 text-white"
                      : `${themeStyles.accentBg} text-black`
                  }`}
                >
                  <FiPlay className="w-3.5 h-3.5" />
                  <span>{isAutomating ? "در حال اجرای اتوماسیون..." : "اجرای تست اتوماسیون"}</span>
                </button>
              </div>

              {/* Steps Flow Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { step: 1, title: "۱. دریافت وب‌هوک سفارش", desc: "اعتبارسنجی امن توکن" },
                  { step: 2, title: "۲. ثبت در دیتابیس پستگرس", desc: "ذخیره در ۴ میلی‌ثانیه" },
                  { step: 3, title: "۳. ارسال پیامک به خریدار", desc: "ارسال سریع کاوه‌نگار" },
                  { step: 4, title: "۴. صدور فایل PDF فاکتور", desc: "ایجاد لینک دانلود ابری" },
                ].map((st) => {
                  const isDone = automationStep >= st.step;
                  const isCurrent = automationStep === st.step;

                  return (
                    <div
                      key={st.step}
                      className={`p-3 rounded-2xl border transition-all ${
                        isDone
                          ? "border-emerald-500/50 bg-emerald-500/10 text-white"
                          : "border-white/10 bg-white/5 text-gray-400"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold">{st.title}</span>
                        {isDone ? (
                          <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                        ) : isCurrent ? (
                          <FiRefreshCw className="w-4 h-4 text-amber-400 animate-spin" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                        )}
                      </div>
                      <span className="text-[11px] text-gray-400 block">{st.desc}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Filterable Live Data Table */}
            <div className={`rounded-2xl border ${themeStyles.border} overflow-hidden bg-black/40`}>
              <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 w-full sm:w-80 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <FiSearch className="text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="جستجوی آنی در تراکنش‌ها..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white focus:outline-none w-full placeholder-gray-500 text-xs"
                  />
                </div>
                <span className="text-xs text-gray-400 font-mono self-end sm:self-auto">
                  تعداد یافته‌ها: {filteredRows.length} رکورد
                </span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-white/5 text-gray-400 border-b border-white/10 font-mono">
                    <tr>
                      <th className="p-3.5">شناسه</th>
                      <th className="p-3.5">نام مشتری / سازمان</th>
                      <th className="p-3.5">نوع پلتفرم / سرویس</th>
                      <th className="p-3.5">مبلغ تراکنش</th>
                      <th className="p-3.5">وضعیت</th>
                      <th className="p-3.5">زمان</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredRows.map((row) => (
                      <tr key={row.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-3.5 font-mono text-gray-400">{row.id}</td>
                        <td className="p-3.5 font-bold text-white">{row.customer}</td>
                        <td className="p-3.5 text-gray-300">{row.type}</td>
                        <td className="p-3.5 font-mono text-white font-bold">
                          {row.amount.toLocaleString("fa-IR")} تومان
                        </td>
                        <td className="p-3.5">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                              row.status === "موفق"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                                : row.status === "در صف"
                                ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                                : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="p-3.5 text-gray-400 text-[11px]">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Speed & ROI Benchmark Widget */}
      <SpeedGauge lang="fa" />

      {/* Why Custom Next.js + NestJS for Web Apps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
            <FiServer className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[var(--text-primary)]">
            معماری مقیاس‌پذیر برای میلیون‌ها کاربر
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            کدنویسی با تایپ‌اسکریپت و تفکیک ماژول‌ها تضمین می‌کند که با رشد بیزینس شما و افزایش تعداد کارمندان یا مشتریان، سیستم هرگز به بن‌بست فنی نخورد.
          </p>
        </div>

        <div className="p-6 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
            <FiDatabase className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[var(--text-primary)]">
            پایگاه داده PostgreSQL با کوئری‌های بهینه
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            برخلاف دیتابیس سنگین و غیراستاندارد CMSهای آماده، تمام جداول نرمال‌سازی شده و گزارش‌گیری‌های سنگین در چند میلی‌ثانیه پردازش می‌شوند.
          </p>
        </div>

        <div className="p-6 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
            <FiShield className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[var(--text-primary)]">
            امنیت داده و احراز هویت دوعاملی (2FA)
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            سطوح دسترسی نقش‌محور (RBAC)، رمزنگاری گذرواژه‌ها با الگوریتم‌های مدرن و ثبت لاگ دقیق تمام تغییرات برای جلوگیری از هرگونه سوءاستفاده.
          </p>
        </div>
      </div>

      {/* CTA Box for Web App Clients */}
      <div className="p-8 sm:p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 to-[var(--bg-surface)] text-center space-y-6 shadow-2xl relative overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          به یک وب‌اپلیکیشن اختصاصی، پنل مدیریت یا سیستم اتوماسیون نیاز دارید؟
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
          برای نیازسنجی، انتخاب استک فنی و آغاز پیاده‌سازی سیستم سازمانی‌تان، با من در تلگرام در ارتباط باشید.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={PERSONAL_DATA.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl font-bold text-sm bg-cyan-500 text-black shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 flex items-center gap-2"
          >
            <FaTelegram className="w-5 h-5" />
            <span>مشاوره و سفارش وب‌اپلیکیشن در تلگرام</span>
          </a>
        </div>
      </div>
    </div>
  );
}
