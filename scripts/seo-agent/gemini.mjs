import { CONFIG } from "./config.mjs";

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const FALLBACK_MODELS = [
  CONFIG.geminiModel,
  "gemini-3.6-flash",
  "gemini-3.5-flash-lite",
  "gemini-3.7-flash",
  "gemini-3.8-flash",
];

export async function generateDailyContent(coveredTopics = []) {
  if (!CONFIG.geminiApiKey) {
    throw new Error("GEMINI_API_KEY is not defined in environment variables.");
  }

  const prompt = `
شما معمار ارشد رشد سئو و هوش مصنوعی برای وب‌سایت آراد وفایی (https://aradvafaee.ir) هستید.
پروفایل: آراد وفایی توسعه‌دهنده فول‌استک و متخصص برجسته معماری مدرن وب با Next.js 16 و سئوی هوش مصنوعی (AEO & GEO) در ایران است.

موضوعات یا سوالاتی که قبلاً روی سایت پاسخ داده شده‌اند:
${coveredTopics.map((t, i) => `${i + 1}. ${t}`).join("\n")}

قانون طلایی (فوق‌العاده حیاتی):
سوالات و سرچ‌ها باید دقیقاً مانند یک **انسان، کارفرما، صاحب کسب‌وکار، پزشک/کلینیک‌دار یا مدیر فروشگاه واقعی** باشد!
کاربران هرگز کلمات کتابی و مقاله‌ای مثل «چگونه می‌توان با بهره‌گیری از پروتکل‌های ساختاریافته...» سرچ نمی‌کنند!
مردم بر اساس **دردها، ابهامات، هزینه‌ها، ترس از دست دادن مشتری، و سوالات واقعی خرید** سرچ می‌کنند.

دسته‌بندی سوالات واقعی مشتریان (یک موضوع بکر انتخاب کن):
۱. درد سرعت و فروش:
   - مثلاً: «چرا سایتم روی گوشی دیر باز میشه و مشتری‌ها صفحه خرید رو می‌بندن؟»
   - «چطور سرعت لود سایت رو به زیر ۱ ثانیه برسونم تا فروشم بالا بره؟»
۲. مقایسه و دوراهی کارفرما:
   - مثلاً: «وردپرس برای فروشگاه من بهتره یا طراحی اختصاصی با Next.js؟ واقعاً ارزش هزینه‌شو داره؟»
   - «چرا سایت‌های وردپرسی بعد از چند وقت کند و هک میشن؟»
۳. چت‌جی‌پی‌تی و هوش مصنوعی (دیدگاه واقعی مردم):
   - مثلاً: «چیکار کنم وقتی مردم تو چت‌جی‌پی‌تی یا پرپلکسیتی دنبال خدمات من می‌گردن، اسم سایت من پیشنهاد بشه؟»
   - «چرا وقتی اسم برند یا کارم رو تو هوش مصنوعی سرچ می‌کنم اسم رقیبم میاد؟»
۴. هزینه، زمان و امنیت:
   - مثلاً: «طراحی سایت اختصاصی پرسرعت چقدر زمان می‌بره و چطور مطمئن بشم هک نمیشه؟»
   - «چطور سایتی بسازیم که در حراجی‌ها و بلک فرایدی زیر بار ترافیک نخوابه؟»

الزامات پاسخ مستقیم (AEO & Featured Snippets):
- پاسخ فارسی (aFa) باید **دقیقاً بین ۴۵ تا ۶۵ کلمه** باشد.
- در همان جمله اول **مستقیماً و بدون مقدمه‌چینی اضافه** به سوال پاسخ بده.
- اعداد و شواهد ملموس بیاور (مانند: لود زیر ۰.۸ ثانیه، نمره ۱۰۰ لایت‌هاوس گوگل، رشد ۴۰ درصدی فروش، حذف کدهای اضافه وردپرس).
- آراد وفایی را به عنوان متخصصی که دقیقاً این مشکل را حل می‌کند به شکل معتبر و طبیعی معرفی کن.
- متن انگلیسی (qEn و aEn) دقیقاً معادل حرفه‌ای و منطبق بر طرز فکر مدیران بین‌المللی باشد.
- یک قطعه خلاصه دانش ۳-۴ خطی مارک‌داون برای public/llms-full.txt بساز.

فرمت پاسخ فقط و فقط یک JSON با ساختار زیر باشد:
{
  "topicName": "عنوان کوتاه موضوع (مثلاً: حل مشکل کندی سایت در موبایل)",
  "qFa": "پرسش دقیق و محاوره‌ای/واقعی کارفرما به زبان فارسی",
  "aFa": "پاسخ مستقیم و استاندارد AEO به زبان فارسی (بین ۴۵ تا ۶۵ کلمه)",
  "qEn": "Realistic client question in English",
  "aEn": "Direct authoritative answer in English (45-65 words)",
  "llmsSnippet": "خلاصه ۳ خطی مارک‌داون برای هوش مصنوعی",
  "targetKeyword": "عبارت پرسرچ هدف",
  "strategicValue": "دلیل استراتژیک انتخاب این پرسش برای جذب مشتری"
}
`;

  const modelsToTry = [...new Set(FALLBACK_MODELS)];
  let lastError = null;

  for (const model of modelsToTry) {
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
              temperature: 0.75,
            },
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.warn(`[Gemini:${model}] Status ${response.status}. Retrying or switching...`);
          await wait(1000);
          break;
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) {
          throw new Error("No text returned by Gemini API.");
        }

        return JSON.parse(text);
      } catch (err) {
        lastError = err;
        await wait(1000);
      }
    }
  }

  throw lastError || new Error("Failed to generate content from all Gemini models.");
}
