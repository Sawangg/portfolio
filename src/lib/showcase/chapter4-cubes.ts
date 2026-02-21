import type { ChapterRenderer } from "@lib/showcase/types";

function project3D(x: number, y: number, z: number, cx: number, cy: number, fov: number): [number, number] {
  const scale = fov / (fov + z);
  return [cx + x * scale, cy + y * scale];
}

const VERTICES: [number, number, number][] = [
  [-1, -1, -1],
  [1, -1, -1],
  [1, 1, -1],
  [-1, 1, -1],
  [-1, -1, 1],
  [1, -1, 1],
  [1, 1, 1],
  [-1, 1, 1],
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

const HUES = [160, 200, 360, 160, 200, 360];
const SATURATIONS = [50, 50, 40, 50, 50, 40];

export const renderCubes: ChapterRenderer = (ctx, w, h, progress, time) => {
  const cubeSize = Math.min(w, h) * 0.06;
  const positions = [
    { x: w * 0.2, y: h * 0.25 },
    { x: w * 0.5, y: h * 0.2 },
    { x: w * 0.8, y: h * 0.25 },
    { x: w * 0.2, y: h * 0.75 },
    { x: w * 0.5, y: h * 0.8 },
    { x: w * 0.8, y: h * 0.75 },
  ];

  const dimension = progress < 0.33 ? 0 : progress < 0.66 ? 1 : 2;
  const dimProgress = (progress % 0.33) / 0.33;

  for (const [ci, pos] of positions.entries()) {
    const angleX = time * 0.5 + ci * 0.8 + progress * Math.PI;
    const angleY = time * 0.7 + ci * 0.5 + progress * Math.PI * 0.5;

    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);

    const projected: [number, number][] = [];
    for (const [vx, vy, vz] of VERTICES) {
      let rx = vx;
      let ry = vy;
      let rz = vz;
      const ty = ry * cosX - rz * sinX;
      const tz = ry * sinX + rz * cosX;
      ry = ty;
      rz = tz;
      const tx = rx * cosY + rz * sinY;
      const tz2 = -rx * sinY + rz * cosY;
      rx = tx;
      rz = tz2;
      projected.push(project3D(rx * cubeSize, ry * cubeSize, rz * cubeSize, pos.x, pos.y, 400));
    }

    const hue = HUES[ci % HUES.length] as number;
    const sat = SATURATIONS[ci % SATURATIONS.length] as number;
    const lightness = 30 + dimension * 10;
    const alpha = 0.4 + progress * 0.5;

    ctx.strokeStyle = `hsla(${hue}, ${sat}%, ${lightness}%, ${alpha})`;
    ctx.lineWidth = 1.5;

    for (const [a, b] of EDGES) {
      const pa = projected[a] as [number, number];
      const pb = projected[b] as [number, number];
      ctx.beginPath();
      ctx.moveTo(pa[0], pa[1]);
      ctx.lineTo(pb[0], pb[1]);
      ctx.stroke();
    }

    if (dimension >= 1 && dimProgress > 0.3) {
      const innerScale = 0.55;
      const innerAlpha = alpha * 0.5 * Math.min(1, (dimProgress - 0.3) / 0.4);
      ctx.strokeStyle = `hsla(${hue}, ${sat}%, ${lightness + 15}%, ${innerAlpha})`;
      const innerProjected: [number, number][] = [];
      for (const [vx, vy, vz] of VERTICES) {
        let rx = vx * innerScale;
        let ry = vy * innerScale;
        let rz = vz * innerScale;
        const ty = ry * cosX - rz * sinX;
        const tz = ry * sinX + rz * cosX;
        ry = ty;
        rz = tz;
        const tx = rx * cosY + rz * sinY;
        const tz2 = -rx * sinY + rz * cosY;
        rx = tx;
        rz = tz2;
        innerProjected.push(project3D(rx * cubeSize, ry * cubeSize, rz * cubeSize, pos.x, pos.y, 400));
      }
      for (const [a, b] of EDGES) {
        const ipa = innerProjected[a] as [number, number];
        const ipb = innerProjected[b] as [number, number];
        ctx.beginPath();
        ctx.moveTo(ipa[0], ipa[1]);
        ctx.lineTo(ipb[0], ipb[1]);
        ctx.stroke();
      }
      for (let vi = 0; vi < 8; vi++) {
        const pv = projected[vi] as [number, number];
        const ipv = innerProjected[vi] as [number, number];
        ctx.beginPath();
        ctx.moveTo(pv[0], pv[1]);
        ctx.lineTo(ipv[0], ipv[1]);
        ctx.stroke();
      }
    }
  }
};
