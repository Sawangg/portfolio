import type { ChapterRenderer } from "@lib/showcase/types";

interface Particle {
  x: number;
  y: number;
  speed: number;
  size: number;
  stage: number;
  hue: number;
}

let particles: Particle[] = [];
let particlesInitialized = false;

function initParticles(w: number, h: number) {
  particles = [];
  const count = 80;
  for (let i = 0; i < count; i++) {
    particles.push({
      hue: 200 + Math.random() * 40,
      size: 2 + Math.random() * 4,
      speed: 0.5 + Math.random() * 2,
      stage: Math.floor(Math.random() * 4),
      x: Math.random() * w,
      y: h * 0.3 + Math.random() * h * 0.4,
    });
  }
  particlesInitialized = true;
}

export function resetPipelineParticles() {
  particlesInitialized = false;
}

export const renderPipeline: ChapterRenderer = (ctx, w, h, progress, time) => {
  if (!particlesInitialized) initParticles(w, h);

  const stageWidth = w / 4;
  const stageLabels = ["build", "test", "stage", "deploy"];
  const stageColors = ["hsla(30, 70%, 40%,", "hsla(50, 70%, 40%,", "hsla(200, 70%, 40%,", "hsla(150, 70%, 40%,"];

  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const x = i * stageWidth;
    const alpha = 0.1 + progress * 0.15;
    ctx.strokeStyle = `rgba(0,0,0,${alpha})`;
    ctx.beginPath();
    ctx.moveTo(x, h * 0.25);
    ctx.lineTo(x, h * 0.75);
    ctx.stroke();
  }

  const labelAlpha = Math.min(1, progress * 2);
  ctx.font = "11px monospace";
  ctx.textAlign = "center";
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = `rgba(0,0,0,${labelAlpha * 0.4})`;
    const label = stageLabels[i] as string;
    ctx.fillText(label, stageWidth * i + stageWidth / 2, h * 0.22);
  }

  const pipeY = h / 2;
  const pipeAlpha = 0.15 + progress * 0.2;
  ctx.strokeStyle = `rgba(0,0,0,${pipeAlpha})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, pipeY);
  ctx.lineTo(w, pipeY);
  ctx.stroke();

  const arrowAlpha = 0.2 + progress * 0.3;
  for (let i = 0; i < 3; i++) {
    const ax = stageWidth * (i + 1);
    ctx.fillStyle = `rgba(0,0,0,${arrowAlpha})`;
    ctx.beginPath();
    ctx.moveTo(ax - 6, pipeY - 4);
    ctx.lineTo(ax + 2, pipeY);
    ctx.lineTo(ax - 6, pipeY + 4);
    ctx.fill();
  }

  const speed = 0.5 + progress * 2;
  for (const p of particles) {
    p.x += p.speed * speed;
    if (p.x > w + 10) {
      p.x = -10;
      p.y = h * 0.35 + Math.random() * h * 0.3;
      p.stage = 0;
    }
    p.stage = Math.min(3, Math.floor(p.x / stageWidth));

    const alpha = 0.3 + progress * 0.6;
    ctx.fillStyle = `${stageColors[p.stage]}${alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y + Math.sin(p.x * 0.02 + time) * 8, p.size, 0, Math.PI * 2);
    ctx.fill();
  }
};
