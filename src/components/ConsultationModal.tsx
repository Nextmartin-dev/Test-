import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle,
  ArrowRight,
  Shield,
  Download,
  MapPin,
  Phone,
  Mail,
  Copy,
  Check,
  Loader2,
  AlertTriangle,
} from 'lucide-react';
import { COMPANY_DETAILS, DORSET_POSTCODE_PREFIXES } from '../data/sustechsData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillNotes?: string;
  prefillService?: string;
  requestType?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefillNotes = '',
  prefillService = '',
  requestType = 'Free Site Survey & Consultation',
}) => {
  const [sector, setSector] = useState<'commercial' | 'domestic'>('commercial');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [energySpend, setEnergySpend] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState<'sent' | 'fallback'>('sent');
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle prefill updates when modal opens
  useEffect(() => {
    if (prefillNotes) {
      setNotes(prefillNotes);
    }
    if (prefillService) {
      setSelectedServices((prev) =>
        prev.includes(prefillService) ? prev : [...prev, prefillService]
      );
    }
  }, [prefillNotes, prefillService, isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const isLocalSouthCoast =
    postcode.trim().length >= 2 &&
    DORSET_POSTCODE_PREFIXES.some((pfx) =>
      postcode.trim().toUpperCase().startsWith(pfx)
    );

  const normalizedPostcode = postcode.trim().toUpperCase();
  const emailSubject = `[Sustechs Website] ${requestType} - ${fullName.trim()} (${normalizedPostcode})`;

  const buildSummaryText = () =>
    `SUSTECHS RENEWABLE ENGINEERING\n` +
    `${COMPANY_DETAILS.address}\n` +
    `Website: ${COMPANY_DETAILS.website} | Phone: ${COMPANY_DETAILS.phone} | Email: ${COMPANY_DETAILS.email}\n\n` +
    `ENQUIRY TYPE: ${requestType}\n` +
    `Sector: ${sector === 'commercial' ? 'Commercial / Business' : 'Domestic / Homeowner'}\n` +
    `Full Name: ${fullName.trim()}\n` +
    (sector === 'commercial' ? `Company: ${companyName.trim() || 'Not specified'}\n` : '') +
    `Email: ${email.trim()}\n` +
    `Telephone: ${phone.trim()}\n` +
    `Property Postcode: ${normalizedPostcode}\n` +
    `Approx. Annual Electricity Spend: ${energySpend.trim() || 'Not specified'}\n` +
    `Technologies Interested In: ${selectedServices.length > 0 ? selectedServices.join(', ') : 'General Assessment'}\n` +
    `Project Notes:\n${notes.trim() || 'None provided'}`;

  const mailtoHref = `mailto:${COMPANY_DETAILS.email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(buildSummaryText())}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !email.trim() || !phone.trim() || !postcode.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, Phone, Postcode).');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid business or personal email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_DETAILS.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _replyto: email.trim(),
          _template: 'table',
          requestType,
          sector: sector === 'commercial' ? 'Commercial / Business' : 'Domestic / Homeowner',
          fullName: fullName.trim(),
          companyName: companyName.trim() || 'N/A',
          email: email.trim(),
          phone: phone.trim(),
          postcode: normalizedPostcode,
          annualElectricitySpend: energySpend.trim() || 'Not specified',
          technologies:
            selectedServices.length > 0 ? selectedServices.join(', ') : 'General Assessment',
          notes: notes.trim() || 'None provided',
        }),
      });

      const result = await response.json().catch(() => null);
      if (response.ok && (result?.success === 'true' || result?.success === true)) {
        setDeliveryStatus('sent');
      } else {
        setDeliveryStatus('fallback');
      }
    } catch {
      setDeliveryStatus('fallback');
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleCopySummary = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(buildSummaryText())
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => {});
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setDeliveryStatus('sent');
    setCopied(false);
    setFullName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setPostcode('');
    setEnergySpend('');
    setSelectedServices([]);
    setNotes('');
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto text-slate-900"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 rounded-lg p-2 text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center">
            <div
              className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border ${
                deliveryStatus === 'sent'
                  ? 'bg-lime-50 text-lime-700 border-lime-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}
            >
              {deliveryStatus === 'sent' ? (
                <CheckCircle className="h-8 w-8" />
              ) : (
                <AlertTriangle className="h-7 w-7" />
              )}
            </div>

            <h3 id="modal-title" className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
              {deliveryStatus === 'sent'
                ? 'Request Forwarded to Sustechs'
                : 'Ready to Send Your Request'}
            </h3>

            {deliveryStatus === 'sent' ? (
              <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. Your{' '}
                <span className="font-medium text-slate-900">{requestType}</span> details have been forwarded to{' '}
                <span className="font-mono text-lime-700 font-medium">{COMPANY_DETAILS.email}</span>. Our Poole engineering team (441 Poole Road) will respond within 1 business day.
              </p>
            ) : (
              <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. Click{' '}
                <span className="font-semibold text-slate-900">Send via Email App</span> below to send your completed request directly to{' '}
                <span className="font-mono text-lime-700 font-medium">{COMPANY_DETAILS.email}</span>, or call us on{' '}
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-lime-700 font-medium underline">
                  {COMPANY_DETAILS.phone}
                </a>
                .
              </p>
            )}

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-left max-w-md mx-auto space-y-2 text-xs text-slate-600">
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Destination:</span>
                <span className="font-mono text-lime-700 font-semibold">{COMPANY_DETAILS.email}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Request Type:</span>
                <span className="text-slate-900 font-medium text-right">{requestType}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Postcode Area:</span>
                <span className="font-mono text-slate-900 font-semibold">{normalizedPostcode}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Sector:</span>
                <span className="text-slate-900 capitalize font-medium">{sector}</span>
              </div>
              {selectedServices.length > 0 && (
                <div className="flex justify-between gap-2">
                  <span className="text-slate-500">Target Tech:</span>
                  <span className="text-slate-900 font-medium text-right">{selectedServices.join(', ')}</span>
                </div>
              )}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] px-5 py-2.5 text-xs font-bold text-slate-950 hover:brightness-105 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>Send via Email App ({COMPANY_DETAILS.email})</span>
              </a>

              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-lime-700" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-lime-700" />
                    <span>Copy Details</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  const blob = new Blob([buildSummaryText()], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `Sustechs_Feasibility_${normalizedPostcode.replace(/\s+/g, '')}.txt`;
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors cursor-pointer"
              >
                <Download className="h-4 w-4 text-lime-700" />
                <span>Download (.txt)</span>
              </button>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-100 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-700">
              <Shield className="h-3.5 w-3.5" />
              <span>Direct to {COMPANY_DETAILS.email}</span>
            </div>
            <h3 id="modal-title" className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Request a {requestType}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Complete your project details below. Enquiries are sent directly to{' '}
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="font-mono text-lime-700 font-medium hover:underline"
              >
                {COMPANY_DETAILS.email}
              </a>{' '}
              for structural suitability and DNO review.
            </p>

            {errorMsg && (
              <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-3 text-xs text-red-800">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Sector Switch */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => setSector('commercial')}
                  className={`py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    sector === 'commercial'
                      ? 'bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  Commercial / Business
                </button>
                <button
                  type="button"
                  onClick={() => setSector('domestic')}
                  className={`py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    sector === 'domestic'
                      ? 'bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  Domestic / Homeowner
                </button>
              </div>

              {/* Contact Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullname-input" className="block text-xs font-medium text-slate-700">
                    Full Name *
                  </label>
                  <input
                    id="fullname-input"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. David Harrison"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-lime-600 focus:outline-none"
                  />
                </div>

                {sector === 'commercial' && (
                  <div>
                    <label htmlFor="company-input" className="block text-xs font-medium text-slate-700">
                      Company / Organisation Name
                    </label>
                    <input
                      id="company-input"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Apex Marine Logistics Ltd"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-lime-600 focus:outline-none"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="email-input" className="block text-xs font-medium text-slate-700">
                    Email Address *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.co.uk"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-lime-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone-input" className="block text-xs font-medium text-slate-700">
                    Telephone Number *
                  </label>
                  <input
                    id="phone-input"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01202 000000 or 07..."
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-lime-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="postcode-input" className="block text-xs font-medium text-slate-700">
                    Property Postcode *
                  </label>
                  <input
                    id="postcode-input"
                    type="text"
                    required
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="e.g. BH12 1DH or SO15"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 uppercase placeholder-slate-400 focus:border-lime-600 focus:outline-none"
                  />
                  {isLocalSouthCoast && (
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-lime-700 font-medium">
                      <MapPin className="h-3 w-3" />
                      <span>Priority South Coast primary engineering zone (Dorset/Hampshire)</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="spend-input" className="block text-xs font-medium text-slate-700">
                    Approx. Annual Electricity Spend (£)
                  </label>
                  <input
                    id="spend-input"
                    type="text"
                    value={energySpend}
                    onChange={(e) => setEnergySpend(e.target.value)}
                    placeholder="e.g. £15,000 / year"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-lime-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Technologies Required */}
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Technologies Interested In:
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    'Solar PV Panels',
                    'Battery Storage (BESS)',
                    'EV Charging',
                    'Free Cooling',
                    'LED Lighting',
                    'Infrared Heating',
                    'Energy Assessment',
                  ].map((tech) => (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => toggleService(tech)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                        selectedServices.includes(tech)
                          ? 'border-lime-600 bg-lime-50 text-lime-900 font-semibold'
                          : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                      }`}
                    >
                      {selectedServices.includes(tech) ? '✓ ' : '+ '}
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Notes */}
              <div>
                <label htmlFor="notes-input" className="block text-xs font-medium text-slate-700">
                  Project Notes &amp; Objectives
                </label>
                <textarea
                  id="notes-input"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your roof type, heating/cooling system, or power capacity requirements..."
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-lime-600 focus:outline-none"
                />
              </div>

              {/* Trust Footer inside Modal */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Phone className="h-3.5 w-3.5 text-lime-700" />
                  <span>Direct phone: {COMPANY_DETAILS.phone}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:brightness-105 transition-all cursor-pointer shadow-md shadow-lime-600/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending to enquiries@sustechs.co.uk...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Request</span>
                      <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
