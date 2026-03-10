import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vijaykrishna.org'),
  title: {
    default: 'Vijaykrishna | Sri Lakshminarasimha Industries',
    template: '%s | Vijaykrishna',
  },
  description:
    'Buy premium Idli Rawa, Ragi Flour, and Rice Flour from Sri Lakshminarasimha Industries, Gangavathi, Karnataka. No additives, no preservatives — pure quality.',
  keywords: [
    'Idli Rawa',
    'Ragi Flour',
    'Rice Flour',
    'Gangavathi',
    'Karnataka',
    'Vijaykrishna',
    'Sri Lakshminarasimha Industries',
    'natural flour',
    'pure ragi flour',
    'idli rava online',
    'bulk flour Karnataka',
  ],
  authors: [{ name: 'Sri Lakshminarasimha Industries' }],
  creator: 'Sri Lakshminarasimha Industries',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vijaykrishna.org',
    siteName: 'Vijaykrishna — Sri Lakshminarasimha Industries',
    title: 'Vijaykrishna | Premium Idli Rawa, Ragi & Rice Flour',
    description:
      'Pure, natural Idli Rawa, Ragi Flour, and Rice Flour from Gangavathi, Karnataka. Trusted by homes and retailers across the region.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vijaykrishna — Premium Quality Flour Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijaykrishna | Premium Idli Rawa, Ragi & Rice Flour',
    description:
      'Pure, natural Idli Rawa, Ragi Flour, and Rice Flour from Gangavathi, Karnataka.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vijaykrishna.org',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-cream text-gray-900 font-sans flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
