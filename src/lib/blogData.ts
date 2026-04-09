// ─── Types ───────────────────────────────────────────────────────────────────

export type BlogCategory =
  | "Academic"
  | "Sports"
  | "Editorial"
  | "Heritage"
  | "Innovation"
  | "Athletics";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tag: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  featured?: boolean;
}

// ─── Import all posts from content/blog ──────────────────────────────────────
// Add a new import here whenever you create a new post file in content/blog/

import post1 from "@/content/blog/post1";
import post2 from "@/content/blog/post2";
import post3 from "@/content/blog/post3";
import post4 from "@/content/blog/post4";
import post5 from "@/content/blog/post5";
import post6 from "@/content/blog/post6";

// ─── Master list (controls display order) ────────────────────────────────────

export const blogPosts: BlogPost[] = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}