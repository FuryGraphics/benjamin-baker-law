/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Landmark, MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, Home, Users, Scale, Briefcase, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { RouteType } from '../types';

interface CityLocationDetailProps {
  cityId: 'sherman-tx' | 'denison-tx' | 'pottsboro-tx' | 'whitesboro-tx' | 'whitewright-tx' | 'collinsville-tx' | 'grayson-county-tx';
  setRoute: (route: RouteType) => void;
}

interface CityContent {
  cityName: string;
  seoTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  courthouseTitle: string;
  courthouseDetails: string;
  courtAddress: string;
  relatedCities: { name: string; route: RouteType }[];
}

const CITIES_CONTENT: Record<string, CityContent> = {
  'sherman-tx': {
    cityName: 'Sherman, TX',
    seoTitle: 'Family Law & Civil Litigation Attorney Sherman TX | Benjamin A. Baker P.C.',
    metaDesc: 'Looking for aggressive family law, divorce, or civil litigation counselor in Sherman, TX? Contact Benjamin A. Baker P.C. for a free consultation today.',
    h1: 'Family Law & Civil Litigation Attorney in Sherman, TX',
    intro: `Benjamin A. Baker P.C. maintains its primary legal headquarters inside downtown Sherman, Texas, providing direct representation to individuals and businesses across the city. As the county seat of Grayson County, Sherman represents the primary legal hub where Family Law separations, Child Custody lawsuits, Personal Injury claims, and commercial Civil disputes are prosecuted. Sitting mere steps away from the Grayson County Courthouse, Managing Attorney Benjamin A. Baker delivers rapid, decisive advocacy tailored to Grayson statutory rules. Our office manages complex community property tracings, child support adjustments, highway-75 accident restructurings, and Deceptive Trade Practice violations. By establishing a local office in the heart of Sherman, we offer a safe, confidential port for residents to receive straightforward counsel before critical timelines or statutes of limit expire.`,
    courthouseTitle: 'Grayson County Courthouse Complex (Sherman, TX)',
    courthouseDetails: 'The primary judicial complex for state-level actions inside Grayson County. Handles family divorce decrees, custody hearings, civil litigation, and toxic employment suits. Includes the 15th, 59th, and 397th Judicial District Courts and Count Courts at Law No. 1 and No. 2.',
    courtAddress: '100 W Houston St, Sherman, TX 75090',
    relatedCities: [
      { name: 'Denison, TX', route: 'denison-tx' },
      { name: 'Pottsboro, TX', route: 'pottsboro-tx' },
      { name: 'Grayson County, TX', route: 'grayson-county-tx' }
    ]
  },
  'denison-tx': {
    cityName: 'Denison, TX',
    seoTitle: 'Divorce & Child Custody Lawyer Denison TX | Benjamin A. Baker P.C.',
    metaDesc: 'Expert family law, child custody and divorce representation for Denison, TX. Benjamin A. Baker protects your rights and assets. Speak to a attorney now.',
    h1: 'Family Law & Custody Attorney in Denison, TX',
    intro: `Denison, Texas, represents a rapid growth commercial and residential corridor just north of our Sherman headquarters. Residents in Denison navigating difficult child care disputes, complex marital asset determinations, or sudden personal trauma from highway-75 truck collisions rely on Benjamin A. Baker P.C. for straightforward, localized counsel. We understand the specific municipal processes of Denison and coordinate our efforts with local Grayson County judicial bodies representing this area. Whether you require guidance modifying existing custody arrangements, seeking emergency protective reviews, or initiating bad-faith insurance claims after home or automobile accidents on FM-120, we construct custom strategic options representing your interests. We ensure Denison residents receive the high-fidelity representation of a major metropolitan legal program with the personal communication of a local counselor.`,
    courthouseTitle: 'Grayson County Justice Center & Municipal Courts',
    courthouseDetails: 'Main courthouse branches representing Denison municipal affairs, and Precinct-level Justice of the Peace dockets for small civil collection claims and municipal ordinance violations, with higher-level civil litigation routed to Sherman.',
    courtAddress: '200 S Travis St, Sherman, TX 75090',
    relatedCities: [
      { name: 'Sherman, TX', route: 'sherman-tx' },
      { name: 'Pottsboro, TX', route: 'pottsboro-tx' },
      { name: 'Whitesboro, TX', route: 'whitesboro-tx' }
    ]
  },
  'pottsboro-tx': {
    cityName: 'Pottsboro, TX',
    seoTitle: 'Real Estate & Family Law Attorney Pottsboro TX | Benjamin A. Baker P.C.',
    metaDesc: 'Need counsel for divorce, custody, or property disputes in Pottsboro or Lake Texoma? Contact Benjamin A. Baker P.C. steps from District Court.',
    h1: 'Civil Litigation & Family Attorney in Pottsboro, TX',
    intro: `The Lake Texoma and Pottsboro residential areas represent a unique dynamic of residential estates, active agricultural ranches, and recreational business properties. Benjamin A. Baker P.C. serves Pottsboro, Texas with skilled Family Law and Civil Contract litigation representation. Property and contract issues—including waterfront easement disputes, construction defect claims on custom residential builders, and boundary title issues—demand a representing counselor with mastery of Texas property statutes. Additionally, our family law team guides Pottsboro spouses and parents through divorce asset division, custody hearings, and visitation modifications in the Sherman courthouse circles. We ensure you feel completely backed by aggressive strategy and honest advisories.`,
    courthouseTitle: 'Grayson County JP Precinct 2 Court',
    courthouseDetails: 'Serves regional affairs in Pottsboro, Lake Texoma, and outer municipal coordinates for preliminary hearings, landlord eviction filings, and local covenant civil collection actions.',
    courtAddress: '101 S Broadway St, Pottsboro, TX 75076',
    relatedCities: [
      { name: 'Sherman, TX', route: 'sherman-tx' },
      { name: 'Denison, TX', route: 'denison-tx' },
      { name: 'Whitesboro, TX', route: 'whitesboro-tx' }
    ]
  },
  'whitesboro-tx': {
    cityName: 'Whitesboro, TX',
    seoTitle: 'Civil Contracts & Divorce Lawyer Whitesboro TX | Benjamin A. Baker P.C.',
    metaDesc: 'Securing family rights, divorce decrees, and contract protections for Whitesboro, TX. Benjamin A. Baker P.C. offers skilled Grayson County counsel.',
    h1: 'Contract Litigation & Family Attorney in Whitesboro, TX',
    intro: `Whitesboro, Texas, located on the outer western boundaries of Grayson County along the US-82 corridor, is famous for agricultural ranches, commercial equine networks, and residential families. Benjamin A. Baker P.C. delivers expert Civil Litigation, Contract defenses, and Family Law dockets to the Whitesboro region. When equestrian or agricultural business purchases result in deceptive conduct, or developers violate mechanical and boundary covenants, we pursue enforcement and restitution aggressively. For Whitesboro families, we handle delicate divorces, custody battles, child support modifications, and grandparent access parameters. Our location in nearby Sherman makes it incredibly easy to gather documents and launch actions.`,
    courthouseTitle: 'Grayson County Justice Court Precinct 4',
    courthouseDetails: 'Handles minor civil collections, small-claims dockets, and local Whitesboro regional complaints up to statutory thresholds, with all core district dockets managed at the county seat in Sherman.',
    courtAddress: '111 W Main St, Whitesboro, TX 76273',
    relatedCities: [
      { name: 'Collinsville, TX', route: 'collinsville-tx' },
      { name: 'Sherman, TX', route: 'sherman-tx' },
      { name: 'Whitesboro, TX', route: 'whitesboro-tx' }
    ]
  },
  'whitewright-tx': {
    cityName: 'Whitewright, TX',
    seoTitle: 'Family Law & Civil Litigation Lawyer Whitewright TX | Benjamin A. Baker P.C.',
    metaDesc: 'Serving Whitewright, TX with dedicated legal support. We handle child custody, property rights, and divorce. Schedule a free attorney consult.',
    h1: 'Civil Disputes & Family Law Counselor in Whitewright, TX',
    intro: `Whitewright, Texas, nestled in the southeastern sector of Grayson County on State Highway 11, has a rich agricultural history and tight-knit family communities. If you are a resident or business operator of Whitewright facing a breach of contract default, a property boundary line dispute, or a child support enforcement problem, Benjamin A. Baker P.C. stands ready as your trial attorney. We prevent major legal issues from building up by analyzing your rights early and providing plain-spoken guidance. Since Whitewright lies on outer county circles, our Sherman headquarters serves as an accessible legal center where you can meet privately to draft Original Petitions and prepare for formal district court trials.`,
    courthouseTitle: 'Grayson County Justice Court Precinct 2',
    courthouseDetails: 'Manages preliminary municipal collections, landlord disputes, and neighborhood complaints for Southeast Grayson County communities, with District Court actions located at Sherman.',
    courtAddress: '200 S Travis St, Sherman, TX 75090',
    relatedCities: [
      { name: 'Sherman, TX', route: 'sherman-tx' },
      { name: 'Denison, TX', route: 'denison-tx' },
      { name: 'Grayson County, TX', route: 'grayson-county-tx' }
    ]
  },
  'collinsville-tx': {
    cityName: 'Collinsville, TX',
    seoTitle: 'Equestrian & Family Law Lawyer Collinsville TX | Benjamin A. Baker P.C.',
    metaDesc: 'Need aggressive civil or divorce advocacy in Collinsville, TX? Benjamin A. Baker P.C. represents families and land owners in Grayson County.',
    h1: 'Civil Litigation & Custody Advocate in Collinsville, TX',
    intro: `Collinsville, Texas, situated on the western edges of Grayson County along the US-377 path, is home to beautiful ranches, small commercial operations, and rural family structures. Benjamin A. Baker P.C. supports Collinsville residents in defending their land ownership, solving equine purchase breaches, and resolving child custody separations. We guide clients through difficult community property disputes, complex agricultural easement violations, and child visitation actions with transparent, professional focus. Our legal counselors ensure Collinsville property holder and family interests are defended with elite care at the primary dockets in Sherman.`,
    courthouseTitle: 'Grayson County Justice Court Precinct 4',
    courthouseDetails: 'Serves western regional collections, property line claims below standard thresholds, and minor landlord complaints, with core dockets and family dockets fully presented in Sherman.',
    courtAddress: '111 W Main St, Whitesboro, TX 76273',
    relatedCities: [
      { name: 'Whitesboro, TX', route: 'whitesboro-tx' },
      { name: 'Sherman, TX', route: 'sherman-tx' },
      { name: 'Grayson County, TX', route: 'grayson-county-tx' }
    ]
  },
  'grayson-county-tx': {
    cityName: 'Grayson County, TX',
    seoTitle: 'Family Court & Civil Trial Attorney Grayson County TX | Benjamin A. Baker P.C.',
    metaDesc: 'Need a trusted courtroom lawyer in Grayson County? We represent clients in Sherman, Denison & more in Family Law, Civil Litigation & Personal Injury.',
    h1: 'Family, Civil & Injury Trial Attorney in Grayson County, TX',
    intro: `Grayson County, Texas, is a rapidly changing region with complex judicial networks spanning municipal JP precincts and several high-stakes state district courts in Sherman. Benjamin A. Baker P.C. serves as the premier legal counselor for clients throughout this county, offering robust help in Family Law, Divorce, Child Custody, Personal Injury restitution, and Civil business lawsuits. Whether you reside in Sherman, Denison, Pottsboro, Whitesboro, or the smaller rural sectors, our Sherman offices serve as a legal headquarters where files are securely structured for success. We maintain complete respect for Texas Attorney-Client Privilege while building aggressive strategies to ensure your rights and economic assets are fully preserved.`,
    courthouseTitle: 'Grayson County Justice Center & Courthouse (County-Wide Seat)',
    courthouseDetails: 'The primary state dockets center for all locations across Grayson County, TX. Houses the 15th, 59th, and 397th Judicial District Courts. Handles complex family divisions, custody lawsuits, civil breach complaints, and personal injury trials.',
    courtAddress: '100 W Houston St, Sherman, TX 75090',
    relatedCities: [
      { name: 'Sherman, TX', route: 'sherman-tx' },
      { name: 'Denison, TX', route: 'denison-tx' },
      { name: 'Pottsboro, TX', route: 'pottsboro-tx' }
    ]
  }
};

export default function CityLocationDetail({ cityId, setRoute }: CityLocationDetailProps) {
  const content = CITIES_CONTENT[cityId] || CITIES_CONTENT['sherman-tx'];

  useEffect(() => {
    // 1. Set dynamic metadata
    document.title = content.seoTitle;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', content.metaDesc);

    // 2. Set dynamic canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://babakerpc.com/#${cityId}`);

    // 3. Inject JSON-LD Schema (LocalBusiness & BreadcrumbList)
    const existingScript = document.getElementById('seo-city-schema-script');
    if (existingScript) {
      existingScript.remove();
    }

    const schemaData = [
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://babakerpc.com/#local-business-schema',
        'name': 'Benjamin A. Baker P.C.',
        'telephone': '(903) 271-7824',
        'email': 'BenjaminABaker62@gmail.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '416 S Crockett St',
          'addressLocality': 'Sherman',
          'addressRegion': 'TX',
          'postalCode': '75090',
          'addressCountry': 'US'
        },
        'url': `https://babakerpc.com/#${cityId}`,
        'logo': 'https://babakerpc.com/logo.png',
        'image': 'https://babakerpc.com/office_preview.jpg',
        'priceRange': '$$',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '33.63855',
          'longitude': '-96.6115933'
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
          ],
          'opens': '08:30',
          'closes': '17:30'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://babakerpc.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': content.cityName,
            'item': `https://babakerpc.com/#${cityId}`
          }
        ]
      }
    ];

    const script = document.createElement('script');
    script.id = 'seo-city-schema-script';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    if (typeof window !== 'undefined') {
      console.log(`[SEO Engine] GA4 logged view for city landing: /${cityId}`);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [cityId, content]);

  const navigateToRoute = (route: RouteType) => {
    setRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = `#${route}`;
  };

  const servicesList: { title: string; route: RouteType; desc: string }[] = [
    { title: 'Family Law', route: 'practice-areas/family-law', desc: 'Divorce, child custody adjustments, property division & enforcement.' },
    { title: 'Personal Injury', route: 'practice-areas/personal-injury', desc: 'Secure medical costs, lost salary & vehicle restitution after accidents.' },
    { title: 'Civil Litigation', route: 'practice-areas/civil-litigation', desc: 'Aggressive breach of contract, easement and commercial trial defense.' },
    { title: 'Employment Law', route: 'practice-areas/employment-law', desc: 'Wrongful termination, FMLA denials, unpaid overtime claims.' }
  ];

  return (
    <main className="bg-[#0C0C0C] min-h-screen text-[#F2EDE4] relative pt-32 pb-24 px-5 sm:px-6 lg:px-8 overflow-x-hidden" id="city-details-wrapper">
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-[0.03]" />
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.03)_0%,rgba(0,0,0,0)_75%)] pointer-events-none filter blur-2xl" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Dynamic Breadcrumb Bar */}
        <nav className="flex items-center space-x-2 text-xs text-[#888880] tracking-widest uppercase font-mono py-2.5 border-b border-white/[0.04]">
          <button onClick={() => navigateToRoute('home')} className="hover:text-[#C9A84C] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>HOME</span>
          </button>
          <span>/</span>
          <span className="text-[#E8D08A]">{content.cityName.toUpperCase()}</span>
        </nav>

        {/* 1. Full-Width Hero layout banner */}
        <div className="space-y-6 max-w-4xl" id="seo-city-hero">
          <div className="inline-flex items-center space-x-2 border border-[#C9A84C]/25 bg-black/40 py-1.5 px-4 rounded-full text-[10px] font-sans tracking-[4px] uppercase text-[#E8D08A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            <span>LOCAL GRAYSON COUNTY COUNSEL</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#E8D08A] font-medium leading-[1.1] tracking-tight">
            {content.h1}
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#888880] tracking-widest uppercase border-l-2 border-[#C9A84C] pl-4">
            Advocating for the community of {content.cityName} · Law Offices in nearby Sherman, Texas
          </p>
        </div>

        {/* 2. Main Content Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="city-main-grid">
          
          {/* Left Column Content: 8 cols */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Intro Copy (minimum 200 words) */}
            <section className="space-y-6 border-b border-white/[0.04] pb-10">
              <h2 className="font-serif text-2xl text-[#F2EDE4] font-semibold tracking-wide">
                Dedicated Legal Advocacy in {content.cityName}
              </h2>
              <p className="font-sans text-xs sm:text-sm md:text-base text-[#888880]/90 leading-relaxed font-normal whitespace-pre-line">
                {content.intro}
              </p>
            </section>

            {/* List of Practice Areas Served */}
            <section className="space-y-6" id="services-covered-list">
              <h2 className="font-serif text-2xl text-[#E8D08A] font-semibold tracking-wide">
                Specialized Practice Areas We Represent
              </h2>
              <p className="font-sans text-xs text-[#888880] leading-relaxed">
                Our law offices represent individuals, professionals, and small business networks in {content.cityName} through four major areas of Texas laws:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesList.map((service, idx) => (
                  <div key={idx} className="bg-[#141414] border border-white/[0.03] hover:border-[#C9A84C]/25 p-5 rounded-sm transition-all group">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 border border-[#C9A84C]/20 bg-black/40 rounded-sm">
                        {service.route.includes('family') && <Users className="w-5 h-5 text-[#C9A84C]" />}
                        {service.route.includes('injury') && <Scale className="w-5 h-5 text-[#C9A84C]" />}
                        {service.route.includes('civil') && <Briefcase className="w-5 h-5 text-[#C9A84C]" />}
                        {service.route.includes('employ') && <ShieldAlert className="w-5 h-5 text-[#C9A84C]" />}
                      </div>
                      <h3 className="font-serif text-base text-[#F2EDE4] group-hover:text-[#E8D08A] font-semibold transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="font-sans text-xs text-[#888880] leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <button 
                      onClick={() => navigateToRoute(service.route)}
                      className="inline-flex items-center space-x-1.5 text-xs text-[#C9A84C] hover:text-[#E8D08A] font-sans font-semibold tracking-wider uppercase focus:outline-none"
                    >
                      <span>Explore Area</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Local Courthouse Info Section */}
            <section className="bg-[#141414]/90 border border-[#C9A84C]/15 p-6 sm:p-8 rounded-sm space-y-4" id="court-seo-reference">
              <div className="flex items-start space-x-3.5">
                <Landmark className="w-6 h-6 text-[#C9A84C] shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-serif text-lg text-[#E8D08A] font-semibold tracking-wide">
                    {content.courthouseTitle}
                  </h3>
                  <p className="font-sans text-xs text-[#888880] leading-relaxed">
                    {content.courthouseDetails}
                  </p>
                  <div className="flex items-center space-x-2 text-[11px] text-[#F2EDE4]/80 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
                    <span>Court Location: {content.courtAddress}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Google Maps Embed focused on 416 S Crockett St, Sherman TX */}
            <section className="space-y-4" id="office-map-embed">
              <h3 className="font-serif text-xl text-[#F2EDE4] font-semibold">
                Our Physical Offices Headquarters
              </h3>
              <p className="font-sans text-xs text-[#888880]">
                If you are driving from {content.cityName}, our central Sherman office is easily located steps away from the Grayson County Courthouse. See interactive map directions below:
              </p>
              <div className="aspect-[16/9] w-full border border-white/[0.04] bg-[#141414] overflow-hidden rounded-sm relative">
                <iframe 
                  title="Benjamin A. Baker P.C. Sherman Offices Map Directions"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.9654152865955!2d-96.6115933!3d33.63855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ca06dd65b7cb3%3A0xe54b9d07ec6561cf!2s416%20S%20Crockett%20St%2C%20Sherman%2C%20TX%2075090!5e0!3m2!1sen!2sus!4v1716490325810!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  id="google-iframe-embed"
                />
              </div>
            </section>
          </div>

          {/* Right Sidebar Information & Contacts Info: 4 cols */}
          <div className="lg:col-span-4 space-y-8" id="city-sidebar">
            
            {/* Sherman Office Details Card */}
            <div className="bg-[#141414] border border-[rgba(201,168,76,0.18)] p-6 space-y-5 shadow-xl">
              <span className="font-sans text-xs tracking-[4px] text-[#C9A84C] uppercase block font-semibold">
                HEADQUARTERS
              </span>
              <h3 className="font-serif text-xl text-[#E8D08A] font-semibold">
                Sherman Offices
              </h3>

              <div className="space-y-4 text-xs font-sans text-[#888880]">
                {/* Physical Location */}
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4.5 h-4.5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#F2EDE4] font-medium font-serif">Benjamin A. Baker P.C.</strong>
                    <span className="block mt-1">416 S Crockett St</span>
                    <span className="block">Sherman, TX 75090</span>
                    <span className="text-[10px] italic block mt-1">Steps away from District Courthouses.</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4.5 h-4.5 text-[#C9A84C] shrink-0" />
                  <div>
                    <span>Direct:</span>{' '}
                    <a href="tel:9032717824" className="text-[#E8D08A] hover:text-[#C9A84C] hover:underline font-semibold font-mono">
                      (903) 271-7824
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4.5 h-4.5 text-[#C9A84C] shrink-0" />
                  <div>
                    <span>Confidential Inbox:</span>{' '}
                    <a href="mailto:BenjaminABaker62@gmail.com" className="text-[#E8D08A] hover:text-[#C9A84C] hover:underline block truncate">
                      BenjaminABaker62@gmail.com
                    </a>
                  </div>
                </div>

                {/* Consultation hours */}
                <div className="flex items-start space-x-2.5">
                  <Clock className="w-4.5 h-4.5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <span>Office Hours:</span>
                    <span className="text-[#F2EDE4] block mt-1">Monday – Friday</span>
                    <span className="block text-[10px]">8:30 AM – 5:30 PM (Sat/Sun Appt Only)</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-white/[0.04] pt-2" />
              
              <button 
                onClick={() => navigateToRoute('contact')}
                className="w-full bg-[#C9A84C] hover:bg-[#E8D08A] text-[#0C0C0C] font-sans text-xs font-bold tracking-widest uppercase py-3 transition-colors cursor-pointer"
              >
                Intake Free Review
              </button>
            </div>

            {/* Regional covering selector */}
            <div className="bg-[#141414]/60 border border-white/[0.03] p-6 rounded-sm space-y-4">
              <h3 className="font-serif text-[#E8D08A] text-lg font-semibold border-b border-white/[0.04] pb-2">
                Regional Directories
              </h3>
              <p className="font-sans text-[11px] text-[#888880] leading-relaxed">
                Aggressive counsel served across municipal networks of North Texas:
              </p>
              <div className="space-y-2 font-sans text-xs">
                {content.relatedCities.map((city, idx) => (
                  <button 
                    key={idx}
                    onClick={() => navigateToRoute(city.route)}
                    className="w-full text-left py-2 px-3 bg-black/30 hover:bg-[#C9A84C]/10 border border-transparent hover:border-[#C9A84C]/25 text-[#888880] hover:text-[#E8D08A] transition-all flex items-center justify-between"
                  >
                    <span>{city.name}</span>
                    <ArrowRight className="w-3 h-3 text-[#C9A84C]" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Global Full-Width Shimmer Consultation CTA Banner */}
        <section className="w-full bg-gradient-to-r from-[#141414] via-[#201C14] to-[#141414] border-t border-b border-[#C9A84C]/25 p-8 sm:p-12 text-center rounded-sm relative overflow-hidden shadow-2xl" id="seo-city-bottom-cta">
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.3)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <Landmark className="w-10 h-10 text-[#C9A84C] mx-auto block" />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#E8D08A] font-semibold tracking-wide">
              Straightforward and Aggressive Courthouse Advocate
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#888880] max-w-xl mx-auto leading-relaxed">
              If you live in {content.cityName} and require strong legal protection in family divorce, child rights, negligent injury compensation or breach of contract, contact Benjamin A. Baker immediately.
            </p>
            <div className="h-px bg-[#C9A84C]/15 w-24 mx-auto" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a 
                href="tel:9032717824"
                className="inline-flex items-center space-x-2 bg-[#C9A84C] hover:bg-[#E8D08A] text-[#0C0C0C] font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 shadow-xl transition-colors cursor-pointer"
              >
                <Landmark className="w-4 h-4" />
                <span>Call (903) 271-7824</span>
              </a>
              <button 
                onClick={() => navigateToRoute('contact')}
                className="border border-[#C9A84C]/50 hover:border-[#C9A84C] hover:bg-white/[0.02] text-[#C9A84C] hover:text-[#E8D08A] font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 transition-colors cursor-pointer"
              >
                Inquire Online Now
              </button>
            </div>
            <p className="font-sans text-[10px] text-[#888880] pt-2 flex items-center justify-center gap-1.5 uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
              <span>Texas Attorney-Client Privilege Enforced</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
