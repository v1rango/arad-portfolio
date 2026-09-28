import { CONFIG } from "./config.mjs";

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function sendTelegramMessage(text, inlineKeyboard = null) {
  if (!CONFIG.telegramBotToken || !CONFIG.telegramChatId) {
    console.warn("[Telegram] Token or Chat ID not configured.");
    return null;
  }

  const url = `https://api.telegram.org/bot${CONFIG.telegramBotToken}/sendMessage`;
  const body = {
    chat_id: CONFIG.telegramChatId,
    text,
    parse_mode: "HTML",
    disable_web_page_preview: false,
  };

  if (inlineKeyboard) {
    body.reply_markup = { inline_keyboard: inlineKeyboard };
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`[Telegram] Failed to send message: ${errorText}`);
    return null;
  }

  const data = await response.json();
  return data.result;
}

export async function editTelegramMessage(messageId, text, inlineKeyboard = null) {
  if (!CONFIG.telegramBotToken || !CONFIG.telegramChatId || !messageId) return;

  const url = `https://api.telegram.org/bot${CONFIG.telegramBotToken}/editMessageText`;
  const body = {
    chat_id: CONFIG.telegramChatId,
    message_id: messageId,
    text,
    parse_mode: "HTML",
    disable_web_page_preview: false,
  };

  if (inlineKeyboard) {
    body.reply_markup = { inline_keyboard: inlineKeyboard };
  }

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export async function answerCallbackQuery(callbackQueryId, text, showAlert = false) {
  if (!CONFIG.telegramBotToken || !callbackQueryId) return;

  const url = `https://api.telegram.org/bot${CONFIG.telegramBotToken}/answerCallbackQuery`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      callback_query_id: callbackQueryId,
      text,
      show_alert: showAlert,
    }),
  });
}

export function formatProposalMessage(generated, statusNote = "") {
  return `
🤖 <b>پیشنهاد روزانه رشد سئو و هوش مصنوعی (AEO/GEO)</b>
🌐 سایت: <b>aradvafaee.ir</b>

🎯 <b>دغدغه و سرچ واقعی مشتری:</b>
<code>${generated.targetKeyword}</code>

❓ <b>پرسش پرسرچ کارفرما:</b>
«<b>${generated.qFa}</b>»

💡 <b>پاسخ مستقیم AEO (مخصوص گوگل و هوش مصنوعی):</b>
${generated.aFa}

📈 <b>علت انتخاب این سوال:</b>
${generated.strategicValue}
${statusNote ? `\n\n📌 <b>وضعیت:</b>\n${statusNote}` : ""}
`.trim();
}

export async function sendApprovalRequest(generated) {
  const text = formatProposalMessage(
    generated,
    "⏳ <b>منتظر دستور شما:</b> برای اعمال این سوال در سایت و دیپلوی توسط رندر، روی دکمه زیر کلیک کنید."
  );

  const keyboard = [
    [
      { text: "🚀 تایید و انتشار روی سایت (Deploy)", callback_data: "approve" },
      { text: "❌ رد محتوا (Reject)", callback_data: "reject" },
    ],
    [{ text: "🌐 مشاهده وب‌سایت زنده", url: CONFIG.siteUrl }],
  ];

  const sentMessage = await sendTelegramMessage(text, keyboard);
  return sentMessage ? sentMessage.message_id : null;
}

export async function waitForUserApproval(messageId, generated, timeoutMinutes = 30) {
  if (!CONFIG.telegramBotToken || !CONFIG.telegramChatId) {
    return "timeout";
  }

  console.log(`[Telegram] Waiting for approval button click from chat ID ${CONFIG.telegramChatId}...`);
  const startTime = Date.now();
  const maxDurationMs = timeoutMinutes * 60 * 1000;

  // Clear pending updates first to start fresh
  let lastUpdateId = 0;
  try {
    const initRes = await fetch(`https://api.telegram.org/bot${CONFIG.telegramBotToken}/getUpdates`);
    const initData = await initRes.json();
    if (initData.result && initData.result.length > 0) {
      lastUpdateId = initData.result[initData.result.length - 1].update_id + 1;
    }
  } catch (err) {
    // Ignore
  }

  while (Date.now() - startTime < maxDurationMs) {
    try {
      const url = `https://api.telegram.org/bot${CONFIG.telegramBotToken}/getUpdates?offset=${lastUpdateId}&timeout=10`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.ok && Array.isArray(data.result)) {
        for (const update of data.result) {
          lastUpdateId = update.update_id + 1;

          if (update.callback_query) {
            const cb = update.callback_query;
            const fromChatId = cb.message?.chat?.id || cb.from?.id;

            if (String(fromChatId) === String(CONFIG.telegramChatId)) {
              if (cb.data === "approve") {
                await answerCallbackQuery(cb.id, "✅ تایید شد! در حال پوش به گیت‌هاب و استارت دیپلوی رندر...", false);
                await editTelegramMessage(
                  messageId,
                  formatProposalMessage(generated, "✅ <b>تایید شد:</b> در حال ثبت روی گیت‌هاب و انتشار در Render... 🚀"),
                  [[{ text: "🌐 مشاهده سایت زنده", url: CONFIG.siteUrl }]]
                );
                return "approve";
              } else if (cb.data === "reject") {
                await answerCallbackQuery(cb.id, "❌ محتوا رد شد و روی سایت اعمال نشد.", false);
                await editTelegramMessage(
                  messageId,
                  formatProposalMessage(generated, "❌ <b>رد شد:</b> این محتوا بنا به دستور شما لغو شد."),
                  [[{ text: "🌐 مشاهده سایت زنده", url: CONFIG.siteUrl }]]
                );
                return "reject";
              }
            }
          }
        }
      }
    } catch (err) {
      console.warn("[Telegram] Error while polling for approval:", err.message);
    }

    await wait(2000);
  }

  // Timeout reached
  console.log("[Telegram] Approval wait timed out.");
  await editTelegramMessage(
    messageId,
    formatProposalMessage(generated, "⏳ <b>مهلت تایید به پایان رسید:</b> تغییرات لغو شد یا منتظر اجرای بعدی است."),
    [[{ text: "🌐 مشاهده سایت زنده", url: CONFIG.siteUrl }]]
  );
  return "timeout";
}
