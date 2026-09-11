export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  commentFa: string;
  commentEn: string;
  rating: number;
}

export const PERSONAL_DATA = {
  nameFa: "آراد وفایی",
  nameEn: "Arad Vafaee",
  age: 18,
  roleFa: "توسعه‌دهنده فول‌استک & متخصص سئو",
  roleEn: "Full-Stack Developer & SEO Specialist",
  bioFa: "آراد وفایی متخصص توسعه فول‌استک وب‌اپلیکیشن‌ها با Next.js، TypeScript و MongoDB است و خدمات تخصصی سئوی نوین شامل SEO، AEO و GEO ارائه می‌دهد.",
  bioEn: "Arad Vafaee is a Full-Stack Web Developer specializing in Next.js, TypeScript, and MongoDB, alongside modern search optimization (SEO, AEO, GEO).",
  titlesFa: ["متخصص SEO / AEO / GEO", "توسعه‌دهنده فول‌استک وب و اپلیکیشن"],
  titlesEn: ["SEO / AEO / GEO Specialist", "Full-Stack Web & App Developer"],
  mainSkills: [
    { name: "Next.js", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "MongoDB", level: "Advanced" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "Framer Motion", level: "Advanced" },
  ],
  secondarySkills: ["Django", "Node.js", "JavaScript", "Bootstrap", "Python"],
  socials: {
    whatsapp: "https://wa.me/989394606013",
    instagram: "https://instagram.com/v1arad",
    telegram: "https://t.me/v1arad",
    github: "https://github.com/v1rango",
    phone: "+989394606013",
  },
  githubUsername: "v1rango",
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    name: "رضا محمدی",
    role: "مدیر فنی",
    company: "آرتان تک",
    avatar: "/avatars/user1.jpg",
    commentFa: "همکاری با آراد تجربه فوق‌العاده‌ای بود. تسلط کامل او روی Next.js و سئوی نوین (GEO) باعث شد رتبه سایت ما در کوتاه‌ترین زمان ارتقا پیدا کند.",
    commentEn: "Working with Arad was an amazing experience. His mastery over Next.js and modern GEO/SEO boosted our search rankings significantly.",
    rating: 5,
  },
  {
    id: "2",
    name: "سارا ابراهیمی",
    role: "بنیان‌گذار",
    company: "استارتاپ نوین",
    avatar: "/avatars/user2.jpg",
    commentFa: "سرعت بالای اجرای پروژه و طراحی دقیق و بدون لگ در موبایل از نقاط قوت اصلی آراد است. پروژه‌مان دقیقاً طبق زمان‌بندی تحویل داده شد.",
    commentEn: "High execution speed and smooth mobile UX are Arad's main strengths. Delivered right on schedule.",
    rating: 5,
  },
  {
    id: "3",
    name: "امیرحسین کاظمی",
    role: "مدیر مارکتینگ",
    company: "دیجیتال پارس",
    avatar: "/avatars/user3.jpg",
    commentFa: "پیاده‌سازی دقیق اصول AEO و پاسخ‌گویی مستقیم هوش مصنوعی باعث شد ورودی هوشمند سایت ما ۳ برابر شود.",
    commentEn: "Implementing exact AEO principles tripling our AI-driven organic traffic.",
    rating: 5,
  },
  {
    id: "4",
    name: "Elena Rostova",
    role: "Product Owner",
    company: "Global Web Solutions",
    avatar: "/avatars/user4.jpg",
    commentFa: "کیفیت کد و ساختار استاندارد بدون کامنت اضافی و کاملاً بهینه برای deployment روی Cloudflare Pages بسیار شگفت‌انگیز بود.",
    commentEn: "Code quality and architecture optimized for Cloudflare Pages were outstanding.",
    rating: 5,
  },
  {
    id: "5",
    name: "مهدی قربانی",
    role: "طراح UI/UX",
    company: "دیزاین استودیو",
    avatar: "/avatars/user5.jpg",
    commentFa: "آراد طرح‌های پیگما را با کوچک‌ترین جزئیات و با انیمیشن‌های فوق‌العاده نرم و روان پیاده کرد.",
    commentEn: "Arad translated Figma designs into seamless, responsive web components flawlessly.",
    rating: 5,
  },
  {
    id: "6",
    name: "نیلوفر شریفی",
    role: "مشاور سئو",
    company: "سئو پرو",
    avatar: "/avatars/user6.jpg",
    commentFa: "درک عمیق آراد از الگوریتم‌های جدید گوگل و هوش مصنوعی، او را از سایر برنامه‌نویسان متمایز می‌کند.",
    commentEn: "Arad's deep understanding of search engines and AI generative engines sets him apart.",
    rating: 5,
  },
];