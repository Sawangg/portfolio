export function observeScrollProgress(element: HTMLElement, callback: (progress: number) => void): () => void {
  let ticking = false;

  function update() {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = element.offsetHeight;

    // progress=0 when section top hits viewport top, progress=1 when section bottom hits viewport bottom
    const scrolled = -rect.top;
    const total = sectionHeight - windowHeight;
    const progress = Math.max(0, Math.min(1, scrolled / total));

    callback(progress);
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  update();

  return () => window.removeEventListener("scroll", onScroll);
}
