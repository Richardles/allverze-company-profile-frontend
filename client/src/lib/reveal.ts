export function observeReveals(root: HTMLElement): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  root.classList.add("reveal-ready");

  const targets = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
  if (targets.length === 0) {
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }
        const el = entry.target as HTMLElement;
        const delay = el.dataset.revealDelay;
        if (delay) {
          el.style.animationDelay = `${delay}ms`;
        }
        el.classList.add("is-in");
        io.unobserve(el);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  targets.forEach((el) => io.observe(el));
}