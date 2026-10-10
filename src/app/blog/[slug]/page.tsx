import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-data";
import {
  FiClock,
  FiCalendar,
  FiUser,
  FiCheckCircle,
  FiBookmark,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "مقاله یافت نشد" };

  return {
    title: `${post.title} | آراد وفایی`,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | آراد وفایی`,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: `${PERSONAL_DATA.nameFa} — Tech Blog`,
      locale: "fa_IR",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [PERSONAL_DATA.nameFa],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${SITE_URL}/blog/${post.slug}/#article`,
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.publishedAt,
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": PERSONAL_DATA.nameFa,
      "url": SITE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": `${PERSONAL_DATA.nameFa} Studio`,
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/icon.png`,
      },
    },
    "mainEntityOfPage": `${SITE_URL}/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "صفحه اصلی",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "وبلاگ",
        "item": `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
                    <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)] flex-wrap">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              خانه
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-emerald-400 transition-colors">
              وبلاگ
            </Link>
            <span>/</span>
            <span className="text-[var(--text-secondary)] truncate max-w-xs sm:max-w-md">
              {post.title}
            </span>
          </nav>

                    <header className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
              <FiBookmark className="w-3.5 h-3.5" />
              <span>{post.category}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[var(--text-secondary)] pt-2 border-t border-[var(--border)]/40 font-mono">
              <div className="flex items-center gap-1.5 font-sans">
                <FiUser className="w-4 h-4 text-emerald-400" />
                <span>نویسنده: <strong className="text-white">{post.author}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCalendar className="w-4 h-4 text-emerald-400" />
                <span>{new Date(post.publishedAt).toLocaleDateString("fa-IR")}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiClock className="w-4 h-4 text-emerald-400" />
                <span>{post.readTime} مطالعه</span>
              </div>
            </div>
          </header>

                    <section className="p-6 sm:p-7 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 via-[var(--bg-surface)] to-cyan-950/20 shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <FiCheckCircle className="w-4 h-4" />
              <span>چکیده کلیدی برای پاسخ مستقیم و هوش مصنوعی (AEO Key Takeaway)</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-sans font-medium">
              {post.aeoDirectAnswer}
            </p>
          </section>

                    <nav className="p-6 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-3">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <span>فهرست عناوین این مقاله</span>
            </h2>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {post.tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

                    <div className="space-y-10">
            {post.content.map((sec) => (
              <section key={sec.sectionId} id={sec.sectionId} className="space-y-4 scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight border-r-4 border-emerald-400 pr-3">
                  {sec.sectionTitle}
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {sec.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {sec.highlight && (
                  <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-xs sm:text-[13px] text-emerald-300 leading-relaxed font-medium">
                    💡 <strong>نکته کلیدی:</strong> {sec.highlight}
                  </div>
                )}
              </section>
            ))}
          </div>

                    <section className="p-6 sm:p-8 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-6">
            <h3 className="text-base font-bold text-white">
              خدمات و مطالعات موردی مرتبط با این مبحث
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {post.relatedServices.map((srv, idx) => (
                <Link
                  key={idx}
                  href={srv.href}
                  className="p-4 rounded-xl border bg-[var(--bg-elevated)] border-[var(--border)] hover:border-emerald-500/40 transition-all flex items-center justify-between group"
                >
                  <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {srv.title}
                  </span>
                  <FiArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--border)]/40">
              <Link
                href={post.relatedCaseStudy.href}
                className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="block text-[10px] font-mono text-emerald-400">PROVEN CASE STUDY</span>
                  <span className="text-xs font-bold text-white group-hover:text-emerald-300">
                    {post.relatedCaseStudy.title}
                  </span>
                </div>
                <FiArrowLeft className="w-4 h-4 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>

                    <div className="p-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-[var(--bg-surface)] text-center space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              نیاز به پیاده‌سازی این راهکار در پروژه خود دارید؟
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
              جهت آنالیز سایت فعلی یا ثبت سفارش طراحی پلتفرم جدید با بالاترین سرعت و استانداردهای سئو، مستقیماً پیام ارسال کنید.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={PERSONAL_DATA.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-emerald-500 text-black hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <FaTelegram className="w-4 h-4" />
                <span>مشاوره مستقیم در تلگرام</span>
              </a>
              <Link
                href="/#estimator"
                className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all"
              >
                محاسبه آنلاین هزینه پروژه
              </Link>
            </div>
          </div>
        </main>

        <Footer lang="fa" />
      </div>
    </>
  );
}

function FiArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
}
