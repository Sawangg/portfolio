import type { ChapterRenderer } from "@lib/showcase/types";

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

export const renderClock: ChapterRenderer = (ctx, w, h, progress, time) => {
  const cx = w / 2;
  const cy = h / 2;
  const baseRadius = Math.min(w, h) * 0.28;

  const revealPhase = Math.min(1, progress / 0.15);
  const revealEase = easeInOutCubic(revealPhase);
  const currentRadius = baseRadius * revealEase;

  const zoomPhase = Math.max(0, (progress - 0.72) / 0.28);
  const zoomEase = easeInOutCubic(zoomPhase);
  const scale = 1 + zoomEase * 5;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.translate(-cx, -cy);

  const alpha = 1 - zoomPhase * 0.3;

  const dotAlpha = (1 - revealEase) * 0.7;
  if (dotAlpha > 0.01) {
    const dotGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 20);
    dotGlow.addColorStop(0, `rgba(51, 65, 85, ${dotAlpha * 0.4})`);
    dotGlow.addColorStop(1, "rgba(51, 65, 85, 0)");
    ctx.fillStyle = dotGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, 20, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(51, 65, 85, ${dotAlpha})`;
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  if (currentRadius < 1) {
    ctx.restore();
    return;
  }

  ctx.strokeStyle = `rgba(51, 65, 85, ${alpha * 0.35})`;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, currentRadius, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = `rgba(51, 65, 85, ${alpha * 0.08})`;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.arc(cx, cy, currentRadius * 0.7, 0, Math.PI * 2);
  ctx.stroke();

  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const inner = currentRadius * 0.86;
    const outer = currentRadius * 0.96;
    ctx.strokeStyle = `rgba(51, 65, 85, ${alpha * 0.5})`;
    ctx.lineWidth = i % 3 === 0 ? 2.5 : 1.5;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * inner, cy + Math.sin(angle) * inner);
    ctx.lineTo(cx + Math.cos(angle) * outer, cy + Math.sin(angle) * outer);
    ctx.stroke();
  }

  if (revealEase > 0.5) {
    const minuteAlpha = (revealEase - 0.5) * 2;
    ctx.strokeStyle = `rgba(51, 65, 85, ${alpha * 0.2 * minuteAlpha})`;
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 60; i++) {
      if (i % 5 === 0) continue;
      const angle = (i / 60) * Math.PI * 2 - Math.PI / 2;
      const inner = currentRadius * 0.92;
      const outer = currentRadius * 0.96;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(angle) * inner, cy + Math.sin(angle) * inner);
      ctx.lineTo(cx + Math.cos(angle) * outer, cy + Math.sin(angle) * outer);
      ctx.stroke();
    }
  }

  const speedMult = 1 + progress * progress * 4;

  const hourAngle = time * 0.008 * speedMult - Math.PI / 2;
  ctx.strokeStyle = `rgba(30, 41, 59, ${alpha * 0.75})`;
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx + Math.cos(hourAngle) * currentRadius * 0.48, cy + Math.sin(hourAngle) * currentRadius * 0.48);
  ctx.stroke();

  const minuteAngle = time * 0.09 * speedMult - Math.PI / 2;
  ctx.strokeStyle = `rgba(30, 41, 59, ${alpha * 0.65})`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx + Math.cos(minuteAngle) * currentRadius * 0.68, cy + Math.sin(minuteAngle) * currentRadius * 0.68);
  ctx.stroke();

  const secondAngle = time * 0.9 * speedMult - Math.PI / 2;
  ctx.strokeStyle = `rgba(220, 38, 38, ${alpha * 0.5})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx - Math.cos(secondAngle) * currentRadius * 0.08, cy - Math.sin(secondAngle) * currentRadius * 0.08);
  ctx.lineTo(cx + Math.cos(secondAngle) * currentRadius * 0.78, cy + Math.sin(secondAngle) * currentRadius * 0.78);
  ctx.stroke();

  ctx.fillStyle = `rgba(30, 41, 59, ${alpha * 0.8})`;
  ctx.beginPath();
  ctx.arc(cx, cy, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = `rgba(220, 38, 38, ${alpha * 0.6})`;
  ctx.beginPath();
  ctx.arc(cx, cy, 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();

  if (zoomPhase > 0) {
    const vigAlpha = zoomEase * 0.5;
    const vig = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.5);
    vig.addColorStop(0, "rgba(255,255,255,0)");
    vig.addColorStop(0.7, "rgba(255,255,255,0)");
    vig.addColorStop(1, `rgba(255,255,255,${vigAlpha})`);
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, w, h);
  }
};
