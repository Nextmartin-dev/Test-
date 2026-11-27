import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Wrench,
  Layers,
  ArrowRight,
  Compass,
  Award,
} from 'lucide-react';
import {
  COMPANY_DETAILS,
  EXTERNAL_VIDEO_URLS,
  isConfiguredExternalMediaUrl,
  TRUST_METRICS,
} from '../data/sustechsData';
import { PageId } from '../types';

interface AboutUsSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade away text and background cleanly as the user scrolls down
  const scrollFadeThreshold = 400;
  const contentOpacity = Math.max(0, Math.min(1, 1 - scrollY / scrollFadeThreshold));
  const contentTranslateY = Math.min(45, (scrollY / scrollFadeThreshold) * 40);
  const isContentHidden = contentOpacity < 0.02;

  const backgroundOpacity = Math.max(
    0.12,
    Math.min(1, 1 - Math.max(0, scrollY - 120) / 560)
  );

  const pillars = [
    {
      icon: Wrench,
      title: 'In-House Engineering Teams',
      description:
        'Every installation—from structural roof mounting and DC string wiring to BS7671 consumer units and MVHR ductwork—is delivered directly by our employed NICEIC and MCS qualified engineers.',
    },
    {
      icon: Layers,
      title: 'Whole-Building Renewable Integration',
      description:
        'Drawing on our Air-Site Ltd HVAC and building services heritage, we engineer solar PV, battery storage, EV charging, free cooling, LED lighting, and infrared heating to perform together seamlessly.',
    },
    {
      icon: ShieldCheck,
      title: 'Full Grid & Compliance Accountability',
      description:
        'We handle SSEN and National Grid G98, G99, and G100 export applications, structural sign-off, Smart Export Guarantee documentation, and commercial capital allowance packs from start to finish.',
    },
  ];

  const milestones = [
    { label: 'Established', value: 'June 2006 (20+ Years in Business)' },
    { label: 'Free Cooling Across Europe', value: '40,000+ Systems Sold' },
    { label: 'MCS Certificate', value: COMPANY_DETAILS.mcsNumber },
    { label: 'Showroom & Hub', value: '441 Poole Road, BH12 1DH' },
  ];

  return (
    <div id="about" className="bg-white">
      {/* Full-Bleed Hero Banner with Scroll Fade-Away Effect */}
      <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24 bg-white">
        {/* Background Storefront Image with Scroll Fade */}
        <div
          className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none bg-white will-change-[opacity]"
          style={{ opacity: backgroundOpacity }}
        >
          <img
            src="/assets/aistudio/SusTechS_841fafa9.webp"
            alt="Sustechs Sustainable Technology and Solutions Centre exterior at 441 Poole Road, Branksome, Poole"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-center transition-all duration-500"
          />
        </div>

        {/* Contrast Scrim — lightens as user scrolls */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: Math.max(0.25, 1 - (scrollY / 600) * 0.7),
            backgroundImage:
              'linear-gradient(to right, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.65) 55%, rgba(15, 23, 42, 0.22) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Soft, tall top fade so header links remain legible with zero hard band */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-56 z-10 bg-gradient-to-b from-slate-950/45 via-slate-950/15 to-transparent"
          aria-hidden="true"
        />

        {/* Smooth Bottom Fade into White Section Canvas */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-44 z-10 bg-gradient-to-t from-white via-white/65 to-transparent"
          aria-hidden="true"
        />

        {/* Hero Text Content with Scroll Fade & Upward Drift */}
        <div
          className={`relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full will-change-transform ${
            isContentHidden ? 'pointer-events-none' : ''
          }`}
          style={{
            opacity: contentOpacity,
            transform: `translate3d(0, -${contentTranslateY}px, 0)`,
          }}
        >
          <div className="max-w-2xl lg:max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-400 drop-shadow-md">
              <span>About Us</span>
              <span aria-hidden="true">·</span>
              <span>Poole Centre of Excellence</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-lime-300">Est. June 2006</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance] drop-shadow-xl">
              Over 20 years of proven{' '}
              <span className="bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] bg-clip-text text-transparent">
                clean-energy engineering.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-100 drop-shadow-md">
              {COMPANY_DETAILS.legalName} has been in business for more than 20 years since June 2006, operating from our working showroom and technical centre at 441 Poole Road. Over the past two decades, we have sold more than 40,000 free cooling systems all around Europe while installing extensive solar PV arrays, battery storage systems, and EV chargers across the UK.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-200 drop-shadow-md">
              Together, these technologies empower our commercial and residential customers to cut electricity demand, operate with higher energy efficiency, and make a lasting positive impact on the environment—all backed by our in-house NICEIC and MCS certified engineering teams.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 transition-all hover:brightness-105 hover:shadow-xl hover:shadow-lime-500/30 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Book Showroom Visit or Survey</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('case-studies')}
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/90 backdrop-blur-md px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-900 hover:bg-white transition-colors cursor-pointer whitespace-nowrap shadow-lg shadow-black/20"
              >
                Explore Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Below Hero */}
      <section className="py-16 lg:py-24 relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Verified Track Record Bar */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left sm:text-center">
              {TRUST_METRICS.map((metric) => (
                <div key={metric.label}>
                  <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-slate-600 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Showroom Tour Video + Key Milestones Split */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-lime-700">
                  Company Profile &amp; Heritage
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Visit our Sustainable Technology &amp; Solutions Centre.
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Step inside our Poole showroom to inspect live Fox ESS and GivEnergy battery walls, smart EV chargers, and solar arrays before specifying systems for your property.
                </p>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                {milestones.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-slate-200 pb-2.5 sm:border-b-0 sm:pb-0"
                  >
                    <dt className="text-[11px] uppercase tracking-wider text-slate-500">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-xs sm:text-sm font-semibold text-slate-900">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-[320px] sm:h-[400px] w-full bg-slate-50">
                  {isConfiguredExternalMediaUrl(EXTERNAL_VIDEO_URLS.showroomTour) ? (
                    <video
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="/assets/aistudio/SusTechS_841fafa9.webp"
                      aria-label="Sustechs Poole Showroom Tour Video"
                      className="h-full w-full object-cover object-center"
                    >
                      <source src={EXTERNAL_VIDEO_URLS.showroomTour} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src="/assets/aistudio/SusTechS_841fafa9.webp"
                      alt="Sustechs Poole Centre of Excellence Showroom Exterior"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-contain bg-slate-50"
                    />
                  )}
                </div>
                <div className="border-t border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono uppercase tracking-wider text-lime-700 font-semibold">
                    <span>Working Technology Centre</span>
                    <span>Branksome · Poole</span>
                  </div>
                  <div className="mt-1 text-base font-bold text-slate-900">
                    Inside 441 Poole Road
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Engineering Pillars */}
          <div className="mt-16 pt-14 border-t border-slate-200">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-lime-700">
                How We Work
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Engineering accountability from first survey to grid export.
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-100 border border-lime-300 text-lime-800">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-slate-900">{pillar.title}</h3>
                      <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact & Service Territory Strip */}
          <div className="mt-14 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-lime-50/70 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-700">
                <Compass className="h-4 w-4" />
                <span>South Coast Operations Hub</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Serving {COMPANY_DETAILS.serviceCoverage}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-700 pt-1">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-lime-700 shrink-0" />
                  {COMPANY_DETAILS.address}
                </span>
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="inline-flex items-center gap-2 hover:text-lime-700 transition-colors"
                >
                  <Phone className="h-4 w-4 text-lime-700 shrink-0" />
                  {COMPANY_DETAILS.phone}
                </a>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="inline-flex items-center gap-2 hover:text-lime-700 transition-colors"
                >
                  <Mail className="h-4 w-4 text-lime-700 shrink-0" />
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={() => onNavigate('accreditations')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-semibold text-slate-800 hover:border-lime-600 hover:text-lime-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                <Award className="h-4 w-4 text-lime-700" />
                <span>View Accreditations</span>
              </button>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] px-5 py-3 text-xs font-bold text-slate-950 transition-all hover:brightness-105 cursor-pointer whitespace-nowrap"
              >
                <span>Speak With Our Engineers</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
