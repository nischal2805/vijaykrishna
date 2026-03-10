'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/recipes', label: 'Recipes' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm">
      {/* Call-us top bar */}
      <div className="bg-[#431407] text-white text-xs sm:text-sm px-4 py-1.5 flex items-center justify-center gap-3 flex-wrap">
        <span className="font-medium text-orange-100">Place Your Order — Call Us Now</span>
        <a
          href="tel:9448190326"
          className="flex items-center gap-1.5 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-3 py-0.5 rounded-full transition-colors text-xs"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
          </svg>
          94481 90326
        </a>
      </div>

      {/* Main nav */}
      <div className="bg-[#FFF7ED]/95 backdrop-blur-sm border-b border-[#F59E0B]/20">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#F59E0B]/40 shadow-md flex-shrink-0">
            <Image
              src="/images/sli-logo.jpg"
              alt="Vijaykrishna"
              width={36}
              height={36}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-serif font-bold text-[#431407]">Vijaykrishna</span>
            <span className="text-[10px] text-[#78350F] tracking-wide hidden sm:block">Sri Lakshminarasimha Industries</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-[#F59E0B] border-b-2 border-[#F59E0B] pb-0.5'
                  : 'text-[#431407] hover:text-[#F59E0B]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-orange-100 transition-colors text-[#431407]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      </div>{/* end main nav wrapper */}

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FFF7ED] border-t border-[#F59E0B]/20 px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-semibold py-2 border-b border-orange-100 transition-colors ${
                pathname === link.href ? 'text-[#F59E0B]' : 'text-[#431407] hover:text-[#F59E0B]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
