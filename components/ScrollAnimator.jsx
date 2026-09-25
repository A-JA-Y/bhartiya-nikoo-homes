"use client";

import { useEffect } from "react";

const SELECTOR = "[data-animate]";

// Reveals [data-animate] elements as they scroll into view (styles live in
// globals.css). Content already on screen at first paint is shown without an
// entrance so nothing flashes; elements added later — for example after a
// client-side route change — are picked up by the MutationObserver.
export default function ScrollAnimator() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const reveal = (el) => {
      if (el.dataset.delay) el.style.setProperty("--anim-delay", `${el.dataset.delay}ms`);
      el.classList.add("is-visible");
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );

    const track = (el) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    };

    const viewportHeight = window.innerHeight;
    document.querySelectorAll(SELECTOR).forEach((el) => {
      if (el.getBoundingClientRect().top < viewportHeight) {
        el.classList.add("is-visible", "anim-instant");
      } else {
        track(el);
      }
    });
    document.documentElement.classList.add("anim-ready");

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          if (node.matches(SELECTOR)) track(node);
          node.querySelectorAll(SELECTOR).forEach(track);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
