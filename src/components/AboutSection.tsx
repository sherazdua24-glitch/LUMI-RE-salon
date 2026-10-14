import React from 'react';
import { Sparkles, HeartHandshake, Scissors, ArrowRight, ShieldCheck } from 'lucide-react';
import { SalonConfiguration } from '../types';

interface AboutSectionProps {
  config: SalonConfiguration;
  onBookAppointment: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config, onBookAppointment }) => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#F5EFEB] border-b border-[#C5A880]/20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing Frame */}
              <div className="absolute -inset-3 border border-[#C5A880]/40 rounded-sm pointer-events-none transform -translate-x-2 -translate-y-2 hidden sm:block"></div>

              {/* Main Photo: Salon Interior / Consultation in Action */}
              <div className="relative overflow-hidden rounded-sm shadow-xl bg-[#1A1412] aspect-[4/5] border border-[#C5A880]/30">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=85"
                  alt={`Atmosphere and interior of ${config.businessName}`}
                  className="w-full h-full object-cover object-center filter brightness-[0.97]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#C5A880] block font-semibold mb-1">
                    The Atelier Space
                  </span>
                  <p className="font-serif italic text-base leading-snug">
                    "A space where time slows down, and every detail centers on your comfort."
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Brand Story & Approach */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.3em] text-[#9E7D4E] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>About {config.businessName}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1412] font-normal tracking-tight leading-[1.15]">
              Built Around the Belief that <br />
              <span className="italic text-[#A68656]">Great Style is Personal</span>
            </h2>

            <div className="w-16 h-[1.5px] bg-[#C5A880]"></div>

            <div className="space-y-4 text-xs sm:text-sm text-[#453730] font-sans leading-relaxed">
              <p>
                Founded on the principle that beauty and grooming should never be rushed or mass-produced, 
                <strong> {config.businessName}</strong> was created to offer an unhurried, collaborative studio experience. 
                Whether you are refining your signature haircut, embarking on a transformative balayage color journey, or preparing for your wedding celebrations, our stylists listen first.
              </p>
              <p>
                We blend European precision cutting and balayage techniques with celebrated South Asian occasion elegance and modern barbering craftsmanship. 
                Our focus is always on the health of your hair, the radiance of your skin, and styling you can recreate with ease at home.
              </p>
            </div>

            {/* Customization Note for Prospects */}
            <div className="p-4 bg-[#FAF7F2] border border-[#C5A880]/30 rounded-sm text-xs text-[#524138] space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-[#1A1412]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A68656]" />
                <span>Demo Storyboard Placeholder</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                When onboarding your salon, this section is customized with your founder's story, years of heritage, training philosophy, and brand photography.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onBookAppointment}
                className="px-6 py-3.5 bg-[#1A1412] hover:bg-[#2D231E] text-[#FAF7F2] text-xs font-bold tracking-[0.2em] uppercase rounded-sm border border-[#C5A880]/60 flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Experience the Studio</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
