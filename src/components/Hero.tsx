import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, CheckCircle2, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { COMPANY_DETAILS, EXTERNAL_VIDEO_URLS, isConfiguredExternalMediaUrl } from '../data/sustechsData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const hasShowroomVideo = isConfiguredExternalMediaUrl(EXTERNAL_VIDEO_URLS.showroomTour);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(hasShowroomVideo);
  const [isMuted, setIsMuted] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Smooth scroll position tracking with requestAnimationFrame
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

  // Ensure autoplay starts cleanly across browsers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {
      setIsPlaying(false);
    });
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Calculate scroll-based opacity: smoothly fades from 1.0 at top down to 0 at ~400px scroll
  const scrollFadeThreshold = 400;
  const contentOpacity = Math.max(0, Math.min(1, 1 - scrollY / scrollFadeThreshold));

  // Subtle upward parallax drift as text fades
  const contentTranslateY = Math.min(45, (scrollY / scrollFadeThreshold) * 40);
  const isContentHidden = contentOpacity < 0.02;

  return (
    <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24 bg-white">
      {/* 
        Sustechs Poole Showroom Media Layer:
        Streams external showroom video once configured in EXTERNAL_VIDEO_URLS.showroomTour,
        falling back cleanly to the WebP storefront image while external URL is pending.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none bg-white">
        {hasShowroomVideo ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            poster="/assets/aistudio/SusTechS_841fafa9.webp"
            aria-label="Sustechs Poole Centre of Excellence renewable energy showroom video tour"
            className="h-full w-full object-cover object-[50%_58%] transition-all duration-500"
          >
            <source src={EXTERNAL_VIDEO_URLS.showroomTour} type="video/mp4" />
          </video>
        ) : (
          <img
            src="/assets/aistudio/SusTechS_841fafa9.webp"
            alt="Sustechs Poole Centre of Excellence renewable energy showroom exterior"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-center transition-all duration-500"
          />
        )}
      </div>

      {/* 
        Asymmetric Cinematic Contrast Scrim:
        Darker on the left to guarantee WCAG AA text legibility over photography,
        and dynamically lightens as user scrolls so the media comes into clear focus.
      */}
      <div
        className="absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: Math.max(0.2, 1 - (scrollY / 600) * 0.7),
          backgroundImage:
            'linear-gradient(to right, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.62) 52%, rgba(15, 23, 42, 0.16) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Vertical fade to blend smoothly into the white sections below */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 z-10 bg-gradient-to-t from-white via-white/60 to-transparent"
        aria-hidden="true"
      />

      {/* Showroom Video Controls (Bottom-Right, shown only when video is configured) */}
      {hasShowroomVideo && (
        <div className="absolute bottom-6 right-6 z-30 flex flex-wrap items-center gap-2 rounded-2xl bg-white/92 backdrop-blur-md px-4 py-2.5 border border-slate-200 text-xs text-slate-700 shadow-lg shadow-slate-900/10">
          <div className="pr-3 border-r border-slate-200 hidden sm:block">
            <div className="font-semibold text-[11px] text-slate-900 tracking-tight">
              Poole Centre of Excellence
            </div>
            <div className="text-[10px] text-slate-500">
              441 Poole Road · Showroom Tour
            </div>
          </div>

          <button
            type="button"
            onClick={togglePlay}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer whitespace-nowrap"
            title={isPlaying ? 'Pause showroom video' : 'Play showroom video'}
          >
            {isPlaying ? (
              <>
                <Pause className="h-3.5 w-3.5 text-lime-700" />
                <span className="text-[11px] font-medium">Pause</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 text-lime-700" />
                <span className="text-[11px] font-medium">Play</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer whitespace-nowrap"
            title={isMuted ? 'Unmute video audio' : 'Mute video audio'}
            aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          >
            {isMuted ? (
              <>
                <VolumeX className="h-3.5 w-3.5 text-slate-500" />
                <span className="text-[11px] font-medium">Muted</span>
              </>
            ) : (
              <>
                <Volume2 className="h-3.5 w-3.5 text-lime-700" />
                <span className="text-[11px] font-medium">Sound On</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* 
        Main Hero Content:
        Dynamically applies scroll-based opacity and subtle upward parallax drift
        so the text dissolves subtly as the user scrolls, keeping focus on the video.
      */}
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
          {/* Frameless Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-lime-400 drop-shadow-md">
            <span>South Coast Renewable Engineering</span>
            <span aria-hidden="true">·</span>
            <span>Poole Centre of Excellence</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-lime-300">MCS {COMPANY_DETAILS.mcsNumber}</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance] drop-shadow-xl">
            Decarbonise your power.{' '}
            <span className="bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] bg-clip-text text-transparent">
              Protect your bottom line.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-200 [text-wrap:balance] drop-shadow-md">
            Sustechs designs, supplies, and installs precision commercial and domestic solar PV arrays, battery energy storage systems (BESS), heat pumps, and EV charging infrastructure. We manage full Scottish &amp; Southern Electricity Networks (SSEN) G99 grid approvals from our technical centre in Poole.
          </p>

          {/* Trust Markers */}
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-100">
            <div className="flex items-center gap-2 drop-shadow-md">
              <CheckCircle2 className="h-4 w-4 text-lime-400 shrink-0" />
              <span>MCS Certified (NIC-600637) &amp; RECC Assured</span>
            </div>
            <div className="flex items-center gap-2 drop-shadow-md">
              <CheckCircle2 className="h-4 w-4 text-lime-400 shrink-0" />
              <span>Full SSEN G98/G99 DNO Grid Connection</span>
            </div>
            <div className="flex items-center gap-2 drop-shadow-md">
              <CheckCircle2 className="h-4 w-4 text-lime-400 shrink-0" />
              <span>100% First-Year Full Expensing Tax Relief</span>
            </div>
            <div className="flex items-center gap-2 drop-shadow-md">
              <CheckCircle2 className="h-4 w-4 text-lime-400 shrink-0" />
              <span>£7,500 Boiler Upgrade Scheme &amp; 0% VAT</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] px-7 py-4 text-sm font-bold text-slate-950 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-lime-500/30 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Request Free Site Survey</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
