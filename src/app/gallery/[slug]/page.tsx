import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  galleryItems,
  getGalleryItemBySlug,
  getAllGalleryItemSlugs,
} from "@/lib/galleryData";
import { ArrowLeft, Calendar, Tag, ChevronRight, ChevronLeft } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getGalleryItemBySlug(slug);

  if (!item) {
    return { title: "Gallery Not Found" };
  }

  return {
    title: `${item.title} | Sree Vignan Public School`,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [{ url: item.images[0].src, width: 1200, height: 630, alt: item.title }],
    },
  };
}

export async function generateStaticParams() {
  return getAllGalleryItemSlugs().map((slug) => ({ slug }));
}

export default async function GalleryItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getGalleryItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const currentIndex = galleryItems.findIndex((i) => i.slug === slug);
  const previousItem = currentIndex > 0 ? galleryItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex < galleryItems.length - 1 ? galleryItems[currentIndex + 1] : null;

  const relatedItems = galleryItems
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 4);

  const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-sm md:text-base">Gallery</span>
          </Link>
          <div className="text-white/60 text-sm font-mono">
            {currentIndex + 1} / {galleryItems.length}
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="pt-24 pb-20">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mb-10">
            <span
              className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
              style={{
                background: `${item.accent}25`,
                color: item.accent,
                border: `1px solid ${item.accent}40`,
              }}
            >
              {item.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              {item.title}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              {item.description}
            </p>
          </div>

          {/* Meta Row */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: `${item.accent}20` }}
              >
                <Calendar size={16} style={{ color: item.accent }} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">Date</p>
                <p className="text-white font-semibold text-sm">{formattedDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: `${item.accent}20` }}
              >
                <Tag size={16} style={{ color: item.accent }} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">Category</p>
                <p className="text-white font-semibold text-sm">{item.category}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ background: `${item.accent}20`, color: item.accent }}
              >
                {item.images.length}
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">Photos</p>
                <p className="text-white font-semibold text-sm">{item.images.length} photos</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

          {/* About */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-3">About This Event</h2>
            <p className="text-white/65 leading-relaxed">
              {item.details || item.description}
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

          {/* Photo Grid */}
          <div className="mb-16">
            <h2 className="text-xl font-bold text-white mb-6">
              Photos{" "}
              <span className="text-white/35 text-base font-normal">
                ({item.images.length})
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {item.images.map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden group"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-sm">{img.label}</p>
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: `inset 0 0 0 2px ${item.accent}` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next inline */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />
          <div className="flex items-center justify-between mb-16">
            <div>
              {previousItem ? (
                <Link href={`/gallery/${previousItem.slug}`} className="group block">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">← Previous</p>
                  <h4 className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                    {previousItem.title}
                  </h4>
                </Link>
              ) : <div />}
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-sm font-semibold"
            >
              <ArrowLeft size={15} />
              All Galleries
            </Link>

            <div className="text-right">
              {nextItem ? (
                <Link href={`/gallery/${nextItem.slug}`} className="group block">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Next →</p>
                  <h4 className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                    {nextItem.title}
                  </h4>
                </Link>
              ) : <div />}
            </div>
          </div>

          {/* Related Items */}
          {relatedItems.length > 0 && (
            <>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />
              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-6">
                  More from {item.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {relatedItems.map((relatedItem) => (
                    <Link
                      key={relatedItem.id}
                      href={`/gallery/${relatedItem.slug}`}
                      className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={relatedItem.images[0].src}
                          alt={relatedItem.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      </div>
                      <div className="p-4 bg-white/5">
                        <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-2 mb-1 text-sm">
                          {relatedItem.title}
                        </h3>
                        <p className="text-white/40 text-xs">{relatedItem.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}

        </section>
      </div>
    </div>
  );
}