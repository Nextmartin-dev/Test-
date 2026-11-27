import React from 'react';
import { ArrowRight, Building2, FolderCheck, HelpCircle, Layers, ShieldCheck, MapPin } from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/sustechsData';

interface HomeOverviewProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const HomeOverview: React.FC<HomeOverviewProps> = ({ onNavigate, onOpenConsultation }) => {
  const destinations: {
    page: PageId;
    num: string;
    title: string;
    description: string;
    cta: string;
    icon: React.ReactNode;
  }[] = [
    {
      page: 'solutions',
      num: '01',
      title: 'Renewable Engineering Solutions',
      description:
        'Explore Tier 1 Solar PV arrays, GivEnergy & Tesla Battery Storage, NIBE & Samsung Heat Pumps, and commercial EV charging infrastructure.',
      cta: 'Explore Solutions',
      icon: <Layers className="h-5 w-5 text-lime-700" />,
    },
    {
      page: 'about',
      num: '02',
      title: 'About Sustechs · 20+ Years Experience',
      description:
        'Trading since June 2006 with 40,000+ free cooling systems across Europe plus solar PV, battery storage, and EV charging across Dorset.',
      cta: 'About Our Company',
      icon: <Building2 className="h-5 w-5 text-lime-700" />,
    },
    {
      page: 'case-studies',
      num: '03',
      title: 'South Coast Case Studies',
      description:
        'Review verified commercial and residential installations across Wimborne, Sandbanks, and Bournemouth with monitored kWh returns.',
      cta: 'View Case Studies',
      icon: <FolderCheck className="h-5 w-5 text-lime-700" />,
    },
    {
      page: 'accreditations',
      num: '04',
      title: 'Accreditations & DNO Compliance',
      description:
        'See our MCS (NIC-600637), RECC, NICEIC, and OZEV credentials alongside our 4-stage turnkey SSEN grid approval workflow.',
      cta: 'View Standards',
      icon: <ShieldCheck className="h-5 w-5 text-lime-700" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-700">
              <span>Explore Sustechs</span>
              <span aria-hidden="true">·</span>
              <span>Poole Centre of Excellence</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
              Turnkey clean energy from assessment to commissioning.
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Visit our working renewable technology hub at {COMPANY_DETAILS.address}, or explore our dedicated engineering sections below.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('faq')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-lime-700 transition-colors cursor-pointer shrink-0 self-start md:self-end"
          >
            <HelpCircle className="h-4 w-4 text-lime-700" />
            <span>Read Frequently Asked Questions</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Dedicated Page Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {destinations.map((item) => (
            <button
              key={item.page}
              type="button"
              onClick={() => onNavigate(item.page)}
              className="group text-left rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 transition-all duration-200 hover:border-lime-500 hover:shadow-md hover:shadow-slate-900/5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-lime-700 tabular-nums">{item.num}</span>
                  {item.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-lime-800 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-lime-700">
                <span>{item.cta}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>

        {/* Showroom Visit & Consultation Strip */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-lime-50/70 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-lime-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Visit our Sustainable Energy Hub on Poole Road
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Inspect live Fox ESS &amp; GivEnergy battery walls, smart EV chargers, and solar arrays in person at 441 Poole Road, Branksome, BH12 1DH.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 transition-all hover:brightness-105 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Book Showroom Visit or Site Survey</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Storefront Exterior Photo Underneath Hub Banner */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <img
            src="/assets/aistudio/SusTechS_841fafa9.webp"
            alt="Sustechs Sustainable Technology and Solutions Centre at 441 Poole Road, Branksome, Poole"
            referrerPolicy="no-referrer"
            className="w-full h-auto block object-contain bg-slate-50"
          />
          <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-900">
              Sustechs Sustainable Technology &amp; Solutions Centre
            </span>
            <span className="font-mono text-lime-700 font-medium">
              441 Poole Road, Branksome, Poole BH12 1DH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
