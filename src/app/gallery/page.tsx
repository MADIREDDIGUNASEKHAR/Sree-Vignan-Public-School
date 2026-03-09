import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | Sree Vignan Public School",
  description:
    "View photos from school activities, events, and daily campus life.",
};

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Classroom Learning",
      category: "Academics",
      image: "/gallery/image1.jpg",
    },
    {
      id: 2,
      title: "Sports Day",
      category: "Sports",
      image: "/gallery/image2.jpg",
    },
    {
      id: 3,
      title: "School Event",
      category: "Events",
      image: "/gallery/image3.jpg",
    },
    {
      id: 4,
      title: "Student Projects",
      category: "Academics",
      image: "/gallery/image4.jpg",
    },
    {
      id: 5,
      title: "Cultural Program",
      category: "Culture",
      image: "/gallery/image5.jpg",
    },
    {
      id: 6,
      title: "Awards Ceremony",
      category: "Events",
      image: "/gallery/image6.jpg",
    },
    {
      id: 7,
      title: "School Activity 7",
      category: "Academics",
      image: "/gallery/image7.jpg",
    },
    {
      id: 8,
      title: "School Activity 8",
      category: "Sports",
      image: "/gallery/image8.jpg",
    },
    {
      id: 9,
      title: "School Activity 9",
      category: "Events",
      image: "/gallery/image9.png",
    },
    {
      id: 10,
      title: "School Activity 10",
      category: "Culture",
      image: "/gallery/image10.jpg",
    },
    {
      id: 11,
      title: "School Activity 11",
      category: "Academics",
      image: "/gallery/image11.jpg",
    },
    {
      id: 12,
      title: "School Activity 12",
      category: "Sports",
      image: "/gallery/image12.jpg",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-purple-100 to-white pt-24">
        <div className="container-safe text-center">
          <h1 className="text-heading-lg mb-4">School Gallery</h1>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
            Moments from school activities and achievements
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-safe">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="relative rounded-xl overflow-hidden shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <span className="mt-2 px-4 py-1 rounded-full bg-accent-gold text-royal-navy text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}