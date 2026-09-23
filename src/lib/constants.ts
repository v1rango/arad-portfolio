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

export interface ServiceItem {
  id: string;
  titleFa: string;
  titleEn: string;
  tagFa: string;
  tagEn: string;
  simpleDescFa: string;
  simpleDescEn: string;
  techDetailFa: string;
  techDetailEn: string;
  benefitsFa: string[];
  benefitsEn: string[];
  icon: "web" | "ai" | "speed" | "fullstack";
}

export interface WorkProcessStep {
  stepNumber: string;
  titleFa: string;
  titleEn: string;
  descFa: string;
  descEn: string;
  highlightFa: string;
  highlightEn: string;
}

export interface ComparisonItem {
  featureFa: string;
  featureEn: string;
  customFa: string;
  customEn: string;
  standardFa: string;
  standardEn: string;
  customHighlight: boolean;
}

export const PERSONAL_DATA = {
  nameFa: "آراد وفایی",
  nameEn: "Arad Vafaee",
  age: 18,
  roleFa: "توسعه‌دهنده فول‌استک Next.js & متخصص سئو هوش مصنوعی (AEO/GEO)",
  roleEn: "Full-Stack Next.js Developer & AI Search Optimization Specialist",
  taglineFa: "خلق وب‌سایت‌های لوکس و پرسرعت که مشتری جذب می‌کنند و در هوش مصنوعی رتبه اول هستند",
  taglineEn: "Crafting luxury, ultra-fast web platforms that convert users and rank #1 in AI search",
  bioFa: "من آراد وفایی هستم؛ توسعه‌دهنده فول‌استک و متخصص سئو نوین. هدف من این است که کسب‌وکار شما وب‌سایتی با سرعت موشکی (لود زیر ۱ ثانیه)، ظاهری هم‌تراز برندهای مطرح دنیا، و رتبه تضمینی در گوگل و موتورهای هوش مصنوعی (ChatGPT، Perplexity و Gemini) داشته باشد.",
  bioEn: "I am Arad Vafaee, a Full-Stack Web Developer and Modern Search Architect. I build ultra-fast web applications (sub-second load times) with world-class UX, engineered to rank #1 on Google and be directly cited by ChatGPT, Perplexity, and Gemini.",
  titlesFa: [
    "طراح و توسعه‌دهنده وب‌سایت‌های پرسرعت و اختصاصی",
    "متخصص سئوی نوین برای هوش مصنوعی (AEO & GEO)",
    "معمار پلتفرم‌های تحت وب و پنل‌های مدرن (Next.js 16 & NestJS)",
  ],
  titlesEn: [
    "High-Converting Custom Web & Next.js Architect",
    "Modern AI Search & Generative Engine Optimizer (AEO/GEO)",
    "Full-Stack Web Platforms & Scalable Systems Engineer",
  ],
  metrics: [
    { labelFa: "امتیاز لایت‌هاوس گوگل", labelEn: "Lighthouse Score", value: "100" },
    { labelFa: "سرعت باز شدن سایت", labelEn: "Load Speed", value: "< 0.8s" },
    { labelFa: "روانی انیمیشن در موبایل", labelEn: "Mobile Frame Rate", value: "60 FPS" },
    { labelFa: "آمادگی برای هوش مصنوعی", labelEn: "AI Search Readiness", value: "100%" },
  ],
  mainSkills: [
    { name: "Next.js", level: "Expert", simpleFa: "توسعه سریع‌ترین نسل وب‌سایت‌ها" },
    { name: "TypeScript", level: "Expert", simpleFa: "کدنویسی بدون خطا و با امنیت بالا" },
    { name: "NestJS", level: "Advanced", simpleFa: "مدیریت سرور و داده‌های پرحجم" },
    { name: "PostgreSQL", level: "Advanced", simpleFa: "بانک اطلاعاتی امن و لحظه‌ای" },
    { name: "Tailwind CSS", level: "Expert", simpleFa: "طراحی رابط کاربری لوکس و سبک" },
  ],
  secondarySkills: ["MongoDB", "Node.js", "Django", "JavaScript", "Python"],
  socials: {
    linkedin: "https://linkedin.com/in/aradvafaee",
    whatsapp: "https://wa.me/989394606013",
    instagram: "https://instagram.com/v1arad",
    telegram: "https://t.me/v1arad",
    github: "https://github.com/v1rango",
    phone: "+989394606013",
  },
  githubUsername: "v1rango",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "custom-web",
    titleFa: "طراحی و توسعه وب‌سایت‌های اختصاصی و فروشگاهی",
    titleEn: "Custom High-Performance Web & E-Commerce",
    tagFa: "Next.js 16 + React 19",
    tagEn: "Next.js 16 + React 19",
    simpleDescFa: "ساخت وب‌سایتی با ظاهر اختصاصی و بین‌المللی که زیر یک ثانیه لود می‌شود تا هیچ مشتری یا خریداری سایت شما را به خاطر کُندی ترک نکند.",
    simpleDescEn: "Custom, tailor-made web platforms loading in sub-second times, maximizing user retention and client conversions.",
    techDetailFa: "معماری سرور کامپوننت‌های رندر هیبریدی (RSC)، کشینگ لبه و کد تمیز بدون کدهای اضافه وردپرس.",
    techDetailEn: "Hybrid Server Components (RSC), Edge Caching, and zero bloatware architecture.",
    benefitsFa: [
      "سرعت موشکی و لود آنی حتی در اینترنت ضعیف همراه",
      "طراحی منحصر‌به‌فرد منطبق با هویت و رنگ‌بندی برند شما",
      "امنیت حداکثری و غیرقابل نفوذ در مقایسه با قالب‌های آماده",
      "پنل مدیریت آسان و اختصاصی بدون پیچیدگی‌های گیج‌کننده",
    ],
    benefitsEn: [
      "Instant loading even on mobile data connections",
      "Unique branding tailored specifically to your business",
      "Enterprise-grade security without third-party plugin vulnerabilities",
      "Streamlined, user-friendly management dashboard",
    ],
    icon: "web",
  },
  {
    id: "ai-seo",
    titleFa: "سئوی نوین هوش مصنوعی (AEO & GEO) و گوگل",
    titleEn: "Next-Gen AI & Search Engine Optimization (AEO/GEO)",
    tagFa: "ChatGPT • Perplexity • Google",
    tagEn: "ChatGPT • Perplexity • Google",
    simpleDescFa: "کاری می‌کنم که وقتی مردم در گوگل یا چت‌بات‌های هوش مصنوعی (مانند ChatGPT و پرپلکسیتی) خدمات شما را سرچ می‌کنند، شما اولین گزینه‌ای باشید که معرفی می‌شوید.",
    simpleDescEn: "Position your brand as the primary authoritative answer cited across Google, ChatGPT, Perplexity, and Gemini.",
    techDetailFa: "پیاده‌سازی نمودار داده‌های ساختاریافته Schema.org، استاندارد جهانی llms.txt و پاسخ‌های بهینه برای AI Snippets.",
    techDetailEn: "Multi-layered Schema.org JSON-LD graphs, official llms.txt standard, and direct-answer entity structuring.",
    benefitsFa: [
      "حضور در جعبه پاسخ مستقیم گوگل (Featured Snippets)",
      "ارجاع رسمی نام و لینک شما توسط موتورهای هوش مصنوعی",
      "افزایش چشمگیر ورودی مشتریان واقعی و آماده خرید",
      "ماندگاری طولانی‌مدت رتبه بدون نیاز به هزینه‌های مداوم تبلیغات",
    ],
    benefitsEn: [
      "Direct Google Featured Snippet captures",
      "Official citation by generative LLMs when users query your niche",
      "Surge in organic high-intent customer inquiries",
      "Long-term sustainable visibility without constant ad spend",
    ],
    icon: "ai",
  },
  {
    id: "speed-optimization",
    titleFa: "نجات و بهینه‌سازی سرعت سایت‌های کند (PageSpeed 100)",
    titleEn: "Speed Optimization & Core Web Vitals Rescue",
    tagFa: "Lighthouse 100 / 100",
    tagEn: "Lighthouse 100 / 100",
    simpleDescFa: "اگر وب‌سایت فعلی شما کند است یا مشتریان می‌گویند دیر لود می‌شود، کدهایش را بازسازی می‌کنیم تا نمره لایت‌هاوس آن به ۱۰۰ برسد.",
    simpleDescEn: "Transform laggy, slow-loading websites into lightning-fast platforms with guaranteed 95-100 Core Web Vitals.",
    techDetailFa: "حذف کدهای مسدودکننده (Render-blocking JS)، بهینه‌سازی تصاویر نسل جدید WebP/AVIF و صفر کردن CLS.",
    techDetailEn: "Elimination of render-blocking JS, automated modern image pipeline, and zero layout shift.",
    benefitsFa: [
      "کاهش ۹۰ درصدی فرار کاربران به دلیل کندی صفحات",
      "ارتقای فوری رتبه سئو به دلیل اولویت سرعت در الگوریتم‌های گوگل",
      "اجرای بی‌نهایت روان و بدون لَگ انیمیشن‌ها روی گوشی‌های میان‌رده",
      "کاهش هزینه‌های سرور و هاستینگ با بهینه‌سازی مصرف رم و پردازنده",
    ],
    benefitsEn: [
      "90% reduction in bounce rate caused by slow page loads",
      "Immediate SEO boost from Google's speed-first indexing algorithm",
      "Smooth 60 FPS transitions and micro-interactions on mobile",
      "Lower hosting and server compute costs",
    ],
    icon: "speed",
  },
  {
    id: "fullstack-platforms",
    titleFa: "توسعه وب‌اپلیکیشن‌ها و سامانه‌های اختصاصی",
    titleEn: "Full-Stack Custom Web Platforms & Dashboards",
    tagFa: "NestJS • PostgreSQL • TypeScript",
    tagEn: "NestJS • PostgreSQL • TypeScript",
    simpleDescFa: "طراحی سامانه‌های تحت وب اختصاصی مانند پنل‌های فروش، دشبوردهای سازمانی، سیستم‌های رزرو آنلاین یا حساب‌های کاربری امن.",
    simpleDescEn: "Architecting scalable web applications, business dashboards, real-time booking engines, and secure client portals.",
    techDetailFa: "توسعه میکروسرویس‌های تایپ‌اسکریپت، وب‌سوکت بلادرنگ، امنیت داده و دیتابیس رابطه‌ای ایندکس‌شده.",
    techDetailEn: "Modular TypeScript microservices, real-time WebSockets, relational DB indexing, and stateless auth.",
    benefitsFa: [
      "قابلیت تحمل هزاران کاربر هم‌زمان بدون افت سرعت یا قطعی",
      "گزارش‌گیری دقیق و دشبورد مدیریتی دلخواه بر اساس نیاز بیزینس",
      "قابلیت اتصال به درگاه‌های پرداخت، پیامک و وب‌سرویس‌های ثالث",
      "پشتیبانی فنی و امکان ارتقای نامحدود در آینده",
    ],
    benefitsEn: [
      "Handles thousands of concurrent active users effortlessly",
      "Custom business intelligence reports and analytics dashboards",
      "Seamless integration with payment gateways, SMS, and external APIs",
      "Long-term support with infinite scalability",
    ],
    icon: "fullstack",
  },
];

export const WORK_PROCESS: WorkProcessStep[] = [
  {
    stepNumber: "01",
    titleFa: "مشاوره و استراتژی",
    titleEn: "Discovery & Strategy",
    descFa: "بررسی اهداف کسب‌وکار شما، نیازهای مشتریان و آنالیز رقبا برای تدوین نقشه راه دقیق و شفاف پروژه.",
    descEn: "Analyzing business objectives, target audience expectations, and competitive landscape to establish project roadmap.",
    highlightFa: "تخمین دقیق زمان و شفافیت کامل هزینه",
    highlightEn: "Accurate timeline & transparent scope",
  },
  {
    stepNumber: "02",
    titleFa: "طراحی رابط کاربری لوکس (UI/UX)",
    titleEn: "Modern UI/UX Architecture",
    descFa: "طراحی پروتوتایپ‌های چشم‌نواز با هویت اختصاصی که کاربر را شیفته و ترغیب به ثبت سفارش یا خرید کند.",
    descEn: "Crafting modern, high-converting interfaces and intuitive flows that build trust and elevate brand prestige.",
    highlightFa: "طراحی ویژه موبایل و دسکتاپ (واکنش‌گرا)",
    highlightEn: "Mobile-first & device-adaptive precision",
  },
  {
    stepNumber: "03",
    titleFa: "برنامه‌نویسی پرسرعت و تمیز",
    titleEn: "Clean Engineering & Speed",
    descFa: "کدنویسی استاندارد با Next.js 16، انیمیشن‌های روان ۶۰ فریم و بهینه‌سازی عمیق جهت لود زیر ۱ ثانیه.",
    descEn: "Building modular, clean code using Next.js 16 and GPU-accelerated micro-interactions for instant load times.",
    highlightFa: "نمره ۱۰۰ در تست‌های رسمی گوگل",
    highlightEn: "100 Lighthouse Performance score",
  },
  {
    stepNumber: "04",
    titleFa: "بهینه‌سازی هوش مصنوعی و لانچ",
    titleEn: "AI Search Readiness & Launch",
    descFa: "تزریق اسکیماهای AEO/GEO برای رتبه ۱ گوگل و چت‌بات‌های AI، استقرار روی سرور پرقدرت و پشتیبانی مداوم.",
    descEn: "Deploying semantic schemas for Google & AI citations, deploying on production servers, and continuous support.",
    highlightFa: "آماده جذب ورودی و فروش از روز اول",
    highlightEn: "Ready to convert and generate leads from day one",
  },
];

export const COMPARISON_DATA: ComparisonItem[] = [
  {
    featureFa: "سرعت لود اولیه صفحات",
    featureEn: "Initial Page Load Speed",
    customFa: "زیر ۰.۸ ثانیه (فوری و بدون انتظار)",
    customEn: "< 0.8s (Instantaneous)",
    standardFa: "معمولاً ۳ تا ۸ ثانیه (کند و خسته‌کننده)",
    standardEn: "3 to 8+ seconds (High drop-off rate)",
    customHighlight: true,
  },
  {
    featureFa: "رتبه در هوش مصنوعی (AEO & GEO)",
    featureEn: "AI Search Engine Citations",
    customFa: "پشتیبانی ۱۰۰٪ توسط ساختار اسکیما و llms.txt",
    customEn: "100% Native support via Schema graph & llms.txt",
    standardFa: "تقریباً صفر (نامفهوم برای ربات‌های هوش مصنوعی)",
    standardEn: "Near zero (Inaccessible to modern AI bots)",
    customHighlight: true,
  },
  {
    featureFa: "امنیت در برابر هک و نفوذ",
    featureEn: "Security & Vulnerability",
    customFa: "معماری بسته و بدون آسیب‌پذیری‌های افزونه‌ها",
    customEn: "Enterprise architecture, zero plugin vulnerabilities",
    standardFa: "آسیب‌پذیری بالا به دلیل پلاگین‌های متعدد و نال‌شده",
    standardEn: "High vulnerability risk from outdated plugins",
    customHighlight: true,
  },
  {
    featureFa: "طراحی و تجربه کاربری (UI/UX)",
    featureEn: "Design & UX Quality",
    customFa: "کاملاً اختصاصی، هم‌تراز برندهای سیلیکون ولی",
    customEn: "100% Bespoke, Silicon Valley-grade aesthetics",
    standardFa: "قالب‌های تکراری و مشابه هزاران سایت دیگر",
    standardEn: "Generic cookie-cutter templates seen everywhere",
    customHighlight: true,
  },
  {
    featureFa: "تحمل ترافیک و فروش در حراجی‌ها",
    featureEn: "High-Traffic Scalability",
    customFa: "پایداری کامل حتی با ده‌ها هزار کاربر همزمان",
    customEn: "Effortlessly handles 10,000+ concurrent visitors",
    standardFa: "کرش کردن و افتادن سرور در زمان تبلیغات",
    standardEn: "Server crashes during marketing traffic spikes",
    customHighlight: true,
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "arad-gallery",
    titleFa: "فروشگاه آنلاین محصولات آرایشی و زیبایی (گالری آراد)",
    titleEn: "Arad Gallery — High-Performance E-Commerce",
    descriptionFa: "پلتفرم فروشگاهی اختصاصی با سبد خرید لحظه‌ای، فیلترهای فوق‌سریع محصولات و سرعت باز شدن استثنایی که نرخ تبدیل مشتریان را متحول کرده است.",
    descriptionEn: "Modern full-stack cosmetics e-commerce platform with real-time cart handling, instant search, and ultra-high conversion rates.",
    challengeFa: "چگونه هزاران محصول با تنوع بالا را بدون افت سرعت در گوشی‌های موبایل لود کنیم؟",
    challengeEn: "How to display thousands of diverse products with instant filtering without lag on mobile phones?",
    solutionFa: "طراحی سرور ماژولار و دیتابیس بهینه‌شده که نتایج را در کسری از ثانیه (زیر ۶۰ میلی‌ثانیه) نمایش می‌دهد و تجربه خریدی نرم و لذت‌بخش ایجاد می‌کند.",
    solutionEn: "Architected a modular backend and indexed database providing sub-60ms responses for zero-lag mobile shopping.",
    metricsFa: "لود نتایج جستجو زیر ۶۰ میلی‌ثانیه و بدون باگ در پیک ترافیک",
    metricsEn: "<60ms instant search response and zero downtime during traffic spikes",
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    category: "fullstack",
    demoUrl: "https://arad-gallery.ir",
    image: "/projects/arad-gallery.webp",
  },
  {
    id: "geo-portfolio",
    titleFa: "پلتفرم پورتفولیو و معماری هوشمند سئو (AEO/GEO)",
    titleEn: "Smart AI-Optimized Web Architecture (GEO/AEO)",
    descriptionFa: "سامانه وب نسل جدید که علاوه بر رتبه ۱ گوگل در ۱۲ ساعت، به گونه‌ای برنامه‌ریزی شده که چت‌بات‌های هوش مصنوعی نام صاحب برند را به عنوان مرجع نقل می‌کنند.",
    descriptionEn: "Next-gen web architecture achieving #1 Google ranking in 12 hours, built to be cited directly by ChatGPT and modern search bots.",
    challengeFa: "چگونه محتوای سایت را طوری ساختاربندی کنیم که هم برای انسان جذاب باشد و هم هوش مصنوعی آن را رفرنس دهد؟",
    challengeEn: "How to structure website content to be visually captivating to humans while natively citeable by AI bots?",
    solutionFa: "پیاده‌سازی گراف هوشمند Schema.org، استاندارد llms.txt و فشرده‌سازی استایل‌ها بدون حتی ۱ میلی‌ثانیه کندی یا شیفت صفحه.",
    solutionEn: "Implemented JSON-LD semantic entity graph, llms.txt protocol, and zero-layout-shift responsive Tailwind styling.",
    metricsFa: "رتبه ۱ گوگل در ۱۲ ساعت + امتیاز ۱۰۰ لایت‌هاوس در تمام شاخص‌ها",
    metricsEn: "Rank #1 on Google in 12 hours + 100/100 Lighthouse on all metrics",
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
    commentFa: "همکاری با آراد تحولی بزرگ برای ما بود. تسلط شگفت‌انگیز او روی Next.js و سئوی هوش مصنوعی باعث شد سایتمان در مدت کوتاهی به صفحه اول گوگل برسد و ورودی مشتریانمان چند برابر شود.",
    commentEn: "Working with Arad was a game-changer. His mastery over Next.js and AI SEO brought our website to Google page 1, multiplying our client inquiries.",
    rating: 5,
  },
  {
    id: "2",
    name: "سارا ابراهیمی",
    role: "بنیان‌گذار",
    company: "استارتاپ نوین",
    avatar: "/avatars/user2.jpg",
    commentFa: "چیزی که آراد را متمایز می‌کند، درک دقیق نیاز بیزینس و سرعت باورنکردنی سایت است. روی ضعیف‌ترین گوشی‌ها هم سایت با روانی کامل باز می‌شود.",
    commentEn: "What sets Arad apart is his deep business acumen and incredible loading speeds. The site runs silky smooth even on budget smartphones.",
    rating: 5,
  },
  {
    id: "3",
    name: "امیرحسین کاظمی",
    role: "مدیر مارکتینگ",
    company: "دیجیتال پارس",
    avatar: "/avatars/user3.jpg",
    commentFa: "پیاده‌سازی اصول AEO و هوش مصنوعی باعث شد وقتی مخاطبان در ChatGPT دنبال خدمات حوزه ما می‌گردند، اسم ما به عنوان گزینه اول پیشنهاد شود!",
    commentEn: "Implementing AEO principles led ChatGPT to directly recommend our company whenever users query services in our industry!",
    rating: 5,
  },
  {
    id: "4",
    name: "Elena Rostova",
    role: "Product Owner",
    company: "Global Web Solutions",
    avatar: "/avatars/user4.jpg",
    commentFa: "کیفیت کد و اجرای دقیق انیمیشن‌ها دقیقاً مثل نمونه‌های سیلیکون ولی بود. تحویل پروژه کاملاً سر وقت و بدون باگ انجام شد.",
    commentEn: "Code quality and animation precision felt like top Silicon Valley standards. Delivered flawlessly on schedule.",
    rating: 5,
  },
  {
    id: "5",
    name: "مهدی قربانی",
    role: "طراح UI/UX",
    company: "دیزاین استودیو",
    avatar: "/avatars/user5.jpg",
    commentFa: "به عنوان طراح، وسواس زیادی روی اجرای جزئیات دارم. آراد طراحی‌های فیگما را با کوچک‌ترین پیکسل و نرم‌ترین انیمیشن‌ها زنده کرد.",
    commentEn: "As a designer, I'm picky about micro-details. Arad brought our Figma files to life pixel-by-pixel with buttery-smooth interactions.",
    rating: 5,
  },
  {
    id: "6",
    name: "نیلوفر شریفی",
    role: "مشاور سئو و دیجیتال برندینگ",
    company: "سئو پرو",
    avatar: "/avatars/user6.jpg",
    commentFa: "درک عمیق آراد از سئوی تکنیکال و فاکتورهای مدرن Core Web Vitals باعث شد تمام تست‌های سبز گوگل را با نمره ۱۰۰ دریافت کنیم.",
    commentEn: "Arad's technical SEO expertise and Core Web Vitals optimizations scored straight 100s across all Google audit metrics.",
    rating: 5,
  },
];

export const FAQ_LIST = [
  {
    id: "1",
    qFa: "آراد وفایی چه خدماتی ارائه می‌دهد و چگونه به کسب‌وکار من کمک می‌کند؟",
    aFa: "آراد وفایی خدمات جامع طراحی و ساخت وب‌سایت‌های مدرن و فروشگاهی پرسرعت با Next.js 16، سئوی نوین هوش مصنوعی (AEO & GEO) برای پیشنهاد شدن در چت‌بات‌ها و گوگل، بهینه‌سازی سرعت سایت‌های کند به نمره ۱۰۰، و ساخت سامانه‌های تحت وب اختصاصی را ارائه می‌دهد. هدف نهایی تبدیل وب‌سایت شما به ابزاری قدرتمند برای جذب مشتری و فروش است.",
    qEn: "What services does Arad Vafaee provide and how do they benefit my business?",
    aEn: "Arad Vafaee offers high-performance custom web development with Next.js 16, cutting-edge AI SEO (AEO/GEO) to get cited by ChatGPT and Google, speed optimization to 100/100 Core Web Vitals, and custom web platforms. The ultimate goal is turning your website into an authoritative client-converting engine.",
  },
  {
    id: "2",
    qFa: "تفاوت وب‌سایت اختصاصی با سایت‌های آماده وردپرسی چیست؟",
    aFa: "سایت‌های آماده وردپرس معمولاً به دلیل افزونه‌های متعدد کند هستند (لود ۳ تا ۸ ثانیه)، امنیت پایینی دارند و در گوشی‌ها لگ می‌زنند. وب‌سایت اختصاصی با Next.js در کمتر از یک ثانیه باز می‌شود، امنیت صددرصدی دارد، برای موتورهای هوش مصنوعی کاملاً بهینه‌سازی شده و به صورت اختصاصی برای برند شما طراحی می‌شود.",
    qEn: "What is the difference between a custom Next.js website and pre-made WordPress themes?",
    aEn: "Pre-made WordPress templates are often bloated with plugins, leading to slow 3-8 second load times, security risks, and mobile lag. A custom Next.js platform opens in under one second, provides bulletproof security, is 100% optimized for modern AI search engines, and features tailor-made UI/UX.",
  },
  {
    id: "3",
    qFa: "منظور از سئوی هوش مصنوعی (AEO & GEO) چیست و چه مزیتی دارد؟",
    aFa: "امروزه میلیون‌ها کاربر به جای جستجو در گوگل، سوالات و خریدهای خود را از چت‌بات‌هایی مثل ChatGPT، Perplexity و Gemini می‌پرسند. با سئوی نوین AEO و GEO، ساختار سایت و اسکیماها طوری کدنویسی می‌شوند که این ربات‌ها وب‌سایت شما را به عنوان پاسخ اصلی و معتبرترین منبع به کاربران معرفی کنند.",
    qEn: "What is AI Search Engine Optimization (AEO/GEO) and why is it important?",
    aEn: "Millions of customers now ask purchasing recommendations directly to ChatGPT, Perplexity, and Gemini instead of browsing traditional links. With AEO and GEO, your site is structured so that AI bots cite your business as the primary recommended solution.",
  },
  {
    id: "4",
    qFa: "زمان‌بندی و مراحل انجام یک پروژه چقدر است؟",
    aFa: "بسته به نوع پروژه (سایت شرکتی، فروشگاهی یا پلتفرم اختصاصی)، زمان اجرا بین ۷ تا ۲۵ روز کاری است. پروژه در ۴ گام شفاف: ۱. مشاوره و استراتژی، ۲. طراحی UI/UX، ۳. برنامه‌نویسی و تست عملکرد، و ۴. بهینه‌سازی سئو و تحویل، با گزارش‌دهی مستمر انجام می‌پذیرد.",
    qEn: "What is the timeline and execution process for a project?",
    aEn: "Depending on scope (corporate landing, e-commerce, or custom portal), execution spans 7 to 25 business days across 4 transparent phases: Discovery, UI/UX Design, Engineering, and AI SEO Launch.",
  },
  {
    id: "5",
    qFa: "آیا وب‌سایت روی گوشی‌های موبایل هم سریع و روان باز می‌شود؟",
    aFa: "بله، ۱۰۰٪. تمام پروژه‌ها بر اساس استاندارد Mobile-First کدنویسی می‌شوند و انیمیشن‌ها از شتاب‌دهنده گرافیکی (GPU) استفاده می‌کنند. در نتیجه روی تمامی گوشی‌ها با سرعت ۶۰ فریم بر ثانیه و زیر ۱ ثانیه لود می‌شوند.",
    qEn: "Is the website guaranteed to run fast and smooth on mobile phones?",
    aEn: "Yes, 100%. All platforms follow a Mobile-First architecture with GPU-accelerated transforms, ensuring a guaranteed 60 FPS frame rate and sub-second load time on all devices.",
  },
];