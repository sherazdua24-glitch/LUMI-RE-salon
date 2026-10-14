export type SalonPreset = 'womens-bridal' | 'unisex-hair' | 'mens-barbershop';

export type ServiceCategory = 
  | 'haircuts'
  | 'color'
  | 'treatments'
  | 'bridal'
  | 'skincare'
  | 'nails'
  | 'grooming';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  duration: string;
  startingPricePKR: number;
  description: string;
  inclusions: string[];
  popular?: boolean;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'color' | 'bridal' | 'grooming' | 'interior';
  categoryLabel: string;
  image: string;
  description: string;
  stylingNotes: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  occasionOrService: string;
  quote: string;
  rating: number;
  location: string;
  isDemoSample: true;
}

export interface SalonBranch {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  hours: string;
  mapQuery: string;
  isPrimary?: boolean;
}

export interface AppointmentEnquiry {
  id: string;
  referenceNumber: string;
  clientName: string;
  phone: string;
  email?: string;
  branchName: string;
  preferredDate: string;
  preferredTime: string;
  selectedServices: string[];
  notes?: string;
  estimatedTotalPKR: number;
  createdAt: string;
}

export interface SalonConfiguration {
  preset: SalonPreset;
  businessName: string;
  tagline: string;
  subheadline: string;
  currency: string;
  contact: {
    primaryPhone: string;
    whatsappNumber: string;
    email: string;
    address: string;
    city: string;
    hoursWeekday: string;
    hoursWeekend: string;
    instagramUrl: string;
    googleMapsUrl: string;
  };
}
