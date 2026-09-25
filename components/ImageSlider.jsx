"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ImageSlider({images, alts = []}) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded shadow-2xl group"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Images */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={alts[index] ?? `Bhartiya Nikoo Homes 8 image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-[opacity,scale] ease-out ${
            index === current
              ? "opacity-100 z-10 scale-105 duration-[1000ms,6000ms]"
              : "opacity-0 scale-100 duration-1000"
          }`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 512px"
          quality={80}

        />
      ))}

      {/* Left Button */}
      <button
        type="button"
        aria-label="Previous image"
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 hover:scale-110 active:scale-95 transition-all cursor-pointer md:opacity-0 md:group-hover:opacity-100"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        type="button"
        aria-label="Next image"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 hover:scale-110 active:scale-95 transition-all cursor-pointer md:opacity-0 md:group-hover:opacity-100"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            type="button"
            key={index}
            aria-label={`Show image ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === current ? "w-7 bg-white" : "w-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
