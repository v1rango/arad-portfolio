export const portfolioData = {
  fa: {
    nav: { about: "درباره من", services: "خدمات", skills: "مهارت‌ها", projects: "پروژه‌ها", testimonials: "نظرات", contact: "تماس" },
    badge: "آماده ارائه خدمات و همکاری",
    name: "آراد وفایی",
    role: "توسعه دهنده وب / اپلیکیشن",
    description: "توسعه‌دهنده فول‌استک مسلط به فریم‌ورک‌های جاوااسکریپت و تایپ‌اسکریپت. متخصص ساخت وب‌سایت‌ها و اپلیکیشن‌های مقیاس‌پذیر با تمرکز بر تجربه کاربری جذاب، امنیت و دیپلوی مدرن.",
    buttons: { contact: "ارتباط با من", github: "گیت‌هاب" },
    servicesTitle: "خدمات قابل ارائه",
    skillsTitle: "مهارت‌ها و تخصص‌ها",
    projectsTitle: "پروژه‌های شاخص",
    testimonialsTitle: "نظرات مشتریان و همکاران",
    noProjects: "پروژه‌ها به‌زودی اضافه خواهند شد...",
    contactTitle: "ارتباط مستقیم",
    contactDesc: "آماده برای اجرای پروژه‌های مدرن، ایده‌های خلاقانه و مشاوره تخصصی در حوزه وب و اپلیکیشن.",
    socials: "شبکه‌های اجتماعی",
    copy: "کپی شد!",
  },
  en: {
    nav: { about: "About", services: "Services", skills: "Skills", projects: "Projects", testimonials: "Testimonials", contact: "Contact" },
    badge: "Available for new projects",
    name: "Arad Vafaei",
    role: "Web / Mobile Developer",
    description: "Full-stack developer skilled in modern JavaScript and TypeScript frameworks. Specializing in building scalable applications with exceptional UX, security, and modern deployment.",
    buttons: { contact: "Contact Me", github: "GitHub" },
    servicesTitle: "Services I Offer",
    skillsTitle: "Skills & Expertise",
    projectsTitle: "Featured Projects",
    testimonialsTitle: "Testimonials & Feedback",
    noProjects: "Projects coming soon...",
    contactTitle: "Get in Touch",
    contactDesc: "Ready for modern development, creative ideas, and technical consulting.",
    socials: "Social Media",
    copy: "Copied!",
  }
};

export const services = [
  {
    icon: "Layout",
    title: { fa: "طراحی و توسعه وب", en: "Web Development" },
    desc: {
      fa: "ساخت وب‌سایت‌ها و وب‌آپلیکیشن‌های مدرن با Next.js و React با سرعت بالا، سئو استاندارد و UI/UX جذاب.",
      en: "Building modern websites and web applications using Next.js and React with high performance and SEO."
    }
  },
  {
    icon: "Smartphone",
    title: { fa: "توسعه اپلیکیشن موبایل", en: "Mobile App Development" },
    desc: {
      fa: "طراحی و پیاده‌سازی اپلیکیشن‌های چندسکوئی (Android & iOS) با React Native و رابط کاربری روان.",
      en: "Developing cross-platform mobile apps for Android & iOS with smooth UX using React Native."
    }
  },
  {
    icon: "Server",
    title: { fa: "توسعه بک‌اند و API", en: "Backend & API Integration" },
    desc: {
      fa: "طراحی معماری دیتابیس، ساخت REST APIها و سرویس‌های امن با Node.js، Prisma و PostgreSQL.",
      en: "Database architecture and secure REST API development using Node.js, Prisma, and PostgreSQL."
    }
  },
  {
    icon: "Zap",
    title: { fa: "بهینه‌سازی و امنیت", en: "Optimization & Security" },
    desc: {
      fa: "افزایش سرعت بارگذاری، ارتقای رتبه سئوی فنی و اعمال پروتکل‌های امنیتی بر روی پروژه‌های موجود.",
      en: "Performance tuning, technical SEO optimization, and implementing robust security practices."
    }
  }
];

export const skills = [
  {
    category: { fa: "فرانت‌اند و موبایل (Front-end & Mobile)", en: "Front-end & Mobile" },
    items: ["JavaScript", "TypeScript", "React", "Next.js", "React Native", "Vue.js", "Tailwind CSS"]
  },
  {
    category: { fa: "بک‌اند و دیتابیس (Back-end & Database)", en: "Back-end & Database" },
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma ORM", "REST API"]
  },
  {
    category: { fa: "دیپلوی و امنیت (Deployment & Security)", en: "Deployment & Security" },
    items: ["Linux / VPS", "Docker", "Web Security (Junior)", "CI/CD Basics"]
  }
];

// دمو پروژه‌های شاخص با جزییات کامل
export const projects = [
  {
    title: { fa: "سامانه گالری آراد", en: "Arad Gallery Platform" },
    challenge: {
      fa: "نیازمند سامانه‌ای سریع برای مدیریت محصولات، همگام‌سازی لحظه‌ای دیتابیس و سئوی قوی روی دامنه اختصاصی.",
      en: "Needed a fast product management system with real-time DB sync and high SEO performance."
    },
    solution: {
      fa: "پیاده‌سازی با Next.js App Router، Prisma ORM و دیتابیس PostgreSQL روی لیارا.",
      en: "Built using Next.js App Router, Prisma ORM, and PostgreSQL deployed on Cloud infrastructure."
    },
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://arad-gallery.ir",
    githubUrl: "https://github.com/v1rango"
  }
];

// بخش نظرات مشتریان و همکاران (کامنت‌ها برای ویرایش آسان تو قرار داده شده)
export const testimonials = [
  {
    name: "محمد رضایی", // اسم مشتری یا همکار
    role: "مدیر محصول / Founder", // سمت شغلی
    comment: {
      fa: "کیفیت کدنویسی، تحویل به موقع و دقت در پیاده‌سازی جزییات طرح فوق‌العاده بود. همکاری بسیار لذت‌بخشی داشتیم.",
      en: "Code quality, timely delivery, and attention to UI details were outstanding. Great working together."
    },
    avatar: "MR"
  },
  {
    name: "سارا احمدی",
    role: "طراح UI/UX",
    comment: {
      fa: "همکاری با آراد به عنوان دِولوپر بسیار ساده بود؛ دقیقاً تمام طرح‌های فیگما را طبق پیکسل به پیکسل پیاده کرد.",
      en: "Working with Arad was seamless; he translated all Figma designs pixel-perfectly into code."
    },
    avatar: "SA"
  }
];

export const contacts = {
  telegram: "https://t.me/v1arad",
  email: "mailto:aradvafaee1@gmail.com",
  github: "https://github.com/v1rango",
};