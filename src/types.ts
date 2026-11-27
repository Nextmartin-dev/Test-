export type SectorType = 'all' | 'commercial' | 'domestic';

export type SolutionSlug =
  | 'solar-and-battery'
  | 'ev-charger'
  | 'energy-monitoring'
  | 'free-cooling'
  | 'energy-assessment'
  | 'residential-and-commercial-led'
  | 'infrared-heating';

export type PageId =
  | 'home'
  | 'solutions'
  | 'solution-solar-and-battery'
  | 'solution-ev-charger'
  | 'solution-energy-monitoring'
  | 'solution-free-cooling'
  | 'solution-energy-assessment'
  | 'solution-residential-and-commercial-led'
  | 'solution-infrared-heating'
  | 'case-studies'
  | 'case-study-verwood-dental'
  | 'case-study-residential-inbuilt-solar-pv'
  | 'case-study-residential-fox-ep12'
  | 'case-study-flat-roof-solar'
  | 'case-study-complete-solar-battery-ev'
  | 'case-study-givenergy-gen3'
  | 'case-study-givenergy-all-in-one'
  | 'case-study-solar-pergola'
  | 'case-study-beagle-aircraft-led'
  | 'case-study-factory-infrared-heating'
  | 'case-study-deltamaster-server-building-4'
  | 'case-study-deltamaster-server-room-1'
  | 'case-study-deltamaster-server-room-6'
  | 'about'
  | 'accreditations'
  | 'faq';

export interface TechSpecification {
  label: string;
  value: string;
}

export interface RenewableSolution {
  id: string;
  slug?: SolutionSlug;
  title: string;
  shortTitle?: string;
  subtitle: string;
  sector: 'commercial' | 'domestic' | 'both';
  image: string;
  imageAlt: string;
  gallery?: {
    src: string;
    title: string;
    tag: string;
    caption: string;
  }[];
  installationBenchmarks?: {
    id: string;
    title: string;
    badge: string;
    specsSummary: string;
    beforeConsumption: string;
    beforeCost: string;
    afterConsumption: string;
    afterCost: string;
    savingPercent: string;
    annualSavingsNote: string;
    technicalNote: string;
    images: {
      src: string;
      alt: string;
      label: string;
    }[];
    caseStudyPageId?: PageId;
  }[];
  overview: string;
  keyBenefits: string[];
  specs: TechSpecification[];
  paybackHorizon: string;
  grantEligibility?: string;
  popularBrands: string[];
}

export interface CaseStudyGalleryItem {
  src: string;
  fallbackSrc?: string;
  poster?: string;
  mediaType?: 'image' | 'video';
  title: string;
  tag: string;
  caption: string;
}

export interface CaseStudyTechnology {
  name: string;
  scope: string;
  details: string;
}

export interface CaseStudy {
  id: string;
  slug?: string;
  folderName?: string;
  title: string;
  clientType:
    | 'Commercial Enterprise'
    | 'Healthcare & Dental'
    | 'Residential Property'
    | 'Logistics & Fleet'
    | 'Education & Public';
  location: string;
  systemSummary: string;
  metrics: {
    systemCapacity: string;
    annualGenerationOrSavings: string;
    co2OffsetPerYear: string;
    paybackAchieved: string;
  };
  overview: string;
  keyHighlights: string[];
  technologies?: CaseStudyTechnology[];
  gallery?: CaseStudyGalleryItem[];
  image: string;
}

export interface ConsultationRequest {
  fullName: string;
  email: string;
  phone: string;
  postcode: string;
  sector: 'commercial' | 'domestic';
  servicesInterested: string[];
  currentSpend: string;
  projectNotes: string;
}
