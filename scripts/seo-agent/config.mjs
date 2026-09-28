import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const ROOT_DIR = path.resolve(__dirname, "../..");

export const CONFIG = {
  geminiApiKey: process.env.GEMINI_API_KEY,
  geminiModel: process.env.GEMINI_MODEL || "gemini-3.8-flash",
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
  telegramChatId: process.env.TELEGRAM_CHAT_ID,
  githubToken: process.env.GITHUB_TOKEN,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://aradvafaee.ir",
  repoOwner: "v1rango",
  repoName: "arad-portfolio",
  paths: {
    constants: path.join(ROOT_DIR, "src/lib/constants.ts"),
    llms: path.join(ROOT_DIR, "public/llms.txt"),
    llmsFull: path.join(ROOT_DIR, "public/llms-full.txt"),
    history: path.join(__dirname, "history.json"),
  },
};
