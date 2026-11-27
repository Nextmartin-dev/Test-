import React, { useState } from 'react';
import { SOLUTIONS, SOLUTIONS_DROPDOWN_ITEMS } from '../data/sustechsData';
import { SectorType, RenewableSolution, SolutionSlug, PageId } from '../types';
import { Check, ChevronDown, ChevronUp, ArrowRight, ArrowLeft } from 'lucide-react';

interface SolutionsSectionProps {
  selectedSlug?: SolutionSlug;
  onNavigate?: (page: PageId) => void;
  onSelectSolution: (solutionTitle: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  selectedSlug,
  onNavigate,
  onSelectSolution,
}) => {
  const [activeFilter, setActiveFilter] = useState<SectorType>('all');
  const [expandedSpecId, setExpandedSpecId] = useState<string | null>(null);

  const focusedSolution = selectedSlug
    ? SOLUTIONS.find((s) => s.slug === selectedSlug)
    : undefined;

  // Dedicated Page View for any of the 5 Dropdown Solutions
  if (focusedSolution) {
    return (
      <section id="solutions" className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb & Quick Solution Switcher */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <button
                type="button"
                onClick={() => onNavigate?.('solutions')}
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-lime-700 transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>All Solutions</span>
              </button>
              <span aria-hidden="true">/</span>
              <span className="text-lime-700 font-semibold">
                {focusedSolution.shortTitle || focusedSolution.title}
              </span>
            </div>

            {/* Quick Tabs across the Core Solutions */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 border border-slate-200 rounded-xl">
              {SOLUTIONS_DROPDOWN_ITEMS.map((item) => {
                const isActive = item.slug === focusedSolution.slug;
                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => onNavigate?.(`solution-${item.slug}` as PageId)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] text-slate-950 shadow-sm'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Focused Hero Split (2-column balanced stretch) */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-700">
                  <span>
                    {focusedSolution.sector === 'both'
                      ? 'Commercial & Domestic'
                      : focusedSolution.sector === 'commercial'
                      ? 'Commercial & Industrial'
                      : 'Residential'}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Sustechs Engineering</span>
                </div>

                <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
                  {focusedSolution.title}
                </h1>

                <p className="mt-3 text-base sm:text-lg text-slate-700 font-medium">
                  {focusedSolution.subtitle}
                </p>

                <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600">
                  {focusedSolution.overview}
                </p>

                {/* Key Benefits */}
                <div className="mt-6 space-y-3">
                  {focusedSolution.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-lime-700 mt-1 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectSolution(focusedSolution.title)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:brightness-105 cursor-pointer whitespace-nowrap"
                >
                  <span>Request Specification &amp; Survey</span>
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 relative">
                <img
                  src={focusedSolution.image}
                  alt={focusedSolution.imageAlt}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/65 to-transparent p-6">
                  <div className="text-xs font-mono text-lime-400">
                    {focusedSolution.paybackHorizon}
                  </div>
                  {focusedSolution.grantEligibility && (
                    <div className="mt-1 text-xs text-slate-200">
                      {focusedSolution.grantEligibility}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Engineering Specifications & Hardware Ecosystem */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-slate-900">
                Engineering Specifications
              </h2>
              <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                {focusedSolution.specs.map((spec) => (
                  <div key={spec.label} className="border-b border-slate-200 pb-3">
                    <dt className="text-xs text-slate-500 font-medium">{spec.label}</dt>
                    <dd className="mt-1 font-semibold text-slate-900 tabular-nums">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Hardware &amp; Engineering Ecosystem
                </h2>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Installed exclusively by in-house NICEIC and MCS qualified engineers from our Poole hub.
                </p>
                <div className="mt-5 space-y-2.5">
                  {focusedSolution.popularBrands.map((brand) => (
                    <div
                      key={brand}
                      className="flex items-center justify-between border-b border-slate-200 pb-2 text-sm text-slate-800"
                    >
                      <span>{brand}</span>
                      <span className="text-xs text-lime-700 font-mono font-medium">Approved</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Verified Installation Benchmarks (e.g. DeltaMaster Free Cooling) */}
          {focusedSolution.installationBenchmarks &&
            focusedSolution.installationBenchmarks.length > 0 && (
              <div className="mt-14 pt-12 border-t border-slate-200">
                <div className="max-w-3xl">
                  <span className="text-xs font-semibold uppercase tracking-wider text-lime-700">
                    Top 3 Verified Energy Savings Installations
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                    Measured before &amp; after server room performance (up to 97% cooling reduction).
                  </h2>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Extracted from real DeltaMaster installations where mechanical air-conditioning compressors were displaced by ambient free cooling.
                  </p>
                </div>

                <div className="mt-8 space-y-8">
                  {focusedSolution.installationBenchmarks.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-slate-200">
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-lime-700 font-semibold">
                            {item.badge}
                          </span>
                          <h3 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm text-slate-600">
                            {item.specsSummary}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 shrink-0">
                          <div className="rounded-xl border border-lime-300 bg-lime-50 px-4 py-2 text-right">
                            <div className="text-[10px] uppercase tracking-wider text-lime-800 font-semibold">
                              Verified Saving
                            </div>
                            <div className="font-mono text-lg font-extrabold text-lime-700 tabular-nums">
                              {item.savingPercent} · {item.annualSavingsNote}
                            </div>
                          </div>

                          {item.caseStudyPageId && onNavigate && (
                            <button
                              type="button"
                              onClick={() => onNavigate(item.caseStudyPageId!)}
                              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs font-semibold text-slate-800 hover:border-lime-600 hover:text-lime-700 transition-colors cursor-pointer"
                            >
                              <span>Open Case Study</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Before vs After Comparison Strip */}
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                          <div className="text-[11px] uppercase tracking-wider text-slate-500">
                            Before (Mechanical AC)
                          </div>
                          <div className="mt-1 font-mono text-base font-bold text-slate-900 tabular-nums">
                            {item.beforeConsumption}
                          </div>
                          <div className="mt-0.5 text-xs text-slate-600 tabular-nums">
                            {item.beforeCost}
                          </div>
                        </div>

                        <div className="rounded-xl border border-lime-300 bg-lime-50 p-4">
                          <div className="text-[11px] uppercase tracking-wider text-lime-800 font-semibold">
                            After (DeltaMaster)
                          </div>
                          <div className="mt-1 font-mono text-base font-bold text-lime-800 tabular-nums">
                            {item.afterConsumption}
                          </div>
                          <div className="mt-0.5 text-xs text-lime-700 tabular-nums">
                            {item.afterCost}
                          </div>
                        </div>

                        <div className="sm:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col justify-center">
                          <div className="text-[11px] uppercase tracking-wider text-slate-500">
                            Engineering &amp; Acoustic Data
                          </div>
                          <div className="mt-1 text-xs sm:text-sm font-medium text-slate-800">
                            {item.technicalNote}
                          </div>
                        </div>
                      </div>

                      {/* Installation Pictures */}
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {item.images.map((img) => (
                          <div
                            key={img.src}
                            className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 flex flex-col"
                          >
                            <div className="h-[240px] sm:h-[280px] w-full flex items-center justify-center bg-white p-2">
                              <img
                                src={img.src}
                                alt={img.alt}
                                referrerPolicy="no-referrer"
                                className="h-full w-full object-contain rounded-lg"
                              />
                            </div>
                            <div className="border-t border-slate-200 px-4 py-2.5 text-xs font-medium text-slate-700">
                              {img.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Real Installation & Telemetry Gallery */}
          {focusedSolution.gallery && focusedSolution.gallery.length > 0 && (
            <div className="mt-14 pt-12 border-t border-slate-200">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-lime-700">
                  Real Installation &amp; Live Behaviour
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                  Zoned factory heating and verified operating telemetry.
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {focusedSolution.gallery.map((item) => (
                  <div
                    key={item.src}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white flex flex-col"
                  >
                    <div className="h-[320px] sm:h-[380px] w-full bg-slate-50 flex items-center justify-center p-2">
                      <img
                        src={item.src}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-contain rounded-lg"
                      />
                    </div>
                    <div className="border-t border-slate-200 p-5 sm:p-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-lime-700 font-semibold">
                        {item.tag}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // All Solutions Overview Page (/solutions)
  const filteredSolutions = SOLUTIONS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'commercial') return item.sector === 'commercial' || item.sector === 'both';
    if (activeFilter === 'domestic') return item.sector === 'domestic' || item.sector === 'both';
    return true;
  });

  const toggleSpecs = (id: string) => {
    setExpandedSpecId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="solutions" className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-700">
              <span>Engineering Solutions</span>
              <span aria-hidden="true">·</span>
              <span>Turnkey Delivery</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
              Renewable systems engineered for lifetime yield.
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Every system is specified with Tier 1 components, British MCS compliance, and bespoke structural and electrical engineering to suit your building fabric.
            </p>
          </div>

          {/* Interactive Filter Tabs / Segmented Control */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 border border-slate-200 rounded-xl shrink-0 self-start md:self-end">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              All Systems
            </button>
            <button
              onClick={() => setActiveFilter('commercial')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'commercial'
                  ? 'bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Commercial &amp; Industrial
            </button>
            <button
              onClick={() => setActiveFilter('domestic')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'domestic'
                  ? 'bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Domestic &amp; Residential
            </button>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSolutions.map((solution: RenewableSolution) => {
            const isExpanded = expandedSpecId === solution.id;
            return (
              <div
                key={solution.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:shadow-slate-900/5"
              >
                <div>
                  {/* Visual Asset Container */}
                  <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={solution.image}
                      alt={solution.imageAlt}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-mono font-semibold text-lime-700 rounded-md border border-slate-200 shadow-sm">
                      {solution.paybackHorizon}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <span>
                        {solution.sector === 'both'
                          ? 'Commercial & Domestic'
                          : solution.sector === 'commercial'
                          ? 'Commercial Only'
                          : 'Residential'}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>MCS / DNO Ready</span>
                    </div>

                    <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 font-normal">
                      {solution.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {solution.overview}
                    </p>

                    {/* Key Benefits List */}
                    <div className="mt-5 space-y-2.5">
                      {solution.keyBenefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="h-4 w-4 text-lime-700 mt-0.5 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Approved Equipment Ecosystem */}
                    <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">Tier 1 Hardware:</span>
                      {solution.popularBrands.map((brand, i) => (
                        <React.Fragment key={brand}>
                          <span>{brand}</span>
                          {i < solution.popularBrands.length - 1 && <span aria-hidden="true">·</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Expandable Technical Specifications */}
                    {isExpanded && (
                      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all">
                        <div className="text-xs font-bold uppercase tracking-wider text-lime-700 mb-3">
                          Engineering Specifications
                        </div>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          {solution.specs.map((spec) => (
                            <div key={spec.label} className="border-b border-slate-200 pb-2">
                              <dt className="text-slate-500 font-medium">{spec.label}</dt>
                              <dd className="mt-0.5 font-semibold text-slate-900 tabular-nums">{spec.value}</dd>
                            </div>
                          ))}
                        </dl>
                        {solution.grantEligibility && (
                          <div className="mt-3 text-xs text-lime-900 bg-lime-50 p-2.5 rounded-lg border border-lime-200">
                            <strong>UK Grant / Tax Relief:</strong> {solution.grantEligibility}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 mt-4">
                  <button
                    onClick={() => toggleSpecs(solution.id)}
                    className="flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Specifications' : 'View Engineering Specs'}</span>
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>

                  <div className="flex items-center gap-2">
                    {solution.slug && onNavigate && (
                      <button
                        type="button"
                        onClick={() => onNavigate(`solution-${solution.slug}` as PageId)}
                        className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-lime-700 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Full Details
                      </button>
                    )}

                    <button
                      onClick={() => onSelectSolution(solution.title)}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-50 px-4 py-2.5 text-xs font-semibold text-lime-800 border border-lime-300 hover:bg-gradient-to-r hover:from-[#6BB81C] hover:via-[#99CC14] hover:to-[#DCE627] hover:text-slate-950 hover:border-transparent transition-all cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>Request Specification</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
