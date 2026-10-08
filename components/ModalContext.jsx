"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ModalContext = createContext(
  /** @type {{ isOpen: boolean; openModal: () => void; closeModal: () => void; isLeadSubmitted: boolean; setIsLeadSubmitted: (submitted: boolean) => void }} */ ({
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
    isLeadSubmitted: false,
    setIsLeadSubmitted: () => {},
  })
);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeadSubmitted, setIsLeadSubmitted] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    // Auto-open logic
    if (typeof window !== "undefined" && localStorage.getItem("formSubmitted") === "true") {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    // Exit intent: the pointer leaves through the top of the window (desktop).
    // Shown at most once per session.
    const onMouseOut = (e) => {
      if (e.relatedTarget || e.clientY > 0) return;
      try {
        if (sessionStorage.getItem("exitIntentShown")) return;
        sessionStorage.setItem("exitIntentShown", "true");
      } catch {
        // Storage unavailable — still show it once for this page view.
      }
      document.removeEventListener("mouseout", onMouseOut);
      setIsOpen(true);
    };
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, isLeadSubmitted, setIsLeadSubmitted }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
