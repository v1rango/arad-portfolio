import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-data";
import {
  FiBookOpen,
  FiClock,
  FiArrowRight,
  FiCalendar,
  FiArrowUpRight,
  FiLayers,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "پایگاه دانش مهندسی و مقالات تخصصی وب و سئو نوین | آراد وفایی",
  description:
    "مجموعه مقالات تخصصی، تحلیل‌های معماری Next.js 16، راهنمای سئو برای هوش مصنوعی (AEO & GEO)، و بهینه‌سازی سرعت Core Web Vitals توسط آراد وفایی.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "پایگاه دانش مهندسی وب، Next.js و سئو هوش مصنوعی | آراد وفایی",
    description:
      "مقالات عمیق، مقایسه‌های فنی و تکنیک‌های اختصاصی ارتقای پرفورمنس و تسخیر موتورهای جستجو و هوش مصنوعی.",
    url: `${SITE_URL}/blog`,
    siteName: `${PERSONAL_DATA.nameFa} — Tech Blog`,
    locale: "fa_IR",
    type: "website",
  },
};

export default function BlogArchivePage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/blog/#collection`,
    "name": "پایگاه دانش مهندسی و مقالات تخصصی آراد وفایی",
    "description":
      "مجموعه مقالات تخصصی معماری وب، سئو هوش مصنوعی و بهینه‌سازی سرعت سایت با استاندارد Next.js 16.",
    "url": `${SITE_URL}/blog`,
    "publisher": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": PERSONAL_DATA.nameFa,
      "url": SITE_URL,
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": BLOG_POSTS.map((post, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "url": `${SITE_URL}/blog/${post.slug}`,
        "name": post.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-14">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent)] hover:underline"
            >
              <FiArrowRight className="w-4 h-4 rtl:rotate-180" />
              <span>بازگشت به صفحه اصلی</span>
            </Link>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              ENGINEERING INSIGHTS & AEO KNOWLEDGE
            </span>
          </div>

          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
              <FiBookOpen className="w-4 h-4" />
              <span>پایگاه دانش مهندسی و سئو مدرن</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              مقالات تخصصی <span className="text-gradient-emerald">معماری وب</span> و سئوی هوش مصنوعی
            </h1>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              تحلیل‌های فنی بدون تعارف، مقایسه‌های مبتنی بر بنچ‌مارک و استراتژی‌های عملیاتی برای خلق وب‌سایت‌هایی که رقبایتان را پشت سر می‌گذارند.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bento-card p-6 sm:p-8 flex flex-col justify-between group hover:border-emerald-500/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                    <span className="px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] border border-[var(--border)] font-semibold text-emerald-400 text-[11px]">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3 text-[11px] font-mono">
                      <span className="flex items-center gap-1">
                        <FiClock className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{post.readTime}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-3.5 h-3.5" />
                        <span>{new Date(post.publishedAt).toLocaleDateString("fa-IR")}</span>
                      </span>
                    </div>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-[13px] text-[var(--text-secondary)] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border)]/40 flex items-center justify-between">
                  <span className="text-[11px] text-[var(--text-muted)] font-medium">
                    نویسنده: <strong className="text-white">{post.author}</strong>
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 group-hover:underline"
                  >
                    <span>مطالعه مقاله کامل</span>
                    <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 to-[var(--bg-surface)] text-center space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              می‌خواهید این متدولوژی‌ها در کسب‌وکار شما پیاده‌سازی شود؟
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
              از مشاوره فنی معماری تا پیاده‌سازی پلتفرم اختصاصی با تضمین لود زیر ۱ ثانیه و سئوی AEO.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 text-black font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
              >
                <FiLayers className="w-4 h-4" />
                <span>درخواست جلسه مشاوره اختصاصی</span>
              </Link>
            </div>
          </div>
        </main>

        <Footer lang="fa" />
      </div>
    </>
  );
}
