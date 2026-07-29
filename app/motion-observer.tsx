"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".facts-grid > div",
  ".intro-grid > *",
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = document.documentElement;
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    );
    const spotlightTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-spotlight]"),
    );

    root.classList.add("motion-enabled");
    revealTargets.forEach((target, index) => {
      target.classList.add("motion-reveal");
      target.style.setProperty("--reveal-order", String(index % 5));
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
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

    revealTargets.forEach((target) => revealObserver.observe(target));
    spotlightTargets.forEach((target) => spotlightObserver.observe(target));

    return () => {
      revealObserver.disconnect();
      spotlightObserver.disconnect();
      root.classList.remove("motion-enabled");
    };
  }, []);

  return null;
}
