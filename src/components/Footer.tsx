import React from 'react';
import { COMPANY_DETAILS, SOLUTIONS_DROPDOWN_ITEMS } from '../data/sustechsData';
import { PageId } from '../types';
import { MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (e: React.MouseEvent, page: PageId) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Address Column */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => handleNav(e, 'home')}
              className="inline-flex items-center shrink-0"
              aria-label="Sustechs Home"
            >
              <img
                src="/assets/aistudio/Sustechs-Logo-simple_b42f02a1.webp"
                alt="Sustechs"
                referrerPolicy="no-referrer"
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="text-xs leading-relaxed text-slate-600 max-w-sm">
              South Coast renewable engineering contractors specializing in turnkey commercial and domestic solar PV, battery energy storage (BESS), EV charging, free cooling, and energy assessments.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2.5 text-slate-700">
                <MapPin className="h-4 w-4 text-lime-700 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <Phone className="h-4 w-4 text-lime-700 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-lime-700 transition-colors">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <Mail className="h-4 w-4 text-lime-700 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-lime-700 transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <Globe className="h-4 w-4 text-lime-700 shrink-0" />
                <span>{COMPANY_DETAILS.website}</span>
              </div>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Solutions
            </div>
            <ul className="mt-4 space-y-2.5">
              {SOLUTIONS_DROPDOWN_ITEMS.map((item) => {
                const targetPage = `solution-${item.slug}` as PageId;
                return (
                  <li key={item.slug}>
                    <a
                      href={`/solutions/${item.slug}`}
                      onClick={(e) => handleNav(e, targetPage)}
                      className="hover:text-slate-950 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a href="/solutions" onClick={(e) => handleNav(e, 'solutions')} className="hover:text-slate-950 transition-colors font-semibold text-lime-700">
                  All Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Pages */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Company &amp; Tools
            </div>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="/" onClick={(e) => handleNav(e, 'home')} className="hover:text-slate-950 transition-colors">
                  Home Showroom Tour
                </a>
              </li>
              <li>
                <a href="/case-studies" onClick={(e) => handleNav(e, 'case-studies')} className="hover:text-slate-950 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/accreditations" onClick={(e) => handleNav(e, 'accreditations')} className="hover:text-slate-950 transition-colors">
                  Accreditations &amp; MCS
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleNav(e, 'about')} className="hover:text-slate-950 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/faq" onClick={(e) => handleNav(e, 'faq')} className="hover:text-slate-950 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Consultation & Legal */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Site Surveys
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Book a desktop feasibility report or on-site engineering assessment.
            </p>
            <button
              onClick={onOpenConsultation}
              className="w-full rounded-lg bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] py-2.5 px-3 text-center text-xs font-bold text-slate-950 hover:brightness-105 transition-all cursor-pointer"
            >
              Book Site Survey
            </button>
            <div className="pt-2 text-[11px] text-slate-500">
              Scottish &amp; Southern Electricity Networks (SSEN) G99 &amp; G100 fast-track liaison.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Sustechs. {COMPANY_DETAILS.legalName} · Company No. {COMPANY_DETAILS.companyNumber}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>MCS Certified ({COMPANY_DETAILS.mcsNumber}) · RECC Member · NICEIC Approved Contractor</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
