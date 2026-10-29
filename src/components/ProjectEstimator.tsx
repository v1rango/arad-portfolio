"use client";

import { useState, useMemo } from "react";
import {
  FiBriefcase,
  FiShoppingBag,
  FiLayers,
  FiZap,
  FiCheck,
  FiSend,
  FiPhoneCall,
  FiClock,
  FiHelpCircle,
  FiSmartphone,
  FiCpu,
  FiSliders,
} from "react-icons/fi";

interface ProjectEstimatorProps {
  lang?: "fa" | "en";
}

interface ProjectCategory {
  id: string;
  titleFa: string;
  titleEn: string;
  descFa: string;
  descEn: string;
  icon: typeof FiBriefcase;
  baseMin: number; 
  baseMax: number;
  timelineFa: string;
  timelineEn: string;
}

interface ProjectAddon {
  id: string;
  titleFa: string;
  titleEn: string;
  priceMin: number;
  priceMax: number;
  daysAdded: number;
}

const CATEGORIES: ProjectCategory[] = [
  {
    id: "corporate",
    titleFa: "سایت شرکتی و کلینیک لوکس",
    titleEn: "Corporate & Clinic Platform",
    descFa: "طراحی لوکس، سیستم رزرواسیون آنلاین، معرفی پزشکان و خدمات با لود زیر ۰.۸ ثانیه.",
    descEn: "Luxury aesthetics, appointment booking engine, staff directory with sub-second speed.",
    icon: FiBriefcase,
    baseMin: 55,
    baseMax: 85,
    timelineFa: "۲۵ الی ۳۵ روز کاری",
    timelineEn: "25 to 35 business days",
  },
  {
    id: "ecommerce",
    titleFa: "فروشگاه آنلاین پرسرعت (Headless)",
    titleEn: "Headless Fast E-Commerce",
    descFa: "سبد خرید اسلایدی آنی، جستجوی بدون تاخیر و مقاوم در برابر ترافیک سنگین حراجی.",
    descEn: "Slide-over instant cart, zero-latency filters, crash-proof during mega sales.",
    icon: FiShoppingBag,
    baseMin: 105,
    baseMax: 160,
    timelineFa: "۴۰ الی ۶۰ روز کاری",
    timelineEn: "40 to 60 business days",
  },
  {
    id: "speed-seo",
    titleFa: "بهینه‌سازی سرعت (Lighthouse 100)",
    titleEn: "Speed Optimization & AEO",
    descFa: "بازنویسی کدهای کند، رساندن نمره لایت‌هاوس به ۱۰۰ و رفع خطاهای Core Web Vitals.",
    descEn: "Eliminating render-blocking bloat, guaranteed 100/100 Core Web Vitals.",
    icon: FiZap,
    baseMin: 18,
    baseMax: 32,
    timelineFa: "۷ الی ۱۴ روز کاری",
    timelineEn: "7 to 14 business days",
  },
  {
    id: "telegram-bot",
    titleFa: "ربات تلگرام و اتوماسیون AI",
    titleEn: "Telegram Bot & AI Automation",
    descFa: "ربات فروشگاهی، استعلام آنی قیمت، دستیار هوش مصنوعی ۲۴ ساعته و اتصال به سایت.",
    descEn: "E-commerce bot, instant lookup, 24/7 AI chat agent, and website database sync.",
    icon: FiCpu,
    baseMin: 25,
    baseMax: 55,
    timelineFa: "۱۰ الی ۲۰ روز کاری",
    timelineEn: "10 to 20 business days",
  },
  {
    id: "mobile-app",
    titleFa: "اپلیکیشن موبایل پیش‌رونده (PWA)",
    titleEn: "Progressive Mobile App (PWA)",
    descFa: "اجرای روان ۶۰ فریم، نصب بدون تحریم استورها، ارسال نوتیفیکیشن پوش و عملکرد آفلاین.",
    descEn: "Fluid 60 FPS mobile app, zero app store bans, push notifications, offline mode.",
    icon: FiSmartphone,
    baseMin: 60,
    baseMax: 110,
    timelineFa: "۲۵ الی ۴۰ روز کاری",
    timelineEn: "25 to 40 business days",
  },
  {
    id: "webapp",
    titleFa: "وب‌اپلیکیشن و سامانه اختصاصی",
    titleEn: "Custom Web App & Platform",
    descFa: "داشبورد سازمانی، دیتابیس رابطه‌ای امن، پنل‌های کاربری و اتوماسیون پیشرفته.",
    descEn: "Enterprise dashboard, secure relational DB, automated workflow engines.",
    icon: FiLayers,
    baseMin: 160,
    baseMax: 280,
    timelineFa: "۶۰ الی ۹۰ روز کاری",
    timelineEn: "60 to 90 business days",
  },
];

const ADDONS: ProjectAddon[] = [
  {
    id: "aeo-geo",
    titleFa: "معماری سئوی هوش مصنوعی (AEO & GEO برای ارجاع در ChatGPT و گوگل)",
    titleEn: "Next-Gen AI & Search Engine Optimization (AEO/GEO)",
    priceMin: 12,
    priceMax: 18,
    daysAdded: 5,
  },
  {
    id: "payment-sms",
    titleFa: "اتصال به چند درگاه بانکی مستقیم، سامانه پیامک خدماتی و فاکتور خودکار",
    titleEn: "Multiple Payment Gateways, Fast SMS OTP & Automated Invoices",
    priceMin: 8,
    priceMax: 14,
    daysAdded: 3,
  },
  {
    id: "support-vip",
    titleFa: "پشتیبانی فنی ۶ ماهه اختصاصی، مانیتورینگ ۲۴/۷ و بکاپ‌گیری ابری روزانه",
    titleEn: "6-Month VIP Technical Support, 24/7 Monitoring & Cloud Backups",
    priceMin: 15,
    priceMax: 25,
    daysAdded: 0,
  },
];

export default function ProjectEstimator({ lang = "fa" }: ProjectEstimatorProps) {
  const isFa = lang === "fa";
  const [selectedCatId, setSelectedCatId] = useState<string>("corporate");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["aeo-geo"]);
  const [isExpress, setIsExpress] = useState(false);

  const selectedCategory = useMemo(() => {
    return CATEGORIES.find((c) => c.id === selectedCatId) || CATEGORIES[0];
  }, [selectedCatId]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const { minTotal, maxTotal, timelineText } = useMemo(() => {
    let min = selectedCategory.baseMin;
    let max = selectedCategory.baseMax;

    selectedAddons.forEach((addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId);
      if (addon) {
        min += addon.priceMin;
        max += addon.priceMax;
      }
    });

    if (isExpress) {
      min = Math.round(min * 1.2);
      max = Math.round(max * 1.2);
    }

    let timeline = isFa ? selectedCategory.timelineFa : selectedCategory.timelineEn;
    if (isExpress) {
      timeline = isFa
        ? `تحویل فوق‌سریع (حدود ۳۰٪ کوتاه‌تر از ${timeline})`
        : `Express Delivery (~30% faster than ${timeline})`;
    }

    return {
      minTotal: min,
      maxTotal: max,
      timelineText: timeline,
    };
  }, [selectedCategory, selectedAddons, isExpress, isFa]);

  const telegramUrl = useMemo(() => {
    const addonsList = selectedAddons
      .map((id) => {
        const item = ADDONS.find((a) => a.id === id);
        return item ? `• ${isFa ? item.titleFa : item.titleEn}` : "";
      })
      .filter(Boolean)
      .join("\n");

    const message = isFa
      ? `سلام و درود،\nمن از طریق ماشین‌حساب پورتفولیو برای پروژه‌ام برآورد اولیه دریافت کردم:\n\n📌 نوع پروژه: ${selectedCategory.titleFa}\n⏱ زمان تخمینی: ${timelineText}\n💰 بازه برآورد اولیه: ${minTotal} تا ${maxTotal} میلیون تومان\n\nامکانات تکمیلی:\n${addonsList || "موردی انتخاب نشده"}\n${isExpress ? "⚡ اولویت: تحویل اکسپرس" : ""}\n\nجهت بررسی اسکوپ فنی و عقد قرارداد تمایل به هماهنگی دارم.`
      : `Hello Arad,\nI calculated an initial project estimate through your platform:\n\nProject: ${selectedCategory.titleEn}\nTimeline: ${timelineText}\nEstimate: ${minTotal} to ${maxTotal}M Tomans\n\nAdd-ons:\n${addonsList || "None"}\n${isExpress ? "Priority: Express Delivery" : ""}\n\nI would like to discuss technical specifications and formal onboarding.`;

    return `https://t.me/v1arad?text=${encodeURIComponent(message)}`;
  }, [selectedCategory, selectedAddons, isExpress, minTotal, maxTotal, timelineText, isFa]);

  return (
    <section id="estimator" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] relative">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="telemetry-pill">
            <span className="telemetry-pill-dot" />
            <FiSliders className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
            <span>{isFa ? "محاسبه‌گر شفاف و هوشمند پروژه" : "Interactive Scope & Budget Engine"}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[var(--text-primary)]">
            {isFa ? "برآورد آنلاین زمان و سرمایه‌گذاری پروژه شما" : "Interactive Cost & Timeline Calculator"}
          </h2>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            {isFa
              ? "نوع پروژه و نیازمندی‌های تخصصی خود را انتخاب فرمایید تا بازه بودجه و زمان تحویل دقیق را بلافاصله مشاهده نمایید."
              : "Select your project specifications and desired add-ons to generate real-time investment and delivery parameters."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Category */}
            <div className="space-y-3">
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {isFa ? "۱. نوع پلتفرم مدنظر:" : "1. PLATFORM CATEGORY:"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCatId === cat.id;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCatId(cat.id)}
                      className={`architectural-card p-4 rounded-xl text-right rtl:text-right ltr:text-left transition-all cursor-pointer relative overflow-hidden group ${
                        isSelected
                          ? "border-[var(--text-primary)] shadow-lg"
                          : "border-[var(--border)] hover:border-[var(--text-secondary)]"
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute top-2.5 left-2.5 rtl:left-2.5 ltr:right-2.5 w-2 h-2 rounded-full bg-[var(--text-primary)] animate-pulse" />
                      )}
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2.5 border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold mb-1 text-[var(--text-primary)]">
                        {isFa ? cat.titleFa : cat.titleEn}
                      </h3>
                      <p className="text-[11px] leading-relaxed text-[var(--text-secondary)] line-clamp-2">
                        {isFa ? cat.descFa : cat.descEn}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-ons */}
            <div className="space-y-3">
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {isFa ? "۲. امکانات و ماژول‌های تکمیلی:" : "2. TECHNICAL ADD-ONS:"}
              </span>
              <div className="space-y-2.5">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`architectural-card p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? "border-[var(--text-primary)] bg-[var(--bg-elevated)]"
                          : "border-[var(--border)] hover:border-[var(--text-secondary)]"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? "bg-[var(--text-primary)] border-[var(--text-primary)] text-[var(--bg-primary)] font-bold"
                            : "border-[var(--border)] bg-transparent"
                        }`}
                      >
                        {isChecked && <FiCheck className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="flex-1 text-xs">
                        <span className="font-semibold block text-[var(--text-primary)]">
                          {isFa ? addon.titleFa : addon.titleEn}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Priority Mode Toggle */}
            <div className="pt-1">
              <div
                onClick={() => setIsExpress(!isExpress)}
                className={`architectural-card p-3.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                  isExpress
                    ? "border-[var(--text-primary)] bg-[var(--bg-elevated)]"
                    : "border-[var(--border)] hover:border-[var(--text-secondary)]"
                }`}
              >
                <div className="flex items-center gap-2.5 text-xs font-bold text-[var(--text-primary)]">
                  <FiZap className="w-4 h-4 text-[var(--text-primary)]" />
                  <span>{isFa ? "نیاز به تحویل فوری و اولویت‌دار (Express VIP Delivery)" : "Express Priority Timeline"}</span>
                </div>
                <div
                  className={`w-10 h-5 rounded-full p-0.5 transition-colors border border-[var(--border)] ${
                    isExpress ? "bg-[var(--text-primary)]" : "bg-[var(--bg-elevated)]"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full transition-transform ${
                      isExpress
                        ? "translate-x-5 rtl:-translate-x-5 bg-[var(--bg-primary)]"
                        : "translate-x-0 bg-[var(--text-muted)]"
                    }`}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Estimate Result Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="architectural-card p-6 sm:p-7 rounded-2xl relative overflow-hidden space-y-6">
              <div className="cad-corner-tl" />
              <div className="cad-corner-tr">CALC // REALTIME_QUOTE</div>

              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                <span className="text-xs font-mono font-bold text-[var(--text-muted)] tracking-wider">
                  {isFa ? "خلاصه برآورد اولیه" : "ESTIMATED SUMMARY"}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border)] font-bold">
                  {isFa ? selectedCategory.titleFa : selectedCategory.titleEn}
                </span>
              </div>

              {/* Price Range */}
              <div className="space-y-1 text-center sm:text-right rtl:sm:text-right ltr:sm:text-left">
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  {isFa ? "سرمایه‌گذاری برآورد شده:" : "ESTIMATED INVESTMENT RANGE:"}
                </span>
                <div className="flex items-baseline justify-center sm:justify-start gap-2 flex-wrap">
                  <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-[var(--text-primary)]">
                    {minTotal} - {maxTotal}
                  </span>
                  <span className="text-xs font-bold text-[var(--text-secondary)]">
                    {isFa ? "میلیون تومان" : "Million Tomans"}
                  </span>
                </div>
              </div>

              {/* Timeline Info */}
              <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)] flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-[var(--text-muted)] block text-[11px] font-mono">
                    {isFa ? "تخمین زمان اجرا و تحویل:" : "ESTIMATED TIMELINE:"}
                  </span>
                  <span className="font-bold text-[var(--text-primary)]">
                    {timelineText}
                  </span>
                </div>
              </div>

              {/* Scope note */}
              <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] text-[11px] leading-relaxed text-[var(--text-muted)] flex items-start gap-2">
                <FiHelpCircle className="w-4 h-4 text-[var(--text-primary)] flex-shrink-0 mt-0.5" />
                <span>
                  {isFa
                    ? "این رقم برآورد اولیه بوده و هزینه قطعی پس از جلسه دیسکاوری فنی و تدوین سند مشخصات پروژه نهایی می‌شود."
                    : "This preliminary estimation is formalized into an exact proposal following technical discovery."}
                </span>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-1">
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn btn-border-beam w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-95 transition-all cursor-pointer"
                >
                  <FiSend className="w-4 h-4" />
                  <span>{isFa ? "ارسال این برآورد به تلگرام آراد" : "Send Estimate via Telegram"}</span>
                </a>

                <a
                  href="/contact"
                  className="tactile-btn w-full py-3 px-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-bold text-[var(--text-primary)] hover:border-[var(--text-primary)] flex items-center justify-center gap-2 transition-all"
                >
                  <FiPhoneCall className="w-3.5 h-3.5 text-[var(--text-primary)]" />
                  <span>{isFa ? "درخواست جلسه مشاوره اختصاصی" : "Request Direct Consultation"}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
