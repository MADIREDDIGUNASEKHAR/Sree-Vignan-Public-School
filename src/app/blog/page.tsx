"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, getBlogPostsByCategory, BlogPost } from "@/lib/blogData";

const CATEGORIES = ["All", "Academic", "Sports", "Editorial", "Heritage", "Innovation", "Athletics"];

function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article
      className={`group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? "md:w-1/2 h-64 md:h-auto" : "h-56"}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse" />
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback gradient backgrounds per category
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = "none";
          }}
        />
        {/* Category tag */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-[0.15em] text-slate-700 px-3 py-1.5 rounded-full uppercase z-10">
          {post.tag}
        </span>
        {/* Fallback gradient shown when image errors */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              post.category === "Heritage"
                ? "linear-gradient(135deg, #c9a96e 0%, #8b6914 100%)"
                : post.category === "Innovation"
                ? "linear-gradient(135deg, #6ea8c9 0%, #1a5f8b 100%)"
                : post.category === "Sports"
                ? "linear-gradient(135deg, #c9d98c 0%, #6b8914 100%)"
                : post.category === "Academic"
                ? "linear-gradient(135deg, #a89fc9 0%, #3d3480 100%)"
                : post.category === "Editorial"
                ? "linear-gradient(135deg, #c9a08c 0%, #8b3d14 100%)"
                : "linear-gradient(135deg, #8cc9b5 0%, #14806b 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 p-6 ${featured ? "md:p-8 md:justify-center" : ""}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium text-slate-400">{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-xs font-medium text-slate-400">{post.readTime}</span>
        </div>

        <h2
          className={`font-bold text-slate-900 leading-tight mb-3 group-hover:text-indigo-700 transition-colors duration-200 ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {post.title}
        </h2>

        <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-indigo-600 text-sm font-semibold tracking-wide hover:gap-3 transition-all duration-200"
        >
          READ MORE
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = getBlogPostsByCategory(activeCategory);
  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeCategory !== "All");

  const displayPosts = activeCategory === "All" ? filtered : filtered;

  return (
    <div className="min-h-screen" style={{ background: "#f0f2f5" }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-2">
              School Chronicles
            </p>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Recent Dispatches</h1>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-transparent text-slate-600 border-slate-300 hover:border-slate-500 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {displayPosts.length === 0 ? (
          <div className="text-center py-24 text-slate-400">
            <p className="text-lg">No articles in this category yet.</p>
          </div>
        ) : (
          <>
            {/* Featured post on top if "All" */}
            {activeCategory === "All" && featured && (
              <div className="mb-6">
                <BlogCard post={featured} featured />
              </div>
            )}

            {/* Regular grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeCategory === "All" ? rest : displayPosts).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}

        {/* Explore CTA */}
        <div className="mt-16 flex justify-center">
          <button className="inline-flex items-center gap-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-full transition-colors duration-200">
            <span>Explore All Chronicles</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}