// audio.mjs — Pure Mathematical Sound Synthesis (DSP)
// Generates a 15-second 120 BPM Cyberpunk / Modern Tech audio track as a standard 44.1kHz 16-bit WAV file.

import fs from "fs";
import path from "path";

const SAMPLE_RATE = 44100;
const DURATION = 15.0; // 15 seconds
const NUM_SAMPLES = Math.floor(SAMPLE_RATE * DURATION);
const NUM_CHANNELS = 2; // Stereo
const BPM = 120;
const BEAT_DURATION = 60 / BPM; // 0.5s per beat
const TOTAL_BEATS = Math.floor(DURATION / BEAT_DURATION); // 30 beats

console.log(`[Audio DSP] Synthesizing ${DURATION}s 120 BPM Cyberpunk track (${NUM_SAMPLES} samples)...`);

// Audio Buffers (Left and Right)
const leftChannel = new Float32Array(NUM_SAMPLES);
const rightChannel = new Float32Array(NUM_SAMPLES);

// --- Synth Helper Functions ---
function getBeatTime(beat) {
  return beat * BEAT_DURATION;
}

// Low-pass state for noise filter
let lpLeft = 0;
let lpRight = 0;

// Render loop: Compute sample by sample
for (let i = 0; i < NUM_SAMPLES; i++) {
  const t = i / SAMPLE_RATE;
  const currentBeat = t / BEAT_DURATION;
  let sampleL = 0;
  let sampleR = 0;

  // ==========================================
  // 1. KICK DRUM (Sine pitch-sweep + transient click)
  // ==========================================
  // Active beats: 0..7, 12..20, 26..29 (Muted during rewind 21..25)
  const isKickBeat =
    (currentBeat >= 0 && currentBeat < 8) ||
    (currentBeat >= 12 && currentBeat < 21) ||
    (currentBeat >= 26 && currentBeat < 29);

  if (isKickBeat) {
    const beatFraction = currentBeat % 1.0;
    const kickTime = beatFraction * BEAT_DURATION;
    if (kickTime < 0.28) {
      // Exponential pitch drop from 180Hz to 45Hz
      const pitch = 45 + 135 * Math.exp(-kickTime * 32);
      const phase = 2 * Math.PI * pitch * kickTime;
      const amp = Math.exp(-kickTime * 12);
      // Punch click transient in first 10ms
      const click = kickTime < 0.012 ? Math.sin(2 * Math.PI * 2200 * kickTime) * (1 - kickTime / 0.012) * 0.4 : 0;
      const kickWave = (Math.sin(phase) * 0.85 + click) * amp;
      sampleL += kickWave * 0.9;
      sampleR += kickWave * 0.9;
    }
  }

  // ==========================================
  // 2. SNARE / TECH CLAP (Backbeats: 2, 4 in 4/4)
  // ==========================================
  // Triggers on odd beats: 1, 3, 5, 7, 13, 15, 17, 19, 27
  const isSnareBeat =
    (Math.floor(currentBeat) % 2 === 1) &&
    ((currentBeat >= 1 && currentBeat < 8) ||
     (currentBeat >= 13 && currentBeat < 21) ||
     (currentBeat >= 27 && currentBeat < 29));

  if (isSnareBeat) {
    const beatFraction = currentBeat % 1.0;
    const snareTime = beatFraction * BEAT_DURATION;
    if (snareTime < 0.22) {
      // Tone body
      const tone = Math.sin(2 * Math.PI * 190 * snareTime) * Math.exp(-snareTime * 25) * 0.4;
      // Filtered noise
      const noise = (Math.random() * 2 - 1) * Math.exp(-snareTime * 18) * 0.5;
      sampleL += (tone + noise) * 0.7;
      sampleR += (tone + noise * 0.9) * 0.7;
    }
  }

  // ==========================================
  // 3. HI-HATS (16th notes with velocity groove)
  // ==========================================
  if (currentBeat < 21 || currentBeat >= 26) {
    const sixteenth = (currentBeat * 4) % 1.0;
    const hatTime = sixteenth * (BEAT_DURATION / 4);
    if (hatTime < 0.04) {
      const stepIndex = Math.floor(currentBeat * 4) % 4;
      const velocity = stepIndex === 0 ? 0.35 : stepIndex === 2 ? 0.25 : 0.15;
      const rawNoise = (Math.random() * 2 - 1) * Math.exp(-hatTime * 110) * velocity;
      // High-pass filter simulation
      const hatL = rawNoise * (0.8 + 0.2 * Math.sin(t * 8));
      const hatR = rawNoise * (0.8 - 0.2 * Math.sin(t * 8));
      sampleL += hatL;
      sampleR += hatR;
    }
  }

  // ==========================================
  // 4. SUB-BASS 808 with Sidechain Ducking
  // ==========================================
  // Notes in D-minor: D1 (36.7Hz), F1 (43.6Hz), G1 (49.0Hz), A#1 (58.3Hz)
  const barIndex = Math.floor(currentBeat / 4);
  const bassFreqs = [36.7, 43.6, 49.0, 58.27, 36.7, 43.6, 49.0];
  const bassFreq = bassFreqs[barIndex % bassFreqs.length] || 36.7;

  // Sidechain envelope: duck when kick hits
  const beatFract = currentBeat % 1.0;
  const sidechain = beatFract < 0.08 ? beatFract / 0.08 : 1.0;

  if (currentBeat < 21 || currentBeat >= 26) {
    const bassPhase = 2 * Math.PI * bassFreq * t;
    // Mild saturation with harmonics
    let bass = Math.sin(bassPhase) + 0.35 * Math.sin(bassPhase * 2) + 0.15 * Math.sin(bassPhase * 3);
    bass = Math.tanh(bass * 1.6) * 0.45 * sidechain;
    sampleL += bass;
    sampleR += bass;
  }

  // ==========================================
  // 5. CYBER SYNTH ARPEGGIO (Fast 16th notes)
  // ==========================================
  if (currentBeat >= 2 && currentBeat < 21) {
    const arpNotes = [146.83, 174.61, 220.0, 261.63, 293.66, 261.63, 220.0, 174.61]; // D3 minor
    const arpStep = Math.floor(currentBeat * 4);
    const noteFreq = arpNotes[arpStep % arpNotes.length];
    const arpTime = (currentBeat * 4 % 1.0) * (BEAT_DURATION / 4);
    const synthEnv = Math.exp(-arpTime * 14);

    // Sawtooth wave approximation with 3 harmonics
    let synth = (
      Math.sin(2 * Math.PI * noteFreq * t) +
      0.5 * Math.sin(2 * Math.PI * noteFreq * 2 * t) +
      0.25 * Math.sin(2 * Math.PI * noteFreq * 3 * t)
    ) * synthEnv * 0.15;

    // Stereo panning ping-pong
    const pan = Math.sin(t * 4);
    sampleL += synth * (0.5 + 0.4 * pan);
    sampleR += synth * (0.5 - 0.4 * pan);
  }

  // ==========================================
  // 6. RISER & GLITCH STUTTER (Rewind phase: 10.5s - 12.5s / Beats 21..25)
  // ==========================================
  if (currentBeat >= 21 && currentBeat < 25) {
    const rewindProgress = (currentBeat - 21) / 4;
    // Reverse tape noise & rising resonance
    const riserFreq = 120 + 800 * Math.pow(rewindProgress, 2);
    const riser = Math.sin(2 * Math.PI * riserFreq * t) * (0.15 + 0.25 * rewindProgress);

    // Glitch stutter buffer repeat (repeating 50ms grain)
    const stutterTime = (t % 0.05) * 20;
    const glitch = ((Math.random() * 2 - 1) * 0.2 + Math.sin(stutterTime * 50) * 0.15);

    sampleL += (riser + glitch) * (0.5 + 0.5 * Math.sin(t * 30));
    sampleR += (riser + glitch) * (0.5 - 0.5 * Math.sin(t * 30));
  }

  // ==========================================
  // 7. FINAL IMPACT & SUB DROP (Beats 26..30 / 13.0s - 15.0s)
  // ==========================================
  if (currentBeat >= 26) {
    const finalTime = t - (26 * BEAT_DURATION);
    if (finalTime >= 0) {
      // Massive sub boom drop (80Hz -> 28Hz)
      const subDropFreq = 28 + 52 * Math.exp(-finalTime * 3);
      const subDrop = Math.sin(2 * Math.PI * subDropFreq * finalTime) * Math.exp(-finalTime * 1.2) * 0.7;
      // High sparkle trail
      const sparkle = (Math.random() * 2 - 1) * Math.exp(-finalTime * 2.5) * 0.1;
      sampleL += subDrop + sparkle;
      sampleR += subDrop + sparkle;
    }
  }

  // Soft master limiter / saturation to avoid harsh clipping
  leftChannel[i] = Math.tanh(sampleL * 0.85);
  rightChannel[i] = Math.tanh(sampleR * 0.85);
}

// ==========================================
// WAV File Exporter
// ==========================================
function writeWavFile(outputPath, lChannel, rChannel, sampleRate) {
  const bytesPerSample = 2; // 16-bit
  const blockAlign = NUM_CHANNELS * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = lChannel.length * blockAlign;
  const buffer = Buffer.alloc(44 + dataSize);

  // RIFF Chunk
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);

  // fmt Subchunk
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
  buffer.writeUInt16LE(1, 20);  // AudioFormat (1 for PCM)
  buffer.writeUInt16LE(NUM_CHANNELS, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(16, 34); // BitsPerSample

  // data Subchunk
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);

  // Interleave and convert float [-1, 1] to Int16 [-32768, 32767]
  let offset = 44;
  for (let i = 0; i < lChannel.length; i++) {
    const sL = Math.max(-1, Math.min(1, lChannel[i]));
    const sR = Math.max(-1, Math.min(1, rChannel[i]));
    const intL = sL < 0 ? sL * 0x8000 : sL * 0x7fff;
    const intR = sR < 0 ? sR * 0x8000 : sR * 0x7fff;
    buffer.writeInt16LE(Math.floor(intL), offset);
    buffer.writeInt16LE(Math.floor(intR), offset + 2);
    offset += 4;
  }

  fs.writeFileSync(outputPath, buffer);
  console.log(`[Audio DSP] Successfully written ${buffer.length} bytes to: ${outputPath}`);
}

const outPath = path.resolve("./showreel/audio.wav");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
writeWavFile(outPath, leftChannel, rightChannel, SAMPLE_RATE);
