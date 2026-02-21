import type { ChapterRenderer } from "@lib/showcase/types";

export const renderDotGrid: ChapterRenderer = (ctx, w, h, progress, time) => {
  const spacing = 32;
  const cols = Math.ceil(w / spacing) + 1;
  const rows = Math.ceil(h / spacing) + 1;
  const centerX = w / 2;
  const centerY = h / 2;
  const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * spacing;
      const y = row * spacing;
      const dx = x - centerX;
      const dy = y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const normalizedDist = dist / maxDist;

      const wave = Math.sin(normalizedDist * 8 - time * 2 + progress * Math.PI * 4) * 0.5 + 0.5;
      const pulse = wave * (0.3 + progress * 0.7);

      const radius = 1 + pulse * 2.5;
      const brightness = 40 + pulse * 160;

      const green = Math.floor(brightness * (0.6 + wave * 0.4));
      ctx.fillStyle = `rgb(${Math.floor(brightness * 0.3)}, ${green}, ${Math.floor(brightness * 0.5)})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
};
