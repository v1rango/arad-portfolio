import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

// پیکربندی فونت رایگان و استاندارد وزیرمتن از گوگل
const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"], // پشتیبانی کامل از فارسی و انگلیسی
  weight: ["300", "400", "500", "600", "700", "800"], // ضخامت‌های مختلف
  variable: "--font-vazirmatn", // متغیر CSS برای استفاده در تیلویند
  display: "swap", // بهینه‌سازی سرعت لود فونت
});

export const metadata: Metadata = {
  title: "آراد وفایی | پورتفولیو توسعه‌دهنده فول‌استک & متخصص سئو نوین",
  description: "پورتفولیو رسمی آراد وفایی - توسعه‌دهنده فول‌استک Next.js 16، NestJS و معمار سئوی نوین (AEO/GEO)",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable}`}>
      <body className="font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent)] selection:text-white">
        {children}
      </body>
    </html>
  );
}