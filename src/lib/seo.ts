import { SCHOOL, SEO_KEYWORDS } from './constants';

export function generateSchoolSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SCHOOL.name,
    description: 'Leading private school providing quality education with focus on academic excellence and holistic development.',
    url: 'https://sreevignanschool.com',
    telephone: SCHOOL.phone,
    email: SCHOOL.email,
    foundingDate: SCHOOL.foundedYear,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SCHOOL.address.street,
      addressLocality: SCHOOL.address.city,
      addressRegion: SCHOOL.address.state,
      postalCode: SCHOOL.address.pincode,
      addressCountry: 'IN',
    },
    areaServed: 'Visakhapatnam',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '16:00',
    },
  };
}

export const defaultMetadata = {
  title: 'Sree Vignan Public School | Best School in Chodavaram',
  description: 'Quality education with focus on academic excellence and holistic development. Enroll now for 2026-27!',
  keywords: SEO_KEYWORDS.join(', '),
};
