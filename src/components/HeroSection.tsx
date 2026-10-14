import React from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { SalonConfiguration } from '../types';

interface HeroSectionProps {
  config: SalonConfiguration;
  onBookAppointment: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  config,
  onBookAppointment,
  onExploreServices,
}) => {
  const cleanPhone = config.contact.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <section id="hero" className="relative flex items-center bg-[#FAF7F2] overflow-hidden pt-4 pb-12 sm:py-14 lg:py-20 border-b border-[#C5A880]/20">
      {/* Subtle ambient luxury lightings */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#E2CCA6]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#C5A880]/10 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1412] text-[#E2CCA6] text-[10px] sm:text-[11px] font-sans tracking-[0.2em] uppercase border border-[#C5A880]/40 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#C5A880]" />
              <span>{config.tagline}</span>
            </div>

            {/* Main Headline — High Contrast & Balanced for Mobile */}
            <h1 className="font-serif text-3xl sm:text-5xl xl:text-6xl font-normal tracking-tight text-[#1A1412] leading-[1.12]">
              Great Hair. <br className="hidden sm:inline" />
              <span className="italic font-serif text-[#A68656]">Beautiful Skin.</span> <br />
              Your Signature Style.
            </h1>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-sm lg:text-base text-[#453730] font-sans font-normal leading-relaxed max-w-xl">
              {config.subheadline} From dimensional balayage and precision cuts to restorative skincare and bespoke occasion styling, every appointment is crafted around you.
            </p>

            {/* Mobile-Friendly CTAs — Immediately visible on mobile */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-4 font-sans">
              <button
                onClick={onBookAppointment}
                className="px-5 sm:px-8 py-3 bg-[#1A1412] hover:bg-[#2D231E] text-[#FAF7F2] text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase rounded-sm border border-[#C5A880]/60 hover:border-[#C5A880] shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onExploreServices}
                className="px-4 sm:px-6 py-3 bg-[#F5EFEB] hover:bg-[#EFE8DE] text-[#1A1412] text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase rounded-sm border border-[#C5A880]/40 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A68656]" />
              </button>

              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hello ${config.businessName}, I would like to inquire about booking availability.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center gap-1.5 px-3.5 py-3 rounded-sm bg-[#FAF7F2] border border-[#25D366]/40 text-[11px] font-sans text-[#1A1412]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Truthful Trust Indicators */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 border-t border-[#C5A880]/20 text-[11px] sm:text-xs text-[#524138]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A68656] shrink-0" />
                <span>Bespoke 1-on-1 Consults</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A68656] shrink-0" />
                <span>Sterile & Serene Suites</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A68656] shrink-0" />
                <span>Direct WhatsApp Booking</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Visual Impact Photography */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Refined Gold Border Accent */}
              <div className="absolute -inset-2.5 border border-[#C5A880]/40 rounded-sm pointer-events-none transform translate-x-2 translate-y-2 hidden sm:block"></div>

              {/* High Visual Impact Photograph */}
              <div className="relative overflow-hidden rounded-sm shadow-xl bg-[#1A1412] aspect-[4/5] sm:aspect-[4/5] border border-[#C5A880]/30">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
                  alt="High fashion hair styling and beauty artistry at Lumière Studio"
                  className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02] hover:scale-104 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Overlaid Studio Label */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 bg-[#FAF7F2]/95 backdrop-blur-md rounded-sm border border-[#C5A880]/40 text-left shadow-lg">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-sans uppercase tracking-widest text-[#9E7D4E] pb-1 border-b border-[#C5A880]/20">
                    <span>Haute Coiffure & Aesthetics</span>
                    <span className="font-serif italic font-bold">Atelier Demo</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#2A201C] font-serif italic pt-1 leading-snug">
                    "Crafted with unhurried care, sterile standards, and attention to detail."
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-sans tracking-wider uppercase text-[#786154] pt-0.5 truncate">
                    {config.contact.address}, {config.contact.city}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
