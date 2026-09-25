"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { theme } from "@/utils/theme";
import logo from "@/assets/bhartiya-urban-nikoo-homes-logo.webp";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Record that a form was submitted
    if (typeof window !== "undefined") {
      localStorage.setItem("formSubmitted", "true");
    }

    // 2. Redirect back to home page after 3 seconds
    const timeout = setTimeout(() => {
      router.push("/");
    }, 6000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${theme.bg} px-4`}>
      <div className="pop-in bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-lg w-full text-center flex flex-col items-center">
        {/* Brand Logo */}
        <Image
          src={logo}
          alt="Bhartiya Urban | Nikoo Homes"
          width={220}
          height={60}
          className="w-auto object-contain mb-6"
          priority
        />

        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Messaging */}
        <h1 className={`${theme.fontHeading} text-2xl md:text-3xl font-bold ${theme.textPrimary} mb-3`}>
          Thank you.
        </h1>
        <p className={`${theme.fontBody} text-gray-600 mb-8`}>
          Your Nikoo Homes 8 brochure is on its way — check your downloads, or your promotions folder if we emailed it and it has not landed in five minutes. One of our North Bangalore specialists will call shortly with live inventory, floor-wise pricing and the payment plan.
        </p>

        {/* Loading Spinner */}
        <div className="w-6 h-6 border-2 border-[#c8952a] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
