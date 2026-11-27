import React, { useState, useEffect } from 'react';
import {
  CASE_STUDIES,
  CASE_STUDIES_DROPDOWN_ITEMS,
  isConfiguredExternalMediaUrl,
} from '../data/sustechsData';
import { PageId } from '../types';
import {
  MapPin,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  FolderOpen,
  Sun,
  Wind,
  Lightbulb,
  Play,
  BatteryCharging,
  ShieldCheck,
  Layers,
  Zap,
  Flame,
  Activity,
} from 'lucide-react';

interface CaseStudiesSectionProps {
  selectedSlug?: string;
  onNavigate?: (page: PageId) => void;
  onOpenConsultation: (serviceTitle?: string, notes?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  selectedSlug,
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'commercial' | 'residential'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  useEffect(() => {
    setSelectedPhotoIndex(0);
  }, [selectedSlug]);

  const focusedStudy = selectedSlug
    ? CASE_STUDIES.find((study) => study.slug === selectedSlug)
    : undefined;

  // Dedicated Folder Page View (e.g. /case-studies/verwood-dental)
  if (focusedStudy) {
    const gallery = focusedStudy.gallery || [
      {
        src: focusedStudy.image,
        title: focusedStudy.title,
        tag: focusedStudy.clientType,
        caption: focusedStudy.systemSummary,
      },
    ];
    const activePhoto = gallery[selectedPhotoIndex] || gallery[0];

    return (
      <section id="case-studies" className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb & Folder Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <button
                type="button"
                onClick={() => onNavigate?.('case-studies')}
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-lime-700 transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Case Studies</span>
              </button>
              <span aria-hidden="true">/</span>
              <span className="inline-flex items-center gap-1.5 text-lime-700 font-semibold">
                <FolderOpen className="h-3.5 w-3.5" />
                <span>{focusedStudy.folderName || focusedStudy.title}</span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>{focusedStudy.clientType}</span>
              <span aria-hidden="true">·</span>
              <span>{focusedStudy.location}</span>
            </div>
          </div>

          {/* Folder Intro & Interactive Photo Gallery */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-700">
                  <FolderOpen className="h-4 w-4" />
                  <span>Case Study Folder · {focusedStudy.folderName}</span>
                </div>

                <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
                  {focusedStudy.title}
                </h1>

                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-lime-700 shrink-0" />
                  <span>{focusedStudy.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    {gallery.some((g) => g.mediaType === 'video')
                      ? `${gallery.filter((g) => g.mediaType !== 'video').length} Photos · ${
                          gallery.filter((g) => g.mediaType === 'video').length
                        } Video`
                      : `${gallery.length} Site Photos`}
                  </span>
                </div>

                <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {focusedStudy.overview}
                </p>

                {/* Key Highlights */}
                <div className="mt-6 space-y-3">
                  {focusedStudy.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-lime-700 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500">
                    Installed Scope
                  </span>
                  <div className="mt-1 font-mono text-sm font-bold text-slate-900 tabular-nums">
                    {focusedStudy.metrics.systemCapacity}
                  </div>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500">
                    Efficiency Impact
                  </span>
                  <div className="mt-1 font-mono text-sm font-bold text-lime-700 tabular-nums">
                    {focusedStudy.metrics.annualGenerationOrSavings}
                  </div>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500">
                    Carbon Offset
                  </span>
                  <div className="mt-1 font-mono text-sm font-bold text-slate-900 tabular-nums">
                    {focusedStudy.metrics.co2OffsetPerYear}
                  </div>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500">
                    Payback Target
                  </span>
                  <div className="mt-1 font-mono text-sm font-bold text-lime-700 tabular-nums">
                    {focusedStudy.metrics.paybackAchieved}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onOpenConsultation(
                      focusedStudy.folderName || focusedStudy.title,
                      `Enquiry inspired by the ${focusedStudy.folderName || focusedStudy.title} case study.`
                    )
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 transition-all hover:brightness-105 cursor-pointer whitespace-nowrap"
                >
                  <span>Request Similar Survey</span>
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate?.('case-studies')}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 hover:border-lime-600 hover:text-lime-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  All Case Studies
                </button>
              </div>
            </div>

            {/* Right Interactive Gallery Column (Photos + Video) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-[380px] sm:h-[480px] lg:h-[520px] w-full bg-slate-50 flex items-center justify-center p-2">
                  {activePhoto.mediaType === 'video' ? (
                    isConfiguredExternalMediaUrl(activePhoto.src) ? (
                      <video
                        key={activePhoto.src}
                        controls
                        playsInline
                        autoPlay
                        muted
                        loop
                        poster={activePhoto.poster}
                        className="h-full w-full object-contain bg-slate-900 rounded-lg"
                      >
                        <source src={activePhoto.src} type="video/mp4" />
                      </video>
                    ) : (
                      <div className="relative h-full w-full flex items-center justify-center bg-slate-100 rounded-lg overflow-hidden">
                        <img
                          src={activePhoto.poster || focusedStudy.image}
                          alt={activePhoto.title}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-contain opacity-85"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/55 px-6 text-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-400/95 text-slate-950 shadow-lg">
                            <Play className="h-5 w-5 fill-slate-950 ml-0.5" />
                          </div>
                          <p className="mt-3 text-xs sm:text-sm font-semibold text-white">
                            External Video Placeholder
                          </p>
                          <p className="mt-1 max-w-md text-[11px] sm:text-xs text-slate-200">
                            Set the hosted MP4 URL in <span className="font-mono text-lime-300">EXTERNAL_VIDEO_URLS</span> inside <span className="font-mono">src/data/sustechsData.ts</span> to stream this walkthrough.
                          </p>
                        </div>
                      </div>
                    )
                  ) : (
                    <img
                      src={activePhoto.src}
                      alt={activePhoto.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-contain rounded-lg transition-all duration-300"
                    />
                  )}
                </div>
                <div className="border-t border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono uppercase tracking-wider text-lime-700 font-semibold">
                    <span>{activePhoto.tag}</span>
                    <span className="tabular-nums">
                      Media {selectedPhotoIndex + 1} of {gallery.length}
                    </span>
                  </div>
                  <h2 className="mt-1 text-base sm:text-lg font-bold text-slate-900">
                    {activePhoto.title}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activePhoto.caption}
                  </p>
                </div>
              </div>

              {/* Media Thumbnail Strip */}
              {gallery.length > 1 && (
                <div
                  className={`grid gap-3 ${
                    gallery.length === 2
                      ? 'grid-cols-2'
                      : gallery.length === 3
                      ? 'grid-cols-3'
                      : gallery.length === 5
                      ? 'grid-cols-2 sm:grid-cols-5'
                      : 'grid-cols-2 sm:grid-cols-4'
                  }`}
                >
                {gallery.map((photo, index) => {
                  const isSelected = index === selectedPhotoIndex;
                  const thumbSrc =
                    photo.mediaType === 'video'
                      ? photo.poster || focusedStudy.image
                      : photo.src;
                  return (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => setSelectedPhotoIndex(index)}
                      className={`group text-left overflow-hidden rounded-xl border transition-all cursor-pointer bg-white ${
                        isSelected
                          ? 'border-lime-600 ring-2 ring-lime-500/25'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 p-1">
                        <img
                          src={thumbSrc}
                          alt={photo.title}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-contain transition-transform duration-300"
                        />
                        {photo.mediaType === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/35">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400/95 text-slate-950 shadow-md">
                              <Play className="h-4 w-4 fill-slate-950 ml-0.5" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-2.5 border-t border-slate-100">
                        <div
                          className={`text-[10px] font-mono uppercase tracking-wider truncate ${
                            isSelected ? 'text-lime-700 font-semibold' : 'text-slate-500'
                          }`}
                        >
                          {photo.tag}
                        </div>
                        <div className="mt-0.5 text-xs font-semibold text-slate-900 truncate">
                          {photo.title}
                        </div>
                      </div>
                    </button>
                  );
                })}
                </div>
              )}
            </div>
          </div>

          {/* Installed Technologies Breakdown */}
          {focusedStudy.technologies && focusedStudy.technologies.length > 0 && (
            <div className="mt-14 pt-12 border-t border-slate-200">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-lime-700">
                  Integrated Engineering Scope
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                  Installed systems inside the {focusedStudy.folderName || focusedStudy.title} folder.
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {focusedStudy.technologies.map((tech, idx) => {
                  const isBatterySolarProject =
                    focusedStudy.slug === 'residential-in-built-solar-pv' ||
                    focusedStudy.slug === 'residential-fox-ep12' ||
                    focusedStudy.slug === 'givenergy-gen3' ||
                    focusedStudy.slug === 'solar-pergola';
                  const isFlatRoofProject = focusedStudy.slug === 'flat-roof-solar';
                  const isCompleteSystemProject =
                    focusedStudy.slug === 'complete-solar-battery-ev';
                  const isAllInOneProject = focusedStudy.slug === 'givenergy-all-in-one';
                  const isCommercialLedProject = focusedStudy.slug === 'beagle-aircraft-led';
                  const isInfraredHeatingProject =
                    focusedStudy.slug === 'factory-infrared-heating';
                  const isFreeCoolingProject =
                    focusedStudy.slug === 'deltamaster-server-building-4' ||
                    focusedStudy.slug === 'deltamaster-server-room-1' ||
                    focusedStudy.slug === 'deltamaster-server-room-6';
                  const Icon = isFreeCoolingProject
                    ? idx === 0
                      ? Wind
                      : idx === 1
                      ? Activity
                      : ShieldCheck
                    : isInfraredHeatingProject
                    ? idx === 0
                      ? Flame
                      : idx === 1
                      ? Activity
                      : ShieldCheck
                    : isCommercialLedProject
                    ? idx === 0
                      ? Lightbulb
                      : idx === 1
                      ? Zap
                      : ShieldCheck
                    : isAllInOneProject
                    ? idx === 0
                      ? BatteryCharging
                      : idx === 1
                      ? Zap
                      : ShieldCheck
                    : isCompleteSystemProject
                    ? idx === 0
                      ? Sun
                      : idx === 1
                      ? BatteryCharging
                      : Zap
                    : isFlatRoofProject
                    ? idx === 0
                      ? Layers
                      : idx === 1
                      ? Sun
                      : ShieldCheck
                    : isBatterySolarProject
                    ? idx === 0
                      ? Sun
                      : idx === 1
                      ? BatteryCharging
                      : ShieldCheck
                    : idx === 0
                    ? Sun
                    : idx === 1
                    ? Wind
                    : Lightbulb;
                  return (
                    <div
                      key={tech.name}
                      className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-100 border border-lime-300 text-lime-800">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-slate-900">{tech.name}</h3>
                        <p className="mt-1 text-xs font-mono text-lime-700 font-medium">{tech.scope}</p>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                          {tech.details}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  const filtered = CASE_STUDIES.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'commercial') return item.clientType !== 'Residential Property';
    if (activeTab === 'residential') return item.clientType === 'Residential Property';
    return true;
  });

  return (
    <section id="case-studies" className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-700">
              <span>Demonstrated Performance</span>
              <span aria-hidden="true">·</span>
              <span>South Coast Projects</span>
            </div>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
              Engineered evidence across Dorset and the South Coast.
            </h1>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Explore project folders and real commercial, healthcare, and residential installations operating with verified energy savings and grid compliance.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 border border-slate-200 rounded-xl shrink-0 self-start md:self-end">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'commercial'
                  ? 'bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Commercial &amp; Clinical
            </button>
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'residential'
                  ? 'bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Residential
            </button>
          </div>
        </div>

        {/* Project Folders inside Case Studies */}
        <div className="mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-700">
              <FolderOpen className="h-4 w-4" />
              <span>Case Study Folders</span>
            </div>
            <span className="text-xs text-slate-500">
              Click a project folder to inspect all site photos &amp; installed systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES_DROPDOWN_ITEMS.map((folder) => {
              const matchedStudy = CASE_STUDIES.find((c) => c.slug === folder.slug);
              const previewPhotos = matchedStudy?.gallery?.slice(0, 4) || [];
              return (
                <button
                  key={folder.slug}
                  type="button"
                  onClick={() => onNavigate?.(folder.pageId)}
                  className="group text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-600 rounded-2xl"
                >
                  {/* Visual Folder Top Tab */}
                  <div className="inline-flex items-center gap-2 rounded-t-xl border border-b-0 border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-semibold text-lime-700 group-hover:border-lime-500 transition-colors">
                    <FolderOpen className="h-3.5 w-3.5" />
                    <span>{folder.folderName}</span>
                    <span className="font-mono text-slate-500 tabular-nums">
                      ({matchedStudy?.gallery?.length || folder.photoCount})
                    </span>
                  </div>

                  {/* Folder Body */}
                  <div className="rounded-b-2xl rounded-tr-2xl border border-slate-200 bg-white p-4 transition-all group-hover:border-lime-500 group-hover:shadow-md group-hover:shadow-slate-900/5">
                    {previewPhotos.length > 0 && (
                      <div
                        className={`grid gap-1.5 mb-3.5 ${
                          previewPhotos.length === 1
                            ? 'grid-cols-1'
                            : previewPhotos.length === 2
                            ? 'grid-cols-2'
                            : previewPhotos.length === 3
                            ? 'grid-cols-3'
                            : 'grid-cols-4'
                        }`}
                      >
                        {previewPhotos.map((photo) => {
                          const thumbSrc =
                            photo.mediaType === 'video'
                              ? photo.poster || matchedStudy?.image || photo.src
                              : photo.src;
                          return (
                            <div
                              key={photo.src}
                              className={`relative overflow-hidden rounded-lg bg-slate-50 border border-slate-200 ${
                                previewPhotos.length === 1 ? 'h-32 w-full' : 'aspect-square'
                              }`}
                            >
                              <img
                                src={thumbSrc}
                                alt={photo.title}
                                referrerPolicy="no-referrer"
                                className="h-full w-full object-contain transition-transform duration-300"
                              />
                              {photo.mediaType === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/35">
                                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400/95 text-slate-950">
                                    <Play className="h-3 w-3 fill-slate-950 ml-0.5" />
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-base font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                          {folder.folderName}
                        </div>
                        <div className="mt-0.5 text-xs text-slate-600">
                          {folder.summary}
                        </div>
                      </div>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-lime-700 group-hover:bg-lime-600 group-hover:text-white group-hover:border-lime-600 transition-colors">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Cards */}
        <div className="mt-10 space-y-10">
          {filtered.map((study) => {
            const folderItem = CASE_STUDIES_DROPDOWN_ITEMS.find((f) => f.slug === study.slug);
            return (
              <div
                key={study.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:shadow-slate-900/5"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Visual Image Column */}
                  <div className="lg:col-span-5 flex flex-col bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200">
                    <div className="relative aspect-[16/10] lg:flex-grow overflow-hidden bg-slate-50">
                      <img
                        src={study.image}
                        alt={study.title}
                        referrerPolicy="no-referrer"
                        className={`h-full w-full ${
                          study.slug === 'residential-in-built-solar-pv' ||
                          study.slug === 'residential-fox-ep12' ||
                          study.slug === 'flat-roof-solar' ||
                          study.slug === 'complete-solar-battery-ev' ||
                          study.slug === 'givenergy-gen3' ||
                          study.slug === 'givenergy-all-in-one' ||
                          study.slug === 'solar-pergola' ||
                          study.slug === 'beagle-aircraft-led' ||
                          study.slug === 'factory-infrared-heating' ||
                          study.slug === 'deltamaster-server-building-4' ||
                          study.slug === 'deltamaster-server-room-1' ||
                          study.slug === 'deltamaster-server-room-6'
                            ? 'object-contain'
                            : 'object-cover'
                        }`}
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-xs font-medium text-slate-800 border border-slate-200 shadow-sm">
                        {study.clientType}
                      </div>
                    </div>

                    {/* Mini Media Strip if Case Study has a Gallery */}
                    {study.gallery && study.gallery.length > 1 && (
                      <div
                        className={`grid gap-1 bg-slate-100 p-1.5 border-t border-slate-200 ${
                          study.gallery.length === 2
                            ? 'grid-cols-2'
                            : study.gallery.length === 3
                            ? 'grid-cols-3'
                            : study.gallery.length === 5
                            ? 'grid-cols-5'
                            : 'grid-cols-4'
                        }`}
                      >
                        {study.gallery.map((photo, idx) => {
                          const thumbSrc =
                            photo.mediaType === 'video' ? photo.poster || study.image : photo.src;
                          return (
                            <button
                              key={photo.src}
                              type="button"
                              onClick={() => {
                                if (folderItem) {
                                  onNavigate?.(folderItem.pageId);
                                }
                              }}
                              title={`Open ${study.folderName || study.title} media ${idx + 1}: ${photo.title}`}
                              className="relative aspect-[4/3] overflow-hidden rounded cursor-pointer group bg-white border border-slate-200"
                            >
                              <img
                                src={thumbSrc}
                                alt={photo.title}
                                referrerPolicy="no-referrer"
                                className="h-full w-full object-contain transition-transform duration-300"
                              />
                              {photo.mediaType === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/35">
                                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400/95 text-slate-950">
                                    <Play className="h-3 w-3 fill-slate-950 ml-0.5" />
                                  </div>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Content & Metrics Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Location & Folder Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                          <MapPin className="h-3.5 w-3.5 text-lime-700 shrink-0" />
                          <span>{study.location}</span>
                        </div>

                        {folderItem && (
                          <button
                            type="button"
                            onClick={() => onNavigate?.(folderItem.pageId)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime-700 hover:text-lime-800 transition-colors cursor-pointer"
                          >
                            <FolderOpen className="h-3.5 w-3.5" />
                            <span>Open {folderItem.folderName} Folder</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>

                      <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                        {study.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-lime-700 font-medium">
                        {study.systemSummary}
                      </p>

                    <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                      {study.overview}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="mt-5 space-y-2">
                      {study.keyHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle className="h-4 w-4 text-lime-700 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quantitative Metrics Bar */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-slate-500">Capacity</span>
                        <div className="mt-1 font-mono text-sm sm:text-base font-bold text-slate-900 tabular-nums">
                          {study.metrics.systemCapacity}
                        </div>
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-slate-500">Financial Impact</span>
                        <div className="mt-1 font-mono text-sm sm:text-base font-bold text-lime-700 tabular-nums">
                          {study.metrics.annualGenerationOrSavings}
                        </div>
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-slate-500">CO₂e Displaced</span>
                        <div className="mt-1 font-mono text-sm sm:text-base font-bold text-slate-900 tabular-nums">
                          {study.metrics.co2OffsetPerYear}
                        </div>
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-slate-500">Payback</span>
                        <div className="mt-1 font-mono text-sm sm:text-base font-bold text-lime-700 tabular-nums">
                          {study.metrics.paybackAchieved}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-lime-50/70 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-slate-900">Have a property or facility in Dorset or Hampshire?</h4>
            <p className="mt-1 text-sm text-slate-600">
              Our engineering team conducts full structural roof surveys and half-hourly interval consumption audits.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation()}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] px-5 py-3 text-xs font-bold text-slate-950 transition-all hover:brightness-105 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Book Engineering Survey</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
