import { RERA } from "@/data/projectData";

const ReraStrip = () => {
  return (
    <div className="block md:hidden w-full bg-[#F2EDE0] px-4 py-2.5 text-[11px] leading-relaxed text-[#3B3B3B] text-center">
      <p>
        <strong className="tracking-wide">Karnataka RERA</strong> · Phase 1: {RERA.phase1}
      </p>
      <p>
        Phase 2: {RERA.phase2} ·{" "}
        <a
          href={RERA.portal}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B8892A] underline underline-offset-2"
        >
          rera.karnataka.gov.in
        </a>
      </p>
    </div>
  );
};

export default ReraStrip;
