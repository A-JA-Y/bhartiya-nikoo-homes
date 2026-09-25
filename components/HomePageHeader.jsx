"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteNavLinks } from "@/data/siteNav";
import logo150 from "../assets/bhartiya-urban-nikoo-homes-logo.webp";

const GOLD = "#C49A2B";
const GOLD_HOVER = "#A8841E";

export default function HomePageHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      setScrolled(window.scrollY > 12);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const half = Math.ceil(siteNavLinks.length / 2);
  const row1 = siteNavLinks.slice(0, half);
  const row2 = siteNavLinks.slice(half);

  const desktopLinkClass = (item) =>
    `relative text-[13px] font-bold px-3 py-1.5 whitespace-nowrap tracking-widest uppercase transition-colors
     after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-[#C49A2B] after:rounded-full after:origin-left after:transition-transform after:duration-300
     ${isActive(item.href)
       ? "text-[#C49A2B] after:scale-x-100"
       : "text-[#555] hover:text-[#C49A2B] after:scale-x-0 hover:after:scale-x-100"
     }`;

  return (
    <>
      {/* Main header */}
      <header
        className={`w-full bg-white border-b border-[rgba(196,154,43,0.2)] shadow-sm fixed left-0 right-0 top-0 z-30 transition-shadow duration-300 ${
          scrolled ? "header-scrolled" : ""
        }`}
      >
        {/* Scroll progress */}
        <div
          ref={progressRef}
          aria-hidden="true"
          className="absolute left-0 right-0 top-0 h-[3px] origin-left bg-gradient-to-r from-[#A8841E] via-[#C49A2B] to-[#E3B866]"
          style={{ transform: "scaleX(0)" }}
        />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-stretch gap-0 h-[72px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center pr-6 border-r border-[rgba(196,154,43,0.2)] transition-opacity hover:opacity-80"
          >
            <Image
              src={logo150}
              alt="Bhartiya Urban | Nikoo Homes"
              priority
              style={{ width: "150px", height: "auto" }}
              sizes="150px"
            />
          </Link>

          {/* Desktop nav — two rows, fills remaining space */}
          <nav className="hidden xl:flex flex-col flex-1 justify-center px-4 font-sans">
            {/* Row 1 */}
            <div className="flex items-center">
              {row1.map((item) => (
                <Link key={item.href} href={item.href} className={desktopLinkClass(item)}>
                  {item.label}
                </Link>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex items-center border-t border-dashed border-[rgba(196,154,43,0.18)]">
              {row2.map((item) => (
                <Link key={item.href} href={item.href} className={desktopLinkClass(item)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Enquire Now CTA */}
          <div className="hidden xl:flex items-center pl-6 border-l border-[rgba(196,154,43,0.2)] flex-shrink-0">
            <Link
              href="/contact-us"
              className="btn-anim inline-flex items-center gap-2 bg-[#C49A2B] hover:bg-[#A8841E] text-white text-[10px] font-semibold uppercase tracking-widest px-5 py-2.5 transition-colors"
            >
              Enquire Now
              <svg className="arrow-nudge" width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            className="xl:hidden ml-auto flex items-center justify-center w-10 h-10 rounded flex-shrink-0 transition-all active:scale-90 self-center"
            style={{ backgroundColor: GOLD }}
            onClick={() => setOpen(true)}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = GOLD_HOVER; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = GOLD; }}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
              <line x1="0" y1="1" x2="20" y2="1" stroke="white" strokeWidth="2" />
              <line x1="0" y1="7" x2="20" y2="7" stroke="white" strokeWidth="2" />
              <line x1="0" y1="13" x2="20" y2="13" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Gold accent bar */}
        <div
          className="h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(196,154,43,0.4) 20%, #C49A2B 50%, rgba(196,154,43,0.4) 80%, transparent)" }}
        />
      </header>

      {/* Spacer */}
      <div className="h-[74px]" />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 left-0 h-screen z-50 flex flex-col shadow-2xl transition-transform duration-300 xl:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "min(90vw, 360px)", backgroundColor: "#fff" }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(196,154,43,0.2)]">
          <Image src={logo150} alt="Bhartiya Urban | Nikoo Homes" style={{ width: "140px", height: "auto" }} sizes="140px" />
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="text-[#888] hover:text-[#1a1a1a] hover:rotate-90 transition-transform duration-300 text-xl">✕</button>
        </div>

        <nav className="flex-1 overflow-y-auto flex flex-col font-sans">
          {siteNavLinks.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 35}ms` : "0ms" }}
              className={`px-6 py-3.5 border-b border-[rgba(196,154,43,0.1)] text-[15px] font-bold tracking-wide uppercase transition-all duration-300 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              } ${
                isActive(item.href)
                  ? "text-[#C49A2B] bg-[rgba(196,154,43,0.05)]"
                  : "text-[#444] hover:text-[#C49A2B] hover:pl-8"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-5 border-t border-[rgba(196,154,43,0.2)]">
          <Link
            href="/contact-us"
            onClick={() => setOpen(false)}
            className="btn-anim flex justify-center items-center gap-2 py-3 bg-[#C49A2B] hover:bg-[#A8841E] text-white text-sm font-semibold uppercase tracking-widest transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 bg-black/40 z-40 xl:hidden backdrop-in"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
