'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    img: '/images/idli.png',
    bg: 'from-amber-400 via-orange-300 to-yellow-200',
    label: 'Premium Idli Rawa',
    tagline: 'Soft, fluffy idlis every time',
    href: '/products/idli-rawa',
  },
  {
    img: '/images/ragi.png',
    bg: 'from-red-700 via-red-500 to-orange-300',
    label: 'Healthy Ragi Flour',
    tagline: 'Rich in calcium & fibre',
    href: '/products/ragi-flour',
  },
  {
    img: '/images/rice.png',
    bg: 'from-yellow-300 via-amber-200 to-orange-100',
    label: 'Pure Rice Flour',
    tagline: 'Crispy dosas & traditional snacks',
    href: '/products/rice-flour',
  },
];

export default function ProductCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div className="w-full max-w-sm mx-auto mb-6 px-2" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Slide container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/30 h-72">
        {/* All slides stacked — crossfade via opacity */}
        {slides.map((s, i) => (
          <div
            key={s.label}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out bg-gradient-to-br ${s.bg} flex flex-col items-center justify-center gap-3 px-6 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Product image — large, bright, glowing */}
            <div className="relative w-44 h-44 drop-shadow-[0_8px_32px_rgba(0,0,0,0.25)]" style={{ filter: 'brightness(1.12) saturate(1.2)' }}>
              <Image src={s.img} alt={s.label} fill className="object-contain" priority={i === 0} />
            </div>
            {/* Label + tagline */}
            <div className="text-center">
              <p className="font-serif font-bold text-white text-xl drop-shadow-md leading-tight">{s.label}</p>
              <p className="text-white/85 text-sm mt-0.5 drop-shadow">{s.tagline}</p>
            </div>
          </div>
        ))}

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/25 hover:bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/25 hover:bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        </button>

        {/* CTA button overlay */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
          <Link
            href={slides[current].href}
            className="bg-white/90 hover:bg-white text-[#431407] font-bold text-xs px-5 py-1.5 rounded-full shadow-lg transition-colors"
          >
            View Product →
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? 'bg-[#F59E0B] w-6 h-2' : 'bg-[#F59E0B]/30 w-2 h-2'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

