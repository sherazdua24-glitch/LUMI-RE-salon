import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ExternalLink, Mail, Instagram, ShieldCheck } from 'lucide-react';
import { SalonBranch, SalonConfiguration } from '../types';

interface LocationsAndContactSectionProps {
  branches: SalonBranch[];
  config: SalonConfiguration;
  onOpenCustomizer: () => void;
}

export const LocationsAndContactSection: React.FC<LocationsAndContactSectionProps> = ({
  branches,
  config,
  onOpenCustomizer,
}) => {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#C5A880]/20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.3em] text-[#9E7D4E] font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Studio Locations & Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1412] font-normal tracking-tight">
            Visit Our <span className="italic text-[#A68656]">Ateliers</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mt-4"></div>
          <p className="text-xs sm:text-sm text-[#453730] font-sans">
            Welcoming clients for hair styling, color consultations, bridal bookings, and grooming experiences.
          </p>

          <div className="pt-1">
            <button
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5EFEB] border border-[#C5A880]/40 rounded text-xs text-[#1A1412] hover:bg-[#EFE8DE] transition-colors cursor-pointer"
            >
              <span>Demo Info Shown • Click to Customize for Your Salon</span>
            </button>
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {branches.map((b) => {
            const cleanPhone = b.phone.replace(/[^0-9+]/g, '');
            const cleanWA = b.whatsapp.replace(/[^0-9]/g, '');

            return (
              <div
                key={b.id}
                className="bg-[#FDFBF7] p-7 rounded-sm border border-[#C5A880]/30 hover:border-[#C5A880] hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left relative"
              >
                {b.isPrimary && (
                  <div className="absolute top-4 right-4 text-[9px] font-sans font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#1A1412] text-[#E2CCA6]">
                    Main Studio
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-bold text-[#9E7D4E] block">
                      {b.city} Location
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-[#1A1412] mt-1 leading-snug">
                      {b.name}
                    </h3>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2.5 text-xs font-sans text-[#524138] leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#A68656] shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-2.5 text-xs font-sans text-[#524138] leading-relaxed">
                    <Clock className="w-4 h-4 text-[#A68656] shrink-0 mt-0.5" />
                    <span>{b.hours}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-[#C5A880]/20 space-y-2 mt-6">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${cleanPhone}`}
                      className="py-2 px-3 rounded-sm text-xs font-sans font-medium flex items-center justify-center gap-1.5 bg-[#F5EFEB] text-[#1A1412] border border-[#C5A880]/30 hover:bg-[#EFE8DE] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Call</span>
                    </a>

                    <a
                      href={`https://wa.me/${cleanWA}?text=${encodeURIComponent(`Hello ${config.businessName} (${b.name}), I would like to inquire about an appointment.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-sm text-xs font-sans font-medium flex items-center justify-center gap-1.5 bg-[#1A1412] text-[#E2CCA6] hover:bg-[#2D231E] transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(b.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1.5 text-[11px] font-sans flex items-center justify-center gap-1 text-[#786154] hover:text-[#1A1412] underline transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Central Concierge Desk Banner */}
        <div className="bg-[#1A1412] text-[#FAF7F2] p-8 rounded-sm border border-[#C5A880]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C5A880]">
              Direct Inquiries
            </span>
            <h4 className="font-serif text-2xl text-white">
              Have Questions or Special Bridal Requirements?
            </h4>
            <p className="text-xs text-[#DFCCA8] font-sans max-w-xl">
              Reach our concierge desk directly for private buyout suites, bridal party bookings, or bespoke styling masterclasses.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${config.contact.email}`}
              className="px-4 py-2.5 bg-[#2D231E] border border-[#C5A880]/60 text-[#E2CCA6] rounded-sm text-xs font-sans font-medium hover:bg-[#3C2F29] flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{config.contact.email}</span>
            </a>
            <a
              href={`tel:${config.contact.primaryPhone.replace(/[^0-9+]/g, '')}`}
              className="px-4 py-2.5 bg-gradient-to-r from-[#DFCCA8] to-[#C5A880] text-[#1A1412] font-bold rounded-sm text-xs font-sans tracking-wider uppercase hover:shadow"
            >
              Call {config.contact.primaryPhone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
