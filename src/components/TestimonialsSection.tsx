import React from 'react';
import { Star, MessageSquareQuote, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { TestimonialItem, SalonConfiguration } from '../types';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
  config: SalonConfiguration;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  config,
}) => {
  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#C5A880]/20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header with Clear Transparency Label */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1412] text-[#E2CCA6] text-[11px] font-sans font-semibold tracking-wider uppercase border border-[#C5A880]">
            <ShieldAlert className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Illustrative Client Showcase (Demo Placeholders)</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1412] font-normal tracking-tight">
            Client Experiences & <span className="italic text-[#A68656]">Stories</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mt-4"></div>

          {/* Transparent Editorial Disclaimer */}
          <div className="mt-4 p-4 bg-[#F5EFEB] border border-[#C5A880]/40 rounded-sm text-xs text-[#453730] font-sans text-left sm:text-center space-y-1">
            <p className="font-semibold text-[#1A1412] flex items-center justify-center gap-1.5">
              <span>Review Authenticity Commitment:</span>
            </p>
            <p className="text-[11px] text-[#524138] leading-relaxed max-w-2xl mx-auto">
              Per strict professional design standards, we do not fabricate real customer reviews or fake Google star statistics. 
              The cards below illustrate how your verified client testimonials, wedding features, and Google Business feedback will appear once your website is personalized.
            </p>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#FDFBF7] rounded-sm p-6 sm:p-7 border border-[#C5A880]/30 hover:border-[#C5A880] transition-all duration-300 hover:shadow-lg flex flex-col justify-between relative text-left"
            >
              {/* Demo Sample Badge */}
              <div className="absolute top-3.5 right-3.5 text-[9px] font-sans font-bold tracking-widest uppercase px-2 py-0.5 bg-[#F5EFEB] text-[#786154] border border-[#C5A880]/20 rounded">
                Sample Layout
              </div>

              <div>
                {/* 5-Star Visual Placeholder */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
                  ))}
                  <span className="text-[10px] text-[#786154] font-sans ml-1">Sample Rating</span>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <MessageSquareQuote className="w-8 h-8 text-[#E2CCA6]/35 absolute -top-3 -left-2 z-0" />
                  <p className="text-xs text-[#3C2F29] font-sans italic leading-relaxed relative z-10 pl-2">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Author Meta */}
              <div className="pt-4 border-t border-[#C5A880]/20 space-y-0.5">
                <div className="font-serif text-lg font-semibold text-[#1A1412]">
                  {item.clientName}
                </div>
                <div className="text-[11px] font-sans font-medium text-[#9E7D4E]">
                  {item.occasionOrService}
                </div>
                <div className="text-[10px] font-sans text-[#786154]">
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Feedback Integration Note for Prospects */}
        <div className="mt-12 p-4 bg-[#F5EFEB] rounded-sm border border-[#C5A880]/30 text-center max-w-xl mx-auto text-xs text-[#524138]">
          <p>
            <strong>Pro Feature:</strong> When launching your salon site, we can integrate live Google Reviews or your Instagram bridal mentions directly into this section.
          </p>
        </div>

      </div>
    </section>
  );
};
