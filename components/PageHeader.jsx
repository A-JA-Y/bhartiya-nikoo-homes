"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteNavLinks } from "@/data/siteNav";
import logo150 from "../assets/bhartiya-urban-nikoo-homes-logo.webp";

const GOLD = "#C49A2B";
const GOLD_HOVER = "#A8841E";

export default function PageHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const half = Math.ceil(siteNavLinks.length / 2);
  const row1 = siteNavLinks.slice(0, half);
  const row2 = siteNavLinks.slice(half);

  return (
    <>
      {/* Utility strip */}
      <div className="w-full bg-[#1a1a1a] hidden lg:flex items-center justify-end gap-6 px-6 py-1.5 text-[11px] font-sans tracking-wide fixed top-0 left-0 right-0 z-30">
        <span className="text-[#666]">Mon–Sat · 10am–7pm</span>
        <span className="text-[#C49A2B]">&#9742; +91 63566 63535</span>
      </div>

      {/* Main header */}
      <header className="w-full bg-white border-b border-[rgba(196,154,43,0.2)] shadow-sm fixed left-0 right-0 z-30 top-0 lg:top-[29px]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center gap-6 h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <Image
              src={logo150}
              alt="Bhartiya Urban | Nikoo Homes"
              priority
              style={{ width: "120px", height: "auto" }}
              sizes="120px"
            />
          </Link>

          {/* Gold divider */}
          <div className="hidden xl:block self-stretch w-px bg-[rgba(196,154,43,0.25)] my-3" />

          {/* Desktop nav — two rows */}
          <nav className="hidden xl:flex flex-col flex-1 justify-center font-sans">
            <div className="flex items-center">
              {row1.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[11.5px] px-2.5 py-1.5 rounded whitespace-nowrap tracking-wide transition-colors
                    ${item.highlight
                      ? "ml-1.5 text-white font-semibold bg-linear-to-r from-[#C49A2B] to-[#A8841E] hover:from-[#A8841E] hover:to-[#8F6E15] shadow-md"
                      : isActive(item.href)
                      ? "text-[#C49A2B] font-semibold after:absolute after:bottom-0.5 after:left-2.5 after:right-2.5 after:h-[1.5px] after:bg-[#C49A2B] after:rounded-full"
                      : "text-[#555] hover:text-[#C49A2B] hover:bg-[rgba(196,154,43,0.06)]"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center border-t border-dashed border-[rgba(196,154,43,0.18)]">
              {row2.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[11.5px] px-2.5 py-1.5 rounded whitespace-nowrap tracking-wide transition-colors
                    ${item.highlight
                      ? "ml-1.5 text-white font-semibold bg-linear-to-r from-[#C49A2B] to-[#A8841E] hover:from-[#A8841E] hover:to-[#8F6E15] shadow-md"
                      : isActive(item.href)
                      ? "text-[#C49A2B] font-semibold after:absolute after:bottom-0.5 after:left-2.5 after:right-2.5 after:h-[1.5px] after:bg-[#C49A2B] after:rounded-full"
                      : "text-[#555] hover:text-[#C49A2B] hover:bg-[rgba(196,154,43,0.06)]"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Enquire Now CTA */}
          <Link
            href="/contact-us"
            className="hidden xl:inline-flex flex-shrink-0 items-center bg-[#C49A2B] hover:bg-[#A8841E] text-white text-[11px] font-semibold uppercase tracking-widest px-5 py-2.5 rounded transition-colors"
          >
            Enquire Now
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            className="xl:hidden ml-auto flex items-center justify-center w-10 h-10 rounded flex-shrink-0 transition-colors"
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
      </header>

      {/* Spacer: utility strip (29px) + header (70px) */}
      <div className="h-[70px] lg:h-[99px]" />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 left-0 h-screen z-50 flex flex-col shadow-2xl transition-transform duration-300 xl:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "min(90vw, 360px)", backgroundColor: "#fff" }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(196,154,43,0.2)]">
          <Image src={logo150} alt="Bhartiya Urban | Nikoo Homes" style={{ width: "90px", height: "auto" }} sizes="90px" />
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="text-[#888] hover:text-[#1a1a1a] text-xl">✕</button>
        </div>

        <nav className="flex-1 overflow-y-auto flex flex-col font-sans">
          {siteNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`px-6 py-3.5 border-b border-[rgba(196,154,43,0.1)] text-sm tracking-wide transition-colors ${
                item.highlight
                  ? "text-white font-semibold bg-linear-to-r from-[#C49A2B] to-[#A8841E]"
                  : isActive(item.href) ? "text-[#C49A2B] font-semibold bg-[rgba(196,154,43,0.05)]" : "text-[#444] hover:text-[#C49A2B]"
              }`}
            >
              {item.label}
              {item.highlight && (
                <span className="ml-1.5 inline-block bg-red-600 text-white text-[8px] font-bold px-1 py-px rounded animate-pulse align-middle">
                  NEW
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-5 border-t border-[rgba(196,154,43,0.2)]">
          <Link
            href="/contact-us"
            onClick={() => setOpen(false)}
            className="flex justify-center py-3 bg-[#C49A2B] hover:bg-[#A8841E] text-white rounded text-sm font-semibold uppercase tracking-widest transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 bg-black/40 z-40 xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}