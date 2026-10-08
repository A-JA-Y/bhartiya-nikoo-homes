// Button classes shared by client CTA components and plain links in server
// pages.
const base =
  "btn-anim inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer";

export const buttonStyles = {
  primary: `${base} bg-gold text-white hover:bg-gold-dark`,
  outline: `${base} border border-white/70 text-white hover:bg-white hover:text-ink`,
  outlineDark: `${base} border border-gold text-gold-ink hover:bg-gold hover:text-white`,
  whatsapp: `${base} bg-[#1fa855] text-white hover:bg-[#178a45]`,
};

export type ButtonStyle = keyof typeof buttonStyles;
