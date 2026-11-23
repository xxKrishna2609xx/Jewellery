// Comprehensive Luxury Jewellery Catalog for Aura Jewels
export const CATEGORIES = [
  { id: 'all', name: 'All Jewels', icon: 'Sparkles', count: 18 },
  { id: 'rings', name: 'Rings & Bands', icon: 'CircleDot', count: 5, banner: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop' },
  { id: 'necklaces', name: 'Necklaces & Chokers', icon: 'Gem', count: 4, banner: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop' },
  { id: 'earrings', name: 'Earrings & Jhumkas', icon: 'Sun', count: 3, banner: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop' },
  { id: 'bangles', name: 'Bangles & Kadas', icon: 'Disc', count: 3, banner: 'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=800&auto=format&fit=crop' },
  { id: 'mangalsutras', name: 'Mangalsutras', icon: 'HeartHandshake', count: 2, banner: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
  { id: 'coins', name: 'Gold Coins (24K)', icon: 'Coins', count: 1, banner: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=800&auto=format&fit=crop' },
];

export const COLLECTIONS = [
  {
    id: 'bridal-couture',
    title: 'Bridal Heritage 2026',
    subtitle: 'Regal 22K Kundan & Polki Masterpieces for the Indian Bride',
    tag: 'Bridal Special',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'solitaire-dream',
    title: 'Solitaire Radiance',
    subtitle: 'IGI Certified Natural & Lab Grown Solitaires crafted in 18K Gold',
    tag: 'Diamond Luxury',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'everyday-gold',
    title: 'Modern Minimalist',
    subtitle: 'Feather-light 14K & 18K gold essentials engineered for daily wear',
    tag: 'Work & Daily',
    image: 'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=1000&auto=format&fit=crop'
  }
];

export const PRODUCTS = [
  {
    id: 'aura-rg-01',
    name: 'Celestial Crown Solitaire Diamond Ring',
    subtitle: '1.20 Ct Round Brilliant Solitaire with Micro-Pavé Shank',
    category: 'rings',
    gender: 'Women',
    occasion: 'Engagement',
    badge: 'Bestseller',
    rating: 4.9,
    reviewsCount: 42,
    purity: '18K',
    availablePurities: ['14K', '18K', '22K'],
    metalColor: 'Yellow Gold',
    availableColors: ['Yellow Gold', 'Rose Gold', 'White Gold'],
    grossWeight: 4.85,
    netGoldWeight: 4.61,
    makingChargePercent: 10,
    gemstoneValue: 68000,
    price: 98500,
    originalPrice: 112000,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1000&auto=format&fit=crop'
    ],
    diamond: {
      carats: '1.20 Ct',
      clarity: 'VVS1',
      color: 'E-F Grade',
      certificate: 'IGI Certified Natural Diamond'
    },
    hallmark: 'BIS 750 Hallmarked with Unique HUID',
    description: 'An ethereal showcase of timeless romance. Handcrafted in luminous 18K solid gold, featuring an extraordinary hand-selected round brilliant solitaire surrounded by a delicate halo of micro-pavé diamonds.',
    features: ['Conflict-free certified diamonds', 'Solid gold comfort-fit inner band', 'Complimentary custom engraving']
  },
  {
    id: 'aura-nk-02',
    name: 'Padmavati Royal Temple 22K Choker',
    subtitle: 'Antique Finish Gold Choker with Basra Pearl Drops',
    category: 'necklaces',
    gender: 'Women',
    occasion: 'Bridal',
    badge: 'Heritage',
    rating: 5.0,
    reviewsCount: 29,
    purity: '22K',
    availablePurities: ['22K'],
    metalColor: 'Yellow Gold',
    availableColors: ['Yellow Gold'],
    grossWeight: 46.20,
    netGoldWeight: 43.80,
    makingChargePercent: 12,
    gemstoneValue: 24000,
    price: 378000,
    originalPrice: 410000,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop'
    ],
    diamond: null,
    hallmark: 'BIS 916 Hallmarked with Laser HUID',
    description: 'Inspired by the imperial palaces of Rajasthan, this heirloom choker showcases intricate Nakshi repoussé work, studded with uncut polki and suspended natural seed pearls.',
    features: ['Authentic 22 Karat standard gold', 'Traditional handmade craftsmanship', 'Silk cord adjustable dori included']
  },
  {
    id: 'aura-er-03',
    name: 'Kashmiri Jhumka with Emerald Florets',
    subtitle: 'Classic Tiered Jhumka with Hand-Set Zambian Emeralds',
    category: 'earrings',
    gender: 'Women',
    occasion: 'Festive',
    badge: 'Trending',
    rating: 4.8,
    reviewsCount: 36,
    purity: '22K',
    availablePurities: ['18K', '22K'],
    metalColor: 'Yellow Gold',
    availableColors: ['Yellow Gold'],
    grossWeight: 18.40,
    netGoldWeight: 17.10,
    makingChargePercent: 11,
    gemstoneValue: 18500,
    price: 158200,
    originalPrice: 172000,
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop'
    ],
    diamond: null,
    hallmark: 'BIS 916 Hallmarked with HUID',
    description: 'A dancing symphony of gold bells and cascading teardrops. Designed to catch light with every turn, adorned with premium natural cabochon emeralds.',
    features: ['Balanced weight distribution for pain-free wear', 'Secure Bombay screw back', 'BIS Guaranteed 91.6% purity']
  },
  {
    id: 'aura-bg-04',
    name: 'Imperial Mayur Openable Gold Kada (Pair)',
    subtitle: 'Hand-Engraved Peacock Motif with Ruby Eyes',
    category: 'bangles',
    gender: 'Women',
    occasion: 'Wedding',
    badge: 'Popular',
    rating: 4.9,
    reviewsCount: 19,
    purity: '22K',
    availablePurities: ['22K'],
    metalColor: 'Yellow Gold',
    availableColors: ['Yellow Gold'],
    grossWeight: 52.80,
    netGoldWeight: 51.50,
    makingChargePercent: 12.5,
    gemstoneValue: 12000,
    price: 432500,
    originalPrice: 465000,
    images: [
      'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop'
    ],
    diamond: null,
    hallmark: 'BIS 916 Hallmarked Pair',
    description: 'A set of two opulent 22K gold kadas crowned with majestic peacock terminal heads. Features concealed screw clasp mechanism for easy, safe wear.',
    features: ['Sold as a matching pair', 'Hidden hinge and safety chain', 'Solid 22K hallmarked construction']
  },
  {
    id: 'aura-rg-05',
    name: 'Empress Rose Gold Infinity Diamond Band',
    subtitle: 'Continuous Channel-Set Brilliant Cut Diamonds',
    category: 'rings',
    gender: 'Women',
    occasion: 'Anniversary',
    badge: 'New Arrival',
    rating: 4.9,
    reviewsCount: 14,
    purity: '18K',
    availablePurities: ['14K', '18K'],
    metalColor: 'Rose Gold',
    availableColors: ['Rose Gold', 'White Gold', 'Yellow Gold'],
    grossWeight: 3.65,
    netGoldWeight: 3.40,
    makingChargePercent: 9.5,
    gemstoneValue: 35000,
    price: 57800,
    originalPrice: 65000,
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop'
    ],
    diamond: {
      carats: '0.65 Ct',
      clarity: 'VS-SI',
      color: 'G-H',
      certificate: 'SGL Diamond Certificate'
    },
    hallmark: 'BIS 750 Hallmarked',
    description: 'An endless loop of scintillating radiance. Warm 18K rose gold embraces round brilliant diamonds in a flush channel setting, offering snag-free elegance.',
    features: ['Snag-free smooth channel setting', 'Skin-friendly nickel-safe alloy', 'Lifetime free ultrasonic cleaning']
  },
  {
    id: 'aura-nk-06',
    name: 'Eternal Riva Diamond Tennis Necklace',
    subtitle: 'Graduated Three-Prong Diamond Riviera in 18K White Gold',
    category: 'necklaces',
    gender: 'Women',
    occasion: 'Cocktail',
    badge: 'Luxury Iconic',
    rating: 5.0,
    reviewsCount: 22,
    purity: '18K',
    availablePurities: ['18K'],
    metalColor: 'White Gold',
    availableColors: ['White Gold', 'Yellow Gold'],
    grossWeight: 26.50,
    netGoldWeight: 23.90,
    makingChargePercent: 14,
    gemstoneValue: 245000,
    price: 410000,
    originalPrice: 450000,
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop'
    ],
    diamond: {
      carats: '5.50 Ct Total',
      clarity: 'VVS-VS',
      color: 'E-F Exceptional White',
      certificate: 'IGI Certified'
    },
    hallmark: 'BIS 750 Hallmarked',
    description: 'The pinnacle of fine jewellery. 132 calibrated round brilliant diamonds linked in fluid articulated white gold mounts that drape naturally against the collarbone.',
    features: ['Double safety box clasp', 'Fluid articulative links that prevent flipping', '100% natural mined diamonds']
  },
  {
    id: 'aura-ms-07',
    name: 'Aditi Modern Minimalist Solitaire Mangalsutra',
    subtitle: 'Bezel Set Diamond Solitaire with Single Strand Black Beads',
    category: 'mangalsutras',
    gender: 'Women',
    occasion: 'Daily Wear',
    badge: 'Bestseller',
    rating: 4.9,
    reviewsCount: 88,
    purity: '18K',
    availablePurities: ['14K', '18K'],
    metalColor: 'Yellow Gold',
    availableColors: ['Yellow Gold', 'Rose Gold'],
    grossWeight: 4.10,
    netGoldWeight: 3.90,
    makingChargePercent: 9,
    gemstoneValue: 28000,
    price: 53500,
    originalPrice: 59000,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop'
    ],
    diamond: {
      carats: '0.35 Ct Solitaire',
      clarity: 'VVS2',
      color: 'F Color',
      certificate: 'IGI Certificate'
    },
    hallmark: 'BIS 750 Hallmarked',
    description: 'A contemporary reinterpretation of sacred matrimony for the modern woman. Understated, feather-light, and seamless under formal suits or casual tees.',
    features: ['Anti-tangle spun gold chain', 'Certified conflict-free diamond', 'Adjustable 16 to 18 inch length']
  },
  {
    id: 'aura-cn-08',
    name: '24K (999 Pure) Lakshmi Ganesh Sovereign Coin',
    subtitle: 'Tamper-Proof CertiCard with QR Code Verification (10 Grams)',
    category: 'coins',
    gender: 'Unisex',
    occasion: 'Investment / Gifting',
    badge: '999 Pure',
    rating: 5.0,
    reviewsCount: 150,
    purity: '24K',
    availablePurities: ['24K'],
    metalColor: 'Yellow Gold',
    availableColors: ['Yellow Gold'],
    grossWeight: 10.00,
    netGoldWeight: 10.00,
    makingChargePercent: 3.5,
    gemstoneValue: 0,
    price: 81250,
    originalPrice: 83500,
    images: [
      'https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=1000&auto=format&fit=crop'
    ],
    diamond: null,
    hallmark: '999 Purity NABL Lab Certified',
    description: 'Finest 24 Karat 999 fineness Swiss standard minted gold coin depicting Goddess Lakshmi and Lord Ganesha. Packaged in sealed tamper-proof acrylic assay card.',
    features: ['100% buyback guarantee at prevailing market rate', 'Zero weight loss during testing', 'Zero deduction exchange']
  },
  {
    id: 'aura-rg-09',
    name: 'Maharaja Men\'s Royal Signet Lion Ring',
    subtitle: 'Solid 22K Gold Hand-Chiseled Royal Emblem Ring',
    category: 'rings',
    gender: 'Men',
    occasion: 'Party / Heritage',
    badge: 'Men\'s Luxe',
    rating: 4.8,
    reviewsCount: 31,
    purity: '22K',
    availablePurities: ['22K', '18K'],
    metalColor: 'Yellow Gold',
    availableColors: ['Yellow Gold'],
    grossWeight: 12.60,
    netGoldWeight: 12.60,
    makingChargePercent: 11,
    gemstoneValue: 0,
    price: 103500,
    originalPrice: 114000,
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop'
    ],
    diamond: null,
    hallmark: 'BIS 916 Hallmarked',
    description: 'An commanding symbol of strength and lineage. Heavy solid construction with deep relief sculpture of the roaring lion on brushed satin finish plate.',
    features: ['Solid back (not hollowed)', 'Mirror-polished beveled edges', 'Laser-etched authenticity hallmark']
  },
  {
    id: 'aura-er-10',
    name: 'Solitaire Cushion Diamond Stud Earrings',
    subtitle: '1.00 Carat Total Weight in 18K White Gold Martini Setting',
    category: 'earrings',
    gender: 'Women',
    occasion: 'Daily / Work',
    badge: 'Classic Must-Have',
    rating: 4.9,
    reviewsCount: 74,
    purity: '18K',
    availablePurities: ['14K', '18K'],
    metalColor: 'White Gold',
    availableColors: ['White Gold', 'Yellow Gold', 'Rose Gold'],
    grossWeight: 2.80,
    netGoldWeight: 2.60,
    makingChargePercent: 9,
    gemstoneValue: 72000,
    price: 89500,
    originalPrice: 99000,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop'
    ],
    diamond: {
      carats: '1.00 Ct Pair (0.50 Ct each)',
      clarity: 'VVS2',
      color: 'E Grade',
      certificate: 'IGI Laser Inscribed'
    },
    hallmark: 'BIS 750 Hallmarked',
    description: 'Effortless everyday sparkle. Low-profile martini three-prong baskets hold brilliant diamonds flush against the earlobes for maximum radiance.',
    features: ['Threaded post with safety screw backs', 'Ideal proportions for daily shower and sleep', 'Lifetime trade-up guarantee']
  },
  {
    id: 'aura-bg-11',
    name: 'Luminary Pavé Diamond Bangle Bracelet',
    subtitle: 'Oval Contour 18K Gold Bangle with Dual Row Diamonds',
    category: 'bangles',
    gender: 'Women',
    occasion: 'Party / Evening',
    badge: 'Staff Pick',
    rating: 4.9,
    reviewsCount: 17,
    purity: '18K',
    availablePurities: ['18K'],
    metalColor: 'Yellow Gold',
    availableColors: ['Yellow Gold', 'Rose Gold', 'White Gold'],
    grossWeight: 14.20,
    netGoldWeight: 13.50,
    makingChargePercent: 12,
    gemstoneValue: 65000,
    price: 159000,
    originalPrice: 178000,
    images: [
      'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop'
    ],
    diamond: {
      carats: '1.15 Ct Total',
      clarity: 'VS-SI',
      color: 'G-H',
      certificate: 'SGL Certificate'
    },
    hallmark: 'BIS 750 Hallmarked',
    description: 'Designed ergonomically in an oval contour that mirrors the natural shape of the human wrist, preventing uncomfortable rolling and turning.',
    features: ['Dual push safety lock', 'Ergonomic oval silhouette', 'Comfort bevel edge']
  },
  {
    id: 'aura-nk-12',
    name: 'Aura Radiant Sunburst Diamond Pendant Chain',
    subtitle: '18K Yellow Gold Box Chain with Dancing Diamond Pendant',
    category: 'necklaces',
    gender: 'Women',
    occasion: 'Daily / Gifting',
    badge: 'Popular Gift',
    rating: 4.8,
    reviewsCount: 52,
    purity: '18K',
    availablePurities: ['14K', '18K'],
    metalColor: 'Yellow Gold',
    availableColors: ['Yellow Gold', 'Rose Gold'],
    grossWeight: 5.60,
    netGoldWeight: 5.30,
    makingChargePercent: 9.5,
    gemstoneValue: 32000,
    price: 66500,
    originalPrice: 74000,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop'
    ],
    diamond: {
      carats: '0.42 Ct Total',
      clarity: 'VVS',
      color: 'F-G',
      certificate: 'IGI Certified'
    },
    hallmark: 'BIS 750 Hallmarked',
    description: 'A luminous celebration of warmth and optimism. The center diamond is suspended on microscopic pivots, causing it to flutter and shimmer with every heartbeat.',
    features: ['Kinetic dancing center stone', '18-inch Italian box chain included', 'Reinforced lobster claw lock']
  }
];

// Showrooms and Stores in India
export const SHOWROOMS = [
  {
    city: 'Delhi - Flagship Store',
    location: 'South Extension Part 1, Ring Road, New Delhi',
    phone: '+91 11 4982 7700',
    timing: '10:30 AM - 8:30 PM (All 7 Days)'
  },
  {
    city: 'Mumbai - Luxury Lounge',
    location: 'Bandra West, Linking Road, Mumbai',
    phone: '+91 22 6120 4400',
    timing: '11:00 AM - 9:00 PM (All 7 Days)'
  },
  {
    city: 'Bangalore - Indiranagar',
    location: '100ft Road, Indiranagar, Bengaluru',
    phone: '+91 80 4310 9900',
    timing: '10:30 AM - 8:30 PM (All 7 Days)'
  },
  {
    city: 'Gurugram - Cyber City',
    location: 'Ambience Mall, Ground Floor, Gurugram',
    phone: '+91 124 456 1234',
    timing: '11:00 AM - 9:30 PM (All 7 Days)'
  }
];

// Customer Reviews & Press
export const TESTIMONIALS = [
  {
    name: 'Priyanka Singhania',
    city: 'New Delhi',
    text: 'Aura Jewels made our bridal shopping completely stress-free. The live gold rate calculation and transparent breakup of making charges and diamond costs gave my family complete peace of mind.',
    rating: 5,
    itemPurchased: 'Padmavati Royal Temple 22K Choker'
  },
  {
    name: 'Rohan & Ananya Mehta',
    city: 'Mumbai',
    text: 'I ordered the Celestial Solitaire ring for our 5th anniversary. The certificate, packaging, and the luster of the diamond exceeded my expectations. Far better shopping experience than traditional jewelers.',
    rating: 5,
    itemPurchased: 'Celestial Crown Solitaire Diamond Ring'
  },
  {
    name: 'Dr. Kavita Nair',
    city: 'Bengaluru',
    text: 'The modern minimalist mangalsutra is exquisite! Feather-light for hospital rounds yet deeply traditional. Truly a high-fashion, trustworthy luxury brand.',
    rating: 5,
    itemPurchased: 'Aditi Modern Minimalist Solitaire Mangalsutra'
  }
];
