import React from 'react';
import { ArrowUp, Sparkles, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { SalonConfiguration } from '../types';

interface FooterProps {
  config: SalonConfiguration;
  onScrollTo: (sectionId: string) => void;
  onOpenCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onScrollTo,
  onOpenCustomizer,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1412] text-[#FAF7F2] border-t border-[#C5A880]/30 pt-16 pb-12 font-sans relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C5A880]/20 text-left">
          
          {/* Col 1: Brand & Statement */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-3xl tracking-[0.2em] text-[#FAF7F2] font-semibold uppercase block">
                {config.businessName}
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#C5A880] uppercase block">
                {config.tagline}
              </span>
            </div>

            <p className="font-serif italic text-sm text-[#DFCCA8]">
              "{config.subheadline}"
            </p>

            <p className="text-xs text-[#DFCCA8]/75 leading-relaxed max-w-sm">
              Personalized hair artistry, restorative skincare treatments, occasion glamour, and modern grooming crafted around your signature style.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenCustomizer}
                className="text-xs font-semibold px-3 py-1.5 bg-[#2D231E] border border-[#C5A880]/40 text-[#E2CCA6] rounded-sm hover:border-[#C5A880] transition-colors cursor-pointer"
              >
                Personalize Demo Settings
              </button>
            </div>
          </div>

          {/* Col 2: Studio Information */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-bold block">
              Flagship Atelier
            </span>

            <div className="space-y-2.5 text-xs text-[#DFCCA8]/80 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{config.contact.address}, {config.contact.city}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{config.contact.primaryPhone}</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {config.contact.whatsappNumber}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{config.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-bold block">
              Navigation
            </span>

            <ul className="space-y-2 text-xs text-[#DFCCA8]/80">
              <li>
                <button
                  onClick={() => onScrollTo('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('work')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Work & Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('why-us')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About the Salon
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('enquiry')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Locations & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Hours & Notes */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-bold block">
              Opening Hours
            </span>

            <div className="text-xs text-[#DFCCA8]/80 space-y-1.5 leading-relaxed">
              <p className="font-semibold text-white">Tuesday – Saturday:</p>
              <p className="text-[11px] text-[#C5A880]">10:30 AM – 8:30 PM</p>

              <div className="pt-1.5">
                <p className="font-semibold text-white">Sunday:</p>
                <p className="text-[11px] text-[#C5A880]">11:00 AM – 7:30 PM</p>
              </div>

              <div className="pt-1.5">
                <p className="text-[10px] text-[#DFCCA8]/60 italic">
                  Mondays reserved for private bridal suites & masterclasses.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#DFCCA8]/60 font-sans text-left">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} {config.businessName}. All rights reserved.
            </p>
            <p className="text-[10px] text-[#DFCCA8]/40">
              Agency Portfolio Demo Template for Salons & Barbershops • Netlify-Compatible SPA Architecture.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2D231E] hover:bg-[#3C2F29] text-[#E2CCA6] rounded text-xs transition-colors cursor-pointer"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C5A880]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
