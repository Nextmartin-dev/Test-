import React from 'react';
import { CERTIFICATIONS } from '../data/sustechsData';
import { ShieldCheck, Cpu, Network, Award } from 'lucide-react';

export const AccreditationSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Desktop Feasibility & Half-Hourly Audit',
      desc: 'We analyze your site irradiance, roof pitch, structural load limits, and 30-minute interval smart meter consumption profiles.',
    },
    {
      num: '02',
      title: 'Structural CAD & DNO G99 Clearance',
      desc: 'Our engineers lodge grid applications with Scottish & Southern Electricity Networks (SSEN) and verify structural integrity.',
    },
    {
      num: '03',
      title: 'Precision Turnkey Installation',
      desc: 'Installed by in-house NICEIC and MCS qualified technicians with zero subcontracted shortcuts or uncertified components.',
    },
    {
      num: '04',
      title: 'Commissioning, Grants & 24/7 Monitoring',
      desc: 'MCS handover pack, £7,500 BUS or OZEV grant documentation, SEG registration, and cloud performance monitoring setup.',
    },
  ];

  return (
    <section id="standards" className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-700">
            <span>Rigorous Standards</span>
            <span aria-hidden="true">·</span>
            <span>Accreditations &amp; Engineering</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
            Engineering integrity backed by UK statutory certifications.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Renewable installations require exacting electrical standards, robust structural mounting, and formal distribution network approvals. Sustechs maintains full compliance across all national schemes.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-colors hover:border-slate-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-lime-700">
                  {cert.badge}
                </span>
                <ShieldCheck className="h-5 w-5 text-lime-700" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{cert.name}</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4-Step Engineering Workflow */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              Our 4-Stage Turnkey Delivery Process
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clear accountability from initial load profile modeling to post-commissioning maintenance.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="rounded-xl border border-slate-200 bg-white p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-2xl font-bold text-lime-700 tabular-nums">
                    {st.num}
                  </div>
                  <h4 className="mt-3 text-base font-bold text-slate-900">{st.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Local Network Authority Callout */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <Network className="h-6 w-6 text-lime-700 shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Official DNO Grid Connection Liaison in Dorset &amp; Hampshire
              </h4>
              <p className="mt-1 text-xs text-slate-600">
                Direct integration with Scottish &amp; Southern Electricity Networks (SSEN) and National Grid Electricity Distribution for fast G98, G99, and G100 fast-track approvals.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-800 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
            <Cpu className="h-4 w-4 text-lime-700" />
            <span>SSEN Region: Southern</span>
          </div>
        </div>
      </div>
    </section>
  );
};
