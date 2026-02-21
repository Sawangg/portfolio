import { renderHeartbeat } from "@lib/showcase/chapter0-heartbeat";
import { renderClock } from "@lib/showcase/chapter1-clock";
import { renderWave } from "@lib/showcase/chapter2-wave";
import { renderPipeline, resetPipelineParticles } from "@lib/showcase/chapter3-pipeline";
import { renderCubes } from "@lib/showcase/chapter4-cubes";
import type { ChapterRenderer } from "@lib/showcase/types";

export interface ShowcaseSceneOptions {
  canvas: HTMLCanvasElement;
  container: HTMLElement;
}

const CHAPTER_COUNT = 5;
const BG_COLOR = "#ffffff";
const REDUCED_MOTION = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function getChapterInfo(progress: number) {
  const transitionZone = 0.12;

  const rawIndex = progress * CHAPTER_COUNT;
  const chapterIndex = Math.min(Math.floor(rawIndex), CHAPTER_COUNT - 1);
  const chapterProgress = rawIndex - chapterIndex;

  let transitionAlpha = 1;
  if (chapterProgress < transitionZone) {
    transitionAlpha = easeInOutCubic(chapterProgress / transitionZone);
  } else if (chapterProgress > 1 - transitionZone) {
    transitionAlpha = easeInOutCubic((1 - chapterProgress) / transitionZone);
  }

  return { chapterIndex, chapterProgress, transitionAlpha };
}

const chapters: ChapterRenderer[] = [renderHeartbeat, renderClock, renderWave, renderPipeline, renderCubes];

export function createShowcaseScene({ canvas, container }: ShowcaseSceneOptions) {
  const maybeCtx = canvas.getContext("2d");
  if (!maybeCtx) throw new Error("Canvas 2D context unavailable");
  const ctx = maybeCtx;

  let width = 0;
  let height = 0;
  let scrollProgress = 0;
  let animationId: number;
  const startTime = performance.now();
  const dpr = Math.min(window.devicePixelRatio, 2);

  function resize() {
    width = container.clientWidth;
    height = container.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    resetPipelineParticles();
  }

  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  function render() {
    animationId = requestAnimationFrame(render);

    const time = REDUCED_MOTION ? 0 : (performance.now() - startTime) / 1000;

    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, width, height);

    const { chapterIndex, chapterProgress } = getChapterInfo(scrollProgress);

    chapters[chapterIndex]?.(ctx, width, height, chapterProgress, time);
  }

  render();

  return {
    destroy() {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    },
    getChapterInfo() {
      return getChapterInfo(scrollProgress);
    },
    setScrollProgress(p: number) {
      scrollProgress = p;
    },
  };
}
