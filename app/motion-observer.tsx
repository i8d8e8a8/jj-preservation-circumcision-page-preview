"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".facts-grid > div",
  ".intro-heading",
  ".experience-stat",
  ".intro-copy",
  ".section-heading",
  ".indication-grid article",
  ".design-basics > div",
  ".design-card",
  ".preservation-intro-grid > *",
  ".anatomy-card",
  ".method-story",
  ".candidate-grid > *",
  ".doctor-grid > *",
  ".faq-list details",
  ".visit-details > div",
].join(",");

export default function MotionObserver() {
  useEffect(() => {
    const countTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-count-to]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      countTargets.forEach((target) => {
        const countTo = Number(target.dataset.countTo ?? 0);
        target.textContent = countTo.toLocaleString("ko-KR");
      });
      return;
    }

    const root = document.documentElement;
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    );
    const spotlightTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-spotlight]"),
    );
    const countFrames = new Map<HTMLElement, number>();
    const countTimers = new Map<HTMLElement, number>();

    root.classList.add("motion-enabled");
    revealTargets.forEach((target, index) => {
      target.classList.add("motion-reveal");
      const revealOrder = target.matches(".faq-list details")
        ? Array.from(target.parentElement?.children ?? []).indexOf(target)
        : index % 5;
      target.style.setProperty("--reveal-order", String(revealOrder));
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        rootMargin: "-5% 0px -8% 0px",
        threshold: 0.12,
      },
    );

    const spotlightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          target.classList.toggle("is-active", entry.isIntersecting);

          if (target.dataset.spotlight === "preservation") {
            target
              .closest(".anatomy-card")
              ?.classList.toggle("is-preservation-active", entry.isIntersecting);
          }
        });
      },
      {
        rootMargin: "-12% 0px -12% 0px",
        threshold: 0.42,
      },
    );

    const stopCount = (target: HTMLElement) => {
      const frame = countFrames.get(target);
      const timer = countTimers.get(target);
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      if (timer !== undefined) window.clearTimeout(timer);
      countFrames.delete(target);
      countTimers.delete(target);
    };

    const startCount = (target: HTMLElement) => {
      stopCount(target);
      const countTo = Number(target.dataset.countTo ?? 0);
      const delay = Number(target.dataset.countDelay ?? 0);
      const duration = countTo >= 1000 ? 1450 : 1150;

      target.textContent = "0";
      const timer = window.setTimeout(() => {
        const startedAt = window.performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - startedAt) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(countTo * eased);
          target.textContent = value.toLocaleString("ko-KR");

          if (progress < 1) {
            countFrames.set(target, window.requestAnimationFrame(tick));
          } else {
            countFrames.delete(target);
          }
        };

        countFrames.set(target, window.requestAnimationFrame(tick));
      }, delay);
      countTimers.set(target, timer);
    };

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            startCount(target);
          } else {
            stopCount(target);
            target.textContent = "0";
          }
        });
      },
      {
        rootMargin: "-8% 0px -12% 0px",
        threshold: 0.45,
      },
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
    spotlightTargets.forEach((target) => spotlightObserver.observe(target));
    countTargets.forEach((target) => countObserver.observe(target));

    return () => {
      revealObserver.disconnect();
      spotlightObserver.disconnect();
      countObserver.disconnect();
      countTargets.forEach(stopCount);
      root.classList.remove("motion-enabled");
    };
  }, []);

  return null;
}
