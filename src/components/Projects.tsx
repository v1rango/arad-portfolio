"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_DATA } from "@/lib/constants";

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

export default function Projects({ lang }: ProjectsProps) {
  const isFa = lang === "fa";
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${PERSONAL_DATA.githubUsername}/repos?sort=updated&per_page=6`
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Repository[] = await res.json();
        setRepos(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border)]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            {isFa ? "پروژه‌ها و نمونه‌کارها" : "Projects & Repositories"}
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            {isFa
              ? "آخرین پروژه‌ها و کدهای توسعه داده شده مستقیماً متصل به ریپوزیتوری گیت‌هاب."
              : "Latest open-source projects and code repositories synced directly with GitHub."}
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-48 rounded-xl bg-[var(--bg-surface)] animate-pulse border border-[var(--border)]/30"
              ></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-10 text-gray-400">
            {isFa
              ? "در حال حاضر امکان دریافت پروژه‌ها از گیت‌هاب وجود ندارد."
              : "Unable to load repositories from GitHub at the moment."}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-[var(--text-secondary)] transition-colors truncate">
                      {repo.name}
                    </h3>
                    {repo.language && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border)]/40 font-mono">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed mb-4">
                    {repo.description ||
                      (isFa
                        ? "پروژه برنامه نویسی شده با کدهای استاندارد و بهینه."
                        : "Source code repository built with standard and clean code.")}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]/30 text-xs text-gray-400 font-mono">
                  <div className="flex items-center gap-3">
                    <span>★ {repo.stargazers_count}</span>
                    <span>⑂ {repo.forks_count}</span>
                  </div>
                  <span className="text-[var(--accent)] font-semibold group-hover:underline">
                    {isFa ? "مشاهده کد ↗" : "View Code ↗"}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}