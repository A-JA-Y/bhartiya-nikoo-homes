"use client"
import Image from "next/image";
import NewsData from "@/data/newsData";
import { useRouter } from "next/navigation";

export default function NewsSection() {
  const router = useRouter();

  const latestNews = [...NewsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="news">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3" data-animate="fade-up">
            Latest News
          </h6>
          <h2 className="text-3xl font-bold text-gray-900" data-animate="fade-up" data-delay="100">
            Project & Infrastructure Updates
          </h2>
        </div>

        {/* Latest News Cards */}
        <div className="grid md:grid-cols-3 gap-6" data-stagger>
          {latestNews.map((item) => (
            <div key={item.id} data-animate="fade-up" onClick={() => router.push(`/news/${item.slug}`)} className="card-anim group bg-white rounded shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.altText || item.title}
                  width={400}
                  height={250}
                  className="w-full h-[180px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-[#DCA54A] mb-2">{item.category}</p>
                <h3 className="font-semibold text-gray-900 mb-2 transition-colors group-hover:text-[#b07d1f]">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.excerpt}</p>
                <span className="inline-block mt-3 text-xs font-semibold uppercase tracking-widest text-[#c8952a]">
                  Read update <span className="arrow-nudge">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Read More Button */}
        <div className="text-center mt-6" data-animate="fade-up">
          <button
            onClick={() => router.push("/news")}
            className="btn-anim px-6 py-3 text-sm font-medium text-white bg-[#DCA54A] rounded hover:bg-[#C49A2B] transition-colors cursor-pointer"
          >
            Read More News
          </button>
        </div>
      </div>
    </section>
  );
}
