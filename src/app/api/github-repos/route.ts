import { NextResponse } from "next/server";

const FALLBACK_REPOS = [
  {
    id: 101,
    name: "arad-portfolio",
    description: "Next.js 16 high-performance personal portfolio with modern AI search optimization (AEO/GEO).",
    html_url: "https://github.com/v1rango/arad-portfolio",
    stargazers_count: 8,
    forks_count: 2,
    language: "TypeScript",
    updated_at: new Date().toISOString(),
  },
  {
    id: 102,
    name: "arad-gallery",
    description: "Ultra-fast Next.js jewelry e-commerce and showcase platform with Google #1 ranking in 12h.",
    html_url: "https://github.com/v1rango",
    stargazers_count: 12,
    forks_count: 3,
    language: "TypeScript",
    updated_at: new Date().toISOString(),
  },
  {
    id: 103,
    name: "next16-aeo-geo-template",
    description: "Production-ready enterprise Next.js template structured for LLM and Answer Engine citation.",
    html_url: "https://github.com/v1rango",
    stargazers_count: 15,
    forks_count: 4,
    language: "TypeScript",
    updated_at: new Date().toISOString(),
  },
  {
    id: 104,
    name: "fullstack-nest-next-engine",
    description: "High-concurrency full-stack architecture powered by NestJS, PostgreSQL and Next.js.",
    html_url: "https://github.com/v1rango",
    stargazers_count: 9,
    forks_count: 1,
    language: "TypeScript",
    updated_at: new Date().toISOString(),
  },
  {
    id: 105,
    name: "headless-speed-commerce",
    description: "Sub-second load time modern headless commerce storefront with zero layout shifts.",
    html_url: "https://github.com/v1rango",
    stargazers_count: 7,
    forks_count: 2,
    language: "TypeScript",
    updated_at: new Date().toISOString(),
  },
  {
    id: 106,
    name: "ai-search-citation-audit",
    description: "Diagnostic tools and Schema.org generators for optimizing visibility across ChatGPT & Gemini.",
    html_url: "https://github.com/v1rango",
    stargazers_count: 11,
    forks_count: 3,
    language: "JavaScript",
    updated_at: new Date().toISOString(),
  },
];

export async function GET() {
  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      "User-Agent": "arad-portfolio/1.0",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      "https://api.github.com/users/v1rango/repos?sort=updated&per_page=6",
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return NextResponse.json(data);
      }
    }

    return NextResponse.json(FALLBACK_REPOS, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json(FALLBACK_REPOS, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  }
}

