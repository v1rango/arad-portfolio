"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { FiLayers, FiExternalLink, FiArrowRight, FiArrowLeft, FiCheckCircle } from "react-icons/fi";

interface ProjectsProps {
  lang: "fa" | "en";
}

function ProjectPreview({ src, alt, url }: { src?: string; alt: string; url?: string }) {
  const [hasError, setHasError] = useState(!src);

  return (
    <div className="relative mb-5 rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated)] group">
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-[var(--border)] bg-[var(--bg-surface)] text-[10px] text-[var(--text-secondary)] font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/30 inline-block"></span>
          <span className="w-2 h-2 rounded-full bg-white/20 inline-block"></span>
          <span className="w-2 h-2 rounded-full bg-white/20 inline-block"></span>
        </div>
        <span className="truncate opacity-75 font-mono text-[11px] ltr max-w-[200px] sm:max-w-xs">
          {url ? url.replace(/^https?:\/\//, "") : "live_deployment"}
        </span>
      </div>

      <div className="aspect-[16/9] w-full relative overflow-hidden bg-[var(--bg-surface)] flex items-center justify-center">
        {!hasError && src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="telemetry-pill mb-3">
            <FiLayers className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>{isFa ? "پروژه‌های شاخص مهندسی و عملکرد سنجیده‌شده" : "FLAGSHIP_SYSTEMS // VERIFIED"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {isFa ? "مطالعات موردی و نمونه‌کارهای اجراشده" : "Featured Case Studies & High-Impact Systems"}
          </h2>
          <p className="text-xs sm:text-sm max-w-2xl mx-auto mt-2 text-[var(--text-secondary)]">
            {isFa
              ? "بررسی نتایج واقعی، ثبت سفارش‌های لحظه‌ای و معماری‌های پرسرعتی که برای کارفرمایان ساخته‌ایم."
              : "Measurable commercial outcomes, sub-second latency engineering, and production platforms."}
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((proj, index) => (
            <div
              key={proj.id}
              className="architectural-card p-6 sm:p-8 flex flex-col justify-between group relative"
            >
              {/* CAD Corner Accents */}
              <span className="cad-corner-tl">+</span>
              <span className="cad-corner-tr font-mono">{`PROJ//0${index + 1}`}</span>

              {/* Watermark Index */}
              <div className="absolute -bottom-6 -right-2 text-8xl font-mono font-black select-none pointer-events-none opacity-[0.03] text-[var(--text-primary)]">
                0{index + 1}
              </div>

              <div>
                <ProjectPreview
                  src={proj.image}
                  alt={isFa ? proj.titleFa : proj.titleEn}
                  url={proj.demoUrl || proj.githubUrl}
                />

                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold leading-snug text-[var(--text-primary)]">
                    {isFa ? proj.titleFa : proj.titleEn}
                  </h3>
                  <span className="text-[10px] px-2.5 py-1 rounded-full font-mono whitespace-nowrap border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]">
                    {proj.category.toUpperCase()}
                  </span>
                </div>

                <p className="text-xs leading-relaxed mb-6 text-[var(--text-secondary)]">
                  {isFa ? proj.descriptionFa : proj.descriptionEn}
                </p>

                {/* Challenge & Solution Architecture Box */}
                <div className="space-y-3 mb-6 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs">
                  <div>
                    <span className="font-mono text-[11px] font-bold text-[var(--text-primary)] block mb-0.5">
                      {isFa ? "چالش کارفرما (CHALLENGE):" : "CLIENT CHALLENGE:"}
                    </span>
                    <span className="text-[var(--text-secondary)] leading-relaxed">
                      {isFa ? proj.challengeFa : proj.challengeEn}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold text-[var(--text-primary)] block mb-0.5">
                      {isFa ? "راه‌حل مهندسی (SOLUTION):" : "ENGINEERING SOLUTION:"}
                    </span>
                    <span className="text-[var(--text-secondary)] leading-relaxed">
                      {isFa ? proj.solutionFa : proj.solutionEn}
                    </span>
                  </div>
                  <div className="pt-2.5 border-t border-[var(--border)] font-mono text-[11px] text-[var(--text-primary)] font-bold flex items-center gap-1.5">
                    <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isFa ? `دستاورد ثبت‌شده: ${proj.metricsFa}` : `VERIFIED OUTCOME: ${proj.metricsEn}`}</span>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-[var(--border)] text-xs flex-wrap gap-2 relative z-10">
                <div className="flex items-center gap-2">
                  {proj.caseStudyUrl && (
                    <Link
                      href={proj.caseStudyUrl}
                      className="tactile-btn px-3 py-1.5 text-xs font-bold gap-1.5"
                    >
                      <span>{isFa ? "مطالعه موردی" : "Case Study"}</span>
                      {isFa ? <FiArrowLeft className="w-3.5 h-3.5" /> : <FiArrowRight className="w-3.5 h-3.5" />}
                    </Link>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tactile-btn px-3 py-1.5 text-xs font-mono gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    >
                      <span>GitHub</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  )}
                </div>

                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tactile-btn px-3.5 py-1.5 font-bold text-xs gap-1.5 text-[var(--text-primary)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{isFa ? "مشاهده آنلاین" : "Live Demo"}</span>
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Case Studies Button */}
        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="tactile-btn px-7 py-3.5 text-xs font-bold text-[var(--text-primary)] gap-2 shadow-md"
          >
            <span>{isFa ? "مشاهده تمام پروژه‌ها و گزارشات فنی" : "Explore All Case Studies & Architecture Reports"}</span>
            <span className="text-xs rtl:rotate-180">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}