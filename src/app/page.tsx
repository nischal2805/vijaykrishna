import Image from 'next/image';
import Link from 'next/link';
import ProductCarousel from '@/components/ProductCarousel';

const products = [
  {
    id: 'idli-rawa',
    name: 'Premium Idli Rawa',
    img: '/images/idli.png',
    href: '/products/idli-rawa',
    anchor: 'idli-rawa',
    chips: ['No Additives', 'Stone Processed'],
    tagline: 'Soft, fluffy idlis every time.',
  },
  {
    id: 'ragi-flour',
    name: 'Healthy Ragi Flour',
    img: '/images/ragi.png',
    href: '/products/ragi-flour',
    anchor: 'ragi-flour',
    chips: ['Rich in Calcium', 'Gluten-Free'],
    tagline: 'Traditional millet for modern health.',
  },
  {
    id: 'rice-flour',
    name: 'Pure Rice Flour',
    img: '/images/rice.png',
    href: '/products/rice-flour',
    anchor: 'rice-flour',
    chips: ['Finely Milled', 'No Preservatives'],
    tagline: 'Crispy dosas & traditional snacks.',
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#431407] text-white">
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        {/* Warm glow from right */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#F59E0B]/20 to-transparent pointer-events-none" />

        <div className="relative px-6 pt-32 pb-8 flex flex-col sm:flex-row items-center gap-8 sm:gap-0">
          {/* Left — copy */}
          <div className="flex-1 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 text-[11px] font-bold uppercase tracking-widest bg-[#F59E0B]/20 rounded-full border border-[#F59E0B]/40 text-[#FCD34D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              Gangavathi, Karnataka · Est. 1984
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-4">
              Tradition in<br />
              <span className="text-[#F59E0B]">Every Grain</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-7 max-w-sm mx-auto sm:mx-0">
              Pure Idli Rawa, Ragi Flour &amp; Rice Flour — no additives, no shortcuts. The same trusted quality since 1984.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <Link
                href="#products"
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-sm"
              >
                Shop Our Products
              </Link>
              <Link
                href="/about"
                className="text-white/70 hover:text-white border border-white/20 hover:border-white/50 font-semibold px-6 py-3 rounded-full text-sm transition-all"
              >
                Our Story →
              </Link>
            </div>
          </div>

          {/* Right — carousel */}
          <div className="w-full sm:w-[380px] flex-shrink-0 sm:pl-6">
            <ProductCarousel />
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────── */}
      <div className="bg-[#F59E0B] overflow-hidden">
        <div className="flex items-center divide-x divide-[#D97706]">
          {[
            { stat: '40+', label: 'Years of Trust' },
            { stat: '100%', label: 'Natural Grains' },
            { stat: 'Zero', label: 'Additives' },
            { stat: 'Fresh', label: 'Every Batch' },
          ].map((item) => (
            <div key={item.stat} className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-center">
              <span className="text-white font-serif font-bold text-xl sm:text-2xl leading-none">{item.stat}</span>
              <span className="text-[#431407]/80 text-[10px] sm:text-xs font-bold uppercase tracking-wide mt-0.5">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── HERITAGE ─────────────────────────────────────────── */}
      <section className="px-6 py-10 flex flex-col sm:flex-row gap-8 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#F59E0B]" />
            <span className="text-[#F59E0B] font-bold uppercase text-xs tracking-wider">Our Heritage</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#431407] mb-3 leading-tight">
            Nurturing Health with<br />Traditional Tastes
          </h2>
          <p className="text-[#78350F] leading-relaxed text-sm mb-4">
            Since <strong>1984</strong>, Sri Lakshminarasimha Industries has been processing pure, additive-free flour in the heart of Karnataka&apos;s rice belt. Homes, hotels, and retailers across the region trust the Vijaykrishna name for one reason — we never cut corners.
          </p>
          <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F59E0B] hover:text-[#D97706] transition-colors">
            Read our full story
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
        {/* Quality pillars */}
        <div className="w-full sm:w-52 grid grid-cols-2 sm:grid-cols-1 gap-2">
          {([
            {
              title: 'No Additives', sub: 'Pure & natural',
              icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#F59E0B]"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
            },
            {
              title: 'Since 1984', sub: 'Decades of trust',
              icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#F59E0B]"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
            },
            {
              title: 'Stone Processed', sub: 'Traditional method',
              icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#F59E0B]"><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>,
            },
            {
              title: 'Fresh Stock', sub: 'Regular batches',
              icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#F59E0B]"><path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>,
            },
          ]).map((p) => (
            <div key={p.title} className="bg-[#FEF3C7] rounded-xl px-3 py-2.5 flex items-center gap-2.5">
              <span className="flex-shrink-0">{p.icon}</span>
              <div>
                <p className="text-[#431407] font-bold text-xs">{p.title}</p>
                <p className="text-[#78350F]/70 text-[10px]">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────────────── */}
      <section id="products" className="px-4 pb-10">
        <div className="flex items-center justify-between mb-5 px-2">
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-[#F59E0B]" />
            <span className="text-[#F59E0B] font-bold uppercase text-xs tracking-widest">Our Products</span>
          </div>
          <Link href="/products" className="text-xs font-bold text-[#78350F] hover:text-[#F59E0B] transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {products.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              id={p.anchor}
              className="group bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-lg hover:border-[#F59E0B]/40 transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Image area */}
              <div className="bg-gradient-to-br from-amber-50 via-yellow-100 to-orange-100 flex items-center justify-center py-6 px-4">
                <div
                  className="relative w-36 h-36 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                >
                  <Image src={p.img} alt={p.name} fill className="object-contain" />
                </div>
              </div>
              {/* Info */}
              <div className="flex flex-col flex-1 p-4">
                <h2 className="font-serif font-bold text-[#431407] text-base mb-1 leading-tight">{p.name}</h2>
                <p className="text-[#78350F]/70 text-xs mb-3">{p.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.chips.map((c) => (
                    <span key={c} className="bg-green-50 border border-green-200 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center text-[#F59E0B] font-bold text-xs gap-1 group-hover:gap-2 transition-all">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── ORDER CTA ─────────────────────────────────────────── */}
      <section className="mx-4 mb-8">
        <div className="bg-[#431407] rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-serif font-bold text-xl">Ready to Order?</p>
            <p className="text-orange-200/70 text-sm mt-0.5">Call us directly to enquire or place a bulk order</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="tel:9448190326" className="bg-[#F59E0B] text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-[#D97706] transition-colors shadow-md flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" /></svg>
              94481 90326
            </a>
            <a href="/contact" className="border border-white/20 text-white/80 hover:text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:border-white/50 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
