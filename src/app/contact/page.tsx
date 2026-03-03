import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Sri Lakshminarasimha Industries, Gangavathi. Call, email, or visit us for bulk orders and enquiries.',
  alternates: { canonical: 'https://vijaykrishnafoods.in/contact' },
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 pt-24">
      <div className="text-center mb-10">
        <span className="text-[#F59E0B] font-bold uppercase text-xs tracking-wider">We&apos;d love to hear from you</span>
        <h1 className="text-3xl font-serif font-bold text-[#431407] mt-2 mb-3">Get In Touch</h1>
        <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-4" />
        <p className="text-sm text-[#78350F]">Whether you&apos;re a customer, retailer, or distributor — reach out anytime.</p>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-stretch">
      <div className="space-y-4 mb-10">
        <a href="tel:9448190326" className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-orange-100 hover:shadow-lg hover:border-[#F59E0B]/40 hover:-translate-y-0.5 transition-all duration-200">
          <div className="w-11 h-11 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] text-[#F59E0B] font-bold uppercase tracking-wider">Mobile</p>
            <p className="font-bold text-[#431407]">94481 90326</p>
          </div>
        </a>

        <a href="tel:08533230326" className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-orange-100 hover:shadow-lg hover:border-[#F59E0B]/40 hover:-translate-y-0.5 transition-all duration-200">
          <div className="w-11 h-11 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] text-[#F59E0B] font-bold uppercase tracking-wider">Office</p>
            <p className="font-bold text-[#431407]">08533-230326</p>
          </div>
        </a>

        <a href="mailto:vijaykrishnaagrofoods@gmail.com" className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-orange-100 hover:shadow-lg hover:border-[#F59E0B]/40 hover:-translate-y-0.5 transition-all duration-200">
          <div className="w-11 h-11 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] text-[#F59E0B] font-bold uppercase tracking-wider">Email</p>
            <p className="font-bold text-[#431407] text-sm">vijaykrishnaagrofoods@gmail.com</p>
          </div>
        </a>

        <a href="https://maps.app.goo.gl/CTCatxDLxaxsewkVA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-orange-100 hover:shadow-lg hover:border-[#F59E0B]/40 hover:-translate-y-0.5 transition-all duration-200">
          <div className="w-11 h-11 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] text-[#F59E0B] font-bold uppercase tracking-wider">Address</p>
            <p className="font-bold text-[#431407] text-sm leading-snug">
              Sri Lakshminarasimha Industries<br />
              <span className="font-normal text-[#78350F] text-xs">Virupapur Nagar, Anegundi - Gangavathi Rd,<br />Veerabhadreshware Hill, Gangavathi, Karnataka 583227</span>
            </p>
          </div>
        </a>
      </div>

      {/* Map — right col on desktop */}
      <div className="rounded-2xl overflow-hidden shadow-md border border-orange-100 mb-10 h-full min-h-[320px]">
        <iframe
          src="https://maps.google.com/maps?q=Sri+Lakshminarasimha+Industries+Gangavathi&output=embed"
          width="100%"
          height="100%"
          style={{minHeight: '320px'}}
          loading="lazy"
          className="border-0 block w-full h-full"
          title="Sri Lakshminarasimha Industries location"
        />
      </div>
      </div>

      {/* Products CTA */}
      <div className="bg-gradient-to-br from-[#F59E0B] to-orange-600 rounded-2xl p-6 text-center text-white">
        <h3 className="font-serif font-bold text-xl mb-2">Explore Our Products</h3>
        <p className="text-orange-100 text-sm mb-4">Premium Idli Rawa, Ragi Flour & Rice Flour</p>
        <Link
          href="/products"
          className="inline-block bg-white text-[#F59E0B] font-bold px-6 py-2.5 rounded-full text-sm hover:scale-105 transition-transform shadow-lg"
        >
          View Products
        </Link>
      </div>
    </div>
  );
}
