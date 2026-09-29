import fs from "node:fs/promises";
import { CONFIG } from "./config.mjs";

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TOPIC_DOMAINS = [
  {
    id: "ecommerce",
    nameFa: "فروشگاه‌های اینترنتی و تجارت الکترونیک",
    focusFa: "کندی لود سبد خرید و چک‌اوت، رها شدن سفارش قبل از اتصال به درگاه، فیلترهای آنی صدها محصول، قطعی و کندی در حراجی‌ها و بلک‌فرایدی، تجربه خرید بدون وقفه در موبایل.",
    targetAudience: "صاحبان شاپ‌های آنلاین، برندهای مد و پوشاک، فروشگاه‌های لوازم آرایشی و کالای دیجیتال",
  },
  {
    id: "medical_booking",
    nameFa: "کلینیک‌ها، پزشکان، وکلا و خدمات نوبت‌دهی آنلاین",
    focusFa: "سیستم نوبت‌دهی آنلاین بدون معطلی و بدون قطعی، سئوی محلی (Google Maps و Local Pack)، اعتمادسازی بیمار قبل از مراجعه حضوری، دسترسی سریع به رزومه، نمونه‌کارها و تعرفه‌ها.",
    targetAudience: "پزشکان متخصص، مدیران کلینیک‌های زیبایی و دندانپزشکی، دفاتر وکالت و مراکز مشاوره معتبر",
  },
  {
    id: "luxury_portfolio",
    nameFa: "معماری، املاک و دکوراسیون و پروژه‌های لوکس",
    focusFa: "لود برق‌آسای صدها تصویر باکیفیت 4K و رندرهای معماری بدون افت فریم یا لگ، کاتالوگ آنلاین تعاملی، پرستیژ بصری هم‌تراز برندهای جهانی، انتقال حس لوکس و پریمیوم به مخاطب ثروتمند.",
    targetAudience: "دفاتر معماری، سازندگان املاک لوکس، طراحان دکوراسیون داخلی و گالری‌های هنری",
  },
  {
    id: "global_b2b",
    nameFa: "شرکت‌های صادراتی، بازرگانی، بین‌المللی و B2B",
    focusFa: "چندزبانه بودن استاندارد و اصولی (i18n) بدون تداخل سئو، لود سریع در تمام قاره‌ها از طریق CDN بین‌المللی، فرم‌های استعلام قیمت و دریافت پروپوزال، اعتمادسازی سازمانی هم‌تراز رقبای خارجی.",
    targetAudience: "شرکت‌های صادرات و واردات، صنایع پتروشیمی و صنعتی، شرکت‌های مهاجرتی و هلدینگ‌های بازرگانی",
  },
  {
    id: "aeo_geo_ai",
    nameFa: "سئوی هوش مصنوعی و دیده شدن در چت‌بات‌ها (AEO/GEO)",
    focusFa: "چگونه کاری کنیم وقتی کارفرما در ChatGPT، Perplexity، Gemini یا Claude به دنبال متخصص یا خدمات می‌گردد نام برند ما به عنوان منبع موثق و اولویت اصلی پیشنهاد شود؟ استاندارد llms.txt و اسکیماهای پیشرفته گراف.",
    targetAudience: "مدیران عامل و مارکترهایی که متوجه افت ترافیک گوگل سنتی و رشد سرسام‌آور جستجوهای هوش مصنوعی شده‌اند",
  },
  {
    id: "cybersecurity_uptime",
    nameFa: "امنیت داده، پایداری سرور و رهایی از کابوس هک",
    focusFa: "چرا سایت‌های مبتنی بر قالب‌ها و افزونه‌های نال وردپرسی مداوم هک یا دچار تزریق کد مخرب می‌شوند؟ چگونه معماری بسته Next.js امنیت صددرصدی و آپ‌تایم ۹۹.۹٪ به همراه دارد؟",
    targetAudience: "کسب‌وکارهایی که نگران نفوذ امنیتی، درز اطلاعات مشتریان یا از دسترس خارج شدن سایت هستند",
  },
  {
    id: "roi_maintenance",
    nameFa: "هزینه‌های پنهان، بازگشت سرمایه (ROI) و انتخاب عاقلانه طراح سایت",
    focusFa: "چرا پروژه‌های ارزان‌قیمت چند ماه بعد هزینه‌های سرسام‌آور تعمیر و ارتقا تحمیل می‌کنند؟ مقایسه بازگشت سرمایه طراحی وب اختصاصی پرسرعت و مدرن در برابر قالب‌های آماده و منقضی.",
    targetAudience: "کارفرمایانی که در دوراهی انتخاب بین سایت ارزان یا یک دارایی دیجیتال ارزشمند و درآمدزا قرار دارند",
  },
];

const FALLBACK_MODELS = [
  CONFIG.geminiModel,
  "gemini-3.8-flash",
  "gemini-3.7-flash",
  "gemini-3.6-flash",
  "gemini-3.5-flash-lite",
];

async function getExistingFaqsFromConstants() {
  try {
    const content = await fs.readFile(CONFIG.paths.constants, "utf-8");
    const matches = [...content.matchAll(/qFa:\s*"([^"]+)"/g)].map((m) => m[1]);
    return matches;
  } catch (err) {
    return [];
  }
}

export async function generateDailyContent(coveredTopics = []) {
  if (!CONFIG.geminiApiKey) {
    throw new Error("GEMINI_API_KEY is not defined in environment variables.");
  }

  // 1. Gather all existing FAQs from both constants and history
  const existingFaqs = await getExistingFaqsFromConstants();
  const allCovered = [...new Set([...existingFaqs, ...coveredTopics])];

  // 2. Determine target domain using rotation based on covered history count
  const domainIndex = allCovered.length % TOPIC_DOMAINS.length;
  const targetDomain = TOPIC_DOMAINS[domainIndex];

  console.log(`[Domain Matrix] Selected Domain for today: ${targetDomain.nameFa} (${targetDomain.id})`);

  // 3. Build human-centric prompt WITHOUT hardcoded pre-cooked question examples to prevent copying
  const prompt = `
شما معمار ارشد رشد سئو و هوش مصنوعی برای وب‌سایت آراد وفایی (https://aradvafaee.ir) هستید.
پروفایل متخصص: آراد وفایی، توسعه‌دهنده فول‌استک و متخصص برجسته معماری مدرن وب با Next.js 16، بازسازی سرعت وب‌سایت‌ها به نمره ۱۰۰ و پیشگام سئوی هوش مصنوعی (AEO & GEO) در ایران.

حوزه تخصصی تعیین‌شده برای امروز:
نام حوزه: ${targetDomain.nameFa}
مخاطب هدف اصلی: ${targetDomain.targetAudience}
محور دغدغه و درد مشتری: ${targetDomain.focusFa}

لیست پرسش‌ها و مباحثی که قبلاً روی سایت پاسخ داده شده‌اند (اکیداً ممنوع برای تکرار):
${allCovered.map((q, i) => `${i + 1}. ${q}`).join("\n")}

قوانین حیاتی و بدون استثنا:
۱. پرسش (qFa) باید ۱۰۰٪ در حوزه تعیین‌شده امروز («${targetDomain.nameFa}») باشد و از زبان یک کارفرمای واقعی، نگران یا صاحب کسب‌وکار مطرح شود.
۲. از هرگونه تکرار مفاهیمی که در لیست بالا پاسخ داده شده‌اند (مانند کلیشه سرعت عمومی موبایل) اکیداً خودداری کن. این پرسش باید یک زاویه دید کاملاً بکر، چالش مالی/تجاری یا معضل تکنیکال واقعی را هدف بگیرد.
۳. ادبیات پرسش باید دقیقاً عبارتی باشد که یک مدیر یا کارفرما در مکالمه واقعی، چت‌جی‌پی‌تی یا سرچ گوگل استفاده می‌کند (طبیعی، صریح و بدون کلمات متکلف مقاله‌ای).
۴. پاسخ مستقیم (aFa):
   - بین ۴۵ تا ۶۵ کلمه فارسی.
   - جمله اول مستقیماً و بی‌درنگ پاسخ اصل سوال را می‌دهد.
   - شامل اعداد و شواهد ملموس صنعتی (نرخ تبدیل، ثانیه لود، نمره لایت‌هاوس، درصد افزایش فروش یا زمان تحویل).
   - آراد وفایی را به عنوان مرجع حل این معضل به صورت طبیعی و مقتدرانه معرفی می‌کند.
۵. ترجمه انگلیسی (qEn و aEn) باید روان، تخصصی و معادل حرفه‌ای زبان کارفرمایان بین‌المللی باشد.
۶. قطعه دانش مارک‌داون (llmsSnippet) باید ۳ خط شفاف برای درک موتورهای هوش مصنوعی (LLMs) بنویسد.

فرمت خروجی فقط و فقط یک شیء JSON با ساختار زیر باشد:
{
  "topicName": "عنوان کوتاه و دقیق موضوع",
  "qFa": "پرسش دقیق، ملموس و واقعی کارفرما به زبان فارسی",
  "aFa": "پاسخ مستقیم و استاندارد AEO به زبان فارسی (دقیقاً بین ۴۵ تا ۶۵ کلمه)",
  "qEn": "Direct realistic client inquiry in English",
  "aEn": "Authoritative direct answer in English (45-65 words)",
  "llmsSnippet": "خلاصه ۳ خطی به صورت مارک‌داون مناسب برای llms-full.txt",
  "targetKeyword": "عبارت کلیدی پرسرچ هدف",
  "strategicValue": "توضیح مختصر درباره ارزش تجاری این سوال برای جذب مشتری"
}
`;

  const modelsToTry = [...new Set(FALLBACK_MODELS)];
  let lastError = null;

  for (const model of modelsToTry) {
    if (!model) continue;
    console.log(`[Gemini] Attempting generation with model: ${model}...`);
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${CONFIG.geminiApiKey}`;

    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig: {
              responseMimeType: "application/json",
              temperature: 0.85,
            },
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.warn(`[Gemini:${model}] Status ${response.status}: ${errorText.slice(0, 100)}`);
          await wait(1000);
          break;
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) {
          throw new Error("No text returned by Gemini API.");
        }

        const parsed = JSON.parse(text);

        // Sanity check: Ensure it doesn't duplicate existing questions
        const isDuplicate = allCovered.some(
          (existing) =>
            existing.includes(parsed.qFa) ||
            parsed.qFa.includes(existing) ||
            (parsed.topicName && existing.includes(parsed.topicName))
        );

        if (isDuplicate) {
          console.warn("[Gemini] Generated duplicate detected. Retrying with higher randomness...");
          continue;
        }

        return parsed;
      } catch (err) {
        lastError = err;
        await wait(1000);
      }
    }
  }

  throw lastError || new Error("Failed to generate diverse content from Gemini.");
}

