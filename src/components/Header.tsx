'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#FFF7ED]/95 backdrop-blur-sm border-b border-[#F59E0B]/20 shadow-sm">
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
