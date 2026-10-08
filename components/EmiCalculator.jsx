"use client";
import { useState, useMemo } from "react";

function SliderField({ label, min, max, step, value, onChange, pillLabel, rightLabel }) {
  const pct = (value - min) / (max - min);
  const fillWidth = pct * 100;
  const pillLeft = pct * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-1.5">
        <p className="text-[11px] uppercase tracking-widest text-gray-500">{label}</p>
        <div className="flex items-baseline gap-2">
          {rightLabel}
        </div>
      </div>

      <div className="relative h-9 group">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200 -translate-y-1/2 rounded" />
        <div
          className="absolute top-1/2 left-0 h-[2px] bg-gray-900 -translate-y-1/2 rounded"
          style={{ width: `${fillWidth}%` }}
        />
        {/* Clamped so the pill never spills past the card edge at 0% or 100%. */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap pointer-events-none text-gray-900 shadow-sm transition-[border-color,box-shadow] duration-200 group-hover:border-[#DCA54A] group-hover:shadow-md"
          style={{ left: `clamp(1.9rem, ${pillLeft}%, calc(100% - 1.9rem))` }}
        >
          {pillLabel}
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

// EMI card. Opens on the 2 BHK's ₹1.40 crore base price with 20% down, 7%
// over 25 years; place it inside whichever section needs it.
export default function EmiCalculator({ className = "" }) {
  const [loan, setLoan] = useState(14000000);
  const [downPercent, setDownPercent] = useState(20);
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(7);

  const emi = useMemo(() => {
    const principal = loan * (1 - downPercent / 100);
    const r = rate / 12 / 100;
    const n = years * 12;
    if (!n) return 0;
    if (r === 0) return Math.round(principal / n);
    return Math.round(
      (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    );
  }, [loan, downPercent, years, rate]);

  const fmt = (n) => Math.round(n).toLocaleString("en-IN");
  const downAmt = loan * downPercent / 100;

  return (
    <div className={`w-full bg-white p-5 sm:p-6 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.07)] ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] ${className}`} data-animate="fade-up">
      <h3 className="text-[11px] font-bold tracking-[0.1em] uppercase mb-6 text-gray-900">
        EMI Calculator
      </h3>

      {/* Property value */}
      <div className="mb-6">
        <label htmlFor="emi-amount" className="block text-[11px] uppercase tracking-widest text-gray-500 mb-1.5">
          Property Value
        </label>
        <div className="flex items-center border-b-2 border-gray-900 pb-1">
          <span className="text-gray-400 text-lg mr-1.5">₹</span>
          <input
            id="emi-amount"
            type="number"
            inputMode="numeric"
            value={loan}
            onChange={(e) => setLoan(Number(e.target.value))}
            className="flex-1 min-w-0 border-none outline-none text-[clamp(20px,5vw,28px)] font-bold bg-transparent text-gray-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
      </div>

      <SliderField
        label="Down Payment"
        min={0}
        max={100}
        step={1}
        value={downPercent}
        onChange={setDownPercent}
        pillLabel={`${downPercent}%`}
        rightLabel={
          <>
            <span className="text-sm font-bold text-gray-900">{downPercent}%</span>
            <span className="text-xs text-gray-500">₹{fmt(downAmt)}</span>
          </>
        }
      />

      <SliderField
        label="Tenure"
        min={1}
        max={30}
        step={1}
        value={years}
        onChange={setYears}
        pillLabel={`${years} Yrs`}
        rightLabel={
          <span className="text-sm font-bold text-gray-900">{years} Years</span>
        }
      />

      <SliderField
        label="Interest Rate"
        min={5}
        max={15}
        step={0.1}
        value={rate}
        onChange={setRate}
        pillLabel={`${rate.toFixed(1)}%`}
        rightLabel={
          <span className="text-sm font-bold text-gray-900">{rate.toFixed(1)}%</span>
        }
      />

      <div className="border-t border-gray-100 pt-4 mt-2">
        <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-1.5">
          Estimated Monthly EMI
        </p>
        <div className="flex items-baseline gap-1.5">
          <span key={emi} className="value-pop text-[clamp(26px,6vw,36px)] font-bold text-gray-900">
            ₹{fmt(emi)}
          </span>
          <span className="text-gray-500 text-sm">/ month</span>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-gray-500">
          Indicative, for planning only; your rate depends on the lender and your profile.
        </p>
      </div>
    </div>
  );
}
