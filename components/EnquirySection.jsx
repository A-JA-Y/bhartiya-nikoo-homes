"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import submitForm from "@/api/submitform";
import { reportLeadConversion } from "@/utils/gtagConversion";
import { theme } from "@/utils/theme";
import { InputField, TextareaField } from "@/components/form/InputFields";
import Image from "next/image";
import logo from "@/assets/bhartiya-urban-nikoo-homes-logo.webp";
import { BROCHURE, CONSENT_TEXT } from "@/data/projectData";

export default function EnquirySection({
  logoSrc = logo,
  logoAlt = "Bhartiya Urban | Nikoo Homes",
  heading = "Building Since 1987 — and Still Running What It Built",
  body = "The Bhartiya Group was founded in 1987 and grew into one of India's largest leather goods and fashion exporters before building Bhartiya City, a 125-acre integrated development near Hebbal. Bhartiya Urban kept the mall, the hotel, the office park and the school it built there, and operates them today. Nikoo Homes 1 through 5 are delivered and occupied, with more than 6,600 families in residence — Nikoo Homes 8 at Bellahalli is the eighth chapter of that record.",
}) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "This field is required.";
    if (!form.phone.trim()) e.phone = "This field is required.";
    if (!form.email.trim()) e.email = "This field is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email.";
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const e2 = validate();
  if (Object.keys(e2).length > 0) {
    setErrors(e2);
    return;
  }

  try {
    setLoading(true);
    setApiError("");

    await submitForm({ data: form });
    await reportLeadConversion();

    const link = document.createElement("a");
      link.href = BROCHURE.href;
      link.setAttribute("download", BROCHURE.fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    router.push('/thank-you');

  } catch (err) {
    setApiError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};
  return (
    <section id="book-site-visit" className={`${theme.bg} w-full md:px-[30px] md:py-[45px] px-[25px] py-5`}>
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:gap-16">
        {/* Left: Brand info */}
        <div className="flex flex-col gap-5 md:w-1/2" data-animate="fade-right">
          {/* Logo */}
          <div className="max-w-[300px] md:w-[50%]">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={220}
              height={60}
              className="w-auto object-contain self-start max-w-[220px]"
            />
          </div>

          {/* Heading */}
          <h4 className={`${theme.textPrimary} font-semibold`}>{heading}</h4>

          {/* Body */}
          <p className={`${theme.fontBody} ${theme.textSecondary}`}>{body}</p>

          <hr className="border-[#C8BFA0] w-[30%] mt-2 hidden lg:block" />
        </div>

        <hr className="border-[#C8BFA0] my-6 lg:hidden" />

        {/* Right: Enquiry form */}
        <div className="lg:w-1/2" data-animate="fade-left">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
              <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className={`${theme.fontHeading} ${theme.textPrimary}`}>Thank you!</p>
              <p className={`${theme.fontBody} ${theme.textMuted}`}>Our team will get back to you shortly.</p>
            </div>
          ) : (
            <>
              <h6 className={`${theme.fontLabel} uppercase ${theme.accent} mb-3`}>Book a Site Visit</h6>
              <h6 className={`${theme.fontSubheading} ${theme.textPrimary} mb-2`}>
                Come and walk the spine.
              </h6>
              <p className={`${theme.fontBody} ${theme.textMuted} mb-4`}>
                The car-free centre of this project is the part that does not photograph.
                We run site visits seven days a week with pickup from Hebbal or Manyata,
                and you leave with the cost sheet.
              </p>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                <InputField
                  id="enquiry-name"
                  type="text"
                  placeholder="Enter your name *"
                  value={form.name}
                  onChange={handleChange("name")}
                  error={errors.name}
                  maxLength={100}
                />

                <InputField
                  id="enquiry-phone"
                  type="tel"
                  placeholder="Phone number *"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  error={errors.phone}
                  maxLength={15}
                />

                <InputField
                  id="enquiry-email"
                  type="email"
                  placeholder="Email ID *"
                  value={form.email}
                  onChange={handleChange("email")}
                  error={errors.email}
                />

                {apiError && <p className="text-red-500 text-sm">{apiError}</p>}

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className={[
                      "btn-anim px-7 py-2.5 rounded bg-[#DCA54A] cursor-pointer",
                      theme.fontButton,
                      "text-white uppercase",
                      "transition-colors duration-200",
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    ].join(" ")}
                  >
                    {loading ? "Submitting..." : "Book a Site Visit"}
                  </button>
                </div>

                <p className="text-[11px] text-[#7A7258] leading-relaxed">{CONSENT_TEXT}</p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
