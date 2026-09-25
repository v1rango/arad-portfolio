"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitcher, { ThemeOption } from "@/components/demos/ThemeSwitcher";
import ShowcaseGuide from "@/components/demos/ShowcaseGuide";
import SpeedGauge from "@/components/demos/SpeedGauge";
import { PERSONAL_DATA } from "@/lib/constants";
import {
  FiArrowRight,
  FiShoppingBag,
  FiCheck,
  FiZap,
  FiTrash2,
  FiPlus,
  FiMinus,
  FiArrowUpRight,
  FiShield,
  FiTrendingUp,
  FiX,
} from "react-icons/fi";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const ECOMMERCE_THEMES: ThemeOption[] = [
  {
    id: "streetwear",
    nameFa: "تیره و استریت‌ویر (Streetwear Dark)",
    nameEn: "Streetwear Dark",
    colors: ["#090a0f", "#f43f5e", "#fb7185"],
    descriptionFa: "مناسب برای برندهای لباس، هودی، اسنیکر و مد جوانان",
    descriptionEn: "Tailored for streetwear brands, hype fashion, and sneaker drops",
  },
  {
    id: "vibrant",
    nameFa: "شاداب و مدرن (Vibrant Lifestyle)",
    nameEn: "Vibrant Lifestyle",
    colors: ["#0d1117", "#8b5cf6", "#ec4899"],
    descriptionFa: "مناسب برای محصولات آرایشی، اکسسوری، عطر و سبک زندگی",
    descriptionEn: "Tailored for cosmetics, beauty brands, lifestyle, and modern gifts",
  },
  {
    id: "clean",
    nameFa: "مینیمال و اپلی (Clean Tech)",
    nameEn: "Clean Tech",
    colors: ["#08090d", "#10b981", "#38bdf8"],
    descriptionFa: "مناسب برای تجهیزات دیجیتال، ساعت‌های هوشمند و گجت‌های خاص",
    descriptionEn: "Tailored for tech gear, premium gadgets, and Apple-like minimalist products",
  },
];

interface DemoProduct {
  id: string;
  nameFa: string;
  category: string;
  price: number;
  rating: number;
  colors: { name: string; hex: string }[];
  sizes: string[];
}

const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: "p1",
    nameFa: "هودی اورسایز مدل سایبرپانک ۲۰۲۶",
    category: "پوشاک",
    price: 1850000,
    rating: 4.9,
    colors: [
      { name: "مشکی ذغالی", hex: "#18181b" },
      { name: "قرمز فیوچریستیک", hex: "#f43f5e" },
      { name: "سفید یخچالی", hex: "#e2e8f0" },
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: "p2",
    nameFa: "کتونی لیمیتد ادیشن کربن استریت",
    category: "کفش",
    price: 3400000,
    rating: 5.0,
    colors: [
      { name: "مشکی و نئون", hex: "#10b981" },
      { name: "خاکستری تیتانیوم", hex: "#64748b" },
    ],
    sizes: ["41", "42", "43", "44"],
  },
  {
    id: "p3",
    nameFa: "عینک فریم لس یووی ۴۰۰ پولاریزه",
    category: "اکسسوری",
    price: 950000,
    rating: 4.8,
    colors: [
      { name: "دودی متالیک", hex: "#334155" },
      { name: "طلایی شامپاینی", hex: "#f59e0b" },
    ],
    sizes: ["Free Size"],
  },
];

export default function EcommerceShowcaseClient() {
  const [activeTheme, setActiveTheme] = useState("streetwear");
  const [selectedCategory, setSelectedCategory] = useState<string>("همه");
  const [cart, setCart] = useState<{ product: DemoProduct; size: string; color: string; count: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductOptions, setSelectedProductOptions] = useState<Record<string, { size: string; color: string }>>({
    p1: { size: "L", color: "مشکی ذغالی" },
    p2: { size: "42", color: "مشکی و نئون" },
    p3: { size: "Free Size", color: "دودی متالیک" },
  });
  const [checkoutSimulated, setCheckoutSimulated] = useState(false);

  // Dynamic theme colors
  const themeStyles = {
    streetwear: {
      bg: "bg-[#090a0f]",
      cardBg: "bg-[#12131a]/90",
      border: "border-rose-900/30",
      accent: "text-rose-400",
      accentBg: "bg-rose-500",
      accentBorder: "border-rose-500/40",
      pillBg: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    },
    vibrant: {
      bg: "bg-[#0b0e14]",
      cardBg: "bg-[#131722]/90",
      border: "border-purple-900/30",
      accent: "text-purple-400",
      accentBg: "bg-gradient-to-r from-purple-500 to-pink-500",
      accentBorder: "border-purple-500/40",
      pillBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    },
    clean: {
      bg: "bg-[#07090e]",
      cardBg: "bg-[#0e121a]/90",
      border: "border-emerald-900/30",
      accent: "text-emerald-400",
      accentBg: "bg-emerald-500",
      accentBorder: "border-emerald-500/40",
      pillBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    },
  }[activeTheme as "streetwear" | "vibrant" | "clean"] || {
    bg: "bg-[#090a0f]",
    cardBg: "bg-[#12131a]/90",
    border: "border-rose-900/30",
    accent: "text-rose-400",
    accentBg: "bg-rose-500",
    accentBorder: "border-rose-500/40",
    pillBg: "bg-rose-500/10 text-rose-300 border-rose-500/20",
  };

  const filteredProducts =
    selectedCategory === "همه"
      ? DEMO_PRODUCTS
      : DEMO_PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: DemoProduct) => {
    const opts = selectedProductOptions[product.id] || {
      size: product.sizes[0],
      color: product.colors[0].name,
    };

    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.product.id === product.id &&
          item.size === opts.size &&
          item.color === opts.color
      );
      if (existing) {
        return prev.map((item) =>
          item === existing ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { product, size: opts.size, color: opts.color, count: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.count,
    0
  );

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
            طراحی فروشگاه آنلاین پرسرعت (Headless Commerce)
          </span>
        </div>

        <ThemeSwitcher
          themes={ECOMMERCE_THEMES}
          activeTheme={activeTheme}
          onThemeChange={setActiveTheme}
          lang="fa"
        />
      </div>

      {/* Showcase Onboarding Guide */}
      <ShowcaseGuide
        nicheTitleFa="طراحی فروشگاه آنلاین پرسرعت (Headless Commerce & Fast Checkout)"
        nicheTitleEn="Modern High-Speed Headless E-Commerce"
        lang="fa"
        keyFeaturesFa={[
          "سبد خرید اسلایدی آنی بدون رفرش صفحه",
          "تغییر لحظه‌ای رنگ و سایز محصولات",
          "مقاوم در برابر کمپین‌های سنگین اینستاگرام و حراجی‌ها",
        ]}
        keyFeaturesEn={[
          "Zero-reload slide-over shopping cart",
          "Instant color & size variant selection",
          "Crash-proof architecture during flash sale campaigns",
        ]}
      />

      {/* LIVE INTERACTIVE DEMO CONTAINER */}
      <div id="demo-section" className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
            <h2 className="text-lg font-black text-[var(--text-primary)]">
              دموی زنده فروشگاه آنلاین (محصولات را تست و به سبد اضافه کنید)
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--border-hover)]">
            THEME: {activeTheme.toUpperCase()}
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
              https://shop.aradvafaee.ir/streetwear-drop
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>0.65s</span>
            </div>
          </div>

          {/* Demo Store Navigation Bar */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <span className={`text-xl font-black tracking-tighter ${themeStyles.accent}`}>
                V1-STORE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-gray-300">
                DROP 04
              </span>
            </div>

            {/* Category filter pills */}
            <div className="hidden sm:flex items-center gap-2">
              {["همه", "پوشاک", "کفش", "اکسسوری"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? `${themeStyles.accentBg} text-black font-bold`
                      : "bg-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:border-white/30 transition-all flex items-center gap-2"
            >
              <FiShoppingBag className="w-4 h-4" />
              <span className="text-xs font-bold hidden sm:inline">سبد خرید</span>
              {cart.length > 0 && (
                <span
                  className={`w-5 h-5 rounded-full ${themeStyles.accentBg} text-black text-[11px] font-bold flex items-center justify-center animate-bounce`}
                >
                  {cart.reduce((a, b) => a + b.count, 0)}
                </span>
              )}
            </button>
          </div>

          {/* Demo Products Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            {filteredProducts.map((product) => {
              const currentOpts = selectedProductOptions[product.id] || {
                size: product.sizes[0],
                color: product.colors[0].name,
              };

              return (
                <div
                  key={product.id}
                  className={`p-5 rounded-3xl border ${themeStyles.border} ${themeStyles.cardBg} flex flex-col justify-between space-y-4 group transition-all hover:scale-[1.02] shadow-xl`}
                >
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-gray-400">
                        {product.category}
                      </span>
                      <span className="text-[11px] text-amber-400 font-bold">
                        ★ {product.rating}
                      </span>
                    </div>

                    {/* Product Mock Visual Box */}
                    <div className="w-full h-44 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden mb-4 p-4 text-center">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 shadow-2xl transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor:
                            product.colors.find((c) => c.name === currentOpts.color)?.hex ||
                            "#222",
                          border: "2px solid rgba(255,255,255,0.2)",
                        }}
                      >
                        <FiShoppingBag className="w-7 h-7 text-white/80" />
                      </div>
                      <span className="text-[11px] text-gray-400 font-mono">
                        رنگ انتخاب شده: {currentOpts.color}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-white mb-2 leading-snug">
                      {product.nameFa}
                    </h4>

                    {/* Color selection buttons */}
                    <div className="space-y-1.5 mb-3">
                      <span className="text-[10px] text-gray-400 block">انتخاب رنگ:</span>
                      <div className="flex items-center gap-2">
                        {product.colors.map((c) => (
                          <button
                            key={c.name}
                            onClick={() =>
                              setSelectedProductOptions((prev) => ({
                                ...prev,
                                [product.id]: { ...currentOpts, color: c.name },
                              }))
                            }
                            className={`w-6 h-6 rounded-full border-2 transition-all ${
                              currentOpts.color === c.name
                                ? "scale-110 border-white ring-2 ring-white/30"
                                : "border-transparent opacity-70 hover:opacity-100"
                            }`}
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Size selection */}
                    <div className="space-y-1.5 mb-4">
                      <span className="text-[10px] text-gray-400 block">انتخاب سایز:</span>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {product.sizes.map((sz) => (
                          <button
                            key={sz}
                            onClick={() =>
                              setSelectedProductOptions((prev) => ({
                                ...prev,
                                [product.id]: { ...currentOpts, size: sz },
                              }))
                            }
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                              currentOpts.size === sz
                                ? `${themeStyles.accentBg} text-black font-bold`
                                : "bg-white/5 text-gray-400 hover:text-white"
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price & Add to Cart button */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 block">قیمت محصول:</span>
                      <span className="text-sm font-black font-mono text-white">
                        {product.price.toLocaleString("fa-IR")} تومان
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 shadow-md ${themeStyles.accentBg} text-black`}
                    >
                      <FiPlus className="w-3.5 h-3.5" />
                      <span>خرید آنی</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slide-over Cart Drawer */}
          {isCartOpen && (
            <div className="absolute inset-y-0 left-0 w-full sm:w-96 bg-black/95 backdrop-blur-xl border-r border-white/10 z-30 p-6 flex flex-col justify-between text-white shadow-2xl animate-in slide-in-from-left duration-300">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <FiShoppingBag className={`w-5 h-5 ${themeStyles.accent}`} />
                    <h4 className="font-bold text-base">سبد خرید سریع (Fast Checkout)</h4>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>

                {/* Items List */}
                <div className="py-4 space-y-3 max-h-[350px] overflow-y-auto">
                  {cart.length === 0 ? (
                    <div className="py-12 text-center text-gray-400 text-xs">
                      سبد خرید شما در حال حاضر خالی است.
                    </div>
                  ) : (
                    cart.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex-1">
                          <h5 className="font-bold text-white text-[12px]">{item.product.nameFa}</h5>
                          <span className="text-[10px] text-gray-400 block mt-0.5">
                            سایز: {item.size} | رنگ: {item.color} | تعداد: {item.count}
                          </span>
                          <span className="text-[11px] font-mono text-emerald-400 font-bold block mt-1">
                            {(item.product.price * item.count).toLocaleString("fa-IR")} تومان
                          </span>
                        </div>

                        <button
                          onClick={() => removeFromCart(idx)}
                          className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-500/20 transition-colors"
                          title="حذف از سبد"
                        >
                          <FiTrash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Checkout Footer */}
              {cart.length > 0 && (
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">مجموع قابل پرداخت:</span>
                    <span className="font-mono text-base font-black text-white">
                      {cartTotal.toLocaleString("fa-IR")} تومان
                    </span>
                  </div>

                  {!checkoutSimulated ? (
                    <button
                      onClick={() => setCheckoutSimulated(true)}
                      className={`w-full py-3 rounded-2xl font-bold text-xs transition-transform active:scale-95 shadow-lg ${themeStyles.accentBg} text-black flex items-center justify-center gap-2`}
                    >
                      <FiZap className="w-4 h-4" />
                      <span>ثبت نهایی سفارش (شبیه‌ساز پرداخت ۳۰ ثانیه‌ای)</span>
                    </button>
                  ) : (
                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-1.5">
                      <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-bold">
                        <FiCheck className="w-4 h-4" />
                        <span>سفارش با موفقیت در کمتر از ۱ ثانیه ثبت شد!</span>
                      </div>
                      <p className="text-[10px] text-gray-300">
                        بدون رفرش صفحه، موجودی انبار به روزرسانی و فاکتور صادر گردید.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Speed & ROI Benchmark Widget */}
      <SpeedGauge lang="fa" />

      {/* Why Custom Next.js Beats WooCommerce */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center">
            <FiZap className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[var(--text-primary)]">
            مقاوم در برابر بلک‌فرایدی و کمپین‌های اینستاگرام
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            ووکامرس وقتی ۲۰۰ نفر همزمان وارد سبد خرید شوند داون می‌شود! اما معماری Headless Next.js به کمک کش کلودفلر، ده‌ها هزار مشتری همزمان را بدون ۱ میلی‌ثانیه افت سرعت میزبانی می‌کند.
          </p>
        </div>

        <div className="p-6 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
            <FiTrendingUp className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[var(--text-primary)]">
            کاهش ۷۰ درصدی رهاسازی سبد خرید
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            فرآیند ثبت سفارش و پرداخت در فروشگاه‌های ما در کمتر از ۳۰ ثانیه و بدون نیاز به فرم‌های طولانی و گیج‌کننده انجام می‌شود تا مشتری قبل از پشیمان شدن خریدش را نهایی کند.
          </p>
        </div>

        <div className="p-6 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center">
            <FiShield className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[var(--text-primary)]">
            اتصال امن به درگاه‌های پرداخت و سیستم انبارداری
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            امکان اتصال مستقیم به کلیه درگاه‌های بانکی عضو شتاب، درگاه‌های واسط، سامانه‌های پیامکی و نرم‌افزارهای حسابداری با بالاترین ضرایب ایمنی مالی.
          </p>
        </div>
      </div>

      {/* CTA Box for E-Commerce Clients */}
      <div className="p-8 sm:p-12 rounded-3xl border border-rose-500/30 bg-gradient-to-br from-rose-950/40 to-[var(--bg-surface)] text-center space-y-6 shadow-2xl relative overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          می‌خواهید فروشگاه آنلاین شما سریع‌ترین شاپ در حوزه کاری‌تان باشد؟
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
          برای مشاوره تخصصی معماری فروشگاه، برآورد فنی و زمان‌بندی تحویل، همین حالا در تلگرام پیام دهید.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={PERSONAL_DATA.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl font-bold text-sm bg-rose-500 text-white shadow-lg shadow-rose-500/20 transition-all hover:scale-105 flex items-center gap-2"
          >
            <FaTelegram className="w-5 h-5" />
            <span>مشاوره و سفارش فروشگاه در تلگرام</span>
          </a>
          <a
            href={PERSONAL_DATA.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl font-bold text-sm border border-white/20 bg-white/5 text-white transition-all hover:bg-white/10 flex items-center gap-2"
          >
            <FaWhatsapp className="w-4 h-4 text-emerald-400" />
            <span>گفتگو در واتساپ</span>
          </a>
        </div>
      </div>
    </div>
  );
}
