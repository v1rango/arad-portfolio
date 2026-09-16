export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aradvafaee.ir";


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

export interface FeaturedProject {
  id: string;
  titleFa: string;
  titleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  challengeFa: string;
  challengeEn: string;
  solutionFa: string;
  solutionEn: string;
  metricsFa: string;
  metricsEn: string;
  techStack: string[];
  category: "nextjs" | "ai-seo" | "fullstack";
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

export const PERSONAL_DATA = {
  nameFa: "آراد وفایی",
  nameEn: "Arad Vafaee",
  age: 18,
  roleFa: "توسعه‌دهنده فول‌استک & متخصص سئو و هوش مصنوعی",
  roleEn: "Full-Stack Developer & AI Search Optimization Specialist",
  bioFa: "آراد وفایی توسعه‌دهنده وب با تخصص در Next.js 16، React 19، TypeScript و سئوی نوین (AEO & GEO) است. تمرکز او بر تولید وب‌اپلیکیشن‌های سریع، واکنش‌گرا و بهینه‌سازی‌شده برای موتورهای پاسخ‌گوی هوش مصنوعی نظیر ChatGPT، Perplexity و Google Gemini است.",
  bioEn: "Arad Vafaee is a Full-Stack Web Developer specializing in Next.js 16, React 19, TypeScript, and Generative Engine Optimization (AEO/GEO), building ultra-fast web apps optimized for AI search engines.",
  titlesFa: ["متخصص توسعه فول‌استک (NestJS & Next.js)", "متخصص بهینه‌سازی سئو، AEO و GEO", "طراح تجارب کاربری بهینه و شتاب‌یافته"],
  titlesEn: ["Full-Stack Developer (NestJS & Next.js)", "SEO, AEO & GEO Optimization Specialist", "High-Performance Web Architect"],
  metrics: [
    { labelFa: "امتیاز عملکرد Lighthouse", labelEn: "Lighthouse Performance", value: "99+" },
    { labelFa: "سرعت رندر موبایل", labelEn: "Mobile Frame Rate", value: "60 FPS" },
    { labelFa: "تطابق با استانداردهای AI", labelEn: "AI / GEO Readiness", value: "100%" },
    { labelFa: "کاهش بار پردازشی سرور", labelEn: "Server Latency", value: "< 100ms" },
  ],
  mainSkills: [
    { name: "Next.js", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "NestJS", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "Tailwind CSS", level: "Expert" },
  ],
  secondarySkills: ["MongoDB", "Node.js", "Django", "JavaScript", "Python"],
  socials: {
    whatsapp: "https://wa.me/989394606013",
    instagram: "https://instagram.com/v1arad",
    telegram: "https://t.me/v1arad",
    github: "https://github.com/v1rango",
    phone: "+989394606013",
  },
  githubUsername: "v1rango",
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "arad-gallery",
    titleFa: "فروشگاه آنلاین لوازم آرایشی و بهداشتی گالری آراد",
    titleEn: "Arad Gallery - Cosmetics & Beauty E-Commerce",
    descriptionFa: "پلتفرم فروشگاهی مدرن و اختصاصی جهت عرضه محصولات آرایشی و مراقبتی با معماری مقیاس‌پذیر، مدیریت سبد خرید بلادرنگ و امنیت بالا.",
    descriptionEn: "Modern and scalable full-stack cosmetics e-commerce platform with real-time cart handling, indexed catalog search, and high-security architecture.",
    challengeFa: "مدیریت حجم بالای تنوع محصولات، دسته‌بندی‌های چندسطحی، و فیلترهای پویا بدون کاهش سرعت لود در تلفن‌های همراه.",
    challengeEn: "Handling high volume of multi-level product categories and instant attributes filtering without mobile latency.",
    solutionFa: "طراحی میکروسرویس ماژولار با NestJS و TypeScript، پایگاه‌داده بهینه‌شده با PostgreSQL و ایندکس‌گذاری پیشرفته همراه با رابط کاربری سبک Tailwind CSS.",
    solutionEn: "Architected modular NestJS + TypeScript backend with indexed PostgreSQL database and ultra-responsive Tailwind CSS frontend.",
    metricsFa: "پاسخ‌دهی کوئری‌ها در کمتر از ۶۰ میلی‌ثانیه و فیلتر بدون لگ محصولات",
    metricsEn: "<60ms database query response time & instant zero-lag product filtering.",
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    category: "fullstack",
    demoUrl: "https://arad-gallery.ir",
    image: "/projects/arad-gallery.webp",
  },
  {
    id: "geo-portfolio",
    titleFa: "پلتفرم پورتفولیو هوشمند مبتنی بر GEO و Next.js 16",
    titleEn: "Smart GEO-Optimized Next.js 16 Portfolio",
    descriptionFa: "معماری پیشرفته وب با رندر هیبریدی، استخراج داده توسط موتورهای هوش مصنوعی (ChatGPT و Perplexity) و انیمیشن‌های شتاب‌یافته سخت‌افزاری.",
    descriptionEn: "High-performance hybrid web architecture featuring AI-crawling readiness, semantic JSON-LD graph, and GPU-accelerated micro-interactions.",
    challengeFa: "نیاز به نمایش بلادرنگ اطلاعات و قابلیت رفرنس‌دهی مستقیم توسط ربات‌های هوش مصنوعی بدون افت سرعت موبایل.",
    challengeEn: "Required instant AI indexing capability and direct snippet citation without mobile performance lag.",
    solutionFa: "پیاده‌سازی متاتگ‌های پیشرفته، فرمت llms.txt، اسکیماهای تفکیک‌شده و رندرسازی بدون کامنت‌های اضافی.",
    solutionEn: "Implemented llms.txt standard, structured entity graph, and zero-layout-shift responsive Tailwind styling.",
    metricsFa: "افزایش ۱۰۰٪ خوانایی توسط خزنده‌های AI و امتیاز لایت‌هاوس ۹۹+",
    metricsEn: "100% AI crawler indexability and 99+ Lighthouse performance score.",
    techStack: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "JSON-LD"],
    category: "ai-seo",
    githubUrl: "https://github.com/v1rango/arad-portfolio",
    demoUrl: SITE_URL,
    image: "/projects/geo-portfolio.webp",
  },
];

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
    commentFa: "کیفیت کد و ساختار استاندارد بدون کامنت اضافی و کاملاً بهینه برای deployment روی سرورهای ابری بسیار شگفت‌انگیز بود.",
    commentEn: "Code quality and architecture optimized for cloud deployment were outstanding.",
    rating: 5,
  },
  {
    id: "5",
    name: "مهدی قربانی",
    role: "طراح UI/UX",
    company: "دیزاین استودیو",
    avatar: "/avatars/user5.jpg",
    commentFa: "آراد طرح‌های فیگما را با کوچک‌ترین جزئیات و با انیمیشن‌های فوق‌العاده نرم و روان حتی در گوشی‌های معمولی پیاده کرد.",
    commentEn: "Arad translated Figma designs into seamless, responsive web components flawlessly even on budget phones.",
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