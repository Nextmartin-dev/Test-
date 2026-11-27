import React from 'react';
import { ExternalLink, Star, ShieldCheck, MessageSquarePlus } from 'lucide-react';

const TRUSTPILOT_URL = 'https://uk.trustpilot.com/review/sustechs.co.uk';
const TRUSTPILOT_REVIEW_INVITE_URL = 'https://uk.trustpilot.com/evaluate/sustechs.co.uk';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="trustpilot-heading"
      className="py-16 lg:py-20 bg-white border-t border-slate-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Verified Trustpilot Score & Star Block */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-700">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span>Verified Independent Reviews</span>
              </div>

              <h2
                id="trustpilot-heading"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900"
              >
                Rated <span className="text-[#008f60]">Excellent</span> on Trustpilot
              </h2>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* 4.5 / 5 Trustpilot Star Row */}
                <div className="flex items-center gap-1" aria-label="4.5 out of 5 stars on Trustpilot">
                  {[0, 1, 2, 3].map((idx) => (
                    <span
                      key={idx}
                      className="flex h-7 w-7 items-center justify-center rounded bg-[#00b67a] text-white"
                    >
                      <Star className="h-4 w-4 fill-white" />
                    </span>
                  ))}
                  {/* Half Star for 4.5 */}
                  <span className="relative flex h-7 w-7 items-center justify-center rounded bg-slate-300 overflow-hidden text-white">
                    <span className="absolute inset-y-0 left-0 w-1/2 bg-[#00b67a]" aria-hidden="true" />
                    <Star className="relative z-10 h-4 w-4 fill-white" />
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-900 tabular-nums">
                  TrustScore <span className="font-mono text-[#008f60]">4.5</span> / 5
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Based on <span className="font-semibold text-slate-900">10 verified customer reviews</span> for{' '}
                <span className="font-mono text-lime-700 font-medium">sustechs.co.uk</span> on Trustpilot (Claimed Profile · Poole, Dorset).
              </p>
            </div>

            {/* Right: Direct Trustpilot Actions */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6 lg:border-l lg:border-slate-200 lg:pl-8">
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  See real, unedited feedback from homeowners and businesses across Poole, Bournemouth, Dorset, and Hampshire directly on our official Trustpilot profile.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                    <div className="text-slate-500">Trustpilot Rating</div>
                    <div className="mt-1 font-mono text-sm font-bold text-slate-900 tabular-nums">Excellent · 4.5/5</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                    <div className="text-slate-500">Profile Status</div>
                    <div className="mt-1 font-mono text-sm font-bold text-lime-700">Claimed &amp; Verified</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                    <div className="text-slate-500">Service Region</div>
                    <div className="mt-1 font-mono text-sm font-bold text-slate-900">Dorset &amp; South Coast</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={TRUSTPILOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00b67a] hover:bg-[#009c68] px-5 py-3 text-xs sm:text-sm font-bold text-white transition-colors whitespace-nowrap"
                >
                  <span>Read Our Reviews on Trustpilot</span>
                  <ExternalLink className="h-4 w-4" />
                </a>

                <a
                  href={TRUSTPILOT_REVIEW_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:border-lime-600 hover:text-lime-700 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 transition-colors whitespace-nowrap"
                >
                  <MessageSquarePlus className="h-4 w-4 text-lime-700" />
                  <span>Write a Review</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
