import { ServiceItem, GalleryItem, TestimonialItem, SalonBranch, SalonConfiguration, SalonPreset } from '../types';

export const DEFAULT_SALON_CONFIG: SalonConfiguration = {
  preset: 'womens-bridal',
  businessName: 'LUMIÈRE STUDIO',
  tagline: 'Your Style. Your Signature.',
  subheadline: 'Discover personalized hair, beauty, and grooming experiences designed around you.',
  currency: 'PKR',
  contact: {
    primaryPhone: '+92 42 3578 9100',
    whatsappNumber: '+92 300 8458643',
    email: 'concierge@lumierestudio.pk',
    address: 'Plot 18-C, MM Alam Road, Block C-2, Gulberg III',
    city: 'Lahore, Pakistan',
    hoursWeekday: 'Tuesday – Saturday: 10:30 AM – 8:30 PM',
    hoursWeekend: 'Sunday: 11:00 AM – 7:30 PM (Mondays by Advance Appointment)',
    instagramUrl: 'https://instagram.com',
    googleMapsUrl: 'https://maps.google.com/?q=MM+Alam+Road+Gulberg+Lahore'
  }
};

export const INITIAL_BRANCHES: SalonBranch[] = [
  {
    id: 'branch-lahore',
    name: 'Gulberg III Atelier (Flagship)',
    address: 'Plot 18-C, MM Alam Road, Block C-2, Gulberg III',
    city: 'Lahore',
    phone: '+92 42 3578 9100',
    whatsapp: '+92 300 8458643',
    hours: 'Tue – Sun: 10:30 AM – 8:30 PM',
    mapQuery: 'MM Alam Road Gulberg Lahore',
    isPrimary: true
  },
  {
    id: 'branch-islamabad',
    name: 'Capital Suite — Blue Area',
    address: '2nd Floor, Beverly Centre, Jinnah Avenue, F-7/Blue Area',
    city: 'Islamabad',
    phone: '+92 51 2814 550',
    whatsapp: '+92 321 5567890',
    hours: 'Tue – Sun: 11:00 AM – 8:30 PM',
    mapQuery: 'Beverly Centre Blue Area Islamabad',
    isPrimary: false
  },
  {
    id: 'branch-karachi',
    name: 'Seaside Promenade Atelier',
    address: 'Suite 402, Ocean Promenade, Block 9, Clifton',
    city: 'Karachi',
    phone: '+92 21 3583 6711',
    whatsapp: '+92 333 9012345',
    hours: 'Tue – Sun: 11:30 AM – 9:00 PM',
    mapQuery: 'Ocean Mall Clifton Karachi',
    isPrimary: false
  }
];

export const INITIAL_SERVICES: ServiceItem[] = [
  // Haircuts & Styling
  {
    id: 'srv-cut-1',
    name: 'Master Precision Cut & Signature Blowout',
    category: 'haircuts',
    duration: '60 mins',
    startingPricePKR: 8500,
    description: 'Bespoke face-contouring haircut tailored to hair density and texture, finished with an Italian ceramic round-brush blowout.',
    inclusions: ['Aromatherapy wash & scalp massage', 'Custom haircut & texturizing', 'Thermal protection & bounce finish'],
    popular: true,
    tag: 'Signature'
  },
  {
    id: 'srv-cut-2',
    name: 'Couture Red Carpet Styling & Soft Waves',
    category: 'haircuts',
    duration: '45 mins',
    startingPricePKR: 6500,
    description: 'Hollywood vintage waves, textured messy updos, or sleek glass blowouts tailored for evening galas and celebrations.',
    inclusions: ['Texture prep & root boost', 'Curling wand / silk flat iron work', 'All-day flexible humidity shield'],
    popular: false
  },

  // Hair Color & Balayage
  {
    id: 'srv-color-1',
    name: 'Custom Dimensional Balayage & Glossing',
    category: 'color',
    duration: '180 mins',
    startingPricePKR: 28000,
    description: 'Hand-painted sun-kissed ribbons blending naturally from your base, sealed with an Italian luminous gloss toner.',
    inclusions: ['Colorist consultation', 'Freehand foilayage placement', 'Bond-building restorative rinse', 'Tone seal & blowout'],
    popular: true,
    tag: 'Most Loved'
  },
  {
    id: 'srv-color-2',
    name: 'Rich Global Color & Root Melt',
    category: 'color',
    duration: '120 mins',
    startingPricePKR: 16500,
    description: 'Uniform multi-dimensional brunette, espresso, copper, or mocha tones with 100% seamless grey coverage and mirror shine.',
    inclusions: ['Scalp barrier protection', 'Precision color application', 'Hydrating color-lock mask'],
    popular: false
  },

  // Hair Treatments
  {
    id: 'srv-treat-1',
    name: 'Organic Keratin Silk Infusion',
    category: 'treatments',
    duration: '150 mins',
    startingPricePKR: 24000,
    description: 'Formaldehyde-free organic smoothing treatment that eliminates humidity frizz and cuts daily blow-dry time in half.',
    inclusions: ['Clarifying wash', 'Nano-keratin thermal infusion', 'Moisture sealing rinse', 'Aftercare guidance'],
    popular: true,
    tag: 'Frizz-Free'
  },
  {
    id: 'srv-treat-2',
    name: 'Molecular Bond Reconstruction Therapy',
    category: 'treatments',
    duration: '60 mins',
    startingPricePKR: 11500,
    description: 'Intense reconstructive treatment repairing broken disulfide bonds from heat, chemical color, and environmental stress.',
    inclusions: ['Bond rebuilding solution', 'Deep moisture cream mask', 'Acupressure scalp stimulation'],
    popular: false
  },

  // Bridal & Occasion Makeup
  {
    id: 'srv-bridal-1',
    name: 'Signature Royal Bridal Artistry',
    category: 'bridal',
    duration: '180 mins',
    startingPricePKR: 65000,
    description: 'Bespoke high-definition bridal transformation with custom skin prep, flawless eye architecture, and secure jewelry & dupatta setting.',
    inclusions: ['Radiance ampoule skin prep', 'Custom mink lashes', 'Dupatta setting & jewelry pinning', 'Bridal emergency touch-up kit'],
    popular: true,
    tag: 'Bridal Suite'
  },
  {
    id: 'srv-bridal-2',
    name: 'Luminous Dewy Reception & Nikkah Glam',
    category: 'bridal',
    duration: '120 mins',
    startingPricePKR: 45000,
    description: 'Ethereal, breathable glass skin, champagne rose highlights, romantic hair chignon or waves, and delicate veil draping.',
    inclusions: ['Hydra-glow priming', 'Feathered lashes', 'Hair styling & veil placement', 'Longwear setting lock'],
    popular: false
  },

  // Facials & Skincare
  {
    id: 'srv-skin-1',
    name: '24K Cellular Radiance & Lift Facial',
    category: 'skincare',
    duration: '80 mins',
    startingPricePKR: 22500,
    description: 'Restorative luxury facial using cosmetic micro-gold foil, peptide infusion, and gentle lymphatic sculpting.',
    inclusions: ['Enzyme double cleanse', '24K gold foil application', 'Ultrasound serum infusion', 'Cryo cooling globe massage'],
    popular: true,
    tag: 'Glow Specialist'
  },
  {
    id: 'srv-skin-2',
    name: 'Hydra-Infusion Deep Cleanse & Vortex Glow',
    category: 'skincare',
    duration: '60 mins',
    startingPricePKR: 17500,
    description: 'Gentle diamond micro-dermabrasion paired with suction vortex extraction and multi-molecular hyaluronic hydration.',
    inclusions: ['Pore extraction & peel prep', 'Hyaluronic acid vortex bath', 'LED soothing light therapy'],
    popular: false
  },

  // Nails & Beauty
  {
    id: 'srv-nails-1',
    name: 'Haute Russian Structured Gel Manicure',
    category: 'nails',
    duration: '75 mins',
    startingPricePKR: 9500,
    description: 'Meticulous dry e-file diamond bit cuticle work finished with structured rubber-base strengthening and high-gloss gel.',
    inclusions: ['Apex architecture sculpting', 'Precision e-file cuticle detailing', 'High-shine chip-resistant gel polish'],
    popular: false
  },
  {
    id: 'srv-nails-2',
    name: 'Restorative Botanical Pedicure Sanctuary',
    category: 'nails',
    duration: '60 mins',
    startingPricePKR: 11000,
    description: 'Warm milk and rose petal foot soak, gentle brown sugar exfoliation, hot basalt stones massage, and nail care.',
    inclusions: ['Herb-infused foot soak', 'Dead skin smoothing & buffing', 'Warm volcanic stone foot massage', 'Color coating'],
    popular: false
  },

  // Men's Grooming & Barbershop
  {
    id: 'srv-groom-1',
    name: 'Executive Precision Haircut & Beard Sculpting',
    category: 'grooming',
    duration: '60 mins',
    startingPricePKR: 6500,
    description: 'Tailored fade or classic scissor taper, hot lather neck shave, and razor-sharp beard line sculpting with organic oil massage.',
    inclusions: ['Consultation & perimeter cutting', 'Hot foam straight razor detail', 'Beard wash & argan oil treatment', 'Matte finish pomade'],
    popular: true,
    tag: 'Gentlemen'
  },
  {
    id: 'srv-groom-2',
    name: 'Traditional Hot Towel Straight Razor Shave',
    category: 'grooming',
    duration: '45 mins',
    startingPricePKR: 4500,
    description: 'Steamed lavender towels, pre-shave sandalwood essential oils, rich warm foam lather, and double-pass straight razor finish.',
    inclusions: ['3 Steamed towel applications', 'Pre-shave essential oils', 'Cold towel pore tightening', 'Cooling aftershave balm'],
    popular: false
  }
];

// AUTHENTIC SALON-SPECIFIC GALLERY IMAGES
// Real in-salon hair coloring, bridal artistry, barbering, skincare, and interior
export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Dimensional Honey Balayage & Silk Waves',
    category: 'color',
    categoryLabel: 'Color & Balayage',
    image: '/images/balayage.jpg',
    description: 'Hand-painted warm caramel and honey dimension ribbons blended seamlessly from a soft espresso root melt.',
    stylingNotes: ['Foilayage Ribbon Technique', 'Italian Acidic Gloss Toner', 'Zero Harsh Demarcation']
  },
  {
    id: 'gal-2',
    title: 'Heritage Royal Bridal Artistry & Jewelry Setting',
    category: 'bridal',
    categoryLabel: 'Bridal Artistry',
    image: '/images/bridal.jpg',
    description: 'Sculpted winged liner, velvet crimson lips, and reinforced antique Kundan jewelry anchoring for Baraat celebrations.',
    stylingNotes: ['Longwear HD Base', 'Custom Mink Lashes', 'Dupatta Anchor Pinning']
  },
  {
    id: 'gal-3',
    title: 'Executive Barber Fade & Beard Sculpting',
    category: 'grooming',
    categoryLabel: "Men's Grooming",
    image: '/images/barber.jpg',
    description: 'Precision low fade with razor-sculpted cheek lines, hot towel preparation, and sandalwood beard oil finish.',
    stylingNotes: ['Straight Razor Detailing', 'Hot Towel Steam', 'Matte Clay Hold']
  },
  {
    id: 'gal-4',
    title: '24K Cellular Radiance Facial & Gold Leaf Care',
    category: 'skincare',
    categoryLabel: 'Facials & Skincare',
    image: '/images/skincare.jpg',
    description: 'Medical aesthetician applying pure cosmetic 24K gold foil and ultrasound peptide hydration in treatment suite.',
    stylingNotes: ['Pure 24K Gold Foil', 'Lymphatic Drainage', 'Barrier Repair']
  },
  {
    id: 'gal-5',
    title: 'Atelier Interior & Backlit Styling Vanities',
    category: 'interior',
    categoryLabel: 'Salon Interior',
    image: '/images/interior.jpg',
    description: 'Warm ivory vanity spaces, champagne gold brass arched mirrors, and private consultation dressing chambers.',
    stylingNotes: ['Glare-Free Ring Lighting', 'Ergonomic Hydraulic Chairs', 'Acoustic Calm']
  },
  {
    id: 'gal-6',
    title: 'Signature Salon Styling & Consultation',
    category: 'hair',
    categoryLabel: 'Haircuts & Styling',
    image: '/images/hero.jpg',
    description: 'Face-framing silk blowout waves following a personalized hair health and density consultation.',
    stylingNotes: ['Face Contour Mapping', 'Thermal Ceramic Silk Press', 'Weightless Hold']
  }
];

export const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-demo-1',
    clientName: 'Ayesha K.',
    occasionOrService: 'Custom Balayage & Glossing',
    quote: 'The consultation was so thorough. Instead of guessing, the colorist analyzed my skin tone and suggested the perfect warm caramel ribbons. The finish felt healthier than when I arrived.',
    rating: 5,
    location: 'Gulberg Atelier, Lahore',
    isDemoSample: true
  },
  {
    id: 'test-demo-2',
    clientName: 'Zainab M.',
    occasionOrService: 'Bespoke Bridal Suite',
    quote: 'Having a private suite on my wedding morning made all the difference. Zero chaos, calm lighting, and the makeup stayed completely intact through twelve hours of celebration.',
    rating: 5,
    location: 'Blue Area Suite, Islamabad',
    isDemoSample: true
  },
  {
    id: 'test-demo-3',
    clientName: 'Hamza S.',
    occasionOrService: 'Executive Haircut & Beard Sculpt',
    quote: 'Precision work and great attention to detail. The hot towel straight razor shave is genuinely relaxing. Easily the most professional grooming experience in the city.',
    rating: 5,
    location: 'Clifton Atelier, Karachi',
    isDemoSample: true
  }
];

export function formatPKR(amount: number): string {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0
  }).format(amount).replace('PKR', 'PKR ');
}

// Local Storage Sync Keys
const STORAGE_KEYS = {
  CONFIG: 'lumiere_config_v3',
  SERVICES: 'lumiere_services_v3',
  BRANCHES: 'lumiere_branches_v3'
};

export function getStoredConfig(): SalonConfiguration {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CONFIG);
    if (raw) return { ...DEFAULT_SALON_CONFIG, ...JSON.parse(raw) };
  } catch (e) {
    console.error('Failed reading salon config', e);
  }
  return DEFAULT_SALON_CONFIG;
}

export function saveStoredConfig(config: SalonConfiguration): void {
  try {
    localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(config));
  } catch (e) {
    console.error('Failed saving salon config', e);
  }
}

export function getStoredServices(): ServiceItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SERVICES);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed reading services', e);
  }
  return INITIAL_SERVICES;
}

export function saveStoredServices(services: ServiceItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
  } catch (e) {
    console.error('Failed saving services', e);
  }
}

export function getStoredBranches(): SalonBranch[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BRANCHES);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed reading branches', e);
  }
  return INITIAL_BRANCHES;
}

export function saveStoredBranches(branches: SalonBranch[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.BRANCHES, JSON.stringify(branches));
  } catch (e) {
    console.error('Failed saving branches', e);
  }
}

export function resetToDefaults(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.CONFIG);
    localStorage.removeItem(STORAGE_KEYS.SERVICES);
    localStorage.removeItem(STORAGE_KEYS.BRANCHES);
  } catch (e) {
    console.error('Failed resetting storage', e);
  }
}
