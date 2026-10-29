import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vazirmatn = localFont({
  src: "../../public/fonts/Vazirmatn.woff2",
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arad Vafaee | Full-Stack Engineer & Modern Web Architect",
  description: "Official portfolio of Arad Vafaee — Next.js 16 Full-Stack Engineer, AI Automation, Sub-0.8s Performance & Modern AEO/GEO SEO Architect",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
};

import { ThemeLanguageProvider } from "@/context/ThemeLanguageContext";
import ClientChatBot from "@/components/ClientChatBot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" className={`${vazirmatn.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('portfolio-theme');
                if (t === 'light' || t === 'dark') {
                  document.documentElement.setAttribute('data-theme', t);
                } else if (window.matchMedia) {
                  var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
                }
                var l = localStorage.getItem('portfolio-lang');
                if (l === 'fa' || l === 'en') {
                  document.documentElement.setAttribute('lang', l);
                  document.documentElement.setAttribute('dir', l === 'fa' ? 'rtl' : 'ltr');
                } else {
                  document.documentElement.setAttribute('lang', 'en');
                  document.documentElement.setAttribute('dir', 'ltr');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent)] selection:text-white">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--text-primary)] focus:text-[var(--bg-primary)] focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>
        <ThemeLanguageProvider>
          {children}
          <ClientChatBot />
        </ThemeLanguageProvider>
      </body>
    </html>
  );
}