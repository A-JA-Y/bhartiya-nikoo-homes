export default function PageBanner({ title, subtitle, eyebrow }) {
  return (
    <section className="w-full bg-[#F0E6C5] lg:bg-[#FAF8F4] py-12 px-6 border-b border-[#e5dcc5]">
      <div className="max-w-5xl mx-auto text-center">
        {eyebrow ? (
          <p className="rise rise-1 uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="rise rise-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
        <span className="rise rise-3 block w-12 h-[2px] bg-[#DCA54A] mx-auto mt-4" aria-hidden="true" />
        {subtitle ? (
          <p className="rise rise-4 text-gray-600 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
