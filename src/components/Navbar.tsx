import React, { useState } from 'react';
import { Calendar, Menu, X, SlidersHorizontal, MessageSquare, Sparkles } from 'lucide-react';
import { SalonConfiguration } from '../types';

interface NavbarProps {
  config: SalonConfiguration;
  onOpenEnquiry: () => void;
  onOpenCustomizer: () => void;
  onScrollTo: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  onOpenEnquiry,
  onOpenCustomizer,
  onScrollTo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Our Work', id: 'work' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  const cleanPhone = config.contact.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#C5A880]/20 transition-all">
      {/* Sleek Ultra-Compact Top Ribbon (Takes zero unnecessary vertical space on mobile) */}
      <div className="bg-[#1A1412] text-[#E2CCA6] py-1 px-3 sm:px-4 border-b border-[#C5A880]/25 text-[10px] sm:text-xs font-sans">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0 animate-pulse"></span>
            <span className="font-semibold text-[#FAF7F2] uppercase tracking-wider text-[10px] sm:text-[11px]">
              Agency Demo
            </span>
            <span className="text-[#C5A880]/50 hidden sm:inline">•</span>
            <span className="text-[#DFCCA8]/90 text-[10px] sm:text-[11px] hidden sm:inline">
              Luxury Salons, Bridal Studios & Barbershops
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#2D231E] border border-[#C5A880]/50 text-[#FAF7F2] hover:text-[#C5A880] text-[10px] sm:text-[11px] font-sans font-medium transition-colors cursor-pointer"
              title="Personalize salon name, WhatsApp number, and preset in 10 seconds"
            >
              <SlidersHorizontal className="w-3 h-3 text-[#C5A880]" />
              <span>Personalize Demo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar — Compact on Mobile to Maximize Screen Visibility */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-[0.18em] text-[#1A1412] font-semibold uppercase group-hover:text-[#A68656] transition-colors leading-none">
              {config.businessName}
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.25em] text-[#A68656] uppercase font-sans font-medium mt-0.5">
              {config.tagline}
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs font-sans font-medium tracking-widest uppercase text-[#3C2F29]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="hover:text-[#A68656] transition-colors relative py-1 focus:outline-none cursor-pointer group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A880] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct WhatsApp Quick Chat */}
          <a
            href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hello ${config.businessName}, I would like to inquire about booking an appointment.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#F5EFEB] border border-[#C5A880]/40 text-xs font-sans text-[#2A201C] hover:bg-[#EFE8DE] transition-colors"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="font-medium">WhatsApp</span>
          </a>

          {/* Primary Book Appointment CTA */}
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm bg-[#1A1412] hover:bg-[#2D231E] text-[#FAF7F2] text-[11px] sm:text-xs font-sans font-bold tracking-wider uppercase border border-[#C5A880]/60 hover:border-[#C5A880] shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Book Now</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#1A1412] hover:text-[#A68656] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#C5A880]/30 px-5 py-5 animate-fadeIn">
          <div className="flex flex-col space-y-3 font-sans text-xs tracking-widest uppercase font-semibold text-[#2A201C]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left py-2 border-b border-[#C5A880]/15 hover:text-[#A68656] transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenCustomizer();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 bg-[#F5EFEB] border border-[#C5A880]/40 text-[#1A1412] font-semibold rounded-sm text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#A68656]" />
                <span>Personalize Demo / Change Niche Preset</span>
              </button>

              <button
                onClick={() => {
                  onOpenEnquiry();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 bg-[#1A1412] text-[#FAF7F2] font-bold rounded-sm text-xs tracking-wider uppercase border border-[#C5A880] cursor-pointer"
              >
                Book Appointment Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
