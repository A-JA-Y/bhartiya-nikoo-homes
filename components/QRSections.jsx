import Image from "next/image";
import qrCode from "../assets/rera-karnataka-qr.webp";
import { RERA } from "@/data/projectData";

const QRSection = () => {
  return (
    <section className="w-full bg-[#141004] px-[30px] py-[45px]">
      <div className="max-w-screen-xl mx-auto overflow-hidden" data-animate="fade-up">


        <div className="float-right ml-4">
          <a
            href={RERA.portal}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded bg-white p-1 transition-transform duration-300 hover:scale-105"
            aria-label="Verify on the Karnataka RERA portal"
          >
            <Image
              src={qrCode}
              alt="QR code linking to the Karnataka RERA portal for verifying Nikoo Homes 8"
              width={110}
              height={110}
              className="block object-contain"
            />
          </a>
        </div>

        <address className="not-italic text-right text-white text-[13px] leading-[1.7] tracking-wide">

          <p className="mb-0.5">
            <strong className="tracking-widest">RERA NO. (PHASE 1):</strong>{" "}
            <span itemProp="identifier">{RERA.phase1}</span>
          </p>
          <p className="mb-0.5">
            <strong className="tracking-widest">RERA NO. (PHASE 2):</strong>{" "}
            <span itemProp="identifier">{RERA.phase2}</span>
          </p>
          <p className="mb-2 text-[#cccccc] text-[12px]">
            <a
              href={RERA.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cccccc] hover:text-white no-underline transition-colors"
            >
              {RERA.portal}
            </a>
          </p>

          <p className="mb-0.5">
            <strong className="tracking-widest">REGISTERED:</strong> {RERA.registeredOn.toUpperCase()}{" "}
            <strong className="tracking-widest">| RERA-FILED COMPLETION:</strong> {RERA.completion.toUpperCase()}
          </p>
          <p className="mb-1 text-[#cccccc] text-[12px]">
            70% of amounts collected are deposited in a designated escrow account under
            Section 4(2)(l)(D) of the Real Estate (Regulation and Development) Act, 2016.
          </p>
          <p className="text-[#cccccc] text-[12px]">
            As disclosed by the developer, the project is mortgaged with and funded by Bajaj
            Housing Finance Limited; its NOC will be provided for the agreement for sale and
            sale deed as per RERA guidelines.
          </p>

        </address>

        <div className="clear-both" />
      </div>
    </section>
  );
};

export default QRSection;
