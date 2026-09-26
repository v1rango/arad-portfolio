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
  FiDollarSign,
  FiHelpCircle,
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
  baseMin: number; // میلیون تومان
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
    titleFa: "سایت شرکتی و کلینیک",
    titleEn: "Corporate & Clinic Website",
    descFa: "طراحی لوکس، سیستم رزرواسیون آنلاین، معرفی پزشکان و خدمات با لود زیر ۱ ثانیه.",
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
    descFa: "سبد خرید اسلایدی آنی، جستجوی بدون تاخیر و مقاوم در برابر بلک‌فرایدی.",
    descEn: "Slide-over instant cart, zero-latency filters, crash-proof during mega sales.",
    icon: FiShoppingBag,
    baseMin: 105,
    baseMax: 160,
    timelineFa: "۴۰ الی ۶۰ روز کاری",
    timelineEn: "40 to 60 business days",
  },
  {
    id: "webapp",
    titleFa: "وب‌اپلیکیشن و پلتفرم اختصاصی",
    titleEn: "Custom Web App & Platform",
    descFa: "داشبورد سازمانی، دیتابیس رابطه‌ای امن، پنل‌های کاربری و اتوماسیون پیشرفته.",
    descEn: "Enterprise dashboard, secure relational DB, automated workflow engines.",
    icon: FiLayers,
    baseMin: 160,
    baseMax: 280,
    timelineFa: "۶۰ الی ۹۰ روز کاری",
    timelineEn: "60 to 90 business days",
  },
  {
    id: "speed-seo",
    titleFa: "بهینه‌سازی سرعت و سئوی لایت‌هاوس",
    titleEn: "Speed Optimization & SEO Rescue",
    descFa: "بازنویسی کدهای کند، رساندن نمره لایت‌هاوس به ۱۰۰ و صفر کردن پرش صفحات (CLS).",
    descEn: "Eliminating render-blocking bloat, guaranteed 100/100 Core Web Vitals.",
    icon: FiZap,
    baseMin: 18,
    baseMax: 30,
    timelineFa: "۷ الی ۱۴ روز کاری",
    timelineEn: "7 to 14 business days",
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

  // محاسبه بازه قیمت کل
  const { minTotal, maxTotal, timelineText } = useMemo(() => {
    let min = selectedCategory.baseMin;
    let max = selectedCategory.baseMax;

    // اضافه کردن مقادیر افزودنی‌ها
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

  // ساخت لینک تلگرام با پیام آماده
  const telegramUrl = useMemo(() => {
    const addonsList = selectedAddons
      .map((id) => {
        const item = ADDONS.find((a) => a.id === id);
        return item ? `• ${isFa ? item.titleFa : item.titleEn}` : "";
      })
      .filter(Boolean)
      .join("\n");

    const message = isFa
      ? `سلام آراد عزیز وقتت بخیر 🌟\nمن از طریق ماشین‌حساب سایتت برای پروژه‌ام برآورد اولیه گرفتم:\n\n📌 نوع پروژه: ${selectedCategory.titleFa}\n⏱ زمان تخمینی: ${timelineText}\n💰 بازه برآورد اولیه: ${minTotal} تا ${maxTotal} میلیون تومان\n\nافزودنی‌های مد نظر:\n${addonsList || "موردی انتخاب نشده"}\n${isExpress ? "⚡ حالت تحویل: اکسپرس VIP" : ""}\n\nمی‌خواستم برای شروع کار و بررسی دقیق اسکوپ باهات هماهنگ کنم.`
      : `Hi Arad!\nI estimated my project using your website calculator:\n\nProject: ${selectedCategory.titleEn}\nTimeline: ${timelineText}\nEstimated Budget: ${minTotal} to ${maxTotal}M Tomans\n\nSelected Addons:\n${addonsList || "None"}\n${isExpress ? "Mode: Express Delivery" : ""}\n\nI'd like to schedule a consultation to discuss the exact scope.`;

    return `https://t.me/v1arad?text=${encodeURIComponent(message)}`;
  }, [selectedCategory, selectedAddons, isExpress, minTotal, maxTotal, timelineText, isFa]);

  return (
    <section id="estimator" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]/20 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* هدر ماشین‌حساب */}
        <div className="text-center mb-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-subtle)] border border-[var(--border-hover)] text-xs font-bold text-[var(--accent)] mb-3">
            <FiDollarSign className="w-4 h-4" />
            <span>{isFa ? "محاسبه‌گر شفاف و هوشمند پروژه" : "Transparent Project Estimator"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
            {isFa ? "برآورد آنلاین زمان و هزینه پروژه شما" : "Interactive Cost & Timeline Calculator"}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
            {isFa
              ? "نوع پروژه و نیازهای اختصاصی کسب‌وکارتان را انتخاب کنید تا بازه بودجه و زمان تحویل دقیق را بلافاصله مشاهده کنید."
              : "Select your project category and specialized add-ons to get an immediate real-time estimate."}
          </p>
        </div>

        {/* جعبه اصلی محاسبه‌گر */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ستون انتخاب‌ها (سمت راست در RTL) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* گام ۱: انتخاب نوع پروژه */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                {isFa ? "۱. انتخاب نوع پروژه:" : "1. Select Project Scope:"}
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
                      className={`p-4 rounded-2xl border text-right rtl:text-right ltr:text-left transition-all cursor-pointer relative overflow-hidden group ${
                        isSelected
                          ? "border-[var(--accent)] shadow-lg shadow-emerald-500/10 bg-[var(--bg-elevated)]"
                          : "border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)]"
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute top-2 left-2 rtl:left-2 ltr:right-2 w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                      )}
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-2.5 border"
                        style={{
                          backgroundColor: isSelected ? "var(--accent)" : "var(--bg-elevated)",
                          borderColor: isSelected ? "var(--accent)" : "var(--border)",
                          color: isSelected ? "var(--accent-contrast)" : "var(--accent)",
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>
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

            {/* گام ۲: امکانات تخصصی تکمیلی */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                {isFa ? "۲. امکانات و ماژول‌های تکمیلی (دلخواه):" : "2. Optional Technical Add-ons:"}
              </span>
              <div className="space-y-2.5">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);

                  return (
                    <label
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? "border-[var(--accent)]/60 bg-[var(--bg-elevated)]"
                          : "border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)]"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? "bg-[var(--accent)] border-[var(--accent)] text-[var(--accent-contrast)]"
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
                    </label>
                  );
                })}
              </div>
            </div>

            {/* گام ۳: گزینه تحویل اکسپرس */}
            <div className="pt-2">
              <label
                onClick={() => setIsExpress(!isExpress)}
                className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                  isExpress
                    ? "border-amber-500/70 bg-amber-500/10 text-amber-300"
                    : "border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)]"
                }`}
              >
                <div className="flex items-center gap-2.5 text-xs font-bold">
                  <FiZap className={`w-4 h-4 ${isExpress ? "text-amber-400 animate-bounce" : "text-[var(--text-muted)]"}`} />
                  <span>{isFa ? "نیاز به تحویل فوری و ضرب‌الاجل (Express Delivery)" : "Need Express Priority Launch"}</span>
                </div>
                <div
                  className={`w-10 h-5 rounded-full p-0.5 transition-colors ${
                    isExpress ? "bg-amber-500" : "bg-gray-600/40"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      isExpress ? "translate-x-5 rtl:-translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </label>
            </div>

          </div>

          {/* ستون کارت نمایش خروجی برآورد (Sticky در دسکتاپ) */}
          <div className="lg:col-span-5 sticky top-28">
            <div
              className="p-6 sm:p-7 rounded-3xl border shadow-2xl relative overflow-hidden bento-card transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border)",
              }}
            >
              {/* هاله نور بالای کارت خروجی */}
              <div className="absolute top-0 right-1/2 translate-x-1/2 w-48 h-20 bg-[var(--accent-subtle)] blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-5">
                <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                  {isFa ? "خلاصه برآورد فنی" : "Estimated Quote"}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border)]">
                  {selectedCategory.titleFa}
                </span>
              </div>

              {/* بازه قیمت کل */}
              <div className="space-y-1.5 mb-6 text-center sm:text-right rtl:sm:text-right ltr:sm:text-left">
                <span className="text-xs text-[var(--text-secondary)] font-medium">
                  {isFa ? "بازه هزینه تقریبی پروژه:" : "Estimated Investment Range:"}
                </span>
                <div className="flex items-baseline justify-center sm:justify-start gap-2 flex-wrap text-emerald-400">
                  <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight">
                    {minTotal} تا {maxTotal}
                  </span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    {isFa ? "میلیون تومان" : "Million Tomans"}
                  </span>
                </div>
              </div>

              {/* زمان تخمینی تحویل */}
              <div className="p-3.5 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-[var(--text-secondary)] block text-[11px]">
                    {isFa ? "تخمین زمان اجرا و لانچ:" : "Estimated Timeline:"}
                  </span>
                  <span className="font-bold text-[var(--text-primary)]">
                    {timelineText}
                  </span>
                </div>
              </div>

              {/* دیسکلیمر و یادداشت شفافیت */}
              <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-[11px] leading-relaxed text-[var(--text-muted)] flex items-start gap-2 mb-6">
                <FiHelpCircle className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <span>
                  {isFa
                    ? "این رقم برآورد اولیه است و هزینه قطعی پس از تعیین دقیق اسکوپ فنی و نیازمندی‌های بیزینس مشخص می‌شود."
                    : "This figure is an initial estimation; final pricing is established after the technical scope discovery."}
                </span>
              </div>

              {/* دو دکمه اصلی اقدام (CTA) */}
              <div className="space-y-3">
                {/* ارسال برآورد به تلگرام */}
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xl hover:brightness-110 active:scale-95 cursor-pointer"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--accent-contrast)",
                  }}
                >
                  <FiSend className="w-4 h-4" />
                  <span>{isFa ? "ارسال این برآورد به تلگرام آراد" : "Send Estimate to Telegram"}</span>
                </a>

                {/* درخواست مشاوره اختصاصی */}
                <a
                  href="#contact"
                  className="w-full py-3 px-4 rounded-xl border border-[var(--border)] text-xs font-bold text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--bg-elevated)] flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <FiPhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isFa ? "درخواست مشاوره اختصاصی تلفنی" : "Request Direct Consultation"}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
