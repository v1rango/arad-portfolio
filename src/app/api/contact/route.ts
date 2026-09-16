import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Rate limiting ساده بر اساس IP — در production از Redis یا Upstash استفاده کنید
const requestLog = new Map<string, { count: number; resetAt: number }>();

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  // بررسی Rate Limit: حداکثر ۳ درخواست در ۶۰ ثانیه per IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const windowMs = 60_000;
  const maxRequests = 3;

  const entry = requestLog.get(ip);
  if (entry && now < entry.resetAt) {
    if (entry.count >= maxRequests) {
      return NextResponse.json(
        {
          error:
            "تعداد درخواست‌های شما بیش از حد مجاز است. چند دقیقه صبر کن و دوباره امتحان کن 🙏",
        },
        { status: 429 }
      );
    }
    entry.count++;
  } else {
    requestLog.set(ip, { count: 1, resetAt: now + windowMs });
  }

  try {
    const body = await req.json();
    const { name, email, phone, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "لطفاً تمام فیلدهای ضروری رو پر کن." },
        { status: 400 }
      );
    }

    // Escape کردن همه ورودی‌ها قبل از درج در HTML
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml((phone ?? "").trim() || "ثبت نشده");
    const safeMessage = escapeHtml(message.trim());

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: safeEmail,
      subject: `پیام جدید از سایت پورتفولیو — ${safeName}`,
      html: `
        <div style="direction: rtl; font-family: Tahoma, sans-serif; padding: 20px; background-color: #021024; color: #ffffff; border-radius: 8px;">
          <h2 style="color: #c1e8ff; border-bottom: 2px solid #5483b3; padding-bottom: 10px;">پیام جدید از فرم تماس سایت</h2>
          <p><strong>نام:</strong> ${safeName}</p>
          <p><strong>ایمیل:</strong> ${safeEmail}</p>
          <p><strong>شماره تماس:</strong> ${safePhone}</p>
          <div style="background-color: #052659; padding: 15px; border-radius: 6px; margin-top: 15px; border: 1px solid #5483b3;">
            <strong style="color: #7da0ca;">متن پیام:</strong>
            <p style="white-space: pre-wrap; margin-top: 8px;">${safeMessage}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "پیام با موفقیت ارسال شد." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "خطا در ارسال پیام. لطفاً دوباره تلاش کن." },
      { status: 500 }
    );
  }
}