/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentEnquirySection } from './components/AppointmentEnquirySection';
import { LocationsAndContactSection } from './components/LocationsAndContactSection';
import { Footer } from './components/Footer';
import { DemoCustomizerDrawer } from './components/DemoCustomizerDrawer';

import {
  DEFAULT_SALON_CONFIG,
  INITIAL_SERVICES,
  INITIAL_BRANCHES,
  INITIAL_GALLERY,
  DEMO_TESTIMONIALS,
  getStoredConfig,
  saveStoredConfig,
  getStoredServices,
  saveStoredServices,
  getStoredBranches,
  saveStoredBranches,
  resetToDefaults,
} from './config/salonConfig';
import { SalonConfiguration, ServiceItem, SalonBranch } from './types';

export default function App() {
  // Master Configuration State
  const [config, setConfig] = useState<SalonConfiguration>(() => getStoredConfig());
  const [services, setServices] = useState<ServiceItem[]>(() => getStoredServices());
  const [branches, setBranches] = useState<SalonBranch[]>(() => getStoredBranches());

  // Interactive Booking Enquiry Selection State
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Synchronize configuration changes
  const handleSaveConfig = (updated: SalonConfiguration) => {
    setConfig(updated);
    saveStoredConfig(updated);
  };

  // Reset to original factory demo settings
  const handleResetDefaults = () => {
    resetToDefaults();
    setConfig(DEFAULT_SALON_CONFIG);
    setServices(INITIAL_SERVICES);
    setBranches(INITIAL_BRANCHES);
    setSelectedServiceIds([]);
    setIsCustomizerOpen(false);
  };

  // Toggle service selection in enquiry
  const handleToggleService = (serviceId: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2A201C] selection:bg-[#C5A880]/30 selection:text-[#1A1412]">
      
      {/* Refined Navigation Header with Prospect Personalizer Trigger */}
      <Navbar
        config={config}
        onOpenEnquiry={() => scrollToSection('enquiry')}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onScrollTo={scrollToSection}
      />

      <main className="flex-1">
        {/* 1. Hero Section: Exceptional First Impression */}
        <HeroSection
          config={config}
          onBookAppointment={() => scrollToSection('enquiry')}
          onExploreServices={() => scrollToSection('services')}
        />

        {/* 2. Services & Pricing: Categorized with Sample PKR Demo Rates */}
        <ServicesSection
          services={services}
          config={config}
          selectedServiceIds={selectedServiceIds}
          onToggleService={handleToggleService}
          onOpenEnquiry={() => scrollToSection('enquiry')}
        />

        {/* 3. Our Work: Portfolio & Gallery (Hair, Color, Bridal, Grooming, Interior) */}
        <GallerySection
          items={INITIAL_GALLERY}
          onSelectServiceCategory={(cat) => scrollToSection('services')}
          onOpenEnquiry={() => scrollToSection('enquiry')}
        />

        {/* 4. Why Choose Us: 5 Grounded Value Pillars */}
        <WhyChooseUs config={config} />

        {/* 5. About the Salon: Human Editorial Brand Story */}
        <AboutSection
          config={config}
          onBookAppointment={() => scrollToSection('enquiry')}
        />

        {/* 6. Testimonials & Trust: Responsible, Clearly Labeled Demo Samples */}
        <TestimonialsSection
          testimonials={DEMO_TESTIMONIALS}
          config={config}
        />

        {/* 7. Booking & WhatsApp Enquiries: Functional Pre-filled Dispatch Flow */}
        <AppointmentEnquirySection
          services={services}
          branches={branches}
          config={config}
          selectedServiceIds={selectedServiceIds}
          onToggleService={handleToggleService}
        />

        {/* 8. Location & Contact: Flagship Atelier & Multi-Branch Support */}
        <LocationsAndContactSection
          branches={branches}
          config={config}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />
      </main>

      {/* 9. Premium Footer */}
      <Footer
        config={config}
        onScrollTo={scrollToSection}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* In-App Sales Pitch Demo Personalizer Drawer */}
      <DemoCustomizerDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
        onResetDefaults={handleResetDefaults}
      />

    </div>
  );
}
