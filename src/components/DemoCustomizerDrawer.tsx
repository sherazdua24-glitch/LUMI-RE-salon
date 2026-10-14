import React, { useState } from 'react';
import { X, SlidersHorizontal, Sparkles, Check, RefreshCw, Scissors, Crown, UserCheck, MessageSquare, Building2, Phone } from 'lucide-react';
import { SalonConfiguration, SalonPreset } from '../types';

interface DemoCustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: SalonConfiguration;
  onSaveConfig: (updated: SalonConfiguration) => void;
  onResetDefaults: () => void;
}

export const DemoCustomizerDrawer: React.FC<DemoCustomizerDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  onResetDefaults,
}) => {
  const [formConfig, setFormConfig] = useState<SalonConfiguration>(config);
  const [saveToast, setSaveToast] = useState(false);

  if (!isOpen) return null;

  // 1-Click Prospect Pre-made Pitch Profiles
  const quickProfiles = [
    {
      id: 'zara-bridal',
      title: 'Zara Bridal & Beauty Lounge',
      city: 'Gulberg III, Lahore',
      type: 'Luxury Bridal & Women',
      preset: 'womens-bridal' as SalonPreset,
      tagline: 'Regal Bridal Artistry & Skin Rejuvenation.',
      subheadline: 'Bespoke bridal suites, 24K gold cellular facials, and couture hair styling.',
      phone: '+92 42 3578 9100',
      whatsapp: '+92 300 8458643',
      address: 'Plot 18-C, MM Alam Road, Gulberg III',
    },
    {
      id: 'barber-room',
      title: 'The Barber Room & Grooming Co.',
      city: 'Clifton Block 9, Karachi',
      type: "Men's Barbershop & Fades",
      preset: 'mens-barbershop' as SalonPreset,
      tagline: 'Classic Craft. Modern Distinction.',
      subheadline: 'Tailored fades, straight razor shaves, and executive beard grooming.',
      phone: '+92 21 3583 6711',
      whatsapp: '+92 333 9012345',
      address: 'Suite 402, Ocean Promenade, Block 9, Clifton',
    },
    {
      id: 'mane-atelier',
      title: 'Mane & Co. Hair Atelier',
      city: 'Beverly Centre, Islamabad',
      type: 'Unisex Color & Balayage',
      preset: 'unisex-hair' as SalonPreset,
      tagline: 'Dimensional Hair Color & Precision Cuts.',
      subheadline: 'Hand-painted balayage, keratin smoothing, and modern scissor styling.',
      phone: '+92 51 2814 550',
      whatsapp: '+92 321 5567890',
      address: '2nd Floor, Beverly Centre, Blue Area / F-7',
    }
  ];

  const handleApplyProfile = (profile: typeof quickProfiles[0]) => {
    const updated: SalonConfiguration = {
      ...formConfig,
      preset: profile.preset,
      businessName: profile.title,
      tagline: profile.tagline,
      subheadline: profile.subheadline,
      contact: {
        ...formConfig.contact,
        primaryPhone: profile.phone,
        whatsappNumber: profile.whatsapp,
        address: profile.address,
        city: profile.city,
      }
    };
    setFormConfig(updated);
    onSaveConfig(updated);
    triggerSaveToast();
  };

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith('contact.')) {
      const key = field.split('.')[1];
      setFormConfig((prev) => ({
        ...prev,
        contact: {
          ...prev.contact,
          [key]: value
        }
      }));
    } else {
      setFormConfig((prev) => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const triggerSaveToast = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formConfig);
    triggerSaveToast();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1A1412]/80 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="bg-[#FAF7F2] w-full max-w-lg h-full shadow-2xl border-l border-[#C5A880] flex flex-col text-left overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#1A1412] text-[#FAF7F2] border-b border-[#C5A880]/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <SlidersHorizontal className="w-5 h-5 text-[#C5A880]" />
            <div>
              <h3 className="font-serif text-lg font-semibold text-white">
                Prospect Demo Personalizer
              </h3>
              <p className="text-[11px] text-[#DFCCA8] font-sans">
                Personalize before contacting an owner to win paying clients
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#DFCCA8] hover:text-white transition-colors cursor-pointer"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Save confirmation toast */}
        {saveToast && (
          <div className="bg-[#2D231E] text-[#E2CCA6] border-b border-[#C5A880] py-2 px-4 text-xs font-sans flex items-center justify-center gap-2 animate-fadeIn">
            <Check className="w-4 h-4 text-[#C5A880]" />
            <span>Updated live! Changes immediately visible on the website.</span>
          </div>
        )}

        {/* Drawer Body Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6 text-xs font-sans">
          
          {/* Quick Pre-made Pitch Profiles */}
          <div className="space-y-2.5">
            <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#9E7D4E]">
              1-Click Pitch Profiles (Instant Rebrand)
            </label>
            <div className="grid grid-cols-1 gap-2">
              {quickProfiles.map((qp) => (
                <button
                  type="button"
                  key={qp.id}
                  onClick={() => handleApplyProfile(qp)}
                  className="p-2.5 bg-white border border-[#C5A880]/30 hover:border-[#C5A880] rounded-sm text-left transition-all hover:shadow-xs cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-sm text-[#1A1412] group-hover:text-[#9E7D4E]">
                      {qp.title}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#F5EFEB] text-[#786154] font-semibold">
                      {qp.type}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#786154] mt-0.5">
                    {qp.city} • WhatsApp: {qp.whatsapp}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Salon Branding Inputs */}
          <div className="space-y-3 pt-4 border-t border-[#C5A880]/20">
            <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#9E7D4E]">
              Custom Business Identity (Prospect Details)
            </label>

            <div>
              <label className="block text-[11px] font-semibold text-[#786154] mb-1">
                Prospect Salon / Business Name:
              </label>
              <input
                type="text"
                value={formConfig.businessName}
                onChange={(e) => handleInputChange('businessName', e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#C5A880]/40 rounded text-xs text-[#1A1412] font-semibold"
                placeholder="e.g. Bella Hair Lounge"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#786154] mb-1">
                Custom Tagline:
              </label>
              <input
                type="text"
                value={formConfig.tagline}
                onChange={(e) => handleInputChange('tagline', e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#C5A880]/40 rounded text-xs text-[#1A1412]"
                placeholder="e.g. Your Luxury Hair Destination."
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#786154] mb-1">
                Subheadline / Philosophy:
              </label>
              <textarea
                rows={2}
                value={formConfig.subheadline}
                onChange={(e) => handleInputChange('subheadline', e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#C5A880]/40 rounded text-xs text-[#1A1412]"
              />
            </div>
          </div>

          {/* WhatsApp & Contact for Live Prospect Testing */}
          <div className="space-y-3 pt-4 border-t border-[#C5A880]/20">
            <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#9E7D4E]">
              Salon WhatsApp & Contact Details
            </label>
            <p className="text-[11px] text-[#786154] leading-relaxed">
              Enter your prospect's real WhatsApp number so they can receive live test enquiries directly on their phone!
            </p>

            <div>
              <label className="block text-[11px] font-semibold text-[#786154] mb-1">
                Salon WhatsApp Number (Include Country Code):
              </label>
              <input
                type="text"
                value={formConfig.contact.whatsappNumber}
                onChange={(e) => handleInputChange('contact.whatsappNumber', e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#C5A880]/40 rounded text-xs text-[#1A1412] font-mono"
                placeholder="e.g. +92 300 1234567"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#786154] mb-1">
                Salon Landline / Direct Phone:
              </label>
              <input
                type="text"
                value={formConfig.contact.primaryPhone}
                onChange={(e) => handleInputChange('contact.primaryPhone', e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#C5A880]/40 rounded text-xs text-[#1A1412]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#786154] mb-1">
                Physical Street Address & City:
              </label>
              <input
                type="text"
                value={formConfig.contact.address}
                onChange={(e) => handleInputChange('contact.address', e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#C5A880]/40 rounded text-xs text-[#1A1412] mb-2"
                placeholder="Street address"
              />
              <input
                type="text"
                value={formConfig.contact.city}
                onChange={(e) => handleInputChange('contact.city', e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#C5A880]/40 rounded text-xs text-[#1A1412]"
                placeholder="City, Country"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#1A1412] hover:bg-[#2D231E] text-[#E2CCA6] text-xs font-bold tracking-widest uppercase rounded-sm border border-[#C5A880] transition-colors cursor-pointer shadow-sm"
          >
            Apply & Save Live Preview
          </button>
        </form>

        {/* Footer */}
        <div className="p-3.5 bg-[#F5EFEB] border-t border-[#C5A880]/30 flex items-center justify-between">
          <button
            type="button"
            onClick={onResetDefaults}
            className="text-xs text-[#786154] hover:text-[#991B1B] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#1A1412] text-[#E2CCA6] rounded-sm text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
