export type ChapterRenderer = (
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  progress: number,
  time: number,
) => void;
