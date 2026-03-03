import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Explore our range of premium natural flour products — Idli Rawa, Ragi Flour, and Rice Flour. Crafted in Gangavathi, Karnataka with no additives.',
  alternates: { canonical: 'https://vijaykrishnafoods.in/products' },
};

const products = [
  {
    id: 'idli-rawa',
    name: 'Premium Idli Rawa',
    tagline: 'Soft, fluffy idlis every time',
    desc: 'Our Idli Rawa is made from carefully selected rice, processed to give you consistently soft and fluffy idlis. No additives, no preservatives — just pure quality.',
    img: '/images/idli.png',
    bgImg: '/images/idli-bg.jpeg',
    href: '/products/idli-rawa',
    highlights: ['Premium quality rice', 'No additives or preservatives', 'Consistent texture', 'Ideal for daily use'],
    color: 'from-amber-50 to-orange-50',
  },
  {
    id: 'ragi-flour',
    name: 'Healthy Ragi Flour',
    tagline: '100% natural, rich in calcium & iron',
    desc: 'Stone-ground Ragi Flour packed with natural calcium, iron and fibre. Perfect for healthy porridges, rotis, dosas, and baked goods for the whole family.',
    img: '/images/ragi.png',
    bgImg: '/images/ragi-bg.jpeg',
    href: '/products/ragi-flour',
    highlights: ['100% natural ragi', 'Rich in calcium & iron', 'High fibre', 'Versatile use'],
    color: 'from-orange-50 to-red-50',
  },
  {
    id: 'rice-flour',
    name: 'Pure Rice Flour',
    tagline: 'Finely milled for traditional cooking',
    desc: 'Finely milled Rice Flour with a smooth texture — ideal for traditional Karnataka snacks, chakli, sweets, and everyday cooking.',
    img: '/images/rice.png',
    bgImg: '/images/rice-bg.jpeg',
    href: '/products/rice-flour',
    highlights: ['Finely milled', 'Smooth texture', 'No preservatives', 'Traditional & versatile'],
    color: 'from-yellow-50 to-amber-50',
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 pt-28">
      <div className="text-center mb-10">
        <span className="text-[#F59E0B] font-bold uppercase text-xs tracking-wider">Sri Lakshminarasimha Industries</span>
        <h1 className="text-3xl font-serif font-bold text-[#431407] mt-2 mb-3">Our Products</h1>
        <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-4" />
        <p className="text-sm text-[#78350F] max-w-md mx-auto">
          Crafted with care from Gangavathi, Karnataka — bringing authentic taste and nutrition to your kitchen.
        </p>
      </div>

      <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
        {products.map((p) => (
          <div key={p.id} className={`rounded-3xl overflow-hidden shadow-md bg-gradient-to-br ${p.color} border border-orange-100`}>
            {/* Background image */}
            <div className="relative w-full h-52">
              <Image src={p.bgImg} alt={p.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#F59E0B] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">100% Natural</span>
              </div>
            </div>

            <div className="p-5 flex gap-4">
              {/* Clean product PNG */}
              <div className="w-20 h-20 flex-shrink-0 bg-white rounded-xl border border-orange-100 shadow-sm relative overflow-hidden">
                <Image src={p.img} alt={p.name} fill className="object-contain p-1" />
              </div>

              <div className="flex-1">
                <h2 className="font-serif font-bold text-lg text-[#431407] leading-tight">{p.name}</h2>
                <p className="text-[#F59E0B] text-xs font-semibold mb-2">{p.tagline}</p>
                <p className="text-xs text-[#78350F] leading-relaxed mb-3">{p.desc}</p>
                <ul className="grid grid-cols-2 gap-1 mb-4">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-1 text-[11px] text-[#78350F]">
                      <span className="text-[#F59E0B] font-bold">✓</span> {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className="block bg-[#F59E0B] text-white text-xs font-bold px-4 py-2.5 rounded-xl text-center hover:bg-[#D97706] transition-colors shadow-md shadow-orange-200"
                >
                  Full Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
