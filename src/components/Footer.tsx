import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#431407] text-orange-50 px-6 py-6 rounded-t-3xl mt-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-4">
        {/* Logo + Company inline */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center text-white font-bold font-serif text-xl shadow-lg flex-shrink-0">
            V
          </div>
          <div className="text-left">
            <h3 className="font-serif font-bold text-base leading-tight">Sri Lakshminarasimha Industries</h3>
            <a
              href="https://maps.app.goo.gl/CTCatxDLxaxsewkVA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-orange-200/80 hover:text-white transition-colors underline underline-offset-2 leading-tight"
            >
              Virupapur Nagar, Gangavathi, Karnataka 583227
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* Contact row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
          <a className="flex items-center gap-1.5 font-medium hover:text-[#F59E0B] transition-colors" href="tel:9448190326">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3.5 h-3.5 text-[#F59E0B]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" /></svg>
            94481 90326
          </a>
          <a className="flex items-center gap-1.5 font-medium hover:text-[#F59E0B] transition-colors" href="tel:08533230326">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3.5 h-3.5 text-[#F59E0B]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" /></svg>
            08533-230326
          </a>
          <a className="flex items-center gap-1.5 font-medium hover:text-[#F59E0B] transition-colors text-xs" href="mailto:vijaykrishnaagrofoods@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3.5 h-3.5 text-[#F59E0B]"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
            vijaykrishnaagrofoods@gmail.com
          </a>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* Nav links + copyright */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-[#F59E0B] transition-colors">Home</Link>
            <Link href="/products" className="hover:text-[#F59E0B] transition-colors">Products</Link>
            <Link href="/contact" className="hover:text-[#F59E0B] transition-colors">Contact</Link>
          </div>
          <p className="text-xs text-white/40">
            &copy; 2025 Vijaykrishna &middot; Sri Lakshminarasimha Industries
          </p>
        </div>
      </div>

      {/* Floating call button */}
      <a
        href="tel:9448190326"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-40"
        aria-label="Call us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
        </svg>
      </a>
    </footer>
  );
}
