import type { ChapterRenderer } from "@lib/showcase/types";

export const renderRings: ChapterRenderer = (ctx, w, h, progress, time) => {
  const centerX = w / 2;
  const centerY = h / 2;
  const maxRadius = Math.max(w, h) * 0.6;
  const ringCount = 8;

  ctx.lineWidth = 1.5;

  for (let i = 0; i < ringCount; i++) {
    const baseRadius = (maxRadius / ringCount) * (i + 1);
    const expansionFactor = 0.3 + progress * 0.7;
    const radius = baseRadius * expansionFactor;

    const breathe = Math.sin(time * 0.8 + i * 0.5) * 10;
    const r = radius + breathe;

    const alpha = (0.15 + progress * 0.4) * (1 - (i / ringCount) * 0.5);
    const hue = 200 + i * 8;

    ctx.strokeStyle = `hsla(${hue}, 60%, 45%, ${alpha})`;
    ctx.beginPath();
    ctx.arc(centerX, centerY, Math.max(0, r), 0, Math.PI * 2);
    ctx.stroke();

    if (progress > 0.4) {
      const nodeCount = 3 + i;
      const nodeAlpha = (progress - 0.4) / 0.6;
      ctx.fillStyle = `hsla(${hue}, 60%, 40%, ${nodeAlpha * 0.8})`;
      for (let n = 0; n < nodeCount; n++) {
        const angle = (n / nodeCount) * Math.PI * 2 + time * 0.3 + i;
        const nx = centerX + Math.cos(angle) * r;
        const ny = centerY + Math.sin(angle) * r;
        ctx.beginPath();
        ctx.arc(nx, ny, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
};
