import React from 'react';
import { TRUST_METRICS } from '../data/sustechsData';

export const TrustBar: React.FC = () => {
  return (
    <section className="relative z-10 border-y border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {TRUST_METRICS.map((item) => (
            <div key={item.label} className="flex flex-col items-start sm:items-center text-left sm:text-center">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 tabular-nums">
                {item.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm text-slate-600 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
