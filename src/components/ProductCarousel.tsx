'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  { src: '/images/idli-bg.jpeg', alt: 'Idli Rawa', href: '#idli-rawa', label: 'Idli Rawa' },
  { src: '/images/ragi-bg.jpeg', alt: 'Ragi Flour', href: '#ragi-flour', label: 'Ragi Flour' },
  { src: '/images/rice-bg.jpeg', alt: 'Rice Flour', href: '#rice-flour', label: 'Rice Flour' },
];

export default function ProductCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-4 mb-6">
      {/* Slide */}
      <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20 relative">
        <Link href={slides[current].href}>
          <div className="relative w-full h-56 sm:h-72">
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
              <span className="text-white font-serif font-bold text-lg drop-shadow">{slides[current].label}</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-[#F59E0B] w-4' : 'bg-[#F59E0B]/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Quick links */}
      <div className="flex justify-center gap-4 mt-3 text-xs font-bold text-[#78350F]">
        {slides.map((s) => (
          <Link key={s.href} href={s.href} className="hover:text-[#F59E0B] transition-colors">
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
