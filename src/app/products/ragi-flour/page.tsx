import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Healthy Ragi Flour',
  description: 'Buy Vijaykrishna Ragi Flour — stone-ground, gluten-free, rich in calcium and iron. Ideal for rotis, dosas, mudde and porridge.',
  alternates: { canonical: 'https://vijaykrishnafoods.in/products/ragi-flour' },
};

export default function RagiFlourPage() {
  return (
    <div className="bg-[#FFF7ED] min-h-screen pt-16">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-[#78350F]">
          <Link href="/" className="hover:text-[#F59E0B] transition-colors">Home</Link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-[#F59E0B]/60"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          <Link href="/products" className="hover:text-[#F59E0B] transition-colors">Products</Link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-[#F59E0B]/60"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          <span className="text-[#431407] font-semibold">Ragi Flour</span>
        </nav>
      </div>

      {/* Product hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-10">
        <div className="lg:grid lg:grid-cols-[55%_45%] lg:gap-12 lg:items-start">

          {/* LEFT - Images */}
          <div className="lg:sticky lg:top-24 mb-8 lg:mb-0">
            <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-3xl overflow-hidden flex items-center justify-center shadow-lg border border-stone-200" style={{minHeight: '480px'}}>
              <div className="relative w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem]">
                <Image src="/images/ragi.png" alt="Ragi Flour pack" fill className="object-contain drop-shadow-2xl" priority />
              </div>
            </div>
          </div>

          {/* RIGHT - Info */}
          <div className="flex flex-col">
            <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-1">Vijaykrishna</p>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-[#431407] leading-tight mb-2">Healthy Ragi Flour</h1>
            <p className="text-[#78350F] text-sm mb-4">Nutrient-rich finger millet flour, stone-ground fresh &mdash; high in calcium, iron, and fibre.</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {["100% Natural","Gluten Free","Rich in Calcium","No Preservatives"].map(b => (
                <span key={b} className="bg-green-50 border border-green-200 text-green-800 text-[11px] font-semibold px-3 py-1 rounded-full">{b}</span>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-orange-100 p-5 mb-5 shadow-sm">
              <h2 className="font-serif font-bold text-[#431407] mb-3 text-base">Key Highlights</h2>
              <ul className="space-y-2.5">
                {[
                  "100% natural finger millet (ragi), no blending",
                  "Naturally rich in calcium, iron and dietary fibre",
                  "Gluten-free — ideal for health-conscious diets",
                  "Versatile: rotis, dosas, mudde, porridge, baked goods",
                  "Stone-ground to preserve natural nutrients",
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
                {[["Brand","Vijaykrishna"],["Manufacturer","Sri Lakshminarasimha Ind."],["Origin","Gangavathi, Karnataka"],["Pack Sizes","Coming soon"],["FSSAI No.","Coming soon"],["Best For","Rotis, Dosa, Porridge"]].map(([k,v]) => (
                  <div key={k}>
                    <span className="text-[#78350F]/70 text-[11px] uppercase tracking-wide font-semibold block">{k}</span>
                    <span className="text-[#431407] font-bold text-xs">{v}</span>
                  </div>
                ))}
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
                Ragi (finger millet) is one of the most nutritious grains grown in Karnataka. Our Ragi Flour is stone-ground from whole ragi grains, preserving all the natural goodness � calcium, iron, amino acids, and dietary fibre.
              </p>
              <p className="text-[#78350F] text-sm leading-relaxed">
                With zero additives and no artificial processing, Vijaykrishna Ragi Flour delivers authentic flavour and nutrition that health-conscious families trust. It is naturally gluten-free and suitable for all age groups.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#431407] mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#F59E0B] rounded-full inline-block" />
                How to Use
              </h2>
              <ol className="space-y-2.5">
                {[
                  "Ragi Mudde: Mix flour in boiling water, stirring continuously until thick. Shape into balls.",
                  "Ragi Dosa: Mix with rice flour and curd batter, ferment overnight, cook on tawa.",
                  "Ragi Porridge: Dissolve in water, cook on low flame with jaggery or salt to taste.",
                  "Ragi Roti: Knead with hot water, shape into rotis, cook on tawa with ghee.",
                  "Health Drink: Mix 2 tsp in warm milk with jaggery for a nutritious drink.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#78350F]">
                    <span className="w-6 h-6 rounded-full bg-[#F59E0B] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-10 border-2 border-dashed border-[#F59E0B]/30 rounded-2xl p-6">
            <h2 className="font-serif text-lg font-bold text-[#431407] mb-1 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-[#F59E0B]"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" /></svg>
              Nutritional Information
            </h2>
            <p className="text-xs text-[#78350F]/70">Detailed nutritional values per 100g — coming soon.</p>
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
        <h2 className="font-serif text-xl font-bold text-[#431407] mb-6">More from Vijaykrishna</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { name: "Idli Rawa", desc: "Perfectly coarse semolina for the fluffiest idlis", img: "/images/idli.png", bg: "from-[#FEF3C7] to-[#FDE68A]", href: "/products/idli-rawa" },
            { name: "Rice Flour", desc: "Fine-milled rice flour for crisps, batters & sweets", img: "/images/rice.png", bg: "from-amber-50 to-yellow-100", href: "/products/rice-flour" },
          ].map(p => (
            <Link key={p.name} href={p.href} className="group flex items-center gap-4 bg-white border border-orange-100 rounded-2xl p-4 hover:shadow-md hover:border-[#F59E0B]/40 transition-all">
              <div className={`relative w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br ${p.bg} flex items-center justify-center overflow-hidden`}>
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
  );
}
