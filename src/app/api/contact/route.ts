import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "لطفاً تمام فیلدهای ضروری را پر کنید." },
        { status: 400 }
      );
    }

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
      replyTo: email,
      subject: `پیام جدید از سایت پورتفولیو - ${name}`,
      html: `
        <div style="direction: rtl; font-family: Tahoma, sans-serif; padding: 20px; background-color: #021024; color: #ffffff; border-radius: 8px;">
          <h2 style="color: #c1e8ff; border-bottom: 2px solid #5483b3; padding-bottom: 10px;">پیام جدید از فرم تماس سایت</h2>
          <p><strong>نام و نام خانوادگی:</strong> ${name}</p>
          <p><strong>ایمیل:</strong> ${email}</p>
          <p><strong>شماره تماس:</strong> ${phone || "ثبت نشده"}</p>
          <div style="background-color: #052659; padding: 15px; border-radius: 6px; margin-top: 15px; border: 1px solid #5483b3;">
            <strong style="color: #7da0ca;">متن پیام:</strong>
            <p style="white-space: pre-wrap; margin-top: 8px;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "پیام شما با موفقیت ارسال شد." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "خطا در ارسال پیام. لطفاً دوباره تلاش کنید." },
      { status: 500 }
    );
  }
}