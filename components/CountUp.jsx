"use client";

import { useEffect, useRef } from "react";

const format = (value, decimals) =>
  value.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

// Renders the final number on the server (so it is always readable and
// indexable), then counts up from zero the first time it scrolls into view.
export default function CountUp({ end, decimals = 0, prefix = "", suffix = "", duration = 1800 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el?.firstChild) return;
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already on screen at first paint: keep the final value, no animation.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    const text = el.firstChild;
    const render = (value) => {
      text.nodeValue = `${prefix}${format(value, decimals)}${suffix}`;
    };
    render(0);

    let frame;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          render(end * (1 - Math.pow(1 - progress, 3)));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      render(end);
    };
  }, [end, decimals, prefix, suffix, duration]);

  return <span ref={ref}>{`${prefix}${format(end, decimals)}${suffix}`}</span>;
}
