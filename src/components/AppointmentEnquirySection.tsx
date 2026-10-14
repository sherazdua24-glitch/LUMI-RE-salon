import React, { useState } from 'react';
import { Calendar, Clock, Check, ArrowRight, User, Phone, Mail, MapPin, MessageSquare, ShieldAlert, Copy, Printer, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { ServiceItem, SalonBranch, SalonConfiguration, AppointmentEnquiry } from '../types';
import { formatPKR } from '../config/salonConfig';

interface AppointmentEnquirySectionProps {
  services: ServiceItem[];
  branches: SalonBranch[];
  config: SalonConfiguration;
  selectedServiceIds: string[];
  onToggleService: (serviceId: string) => void;
}

export const AppointmentEnquirySection: React.FC<AppointmentEnquirySectionProps> = ({
  services,
  branches,
  config,
  selectedServiceIds,
  onToggleService,
}) => {
  // Form State
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [selectedBranchId, setSelectedBranchId] = useState(branches[0]?.id || 'branch-lahore');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM – Morning Glow');
  const [clientNotes, setClientNotes] = useState('');

  // Status & Validation State
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<AppointmentEnquiry | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    '10:30 AM – Morning Slot',
    '11:00 AM – Morning Glow',
    '01:30 PM – Afternoon Slot',
    '03:30 PM – Golden Hour Slot',
    '05:30 PM – Evening Appointment',
    '07:00 PM – Late Evening Slot'
  ];

  // Calculated totals
  const selectedServices = services.filter((s) => selectedServiceIds.includes(s.id));
  const estimatedTotalPKR = selectedServices.reduce((acc, curr) => acc + curr.startingPricePKR, 0);
  const selectedBranch = branches.find((b) => b.id === selectedBranchId) || branches[0];
  const cleanWhatsAppNumber = config.contact.whatsappNumber.replace(/[^0-9]/g, '');

  const generateWhatsAppUrl = (enq: Partial<AppointmentEnquiry>) => {
    const lines = [
      `*APPOINTMENT ENQUIRY — ${config.businessName}*`,
      enq.referenceNumber ? `*Ref No:* ${enq.referenceNumber}` : null,
      enq.clientName ? `*Client:* ${enq.clientName}` : `*Client:* (Booking Enquiry via Website)`,
      enq.phone ? `*Phone:* ${enq.phone}` : null,
      `*Studio/Branch:* ${enq.branchName || selectedBranch?.name || config.contact.address}`,
      enq.preferredDate ? `*Preferred Date:* ${enq.preferredDate}` : null,
      enq.preferredTime ? `*Preferred Slot:* ${enq.preferredTime}` : null,
      `*Selected Services:*`,
      ...(enq.selectedServices && enq.selectedServices.length > 0 
        ? enq.selectedServices.map((s) => `  - ${s}`)
        : selectedServices.map((s) => `  - ${s.name} (${formatPKR(s.startingPricePKR)})`)),
      `*Estimated Starting Total:* ${formatPKR(enq.estimatedTotalPKR || estimatedTotalPKR)}`,
      enq.notes ? `*Notes:* ${enq.notes}` : null,
      ``,
      `_Please confirm availability and schedule my appointment._`
    ].filter(Boolean);

    return `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!clientName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!clientPhone.trim()) {
      setFormError('Please provide your WhatsApp or mobile phone number.');
      return;
    }
    if (!preferredDate) {
      setFormError('Please select your preferred appointment date.');
      return;
    }
    if (selectedServiceIds.length === 0) {
      setFormError('Please select at least one treatment from the service list.');
      return;
    }

    setIsSubmitting(true);

    const randomRef = `LUM-${Math.floor(1000 + Math.random() * 9000)}`;
    const enquiry: AppointmentEnquiry = {
      id: `enq-${Date.now()}`,
      referenceNumber: randomRef,
      clientName: clientName.trim(),
      phone: clientPhone.trim(),
      email: clientEmail.trim() || undefined,
      branchName: selectedBranch?.name || config.contact.address,
      preferredDate,
      preferredTime,
      selectedServices: selectedServices.map((s) => `${s.name} (${formatPKR(s.startingPricePKR)})`),
      notes: clientNotes.trim() || undefined,
      estimatedTotalPKR,
      createdAt: new Date().toISOString()
    };

    setTimeout(() => {
      setSubmittedEnquiry(enquiry);
      setIsSubmitting(false);
    }, 300);
  };

  const handleCopySummary = () => {
    if (!submittedEnquiry) return;
    const text = `APPOINTMENT ENQUIRY — ${config.businessName}\nRef: ${submittedEnquiry.referenceNumber}\nClient: ${submittedEnquiry.clientName} (${submittedEnquiry.phone})\nDate: ${submittedEnquiry.preferredDate} at ${submittedEnquiry.preferredTime}\nBranch: ${submittedEnquiry.branchName}\nEstimated: ${formatPKR(submittedEnquiry.estimatedTotalPKR)}\nStatus: Pending Studio Confirmation`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="enquiry" className="py-16 lg:py-24 bg-[#FAF7F2] border-b border-[#C5A880]/20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.3em] text-[#9E7D4E] font-semibold">
            <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Reservations & Enquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1412] font-normal tracking-tight">
            Book an <span className="italic text-[#A68656]">Appointment Enquiry</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mt-3"></div>
          <p className="text-xs sm:text-sm text-[#453730] font-sans">
            Choose your preferred branch, date, and treatments. Our team confirms availability directly on WhatsApp.
          </p>

          {/* Real Contact Configuration Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EFEB] border border-[#C5A880]/30 rounded text-[11px] text-[#524138]">
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
            <span>Enquiries dispatch to configured salon WhatsApp: <strong>{config.contact.whatsappNumber}</strong></span>
          </div>
        </div>

        {/* State A: Enquiry Submitted Successfully */}
        {submittedEnquiry ? (
          <div className="bg-[#FAF7F2] rounded-sm border border-[#C5A880] shadow-xl p-6 sm:p-10 text-left animate-fadeIn space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-[#C5A880]/30">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#1A1412] text-[#C5A880] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#9E7D4E] font-bold block">
                    Enquiry Logged
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1412]">
                    Ref: {submittedEnquiry.referenceNumber}
                  </h3>
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-[#F5EFEB] border border-[#C5A880] text-xs font-sans font-semibold text-[#1A1412]">
                Status: <span className="text-[#A68656]">Pending Studio Confirmation</span>
              </div>
            </div>

            {/* Clear Truthful Disclaimer */}
            <div className="p-4 bg-[#F5EFEB] border-l-4 border-[#C5A880] rounded-r-sm text-xs font-sans space-y-1 text-[#3C2F29]">
              <div className="flex items-center gap-1.5 font-bold text-[#1A1412]">
                <ShieldAlert className="w-4 h-4 text-[#A68656]" />
                <span>Next Step: Complete Enquiry on WhatsApp</span>
              </div>
              <p className="text-[11px] text-[#524138] leading-relaxed">
                Click below to dispatch your booking brief to our salon WhatsApp desk ({config.contact.whatsappNumber}). 
                Our concierge will review stylist schedules and confirm your slot.
              </p>
            </div>

            {/* Summary Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#FDFBF7] p-5 rounded-sm border border-[#C5A880]/20 text-xs font-sans">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E7D4E] block">
                  Client & Schedule
                </span>
                <div><span className="text-[#786154]">Name:</span> <strong className="text-[#1A1412]">{submittedEnquiry.clientName}</strong></div>
                <div><span className="text-[#786154]">Contact:</span> <strong className="text-[#1A1412]">{submittedEnquiry.phone}</strong></div>
                <div><span className="text-[#786154]">Studio:</span> <strong className="text-[#1A1412]">{submittedEnquiry.branchName}</strong></div>
                <div><span className="text-[#786154]">Date & Slot:</span> <strong className="text-[#1A1412]">{submittedEnquiry.preferredDate} ({submittedEnquiry.preferredTime})</strong></div>
              </div>

              <div className="space-y-1.5 border-t md:border-t-0 md:border-l border-[#C5A880]/20 md:pl-5 pt-3 md:pt-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E7D4E] block">
                  Selected Services
                </span>
                <div className="space-y-1">
                  {submittedEnquiry.selectedServices.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#3C2F29]">
                      <Check className="w-3 h-3 text-[#A68656]" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-[#C5A880]/20 flex items-center justify-between font-semibold">
                  <span>Starting Estimate:</span>
                  <span className="font-serif text-lg font-bold text-[#1A1412]">
                    {formatPKR(submittedEnquiry.estimatedTotalPKR)}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={generateWhatsAppUrl(submittedEnquiry)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#1A1412] hover:bg-[#2D231E] text-[#E2CCA6] text-xs font-bold tracking-widest uppercase rounded-sm border border-[#C5A880] flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Send to Salon WhatsApp ({config.contact.whatsappNumber})</span>
              </a>

              <button
                onClick={handleCopySummary}
                className="px-4 py-3 bg-[#F5EFEB] border border-[#C5A880]/50 hover:bg-[#EFE8DE] text-xs font-sans font-semibold tracking-wider uppercase text-[#1A1412] rounded-sm flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5 text-[#9E7D4E]" />
                <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
              </button>

              <button
                onClick={() => window.print()}
                className="px-4 py-3 bg-[#F5EFEB] border border-[#C5A880]/50 hover:bg-[#EFE8DE] text-xs font-sans font-semibold tracking-wider uppercase text-[#1A1412] rounded-sm flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-[#9E7D4E]" />
                <span>Print</span>
              </button>

              <button
                onClick={() => setSubmittedEnquiry(null)}
                className="px-3 py-3 text-xs text-[#786154] hover:text-[#1A1412] underline ml-auto cursor-pointer"
              >
                Start New
              </button>
            </div>

          </div>
        ) : (
          /* State B: Active Enquiry Form */
          <form onSubmit={handleSubmit} className="bg-[#FAF7F2] rounded-sm border border-[#C5A880]/40 shadow-xl p-5 sm:p-8 lg:p-10 text-left space-y-7">
            
            {/* Step 1: Branch Selection */}
            <div className="space-y-2.5">
              <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#9E7D4E]">
                1. Select Studio Location
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {branches.map((b) => {
                  const isSelected = selectedBranchId === b.id;
                  return (
                    <button
                      type="button"
                      key={b.id}
                      onClick={() => setSelectedBranchId(b.id)}
                      className={`p-3 rounded-sm border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#1A1412] text-[#FAF7F2] border-[#C5A880] shadow-xs'
                          : 'bg-[#FDFBF7] text-[#3C2F29] border-[#C5A880]/30 hover:border-[#C5A880]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] uppercase font-sans tracking-widest font-bold ${isSelected ? 'text-[#C5A880]' : 'text-[#9E7D4E]'}`}>
                          {b.city}
                        </span>
                        {b.isPrimary && (
                          <span className={`text-[9px] px-1.5 py-0.2 rounded ${isSelected ? 'bg-[#C5A880] text-[#1A1412]' : 'bg-[#E2CCA6]/40 text-[#1A1412]'}`}>
                            Main
                          </span>
                        )}
                      </div>
                      <div className="font-serif text-sm font-semibold mt-0.5 leading-snug">
                        {b.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Date & Time Slot */}
            <div className="space-y-2.5">
              <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#9E7D4E]">
                2. Preferred Schedule
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] font-sans font-semibold text-[#786154] mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#C5A880]/40 rounded-sm text-xs text-[#1A1412] focus:outline-none focus:border-[#A68656]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans font-semibold text-[#786154] mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#C5A880]/40 rounded-sm text-xs text-[#1A1412] focus:outline-none focus:border-[#A68656]"
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Selected Treatments Checklist */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#9E7D4E]">
                  3. Selected Services ({selectedServices.length})
                </label>
                <span className="text-xs text-[#786154]">
                  Starting Total: <strong className="font-serif text-sm text-[#1A1412]">{formatPKR(estimatedTotalPKR)}</strong>
                </span>
              </div>

              {selectedServices.length === 0 ? (
                <div className="p-3.5 bg-[#F5EFEB] rounded-sm border border-[#C5A880]/30 text-xs text-[#786154] text-center">
                  No treatments selected yet. Please click "Select Service" on any treatment in the menu above.
                </div>
              ) : (
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedServices.map((srv) => (
                    <div
                      key={srv.id}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FDFBF7] border border-[#C5A880]/50 rounded text-xs font-sans text-[#1A1412]"
                    >
                      <span className="font-medium">{srv.name}</span>
                      <span className="text-[#A68656] font-semibold">{formatPKR(srv.startingPricePKR)}</span>
                      <button
                        type="button"
                        onClick={() => onToggleService(srv.id)}
                        className="text-[#786154] hover:text-[#991B1B] text-xs ml-1 cursor-pointer"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Step 4: Contact Information */}
            <div className="space-y-2.5">
              <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#9E7D4E]">
                4. Your Contact Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-sans font-semibold text-[#786154] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Zara Ahmed"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#C5A880]/40 rounded-sm text-xs text-[#1A1412] focus:outline-none focus:border-[#A68656]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans font-semibold text-[#786154] mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +92 300 1234567"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#C5A880]/40 rounded-sm text-xs text-[#1A1412] focus:outline-none focus:border-[#A68656]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans font-semibold text-[#786154] mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. zara@example.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#C5A880]/40 rounded-sm text-xs text-[#1A1412] focus:outline-none focus:border-[#A68656]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-sans font-semibold text-[#786154] mb-1">
                  Optional Notes (Hair length, skin allergies, bridal requirements...)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your hair type, desired look, or event timing..."
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full px-3 py-1.5 bg-[#FDFBF7] border border-[#C5A880]/40 rounded-sm text-xs text-[#1A1412] focus:outline-none focus:border-[#A68656]"
                />
              </div>
            </div>

            {/* Error Message */}
            {formError && (
              <div className="p-3 bg-[#FEF2F2] border border-[#F87171] rounded-sm text-xs text-[#991B1B] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* Submit & Instant WhatsApp Buttons */}
            <div className="pt-2 border-t border-[#C5A880]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={generateWhatsAppUrl({})}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-[#FAF7F2] border border-[#25D366]/60 hover:bg-[#EFE8DE] text-xs font-sans font-semibold text-[#1A1412] rounded-sm flex items-center justify-center gap-2 transition-colors text-center"
                title="Send pre-filled WhatsApp enquiry immediately without filling details"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Instant WhatsApp Enquiry (Prefilled)</span>
              </a>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-7 py-3 bg-[#1A1412] hover:bg-[#2D231E] text-[#FAF7F2] text-xs font-bold tracking-[0.18em] uppercase rounded-sm border border-[#C5A880] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isSubmitting ? 'Preparing...' : 'Submit Booking Enquiry'}</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
