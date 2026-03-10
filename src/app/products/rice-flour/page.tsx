import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Buy Rice Flour – Pure & Finely Milled | Vijaykrishna',
  description:
    'Buy pure Rice Flour from Vijaykrishna, Gangavathi, Karnataka. Finely milled, no preservatives, no additives. Perfect for chakli, dosas, and traditional Karnataka snacks and sweets. Retail and wholesale packs available.',
  keywords: [
    'rice flour',
    'buy rice flour',
    'rice flour Karnataka',
    'pure rice flour',
    'rice flour no preservatives',
    'chakli flour',
    'akki hittu',
    'wholesale rice flour',
    'Vijaykrishna rice flour',
    'finely milled rice flour',
  ],
  openGraph: {
    title: 'Buy Rice Flour – Pure & Finely Milled | Vijaykrishna',
    description:
      'Finely milled, pure Rice Flour from Gangavathi, Karnataka. No preservatives. Perfect for chakli, dosas & sweets.',
    url: 'https://vijaykrishna.org/products/rice-flour',
    images: [{ url: '/images/rice.png', width: 1200, height: 630, alt: 'Vijaykrishna Rice Flour' }],
  },
  alternates: { canonical: 'https://vijaykrishna.org/products/rice-flour' },
};

export default function RiceFlourPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Vijaykrishna Pure Rice Flour',
            description:
              'Finely milled pure Rice Flour. No preservatives, no additives. Perfect for chakli, dosas, and traditional Karnataka snacks and sweets.',
            image: 'https://vijaykrishna.org/images/rice.png',
            brand: { '@type': 'Brand', name: 'Vijaykrishna' },
            manufacturer: {
              '@type': 'Organization',
              name: 'Sri Lakshminarasimha Industries',
              address: { '@type': 'PostalAddress', addressLocality: 'Gangavathi', addressRegion: 'Karnataka', addressCountry: 'IN' },
            },
            offers: [
              { '@type': 'Offer', name: '1 kg Pack', priceCurrency: 'INR', availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Vijaykrishna' } },
              { '@type': 'Offer', name: '20 kg Pack', priceCurrency: 'INR', availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Vijaykrishna' } },
              { '@type': 'Offer', name: '50 kg Pack', priceCurrency: 'INR', availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Vijaykrishna' } },
            ],
          }),
        }}
      />
      <div className="bg-[#FFF7ED] min-h-screen pt-28">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-[#78350F]">
          <Link href="/" className="hover:text-[#F59E0B] transition-colors">Home</Link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-[#F59E0B]/60"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          <Link href="/products" className="hover:text-[#F59E0B] transition-colors">Products</Link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-[#F59E0B]/60"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          <span className="text-[#431407] font-semibold">Rice Flour</span>
        </nav>
      </div>

      {/* Product hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-10">
        <div className="lg:grid lg:grid-cols-[55%_45%] lg:gap-12 lg:items-start">

          {/* LEFT - Images */}
          <div className="lg:sticky lg:top-24 mb-8 lg:mb-0">
            <div className="bg-gradient-to-br from-amber-300 via-yellow-300 to-orange-300 rounded-3xl overflow-hidden flex items-center justify-center shadow-xl border border-amber-300" style={{minHeight: '540px'}}>
              <div className="relative w-[26rem] h-[26rem] sm:w-[30rem] sm:h-[30rem]" style={{ filter: 'brightness(1.12) saturate(1.2) contrast(1.05)' }}>
                <Image src="/images/rice.png" alt="Rice Flour pack" fill className="object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.25)]" priority />
              </div>
            </div>
          </div>

          {/* RIGHT - Info */}
          <div className="flex flex-col">
            <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-1">Vijaykrishna</p>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-[#431407] leading-tight mb-2">Pure Rice Flour</h1>
            <p className="text-[#78350F] text-sm mb-4">Finely milled rice flour for crispy dosas, chakli, traditional Karnataka snacks and sweets &mdash; pure and preservative-free.</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {["100% Natural","Pure Veg","No Preservatives","Finely Milled"].map(b => (
                <span key={b} className="bg-green-50 border border-green-200 text-green-800 text-[11px] font-semibold px-3 py-1 rounded-full">{b}</span>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-orange-100 p-5 mb-5 shadow-sm">
              <h2 className="font-serif font-bold text-[#431407] mb-3 text-base">Key Highlights</h2>
              <ul className="space-y-2.5">
                {[
                  "Finely milled from selected rice for smooth, lump-free texture",
                  "No additives, colors or preservatives — pure grain",
                  "Ideal for chakli, murukku, rice dosas, payasam, and sweets",
                  "Works as a coating for crispy fries and bajjis",
                  "Processed at our Gangavathi mill with traditional methods",
                ].map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-[#78350F]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-4 mb-6 text-sm">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[["Brand","Vijaykrishna"],["Manufacturer","Sri Lakshminarasimha Ind."],["Origin","Gangavathi, Karnataka"],["Pack Sizes","1 kg, 20 kg, 50 kg"],["FSSAI No.","Coming soon"],["Best For","Chakli, Dosa, Sweets"]].map(([k,v]) => (
                  <div key={k}>
                    <span className="text-[#78350F]/70 text-[11px] uppercase tracking-wide font-semibold block">{k}</span>
                    <span className="text-[#431407] font-bold text-xs">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Wholesale availability */}
            <div className="bg-[#431407] rounded-2xl px-4 py-4 mb-5 flex items-start gap-3">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#F59E0B] flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
              </div>
              <div>
                <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-0.5">Available for Wholesale</p>
                <p className="text-white font-semibold text-sm leading-snug">We supply to wholesalers &amp; distributors</p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  {['1 kg','20 kg','50 kg'].map(s => <span key={s} className="bg-white/15 text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">{s}</span>)}
                </div>
              </div>
            </div>

            <a href="tel:9448190326" className="flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-4 rounded-2xl text-base shadow-lg shadow-orange-200 hover:shadow-xl transition-all duration-200 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              Call to Enquire &mdash; 94481 90326
            </a>
            <Link href="/contact" className="flex items-center justify-center gap-1 border-2 border-[#431407] text-[#431407] hover:bg-[#431407] hover:text-white font-bold py-3 rounded-2xl text-sm transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              Send a Message
            </Link>
          </div>
        </div>
      </div>

      {/* Below fold */}
      <div className="bg-white border-t border-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-serif text-xl font-bold text-[#431407] mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#F59E0B] rounded-full inline-block" />
                About This Product
              </h2>
              <p className="text-[#78350F] text-sm leading-relaxed mb-3">
                Our Rice Flour is milled from high-quality rice sourced from the fertile fields around Gangavathi in Karnataka. The grains are dried and finely ground to produce a smooth, white flour with zero lumps and consistent texture.
              </p>
              <p className="text-[#78350F] text-sm leading-relaxed">
                Free from any additives, whitening agents or preservatives, Vijaykrishna Rice Flour is the trusted choice for making traditional Karnataka snacks like chakli, murukku, as well as dosas, payasam, sweets and more.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#431407] mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#F59E0B] rounded-full inline-block" />
                How to Use
              </h2>
              <ol className="space-y-2.5">
                {[
                  "Rice Dosa: Mix with water and a pinch of salt to make a thin batter. Cook on a hot tawa.",
                  "Chakli / Murukku: Mix with butter, sesame and spices, press through mould, deep fry.",
                  "Rice Payasam: Cook flour with milk, jaggery and cardamom for a traditional sweet.",
                  "Crispy Coating: Use as a coating for pakodas, bhajjis or fried vegetables.",
                  "Traditional Sweets: Use in Kozhukattai, Modak or Paal Poli for authentic texture.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#78350F]">
                    <span className="w-6 h-6 rounded-full bg-[#F59E0B] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>


        </div>
      </div>

      {/* Related */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
        <h2 className="font-serif text-xl font-bold text-[#431407] mb-6">More from Vijaykrishna</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { name: "Idli Rawa", desc: "Perfectly coarse semolina for the fluffiest idlis", img: "/images/idli.png", bg: "from-[#FEF3C7] to-[#FDE68A]", href: "/products/idli-rawa" },
            { name: "Ragi Flour", desc: "Nutrient-rich finger millet flour, fresh-milled", img: "/images/ragi.png", bg: "from-stone-100 to-stone-200", href: "/products/ragi-flour" },
          ].map(p => (
            <Link key={p.name} href={p.href} className="group flex items-center gap-4 bg-white border border-orange-100 rounded-2xl p-4 hover:shadow-md hover:border-[#F59E0B]/40 transition-all">
              <div className={`relative w-28 h-28 flex-shrink-0 rounded-xl bg-gradient-to-br ${p.bg} flex items-center justify-center overflow-hidden`}>
                <Image src={p.img} alt={p.name} fill className="object-contain p-2" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif font-bold text-[#431407] text-sm">{p.name}</h3>
                <p className="text-[#78350F] text-xs mt-0.5 truncate">{p.desc}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#F59E0B] flex-shrink-0 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

    </div>
    </>
  );
}
