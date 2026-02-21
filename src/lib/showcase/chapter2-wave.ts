import type { ChapterRenderer } from "@lib/showcase/types";

export const renderWave: ChapterRenderer = (ctx, w, h, progress, time) => {
  const centerY = h / 2;
  const amplitude = 120 * (1 - progress * 0.85);
  const frequency = 0.008 + progress * 0.004;
  const lineCount = 5;

  for (let l = 0; l < lineCount; l++) {
    const offset = (l - lineCount / 2) * 15;
    const alpha = 0.2 + (l === Math.floor(lineCount / 2) ? 0.5 : 0);

    ctx.strokeStyle = `hsla(150, 60%, 35%, ${alpha})`;
    ctx.lineWidth = l === Math.floor(lineCount / 2) ? 2.5 : 1;
    ctx.beginPath();

    for (let x = 0; x <= w; x += 2) {
      const noise1 = Math.sin(x * frequency + time * 1.5 + l) * amplitude;
      const noise2 = Math.sin(x * frequency * 2.3 + time * 0.7 + l * 2) * amplitude * 0.4;
      const noise3 = Math.sin(x * frequency * 0.5 + time * 2.1) * amplitude * 0.2 * (1 - progress);

      const y = centerY + offset + noise1 + noise2 + noise3;

      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  if (progress > 0.6) {
    const flatAlpha = (progress - 0.6) / 0.4;
    ctx.strokeStyle = `hsla(150, 60%, 30%, ${flatAlpha * 0.8})`;
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(w, centerY);
    ctx.stroke();
    ctx.setLineDash([]);
  }
};
