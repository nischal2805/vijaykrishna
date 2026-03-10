import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Natural Flour Products – Idli Rawa, Ragi Flour & Rice Flour',
  description:
    'Explore Vijaykrishna\'s range of premium natural flour products – Idli Rawa, Ragi Flour and Rice Flour. Crafted at Sri Lakshminarasimha Industries, Gangavathi, Karnataka. Zero additives, wholesale available.',
  keywords: [
    'natural flour products',
    'idli rawa',
    'ragi flour',
    'rice flour',
    'wholesale flour Karnataka',
    'buy flour online Karnataka',
    'pure flour no additives',
    'Vijaykrishna products',
    'Sri Lakshminarasimha Industries',
  ],
  openGraph: {
    title: 'Natural Flour Products – Idli Rawa, Ragi Flour & Rice Flour | Vijaykrishna',
    description:
      'Premium Idli Rawa, Ragi Flour and Rice Flour from Gangavathi, Karnataka. No additives, wholesale available.',
    url: 'https://vijaykrishna.org/products',
  },
  alternates: { canonical: 'https://vijaykrishna.org/products' },
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
    color: 'from-amber-300 via-orange-300 to-orange-400',
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
    color: 'from-orange-300 via-amber-300 to-red-300',
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
    color: 'from-amber-300 via-yellow-300 to-orange-300',
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 pt-28">
      <div className="text-center mb-10">
        <span className="text-[#F59E0B] font-bold uppercase text-xs tracking-wider">Sri Lakshminarasimha Industries</span>
        <h1 className="text-3xl font-serif font-bold text-[#431407] mt-2 mb-3">Our Products</h1>
        <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-4" />
        <p className="text-sm text-[#78350F] max-w-md mx-auto">
          Crafted with care from Gangavathi, Karnataka — bringing authentic taste and nutrition to your kitchen.
        </p>
      </div>

      <div className="space-y-8 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
        {products.map((p) => (
          <div key={p.id} className="rounded-3xl overflow-hidden shadow-lg bg-white border border-orange-100">
            {/* Product image with gradient bg */}
            <div className="relative w-full h-72 bg-gradient-to-br from-amber-300 via-orange-300 to-orange-400 border-b border-orange-200 flex items-center justify-center">
              <div className="relative w-60 h-60 drop-shadow-[0_10px_40px_rgba(0,0,0,0.40)]">
                <Image src={p.img} alt={p.name} fill className="object-contain" priority />
              </div>
              <div className="absolute bottom-3 left-4">
                <span className="bg-[#F59E0B] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">100% Natural</span>
              </div>
            </div>

            <div className="p-5">
              <h2 className="font-serif font-bold text-xl text-[#431407] leading-tight mb-1">{p.name}</h2>
              <p className="text-[#F59E0B] text-xs font-semibold mb-2">{p.tagline}</p>
              <p className="text-xs text-[#78350F] leading-relaxed mb-4">{p.desc}</p>
              <ul className="flex flex-col gap-1.5 mb-4">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-[#78350F]">
                    <span className="text-[#F59E0B] font-bold flex-shrink-0">✓</span> {h}
                  </li>
                ))}
              </ul>
              <Link
                href={p.href}
                className="block bg-[#F59E0B] text-white text-sm font-bold px-4 py-3 rounded-xl text-center hover:bg-[#D97706] transition-colors shadow-md shadow-orange-200"
              >
                Full Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
