/**
 * app/blogs/[slug]/page.tsx
 */

import BlogContactForm from "@/components/BlogContactForm";
import RelatedPosts from "@/components/RelatedPosts";
import { blogData } from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/content/JsonLd";
import path from "path";
import fs from "fs";

type Params = Promise<{ slug: string }>;

/* ─────────────────────────────────────────────
   LOAD MDX FILE
───────────────────────────────────────────── */
async function getBlogContent(slug: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "content",
      "blogs",
      `${slug}.mdx`
    );

    if (!fs.existsSync(filePath)) return null;

    const mod = await import(`@/content/blogs/${slug}.mdx`);

    // ✅ MDX default export is directly usable
    return mod.default;
  } catch {
    return null;
  }
}

/* ─────────────────────────────────────────────
   SEO META
───────────────────────────────────────────── */
export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;

  const blog = blogData.find((b) => b.slug === slug);
  if (!blog) return {};

  const title = blog.metaTitle || blog.title;
  const description = blog.metaDescription || blog.excerpt;
  const url = `https://bhartiyanikoohomes8.com/blog/${slug}`;
  const imageUrl = typeof blog.image === "string" ? blog.image : "";

  return {
    title,
    description,
    keywords: blog.keywords ?? [],

    alternates: {
      canonical: blog.canonical || url,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      type: "article",
      url: blog.canonical || url,
      title,
      description,
      siteName: "Bhartiya Nikoo Homes 8",
      locale: "en_IN",
      images: imageUrl
        ? [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ]
        : [],
      publishedTime: blog.date,
      modifiedTime: blog.updatedAt,
      authors: blog.author ? [blog.author] : [],
      tags: blog.keywords ?? [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },

    authors: blog.author ? [{ name: blog.author }] : [],
    category: blog.category,
  };
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default async function BlogDetail({ params }: { params: Params }) {
  const { slug } = await params;

  const blog = blogData.find((b) => b.slug === slug);
  if (!blog) return notFound();

  const BlogContent = await getBlogContent(slug);
  if (!BlogContent) return notFound();

  const pageUrl = `https://bhartiyanikoohomes8.com/blog/${slug}`;
  const imageUrl = typeof blog.image === "string" ? blog.image : "";

  /* ── Breadcrumb Schema ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bhartiyanikoohomes8.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://bhartiyanikoohomes8.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: pageUrl,
      },
    ],
  };

  /* ── Article Schema ── */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.metaDescription || blog.excerpt,
    image: imageUrl || undefined,
    datePublished: blog.date,
    dateModified: blog.updatedAt || blog.date,
    author: blog.author
      ? { "@type": "Person", name: blog.author }
      : { "@type": "Organization", name: "Bhartiya Nikoo Homes 8" },
    publisher: {
      "@type": "Organization",
      name: "Bhartiya Nikoo Homes 8",
      logo: {
        "@type": "ImageObject",
        url: "https://bhartiyanikoohomes8.com/bhartiya-urban-nikoo-homes-logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    keywords: (blog.keywords ?? []).join(", "),
  };

  return (
    <>
      {/* JSON-LD */}
      {blog.schemaMarkup && (
        <JsonLd data={blog.schemaMarkup} />
      )}
      {blog?.faqSchema && (
        <JsonLd data={blog.faqSchema} />
      )}

      <JsonLd data={articleSchema} />

      <JsonLd data={breadcrumbSchema} />

      <article className="w-full bg-white">
        {/* HERO */}
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[560px]">
          <Image
            src={blog.image}
            alt={blog.altText || blog.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute bottom-0 px-4 sm:px-6 md:px-16 py-8 md:py-10 max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-3 text-xs text-white/75">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-1.5 text-white/40">/</span>
              <Link href="/blog" className="hover:text-white">Blog</Link>
            </nav>
            <span className="text-xs text-white/80 border px-3 py-1 rounded-full">
              {blog.category}
            </span>

            {/* <h1 className="text-3xl md:text-5xl text-white mt-3">
              {blog.title}
            </h1> */}

            <p className="text-sm text-white/80 mt-3">
              By {blog.author} · Published {new Date(blog.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              {blog.updatedAt && blog.updatedAt !== blog.date && (
                <> · Last updated {new Date(blog.updatedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</>
              )}
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] gap-12">
          {/* ✅ FIXED: No components prop */}
          <div className="prose prose-lg max-w-none">
            <BlogContent />
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-8">


            <BlogContactForm />

            <RelatedPosts currentSlug={slug} />

          </aside>
        </div>
      </article>
    </>
  );
}

/* ─────────────────────────────────────────────
   STATIC PATHS
───────────────────────────────────────────── */
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}