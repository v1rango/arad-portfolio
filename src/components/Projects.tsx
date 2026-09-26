"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FEATURED_PROJECTS } from "@/lib/constants";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

interface ProjectsProps {
  lang: "fa" | "en";
}

function ProjectPreview({ src, alt, url }: { src?: string; alt: string; url?: string }) {
  const [hasError, setHasError] = useState(!src);

  return (
    <div className="relative mb-5 rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated)] group">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border)]/40 bg-[var(--bg-surface)]/80 text-[10px] text-[var(--text-secondary)] font-mono">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
        <span className="mx-2 text-[11px] truncate opacity-70 ltr">{url ? url.replace(/^https?:\/\//, "") : "preview"}</span>
      </div>
      <div className="aspect-[16/9] w-full relative overflow-hidden bg-[var(--bg-surface)] flex items-center justify-center">
        {!hasError && src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center mb-2 font-mono font-bold text-lg border border-[var(--border-hover)]">
              &lt;/&gt;
            </div>
            <span className="text-xs font-semibold text-[var(--text-primary)]">{alt}</span>
            <span className="text-[10px] text-[var(--text-secondary)] mt-1 font-mono">{url ? url.replace(/^https?:\/\//, "") : ""}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects({ lang }: ProjectsProps) {
  const isFa = lang === "fa";
  const [tab, setTab] = useState<"all" | "featured" | "github">("all");
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchRepos() {
      try {
        const res = await fetch("/api/github-repos");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Repository[] = await res.json();
        if (!cancelled) {
          setRepos(data);
          setError(false);
        }
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    // لود سبک: در صورت انتخاب تب گیت‌هاب بلافاصله و در غیر این صورت پس از اتمام رندر صفحه با زمان Idle
    if (tab === "github") {
      fetchRepos();
    } else {
      const timer = setTimeout(() => {
        if (typeof window !== "undefined" && "requestIdleCallback" in window) {
          window.requestIdleCallback(() => fetchRepos(), { timeout: 3000 });
        } else {
          fetchRepos();
        }
      }, 2000);

      return () => {
        cancelled = true;
        clearTimeout(timer);
      };
    }

    return () => {
      cancelled = true;
    };
  }, [tab]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            {isFa ? "مشاهده نمونه کارها" : "Featured Portfolio & Work"}
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            {isFa
              ? "بررسی نتایج واقعی، ثبت سفارش‌های لحظه‌ای و معماری‌های پرسرعتی که برای کارفرمایان ساخته‌ایم."
              : "Deep dive into real-world business results, conversion optimizations, and open-source codebases."}
          </p>

          {/* فیلتر تب‌ها */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => setTab("all")}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-all border"
              style={{
                backgroundColor: tab === "all" ? "var(--accent)" : "var(--bg-surface)",
                color: tab === "all" ? "var(--accent-contrast)" : "var(--text-secondary)",
                borderColor: tab === "all" ? "var(--accent)" : "var(--border)",
              }}
            >
              {isFa ? "همه پروژه‌ها" : "All Projects"}
            </button>
            <button
              onClick={() => setTab("featured")}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-all border"
              style={{
                backgroundColor: tab === "featured" ? "var(--accent)" : "var(--bg-surface)",
                color: tab === "featured" ? "var(--accent-contrast)" : "var(--text-secondary)",
                borderColor: tab === "featured" ? "var(--accent)" : "var(--border)",
              }}
            >
              {isFa ? "مطالعات موردی شاخص (Case Studies)" : "Featured Case Studies"}
            </button>
            <button
              onClick={() => setTab("github")}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-all border"
              style={{
                backgroundColor: tab === "github" ? "var(--accent)" : "var(--bg-surface)",
                color: tab === "github" ? "var(--accent-contrast)" : "var(--text-secondary)",
                borderColor: tab === "github" ? "var(--accent)" : "var(--border)",
              }}
            >
              {isFa ? "مخازن زنده گیت‌هاب" : "Live GitHub Repos"}
            </button>
          </div>
        </div>

        {/* بخش پروژه‌های شاخص همراه با مطالعه موردی (AEO/GEO Citation Friendly) */}
        {(tab === "all" || tab === "featured") && (
          <div className="mb-14 space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-6" style={{ color: "var(--text-primary)" }}>
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
              {isFa ? "پروژه‌های شاخص با معماری حل مسئله" : "Flagship Architectural Case Studies"}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {FEATURED_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="bento-card p-6 sm:p-8 flex flex-col justify-between animate-fade-in-up"
                >
                  <div>
                    <ProjectPreview
                      src={proj.image}
                      alt={isFa ? proj.titleFa : proj.titleEn}
                      url={proj.demoUrl || proj.githubUrl}
                    />

                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h4 className="text-lg font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
                        {isFa ? proj.titleFa : proj.titleEn}
                      </h4>
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-mono whitespace-nowrap border"
                        style={{
                          backgroundColor: "var(--accent-subtle)",
                          color: "var(--accent)",
                          borderColor: "var(--border-hover)",
                        }}
                      >
                        {proj.category.toUpperCase()}
                      </span>
                    </div>

                    <p className="text-xs leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                      {isFa ? proj.descriptionFa : proj.descriptionEn}
                    </p>

                    {/* جعبه چالش و راه‌حل (مورد علاقه موتورهای هوش مصنوعی و کارفرمایان) */}
                    <div className="space-y-3 mb-6 p-4 rounded-xl border text-xs"
                      style={{
                        backgroundColor: "var(--bg-elevated)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <div>
                        <span className="text-amber-500 font-bold">{isFa ? "چالش کارفرما: " : "Client Challenge: "}</span>
                        <span style={{ color: "var(--text-secondary)" }}>{isFa ? proj.challengeFa : proj.challengeEn}</span>
                      </div>
                      <div>
                        <span className="text-[var(--accent)] font-bold">{isFa ? "راه‌حل اختصاصی ما: " : "Our Solution: "}</span>
                        <span style={{ color: "var(--text-secondary)" }}>{isFa ? proj.solutionFa : proj.solutionEn}</span>
                      </div>
                      <div className="pt-2 border-t font-mono text-[11px] text-[var(--accent)] font-semibold flex items-center gap-1.5"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <span>★</span>
                        <span>{isFa ? `دستاورد: ${proj.metricsFa}` : `Result: ${proj.metricsEn}`}</span>
                      </div>
                    </div>

                    {/* تگ‌های استک */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border)]/40 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* لینک‌های پروژه */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]/30 text-xs">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <span>GitHub</span>
                        <span>↗</span>
                      </a>
                    )}
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] font-bold hover:underline flex items-center gap-1.5"
                      >
                        <span>{isFa ? "مشاهده آنلاین" : "Live Demo"}</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* بخش پروژه‌های گیت‌هاب */}
        {(tab === "all" || tab === "github") && (
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2 mb-6" style={{ color: "var(--text-primary)" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {isFa ? "مشاهده لایو پروژه‌ها در گیت‌هاب" : "Live Projects on GitHub"}
            </h3>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-44 rounded-xl animate-pulse border"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      borderColor: "var(--border)",
                    }}
                  ></div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-8 text-sm" style={{ color: "var(--text-secondary)" }}>
                {isFa
                  ? "در حال حاضر ارتباط با گیت‌هاب محدود است. لطفاً مستقیماً پروفایل گیت‌هاب را بررسی کنید."
                  : "GitHub rate limit reached. Please view profile directly."}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bento-card p-6 flex flex-col justify-between animate-fade-in-up"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-base font-bold transition-colors truncate group-hover:text-[var(--accent)]"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {repo.name}
                        </h4>
                        {repo.language && (
                          <span className="text-[10px] px-2 py-0.5 rounded border font-mono"
                            style={{
                              backgroundColor: "var(--bg-elevated)",
                              color: "var(--accent)",
                              borderColor: "var(--border)",
                            }}
                          >
                            {repo.language}
                          </span>
                        )}
                      </div>
                      <p className="text-xs line-clamp-3 leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                        {repo.description ||
                          (isFa
                            ? "مخزن برنامه نویسی شده با استانداردهای مدرن و تمیز."
                            : "Source code repository crafted with clean standards.")}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]/30 text-xs text-gray-400 font-mono">
                      <div className="flex items-center gap-3">
                        <span>★ {repo.stargazers_count}</span>
                        <span>⑂ {repo.forks_count}</span>
                      </div>
                      <span className="text-[var(--accent)] font-semibold group-hover:underline">
                        {isFa ? "سورس کد ↗" : "Source ↗"}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}