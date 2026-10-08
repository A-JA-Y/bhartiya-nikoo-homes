"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import submitForm from "@/api/submitform";
import { reportLeadConversion } from "@/utils/gtagConversion";
import { BROCHURE, CONSENT_TEXT } from "@/data/projectData";
import { useModal } from "@/components/ModalContext";
import { downloadBrochure } from "@/components/useLeadUnlocked";

type Fields = { name: string; phone: string; email: string };
type Errors = Partial<Record<keyof Fields, string>>;

// Same lead flow as the site's other forms: submit, report the conversion,
// hand over the brochure and go to the thank-you page.
export default function LeadForm({
  idPrefix,
  eyebrow = "Price sheet · Brochure · Site visit",
  title = "Get the cost sheet the same day",
  intro,
  submitLabel = "Get the Price Sheet",
  className = "",
}: {
  idPrefix: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  submitLabel?: string;
  className?: string;
}) {
  const router = useRouter();
  const { setIsLeadSubmitted } = useModal();
  const [form, setForm] = useState<Fields>({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (form.phone.replace(/\D/g, "").length < 8) e.phone = "Please enter a valid phone number.";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email.";
    return e;
  };

  const onChange = (field: keyof Fields) => (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    try {
      setLoading(true);
      setFailed(false);
      await submitForm({ data: form });
      await reportLeadConversion();
      setIsLeadSubmitted(true);
      downloadBrochure(BROCHURE);
      router.push("/thank-you");
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  };

  const input = (hasError?: string) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 hover:border-gold/60 focus:border-gold focus:ring-2 focus:ring-gold/25 sm:text-sm ${
      hasError ? "border-red-500" : "border-gray-300"
    }`;

  const fields: { key: keyof Fields; label: string; type: string; autoComplete: string; inputMode?: "tel" | "email" }[] = [
    { key: "name", label: "Your name", type: "text", autoComplete: "name" },
    { key: "phone", label: "Phone number", type: "tel", autoComplete: "tel", inputMode: "tel" },
    { key: "email", label: "Email ID", type: "email", autoComplete: "email", inputMode: "email" },
  ];

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={`rounded-2xl bg-white p-5 text-gray-900 shadow-xl ring-1 ring-black/5 sm:p-7 ${className}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="mt-2 text-xl font-semibold leading-snug text-gray-900">{title}</h3>
      {intro && <p className="mt-2 text-sm leading-relaxed text-gray-600">{intro}</p>}

      <div className="mt-5 flex flex-col gap-3">
        {fields.map((f) => (
          <div key={f.key}>
            <label htmlFor={`${idPrefix}-${f.key}`} className="sr-only">
              {f.label}
            </label>
            <input
              id={`${idPrefix}-${f.key}`}
              name={f.key}
              type={f.type}
              autoComplete={f.autoComplete}
              inputMode={f.inputMode}
              placeholder={`${f.label} *`}
              value={form[f.key]}
              onChange={onChange(f.key)}
              maxLength={f.key === "phone" ? 15 : 100}
              aria-invalid={Boolean(errors[f.key])}
              aria-describedby={errors[f.key] ? `${idPrefix}-${f.key}-error` : undefined}
              className={input(errors[f.key])}
            />
            {errors[f.key] && (
              <p id={`${idPrefix}-${f.key}-error`} className="mt-1 text-xs text-red-600">
                {errors[f.key]}
              </p>
            )}
          </div>
        ))}
      </div>

      {failed && (
        <p role="alert" className="mt-3 text-sm text-red-600">
          Something went wrong. Please try again, or call us.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-anim mt-4 w-full cursor-pointer rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Submitting…" : submitLabel}
      </button>

      <p className="mt-3 text-[11px] leading-relaxed text-gray-500">{CONSENT_TEXT}</p>
    </form>
  );
}
