import type { ChapterRenderer } from "@lib/showcase/types";

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t * t * t * t : 1 - (-2 * t + 2) ** 4 / 2;
}

export const renderHeartbeat: ChapterRenderer = (ctx, w, h, progress, time) => {
  const cr = 16;
  const cg = 185;
  const cb = 129;

  const cx = w / 2;
  const cy = h / 2;
  const dotX = w / 2;
  const dotY = h * 0.08;
  const maxRadius = Math.min(w, h) * 0.42;

  // Phase 1 (0.00 → 0.15): dot at top, circle expands quickly
  // Phase 2 (0.15 → 0.65): circle full size, content visible
  // Phase 3 (0.65 → 1.00): circle exits to corner

  // --- Dot grid background ---
  const gridFade = easeOutCubic(Math.min(1, progress / 0.2));
  const gridSpacing = 28;
  const cols = Math.ceil(w / gridSpacing) + 1;
  const rows = Math.ceil(h / gridSpacing) + 1;

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const dx = col * gridSpacing;
      const dy = row * gridSpacing;
      const distFromCenter = Math.sqrt((dx - cx) ** 2 + (dy - cy) ** 2);
      const normalizedDist = distFromCenter / (Math.max(w, h) * 0.7);

      const wave = Math.sin(normalizedDist * 10 - time * 1.6 + progress * Math.PI * 2) * 0.5 + 0.5;

      const circleProgress = easeInOutCubic(Math.min(1, progress / 0.15));
      const currentRadius = maxRadius * circleProgress;
      const insideCircle = distFromCenter < currentRadius ? 1 : 0;

      const baseAlpha = gridFade * (0.08 + wave * 0.06);
      const innerAlpha = gridFade * (0.12 + wave * 0.15) * insideCircle;
      const dotAlpha = baseAlpha + innerAlpha;

      const dotSize = insideCircle > 0 ? 1.2 + wave * 1.8 : 0.8 + wave * 0.4;

      ctx.fillStyle = `rgba(${cr},${cg},${cb},${dotAlpha})`;
      ctx.beginPath();
      ctx.arc(dx, dy, dotSize, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // --- Circle: grows from top-center dot position, exits bottom-right ---
  let circleX = dotX;
  let circleY = dotY;

  const exitProgress = Math.max(0, (progress - 0.65) / 0.35);
  const exitEase = easeInOutQuart(exitProgress);

  // Move from top-center toward canvas center as circle grows, then exit to corner
  const settleEase = easeInOutCubic(Math.min(1, progress / 0.15));
  circleX = dotX + (cx - dotX) * settleEase + (w * 0.85 - cx) * exitEase;
  circleY = dotY + (cy - dotY) * settleEase + (h * 0.85 - cy) * exitEase;

  // --- Circle radius ---
  const circleGrowProgress = easeInOutCubic(Math.min(1, progress / 0.15));
  const circleShrinkOnExit = 1 - exitEase * 0.15;
  const radius = maxRadius * circleGrowProgress * circleShrinkOnExit;

  // --- Circle alpha ---
  const circleAlpha = easeOutCubic(Math.min(1, progress / 0.08)) * (1 - exitEase * 0.3);

  if (radius > 0.5) {
    // Outer glow ring
    const glowGrad = ctx.createRadialGradient(circleX, circleY, radius - 20, circleX, circleY, radius + 30);
    glowGrad.addColorStop(0, `rgba(${cr},${cg},${cb},${circleAlpha * 0.08})`);
    glowGrad.addColorStop(0.5, `rgba(${cr},${cg},${cb},${circleAlpha * 0.04})`);
    glowGrad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(circleX, circleY, radius + 30, 0, Math.PI * 2);
    ctx.fill();

    // Circle stroke
    ctx.strokeStyle = `rgba(${cr},${cg},${cb},${circleAlpha * 0.85})`;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
    ctx.stroke();
  }

  // --- Dot at top-center (always visible, fades out as circle expands) ---
  const dotFade = 1 - easeInOutCubic(Math.min(1, progress / 0.12));

  if (dotFade > 0.01) {
    const dotR = 4;
    const glowR = 50;

    const glow = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, glowR);
    glow.addColorStop(0, `rgba(${cr},${cg},${cb},${dotFade * 0.35})`);
    glow.addColorStop(0.5, `rgba(${cr},${cg},${cb},${dotFade * 0.08})`);
    glow.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(dotX, dotY, glowR, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(${cr},${cg},${cb},${dotFade * 0.9})`;
    ctx.beginPath();
    ctx.arc(dotX, dotY, dotR, 0, Math.PI * 2);
    ctx.fill();
  }
};
