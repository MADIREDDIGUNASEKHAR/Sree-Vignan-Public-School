import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import AnnouncementTicker from '@/components/AnnouncementTicker';
import { generateSchoolSchema } from '@/lib/seo';
import '@/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sreevignanschool.com'),
  title: {
    default: 'Sree Vignan School | Best School in Chodavaram',
    template: '%s | Sree Vignan School',
  },
  description: 'Leading private school in Chodavaram providing quality education with focus on academic excellence and holistic development. Admissions open for 2026-27.',
  keywords: [
    'Best School in Chodavaram',
    'Private School in Chodavaram',
    'Top School in Chodavaram',
    'English Medium School',
  ],
  authors: [{ name: 'Sree Vignan School' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sreevignanschool.com',
    siteName: 'Sree Vignan School',
    title: 'Sree Vignan School | Quality Education in Chodavaram',
    description: 'Leading school providing quality education with academic excellence and holistic development.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/gallery/LOGO.png',
    shortcut: '/gallery/LOGO.png',
    apple: '/gallery/LOGO.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = generateSchoolSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <meta name="theme-color" content="#1565C0" />
        <link rel="icon" href="/gallery/LOGO.jpeg" />
      </head>
      <body className="bg-white">
        <Header />
        <AnnouncementTicker />
        <main className="pt-[108px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
