import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Phone, ChevronDown } from 'lucide-react';
import { COMPANY_DETAILS, SOLUTIONS_DROPDOWN_ITEMS } from '../data/sustechsData';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

const SECONDARY_NAV_ITEMS: { id: PageId; label: string; href: string }[] = [
  { id: 'case-studies', label: 'Case Studies', href: '/case-studies' },
  { id: 'accreditations', label: 'Accreditations', href: '/accreditations' },
  { id: 'faq', label: 'FAQ', href: '/faq' },
];

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on Escape or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSolutionsDropdownOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent, page: PageId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    onNavigate(page);
  };

  const isSolutionsActive =
    currentPage === 'solutions' || currentPage.startsWith('solution-');

  const useSolidBackdrop =
    isScrolled || (currentPage !== 'home' && currentPage !== 'about');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        useSolidBackdrop
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/70 py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Official Sustechs Logo (Frameless) */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="group flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-600 rounded-md"
          aria-label="Sustechs Home"
        >
          <img
            src="/assets/aistudio/Sustechs-Logo-simple_b42f02a1.webp"
            alt="Sustechs"
            referrerPolicy="no-referrer"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </a>

        {/* Zone 2: Frameless Navigation Links with Solutions Dropdown */}
        <nav
          className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-slate-700"
          aria-label="Main navigation"
        >
          {/* About Us First Tab */}
          <a
            href="/about"
            onClick={(e) => handleLinkClick(e, 'about')}
            aria-current={currentPage === 'about' ? 'page' : undefined}
            className={`relative whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentPage === 'about'
                ? 'text-lime-700 font-semibold'
                : 'text-slate-700 hover:text-lime-700'
            }`}
          >
            <span>About Us</span>
            {currentPage === 'about' && (
              <span
                className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627]"
                aria-hidden="true"
              />
            )}
          </a>

          {/* Solutions Dropdown Trigger */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setSolutionsDropdownOpen(true)}
            onMouseLeave={() => setSolutionsDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <a
                href="/solutions"
                onClick={(e) => handleLinkClick(e, 'solutions')}
                aria-current={isSolutionsActive ? 'page' : undefined}
                className={`relative whitespace-nowrap shrink-0 transition-colors py-1 ${
                  isSolutionsActive
                    ? 'text-lime-700 font-semibold'
                    : 'text-slate-700 hover:text-lime-700'
                }`}
              >
                <span>Solutions</span>
                {isSolutionsActive && (
                  <span
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627]"
                    aria-hidden="true"
                  />
                )}
              </a>
              <button
                type="button"
                onClick={() => setSolutionsDropdownOpen((prev) => !prev)}
                aria-expanded={solutionsDropdownOpen}
                aria-haspopup="menu"
                aria-label="Toggle solutions menu"
                className={`p-1 rounded transition-colors cursor-pointer ${
                  isSolutionsActive || solutionsDropdownOpen
                    ? 'text-lime-700'
                    : 'text-slate-600 hover:text-lime-700'
                }`}
              >
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    solutionsDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Panel with seamless hover bridge */}
            {solutionsDropdownOpen && (
              <div className="absolute left-0 top-full pt-2.5 z-50">
                <div
                  role="menu"
                  aria-label="Solutions submenu"
                  className="w-72 rounded-xl border border-slate-200 bg-white/98 backdrop-blur-xl p-2 shadow-xl shadow-slate-900/10"
                >
                  <div className="space-y-0.5">
                    {SOLUTIONS_DROPDOWN_ITEMS.map((item) => {
                      const targetPage = `solution-${item.slug}` as PageId;
                      const active = currentPage === targetPage;
                      return (
                        <a
                          key={item.slug}
                          role="menuitem"
                          href={`/solutions/${item.slug}`}
                          onClick={(e) => handleLinkClick(e, targetPage)}
                          className={`block rounded-lg px-3 py-2.5 transition-colors ${
                            active
                              ? 'bg-lime-50 text-lime-800'
                              : 'text-slate-800 hover:bg-slate-50 hover:text-lime-700'
                          }`}
                        >
                          <div className="text-xs font-semibold">{item.label}</div>
                          <div className="mt-0.5 text-[11px] text-slate-500">
                            {item.summary}
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  <div className="mt-1.5 pt-1.5 border-t border-slate-100">
                    <a
                      role="menuitem"
                      href="/solutions"
                      onClick={(e) => handleLinkClick(e, 'solutions')}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-lime-700 hover:bg-slate-50 transition-colors"
                    >
                      <span>View All Solutions</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Remaining Top-Level Navigation Links */}
          {SECONDARY_NAV_ITEMS.map((item) => {
            const isActive =
              currentPage === item.id ||
              (item.id === 'case-studies' && currentPage.startsWith('case-study-'));
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative whitespace-nowrap shrink-0 transition-colors py-1 ${
                  isActive
                    ? 'text-lime-700 font-semibold'
                    : 'text-slate-700 hover:text-lime-700'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627]"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Direct Phone */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-lime-700 transition-colors whitespace-nowrap"
          >
            <Phone className="h-3.5 w-3.5 text-lime-700" />
            <span>{COMPANY_DETAILS.phone}</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] px-4 py-2 text-xs font-bold text-slate-950 transition-all hover:brightness-105 hover:shadow-md hover:shadow-lime-600/20 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Request Consultation</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 md:hidden transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="bg-white/98 backdrop-blur-xl px-4 py-5 md:hidden border-b border-slate-200 max-h-[82vh] overflow-y-auto shadow-lg">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, 'home')}
              className={`px-2.5 py-2 text-sm font-medium rounded-lg ${
                currentPage === 'home' ? 'text-lime-800 bg-lime-50' : 'text-slate-700 hover:text-lime-700'
              }`}
            >
              Home
            </a>

            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, 'about')}
              className={`px-2.5 py-2 text-sm font-medium rounded-lg ${
                currentPage === 'about' ? 'text-lime-800 bg-lime-50' : 'text-slate-700 hover:text-lime-700'
              }`}
            >
              About Us
            </a>

            {/* Mobile Expandable Solutions Accordion */}
            <div>
              <div className="flex items-center justify-between">
                <a
                  href="/solutions"
                  onClick={(e) => handleLinkClick(e, 'solutions')}
                  className={`flex-grow px-2.5 py-2 text-sm font-medium rounded-lg ${
                    isSolutionsActive ? 'text-lime-800 bg-lime-50' : 'text-slate-700 hover:text-lime-700'
                  }`}
                >
                  Solutions
                </a>
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                  className="p-2 text-slate-500 hover:text-lime-700"
                  aria-label="Expand solutions submenu"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileSolutionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {mobileSolutionsOpen && (
                <div className="mt-1 ml-3 pl-3 border-l border-slate-200 space-y-1">
                  {SOLUTIONS_DROPDOWN_ITEMS.map((item) => {
                    const targetPage = `solution-${item.slug}` as PageId;
                    const active = currentPage === targetPage;
                    return (
                      <a
                        key={item.slug}
                        href={`/solutions/${item.slug}`}
                        onClick={(e) => handleLinkClick(e, targetPage)}
                        className={`block px-2.5 py-1.5 text-xs font-medium rounded-md ${
                          active
                            ? 'text-lime-800 bg-lime-50'
                            : 'text-slate-600 hover:text-lime-700'
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {SECONDARY_NAV_ITEMS.map((item) => {
              const isActive =
                currentPage === item.id ||
                (item.id === 'case-studies' && currentPage.startsWith('case-study-'));
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`px-2.5 py-2 text-sm font-medium rounded-lg ${
                    isActive ? 'text-lime-800 bg-lime-50' : 'text-slate-700 hover:text-lime-700'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="mt-2 pt-3 border-t border-slate-200 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center gap-2 text-sm text-slate-700 font-medium px-2.5 py-1 hover:text-lime-700"
              >
                <Phone className="h-4 w-4 text-lime-700" />
                <span>Call: {COMPANY_DETAILS.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full rounded-lg bg-gradient-to-r from-[#6BB81C] via-[#99CC14] to-[#DCE627] py-2.5 text-center text-sm font-bold text-slate-950 transition-all hover:brightness-105"
              >
                Request Free Site Survey
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
