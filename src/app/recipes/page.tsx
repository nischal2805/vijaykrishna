'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ── DATA ───────────────────────────────────────────────────── */

const recipes = [
  {
    tag: 'Idli Rawa',
    tagColor: 'bg-amber-100 text-amber-800 border border-amber-200',
    title: 'Classic Soft Idlis',
    description:
      'The most loved South Indian breakfast, made perfectly fluffy using Vijaykrishna Idli Rawa. The secret is in the rawa quality and good curd. Pairs beautifully with sambar and coconut chutney.',
    time: '20 min',
    serves: '4',
    difficulty: 'Easy',
    ingredients: [
      '2 cups Vijaykrishna Idli Rawa',
      '1 cup fresh curd (slightly sour)',
      'Salt to taste',
      '½ tsp Eno or baking soda',
      'Water as required',
    ],
    steps: [
      'Soak 2 cups Idli Rawa in water for 30 minutes. Drain the water completely.',
      'Mix drained rawa with 1 cup beaten curd and salt. Consistency should be thick — thicker than regular idli batter.',
      'Rest the batter for at least 10 minutes at room temperature for best results.',
      'Just before steaming, add ½ tsp Eno fruit salt or baking soda and mix gently.',
      'Pour immediately into well-greased idli moulds. Do not over-fill.',
      'Steam on medium heat for 12 to 15 minutes. Do not open the lid before 10 minutes.',
      'Wait 2 minutes before removing. Serve hot with sambar, coconut chutney, or gun powder.',
    ],
    tips: 'For extra soft idlis, use slightly sour curd. Always drain the rawa thoroughly — releasing excess water is key to getting the right batter thickness.',
    href: '/products/idli-rawa',
    productLabel: 'Uses Vijaykrishna Premium Idli Rawa',
  },
  {
    tag: 'Rice Flour',
    tagColor: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    title: 'Crispy Chakli (Murukku)',
    description:
      'A Karnataka festival favourite. Crunchy spiral snacks with a satisfying bite, perfect for Diwali, Ugadi, or everyday evening tea. Simple ingredients, incredible crunch.',
    time: '40 min',
    serves: '6',
    difficulty: 'Medium',
    ingredients: [
      '2 cups Vijaykrishna Rice Flour',
      '½ cup roasted gram flour (puttu hittu)',
      '1 tsp white sesame seeds',
      '1 tsp cumin seeds',
      '1 tbsp hot oil (for mixing)',
      'Salt to taste',
      'Warm water to knead',
      'Oil for deep frying',
    ],
    steps: [
      'Dry roast the rice flour on low heat for 3 minutes until it turns slightly aromatic. Allow to cool.',
      'Combine rice flour and gram flour in a large mixing bowl. Add sesame seeds, cumin, and salt.',
      'Add 1 tbsp hot oil to the flour mix and rub it in well. This gives chakli its signature crunch.',
      'Gradually add warm water and knead into a firm, smooth, non-sticky dough.',
      'Load into a chakli/murukku press fitted with the star disc.',
      'Press the dough into tight spirals directly on butter paper or a lightly greased surface.',
      'Heat oil in a deep pan to 160 to 170 degrees. Fry in small batches on medium heat.',
      'Fry until the bubbling reduces and the chaklis are golden. Drain on paper towels.',
      'Cool completely before storing in an airtight container. They stay crisp for up to 2 weeks.',
    ],
    tips: 'The dough should not be too wet. If it cracks while pressing, add a teaspoon of warm water. Frying on medium heat (not high) is essential for even cooking without browning too fast.',
    href: '/products/rice-flour',
    productLabel: 'Uses Vijaykrishna Pure Rice Flour',
  },
  {
    tag: 'Ragi Flour',
    tagColor: 'bg-red-100 text-red-800 border border-red-200',
    title: 'Ragi Mudde',
    description:
      'A centuries-old Karnataka staple. Dense, deeply nourishing ragi balls that keep you full for hours. The original superfood of rural Karnataka, still eaten daily in millions of homes.',
    time: '15 min',
    serves: '2',
    difficulty: 'Easy',
    ingredients: [
      '1 cup Vijaykrishna Ragi Flour',
      '2 cups water',
      'Salt to taste',
    ],
    steps: [
      'Bring 2 cups of water to a full, rolling boil in a thick-bottomed vessel. Add a pinch of salt.',
      'Reduce heat to medium-low. Add ragi flour gradually in a thin, steady stream, stirring constantly.',
      'Stir vigorously to prevent any lumps from forming — this is the most important step.',
      'Cover and cook on low heat for 5 to 7 minutes, stirring occasionally, until the mixture is very thick and leaves the sides of the pan.',
      'Wet your hands with water. Scoop out portions and roll into smooth, firm, round balls.',
      'Serve immediately with sambar, gongura chutney, or saaru (rasam). Eat by breaking off small pieces with your fingers.',
    ],
    tips: 'True ragi mudde should be firm enough to hold its shape but soft inside. The trick is adding the flour slowly and stirring constantly at the start to prevent lumps.',
    href: '/products/ragi-flour',
    productLabel: 'Uses Vijaykrishna Healthy Ragi Flour',
  },
  {
    tag: 'Ragi Flour',
    tagColor: 'bg-red-100 text-red-800 border border-red-200',
    title: 'Ragi Roti',
    description:
      'A wholesome flatbread packed with calcium and dietary fibre. Great as a filling breakfast or a light dinner alongside a vegetable curry or chutney.',
    time: '25 min',
    serves: '3',
    difficulty: 'Easy',
    ingredients: [
      '1.5 cups Vijaykrishna Ragi Flour',
      '1 small onion, finely chopped',
      '2 green chillies, finely chopped',
      'A handful of fresh coriander leaves, chopped',
      'Salt to taste',
      'Warm water to knead',
      'Ghee or oil for cooking',
    ],
    steps: [
      'Combine ragi flour, chopped onion, green chilli, and coriander in a bowl. Mix well.',
      'Add salt and warm water a little at a time. Knead into a soft, pliable dough. Ragi dough does not become elastic like wheat dough.',
      'Divide into lemon-sized balls. Lightly grease a tawa or non-stick pan and place it on medium heat.',
      'Wet your palm well, take a ball, and flatten it directly on the warm tawa by pressing and spreading in circular motions.',
      'Aim for a thin, even roti of about 6 to 7 inches diameter.',
      'Cook on medium heat for 3 to 4 minutes. Press the edges gently with a cloth to ensure even cooking.',
      'Flip and cook the other side for another 3 minutes. Drizzle ghee just before removing.',
      'Serve hot with coconut chutney, yoghurt, or any vegetable curry.',
    ],
    tips: 'Keep your palm and the tawa slightly wet when shaping. Ragi dough is not sticky and will spread easily with practice. Thinner rotis cook more evenly.',
    href: '/products/ragi-flour',
    productLabel: 'Uses Vijaykrishna Healthy Ragi Flour',
  },
  {
    tag: 'Rice Flour',
    tagColor: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    title: 'Neer Dosa',
    description:
      'Paper-thin, lacy dosas from coastal Karnataka. Light as a feather and ready in minutes with no fermentation needed. A staple of Udupi and Mangalorean kitchens.',
    time: '15 min',
    serves: '3',
    difficulty: 'Easy',
    ingredients: [
      '1 cup Vijaykrishna Rice Flour',
      'Salt to taste',
      'Water (enough to make a very thin, watery batter)',
      'Oil or ghee for greasing the tawa',
    ],
    steps: [
      'Mix rice flour with a pinch of salt. Add water gradually while stirring to make a smooth, lump-free batter.',
      'The batter must be much thinner than regular dosa batter. It should run off a spoon like water.',
      'Let the batter rest for 10 minutes. Stir again before cooking.',
      'Heat a dosa tawa until hot. Grease lightly with oil using a cloth or brush.',
      'Pour a full ladle of batter and immediately swirl the tawa to spread it into a thin, even round.',
      'Cover with a lid and cook on medium heat for 1 to 2 minutes. No flipping is needed.',
      'The dosa is done when the edges lift slightly and the surface is no longer wet.',
      'Fold into quarters and serve with coconut milk curry, chutney, or chicken curry.',
    ],
    tips: 'Neer Dosa batter should be nearly transparent when spread. The tawa must be well-seasoned. If batter tears, the batter is too thick or the tawa too hot.',
    href: '/products/rice-flour',
    productLabel: 'Uses Vijaykrishna Pure Rice Flour',
  },
  {
    tag: 'Idli Rawa',
    tagColor: 'bg-amber-100 text-amber-800 border border-amber-200',
    title: 'Masala Rava Idli',
    description:
      'A spiced, vegetable-loaded twist on the classic idli. The tempering is mixed directly into the batter, giving every bite a burst of flavour with mustard, curry leaves, and fresh vegetables.',
    time: '30 min',
    serves: '4',
    difficulty: 'Easy',
    ingredients: [
      '2 cups Vijaykrishna Idli Rawa',
      '1 cup fresh curd',
      '1 tsp mustard seeds',
      '8 to 10 curry leaves',
      '2 green chillies, chopped',
      '1 medium carrot, grated',
      '2 tbsp green peas (optional)',
      '2 tbsp oil',
      'Salt to taste',
      '½ tsp Eno',
    ],
    steps: [
      'Soak and drain the rawa as usual. Mix with curd and salt. Set aside.',
      'Heat oil in a small pan. Add mustard seeds and wait for them to pop.',
      'Add curry leaves, green chillies, grated carrot, and peas. Saute for 2 minutes.',
      'Add this tempering to the rawa-curd mixture and mix well.',
      'Rest for 10 minutes. Add Eno just before steaming and mix gently.',
      'Pour into greased moulds and steam for 12 to 15 minutes.',
      'Serve with mint chutney, tomato chutney, or a spiced coconut chutney.',
    ],
    tips: 'Add the Eno only when you are ready to steam. Once Eno is added, steam immediately for best fluffiness.',
    href: '/products/idli-rawa',
    productLabel: 'Uses Vijaykrishna Premium Idli Rawa',
  },
];

const posts = [
  {
    category: 'Health',
    categoryColor: 'bg-green-100 text-green-800 border border-green-200',
    title: 'Why Ragi Deserves a Place in Every Indian Kitchen',
    date: 'February 2026',
    readTime: '4 min read',
    intro:
      'Finger millet (ragi) has been a staple of Karnataka cuisine for centuries. Once considered peasant food, it is now recognised by nutritionists worldwide as one of the most nutrient-dense grains available. Here is a look at why ragi belongs in your kitchen.',
    body: [
      {
        heading: 'Unmatched Calcium Content',
        text: 'Ragi contains more calcium than any other grain, with approximately 344 mg per 100 g. This is nearly 10 times more calcium than rice and three times more than milk gram for gram. It is an essential food for growing children, the elderly, and anyone who avoids dairy.',
      },
      {
        heading: 'Naturally Gluten-Free',
        text: 'Ragi is completely free of gluten, making it safe for people with celiac disease or gluten sensitivity. It is one of the few traditional grains that can be used freely in gluten-free cooking without any compromise in nutrition.',
      },
      {
        heading: 'Low Glycaemic Index',
        text: 'Ragi digests slowly, causing a gradual rise in blood sugar rather than a spike. This makes it highly suitable for people managing type 2 diabetes or pre-diabetes. Ragi mudde and ragi roti are common dietary recommendations from many Indian nutritionists for this reason.',
      },
      {
        heading: 'Rich in Amino Acids',
        text: 'Ragi is one of the few plant-based foods rich in methionine and tryptophan, essential amino acids not found in most other grains. Tryptophan in particular supports serotonin production, which plays a role in mood regulation and sleep quality.',
      },
    ],
  },
  {
    category: 'Tradition',
    categoryColor: 'bg-purple-100 text-purple-800 border border-purple-200',
    title: 'The Art of Stone Grinding: Why It Matters',
    date: 'January 2026',
    readTime: '3 min read',
    intro:
      'Modern roller mills process grain at high speed, generating significant heat in the process. That heat destroys natural oils, reduces nutrient density, and alters the texture of the final flour. Stone grinding is fundamentally different, and the difference is noticeable in every dish.',
    body: [
      {
        heading: 'Low-Heat Processing Preserves Nutrients',
        text: 'Stone grinding is a slow, low-temperature process. Because no significant heat is generated, the natural oils, vitamins, and phytonutrients in the grain remain largely intact. Industrially milled rice flour, for instance, loses a considerable portion of its B vitamins and essential fatty acids during processing.',
      },
      {
        heading: 'Texture that Cannot Be Replicated',
        text: 'Stone-ground flour has a slightly coarser texture that holds moisture differently. This is why idlis made from stone-ground rawa are softer, and why chakli made from stone-ground rice flour has a distinctive crunch. Industrial flour is too fine and uniform to achieve the same result.',
      },
      {
        heading: 'Aroma and Flavour',
        text: 'The natural grain oils that survive stone grinding are fragrant. Freshly stone-ground ragi flour has a warm, earthy aroma that is absent in most packaged flours. This is not a minor detail, it is the foundation of authentic Karnataka home cooking.',
      },
      {
        heading: 'Our Commitment',
        text: 'At Sri Lakshminarasimha Industries, we have used stone processing since 1984. We have invested in maintaining our equipment and our process rather than switching to faster industrial methods, because the quality difference is real and our customers know it.',
      },
    ],
  },
  {
    category: 'Tips',
    categoryColor: 'bg-blue-100 text-blue-800 border border-blue-200',
    title: '5 Things That Make or Break Your Idlis',
    date: 'December 2025',
    readTime: '3 min read',
    intro:
      'Idlis look simple, but there are a handful of decisions that separate soft, cloud-like idlis from dense, gummy ones. After decades of customer feedback and mill experience, here are the five things that matter most.',
    body: [
      {
        heading: '1. Drain the Rawa Thoroughly',
        text: 'After soaking, squeeze out and drain all excess water from the rawa. Wet rawa will make your batter too loose and produce flat, rubbery idlis. This single step is responsible for more failed idlis than anything else.',
      },
      {
        heading: '2. Use Fresh, Slightly Sour Curd',
        text: 'The natural acidity in slightly sour curd reacts with the Eno or baking soda to create the lift needed for soft idlis. Freshly made sweet curd does not have enough acidity. Day-old curd at room temperature is ideal.',
      },
      {
        heading: '3. Rest the Batter Before Steaming',
        text: 'Even with Eno, resting the batter for 10 to 15 minutes after mixing allows the rawa to absorb the curd fully and the gluten-free structure to hydrate. Batter poured immediately after mixing often produces dense, uneven idlis.',
      },
      {
        heading: '4. Add Eno Only at the Last Moment',
        text: 'Once Eno is added and mixed in, you have about 2 to 3 minutes before the reaction starts subsiding. Pour the batter into moulds and get it into the steamer within this window. Waiting too long after adding Eno is a common mistake.',
      },
      {
        heading: '5. Never Open the Steamer Early',
        text: 'Opening the lid in the first 10 minutes causes the idlis to collapse. The steam inside creates the structure. Wait the full 12 to 15 minutes, then wait another 2 minutes after turning off the heat before opening.',
      },
    ],
  },
  {
    category: 'Story',
    categoryColor: 'bg-orange-100 text-orange-800 border border-orange-200',
    title: 'Gangavathi: The Rice Bowl of Karnataka',
    date: 'November 2025',
    readTime: '5 min read',
    intro:
      'Our mill has operated in Gangavathi for over four decades. Located in the Koppal district of northern Karnataka, Gangavathi sits at the heart of the Tungabhadra paddy belt. The geography, the farmers, and the river have all shaped the quality of what we produce.',
    body: [
      {
        heading: 'Geography and Agriculture',
        text: 'Gangavathi lies in the Tungabhadra basin, an agricultural region with deep alluvial soils and reliable irrigation from the Tungabhadra reservoir. The conditions here produce some of the finest paddy in Karnataka. The combination of climate, water quality, and soil is difficult to replicate elsewhere.',
      },
      {
        heading: 'A Heritage of Farming',
        text: 'The region has been an agricultural hub since the time of the Vijayanagara empire, which built extensive irrigation systems in this area in the 14th and 15th centuries. Farming knowledge here is generational and deep. The farmers we source from have been growing and selecting the best grain varieties for decades.',
      },
      {
        heading: 'From Field to Mill',
        text: 'Our proximity to the source is a genuine quality advantage. Grain reaches our mill within days of harvest rather than weeks. Fresher grain processes better, retains more natural moisture, and produces flour with a cleaner flavour and better shelf life.',
      },
      {
        heading: 'Our Relationship with Local Farmers',
        text: 'We have worked with the same families of farmers for multiple generations. This continuity means consistent quality, shared investment in the right grain varieties, and a supply chain with no unnecessary middlemen. It is a relationship built on four decades of mutual trust.',
      },
    ],
  },
];

/* ── EXPANDABLE RECIPE CARD ────────────────────────────────── */

function RecipeCard({ r }: { r: typeof recipes[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Header — always visible */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 pt-5 pb-4 bg-gradient-to-br from-[#FFFBEB] to-[#FFF7ED] focus:outline-none"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full ${r.tagColor}`}>{r.tag}</span>
              <span className="text-[10px] text-[#78350F]/50 font-semibold">
                {r.time} &nbsp;·&nbsp; Serves {r.serves} &nbsp;·&nbsp; {r.difficulty}
              </span>
            </div>
            <h3 className="font-serif font-bold text-[#431407] text-lg leading-snug">{r.title}</h3>
            <p className="text-[#78350F]/70 text-xs mt-1.5 leading-relaxed line-clamp-2">{r.description}</p>
          </div>
          <span className={`flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-[#FEF3C7] flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#78350F" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>
      </button>

      {/* Expandable body */}
      {open && (
        <div className="px-5 pb-5 border-t border-orange-100 pt-4 space-y-5">
          {/* Description (full) */}
          <p className="text-[#78350F]/80 text-sm leading-relaxed">{r.description}</p>

          {/* Ingredients + Steps side by side on wider screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Ingredients */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#F59E0B] mb-2.5">Ingredients</p>
              <ul className="space-y-1.5">
                {r.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#78350F] leading-relaxed">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                    </svg>
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#F59E0B] mb-2.5">Method</p>
              <ol className="space-y-2">
                {r.steps.map((step, i) => (
                  <li key={i} className="flex gap-2.5 text-xs text-[#78350F] leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FEF3C7] text-[#431407] font-bold text-[10px] flex items-center justify-center">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-[#FEF3C7] rounded-xl px-4 py-3 flex gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.354a15.055 15.055 0 0 1-3 0M12 3v1.5M4.929 4.929l1.06 1.06M3 12h1.5M4.929 19.071l1.06-1.06M19.071 4.929l-1.06 1.06M21 12h-1.5m-1.439 7.071-1.06-1.06" />
            </svg>
            <div>
              <p className="text-[10px] font-bold text-[#431407] mb-0.5 uppercase tracking-wide">Pro Tip</p>
              <p className="text-xs text-[#78350F] leading-relaxed">{r.tips}</p>
            </div>
          </div>

          {/* Product link */}
          <Link href={r.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F59E0B] hover:text-[#D97706] transition-colors">
            {r.productLabel}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}

/* ── EXPANDABLE BLOG CARD ──────────────────────────────────── */

function BlogCard({ p }: { p: typeof posts[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 pt-5 pb-4 focus:outline-none"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full ${p.categoryColor}`}>{p.category}</span>
              <span className="text-[10px] text-[#78350F]/50 font-semibold">{p.date} &nbsp;·&nbsp; {p.readTime}</span>
            </div>
            <h3 className="font-serif font-bold text-[#431407] text-base leading-snug">{p.title}</h3>
            <p className="text-[#78350F]/60 text-xs mt-1.5 leading-relaxed line-clamp-2">{p.intro}</p>
          </div>
          <span className={`flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-[#FEF3C7] flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#78350F" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>
      </button>

      {open && (
        <div className="px-5 pb-6 border-t border-orange-100 pt-4 space-y-4">
          <p className="text-sm text-[#78350F]/80 leading-relaxed">{p.intro}</p>
          {p.body.map((section) => (
            <div key={section.heading}>
              <h4 className="font-bold text-[#431407] text-sm mb-1">{section.heading}</h4>
              <p className="text-xs text-[#78350F]/80 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── PAGE ───────────────────────────────────────────────────── */

export default function RecipesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-28 pb-14">

      {/* Page header */}
      <div className="mb-10 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[11px] font-bold uppercase tracking-widest bg-[#FEF3C7] rounded-full border border-[#F59E0B]/30 text-[#78350F]">
          Kitchen and Stories
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#431407] mb-3">
          Recipes and Blog
        </h1>
        <p className="text-[#78350F]/70 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Step-by-step recipes using our products, and stories about tradition, health, and the Karnataka kitchen. Click any card to expand.
        </p>
      </div>

      {/* Recipes */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <span className="h-px w-6 bg-[#F59E0B]" />
          <h2 className="text-[#F59E0B] font-bold uppercase text-xs tracking-widest">Recipes</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recipes.map((r) => <RecipeCard key={r.title} r={r} />)}
        </div>
      </section>

      {/* Blog */}
      <section>
        <div className="flex items-center gap-2 mb-5">
          <span className="h-px w-6 bg-[#F59E0B]" />
          <h2 className="text-[#F59E0B] font-bold uppercase text-xs tracking-widest">Blog and Stories</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.map((p) => <BlogCard key={p.title} p={p} />)}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="mt-12 bg-[#431407] rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-serif font-bold text-lg">Want to try these recipes?</p>
          <p className="text-orange-200/70 text-sm mt-0.5">Order our products or call us for availability and bulk enquiries.</p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Link href="/products" className="bg-[#F59E0B] text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-[#D97706] transition-colors">
            Our Products
          </Link>
          <a href="tel:9448190326" className="border border-white/20 text-white/80 hover:text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:border-white/50 transition-colors">
            Call Us
          </a>
        </div>
      </div>

    </div>
  );
}

