import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Sri Lakshminarasimha Industries — a family-owned mill in Gangavathi, Karnataka, crafting premium Idli Rawa, Ragi Flour, and Rice Flour since 1984.',
  alternates: { canonical: 'https://vijaykrishna.org/about' },
};

const milestones = [
  { year: '1984', label: 'Founded', desc: 'Sri Lakshminarasimha Industries established in Gangavathi, Karnataka.' },
  { year: '1990s', label: 'Growth', desc: 'Expanded processing capacity and started supplying to local retailers and wholesale markets.' },
  { year: '2000s', label: 'Reputation', desc: 'Became a trusted household name across Gangavathi and surrounding taluks for pure, unadulterated flour.' },
  { year: 'Today', label: 'Vijaykrishna', desc: 'Continuing the legacy under the Vijaykrishna brand — same values, wider reach.' },
];

const values = [
  {
    icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    title: 'Purity First',
    desc: 'No additives, no artificial colours, no preservatives — ever. What goes in is only what should be there.',
  },
  {
    icon: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z',
    title: 'Traditional Methods',
    desc: 'Careful grain selection and time-tested processing ensure every batch carries the same authentic flavour.',
  },
  {
    icon: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z',
    title: 'Family & Community',
    desc: 'A family-run business that has grown alongside the farming community of Gangavathi for over four decades.',
  },
  {
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    title: '40+ Years of Trust',
    desc: 'Homes, hotels, and retailers across the region have counted on us since 1984. That trust drives everything we do.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FFF7ED] min-h-screen pt-28">

      {/* Hero banner */}
      <div className="bg-gradient-to-br from-[#431407] via-[#7C2D12] to-[#9A3412] text-white">
        <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col items-center text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest bg-white/15 rounded-full border border-white/20">
            Est. 1984 · Gangavathi, Karnataka
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Over Four Decades of<br />
            <span className="text-[#FCD34D]">Pure, Honest Grain</span>
          </h1>
          <p className="text-orange-100 max-w-xl text-base sm:text-lg leading-relaxed">
            Sri Lakshminarasimha Industries was founded in 1984 with one simple belief — that food made from clean, natural ingredients is the best gift you can give your family. Forty years on, that belief hasn&apos;t changed.
          </p>
        </div>
      </div>

      {/* Logo + intro */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="w-36 h-36 rounded-3xl overflow-hidden border-4 border-[#F59E0B]/30 shadow-xl flex-shrink-0">
            <Image
              src="/images/sli-logo.jpg"
              alt="Sri Lakshminarasimha Industries"
              width={144}
              height={144}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-[#F59E0B]" />
              <span className="text-[#F59E0B] font-bold uppercase text-xs tracking-wider">Our Story</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#431407] mb-3">Sri Lakshminarasimha Industries</h2>
            <p className="text-[#78350F] text-sm leading-relaxed mb-3">
              Founded in 1984 in Virupapur Nagar, Gangavathi — the heart of Karnataka&apos;s rice belt — Sri Lakshminarasimha Industries began as a small grain-processing mill with a commitment to quality that set it apart from day one.
            </p>
            <p className="text-[#78350F] text-sm leading-relaxed">
              Over four decades we have grown from serving our local neighbourhood to supplying homes, hotels, and retailers across the region. Our brand <strong className="text-[#431407]">Vijaykrishna</strong> carries that legacy forward — same grains, same care, the same people behind every packet.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white border-y border-orange-100">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-px w-6 bg-[#F59E0B]" />
            <span className="text-[#F59E0B] font-bold uppercase text-xs tracking-wider">Our Journey</span>
          </div>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-[#F59E0B]/30 hidden sm:block" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#F59E0B] flex items-center justify-center shadow-md">
                    <span className="text-white text-[10px] font-bold leading-none text-center px-0.5">{m.year === 'Today' ? '★' : m.year.slice(2)}</span>
                  </div>
                  <div className="pt-1.5">
                    <p className="font-serif font-bold text-[#431407] text-base leading-tight">{m.year} — {m.label}</p>
                    <p className="text-[#78350F] text-sm mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="h-px w-6 bg-[#F59E0B]" />
          <span className="text-[#F59E0B] font-bold uppercase text-xs tracking-wider">What We Stand For</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl border border-orange-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5 text-[#F59E0B]">
                    <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#431407] text-base mb-1">{v.title}</h3>
                  <p className="text-[#78350F] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="bg-white border-t border-orange-100">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-[#F59E0B]" />
              <span className="text-[#F59E0B] font-bold uppercase text-xs tracking-wider">Where We Are</span>
            </div>
            <h2 className="font-serif text-xl font-bold text-[#431407] mb-2">Gangavathi, Karnataka</h2>
            <p className="text-[#78350F] text-sm leading-relaxed mb-4">
              Our mill is located in Virupapur Nagar, Gangavathi — one of the largest rice-trading towns in Karnataka. Being rooted here means we source the freshest grain and process it within days, not weeks.
            </p>
            <a
              href="https://maps.app.goo.gl/CTCatxDLxaxsewkVA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F59E0B] hover:text-[#D97706] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              View on Google Maps
            </a>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3 rounded-2xl text-sm shadow-md transition-colors"
            >
              View Our Products
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-[#431407] text-[#431407] hover:bg-[#431407] hover:text-white font-bold px-8 py-3 rounded-2xl text-sm transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
