import readline from "node:readline";
import { readHistory, applyGeneratedUpdates } from "./updater.mjs";
import { generateDailyContent } from "./gemini.mjs";
import { sendApprovalRequest, waitForUserApproval, editTelegramMessage, formatProposalMessage } from "./telegram.mjs";
import { commitAndPushLocal, createGitHubPullRequest } from "./git-manager.mjs";
import { CONFIG } from "./config.mjs";

const args = process.argv.slice(2);
const isDryRun = args.includes("--dry-run");
const isAutoPush = args.includes("--auto-push");
const isAutoPr = args.includes("--auto-pr");

function listenCliInput() {
  if (!process.stdout.isTTY) {
    return new Promise(() => {}); // Never resolves in non-interactive mode
  }
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question("\n⌨️  یا می‌توانید از همین ترمینال تایید کنید (y=تایید / n=رد): ", (ans) => {
      rl.close();
      const trimmed = ans.trim().toLowerCase();
      resolve(trimmed === "y" || trimmed === "yes" ? "approve" : "reject");
    });
  });
}

async function main() {
  console.log("==================================================");
  console.log("🤖 Arad Vafaee AI Search & SEO Autonomous Agent");
  console.log("==================================================\n");

  // 1. Load covered topics
  console.log("[1/4] Loading topic history...");
  const history = await readHistory();
  const coveredTopics = [
    ...(history.seededTopics || []),
    ...(history.entries || []).map((e) => e.topicName || e.qFa),
  ];
  console.log(`Found ${coveredTopics.length} previously covered topics.`);

  // 2. Generate human-centric AEO question with Gemini
  console.log("[2/4] Generating high-intent real client search topic...");
  const generated = await generateDailyContent(coveredTopics);

  console.log("\n--------------------------------------------------");
  console.log("🎯 Selected Topic:", generated.topicName);
  console.log("🔑 Target Keyword:", generated.targetKeyword);
  console.log("❓ Client Question:", generated.qFa);
  console.log("💡 Direct Answer (AEO):", generated.aFa);
  console.log("📈 Strategic Value:", generated.strategicValue);
  console.log("--------------------------------------------------\n");

  if (isDryRun) {
    console.log("🔍 [Dry Run Mode] No changes applied. Exiting.");
    return;
  }

  // If auto-push or auto-pr is requested without interactive approval
  if (isAutoPush) {
    console.log("[3/4] Auto-pushing to origin main...");
    await applyGeneratedUpdates(generated);
    const actionResult = await commitAndPushLocal(generated);
    console.log("✅ Changes pushed to main.");
    return;
  }

  if (isAutoPr) {
    console.log("[3/4] Creating Pull Request on GitHub...");
    await applyGeneratedUpdates(generated);
    const actionResult = await createGitHubPullRequest(generated);
    console.log("✅ PR created:", actionResult.prUrl);
    return;
  }

  // 3. Send Interactive Approval Request to Telegram
  console.log("[3/4] Sending interactive approval request with buttons to Telegram...");
  const messageId = await sendApprovalRequest(generated);
  console.log("📱 Message sent to Telegram. Waiting for your decision (via Telegram button or CLI)...");

  // 4. Wait for approval from either Telegram button or Terminal input
  const decision = await Promise.race([
    waitForUserApproval(messageId, generated, 30),
    listenCliInput(),
  ]);

  if (decision === "approve") {
    console.log("\n🚀 [APPROVED] Applying changes to constants.ts & llms-full.txt...");
    const appliedEntry = await applyGeneratedUpdates(generated);
    console.log(`✅ Q&A added with ID ${appliedEntry.id}`);

    console.log("[Git] Committing and pushing to origin main for Render auto-deploy...");
    const actionResult = await commitAndPushLocal(generated);

    if (messageId) {
      await editTelegramMessage(
        messageId,
        formatProposalMessage(
          generated,
          `✅ <b>با موفقیت منتشر شد!</b>\n🚀 تغییرات روی شاخه <code>main</code> پوش شد (کامیت: <code>${actionResult.commitHash?.slice(0, 7) || ""}</code>).\nرندر در حال دیپلوی خودکار سایت است.`
        ),
        [
          [
            { text: "🔗 مشاهده کامیت در گیت‌هاب", url: `https://github.com/${CONFIG.repoOwner}/${CONFIG.repoName}/commit/${actionResult.commitHash}` },
            { text: "🌐 مشاهده وب‌سایت زنده", url: CONFIG.siteUrl },
          ],
        ]
      );
    }
    console.log("\n🎉 Process completed! Render deployment triggered.");
  } else if (decision === "reject") {
    console.log("\n❌ [REJECTED] The content was discarded upon your request.");
    if (messageId) {
      await editTelegramMessage(
        messageId,
        formatProposalMessage(generated, "❌ <b>رد شد:</b> این محتوا بنا به دستور شما لغو شد."),
        [[{ text: "🌐 مشاهده سایت زنده", url: CONFIG.siteUrl }]]
      );
    }
  } else {
    console.log("\n⏳ [TIMEOUT] No decision was received within timeout window.");
  }
}

main().catch((err) => {
  console.error("\n❌ Agent encountered an error:", err);
  process.exit(1);
});
