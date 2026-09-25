import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import EnquirySection from "@/components/EnquirySection";
import StickyDownloadButton from "@/components/StickyButton";
import { CONTACT } from "@/data/projectData";

export const metadata: Metadata = {
  title: "Contact Us | Bhartiya Nikoo Homes 8, Thanisandra",
  description:
    "Contact our team for the Nikoo Homes 8 price sheet, live inventory, floor-wise pricing and site visits with pickup from Hebbal or Manyata.",
  alternates: { canonical: "https://bhartiyanikoohomes8.com/contact-us" },
};

export default function ContactUsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Price sheet, live inventory and floor-wise pricing — plus site visits seven days a week with pickup from Hebbal or Manyata."
      />
      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8" data-animate="fade-up">
            <a href={`tel:${CONTACT.phoneTel}`} className="btn-anim bg-[#c8952a] hover:bg-[#b07d1f] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md">Call {CONTACT.phoneDisplay}</a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-anim bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md">WhatsApp</a>
            <a href={`mailto:${CONTACT.email}`} className="btn-anim border-2 border-[#DCA54A] text-[#c8922a] hover:bg-[#DCA54A] hover:text-white text-xs font-semibold tracking-widest px-6 py-3 rounded-md">{CONTACT.email}</a>
          </div>
          <ContactForm />
        </div>
      </section>
      <EnquirySection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
