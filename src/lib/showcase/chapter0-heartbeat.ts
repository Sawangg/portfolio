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
  const maxRadius = Math.min(w, h) * 0.42;

  // Phase 1 (0.00 → 0.35): tiny dot grows to full circle
  // Phase 2 (0.35 → 0.65): circle stays full size, content visible
  // Phase 3 (0.65 → 1.00): circle exits (moves off-screen corner), dot shrinks back

  // --- Dot grid background ---
  // Grid fades in as progress advances
  const gridFade = easeOutCubic(Math.min(1, progress / 0.4));
  const gridSpacing = 28;
  const cols = Math.ceil(w / gridSpacing) + 1;
  const rows = Math.ceil(h / gridSpacing) + 1;

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const dx = col * gridSpacing;
      const dy = row * gridSpacing;
      const distFromCenter = Math.sqrt((dx - cx) ** 2 + (dy - cy) ** 2);
      const normalizedDist = distFromCenter / (Math.max(w, h) * 0.7);

      // Dots pulse with a radial wave driven by time
      const wave = Math.sin(normalizedDist * 10 - time * 1.6 + progress * Math.PI * 2) * 0.5 + 0.5;

      // Dots inside the circle radius area are brighter
      const circleProgress = easeInOutCubic(Math.min(1, progress / 0.35));
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

  // --- Circle position: starts centered, exits bottom-right corner ---
  let circleX = cx;
  let circleY = cy;

  const exitProgress = Math.max(0, (progress - 0.65) / 0.35);
  const exitEase = easeInOutQuart(exitProgress);

  // Exit target: bottom-right corner
  const targetX = w * 0.85;
  const targetY = h * 0.85;
  circleX = cx + (targetX - cx) * exitEase;
  circleY = cy + (targetY - cy) * exitEase;

  // --- Circle radius ---
  const circleGrowProgress = easeInOutCubic(Math.min(1, progress / 0.35));
  // Shrink slightly when exiting
  const circleShrinkOnExit = 1 - exitEase * 0.15;
  const radius = maxRadius * circleGrowProgress * circleShrinkOnExit;

  // --- Circle alpha ---
  const circleAlpha = easeOutCubic(Math.min(1, progress / 0.15)) * (1 - exitEase * 0.3);

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

  // --- Center dot (visible at start, shrinks once circle is large) ---
  const dotFade = 1 - easeInOutCubic(Math.min(1, progress / 0.25));
  const dotGlowFade = easeOutCubic(Math.min(1, progress / 0.08)); // fast initial glow

  if (dotGlowFade > 0) {
    const dotR = 4 + (1 - dotFade) * 0; // 4px dot
    const glowR = 60 * dotGlowFade;

    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
    glow.addColorStop(0, `rgba(${cr},${cg},${cb},${dotGlowFade * 0.25})`);
    glow.addColorStop(0.5, `rgba(${cr},${cg},${cb},${dotGlowFade * 0.08})`);
    glow.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
    ctx.fill();

    // Dot core
    const dotAlpha = dotFade * dotGlowFade;
    if (dotAlpha > 0.01) {
      ctx.fillStyle = `rgba(${cr},${cg},${cb},${dotAlpha})`;
      ctx.beginPath();
      ctx.arc(cx, cy, dotR, 0, Math.PI * 2);
      ctx.fill();
    }
  }
};
