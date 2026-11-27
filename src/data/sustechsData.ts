import { CaseStudy, PageId, RenewableSolution, SolutionSlug } from '../types';
import heroSolarBuildingImg from '../assets/images/hero_commercial_solar_building_1794233345442.webp';
import batteryStorageImg from '../assets/images/battery_storage_system_1794233346487.webp';
import heatPumpHomeImg from '../assets/images/residential_heat_pump_home_1794233346947.webp';
import evFleetChargingImg from '../assets/images/commercial_ev_fleet_charging_1794233347386.webp';

/**
 * External hosted video URLs (not bundled in dist/ to keep production builds well under 250 MB).
 * Replace these placeholder URLs with your hosted MP4 links (e.g. Cloudflare R2, S3, Bunny CDN, or Vimeo direct MP4).
 */
export const EXTERNAL_VIDEO_URLS = {
  showroomTour: 'https://YOUR_CDN_OR_STORAGE_DOMAIN.example.com/videos/showroom_tour.mp4',
  inbuiltSolarPvWalkthrough:
    'https://YOUR_CDN_OR_STORAGE_DOMAIN.example.com/videos/inbuilt_solar_pv.mp4',
  flatRoofSolarWalkthrough:
    'https://YOUR_CDN_OR_STORAGE_DOMAIN.example.com/videos/flat_roof_solar.mp4',
} as const;

export const isConfiguredExternalMediaUrl = (url?: string): boolean =>
  Boolean(url && !url.includes('YOUR_CDN_OR_STORAGE_DOMAIN.example.com'));

export const COMPANY_DETAILS = {
  name: 'Sustechs',
  legalName: 'Air-Site Ltd t/a Sustechs',
  companyNumber: '05838247',
  tagline: 'Renewable Technology & Sustainable Energy Centre of Excellence',
  address: '441 Poole Road, Branksome, Poole, Dorset, BH12 1DH',
  phone: '01202 901110',
  secondaryPhone: '01202 016160',
  email: 'enquiries@sustechs.co.uk',
  website: 'sustechs.co.uk',
  mcsNumber: 'NIC-600637',
  serviceCoverage: 'Poole, Bournemouth, Dorset, Hampshire, Wiltshire & South Coast',
  dnoCoverage: 'Scottish & Southern Electricity Networks (SSEN) & National Grid',
};

export const SOLUTIONS_DROPDOWN_ITEMS: {
  slug: SolutionSlug;
  label: string;
  summary: string;
}[] = [
  {
    slug: 'solar-and-battery',
    label: 'Solar & Battery',
    summary: 'Commercial & domestic PV arrays with BESS storage',
  },
  {
    slug: 'ev-charger',
    label: 'EV Charger',
    summary: 'Workplace, fleet & smart home charge points',
  },
  {
    slug: 'energy-monitoring',
    label: 'Energy Monitoring',
    summary: 'Sub-metering, CT telemetry & load diagnostics',
  },
  {
    slug: 'free-cooling',
    label: 'Free Cooling',
    summary: 'Low-energy ambient cooling for HVAC & server rooms',
  },
  {
    slug: 'energy-assessment',
    label: 'Energy Assessment',
    summary: 'Half-hourly audits, LiDAR & ROI feasibility',
  },
  {
    slug: 'residential-and-commercial-led',
    label: 'Residential & Commercial LED',
    summary: 'High-efficacy architectural, warehouse & emergency LED upgrades',
  },
  {
    slug: 'infrared-heating',
    label: 'Infrared Heating',
    summary: 'Far-infrared radiant panels with smart zoned thermostatic control',
  },
];

export const CASE_STUDIES_DROPDOWN_ITEMS: {
  pageId: PageId;
  slug: string;
  folderName: string;
  summary: string;
  photoCount: number;
}[] = [
  {
    pageId: 'case-study-verwood-dental',
    slug: 'verwood-dental',
    folderName: 'Verwood Dental',
    summary: 'Solar panels, MVHR ventilation & LED retrofit',
    photoCount: 4,
  },
  {
    pageId: 'case-study-residential-inbuilt-solar-pv',
    slug: 'residential-in-built-solar-pv',
    folderName: 'Residential In-Built Solar PV',
    summary: 'Flush in-roof solar PV & GivEnergy battery storage',
    photoCount: 3,
  },
  {
    pageId: 'case-study-residential-fox-ep12',
    slug: 'residential-fox-ep12',
    folderName: 'Residential Solar · Fox Hybrid & EP12',
    summary: 'On-roof solar PV, Fox hybrid inverter & EP12 battery',
    photoCount: 3,
  },
  {
    pageId: 'case-study-flat-roof-solar',
    slug: 'flat-roof-solar',
    folderName: 'Flat Roof Solar Installation',
    summary: 'Non-penetrating ballasted console array & JA Solar PV',
    photoCount: 4,
  },
  {
    pageId: 'case-study-complete-solar-battery-ev',
    slug: 'complete-solar-battery-ev',
    folderName: 'Complete Solar, Battery & EV Charger',
    summary: 'Slate roof solar PV, twin GivEnergy batteries & EV charger',
    photoCount: 5,
  },
  {
    pageId: 'case-study-givenergy-gen3',
    slug: 'givenergy-gen3',
    folderName: 'Solar & Battery · GivEnergy Gen 3',
    summary: 'Pitched roof solar PV, GivEnergy Gen 3 hybrid & battery',
    photoCount: 4,
  },
  {
    pageId: 'case-study-givenergy-all-in-one',
    slug: 'givenergy-all-in-one',
    folderName: 'GivEnergy All In One with Gateway',
    summary: '13.5kWh AC-coupled GivEnergy All-In-One & whole-home Gateway',
    photoCount: 1,
  },
  {
    pageId: 'case-study-solar-pergola',
    slug: 'solar-pergola',
    folderName: 'Solar Pergola',
    summary: '8-panel poolside solar pergola canopy, GivEnergy hybrid & battery',
    photoCount: 3,
  },
  {
    pageId: 'case-study-beagle-aircraft-led',
    slug: 'beagle-aircraft-led',
    folderName: 'Beagle Aircraft · Christchurch LED',
    summary: '580+ fluorescent lights replaced with high-efficiency LED',
    photoCount: 1,
  },
  {
    pageId: 'case-study-factory-infrared-heating',
    slug: 'factory-infrared-heating',
    folderName: 'Factory Zoned Infrared Heating',
    summary: 'Targeted workshop radiant heating & smart power cycling telemetry',
    photoCount: 2,
  },
  {
    pageId: 'case-study-deltamaster-server-building-4',
    slug: 'deltamaster-server-building-4',
    folderName: 'DeltaMaster · Server Building 4',
    summary: '97% cooling energy cut (378 MWh → 8 MWh/yr, €66,557/yr saved)',
    photoCount: 2,
  },
  {
    pageId: 'case-study-deltamaster-server-room-1',
    slug: 'deltamaster-server-room-1',
    folderName: 'DeltaMaster · Server Room 1',
    summary: '97% cooling energy cut (284 MWh → 6 MWh/yr, 30 dBA at 3 m)',
    photoCount: 2,
  },
  {
    pageId: 'case-study-deltamaster-server-room-6',
    slug: 'deltamaster-server-room-6',
    folderName: 'DeltaMaster · Server Room 6',
    summary: '97% cooling energy cut (285 MWh → 8 MWh/yr, €49,557/yr saved)',
    photoCount: 2,
  },
];

export const TRUST_METRICS = [
  { value: '£4.2M+', label: 'Energy Spend Saved for Clients' },
  { value: '18.4MW', label: 'Commercial & Domestic Capacity' },
  { value: '9,800t', label: 'Annual CO₂e Displaced' },
  { value: '100%', label: 'MCS & RECC Compliance Rating' },
];

export const CERTIFICATIONS = [
  {
    name: 'MCS Certified Installer',
    description: 'Microgeneration Certification Scheme (Certificate No. NIC-600637) for Solar PV & Heat Pump installations',
    badge: 'MCS: NIC-600637',
  },
  {
    name: 'RECC Member',
    description: 'Renewable Energy Consumer Code ensuring consumer protection and quality assurance',
    badge: 'RECC Member',
  },
  {
    name: 'NICEIC Approved Contractor',
    description: 'Highest UK standard for high-voltage and low-voltage electrical works and G99 grid ties',
    badge: 'NICEIC Approved',
  },
  {
    name: 'OZEV Authorized',
    description: 'Office for Zero Emission Vehicles installer for Workplace Charging Scheme (WCS)',
    badge: 'OZEV Installer',
  },
  {
    name: 'Fox ESS Approved Installer',
    description: 'Approved residential and commercial installer for Fox ESS hybrid inverters & battery storage',
    badge: 'Fox Approved',
  },
  {
    name: 'GivEnergy Approved Installer',
    description: 'Approved commercial and residential battery energy storage installation engineers',
    badge: 'GivEnergy Approved',
  },
];

export const SOLUTIONS: RenewableSolution[] = [
  {
    id: 'solar-and-battery',
    slug: 'solar-and-battery',
    title: 'Solar & Battery Storage Systems',
    shortTitle: 'Solar & Battery',
    subtitle: 'High-efficiency Tier 1 Solar PV paired with intelligent Lithium Iron Phosphate (BESS) storage',
    sector: 'both',
    image: heroSolarBuildingImg,
    imageAlt: 'Modern commercial rooftop solar PV panel installation on the South Coast',
    overview:
      'Combine self-generation with energy autonomy. We engineer turnkey Solar PV arrays paired with modular Battery Energy Storage Systems (BESS) designed around your exact half-hourly consumption curve. Store daytime solar surplus or charge overnight on low-rate agile tariffs, while our Poole engineers manage structural surveys and G99/G100 SSEN grid approvals.',
    keyBenefits: [
      'Eliminate up to 75% of daytime grid imports and protect against peak commercial tariff spikes',
      '100% UK First-Year Capital Allowances (Full Expensing) for commercial investments; 0% VAT residential',
      'Uninterruptible Power Supply (UPS) backup protection and commercial peak-demand shaving',
      'Fire-safe LiFePO4 battery chemistries from GivEnergy, Fox ESS, Tesla Powerwall 3 & SolarEdge',
    ],
    specs: [
      { label: 'PV Module Efficiency', value: 'Up to 22.8% N-Type TOPCon Cells' },
      { label: 'Battery Round-Trip Efficiency', value: '94.5% to 96.2% (100% DoD LiFePO4)' },
      { label: 'Warranties', value: '25–30 Yr Panel Output · 10–15 Yr BESS' },
      { label: 'Grid Tie Protocols', value: 'G98 (<=3.68kW) & SSEN G99 / G100 Export Control' },
    ],
    paybackHorizon: '3.2 to 4.8 Years Commercial · 5 to 6.5 Years Residential',
    grantEligibility: 'Full Expensing Tax Relief (Commercial) · 0% VAT (Residential)',
    popularBrands: ['GivEnergy', 'Fox ESS', 'Tesla Powerwall 3', 'SolarEdge', 'JA Solar'],
  },
  {
    id: 'ev-charger',
    slug: 'ev-charger',
    title: 'Commercial & Domestic EV Charging',
    shortTitle: 'EV Charger',
    subtitle: 'Smart workplace chargers, fleet depot hubs, and solar-divert home charge points',
    sector: 'both',
    image: evFleetChargingImg,
    imageAlt: 'Commercial office electric vehicle charging bays with smart charge points',
    overview:
      'Empower your company fleet transition or upgrade your home charging speed with OZEV-approved fast AC and rapid DC charging infrastructure. We integrate dynamic load balancing to prevent main incoming fuse overloads and enable automated RFID/app billing or 100% solar-surplus vehicle charging.',
    keyBenefits: [
      'OZEV Workplace Charging Scheme (WCS) grant of up to £350 per socket (up to 40 sockets / £14,000)',
      'Dynamic load management preventing expensive DNO substation capacity upgrades',
      'RFID, contactless tap-and-pay, and OCPP cloud billing for staff, fleet, and visitors',
      'Direct solar-divert charging to fuel electric vehicles from surplus rooftop solar',
    ],
    specs: [
      { label: 'Charging Speeds', value: '7.4kW (1-Phase) / 22kW (3-Phase) / 50kW–150kW DC' },
      { label: 'Compliance & Safety', value: 'Integrated PEN Fault Detection & O-PEN Protection' },
      { label: 'Connectivity', value: 'OCPP 1.6J / 2.0.1, 4G Cellular, Wi-Fi, Ethernet' },
      { label: 'Grant Allowance', value: 'Up to £14,000 per business via OZEV WCS' },
    ],
    paybackHorizon: 'Under 2 years commercial fleet · Immediate company car tax (BiK) savings',
    grantEligibility: 'OZEV Workplace Charging Scheme (£350/socket) · EV Infrastructure Grant',
    popularBrands: ['Myenergi Zappi', 'Easee Charge', 'Zaptec Pro', 'EO Charging', 'Pod Point'],
  },
  {
    id: 'energy-monitoring',
    slug: 'energy-monitoring',
    title: 'Real-Time Energy Monitoring & Sub-Metering',
    shortTitle: 'Energy Monitoring',
    subtitle: 'Circuit-level half-hourly telemetry, power quality analytics, and automated waste detection',
    sector: 'both',
    image: batteryStorageImg,
    imageAlt: 'Clean renewable energy monitoring, distribution board, and inverter telemetry installation',
    overview:
      'You cannot reduce what you cannot measure. Sustechs installs precision MID-approved sub-metering and non-invasive CT clamp monitoring networks across distribution boards, HVAC plant, production lines, and renewable generation assets—exposing hidden base-load waste and out-of-hours power draw in real time.',
    keyBenefits: [
      'Identify phantom overnight base-loads across lighting, compressors, and HVAC equipment',
      'Granular 1-minute to 30-minute interval reporting aligned with UK smart meter and ESOS audits',
      'Automated anomaly and peak-demand threshold alerts before KVA penalty charges occur',
      'Single cloud dashboard unifying grid import, solar generation, battery SoC, and EV draw',
    ],
    specs: [
      { label: 'Metering Accuracy', value: 'Class 0.5S / MID-Certified Fiscal Sub-Metering' },
      { label: 'Sampling Resolution', value: '1-Second Live Telemetry · 30-Min Archive' },
      { label: 'Protocols Supported', value: 'Modbus RTU/TCP, MQTT, LoRaWAN, SunSpec' },
      { label: 'Phase Compatibility', value: 'Single-Phase & Three-Phase up to 3,000A CT' },
    ],
    paybackHorizon: 'Typically identifies 12% to 22% immediate zero-capex operational waste',
    grantEligibility: 'Supports UK ESOS Phase 3, SECR & ISO 50001 compliance reporting',
    popularBrands: ['SolarEdge Monitoring', 'GivEnergy Cloud', 'Shelly Pro 3EM', 'Carlo Gavazzi'],
  },
  {
    id: 'free-cooling',
    slug: 'free-cooling',
    title: 'Free Cooling & Low-Energy HVAC Systems',
    shortTitle: 'Free Cooling',
    subtitle: 'Harness cool ambient South Coast air to slash mechanical chiller electricity by up to 80%',
    sector: 'commercial',
    image: '/assets/aistudio/DSCN2308_09ee44d3.webp',
    imageAlt: 'Three wall-mounted Air-Site ambient free cooling units with fabric air-sock diffusers installed in a commercial equipment hall',
    installationBenchmarks: [
      {
        id: 'deltamaster-server-building-4',
        title: 'Server Building 4 (61 kW Heat Load · 1,000 sqm)',
        badge: 'Largest Savings · 97% Reduction',
        specsSummary: '3-Storey Facility · Replacing Multiple Mechanical Air Conditioners',
        beforeConsumption: '378 MWh / yr',
        beforeCost: '€68,000 / yr (@ €0.18/kWh)',
        afterConsumption: '8 MWh / yr',
        afterCost: '€1,443 / yr (@ €0.18/kWh)',
        savingPercent: '97%',
        annualSavingsNote: '370 MWh & €66,557 saved annually',
        technicalNote: 'Delta-T: 3 K · Multi-zone insulated intake plenum & fabric diffuser socks',
        images: [
          {
            src: '/assets/aistudio/deltamaster_sr4_plenum.webp',
            alt: 'DeltaMaster Free Cooling unit connected to an insulated horizontal air intake plenum with three fabric air-sock diffusers in Server Building 4',
            label: 'Insulated Intake Plenum & DeltaMaster Unit',
          },
          {
            src: '/assets/aistudio/deltamaster_sr4_twin.webp',
            alt: 'Twin DeltaMaster Free Cooling units with four-sock fabric air distribution diffusers inside Server Building 4',
            label: 'Twin DeltaMaster High-Capacity Array',
          },
        ],
        caseStudyPageId: 'case-study-deltamaster-server-building-4',
      },
      {
        id: 'deltamaster-server-room-1',
        title: 'Server Room 1 (46 kW Heat Load · 500 sqm)',
        badge: 'Residential Acoustic Compliance · 97% Reduction',
        specsSummary: '500 sqm Hall · Replaced Two Large CIAT Air Conditioners',
        beforeConsumption: '284 MWh / yr',
        beforeCost: '€51,000 / yr (@ €0.18/kWh)',
        afterConsumption: '6 MWh / yr',
        afterCost: '€1,000 / yr (@ €0.18/kWh)',
        savingPercent: '97%',
        annualSavingsNote: '278 MWh & €50,000 saved annually',
        technicalNote: 'Delta-T: 3 K · Noise: 48 dBA at intake, 30 dBA at 3 m (strict residential limit)',
        images: [
          {
            src: '/assets/aistudio/deltamaster_sr1_interior.webp',
            alt: 'Row of three DeltaMaster Free Cooling units with white diffuser air socks inside the 500 sqm Server Room 1 equipment hall',
            label: 'Server Hall DeltaMaster Plinth Array',
          },
          {
            src: '/assets/aistudio/deltamaster_sr1_facade.webp',
            alt: 'Exterior brick building facade showing acoustic weatherproof DeltaMaster air intake hoods above window bays',
            label: 'Acoustic Brick Facade Intake Hoods (30 dBA at 3 m)',
          },
        ],
        caseStudyPageId: 'case-study-deltamaster-server-room-1',
      },
      {
        id: 'deltamaster-server-room-6',
        title: 'Server Room 6 (46 kW Heat Load)',
        badge: 'High-Density Cooling · 97% Reduction',
        specsSummary: 'Replaced Mechanical Room Air Conditioners · Tight Thermal Control',
        beforeConsumption: '285 MWh / yr',
        beforeCost: '€51,000 / yr (@ €0.18/kWh)',
        afterConsumption: '8 MWh / yr',
        afterCost: '€1,443 / yr (@ €0.18/kWh)',
        savingPercent: '97%',
        annualSavingsNote: '277 MWh & €49,557 saved annually',
        technicalNote: 'Delta-T: 2 K · Twin wall-mounted DeltaMaster units bypassing floor AC unit',
        images: [
          {
            src: '/assets/aistudio/deltamaster_sr6_twin.webp',
            alt: 'Twin wall-mounted DeltaMaster Free Cooling units installed either side of a decommissioned mechanical floor-standing AC unit in Server Room 6',
            label: 'Twin DeltaMaster Units Bypassing Legacy AC',
          },
          {
            src: '/assets/aistudio/deltamaster_sr6_aisle.webp',
            alt: 'Server Room 6 rack aisle cooled by wall-mounted DeltaMaster Free Cooling unit with fabric diffuser socks',
            label: 'Cold-Aisle Fabric Diffuser Integration',
          },
        ],
        caseStudyPageId: 'case-study-deltamaster-server-room-6',
      },
    ],
    overview:
      'Backed by Air-Site Ltd HVAC engineering heritage, Sustechs designs and installs intelligent Free Cooling systems for server rooms, communications hubs, manufacturing spaces, and commercial offices. Whenever external ambient temperatures drop below indoor setpoints, automated economisers and glycol dry-coolers bypass power-hungry mechanical compressors completely.',
    keyBenefits: [
      'Cuts mechanical air-conditioning and chiller electricity consumption by 60% to 85% annually',
      'Extends mechanical compressor lifespan by shifting cooling duty to cool UK coastal air',
      'Ideal for 24/7 server rooms, industrial process cooling, telecoms, and modern offices',
      'Seamless BMS integration with enthalpy sensors, variable-speed EC fans, and automatic failover',
    ],
    specs: [
      { label: 'Compressor Energy Saving', value: 'Up to 85% reduction during UK autumn/winter/spring' },
      { label: 'Fan Technology', value: 'High-Efficiency EC (Electronically Commutated) Fans' },
      { label: 'Control Logic', value: 'Dual-Enthalpy & Differential Temperature BMS' },
      { label: 'Cooling Architecture', value: 'Direct Air Economiser & Indirect Glycol Dry-Cooler' },
    ],
    paybackHorizon: '1.8 to 3.2 Years on continuous commercial & server cooling loads',
    grantEligibility: 'Qualifies for UK Full Expensing Capital Allowances & ECA efficiency criteria',
    popularBrands: ['Air-Site Custom HVAC', 'Mitsubishi Electric', 'Daikin', 'Stulz', 'Ebm-papst EC'],
  },
  {
    id: 'energy-assessment',
    slug: 'energy-assessment',
    title: 'Technical Energy Assessment & Feasibility Audits',
    shortTitle: 'Energy Assessment',
    subtitle: 'Data-driven site surveys, half-hourly load profiling, and investment-grade decarbonisation plans',
    sector: 'both',
    image: heroSolarBuildingImg,
    imageAlt: 'Commercial facility undergoing comprehensive solar and energy feasibility assessment',
    overview:
      'Before specifying a single panel or heat pump, our Poole engineering team conducts a forensic energy assessment. We combine LiDAR 3D roof shading models, structural load checks, thermal heat-loss calculations, and your 12-month half-hourly (HH) electricity bills to build an accurate financial and carbon-reduction roadmap.',
    keyBenefits: [
      'Eliminates guesswork with investment-grade kWh generation and cashflow ROI projections',
      'Identifies stacked efficiency wins: LED lighting, eco-insulation, heat pumps, solar & BESS',
      'Pre-verifies SSEN DNO transformer headroom and G99 export limits before capital commitment',
      'Clear UK grant, 0% VAT, BUS voucher (£7,500), and Full Expensing tax relief modeling',
    ],
    specs: [
      { label: 'Solar Irradiance Modeling', value: '3D LiDAR Shading & PV*SOL Hourly Simulation' },
      { label: 'Thermal Diagnostics', value: 'Room-by-Room MCS Heat Loss Calculation' },
      { label: 'Electrical Audit', value: 'Half-Hourly (HH) Profile & Power Factor Review' },
      { label: 'Turnaround Time', value: 'Desktop Assessment in 48h · Full On-Site Survey' },
    ],
    paybackHorizon: 'Immediate clarity on highest-ROI decarbonisation order of works',
    grantEligibility: 'Includes full BUS (£7,500), OZEV WCS (£14k) & Full Expensing eligibility audit',
    popularBrands: ['PV*SOL Simulation', 'FLIR Thermal Imaging', 'SSEN Capacity Mapping'],
  },
  {
    id: 'residential-and-commercial-led',
    slug: 'residential-and-commercial-led',
    title: 'Residential & Commercial LED Lighting',
    shortTitle: 'Residential & Commercial LED',
    subtitle: 'High-efficacy architectural downlights, commercial panels, warehouse high-bays & occupancy controls',
    sector: 'both',
    image: '/assets/aistudio/1000025103_1872bd8d.webp',
    imageAlt: 'Commercial clinic waiting area upgraded with recessed architectural LED downlights and illuminated emergency exit signage',
    overview:
      'Lighting accounts for a major share of continuous base-load electricity across workplaces, healthcare practices, warehouses, and homes. Sustechs designs and installs NICEIC-certified LED lighting retrofits incorporating low-glare architectural downlights, UGR<19 office panels, warehouse high-bays, PIR daylight harvesting sensors, and compliant emergency lighting.',
    keyBenefits: [
      'Reduce lighting electricity consumption by 55% to 78% immediately versus fluorescent tubes & halogens',
      'Automated PIR occupancy sensing and daylight dimming prevent wasted energy in unoccupied zones',
      'Flicker-free, high-CRI (Ra >90) luminaires improving workplace focus, clinical visibility, and residential comfort',
      'Full BS 5266-1 emergency lighting compliance and 100% UK Full Expensing relief for commercial upgrades',
    ],
    specs: [
      { label: 'Luminous Efficacy', value: '130 to 175 lm/W (High-Efficiency SMD)' },
      { label: 'Rated LED Lifespan', value: '50,000 to 100,000 Hours (L80 B10)' },
      { label: 'Smart Controls', value: 'DALI-2, PIR Occupancy & Daylight Harvesting' },
      { label: 'Colour Quality & Safety', value: 'CRI >90 · UGR<19 Glare Rated · BS 5266-1 Emergency' },
    ],
    paybackHorizon: '1.4 to 2.6 Years Commercial · Immediate Domestic Bill Reduction',
    grantEligibility: '100% First-Year Capital Allowances (Commercial Full Expensing)',
    popularBrands: ['Thorn Lighting', 'Ansell', 'Collingwood', 'Philips CoreLine', 'Aurora'],
  },
  {
    id: 'infrared-heating',
    slug: 'infrared-heating',
    title: 'Far-Infrared Radiant Heating Systems',
    shortTitle: 'Infrared Heating',
    subtitle: 'Zero-maintenance electric radiant heating panels powered effortlessly by solar PV & agile tariffs',
    sector: 'both',
    image: '/assets/aistudio/3f527091-0829-4443-9f77-9a3fd836dea1_hero.webp',
    imageAlt: 'Commercial factory workshop bay heated by zoned wall-mounted industrial infrared radiant heaters',
    gallery: [
      {
        src: '/assets/aistudio/3f527091-0829-4443-9f77-9a3fd836dea1_9fc3630f.webp',
        title: 'Zoned Factory Infrared Radiant Heaters',
        tag: 'Industrial Installation',
        caption:
          'Commercial infrared heaters installed across high-bay factory zones to warm active fabrication areas directly without wasting electricity heating empty building volume.',
      },
      {
        src: '/assets/aistudio/Screenshot_2025-10-21_at_10.40.31_20aed2ac.webp',
        title: 'Live Heater Cycling & Power Behaviour',
        tag: 'Telemetry Proof',
        caption:
          'Daily kW telemetry showing smart thermostatic cycling on IR Heater 1 on Wall (2.81kW) and IR Heater 2 Middle (1.18kW), with zero idle draw outside shift hours.',
      },
    ],
    overview:
      'Unlike conventional convection radiators that waste energy heating empty air volume, far-infrared heating gently warms people, walls, and surfaces directly just like natural sunlight. Ideal for offices, dental & clinical rooms, garden studios, vaulted ceilings, and homes without wet-radiator pipework, Sustechs installs ultra-slim ceiling and wall panels paired with smart room-by-room Wi-Fi thermostats.',
    keyBenefits: [
      'Direct radiant warmth reaches comfort temperatures rapidly with zero pipework, boilers, or servicing',
      'Room-by-room zoned Wi-Fi thermostatic scheduling stops wasting heat in unused rooms or workspaces',
      'Reduces dampness and condensation on cold external walls by keeping thermal building fabric warm',
      'Pairs directly with rooftop solar PV, GivEnergy/Fox ESS battery storage, and low-rate EV/off-peak tariffs',
    ],
    specs: [
      { label: 'Radiant Conversion', value: 'Far-Infrared (7–14 µm) Comfort Waveband' },
      { label: 'Installation Footprint', value: 'Ultra-Slim 18–22mm Ceiling, Wall & Glass Panels' },
      { label: 'Zone Control', value: 'Open-Window Detection & App-Based Room Zoning' },
      { label: 'Safety & Servicing', value: 'IP44–IP54 Rated · 10-Yr Warranty · Zero Annual Servicing' },
    ],
    paybackHorizon: '30%–50% Lower Running Cost vs Storage Heaters · Zero Maintenance',
    grantEligibility: '100% Direct Solar PV Diversion Compatible · Zero Fossil Fuel On-Site',
    popularBrands: ['Herschel Infrared', 'Surya Heating', 'Redwell', 'Heat4All'],
  },
  {
    id: 'heat-pumps',
    title: 'Air & Ground Source Heat Pumps',
    subtitle: 'Ultra-efficient hydronic heating and cooling eliminating fossil gas and oil dependency',
    sector: 'both',
    image: heatPumpHomeImg,
    imageAlt: 'Modern domestic exterior air source heat pump unit installed in Dorset garden',
    overview:
      'We design and install MCS-certified Air Source Heat Pumps (ASHP) and Ground Source systems engineered to run at low flow temperatures (35°C–45°C) with exceptional seasonal performance factors (SCOP 3.8 to 4.6). Homes benefit immediately from the £7,500 UK Boiler Upgrade Scheme (BUS) grant.',
    keyBenefits: [
      '£7,500 upfront non-repayable UK Government Boiler Upgrade Scheme grant applied directly',
      '300% to 420% efficiency compared to 85% for traditional gas/oil condensing boilers',
      'Pairs seamlessly with rooftop solar PV and smart thermal hot water storage buffers',
      'Quiet acoustic ratings complying with MCS 020 Permitted Development planning rules',
    ],
    specs: [
      { label: 'Seasonal COP (SCOP)', value: 'Up to 4.87 (Class A+++ efficiency)' },
      { label: 'Max Flow Temperature', value: 'Up to 70°C (suitable for radiator retrofits)' },
      { label: 'Refrigerant', value: 'Low-GWP R290 (Natural Propane) Eco-friendly' },
      { label: 'Grant Support', value: '£7,500 BUS Grant deduction on quotation' },
    ],
    paybackHorizon: 'Immediate capital offset with £7,500 BUS Grant · Ongoing 40%+ thermal savings',
    grantEligibility: '£7,500 UK Government BUS Voucher (Air Source & Ground Source)',
    popularBrands: ['NIBE', 'Samsung EHS Mono', 'Freedom Heat Pumps', 'Mitsubishi Ecodan', 'Vaillant'],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'verwood-dental',
    slug: 'verwood-dental',
    folderName: 'Verwood Dental',
    title: 'Verwood Dental · Solar PV, MVHR & LED Energy Upgrade',
    clientType: 'Healthcare & Dental',
    location: 'Verwood, Dorset (BH31)',
    systemSummary: 'Rooftop Solar PV Array + Commercial MVHR Heat Recovery + LED Lighting',
    metrics: {
      systemCapacity: 'Solar PV · MVHR · LED',
      annualGenerationOrSavings: 'Up to 45% Energy Cost Cut',
      co2OffsetPerYear: '2.8 Tonnes CO₂e',
      paybackAchieved: '3.9 Years Projected',
    },
    overview:
      'Sustechs delivered an integrated multi-technology energy efficiency upgrade for Verwood Dental Surgery. Combining clean daytime solar generation on the pitched roof with a loft-suspended Mechanical Ventilation with Heat Recovery (MVHR) system and practice-wide LED lighting, the clinic now benefits from fresh filtered indoor air, reduced heating losses, and significantly lower operating electricity costs.',
    keyHighlights: [
      'Installed a tiered rooftop Solar PV array wired into a dedicated loft-mounted inverter, generation meter, and lockable AC/DC rotary isolators',
      'Engineered and suspended a commercial MVHR heat recovery unit in the roof void with rigid galvanized spiral ductwork supplying patient reception and treatment rooms',
      'Upgraded reception, clinical zones, and loft plant areas to high-efficacy recessed and linear LED lighting for immediate lighting load reduction',
    ],
    technologies: [
      {
        name: 'Solar Panels (Solar PV)',
        scope: 'Pitched Roof Array & Loft Inverter Board',
        details:
          'Six high-efficiency monocrystalline modules arranged cleanly across the front roof elevation, feeding a compact loft inverter with MID generation metering to offset daytime surgery and sterilisation loads.',
      },
      {
        name: 'MVHR Ventilation',
        scope: 'Loft Plant & Galvanized Spiral Ductwork',
        details:
          'Ceiling-suspended Mechanical Ventilation with Heat Recovery unit paired with rigid galvanized spiral ducting and low-noise ceiling diffusers to maintain continuous fresh air exchange while recovering indoor heat.',
      },
      {
        name: 'LED Lighting Retrofit',
        scope: 'Patient Reception, Surgeries & Plant Void',
        details:
          'Low-glare recessed architectural LED downlights in clinical and waiting rooms paired with linear LED batten illumination across the loft plant space, cutting lighting wattage and maintenance.',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/Verwood_Surgery_2_a1110934.webp',
        title: 'Rooftop Solar PV Elevation',
        tag: 'Solar Panels',
        caption:
          'Front elevation of Verwood Dental showing the tiered 6-panel rooftop solar PV array installed neatly onto the tiled pitch.',
      },
      {
        src: '/assets/aistudio/1000025103_1872bd8d.webp',
        title: 'Reception LED Downlights & MVHR Valve',
        tag: 'LED & MVHR',
        caption:
          'Patient waiting and reception room fitted with recessed high-efficiency LED lighting and a flush ceiling-mounted circular MVHR diffuser.',
      },
      {
        src: '/assets/aistudio/MVHR_Surgery_1_65653766.webp',
        title: 'Loft MVHR Unit & Solar Inverter Board',
        tag: 'MVHR & Solar Control',
        caption:
          'Roof-space plant overview showing the suspended galvanized MVHR unit, multi-branch spiral ducting, and bespoke timber board housing the solar inverter and AC/DC isolators.',
      },
      {
        src: '/assets/aistudio/MVHR_Surgery_24bcaf3e.webp',
        title: 'Galvanized Spiral Ductwork & Loft LED',
        tag: 'MVHR Ducting & LED',
        caption:
          'Close-up of rigid galvanized spiral MVHR ductwork routing fresh tempered air to the dental surgeries alongside high-output LED loft batten lighting.',
      },
    ],
    image: '/assets/aistudio/Verwood_Surgery_2_a1110934.webp',
  },
  {
    id: 'residential-in-built-solar-pv',
    slug: 'residential-in-built-solar-pv',
    folderName: 'Residential In-Built Solar PV',
    title: 'Residential In-Built Solar PV · GivEnergy Hybrid & Battery',
    clientType: 'Residential Property',
    location: 'Dorset, South Coast',
    systemSummary: 'Flush In-Roof Solar PV Array + GivEnergy Hybrid Inverter & Battery Storage',
    metrics: {
      systemCapacity: 'In-Built PV + BESS',
      annualGenerationOrSavings: '0% VAT Residential',
      co2OffsetPerYear: 'High Self-Consumption',
      paybackAchieved: 'MCS & NICEIC Certified',
    },
    overview:
      'Sustechs integrated a flush, low-profile in-roof solar PV system directly into a newly slated residential pitched roof. Replacing bulky surface rails with weatherproof in-roof flashing trays delivers a clean architectural roofline, paired inside with a GivEnergy hybrid inverter, wall-mounted lithium battery storage, and neat BS7671 switchgear.',
    keyHighlights: [
      'Flush in-roof solar PV array seated neatly between charcoal slate roof tiles over Permavent breathable membrane and timber battens',
      'Garage plant installation featuring a GivEnergy hybrid inverter and wall-mounted GivEnergy battery storage bank',
      'Complete MCS & NICEIC electrical installation with twin DC rotary isolators, generation meter, AC isolator, and dedicated consumer unit',
    ],
    technologies: [
      {
        name: 'In-Built In-Roof Solar PV',
        scope: 'Flush Slate-Integrated Roofline Array',
        details:
          'All-black monocrystalline modules recessed directly into interlocking flashing trays so the array sits flush with the surrounding slate tiles while maintaining full weatherproofing.',
      },
      {
        name: 'GivEnergy Hybrid & BESS',
        scope: 'Garage Inverter & Battery Bank',
        details:
          'Wall-mounted GivEnergy hybrid inverter paired with a high-efficiency GivEnergy LiFePO4 battery module to store surplus solar generation and overnight off-peak electricity.',
      },
      {
        name: 'Precision Switchgear & Metering',
        scope: 'Twin DC Isolators, AC Isolator & Meter',
        details:
          'Trunked and labelled plywood mounting board with lockable dual DC isolators, generation meter, mains AC rotary isolator, and dedicated protection switchgear.',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/IMG_2624_4a3b410f.webp',
        mediaType: 'image',
        title: 'Flush In-Built Roof Solar Array',
        tag: 'In-Roof Solar PV',
        caption:
          'Close view of the integrated solar PV flashing trays seated flush alongside charcoal slate roof tiles during construction.',
      },
      {
        src: '/assets/aistudio/IMG_3654_970670a1.webp',
        mediaType: 'image',
        title: 'GivEnergy Inverter, Battery & Switchgear',
        tag: 'Hybrid & Storage',
        caption:
          'Clean garage electrical installation with GivEnergy hybrid inverter, wall-mounted battery bank, generation meter, and AC/DC isolators.',
      },
      {
        src: EXTERNAL_VIDEO_URLS.inbuiltSolarPvWalkthrough,
        poster: '/assets/aistudio/IMG_2624_4a3b410f.webp',
        mediaType: 'video',
        title: 'Rooftop In-Built Solar PV Walkthrough',
        tag: 'Site Video',
        caption:
          'On-site roof video panning across the flush in-roof solar PV array, weatherproof side flashing, and slate tile integration.',
      },
    ],
    image: '/assets/aistudio/IMG_2624_4a3b410f.webp',
  },
  {
    id: 'residential-fox-ep12',
    slug: 'residential-fox-ep12',
    folderName: 'Residential Solar · Fox Hybrid & EP12',
    title: 'Residential Solar PV · Fox ESS Hybrid Inverter & EP12 Battery',
    clientType: 'Residential Property',
    location: 'Dorset, South Coast',
    systemSummary: 'Dual-Aspect On-Roof Solar PV + Fox ESS Hybrid Inverter & EP12 Battery Storage',
    metrics: {
      systemCapacity: 'Solar PV + Fox EP12',
      annualGenerationOrSavings: '0% VAT Residential',
      co2OffsetPerYear: 'Full Bird Mesh Protected',
      paybackAchieved: 'MCS & NICEIC Certified',
    },
    overview:
      'Sustechs installed a high-yield dual-elevation residential Solar PV array mounted across pitched concrete tile roofs with perimeter bird-proofing mesh, paired with a Fox ESS Hybrid Inverter and Fox ESS EP12 battery storage unit mounted neatly on fire-rated cement board with compliant AC/DC isolators.',
    keyHighlights: [
      'Fox ESS Hybrid Inverter with integrated Wi-Lan telemetry wired on non-combustible cement backing board above neat white trunking',
      'Wall-mounted Fox ESS EP12 lithium battery storage providing substantial overnight off-peak & solar surplus capacity',
      'All-black solar PV panels across dual pitched roof elevations finished with perimeter black bird-proofing mesh and twin DC/AC isolators',
    ],
    technologies: [
      {
        name: 'Fox ESS Hybrid Inverter',
        scope: 'Fire-Rated Board & Smart Metering',
        details:
          'High-efficiency Fox ESS Hybrid Inverter featuring built-in Wi-Lan monitoring, twin lockable DC rotary isolators, digital generation meter, and AC rotary isolator.',
      },
      {
        name: 'Fox ESS EP12 Battery',
        scope: 'Wall-Mounted LiFePO4 Energy Storage',
        details:
          'Compact, IP65-rated Fox ESS EP12 battery module cleanly mounted onto brickwork below the switchgear trunking to capture surplus daytime generation and smart-tariff charge windows.',
      },
      {
        name: 'On-Roof Solar PV & Bird Mesh',
        scope: 'Dual-Elevation Tiled Roof Array',
        details:
          'All-black monocrystalline panels mounted across tiled roof pitches with full perimeter stainless steel bird-proofing mesh and tidy under-array DC cable management.',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/IMG_9765_cb5fc1a7.webp',
        mediaType: 'image',
        title: 'Fox ESS Hybrid Inverter & EP12 Battery',
        tag: 'Inverter & EP12',
        caption:
          'Weather-protected timber enclosure housing the Fox ESS Hybrid Inverter on fire-rated board, Fox ESS EP12 battery below, generation meter, and labelled AC/DC isolators.',
      },
      {
        src: '/assets/aistudio/IMG_9600_c7878b83.webp',
        mediaType: 'image',
        title: 'Main Pitched Roof Solar PV Array',
        tag: 'On-Roof Solar PV',
        caption:
          'Column of all-black solar PV modules cleanly mounted on concrete roof tiles under clear South Coast sunshine.',
      },
      {
        src: '/assets/aistudio/IMG_9650_d2ece095.webp',
        mediaType: 'image',
        title: 'Second Roof Elevation with Bird Proofing',
        tag: 'Solar PV & Bird Mesh',
        caption:
          'Additional pitched roof solar PV array protected all around with discrete black perimeter bird-proofing mesh.',
      },
    ],
    image: '/assets/aistudio/IMG_9765_cb5fc1a7.webp',
  },
  {
    id: 'flat-roof-solar',
    slug: 'flat-roof-solar',
    folderName: 'Flat Roof Solar Installation',
    title: 'Flat Roof Solar Installation · Ballasted Console & JA Solar PV',
    clientType: 'Residential Property',
    location: 'Dorset, South Coast',
    systemSummary: 'Non-Penetrating Ballasted Flat Roof Trays + All-Black JA Solar PV Array',
    metrics: {
      systemCapacity: '9-Panel Ballasted PV',
      annualGenerationOrSavings: '0% VAT Residential',
      co2OffsetPerYear: 'Zero Roof Penetration',
      paybackAchieved: 'Wind-Load Engineered',
    },
    overview:
      'Sustechs engineered a non-penetrating ballasted flat roof Solar PV array mounted onto an asphalt/felt residential roof extension. Using aerodynamic enclosed console tubs weighted with calculated concrete ballast blocks, the 9-panel JA Solar array preserves full roof waterproofing integrity while capturing optimal solar irradiance.',
    keyHighlights: [
      'Non-penetrating aerodynamic black console trays weighted with calibrated concrete ballast blocks—zero drilling into the flat felt membrane',
      '9-panel multi-row all-black JA Solar PV array spaced cleanly for optimal tilt angle and minimal inter-row shading',
      'Weatherproof underside MC4 DC string wiring and aluminum rail clamping secured to the ballasted console tubs',
    ],
    technologies: [
      {
        name: 'Ballasted Console Mounting',
        scope: 'Non-Penetrating Flat Roof Trays',
        details:
          'Closed-base aerodynamic polymer mounting tubs weighted internally with concrete ballast blocks, distributing wind uplift loads evenly without piercing the flat roof waterproofing layer.',
      },
      {
        name: 'JA Solar PV Modules',
        scope: '9-Panel High-Yield Flat Roof Array',
        details:
          'High-efficiency monocrystalline JA Solar panels clamped cleanly at an elevated pitch to maximise seasonal solar capture and promote natural self-cleaning rain runoff.',
      },
      {
        name: 'Roof Membrane Protection',
        scope: 'Zero-Penetration Installation',
        details:
          'Full flat-roof felt integrity retained with tidy clamped rail terminations, weatherproof split junction boxes, and neat under-array DC cable routing.',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/IMG_9866_73b009da.webp',
        mediaType: 'image',
        title: 'Completed Ballasted Flat Roof Array',
        tag: 'Flat Roof Solar PV',
        caption:
          'Finished 9-panel multi-row all-black solar PV installation seated across the flat felt extension roof.',
      },
      {
        src: '/assets/aistudio/IMG_9856_6b5b2f36.webp',
        mediaType: 'image',
        title: 'Aerodynamic Console Trays & Concrete Ballast',
        tag: 'Ballasted Mounting',
        caption:
          'Non-penetrating black mounting tubs laid out over the flat felt roof and weighted with calibrated concrete ballast blocks before panel clamping.',
      },
      {
        src: '/assets/aistudio/IMG_9862_989dcb77.webp',
        mediaType: 'image',
        title: 'JA Solar Module & Rail Termination',
        tag: 'Module Hardware',
        caption:
          'Detail of the JA Solar module underside junction boxes, MC4 connectors, and aluminum rail mounting onto the flat roof console frame.',
      },
      {
        src: EXTERNAL_VIDEO_URLS.flatRoofSolarWalkthrough,
        poster: '/assets/aistudio/IMG_9866_73b009da.webp',
        mediaType: 'video',
        title: 'Flat Roof Solar Array Walkthrough Video',
        tag: 'Site Video',
        caption:
          'On-site video panning across the completed 9-panel ballasted flat roof solar PV array.',
      },
    ],
    image: '/assets/aistudio/IMG_9866_73b009da.webp',
  },
  {
    id: 'complete-solar-battery-ev',
    slug: 'complete-solar-battery-ev',
    folderName: 'Complete Solar, Battery & EV Charger',
    title: 'Complete Solar, Battery & EV Charger · GivEnergy Dual BESS & Slate PV',
    clientType: 'Residential Property',
    location: 'Dorset, South Coast',
    systemSummary: 'Multi-Aspect Slate Solar PV + GivEnergy Hybrid Dual Battery + EV Charger DB',
    metrics: {
      systemCapacity: 'Solar + Twin BESS + EV',
      annualGenerationOrSavings: '0% VAT Residential',
      co2OffsetPerYear: 'Full Whole-Home Ecosystem',
      paybackAchieved: 'MCS & NICEIC Certified',
    },
    overview:
      'A complete turnkey residential energy ecosystem installed by Sustechs. Multi-elevation all-black Solar PV arrays fitted cleanly onto natural slate roofs feed a GivEnergy Hybrid Inverter and dual GivEnergy LiFePO4 battery bank, integrated alongside a dedicated EV Charger distribution board, rotary EV isolator, and Harvi CT load telemetry.',
    keyHighlights: [
      'GivEnergy Hybrid Inverter paired with dual parallel floor-mounted GivEnergy batteries and compliant DC/AC rotary isolators',
      'Dedicated EV Charger Distribution Board (EV Charger DB), lockable EV rotary isolator, and wireless Harvi CT load monitor',
      'Multi-aspect natural slate roof Solar PV arrays finished with slate flashing hooks, Velux skylight clearances, and full perimeter bird mesh',
    ],
    technologies: [
      {
        name: 'Multi-Aspect Slate Solar PV',
        scope: 'All-Black Array, Flashing & Bird Mesh',
        details:
          'All-black monocrystalline modules mounted across multiple natural slate roof pitches using weatherproof slate hook flashing plates and discrete black perimeter bird-proofing mesh.',
      },
      {
        name: 'GivEnergy Hybrid & Twin BESS',
        scope: 'Inverter + Dual Parallel Battery Bank',
        details:
          'Wall-mounted GivEnergy Hybrid Inverter coupled with two GivEnergy lithium batteries wired in parallel for expanded solar surplus storage and overnight smart-tariff charging.',
      },
      {
        name: 'EV Charger DB & Harvi Control',
        scope: 'EV Isolation, Protection & CT Telemetry',
        details:
          'Dedicated EV Charger consumer unit, lockable IP67 EV rotary isolator, and Harvi energy monitoring transmitter integrated neatly onto a single trunked plant wall.',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/IMG_8738_158caabb.webp',
        mediaType: 'image',
        title: 'GivEnergy Inverter, Twin Batteries & EV Charger DB',
        tag: 'Battery & EV Control',
        caption:
          'Trunked plant wall housing the GivEnergy Hybrid Inverter, twin floor-mounted GivEnergy batteries, EV Charger DB, Harvi transmitter, EV isolator, and AC/DC PV switchgear.',
      },
      {
        src: '/assets/aistudio/IMG_8716_75f5cf9e.webp',
        mediaType: 'image',
        title: 'Natural Slate Solar Array Around Skylights',
        tag: 'Slate Roof Solar PV',
        caption:
          'All-black solar PV modules installed cleanly around roof skylights on natural slate tiles with perimeter bird-proofing mesh.',
      },
      {
        src: '/assets/aistudio/IMG_8717_83463e7f.webp',
        mediaType: 'image',
        title: 'Slate Flashing Hooks, Rails & Bird Mesh Detail',
        tag: 'Roof Hardware',
        caption:
          'Close angle showing slate roof hook flashing, anodized black mounting rail, end clamps, and stainless perimeter bird mesh.',
      },
      {
        src: '/assets/aistudio/IMG_8725_00f30289.webp',
        mediaType: 'image',
        title: 'Upper Ridge Slate Roof Array Elevation',
        tag: 'Dual-Pitch PV',
        caption:
          'Upper roof pitch fitted cleanly beneath the stone ridge tiles with stepped solar panels and full bird-mesh enclosure.',
      },
      {
        src: '/assets/aistudio/IMG_8724_e0e4a58a.webp',
        mediaType: 'image',
        title: 'Secondary Slate Roof Solar PV Slope',
        tag: 'Solar PV Array',
        caption:
          'Additional slate-tiled elevation carrying paired all-black modules with tidy flashing and perimeter bird mesh.',
      },
    ],
    image: '/assets/aistudio/IMG_8738_158caabb.webp',
  },
  {
    id: 'givenergy-gen3',
    slug: 'givenergy-gen3',
    folderName: 'Solar & Battery · GivEnergy Gen 3',
    title: 'Solar and Battery Storage with GivEnergy Gen 3 Hybrid and Battery',
    clientType: 'Residential Property',
    location: 'Dorset, South Coast',
    systemSummary: 'Pitched Tile Solar PV Array + GivEnergy Gen 3 Hybrid Inverter & Battery Storage',
    metrics: {
      systemCapacity: 'Solar PV + GivEnergy Gen 3',
      annualGenerationOrSavings: '0% VAT Residential',
      co2OffsetPerYear: 'Full Bird Mesh Protected',
      paybackAchieved: 'MCS & NICEIC Certified',
    },
    overview:
      'Sustechs completed a clean residential Solar PV and Battery Energy Storage installation built around the GivEnergy Gen 3 Hybrid Inverter and wall-mounted GivEnergy LiFePO4 battery. Mounted on concrete roof tiles with full perimeter bird-proofing mesh, the all-black split-cell array feeds directly into labelled AC/DC isolators and generation metering.',
    keyHighlights: [
      'GivEnergy Gen 3 Hybrid Inverter mounted neatly above white trunking with live LED power-flow diagnostics and dual DC array isolators',
      'Wall-mounted GivEnergy LiFePO4 battery module cleanly wired below the trunking with DC/AC emergency isolation labelling',
      'Continuous run of all-black split-cell solar PV modules on pitched concrete roof tiles finished with black perimeter bird-proofing mesh',
    ],
    technologies: [
      {
        name: 'All-Black Split-Cell Solar PV',
        scope: 'Pitched Tile Array & Rail Mounting',
        details:
          'High-efficiency monocrystalline split-cell modules clamped neatly along galvanized roof hooks and aluminum rails across the pitched tiled roof elevation.',
      },
      {
        name: 'GivEnergy Gen 3 Hybrid & Battery',
        scope: 'Gen 3 Hybrid Inverter + LiFePO4 Storage',
        details:
          'Next-generation GivEnergy Gen 3 Hybrid Inverter paired with a GivEnergy wall-mounted battery unit for high-rate solar capture, smart tariff charging, and seamless home energy management.',
      },
      {
        name: 'Bird Mesh & Compliant Switchgear',
        scope: 'Twin DC Isolators, Meter & Perimeter Mesh',
        details:
          'Complete BS7671 protection with twin DC rotary isolators, digital generation meter, main AC isolator, and full black steel perimeter bird mesh protecting the under-panel void.',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/IMG_7913_c089501a.webp',
        mediaType: 'image',
        title: 'GivEnergy Gen 3 Hybrid Inverter & Battery',
        tag: 'Gen 3 Hybrid & BESS',
        caption:
          'Clean internal plant wall featuring the GivEnergy Gen 3 Hybrid Inverter, wall-mounted GivEnergy battery, twin DC isolators, generation meter, and AC isolator.',
      },
      {
        src: '/assets/aistudio/IMG_7914_43d4e05f.webp',
        mediaType: 'image',
        title: 'Completed Rooftop Solar PV Array with Bird Mesh',
        tag: 'Solar PV & Bird Mesh',
        caption:
          'Finished linear run of all-black split-cell solar PV modules protected around the perimeter with black bird-proofing mesh.',
      },
      {
        src: '/assets/aistudio/IMG_7886_771bd1df.webp',
        mediaType: 'image',
        title: 'Pitched Roof Tile Solar Array Alignment',
        tag: 'Roof Elevation',
        caption:
          'Side view along the pitched concrete tile roof showing level panel alignment, black end clamps, and sturdy aluminum rail support.',
      },
      {
        src: '/assets/aistudio/IMG_7866_91a39c68.webp',
        mediaType: 'image',
        title: 'Roof Hook Fixing & Rail Mounting Detail',
        tag: 'Mounting Hardware',
        caption:
          'Close view of stainless tile roof hooks, extruded aluminum mounting rail, and weatherproof MC4 DC string wiring during assembly.',
      },
    ],
    image: '/assets/aistudio/IMG_7913_c089501a.webp',
  },
  {
    id: 'givenergy-all-in-one',
    slug: 'givenergy-all-in-one',
    folderName: 'GivEnergy All In One with Gateway',
    title: 'GivEnergy All In One with Gateway · Whole-Home Battery & EPS Backup',
    clientType: 'Residential Property',
    location: 'Dorset, South Coast',
    systemSummary: '13.5 kWh GivEnergy All-In-One BESS + Whole-Home GivEnergy Gateway',
    metrics: {
      systemCapacity: '13.5 kWh / 6 kW Output',
      annualGenerationOrSavings: '0% VAT Residential',
      co2OffsetPerYear: 'Whole-Home EPS Backup',
      paybackAchieved: 'MCS & NICEIC Certified',
    },
    overview:
      'Sustechs installed a GivEnergy All-In-One 13.5 kWh AC-coupled battery energy storage system paired with a GivEnergy Gateway for seamless whole-home Emergency Power Supply (EPS) backup. Mounted cleanly on a timber backboard with enclosed white trunking and dedicated isolation distribution switchgear, the system shifts smart-tariff imports and delivers automatic grid-outage resilience.',
    keyHighlights: [
      'GivEnergy All-In-One 13.5 kWh LiFePO4 battery & inverter unit floor-mounted with 6 kW continuous charge/discharge capability',
      'GivEnergy Gateway providing automatic sub-second islanding and whole-home backup continuity during grid power cuts',
      'Clean BS7671 installation on plywood backboard with dedicated distribution board, main earthing terminal, and dual-supply safety labelling',
    ],
    technologies: [
      {
        name: 'GivEnergy All-In-One (13.5 kWh)',
        scope: 'AC-Coupled Inverter & LiFePO4 Storage',
        details:
          'High-capacity 13.5 kWh integrated AC-coupled battery and inverter system delivering 6 kW peak power for heavy domestic appliances, EV charging support, and off-peak tariff arbitrage.',
      },
      {
        name: 'GivEnergy Gateway',
        scope: 'Whole-Home EPS & Grid Transfer',
        details:
          'Wall-mounted GivEnergy Gateway managing real-time grid import/export telemetry, CT load monitoring, and automatic islanding protection during mains outages.',
      },
      {
        name: 'Dedicated Switchgear & Earthing',
        scope: 'Distribution Board & Trunked Cabling',
        details:
          'Dedicated circuit protection consumer unit, external main earth marshalling block, enclosed white trunking, and clear BS7671 dual-supply emergency isolation signage.',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/IMG_0724_27aefb65.webp',
        mediaType: 'image',
        title: 'GivEnergy All-In-One & Gateway Installation',
        tag: 'All-In-One & Gateway',
        caption:
          'Complete plant wall featuring the GivEnergy Gateway above enclosed trunking, dedicated protection distribution board, earth block, and the floor-standing GivEnergy All-In-One 13.5 kWh battery.',
      },
    ],
    image: '/assets/aistudio/IMG_0724_27aefb65.webp',
  },
  {
    id: 'solar-pergola',
    slug: 'solar-pergola',
    folderName: 'Solar Pergola',
    title: 'Solar Pergola · Bespoke Poolside Solar Canopy & GivEnergy Storage',
    clientType: 'Residential Property',
    location: 'Dorset, South Coast',
    systemSummary: '8-Panel Architectural Solar Pergola Canopy + GivEnergy Hybrid Inverter & Battery',
    metrics: {
      systemCapacity: '8-Panel Solar Pergola + BESS',
      annualGenerationOrSavings: '0% VAT Residential',
      co2OffsetPerYear: 'Poolside Dual-Use Canopy',
      paybackAchieved: 'MCS & NICEIC Certified',
    },
    overview:
      'Sustechs engineered a bespoke architectural Solar Pergola beside a residential swimming pool, turning an outdoor garden canopy into a productive renewable power station. Eight all-black solar PV modules form a clean structural canopy roof feeding a GivEnergy hybrid inverter and floor-standing GivEnergy LiFePO4 battery bank with full AC/DC isolation switchgear.',
    keyHighlights: [
      'Custom white poolside pergola structure carrying an 8-panel edge-to-edge all-black Solar PV canopy',
      'Wall-mounted GivEnergy Hybrid Inverter with Wi-Fi telemetry, IMO PV DC isolator, and AC rotary isolator on OSB plant board',
      'Floor-standing GivEnergy LiFePO4 battery unit storing daytime solar surplus to power home and swimming pool loads',
    ],
    technologies: [
      {
        name: 'Architectural Solar Pergola',
        scope: '8-Panel Poolside Structural Canopy',
        details:
          'Eight all-black monocrystalline solar PV modules mounted directly onto a bespoke white garden pergola structure overlooking the swimming pool, generating clean power while providing sheltered outdoor shade.',
      },
      {
        name: 'GivEnergy Hybrid & Battery',
        scope: 'Inverter & Floor-Standing Storage',
        details:
          'Wall-mounted GivEnergy Hybrid Inverter paired with a high-capacity floor-standing GivEnergy battery module to capture surplus daytime solar generation and lower household and pool energy demand.',
      },
      {
        name: 'AC/DC Isolation & Switchgear',
        scope: 'IMO DC Isolator, AC Rotary & Trunking',
        details:
          'Precision BS7671 electrical installation on a neat plant wall featuring an IMO PV Array DC isolator, main AC rotary isolator, enclosed white cable trunking, and clear dual-supply safety labelling.',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/IMG_3220HYzaTX_5b79de56.webp',
        mediaType: 'image',
        title: '8-Panel Poolside Solar Pergola Canopy',
        tag: 'Solar Pergola',
        caption:
          'Completed 8-panel all-black Solar PV array integrated seamlessly across the white structural pergola beside the outdoor swimming pool.',
      },
      {
        src: '/assets/aistudio/IMG_3009qsnFhq_72f3924b.webp',
        mediaType: 'image',
        title: 'GivEnergy Hybrid Inverter & AC/DC Isolators',
        tag: 'Hybrid Inverter',
        caption:
          'Plant board installation showing the GivEnergy Hybrid Inverter, Wi-Fi telemetry dongle, IMO PV DC isolator, main AC rotary isolator, and enclosed white trunking.',
      },
      {
        src: '/assets/aistudio/IMG_2997kkn5B1_8650570d.webp',
        mediaType: 'image',
        title: 'Floor-Standing GivEnergy Battery Storage Unit',
        tag: 'Battery Storage',
        caption:
          'GivEnergy floor-mounted LiFePO4 battery storage module commissioned and active with green status LEDs.',
      },
    ],
    image: '/assets/aistudio/IMG_3220HYzaTX_5b79de56.webp',
  },
  {
    id: 'beagle-aircraft-led',
    slug: 'beagle-aircraft-led',
    folderName: 'Beagle Aircraft · Christchurch LED',
    title: 'Beagle Aircraft · Christchurch · 580+ Fluorescent-to-LED Lighting Upgrade',
    clientType: 'Commercial Enterprise',
    location: 'Christchurch, Dorset',
    systemSummary: 'Over 580 Old-Type Fluorescent Lights Replaced with High-Efficacy Commercial LED',
    metrics: {
      systemCapacity: '580+ LED Luminaires',
      annualGenerationOrSavings: 'Major Lighting kWh Cut',
      co2OffsetPerYear: 'Aerospace Hangar Retrofit',
      paybackAchieved: 'Low-Maintenance LED',
    },
    overview:
      'Sustechs upgraded the lighting infrastructure across the Beagle aircraft manufacturing facility in Christchurch, Dorset, replacing over 580 legacy fluorescent light fittings with modern high-efficiency commercial LED luminaires. The hangar-wide LED retrofit delivers crisp, shadow-free task illumination across high-bay trusses and production bays while substantially reducing electricity consumption and ongoing tube maintenance.',
    keyHighlights: [
      'Changed over 580 old-type fluorescent light fittings to high-output commercial LED luminaires across aircraft hangars and workshops',
      'Suspended chain-mounted linear LED battens engineered cleanly beneath existing steel roof trusses and overhead service pipework',
      'Significantly lowered continuous industrial lighting energy draw while eliminating recurring fluorescent ballast and lamp replacements',
    ],
    technologies: [
      {
        name: '580+ LED Luminaire Conversion',
        scope: 'Hangars & Production Bays',
        details:
          'Full one-for-one replacement and modernisation of more than 580 legacy fluorescent fittings using high-efficacy industrial linear LED units built for demanding aerospace manufacturing environments.',
      },
      {
        name: 'High-Bay Truss Suspension',
        scope: 'Steel Purlin & Chain Mounting',
        details:
          'Precision chain-suspended mounting from overhead hangar trusses and structural beams to deliver uniform daylight-balanced lux levels around tooling, autoclaves, and assembly stations.',
      },
      {
        name: 'Energy & Maintenance Reduction',
        scope: 'Commercial Load & Lifecycle Savings',
        details:
          'Instant-on, flicker-free illumination operating at a fraction of the legacy fluorescent wattage, dramatically cutting operating electricity costs and high-level access maintenance callouts.',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/IMG_4751_f78189e6.webp',
        mediaType: 'image',
        title: 'Christchurch Hangar Linear LED Lighting Array',
        tag: 'Commercial LED Retrofit',
        caption:
          'Suspended high-efficiency linear LED luminaires installed across the steel roof trusses at the Beagle aircraft facility in Christchurch, replacing over 580 old fluorescent fittings.',
      },
    ],
    image: '/assets/aistudio/IMG_4751_f78189e6.webp',
  },
  {
    id: 'factory-infrared-heating',
    slug: 'factory-infrared-heating',
    folderName: 'Factory Zoned Infrared Heating',
    title: 'Factory Zoned Infrared Heating · Targeted Radiant Comfort & Telemetry',
    clientType: 'Commercial Enterprise',
    location: 'Dorset, South Coast',
    systemSummary: 'Zoned Industrial Infrared Heaters + Sub-Metered Smart Cycling Control',
    metrics: {
      systemCapacity: 'Zoned IR Radiant Bays',
      annualGenerationOrSavings: 'Zero Overnight Draw',
      co2OffsetPerYear: 'Targeted Area Heating',
      paybackAchieved: 'Reduced kWh Waste',
    },
    overview:
      'Sustechs installed zoned industrial infrared radiant heaters inside a high-bay fabrication factory, allowing specific occupied work areas to be warmed directly instead of wasting electricity heating the entire building volume. Live sub-metered power telemetry demonstrates crisp daytime cycling between zones (such as IR Heater 1 on Wall and IR Heater 2 Middle) with zero energy waste outside working shifts.',
    keyHighlights: [
      'Wall and bay-mounted commercial infrared radiant heaters deliver instant targeted warmth directly to personnel and fabrication workstations',
      'Eliminates electricity waste from heating unused high-bay airspace and empty factory zones near open roller shutters',
      'Live sub-metering telemetry logs exact heater cycling behaviour (~2.8kW peak cycling with 0W draw outside shift hours)',
    ],
    technologies: [
      {
        name: 'Targeted Infrared Heaters',
        scope: 'Zoned Workshop & Bay Mounting',
        details:
          'High-output commercial short/medium-wave infrared emitters mounted cleanly on structural columns and bays to warm people and surfaces directly within active work zones.',
      },
      {
        name: 'Smart Zone Cycling Telemetry',
        scope: 'Circuit-Level kW Monitoring',
        details:
          'Continuous per-heater power profiling captures real-time load cycling (IR Heater 1 on Wall & IR Heater 2 Middle), proving rapid thermostat duty-cycling and complete shutoff outside operating hours.',
      },
      {
        name: 'Electricity Waste Reduction',
        scope: 'Demand-Led Industrial Control',
        details:
          'Instead of running high-load convection blowers across an entire warehouse roof void, zoned radiant control powers only occupied bays when needed, cutting wasted kWh.',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/3f527091-0829-4443-9f77-9a3fd836dea1_9fc3630f.webp',
        mediaType: 'image',
        title: 'Zoned Factory Infrared Radiant Heaters',
        tag: 'Factory IR Heating',
        caption:
          'Industrial infrared heaters mounted along the steel factory bays, delivering instant directional warmth directly to active fabrication zones.',
      },
      {
        src: '/assets/aistudio/Screenshot_2025-10-21_at_10.40.31_20aed2ac.webp',
        mediaType: 'image',
        title: 'Live Heater Cycling & Load Behaviour Telemetry',
        tag: 'Power Telemetry',
        caption:
          'Daily kW telemetry chart for IR Heater 1 on Wall (2.81kW) and IR Heater 2 Middle (1.18kW), showing smart thermostatic cycling during working hours and zero idle power overnight.',
      },
    ],
    image: '/assets/aistudio/3f527091-0829-4443-9f77-9a3fd836dea1_9fc3630f.webp',
  },
  {
    id: 'deltamaster-server-building-4',
    slug: 'deltamaster-server-building-4',
    folderName: 'DeltaMaster · Server Building 4',
    title: 'DeltaMaster Free Cooling · Server Building 4 (370 MWh/yr Saved)',
    clientType: 'Commercial Enterprise',
    location: 'European Server Facility (3 Floors · 1,000 sqm)',
    systemSummary: '61 kW Heat Load · Annual Cooling Power Cut from 378 MWh to 8 MWh (97% Saving)',
    metrics: {
      systemCapacity: '61 kW Heat Load · 1,000 sqm',
      annualGenerationOrSavings: '€66,557/yr Saved (97% Cut)',
      co2OffsetPerYear: '370 MWh/yr Cooling Saved',
      paybackAchieved: 'Delta-T: 3 K Maintained',
    },
    overview:
      'In a 3-storey, 1,000 sqm server building carrying a 61 kW continuous heat load previously served by multiple mechanical air conditioners, Air-Site DeltaMaster Free Cooling reduced annual cooling electricity consumption from 378 MWh (€68,000/yr at €0.18/kWh) down to just 8 MWh (€1,443/yr)—delivering a 97% energy saving while holding a tight 3 K Delta-T.',
    keyHighlights: [
      'Annual cooling energy dropped from 378 MWh/yr to 8 MWh/yr (370 MWh saved per year — a 97% reduction)',
      'Annual cooling electricity bill cut from €68,000 to €1,443 (€66,557 saved annually at €0.18/kWh)',
      'Multi-floor installation across a 1,000 sqm facility with insulated intake plenums and twin high-volume fabric diffuser socks maintaining 3 K Delta-T',
    ],
    technologies: [
      {
        name: 'DeltaMaster Free Cooling Units',
        scope: '61 kW Thermal Rejection Across 3 Floors',
        details:
          'Multiple high-capacity DeltaMaster economiser units fitted with quad fabric air-sock diffusers evenly distribute cool filtered outside air across server aisles without compressor energy.',
      },
      {
        name: 'Insulated Intake Plenums',
        scope: 'External Air Routing & Structural Bracing',
        details:
          'Custom-fabricated insulated sheet-metal air intake plenums spanning tiled plant rooms and equipment halls to channel outside air cleanly to each DeltaMaster casing.',
      },
      {
        name: '97% Cooling Cost Reduction',
        scope: '378 MWh → 8 MWh Verified Performance',
        details:
          'Bypassed multiple legacy mechanical air conditioners, trimming annual electricity expenditure from €68,000 to €1,443 with automated Delta-T control.',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/deltamaster_sr4_plenum.webp',
        mediaType: 'image',
        title: 'Insulated Air Intake Plenum & DeltaMaster Casing',
        tag: 'Air Distribution',
        caption:
          'Server Building 4 installation showing the insulated horizontal air-intake plenum feeding a DeltaMaster unit with three fabric diffuser socks.',
      },
      {
        src: '/assets/aistudio/deltamaster_sr4_twin.webp',
        mediaType: 'image',
        title: 'Twin High-Capacity DeltaMaster Units',
        tag: 'Server Building 4',
        caption:
          'Paired DeltaMaster Free Cooling units commissioned side-by-side inside the 3-floor 1,000 sqm facility, contributing to a 370 MWh/yr cooling reduction.',
      },
    ],
    image: '/assets/aistudio/deltamaster_sr4_plenum.webp',
  },
  {
    id: 'deltamaster-server-room-1',
    slug: 'deltamaster-server-room-1',
    folderName: 'DeltaMaster · Server Room 1',
    title: 'DeltaMaster Free Cooling · Server Room 1 (278 MWh/yr Saved)',
    clientType: 'Commercial Enterprise',
    location: 'Residential-Zone Server Hall (500 sqm)',
    systemSummary: '46 kW Heat Load · Cooling Cut from 284 MWh to 6 MWh (97% Saving · 30 dBA at 3 m)',
    metrics: {
      systemCapacity: '46 kW Heat Load · 500 sqm',
      annualGenerationOrSavings: '€50,000/yr Saved (97% Cut)',
      co2OffsetPerYear: '278 MWh/yr Cooling Saved',
      paybackAchieved: '30 dBA at 3 m Acoustic Rating',
    },
    overview:
      'Located right in the middle of a residential area subject to strict 30 dBA at 4 m acoustic regulations, this 500 sqm equipment hall carried a 46 kW heat load cooled by two very large CIAT air conditioners. Installing Air-Site DeltaMaster Free Cooling cut annual cooling demand from 284 MWh (€51,000/yr) to 6 MWh (€1,000/yr)—saving €50,000/yr (97%) while operating at just 30 dBA at 3 m.',
    keyHighlights: [
      'Annual cooling consumption reduced from 284 MWh/yr to 6 MWh/yr (278 MWh saved — 97% electricity saving)',
      'Annual energy cost reduced from €51,000 to €1,000 (€50,000 saved per year at €0.18/kWh)',
      'Whisper-quiet acoustic intake hoods measured 48 dBA at the intake and 30 dBA at 3 m, beating strict 30 dBA at 4 m residential rules while holding 3 K Delta-T',
    ],
    technologies: [
      {
        name: 'Plinth-Mounted DeltaMaster Array',
        scope: '46 kW Heat Rejection · 500 sqm Hall',
        details:
          'Multiple DeltaMaster Free Cooling units positioned directly behind telecoms and server cabinets on raised plinths, delivering low-velocity laminar airflow through fabric air socks.',
      },
      {
        name: 'Acoustic Facade Intake Hoods',
        scope: '30 dBA at 3 m Residential Compliance',
        details:
          'Weatherproof brushed-metal facade louvres integrated seamlessly into brick window bays with internal acoustic attenuation to satisfy urban residential noise regulations.',
      },
      {
        name: '278 MWh/yr Compressor Offset',
        scope: 'Replaced Two Large CIAT Chillers',
        details:
          'Eliminated 97% of annual mechanical compressor electricity while maintaining an even 3 K temperature differential across the 500 sqm room.',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/deltamaster_sr1_interior.webp',
        mediaType: 'image',
        title: 'DeltaMaster Units Inside Server Room 1',
        tag: 'Interior Equipment Hall',
        caption:
          'Three DeltaMaster Free Cooling units mounted alongside active server racks in the 500 sqm hall, cutting annual cooling demand from 284 MWh to 6 MWh.',
      },
      {
        src: '/assets/aistudio/deltamaster_sr1_facade.webp',
        mediaType: 'image',
        title: 'Acoustic Weatherproof Facade Intake Hoods',
        tag: '30 dBA @ 3 m Compliant',
        caption:
          'Low-noise exterior air intake hoods engineered for the surrounding residential area, measuring 48 dBA at the intake and 30 dBA at 3 m.',
      },
    ],
    image: '/assets/aistudio/deltamaster_sr1_interior.webp',
  },
  {
    id: 'deltamaster-server-room-6',
    slug: 'deltamaster-server-room-6',
    folderName: 'DeltaMaster · Server Room 6',
    title: 'DeltaMaster Free Cooling · Server Room 6 (277 MWh/yr Saved)',
    clientType: 'Commercial Enterprise',
    location: 'Commercial Data Centre',
    systemSummary: '46 kW Heat Load · Cooling Cut from 285 MWh to 8 MWh (97% Saving · 2 K Delta-T)',
    metrics: {
      systemCapacity: '46 kW Heat Load',
      annualGenerationOrSavings: '€49,557/yr Saved (97% Cut)',
      co2OffsetPerYear: '277 MWh/yr Cooling Saved',
      paybackAchieved: 'Delta-T: 2 K Tight Control',
    },
    overview:
      'Previously cooled by power-hungry air conditioners consuming 285 MWh (€51,000/yr at €0.18/kWh) for a 46 kW IT load, Server Room 6 was retrofitted with wall-mounted Air-Site DeltaMaster Free Cooling units. Annual cooling consumption plummeted to 8 MWh (€1,443/yr)—delivering a 97% reduction (€49,557 saved annually) alongside ultra-tight 2 K Delta-T thermal stability.',
    keyHighlights: [
      'Slashed annual cooling electricity from 285 MWh/yr to 8 MWh/yr (277 MWh saved — 97% reduction)',
      'Cut yearly cooling running costs from €51,000 to €1,443 (€49,557/yr saved at €0.18/kWh)',
      'Twin wall-mounted DeltaMaster units replaced mechanical AC operation while holding an ultra-tight 2 K Delta-T across the server rack aisles',
    ],
    technologies: [
      {
        name: 'Twin DeltaMaster Wall Retrofit',
        scope: '46 kW IT Cooling · Tight 2 K Delta-T',
        details:
          'Wall-mounted DeltaMaster casings installed adjacent to the legacy floor-standing air conditioner, immediately assuming year-round cooling duty using cool filtered outdoor air.',
      },
      {
        name: 'Aisle Diffuser Air Distribution',
        scope: 'Uniform Cold-Aisle Delivery',
        details:
          'Quad white fabric air socks eliminate hot spots and drafts along adjacent server racks while maintaining a 2 K Delta-T across the equipment floor.',
      },
      {
        name: '€49,557/yr Cost Reduction',
        scope: '285 MWh → 8 MWh Annual Performance',
        details:
          'Delivered a verified 97% reduction in cooling power draw by displacing continuous mechanical compressor operation.',
      },
    ],
    gallery: [
      {
        src: '/assets/aistudio/deltamaster_sr6_twin.webp',
        mediaType: 'image',
        title: 'Twin DeltaMaster Units Bypassing Legacy AC',
        tag: '97% Energy Saved',
        caption:
          'Twin DeltaMaster Free Cooling units installed in Server Room 6 beside the decommissioned mechanical air conditioner, slashing load from 285 MWh to 8 MWh/yr.',
      },
      {
        src: '/assets/aistudio/deltamaster_sr6_aisle.webp',
        mediaType: 'image',
        title: 'Server Rack Aisle Cooling Delivery',
        tag: '2 K Delta-T Control',
        caption:
          'Clean airflow delivery down the server rack aisle maintaining a 2 K Delta-T for a 46 kW heat load.',
      },
    ],
    image: '/assets/aistudio/deltamaster_sr6_twin.webp',
  },
];

export const FAQS = [
  {
    question: 'How do DNO approvals (G98, G99, G100) work in Dorset and the South Coast?',
    answer:
      'For domestic systems with inverters up to 3.68kW per phase, installation proceeds under G98 notification (fit and notify within 28 days). For larger commercial arrays or high-capacity batteries exceeding 3.68kW single-phase (or 11.04kW three-phase), a formal G99 grid connection application is mandatory. Sustechs manages the complete application directly with Scottish & Southern Electricity Networks (SSEN) or National Grid, including single line diagrams and export limitation G100 engineering.',
  },
  {
    question: 'What UK grants and tax reliefs are currently available for commercial businesses?',
    answer:
      'UK commercial enterprises can write off 100% of the cost of qualifying solar PV and battery storage installations against taxable profits in the first year via Full Expensing (capital allowances). In addition, commercial EV charging installations benefit from the OZEV Workplace Charging Scheme (WCS), funding 75% of purchase and installation costs up to £350 per socket across 40 sockets (£14,000 maximum).',
  },
  {
    question: 'How does the £7,500 Boiler Upgrade Scheme (BUS) grant work for heat pumps?',
    answer:
      'As an MCS-certified installer, Sustechs applies for the £7,500 voucher on your behalf through Ofgem. The full £7,500 is discounted directly from your quotation and final balance when replacing an existing fossil fuel (gas, oil, LPG, or direct electric) heating system. Combined with 0% VAT on heat pumps, homeowners save substantially on upfront capital costs.',
  },
  {
    question: 'What warranties and service guarantees does Sustechs provide?',
    answer:
      'We supply only premium Tier 1 equipment backed by 25–30 year linear solar panel performance warranties, 10–15 year inverter and battery warranties, and 5–7 year heat pump manufacturer warranties. Every installation includes our comprehensive Sustechs 10-year workmanship guarantee, NICEIC test certificates, and RECC consumer protection.',
  },
  {
    question: 'Can I export excess solar electricity back to the grid for payment?',
    answer:
      'Yes. Through the Smart Export Guarantee (SEG) or modern flexible supplier tariffs (such as Octopus Outgoing, Ovo, or British Gas), you are paid for every kilowatt-hour exported. With battery storage installed, you can choose whether to store that power for evening consumption or automatically export at peak tariff times (e.g. 15p–22p/kWh) to maximise revenue.',
  },
];

export const DORSET_POSTCODE_PREFIXES = ['BH', 'DT', 'SO', 'SP', 'PO', 'EX', 'TA'];
