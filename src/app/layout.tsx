import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vazirmatn = localFont({
  src: "../../public/fonts/Vazirmatn.woff2",
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "آراد وفایی | پورتفولیو توسعه‌دهنده فول‌استک & متخصص سئو نوین",
  description: "پورتفولیو رسمی آراد وفایی - توسعه‌دهنده فول‌استک Next.js 16، NestJS و معمار سئوی نوین (AEO/GEO)",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" data-theme="dark" className={`${vazirmatn.variable}`}>
      <head>
                <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('portfolio-theme');
                if (t === 'light' || t === 'dark') {
                  document.documentElement.setAttribute('data-theme', t);
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent)] selection:text-white">
                <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-white focus:rounded-lg focus:font-bold"
        >
          رفتن به محتوای اصلی
        </a>
        <ThemeLanguageProvider>
          {children}
        </ThemeLanguageProvider>
      </body>
    </html>
  );
}