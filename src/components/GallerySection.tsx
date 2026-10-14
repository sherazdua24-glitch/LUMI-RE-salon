import React, { useState } from 'react';
import { Sparkles, Eye, X, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  items: GalleryItem[];
  onSelectServiceCategory: (category: string) => void;
  onOpenEnquiry: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  items,
  onSelectServiceCategory,
  onOpenEnquiry,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { key: 'all', label: 'All Portfolio' },
    { key: 'color', label: 'Color & Balayage' },
    { key: 'hair', label: 'Haircuts & Styling' },
    { key: 'bridal', label: 'Bridal Artistry' },
    { key: 'grooming', label: "Men's Grooming" },
    { key: 'interior', label: 'Salon Interior' },
  ];

  const filteredItems = items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="work" className="py-20 lg:py-24 bg-[#F5EFEB] border-b border-[#C5A880]/20">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.3em] text-[#9E7D4E] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Our Work & Transformations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1412] font-normal tracking-tight">
            Crafted for <span className="italic text-[#A68656]">Individuality</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mt-4"></div>
          <p className="text-xs sm:text-sm text-[#453730] font-sans">
            A visual showcase of dimension balayage, precision cuts, timeless bridal aesthetics, men's barbering, and tranquil interior design.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF7F2] border border-[#C5A880]/30 rounded text-[11px] text-[#524138]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A68656] shrink-0" />
            <span>Representative showcase for this demo template. Your client's actual photography replaces this gallery.</span>
          </div>
        </div>

        {/* Filter Navigation: Smooth Horizontal Scroll on Mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none justify-start sm:justify-center mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-sm text-xs font-sans font-medium tracking-wider uppercase transition-all duration-200 shrink-0 cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-[#1A1412] text-[#E2CCA6] shadow-xs'
                  : 'bg-[#FAF7F2] text-[#524138] hover:bg-[#EFE8DE] border border-[#C5A880]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer bg-[#FAF7F2] rounded-sm overflow-hidden border border-[#C5A880]/30 hover:border-[#C5A880] transition-all duration-300 hover:shadow-xl flex flex-col text-left"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1A1412]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Hover Quick Overlay */}
                <div className="absolute inset-0 bg-[#1A1412]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="text-center text-[#FAF7F2] space-y-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="w-9 h-9 rounded-full bg-[#FAF7F2]/20 backdrop-blur-xs flex items-center justify-center mx-auto text-[#E2CCA6]">
                      <Eye className="w-4 h-4 text-[#C5A880]" />
                    </span>
                    <span className="text-[11px] uppercase tracking-widest block font-sans font-semibold text-[#DFCCA8]">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-[#1A1412]/85 backdrop-blur-xs px-2.5 py-1 rounded-sm text-[10px] font-sans tracking-widest uppercase text-[#E2CCA6] border border-[#C5A880]/40">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-4 space-y-1">
                <h3 className="font-serif text-lg font-semibold text-[#1A1412] group-hover:text-[#9E7D4E] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#786154] font-sans line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Zoom Modal */}
        {activeItem && (
          <div className="fixed inset-0 z-50 bg-[#1A1412]/85 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-[#FAF7F2] max-w-3xl w-full rounded-sm border border-[#C5A880] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row relative text-left">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1A1412] text-[#E2CCA6] hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Side */}
              <div className="md:w-1/2 relative bg-[#1A1412] min-h-[300px] md:min-h-full">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Description Side */}
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
                <div className="space-y-4">
                  <div className="inline-block px-2.5 py-1 rounded-sm bg-[#1A1412] text-[#E2CCA6] text-[10px] uppercase font-sans tracking-widest">
                    {activeItem.categoryLabel}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1412]">
                    {activeItem.title}
                  </h3>

                  <p className="text-xs text-[#524138] font-sans leading-relaxed">
                    {activeItem.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#9E7D4E] block">
                      Styling Notes & Focus:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeItem.stylingNotes.map((note, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-[#F3ECE2] border border-[#C5A880]/30 rounded-sm text-[11px] text-[#2A201C] font-sans"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C5A880]/20">
                  <button
                    onClick={() => {
                      setActiveItem(null);
                      onOpenEnquiry();
                    }}
                    className="w-full py-3 bg-[#1A1412] hover:bg-[#2D231E] text-[#E2CCA6] text-xs font-bold tracking-widest uppercase rounded-sm border border-[#C5A880] flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
