import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recipes & Blog – Idli, Ragi, Rice Flour Recipes | Vijaykrishna',
  description:
    'Traditional Karnataka recipes using Idli Rawa, Ragi Flour and Rice Flour. Classic Idlis, Chakli, Ragi Mudde and more from Sri Lakshminarasimha Industries.',
  keywords: [
    'idli recipe',
    'ragi mudde recipe',
    'chakli recipe',
    'rice flour recipes',
    'ragi flour recipes',
    'Karnataka recipes',
    'idli rawa recipe',
    'traditional Karnataka food',
  ],
  openGraph: {
    title: 'Recipes & Blog – Idli, Ragi, Rice Flour Recipes | Vijaykrishna',
    description:
      'Traditional Karnataka recipes using Idli Rawa, Ragi Flour and Rice Flour. Classic Idlis, Chakli, Ragi Mudde and more.',
    url: 'https://vijaykrishna.org/recipes',
  },
  alternates: { canonical: 'https://vijaykrishna.org/recipes' },
};

export default function RecipesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
