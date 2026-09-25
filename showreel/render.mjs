// render.mjs — Programmatic Video Renderer
// Uses Headless Google Chrome (/opt/google/chrome/chrome) via Chrome DevTools Protocol (CDP),
// extracts 900 deterministic frames from showreel.html at 60 FPS,
// and pipes them directly into ffmpeg to produce showreel.mp4 with synchronized audio.wav!

import { spawn } from "child_process";
import http from "http";
import fs from "fs";
import path from "path";

const PORT = 8089;
const CHROME_DEBUG_PORT = 9225;
const WIDTH = 1280;
const HEIGHT = 720;
const FPS = 60;
const DURATION = 15.0; // 15 seconds
const TOTAL_FRAMES = Math.floor(DURATION * FPS); // 900 frames

const SHOWREEL_DIR = path.resolve("./showreel");
const AUDIO_FILE = path.join(SHOWREEL_DIR, "audio.wav");
const OUTPUT_VIDEO = path.join(SHOWREEL_DIR, "showreel.mp4");

console.log("==============================================================");
console.log("🎬 ARAD VAFAEE — PROGRAMMATIC MOTION GRAPHICS RENDER PIPELINE");
console.log(`⏱  Duration: ${DURATION}s | ${FPS} FPS | Total Frames: ${TOTAL_FRAMES}`);
console.log(`📐 Resolution: ${WIDTH}x${HEIGHT} (720p HD)`);
console.log("==============================================================");

// 1. Local HTTP Server to serve showreel.html and audio.wav without CORS
const server = http.createServer((req, res) => {
  let filePath = path.join(SHOWREEL_DIR, req.url === "/" ? "showreel.html" : req.url);
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end("Not Found");
    return;
  }
  const ext = path.extname(filePath);
  const mime = ext === ".html" ? "text/html" : ext === ".wav" ? "audio/wav" : "application/octet-stream";
  res.writeHead(200, { "Content-Type": mime, "Access-Control-Allow-Origin": "*" });
  fs.createReadStream(filePath).pipe(res);
});

await new Promise((resolve) => server.listen(PORT, resolve));
console.log(`[1/4] HTTP Server listening on http://127.0.0.1:${PORT}`);

// 2. Launch Headless Google Chrome
console.log("[2/4] Spawning Headless Chrome at /opt/google/chrome/chrome...");
const chrome = spawn(
  "/opt/google/chrome/chrome",
  [
    "--headless=new",
    `--remote-debugging-port=${CHROME_DEBUG_PORT}`,
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    `--window-size=${WIDTH},${HEIGHT}`,
    "--mute-audio",
    "about:blank",
  ],
  { stdio: "ignore" }
);

// Wait for Chrome CDP to be available
let wsUrl = null;
for (let attempt = 0; attempt < 30; attempt++) {
  await new Promise((r) => setTimeout(r, 200));
  try {
    const res = await fetch(`http://127.0.0.1:${CHROME_DEBUG_PORT}/json/version`);
    if (res.ok) {
      const data = await res.json();
      wsUrl = data.webSocketDebuggerUrl;
      if (wsUrl) break;
    }
  } catch (e) {}
}

if (!wsUrl) {
  chrome.kill();
  server.close();
  throw new Error("Failed to connect to Google Chrome CDP.");
}

console.log("[2/4] Connected to Chrome DevTools Protocol (CDP)");

// 3. Connect via Native WebSocket (Node 26 native)
const ws = new WebSocket(wsUrl);
let messageId = 1;
const pending = new Map();

ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(msg.error);
    else resolve(msg.result);
  }
};

await new Promise((resolve) => (ws.onopen = resolve));

function sendCDP(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = messageId++;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

// Enable Page and Runtime, create new target page
const newTarget = await sendCDP("Target.createTarget", { url: `http://127.0.0.1:${PORT}/showreel.html` });
const targetWsUrl = `ws://127.0.0.1:${CHROME_DEBUG_PORT}/devtools/page/${newTarget.targetId}`;

const pageWs = new WebSocket(targetWsUrl);
const pagePending = new Map();
let pageMsgId = 1;

pageWs.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pagePending.has(msg.id)) {
    const { resolve, reject } = pagePending.get(msg.id);
    pagePending.delete(msg.id);
    if (msg.error) reject(msg.error);
    else resolve(msg.result);
  }
};

await new Promise((resolve) => (pageWs.onopen = resolve));

function sendPageCDP(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = pageMsgId++;
    pagePending.set(id, { resolve, reject });
    pageWs.send(JSON.stringify({ id, method, params }));
  });
}

await sendPageCDP("Page.enable");
await sendPageCDP("Runtime.enable");

// Wait for page load
await new Promise((resolve) => setTimeout(resolve, 1000));

// Check if renderFrame is available
const checkFunc = await sendPageCDP("Runtime.evaluate", {
  expression: "typeof window.renderFrame",
});
console.log(`[2/4] Verified window.renderFrame in browser: ${checkFunc.result.value}`);

// 4. Spawn FFmpeg process
console.log(`[3/4] Spawning FFmpeg encoder -> ${OUTPUT_VIDEO}`);
const ffmpeg = spawn(
  "/usr/bin/ffmpeg",
  [
    "-y",
    "-f", "image2pipe",
    "-vcodec", "mjpeg",
    "-r", String(FPS),
    "-i", "pipe:0",
    "-i", AUDIO_FILE,
    "-c:v", "libx264",
    "-preset", "fast",
    "-crf", "18",
    "-pix_fmt", "yuv420p",
    "-c:a", "aac",
    "-b:a", "192k",
    "-shortest",
    OUTPUT_VIDEO,
  ],
  { stdio: ["pipe", "inherit", "inherit"] }
);

// 5. Render Loop: 900 Frames
console.log(`[4/4] Rendering ${TOTAL_FRAMES} frames deterministically...`);
const startTime = Date.now();

for (let frame = 0; frame < TOTAL_FRAMES; frame++) {
  const t = frame / FPS;

  // Execute renderFrame(t) and extract JPEG buffer
  const evalResult = await sendPageCDP("Runtime.evaluate", {
    expression: `
      window.renderFrame(${t});
      document.getElementById("canvas").toDataURL("image/jpeg", 0.95).slice(23);
    `,
    returnByValue: true,
  });

  const base64Data = evalResult.result.value;
  const buffer = Buffer.from(base64Data, "base64");

  // Pipe frame directly to ffmpeg stdin
  ffmpeg.stdin.write(buffer);

  if (frame % 60 === 0 || frame === TOTAL_FRAMES - 1) {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    const progress = (((frame + 1) / TOTAL_FRAMES) * 100).toFixed(1);
    const videoSec = (frame / FPS).toFixed(2);
    console.log(`  🎬 Frame ${frame + 1}/${TOTAL_FRAMES} (${progress}%) | Video Time: ${videoSec}s | Elapsed: ${elapsed}s`);
  }
}

// Close ffmpeg stdin
ffmpeg.stdin.end();

await new Promise((resolve) => ffmpeg.on("close", resolve));
console.log("==============================================================");
console.log("✅ RENDER COMPLETE!");
console.log(`📹 Video File Created: ${OUTPUT_VIDEO}`);
console.log("==============================================================");

// Cleanup
chrome.kill();
server.close();
process.exit(0);
