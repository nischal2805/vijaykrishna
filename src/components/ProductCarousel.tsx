'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  { img: '/images/idli.png',  label: 'Premium Idli Rawa',  href: '/products/idli-rawa' },
  { img: '/images/ragi.png',  label: 'Healthy Ragi Flour', href: '/products/ragi-flour' },
  { img: '/images/rice.png',  label: 'Pure Rice Flour',    href: '/products/rice-flour' },
];

// Single rich dark-brown background for every slide — the product image itself
// provides all the visual variety. Bottom strip uses backdrop-blur like frosted glass.
const CAROUSEL_BG = '#2A0C00';

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
    <div
      className="w-full rounded-2xl overflow-hidden shadow-xl select-none"
      style={{ background: CAROUSEL_BG }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide area — fixed height, all slides absolutely stacked */}
      <div className="relative h-52 sm:h-60">

        {/* Warm radial glow always behind the image */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse at 50% 55%, rgba(245,158,11,0.18) 0%, transparent 65%)' }}
        />

        {slides.map((s, i) => (
          <Link
            key={s.label}
            href={s.href}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 z-10"
            style={{
              opacity: i === current ? 1 : 0,
              pointerEvents: i === current ? 'auto' : 'none',
            }}
            aria-label={`View ${s.label}`}
          >
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 drop-shadow-[0_10px_32px_rgba(0,0,0,0.55)]">
              <Image src={s.img} alt={s.label} fill className="object-contain" priority={i === 0} />
            </div>
          </Link>
        ))}

        {/* Prev arrow */}
        <button
          onClick={(e) => { e.preventDefault(); prev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          onClick={(e) => { e.preventDefault(); next(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Liquid-glass dot strip */}
      <div className="flex items-center justify-center gap-2 py-2.5 backdrop-blur-sm bg-white/5 border-t border-white/10">
        {slides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300 focus:outline-none"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              background: i === current ? '#F59E0B' : 'rgba(255,255,255,0.25)',
            }}
            aria-label={`Go to ${s.label}`}
          />
        ))}
      </div>
    </div>
  );
}
