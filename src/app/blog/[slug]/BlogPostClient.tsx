"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, BlogPost } from "@/lib/blogData";

// ─── Extract headings for TOC ─────────────────────────────────────────────────
function extractHeadings(html: string) {
  const matches = [...html.matchAll(/<h([23])[^>]*>(.*?)<\/h[23]>/gi)];
  return matches.map((m) => {
    const text = m[2].replace(/<[^>]+>/g, "");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return { id, text, level: parseInt(m[1]) };
  });
}

// Inject IDs into h2/h3 tags
function injectHeadingIds(html: string): string {
  return html.replace(/<h([23])([^>]*)>(.*?)<\/h[23]>/gi, (_, level, attrs, content) => {
    const text = content.replace(/<[^>]+>/g, "");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return `<h${level}${attrs} id="${id}" class="scroll-mt-24">${content}</h${level}>`;
  });
}

// ─── Reading Progress Bar ─────────────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-200 z-50">
      <div className="h-full bg-indigo-500 transition-[width] duration-75" style={{ width: `${progress}%` }} />
    </div>
  );
}

// ─── Table of Contents ────────────────────────────────────────────────────────
function TableOfContents({ headings }: { headings: { id: string; text: string; level: number }[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { rootMargin: "-10% 0% -80% 0%" }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
      <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-4 flex items-center gap-2">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        On this page
      </p>
      <nav className="space-y-0.5">
        {headings.map(({ id, text, level }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={`flex items-start gap-2 text-sm py-1.5 px-3 rounded-lg transition-all duration-150 leading-snug
              ${level === 3 ? "ml-3 text-xs" : ""}
              ${activeId === id
                ? "bg-indigo-50 text-indigo-700 font-semibold"
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
          >
            <span className={`mt-1.5 flex-shrink-0 rounded-full ${activeId === id ? "bg-indigo-500" : "bg-slate-300"} ${level === 3 ? "w-1 h-1" : "w-1.5 h-1.5"}`} />
            {text}
          </a>
        ))}
      </nav>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function BlogPostClient({ post }: { post: BlogPost }) {
  const headings = extractHeadings(post.content);
  const contentWithIds = injectHeadingIds(post.content);

  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const allCategories = ["Academic", "Sports", "Editorial", "Heritage", "Innovation"];

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <ReadingProgress />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950" />
        <Image src={post.image} alt={post.title} fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-white/50 text-xs mb-4 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Chronicles</Link>
              <span>/</span>
              <span className="text-white/75 truncate max-w-[200px]">{post.title}</span>
            </nav>

            <span className="inline-block bg-indigo-500 text-white text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-4">
              {post.tag}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-black text-white leading-[1.15] mb-4 max-w-3xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-black text-[10px]">
                  {post.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <span className="text-white/90 font-semibold text-sm">{post.author}</span>
                <span className="text-white/40 hidden sm:inline text-xs">· {post.authorRole}</span>
              </div>
              <span className="text-white/25">|</span>
              <span className="text-xs">{post.date}</span>
              <span className="text-white/25">|</span>
              <span className="flex items-center gap-1 text-xs">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Page Body ────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_268px] gap-8 items-start">

          {/* ── Article ── */}
          <article className="min-w-0 space-y-6">

            {/* Excerpt */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="border-l-4 border-indigo-400 mx-6 my-6">
                <p className="pl-4 text-base text-slate-600 leading-relaxed font-medium italic">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Article content */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100">
              {/* Article header bar */}
              <div className="flex items-center gap-3 px-8 py-4 border-b border-slate-100">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-slate-400 font-medium ml-1">Article</span>
              </div>

              {/* Prose content */}
              <div
                className="
                  px-8 py-8
                  prose prose-slate max-w-none
                  prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                  prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3
                  prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-100
                  prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-indigo-800
                  prose-p:text-slate-600 prose-p:leading-[1.9] prose-p:text-[15px]
                  prose-em:text-slate-800 prose-em:font-semibold prose-em:not-italic
                  prose-strong:text-slate-900 prose-strong:font-bold
                  prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-indigo-300
                  prose-blockquote:bg-indigo-50 prose-blockquote:rounded-r-xl prose-blockquote:px-5 prose-blockquote:py-1
                  prose-li:text-slate-600 prose-li:text-[15px]
                  prose-ul:space-y-1 prose-ol:space-y-1
                "
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />
            </div>

            {/* Filed under + share */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Filed under</span>
                <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-100">
                  {post.category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Share</span>
                {[
                  { label: "X", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}` },
                  { label: "LinkedIn", href: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}` },
                ].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 text-slate-500 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Author card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                {post.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <p className="text-[10px] font-black tracking-[0.15em] text-slate-400 uppercase mb-0.5">Written by</p>
                <p className="text-slate-900 font-bold text-base">{post.author}</p>
                <p className="text-slate-500 text-sm">{post.authorRole}</p>
              </div>
            </div>

          </article>

          {/* ── Sticky Sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-6 space-y-5">

              {/* Back link */}
              <Link href="/blog"
                className="inline-flex items-center gap-2 text-slate-500 text-sm font-semibold hover:text-indigo-600 transition-colors group">
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                All Dispatches
              </Link>

              {/* TOC */}
              <TableOfContents headings={headings} />

              {/* Related */}
              {related.length > 0 && (
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                  <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-4">
                    Related Articles
                  </p>
                  <div className="space-y-4">
                    {related.map((rel) => (
                      <Link key={rel.slug} href={`/blog/${rel.slug}`} className="flex gap-3 items-start group">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                          <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[9px] font-black tracking-wider text-indigo-500 uppercase">{rel.tag}</span>
                          <p className="text-slate-700 font-semibold text-xs mt-0.5 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                            {rel.title}
                          </p>
                          <p className="text-slate-400 text-[10px] mt-1">{rel.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Browse topics */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-3">
                  Browse by Topic
                </p>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map((cat) => (
                    <Link key={cat} href={`/blog?category=${cat}`}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                        post.category === cat
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                      }`}>
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>

      {/* ── Continue Reading ─────────────────────────────────────────────── */}
      {related.length > 0 && (
        <div className="border-t border-slate-200 bg-white mt-4">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-8">
              Continue Reading
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`}
                  className="group bg-[#f0f2f5] rounded-2xl overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                  <div className="relative h-44 overflow-hidden bg-slate-200">
                    <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[9px] font-black tracking-wider text-slate-700 uppercase px-2.5 py-1 rounded-full">
                      {rel.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-slate-800 font-bold text-sm leading-snug group-hover:text-indigo-600 transition-colors mb-2">
                      {rel.title}
                    </p>
                    <p className="text-slate-400 text-xs">{rel.date} · {rel.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}