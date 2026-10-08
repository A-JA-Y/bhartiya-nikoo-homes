"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MASTER_PLAN_PDF } from "@/data/projectData";
import { useModal } from "./ModalContext";
import useLeadUnlocked from "./useLeadUnlocked";

const LockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

function Lightbox({ title, subtitle, image, alt, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return (
    <div
      className="backdrop-in fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="pop-in relative max-h-[92vh] w-full max-w-4xl overflow-auto rounded-xl bg-white p-3 sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg text-gray-900 shadow transition-transform duration-300 hover:rotate-90"
        >
          ✕
        </button>
        <div className="mb-3 pr-10">
          <p className="text-base font-semibold text-gray-900 sm:text-lg">{title}</p>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
        <Image src={image} alt={alt} sizes="(max-width: 1024px) 100vw, 900px" className="h-auto w-full object-contain" />
        {children}
      </div>
    </div>
  );
}

// Floor plan thumbnails, blurred until the visitor shares their details;
// unlocked plans open full size.
export function GatedPlanGrid({ plans, className = "grid-cols-2 lg:grid-cols-4" }) {
  const { openModal } = useModal();
  const unlocked = useLeadUnlocked();
  const [active, setActive] = useState(null);

  return (
    <>
      <ul className={`grid gap-3 sm:gap-4 ${className}`} data-stagger>
        {plans.map((plan) => (
          <li key={plan.label} data-animate="fade-up">
            <button
              type="button"
              onClick={() => (unlocked ? setActive(plan) : openModal())}
              className="card-anim group block w-full cursor-pointer overflow-hidden rounded-xl border border-line bg-white text-left shadow-sm"
              aria-label={unlocked ? `View the ${plan.label} floor plan` : `Unlock the ${plan.label} floor plan`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 280px"
                  className={`object-contain p-3 transition duration-500 ${
                    unlocked ? "group-hover:scale-105" : "scale-105 blur-[3px]"
                  }`}
                />
                {!unlocked && (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-black/55">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 transition-transform duration-300 group-hover:scale-110">
                      <LockIcon /> Unlock plan
                    </span>
                  </span>
                )}
              </div>
              <span className="block border-t border-line px-3 py-2 text-center text-[11px] font-semibold text-gray-800 sm:text-xs">
                {plan.label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <Lightbox
          title={active.label}
          subtitle={active.subtitle}
          image={active.image}
          alt={active.alt}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}

// Master plan preview, gated the same way, with the PDF download once unlocked.
export function GatedMasterPlan({ image, alt, badge = "11.35 Acres" }) {
  const { openModal } = useModal();
  const unlocked = useLeadUnlocked();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => (unlocked ? setOpen(true) : openModal())}
        className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5"
        aria-label={unlocked ? "View the master plan" : "Unlock the master plan"}
        data-animate="zoom-in"
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="scale-105 object-cover blur-[1px] transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <span className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 px-4 text-center text-white">
          <span className="text-lg font-semibold">Nikoo Homes 8 Master Plan</span>
          <span className="mt-1 text-sm text-white/85">{unlocked ? "View and download" : "Unlock to view and download"}</span>
          <span className="btn-anim mt-4 inline-flex items-center gap-1.5 rounded-lg bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-widest">
            {!unlocked && <LockIcon />}
            {unlocked ? "View Plan" : "Unlock Now"}
          </span>
        </span>
        <span className="absolute left-3 top-3 rounded bg-gold px-2 py-1 text-[10px] font-semibold text-white">{badge}</span>
      </button>

      {open && (
        <Lightbox title="Nikoo Homes 8 Master Plan" image={image} alt={alt} onClose={() => setOpen(false)}>
          <div className="mt-4 text-center">
            <a
              href={MASTER_PLAN_PDF}
              download
              className="btn-anim inline-block rounded-lg bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white"
            >
              Download Master Plan PDF
            </a>
          </div>
        </Lightbox>
      )}
    </>
  );
}
