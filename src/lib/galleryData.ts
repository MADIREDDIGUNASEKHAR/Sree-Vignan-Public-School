export interface GalleryItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  accent: string;
  image: string;
  date: string;
  details?: string;
  images: Array<{ src: string; label: string }>;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    slug: 'annual-day-2024',
    title: 'Annual Day 2024',
    description: 'A spectacular evening of talent, culture, and achievements celebrated together by the entire Sree Vignan family.',
    category: 'Cultural',
    accent: '#EC4899',
    image: '/gallery/image1.jpg',
    date: '2024-03-15',
    details: 'Our Annual Day celebration was a magnificent showcase of talent, culture, and student achievements. Students performed various cultural programs including classical dances, modern performances, and theatrical acts. The event concluded with recognition of academic and sports achievers.',
    images: [
      { src: '/gallery/image1.jpg', label: 'Opening Ceremony' },
      { src: '/gallery/image2.jpg', label: 'Dance Performance' },
      { src: '/gallery/image3.jpg', label: 'Prize Distribution' },
      { src: '/gallery/image4.jpg', label: 'Chief Guest Address' },
      { src: '/gallery/image5.jpg', label: 'Cultural Show' },
      { src: '/gallery/image6.jpg', label: 'Group Photo' },
    ],
  },
  {
    id: 2,
    slug: 'sports-day-2024',
    title: 'Sports Day 2024',
    description: 'Champions on the field — fitness, teamwork, and sportsmanship on full display across every event.',
    category: 'Sports',
    accent: '#0D9488',
    image: '/gallery/image2.jpg',
    date: '2024-02-20',
    details: 'Sports Day was an exciting display of athletic talent and competitive spirit. Students participated in track and field events, relay races, long jump, and various team sports. The event emphasized the importance of physical fitness, teamwork, and healthy competition.',
    images: [
      { src: '/gallery/image2.jpg', label: 'March Past' },
      { src: '/gallery/image3.jpg', label: '100m Sprint' },
      { src: '/gallery/image4.jpg', label: 'Relay Race' },
      { src: '/gallery/image5.jpg', label: 'Long Jump' },
      { src: '/gallery/image6.jpg', label: 'Trophy Ceremony' },
      { src: '/gallery/image1.jpg', label: 'Team Photo' },
    ],
  },
  {
    id: 3,
    slug: 'science-exhibition',
    title: 'Science Exhibition',
    description: 'Young innovators presented working models and creative experiments that wowed teachers and parents alike.',
    category: 'Academics',
    accent: '#7C3AED',
    image: '/gallery/image3.jpg',
    date: '2024-01-25',
    details: 'The Science Exhibition was a platform for students to showcase their scientific thinking and innovation. Working models, experiments, and creative projects were displayed. Students explained their projects to judges and visitors, demonstrating their understanding of scientific concepts.',
    images: [
      { src: '/gallery/image3.jpg', label: 'Working Models' },
      { src: '/gallery/image4.jpg', label: 'Student Presentation' },
      { src: '/gallery/image5.jpg', label: 'Award Winners' },
      { src: '/gallery/image6.jpg', label: 'Expert Judging' },
      { src: '/gallery/image1.jpg', label: 'Project Display' },
      { src: '/gallery/image2.jpg', label: 'Certificates' },
    ],
  },
  {
    id: 4,
    slug: 'independence-day',
    title: 'Independence Day',
    description: 'Honouring our nation with pride, patriotism, and vibrant cultural performances by every student.',
    category: 'National',
    accent: '#D4AF37',
    image: '/gallery/image4.jpg',
    date: '2024-08-15',
    details: 'Independence Day was celebrated with great enthusiasm and patriotic fervor. The flag hoisting ceremony was followed by cultural performances, NCC parade, and inspirational speeches. Students participated in various activities to understand and appreciate the significance of our national freedom.',
    images: [
      { src: '/gallery/image4.jpg', label: 'Flag Hoisting' },
      { src: '/gallery/image5.jpg', label: 'Cultural Show' },
      { src: '/gallery/image6.jpg', label: 'NCC Parade' },
      { src: '/gallery/image1.jpg', label: 'Group Photo' },
      { src: '/gallery/image2.jpg', label: 'March Past' },
      { src: '/gallery/image3.jpg', label: 'Chief Address' },
    ],
  },
  {
    id: 5,
    slug: 'graduation-2024',
    title: 'Graduation 2024',
    description: 'Celebrating our Class 10 & 12 achievers as they step confidently into the next chapter of their lives.',
    category: 'Achievement',
    accent: '#9333EA',
    image: '/gallery/image5.jpg',
    date: '2024-05-30',
    details: 'Graduation Day was an emotional and joyous occasion celebrating the achievements of our Class 10 and Class 12 students. Awards were presented for academic excellence, sports achievements, and character development. The ceremony recognized the journey of these students and wished them success in their future endeavors.',
    images: [
      { src: '/gallery/image5.jpg', label: 'Cap & Gown' },
      { src: '/gallery/image6.jpg', label: 'Certificates' },
      { src: '/gallery/image1.jpg', label: 'Parent Celebration' },
      { src: '/gallery/image2.jpg', label: 'Faculty Honour' },
      { src: '/gallery/image3.jpg', label: 'Group Shot' },
      { src: '/gallery/image4.jpg', label: 'Farewell' },
    ],
  },
];

/**
 * Get a gallery item by its slug
 */
export function getGalleryItemBySlug(slug: string): GalleryItem | undefined {
  return galleryItems.find((item) => item.slug === slug);
}

/**
 * Get all gallery item slugs for static generation
 */
export function getAllGalleryItemSlugs(): string[] {
  return galleryItems.map((item) => item.slug);
}

/**
 * Get gallery items by category
 */
export function getGalleryItemsByCategory(category: string): GalleryItem[] {
  return galleryItems.filter((item) => item.category === category);
}