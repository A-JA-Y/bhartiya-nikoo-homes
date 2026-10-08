"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useModal } from "./ModalContext";

const subscribe = (onChange) => {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
};

const readStoredUnlock = () => {
  try {
    return (
      localStorage.getItem("plansUnlocked") === "true" ||
      localStorage.getItem("formSubmitted") === "true"
    );
  } catch {
    // Storage blocked: only this visit's submission counts.
    return false;
  }
};

// True once the visitor has shared their details on any form (this visit or
// an earlier one), which unlocks the floor plans and the brochure download.
export default function useLeadUnlocked() {
  const { isLeadSubmitted } = useModal();
  const stored = useSyncExternalStore(subscribe, readStoredUnlock, () => false);

  useEffect(() => {
    if (!isLeadSubmitted) return;
    try {
      localStorage.setItem("plansUnlocked", "true");
    } catch {
      // Storage blocked: the unlock lasts for this visit only.
    }
  }, [isLeadSubmitted]);

  return isLeadSubmitted || stored;
}

export function downloadBrochure(brochure) {
  const link = document.createElement("a");
  link.href = brochure.href;
  link.setAttribute("download", brochure.fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
