import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Sree Vignan Public School',
  description: 'Get in touch with us for admissions or inquiries. Visit our campus or contact us online.',
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-purple-100 to-white pt-24">
        <div className="container-safe text-center">
          <h1 className="text-heading-lg mb-4">Contact Us</h1>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
            Get in touch for admissions or any inquiries
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-safe">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
