import fs from "node:fs/promises";
import { CONFIG } from "./config.mjs";

export async function readHistory() {
  try {
    const raw = await fs.readFile(CONFIG.paths.history, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    return { seededTopics: [], entries: [] };
  }
}

export async function saveHistory(history) {
  await fs.writeFile(CONFIG.paths.history, JSON.stringify(history, null, 2), "utf-8");
}

export async function appendFaqToConstants(generated) {
  const content = await fs.readFile(CONFIG.paths.constants, "utf-8");

  const faqStartIndex = content.indexOf("export const FAQ_LIST = [");
  if (faqStartIndex === -1) {
    throw new Error("Could not find 'export const FAQ_LIST = [' in src/lib/constants.ts");
  }

  // Find the closing ]; that comes strictly AFTER faqStartIndex
  const closingIndex = content.indexOf("];", faqStartIndex);
  if (closingIndex === -1) {
    throw new Error("Could not find closing bracket of FAQ_LIST in src/lib/constants.ts");
  }

  const faqSection = content.slice(faqStartIndex, closingIndex);
  const existingMatches = [...faqSection.matchAll(/id:\s*"(\d+)"/g)];
  const nextId = existingMatches.length > 0
    ? (Math.max(...existingMatches.map((m) => parseInt(m[1], 10))) + 1).toString()
    : "6";

  const newFaqItem = `  {
    id: "${nextId}",
    qFa: ${JSON.stringify(generated.qFa)},
    aFa: ${JSON.stringify(generated.aFa)},
    qEn: ${JSON.stringify(generated.qEn)},
    aEn: ${JSON.stringify(generated.aEn)},
  },\n`;

  const updatedContent =
    content.slice(0, closingIndex) +
    newFaqItem +
    content.slice(closingIndex);

  await fs.writeFile(CONFIG.paths.constants, updatedContent, "utf-8");
  return nextId;
}

export async function appendToLlmsFull(generated) {
  let content = await fs.readFile(CONFIG.paths.llmsFull, "utf-8");

  const heading = "## Technical Insights & AEO Knowledge Base";
  const entry = `
### ${generated.topicName}
- **Intent / Query:** ${generated.qEn} (${generated.qFa})
${generated.llmsSnippet}
`;

  if (!content.includes(heading)) {
    content = `${content.trim()}\n\n${heading}\n${entry.trim()}\n`;
  } else {
    content = `${content.trim()}\n${entry.trim()}\n`;
  }

  await fs.writeFile(CONFIG.paths.llmsFull, content, "utf-8");
}

export async function applyGeneratedUpdates(generated) {
  const history = await readHistory();

  // 1. Update constants.ts (specifically inside FAQ_LIST)
  const newId = await appendFaqToConstants(generated);

  // 2. Update llms-full.txt
  await appendToLlmsFull(generated);

  // 3. Update history.json
  const newEntry = {
    id: newId,
    timestamp: new Date().toISOString(),
    topicName: generated.topicName,
    targetKeyword: generated.targetKeyword,
    qFa: generated.qFa,
    qEn: generated.qEn,
    strategicValue: generated.strategicValue,
  };
  history.entries.push(newEntry);
  await saveHistory(history);

  return newEntry;
}
