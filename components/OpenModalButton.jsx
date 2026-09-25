"use client";

import { useModal } from "./ModalContext";

// Lets server-rendered pages open the brochure / price-sheet form.
export default function OpenModalButton({ children, className = "" }) {
  const { openModal } = useModal();

  return (
    <button type="button" onClick={() => openModal()} className={className}>
      {children}
    </button>
  );
}
