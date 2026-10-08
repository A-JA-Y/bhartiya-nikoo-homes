import PageBanner from "@/components/PageBanner";
import { CONTACT, CONSENT_TEXT, RERA } from "@/data/projectData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy & Disclaimer | Bhartiya Nikoo Homes 8",
  description:
    "Privacy policy and disclaimer for the Bhartiya Nikoo Homes 8 channel partner website operated by Real Revenue.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy / Disclaimer"
        subtitle="Please read the following terms before using this website."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 text-sm text-gray-600 leading-relaxed">
          <div data-animate="fade-up">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Disclaimer</h2>
            <p>
              Real Revenue is an authorised channel partner. This website is a marketing initiative
              and is not the official website of Bhartiya Urban. All images, plans, specifications
              and amenity descriptions are indicative and subject to change by the developer and the
              competent authority.
            </p>
            <p className="mt-3">
              Prices are indicative, exclusive of taxes and statutory charges, and subject to revision
              without notice. Nothing on this site constitutes an offer or a contract. Please refer to
              the RERA-registered particulars and the agreement to sell before making any purchase
              decision.
            </p>
            <p className="mt-3">
              Karnataka RERA registration — Phase 1: {RERA.phase1}; Phase 2: {RERA.phase2}. Verify
              both numbers at{" "}
              <a href={RERA.portal} target="_blank" rel="noopener noreferrer" className="link-anim text-[#DCA54A]">
                rera.karnataka.gov.in
              </a>{" "}
              before booking.
            </p>
          </div>

          <div data-animate="fade-up">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Privacy Policy</h2>
            <p>
              We respect your privacy. Information submitted through enquiry forms on this website
              (such as name, phone number and email) is used only to respond to your request and to
              provide project-related information.
            </p>
            <p className="mt-3">
              We do not sell your personal data to third parties. Data may be shared with authorised
              representatives solely for the purpose of assisting you with project-related queries.
            </p>
          </div>

          <div data-animate="fade-up">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Consent to Contact</h2>
            <p>By submitting an enquiry form on this website, you confirm: &ldquo;{CONSENT_TEXT}&rdquo;</p>
          </div>

          <div data-animate="fade-up">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Accuracy of Information</h2>
            <p>
              Project details, pricing, floor plans and availability mentioned on this website are
              indicative and subject to change without prior notice. Users are advised to verify all
              details with the authorised sales team before making any decision.
            </p>
          </div>

          <div data-animate="fade-up">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact</h2>
            <p>
              For any queries regarding this website, please visit our{" "}
              <a href="/contact-us" className="link-anim text-[#DCA54A]">
                Contact Us
              </a>{" "}
              page, call {CONTACT.phoneDisplay} or email{" "}
              <a href={`mailto:${CONTACT.email}`} className="link-anim text-[#DCA54A]">{CONTACT.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
