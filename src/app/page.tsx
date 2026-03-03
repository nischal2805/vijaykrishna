import Image from 'next/image';
import Link from 'next/link';
import ProductCarousel from '@/components/ProductCarousel';

const products = [
  {
    id: 'idli-rawa',
    name: 'Premium Idli Rawa',
    desc: 'Perfectly granulated for soft, fluffy Idlis every time.',
    img: '/images/idli.png',
    href: '/products/idli-rawa',
    anchor: 'idli-rawa',
    fullDesc: 'Our Idli Rawa is made from carefully selected rice, processed to give you consistently soft and fluffy idlis. No additives, no preservatives — just pure quality from Sri Lakshminarasimha Industries.',
    highlights: ['Premium quality rice', 'No additives or preservatives', 'Consistent texture every time', 'Ideal for daily use'],
    bgImg: '/images/idli-bg.jpeg',
  },
  {
    id: 'ragi-flour',
    name: 'Healthy Ragi Flour',
    desc: 'Rich in calcium and fiber, traditional taste for modern health.',
    img: '/images/ragi.png',
    href: '/products/ragi-flour',
    anchor: 'ragi-flour',
    fullDesc: 'Stone-ground Ragi Flour packed with natural calcium, iron and fibre. Perfect for healthy porridges, rotis, dosas, and baked goods — traditional taste for the modern family.',
    highlights: ['100% natural ragi', 'Rich in calcium & iron', 'High fibre content', 'Versatile — rotis, dosas, porridge'],
    bgImg: '/images/ragi-bg.jpeg',
  },
  {
    id: 'rice-flour',
    name: 'Pure Rice Flour',
    desc: 'Finely ground for crispy dosas and traditional snacks.',
    img: '/images/rice.png',
    href: '/products/rice-flour',
    anchor: 'rice-flour',
    fullDesc: 'Finely milled Rice Flour with a smooth texture — ideal for traditional Karnataka snacks, chakli, sweets, and everyday cooking. No preservatives, just pure goodness.',
    highlights: ['Finely milled, smooth texture', 'No preservatives', 'Traditional & versatile', 'Perfect for chakli, sweets & snacks'],
    bgImg: '/images/rice-bg.jpeg',
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F59E0B] via-orange-500 to-red-600 text-white rounded-b-3xl shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="relative px-6 pt-24 pb-6 flex flex-col items-center text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest bg-white/20 rounded-full backdrop-blur-md border border-white/30">
            Sri Lakshminarasimha Industries
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4 drop-shadow-md leading-tight">
            Tradition in <br />
            <span className="text-yellow-200">Every Grain</span>
          </h1>
          <p className="text-orange-100 mb-8 max-w-xs mx-auto text-sm leading-relaxed">
            Premium quality Idli Rawa, Ragi Flour, and Rice Flour crafted with love from Gangavathi, Karnataka.
          </p>
          <Link
            href="#idli-rawa"
            className="group bg-white text-[#F59E0B] px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mb-8"
          >
            Explore Products
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <ProductCarousel />
        </div>
      </section>

      {/* Heritage */}
      <section className="px-6 py-10">
        <div className="flex items-center space-x-2 mb-3">
          <span className="h-px w-8 bg-[#F59E0B]" />
          <span className="text-[#F59E0B] font-bold uppercase text-xs tracking-wider">Our Heritage</span>
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#431407] mb-3">
          Nurturing Health with<br />Traditional Tastes
        </h2>
        <p className="text-[#78350F] leading-relaxed text-sm">
          At Sri Lakshminarasimha Industries, we bring the authentic taste of Karnataka to your kitchen. Our grains are carefully selected and processed to retain their natural goodness, ensuring every meal is a celebration of health and flavour.
        </p>
      </section>

      {/* Trust badges */}
      <section className="py-4 px-6">
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', title: 'Premium Quality', sub: 'Sorted & Graded' },
            { icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', title: 'Decades of Trust', sub: 'Gangavathi, Karnataka' },
            { icon: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z', title: 'No Additives', sub: 'Pure & Natural' },
            { icon: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z', title: 'Fresh Stock', sub: 'Regular Processing' },
          ].map((b) => (
            <div key={b.title} className="bg-white p-4 rounded-xl text-center shadow-sm border border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#F59E0B] mx-auto mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
              </svg>
              <h4 className="font-bold text-[#431407] text-sm">{b.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{b.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to order banner */}
      <section className="mx-4 mb-6">
        <div className="bg-[#431407] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-serif font-bold text-lg">Ready to Order?</p>
            <p className="text-orange-200/80 text-sm mt-0.5">Call us directly to enquire or place a bulk order</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="tel:9448190326" className="bg-[#F59E0B] text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-[#D97706] transition-colors shadow-md flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" /></svg>
              94481 90326
            </a>
            <a href="/contact" className="border border-white/20 text-white/80 hover:text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:border-white/50 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Detailed product sections */}
      <section className="px-4 pt-4 pb-10 mx-2">
        <div className="flex items-center space-x-2 mb-5">
          <span className="h-px w-8 bg-[#F59E0B]" />
          <span className="text-[#F59E0B] font-bold uppercase text-xs tracking-widest">Our Products</span>
        </div>
        <div className="space-y-5">
          {products.map((p, i) => (
            <div
              key={p.id}
              id={p.anchor}
              className={`group rounded-2xl border border-orange-100 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col sm:flex-row ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}
            >
              {/* Image panel — fixed square, never stretches */}
              <div className="sm:w-[38%] flex-shrink-0 bg-gradient-to-br from-[#FEF9EC] to-[#FDE68A]/30 flex items-center justify-center p-6 min-h-[200px]">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                  <Image src={p.img} alt={p.name} fill className="object-contain drop-shadow-2xl" />
                </div>
              </div>

              {/* Info panel — flex-col so button always at bottom */}
              <div className="flex-1 flex flex-col p-5 sm:p-6">
                {/* Top: name + badge */}
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h2 className="font-serif text-[1.35rem] font-bold text-[#2D0A00] leading-tight">{p.name}</h2>
                  <span className="flex-shrink-0 mt-0.5 bg-green-50 border border-green-200 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Veg</span>
                </div>

                {/* Description */}
                <p className="text-[0.82rem] text-[#78350F]/80 leading-relaxed mb-4">{p.fullDesc}</p>

                {/* Highlights — 2-col grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-[0.8rem] text-[#78350F] font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#F59E0B] flex-shrink-0">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Button always at bottom */}
                <Link
                  href={p.href}
                  className="mt-auto flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-3 rounded-xl text-sm shadow-md shadow-orange-200/60 transition-all duration-200 group-hover:shadow-orange-300/60"
                >
                  View Full Details
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
