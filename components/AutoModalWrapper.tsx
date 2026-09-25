"use client";

import { useState, useEffect } from "react";
import InvestmentModal from "./InvestmentModal";

export default function AutoModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // 1. Don't show if already submitted
    const hasSubmitted = typeof window !== "undefined" && localStorage.getItem("formSubmitted") === "true";
    if (hasSubmitted) {
      setIsSubmitted(true);
      return;
    }

    // 2. Auto-open timer (5 seconds)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    // 3. Listen for manual triggers from Header/Buttons
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-modal", handleOpen);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-modal", handleOpen);
    };
  }, []);

  return (
    <InvestmentModal 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)} 
      setIsSubmitted={setIsSubmitted} 
    />
  );
}
