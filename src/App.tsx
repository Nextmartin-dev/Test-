/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { HomeOverview } from './components/HomeOverview';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { AccreditationSection } from './components/AccreditationSection';
import { AboutUsSection } from './components/AboutUsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PageId, SolutionSlug } from './types';

const PATH_TO_PAGE: Record<string, PageId> = {
  '/': 'home',
  '/solutions': 'solutions',
  '/solutions/solar-and-battery': 'solution-solar-and-battery',
  '/solutions/ev-charger': 'solution-ev-charger',
  '/solutions/energy-monitoring': 'solution-energy-monitoring',
  '/solutions/free-cooling': 'solution-free-cooling',
  '/solutions/energy-assessment': 'solution-energy-assessment',
  '/solutions/residential-and-commercial-led': 'solution-residential-and-commercial-led',
  '/solutions/infrared-heating': 'solution-infrared-heating',
  '/case-studies': 'case-studies',
  '/case-studies/verwood-dental': 'case-study-verwood-dental',
  '/case-studies/residential-in-built-solar-pv': 'case-study-residential-inbuilt-solar-pv',
  '/case-studies/residential-fox-ep12': 'case-study-residential-fox-ep12',
  '/case-studies/flat-roof-solar': 'case-study-flat-roof-solar',
  '/case-studies/complete-solar-battery-ev': 'case-study-complete-solar-battery-ev',
  '/case-studies/givenergy-gen3': 'case-study-givenergy-gen3',
  '/case-studies/givenergy-all-in-one': 'case-study-givenergy-all-in-one',
  '/case-studies/solar-pergola': 'case-study-solar-pergola',
  '/case-studies/beagle-aircraft-led': 'case-study-beagle-aircraft-led',
  '/case-studies/factory-infrared-heating': 'case-study-factory-infrared-heating',
  '/case-studies/deltamaster-server-building-4': 'case-study-deltamaster-server-building-4',
  '/case-studies/deltamaster-server-room-1': 'case-study-deltamaster-server-room-1',
  '/case-studies/deltamaster-server-room-6': 'case-study-deltamaster-server-room-6',
  '/about': 'about',
  '/accreditations': 'accreditations',
  '/faq': 'faq',
};

const PAGE_TO_PATH: Record<PageId, string> = {
  home: '/',
  solutions: '/solutions',
  'solution-solar-and-battery': '/solutions/solar-and-battery',
  'solution-ev-charger': '/solutions/ev-charger',
  'solution-energy-monitoring': '/solutions/energy-monitoring',
  'solution-free-cooling': '/solutions/free-cooling',
  'solution-energy-assessment': '/solutions/energy-assessment',
  'solution-residential-and-commercial-led': '/solutions/residential-and-commercial-led',
  'solution-infrared-heating': '/solutions/infrared-heating',
  'case-studies': '/case-studies',
  'case-study-verwood-dental': '/case-studies/verwood-dental',
  'case-study-residential-inbuilt-solar-pv': '/case-studies/residential-in-built-solar-pv',
  'case-study-residential-fox-ep12': '/case-studies/residential-fox-ep12',
  'case-study-flat-roof-solar': '/case-studies/flat-roof-solar',
  'case-study-complete-solar-battery-ev': '/case-studies/complete-solar-battery-ev',
  'case-study-givenergy-gen3': '/case-studies/givenergy-gen3',
  'case-study-givenergy-all-in-one': '/case-studies/givenergy-all-in-one',
  'case-study-solar-pergola': '/case-studies/solar-pergola',
  'case-study-beagle-aircraft-led': '/case-studies/beagle-aircraft-led',
  'case-study-factory-infrared-heating': '/case-studies/factory-infrared-heating',
  'case-study-deltamaster-server-building-4': '/case-studies/deltamaster-server-building-4',
  'case-study-deltamaster-server-room-1': '/case-studies/deltamaster-server-room-1',
  'case-study-deltamaster-server-room-6': '/case-studies/deltamaster-server-room-6',
  about: '/about',
  accreditations: '/accreditations',
  faq: '/faq',
};

function getInitialPage(): PageId {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return PATH_TO_PAGE[path] ?? 'home';
}

function getSelectedSolutionSlug(page: PageId): SolutionSlug | undefined {
  if (page.startsWith('solution-')) {
    return page.replace('solution-', '') as SolutionSlug;
  }
  return undefined;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefillNotes, setPrefillNotes] = useState('');
  const [prefillService, setPrefillService] = useState('');
  const [requestType, setRequestType] = useState('Free Site Survey & Consultation');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageId) => {
    const targetPath = PAGE_TO_PATH[page];
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (
    serviceTitle?: string,
    notes?: string,
    sourceLabel = 'Free Site Survey & Consultation'
  ) => {
    setPrefillService(serviceTitle || '');
    setPrefillNotes(notes || '');
    setRequestType(sourceLabel);
    setIsConsultationOpen(true);
  };

  const selectedSolutionSlug = getSelectedSolutionSlug(currentPage);
  const isSolutionPage = currentPage === 'solutions' || Boolean(selectedSolutionSlug);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-lime-300 selection:text-slate-950">
      {/* 3-Zone Frameless Top Navigation Contract */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation(undefined, undefined, 'Consultation Request')}
      />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero
              onOpenConsultation={() =>
                handleOpenConsultation(undefined, undefined, 'Free Site Survey')
              }
            />
            <TestimonialsSection />
            <TrustBar />
            <HomeOverview
              onNavigate={handleNavigate}
              onOpenConsultation={() =>
                handleOpenConsultation(undefined, undefined, 'Showroom Visit or Site Survey')
              }
            />
          </>
        )}

        {isSolutionPage && (
          <SolutionsSection
            selectedSlug={selectedSolutionSlug}
            onNavigate={handleNavigate}
            onSelectSolution={(solutionTitle) =>
              handleOpenConsultation(
                solutionTitle,
                `Interested in requesting a site survey for: ${solutionTitle}`,
                `${solutionTitle} Specification & Survey`
              )
            }
          />
        )}

        {currentPage.startsWith('case-stud') && (
          <CaseStudiesSection
            selectedSlug={
              currentPage === 'case-study-verwood-dental'
                ? 'verwood-dental'
                : currentPage === 'case-study-residential-inbuilt-solar-pv'
                ? 'residential-in-built-solar-pv'
                : currentPage === 'case-study-residential-fox-ep12'
                ? 'residential-fox-ep12'
                : currentPage === 'case-study-flat-roof-solar'
                ? 'flat-roof-solar'
                : currentPage === 'case-study-complete-solar-battery-ev'
                ? 'complete-solar-battery-ev'
                : currentPage === 'case-study-givenergy-gen3'
                ? 'givenergy-gen3'
                : currentPage === 'case-study-givenergy-all-in-one'
                ? 'givenergy-all-in-one'
                : currentPage === 'case-study-solar-pergola'
                ? 'solar-pergola'
                : currentPage === 'case-study-beagle-aircraft-led'
                ? 'beagle-aircraft-led'
                : currentPage === 'case-study-factory-infrared-heating'
                ? 'factory-infrared-heating'
                : currentPage === 'case-study-deltamaster-server-building-4'
                ? 'deltamaster-server-building-4'
                : currentPage === 'case-study-deltamaster-server-room-1'
                ? 'deltamaster-server-room-1'
                : currentPage === 'case-study-deltamaster-server-room-6'
                ? 'deltamaster-server-room-6'
                : undefined
            }
            onNavigate={handleNavigate}
            onOpenConsultation={(serviceTitle, notes) =>
              handleOpenConsultation(
                serviceTitle,
                notes,
                serviceTitle ? `Similar Site Survey (${serviceTitle})` : 'Free Site Survey'
              )
            }
          />
        )}

        {currentPage === 'accreditations' && <AccreditationSection />}

        {currentPage === 'about' && (
          <AboutUsSection
            onNavigate={handleNavigate}
            onOpenConsultation={() =>
              handleOpenConsultation(undefined, undefined, 'Consultation Request')
            }
          />
        )}

        {currentPage === 'faq' && <FaqSection />}
      </main>

      {/* Quiet Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation(undefined, undefined, 'Free Site Survey')}
      />

      {/* Interactive Site Survey & Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefillNotes={prefillNotes}
        prefillService={prefillService}
        requestType={requestType}
      />
    </div>
  );
}
