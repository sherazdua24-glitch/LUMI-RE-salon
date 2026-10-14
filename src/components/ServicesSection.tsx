import React, { useState } from 'react';
import { Sparkles, Clock, Check, Plus, Search, MessageSquare, AlertCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { ServiceItem, ServiceCategory, SalonConfiguration } from '../types';
import { formatPKR } from '../config/salonConfig';

interface ServicesSectionProps {
  services: ServiceItem[];
  config: SalonConfiguration;
  selectedServiceIds: string[];
  onToggleService: (serviceId: string) => void;
  onOpenEnquiry: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  config,
  selectedServiceIds,
  onToggleService,
  onOpenEnquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: ServiceCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'All Services' },
    { key: 'haircuts', label: 'Haircuts & Styling' },
    { key: 'color', label: 'Color & Balayage' },
    { key: 'treatments', label: 'Hair Treatments' },
    { key: 'bridal', label: 'Bridal & Occasion' },
    { key: 'skincare', label: 'Facials & Skincare' },
    { key: 'nails', label: 'Nails & Beauty' },
    { key: 'grooming', label: "Men's Grooming" },
  ];

  const filteredServices = services.filter((srv) => {
    const matchesCat = activeCategory === 'all' || srv.category === activeCategory;
    const matchesSearch =
      srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const cleanPhone = config.contact.whatsappNumber.replace(/[^0-9]/g, '');

  const getWhatsAppServiceLink = (srv: ServiceItem) => {
    const text = encodeURIComponent(
      `Hello ${config.businessName}, I would like to inquire about booking the "${srv.name}" (Starting from ${formatPKR(srv.startingPricePKR)}). Could you please share slot availability?`
    );
    return `https://wa.me/${cleanPhone}?text=${text}`;
  };

  const handleSelectAndScroll = (serviceId: string) => {
    if (!selectedServiceIds.includes(serviceId)) {
      onToggleService(serviceId);
    }
    onOpenEnquiry();
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FAF7F2] border-b border-[#C5A880]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.3em] text-[#9E7D4E] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Service Menu & Pricing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1412] font-normal tracking-tight">
            Curated Services & <span className="italic text-[#A68656]">Pricing</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mt-3"></div>
          <p className="text-xs sm:text-sm text-[#453730] font-sans">
            Personalized consultations before every service. Sample rates are illustrative demo prices for {config.businessName}.
          </p>
        </div>

        {/* Filter Navigation & Search Bar — Horizontal Scrollable on Mobile for Easy Scanning */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-8 pb-4 border-b border-[#C5A880]/20">
          
          {/* Category Tabs: Smooth Horizontal Scroll on Mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-sm text-xs font-sans font-medium tracking-wider uppercase transition-all duration-200 shrink-0 cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-[#1A1412] text-[#E2CCA6] shadow-xs'
                    : 'bg-[#F5EFEB] text-[#524138] hover:bg-[#EFE8DE] hover:text-[#1A1412]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-[#A68656] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#FDFBF7] border border-[#C5A880]/40 rounded-sm text-xs text-[#1A1412] placeholder-[#786154] focus:outline-none focus:border-[#A68656]"
            />
          </div>
        </div>

        {/* Services Cards Grid — Reduced Repetition, Clear Price & Clear Booking Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => {
            const isSelected = selectedServiceIds.includes(service.id);

            return (
              <div
                key={service.id}
                className={`bg-[#FDFBF7] rounded-sm border p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 relative text-left ${
                  isSelected
                    ? 'border-[#9E7D4E] ring-1 ring-[#9E7D4E] shadow-md bg-[#FAF7F2]'
                    : 'border-[#C5A880]/30 hover:border-[#C5A880] hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Category & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#A68656] font-semibold">
                      {service.category}
                    </span>

                    <div className="flex items-center gap-1 text-[11px] font-sans text-[#786154]">
                      <Clock className="w-3 h-3 text-[#C5A880]" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1A1412] mb-2 leading-snug">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#524138] font-sans leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Clean Inclusions */}
                  <div className="space-y-1 mb-5 pt-2 border-t border-[#C5A880]/15">
                    {service.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#453730]">
                        <Check className="w-3 h-3 text-[#A68656] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & Booking Action */}
                <div className="pt-3 border-t border-[#C5A880]/20 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#786154] font-sans">
                      Starting From
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#1A1412]">
                      {formatPKR(service.startingPricePKR)}
                    </span>
                  </div>

                  {/* Clear Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onToggleService(service.id)}
                      className={`w-full py-2 px-2 rounded-sm text-xs font-sans font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#1A1412] text-[#E2CCA6] shadow-xs'
                          : 'bg-[#F3ECE2] text-[#2A201C] hover:bg-[#E2CCA6]/40 border border-[#C5A880]/30'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                          <span>Selected</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-[#A68656]" />
                          <span>Select Service</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getWhatsAppServiceLink(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-2 rounded-sm text-xs font-sans font-medium tracking-wider text-[#2A201C] bg-[#FAF7F2] border border-[#C5A880]/40 hover:bg-[#EFE8DE] flex items-center justify-center gap-1.5 transition-colors text-center"
                      title="Enquire directly on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Selected Services Banner */}
        {selectedServiceIds.length > 0 && (
          <div className="mt-10 p-4 sm:p-5 bg-[#1A1412] text-[#FAF7F2] rounded-sm border border-[#C5A880] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-4 h-4 text-[#C5A880]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#E2CCA6]">Ready to Schedule</p>
                <p className="font-serif text-base sm:text-lg text-white">
                  {selectedServiceIds.length} service{selectedServiceIds.length > 1 ? 's' : ''} ready for booking enquiry
                </p>
              </div>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#DFCCA8] to-[#C5A880] text-[#1A1412] text-xs font-bold tracking-widest uppercase rounded-sm hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Continue to Schedule</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
