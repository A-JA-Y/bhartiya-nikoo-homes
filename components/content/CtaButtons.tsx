"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { FaDownload, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { BROCHURE, CONTACT } from "@/data/projectData";
import { useModal } from "@/components/ModalContext";
import useLeadUnlocked, { downloadBrochure } from "@/components/useLeadUnlocked";

import { buttonStyles as styles, type ButtonStyle as Style } from "./buttonStyles";

export function PriceSheetButton({ style = "primary", children = "Get the Price Sheet" }: { style?: Style; children?: ReactNode }) {
  const { openModal } = useModal();
  return (
    <button type="button" onClick={() => openModal()} className={styles[style]}>
      {children}
    </button>
  );
}

// Downloads the brochure for visitors who have already shared their details;
// everyone else gets the brochure form.
export function BrochureButton({ style = "outline", children = "Download Brochure" }: { style?: Style; children?: ReactNode }) {
  const { openModal } = useModal();
  const unlocked = useLeadUnlocked();
  return (
    <button
      type="button"
      onClick={() => (unlocked ? downloadBrochure(BROCHURE) : openModal())}
      className={styles[style]}
    >
      <FaDownload aria-hidden="true" className="text-[11px]" />
      {children}
    </button>
  );
}

export function SiteVisitLink({ style = "outline", href = "#book-site-visit", children = "Book a Site Visit" }: { style?: Style; href?: string; children?: ReactNode }) {
  return (
    <Link href={href} className={styles[style]}>
      {children}
    </Link>
  );
}

export function CallLink({ style = "primary" }: { style?: Style }) {
  return (
    <a href={`tel:${CONTACT.phoneTel}`} className={styles[style]}>
      <FaPhoneAlt aria-hidden="true" className="text-[11px]" />
      Call {CONTACT.phoneDisplay}
    </a>
  );
}

export function WhatsAppLink({ message = "Hi, I am interested in Bhartiya Nikoo Homes 8, Thanisandra. Please share the price sheet and details." }: { message?: string }) {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
    >
      <FaWhatsapp aria-hidden="true" className="text-sm" />
      WhatsApp
    </a>
  );
}
