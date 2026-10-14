import React from 'react';
import { Sparkles, MessageCircle, Scissors, Armchair, Sliders, CalendarCheck, ShieldCheck } from 'lucide-react';
import { SalonConfiguration } from '../types';

interface WhyChooseUsProps {
  config: SalonConfiguration;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ config }) => {
  const pillars = [
    {
      icon: MessageCircle,
      title: 'Personalized Consultations',
      description: 'Every appointment begins with an unhurried consultation to understand your skin profile, hair texture, and signature style preferences.'
    },
    {
      icon: Scissors,
      title: 'Skilled Styling & Precision Craft',
      description: 'From multidimensional balayage to precision scissor fades, our team focuses on healthy hair integrity, clean symmetry, and effortless maintenance.'
    },
    {
      icon: Armchair,
      title: 'Clean, Comfortable Surroundings',
      description: 'Designed as a serene sanctuary with warm lighting, acoustic calm, and strict sanitation standards across all styling stations and vanity suites.'
    },
    {
      icon: Sliders,
      title: 'Services Tailored to You',
      description: 'Customized treatment formulas, bespoke bridal schedules, and grooming packages configured to fit your exact event calendar and personal lifestyle.'
    },
    {
      icon: CalendarCheck,
      title: 'Convenient Enquiries & WhatsApp Dispatch',
      description: 'Transparent illustrative pricing, simple slot selection, and direct WhatsApp concierge communication to confirm dates without friction.'
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#C5A880]/20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.3em] text-[#9E7D4E] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>The Salon Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1412] font-normal tracking-tight">
            Why Clients Trust <span className="italic text-[#A68656]">{config.businessName}</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mt-4"></div>
          <p className="text-xs sm:text-sm text-[#453730] font-sans">
            Thoughtful service, uncompromised hygiene, and personal attention designed to make you look and feel your absolute best.
          </p>
        </div>

        {/* 5 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#FDFBF7] p-7 rounded-sm border border-[#C5A880]/30 hover:border-[#C5A880] transition-all duration-300 hover:shadow-lg text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#1A1412] flex items-center justify-center mb-5 text-[#E2CCA6]">
                    <Icon className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#1A1412] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#524138] font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#C5A880]/15 flex items-center gap-1.5 text-[11px] font-sans text-[#A68656] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Client-First Experience</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Custom Demo Note for Agency Clients */}
          <div className="bg-[#1A1412] text-[#FAF7F2] p-7 rounded-sm border border-[#C5A880] shadow-xl text-left flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#C5A880] font-bold block">
                Agency Customization Note
              </span>
              <h3 className="font-serif text-2xl text-white">
                Ready to Personalize for Your Business
              </h3>
              <p className="text-xs text-[#DFCCA8] font-sans leading-relaxed">
                These value pillars can be adapted with your salon's exact specialties—whether you specialize in blonde transformations, luxury bridal packages, or gentlemen's fades.
              </p>
            </div>

            <div className="pt-4 border-t border-[#C5A880]/30 text-[11px] text-[#DFCCA8]/75 font-sans">
              Configurable in seconds via our studio data settings.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
