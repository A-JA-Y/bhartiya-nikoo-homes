"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logo150 from "../assets/bhartiya-urban-nikoo-homes-logo.webp";

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "BLOGS", href: "/blogs" },
  { label: "NEWS", href: "/news" },
];

const GOLD = "#C49A2B";
const GOLD_HOVER = "#A8841E";

const BlogHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="w-full shadow-md fixed top-0 left-0 right-0 z-30 bg-[#F0E6C5] lg:bg-[#fff] py-[10px]">
        <div className="max-w-7xl m-auto flex items-center justify-between h-full px-[1rem]">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo150}
              alt="Bhartiya Urban | Nikoo Homes"
              className="h-14 w-auto object-contain"
              sizes="(max-width: 768px) 80px, 80px"
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#D09A40] hover:text-[#DCA54A] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

     
          {/* <Link
            href="#enquire"
            onClick={() => setIsOpen(true)}
            className="hidden lg:inline-flex items-center justify-center px-[32px] py-[16px] text-white rounded-md"
            style={{ backgroundColor: "#DCA54A" }}
          >
            Download Brochure
          </Link> */}

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-sm"
            style={{ backgroundColor: GOLD }}
            onClick={() => setOpen(true)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = GOLD_HOVER)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = GOLD)
            }
          >
            <svg width="20" height="14" viewBox="0 0 20 14">
              <line x1="0" y1="1" x2="20" y2="1" stroke="white" strokeWidth="2" />
              <line x1="0" y1="7" x2="20" y2="7" stroke="white" strokeWidth="2" />
              <line x1="0" y1="13" x2="20" y2="13" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[78px]" />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen z-50 flex flex-col shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "90vw", backgroundColor: "#fff" }}
      >
        {/* Close */}
        <div className="flex justify-end p-4 border-b">
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Mobile Nav */}
        <nav className="flex-1 overflow-y-auto flex flex-col">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-6 py-4 border-b text-[#D09A40]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        {/* <div className="p-6">
          <Link
            href="#enquire"
            onClick={() => setIsOpen(true)}
            className="flex justify-center py-3 bg-[#C49A2B] text-white rounded-md"
          >
            Download Brochure
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default BlogHeader;
