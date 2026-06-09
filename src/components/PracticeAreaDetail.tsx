/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Scale, Briefcase, ShieldAlert, ChevronDown, ChevronUp, ArrowRight, CheckCircle2, Home, Landmark, ShieldCheck } from 'lucide-react';
import { RouteType } from '../types';

interface PracticeAreaDetailProps {
  areaId: 'family-law' | 'personal-injury' | 'civil-litigation' | 'employment-law';
  setRoute: (route: RouteType) => void;
}

interface FAQItem {
  q: string;
  a: string;
}

interface AreaContent {
  title: string;
  seoTitle: string;
  metaDesc: string;
  h1: string;
  icon: React.ReactNode;
  intro: string;
  handles: string[];
  timeline: { step: string; title: string; desc: string }[];
  faqs: FAQItem[];
  relatedAreas: { title: string; route: RouteType }[];
}

const AREAS_CONTENT: Record<string, AreaContent> = {
  'family-law': {
    title: 'Family Law',
    seoTitle: 'Family Law & Divorce Attorney Sherman TX | Benjamin A. Baker P.C.',
    metaDesc: 'Looking for a trusted family law attorney in Sherman, TX? Benjamin A. Baker P.C. provides expert support for divorce, child custody, support, and property division.',
    h1: 'Family Law Attorney in Sherman, TX',
    icon: <Users className="w-8 h-8 text-[#C9A84C]" />,
    intro: `Navigating familial legal modifications inside the state of Texas demands balanced discretion, deep legal qualifications, and protective counsel. Managing Attorney Benjamin A. Baker represents familial interests across Grayson County with straightforward guidance and aggressive courtroom defense. Whether you are facing a highly contested divorce action involving complex martial property division, disputing child custody and visitation parameters, or seeking post-divorce enforcement reviews, our office creates custom strategic parameters to achieve peaceful resolutions. We understand that family disputes are emotionally draining, which is why we commit to absolute responsiveness, helping you protect your parental rights, maintain critical assets, and establish secure legal boundaries. If you reside in Sherman, Denison, or surrounding Grayson County cities, our office stands ready to evaluate your situation under statutory Texas family law rules to build a protective legal path forward.`,
    handles: [
      'Contested and Uncontested Divorce Actions',
      'Child Custody, Visitation rights, and Joint Conservatorship',
      'Child Support enforcement, modifications, and retroactive claims',
      'Complex marital asset tracing and high-value property division',
      'Spousal maintenance (alimony) determinations and reviews',
      'Paternity establishment, father’s rights representation',
      'Temporary protection orders and emergency custody hearings',
      'Post-divorce decree modifications and court-ordered enforcements'
    ],
    timeline: [
      {
        step: '01',
        title: 'Confidential Consultation & File Audit',
        desc: 'We meet privately to evaluate your domestic context, review existing filings, establish legal objectives, and define statutory timelines for Texas separation.'
      },
      {
        step: '02',
        title: 'Discovery, Tracing & Strategy Design',
        desc: 'Our administrative center compiles vital credentials, financial statements, communications logs and tax assets to establish an aggressive negotiation leverage system.'
      },
      {
        step: '03',
        title: 'Mediation Compliance & Trial Counsel',
        desc: 'We attempt professional resolution during Grayson County’s mandatory mediation blocks. If negotiations stall, we deploy experienced courtroom advocates for judge trials.'
      }
    ],
    faqs: [
      {
        q: 'How are child custody determinations made in Grayson County?',
        a: 'Texas courts evaluate the "best interests of the child" standard. This includes primary safety stability, existing emotional attachments, parental cooperation, educational continuity, and, if the child is over 12, their home environment preference. Joint Managing Conservatorship is common but does not guarantee equal overnight access.'
      },
      {
        q: 'What is the process for dividing community property under Texas rules?',
        a: 'Texas is a community property state. All assets acquired during a marriage are property of the community and subject to "just and right" equitable division upon divorce. Property owned prior to marriage, or received via restricted inheritance or gift, is defined as separate property, provided it is properly traced and proven.'
      },
      {
        q: 'How long does the divorce process take in Sherman, TX?',
        a: 'Texas family law mandates a mandatory 60-day waiting period from the date the initial Original Petition for Divorce is filed before a final decree can be legally entered. Uncontested actions can be finalized near day 61. Highly contested disputes involving complex child care and asset divisions frequently require several months to over a year.'
      },
      {
        q: 'Am I required to participate in mediation before custody hearings or trial?',
        a: 'Yes, Grayson County local district court guidelines almost always require both parties to attend a cooperative mediation session before a contested final trial is scheduled. Judges strongly favor resolutions created collaboratively between parents over standard judicial decrees.'
      },
      {
        q: 'How can I modify a current child support or custody order?',
        a: 'To modify an existing Texas custody or child support decree, you must demonstrate a "material and substantial change in circumstances" targeting either parent or the child. Examples include material shifts in income, relocations beyond geographic rules, or shifts in the child’s safety stability.'
      },
      {
        q: 'What are temporary orders and how quickly can they be established?',
        a: 'Temporary orders are binding short-term rules established quickly at the beginning of a divorce or custody lawsuit. They define who resides in the family home, establish temporary support payments, and govern child access schedules while the litigation remains pending in the Grayson County courthouse.'
      }
    ],
    relatedAreas: [
      { title: 'Civil Litigation', route: 'practice-areas/civil-litigation' },
      { title: 'Personal Injury', route: 'practice-areas/personal-injury' },
      { title: 'Employment Law', route: 'practice-areas/employment-law' }
    ]
  },
  'personal-injury': {
    title: 'Personal Injury',
    seoTitle: 'Personal Injury & Car Accident Lawyer Sherman TX | Benjamin A. Baker P.C.',
    metaDesc: 'Injured in an accident? Get aggressive representation from Benjamin A. Baker P.C. in Sherman, TX. We fight for medical costs and wages. No fee unless we win.',
    h1: 'Personal Injury Attorney in Sherman, TX',
    icon: <Scale className="w-8 h-8 text-[#C9A84C]" />,
    intro: `When negligence results in severe physical traumas, your financial survival relies on aggressive, highly communicative representing counsel. Benjamin A. Baker P.C. stands for injured victims throughout Grayson County, challenging major insurance institutions to secure maximum civil restitution. We handle comprehensive claims, including devastating commercial trucking wrecks on US-75, severe automobile collisions, premises failures, slip-and-fall events, and tragic wrongful death litigation. Unlike cold commercial advertising firms, Benjamin Baker personally manages your file, ensuring you are not ignored or pressured into low settlements. We compile emergency services medical records, coordinate specialized physical therapy documentation, and model accurate calculations for lost wages, upcoming medical needs, and chronic physical suffering. Our contingency representation model guarantees that you owe absolute zero attorney out-of-pocket costs unless we successfully recover money for your pain.`,
    handles: [
      'Commercial truck and 18-wheeler highway collisions on US-75',
      'Passenger vehicle collisions and motorcycle wrecks',
      'Premises liability, inadequate warnings, and slip-and-fall accidents',
      'Wrongful death representation for grieving family members',
      'Catastrophic spine injuries and traumatic brain injury (TBI) claims',
      'Pedestrian and bicycle collision injuries',
      'Insurance claim bad faith refusals and coverage disputes',
      'Dog bites and animal attack injuries in suburban residential areas'
    ],
    timeline: [
      {
        step: '01',
        title: 'Immediate Case Assessment & Evidence Capture',
        desc: 'Our office logs incident reports, secures vehicle dashcam files, speaks with Sherman law enforcement, and audits medical histories within hours.'
      },
      {
        step: '02',
        title: 'Medical Stability & Restitution Audits',
        desc: 'You focus on healing with trusted healthcare providers. We audit total billing, negotiate therapeutic liens, and assemble full settlement packets.'
      },
      {
        step: '03',
        title: 'Settlement Demands & Litigation Dispatch',
        desc: 'We dispatch formal demands to liability insurers. If they offer an inadequate compromise, we initiate lawsuits in Grayson County District Court.'
      }
    ],
    faqs: [
      {
        q: 'What should I do immediately after a car accident in Sherman, TX?',
        a: 'First, contact local law enforcement to create an official crash report. Second, seek immediate medical care to document injuries. Third, photograph vehicles, injuries, and road signs. Fourth, exchange standard credentials but do not discuss fault or give statements to administrative adjusters.'
      },
      {
        q: 'How much does it cost to hire an expert personal injury lawyer in Texas?',
        a: 'Our firm operates on a strict contingency fee model. This means you do not pay any hourly rate or upfront retaining costs. Our fee is calculated as a fixed percentage of the financial settlement or courtroom verdict we recover for you. If we do not make a recovery, you owe nothing.'
      },
      {
        q: 'How is the value of my personal injury claim calculated?',
        a: 'Comprehensive valuation considers both economic damages (hospital bills, rehabilitation, drug therapies, property repairs, and lost wages) and non-economic damages (physical suffering, mental trauma, physical limitations, loss of enjoyment, and physical scarring).'
      },
      {
        q: 'Will my injury claim have to go to court in Grayson County?',
        a: 'Statistically, a vast majority of personal injury disputes are settled before a trial is held. However, if the insurance adjuster refuses to provide a fair settlement covering your medical totals, we will immediately initiate civil litigation and file suit to protect your rights.'
      },
      {
        q: 'What is the statute of limitations to file an injury lawsuit in Texas?',
        a: 'Under the Texas Civil Practice & Remedies Code, you have a strict window of two (2) years from the exact date of the accident to file an official personal injury lawsuit. Failure to meet this deadline forever blocks your legal ability to recover compensation.'
      },
      {
        q: 'What if the other driver was uninsured or underinsured?',
        a: 'If you possess Uninsured/Underinsured Motorist (UM/UIM) coverage on your own auto policy, we can file a secure claim directly with your insurer to cover your damages. We will handle these claims aggressively just like third-party negotiations.'
      }
    ],
    relatedAreas: [
      { title: 'Family Law', route: 'practice-areas/family-law' },
      { title: 'Civil Litigation', route: 'practice-areas/civil-litigation' },
      { title: 'Employment Law', route: 'practice-areas/employment-law' }
    ]
  },
  'civil-litigation': {
    title: 'Civil Litigation',
    seoTitle: 'Civil Litigation & Business Lawyer Sherman TX | Benjamin A. Baker P.C.',
    metaDesc: 'Real estate, contract, or business dispute? Benjamin A. Baker P.C. offers skilled civil litigation and trial defense in Sherman and Grayson County, TX.',
    h1: 'Civil Litigation Attorney in Sherman, TX',
    icon: <Briefcase className="w-8 h-8 text-[#C9A84C]" />,
    intro: `High-stakes commercial disagreements, commercial contract defaults, and real estate asset disputes require experienced trial counsel with complete structural command of Texas civil laws. Benjamin A. Baker P.C. serves as an aggressive civil litigation partner inside Grayson County courthouses. From commercial breach of contract matters to property line/boundary fights, partnership dissolutions, and consumer deceptive trade complaints, we build pragmatic pretrial actions designed to minimize client exposure. We prioritize finding cost-efficient paths to resolutions outside the courtroom through structured negotiations. However, we remain fully prepared to prosecute and defend high-risk actions before Texas jury circles and judges. We represent land builders, property owners, homeowners, and local Sherman businesses with seasoned civil expertise.`,
    handles: [
      'Commercial and consumer breach of contract disputes',
      'Real estate titles, boundary disputes, and easement negotiations',
      'Deceptive Trade Practices Act (DTPA) consumer and business claims',
      'Partnership disagreements, business breakups, and asset division',
      'Construction defect disputes and payment/mechanic’s lien filings',
      'Debt collection prosecution, debtor defense, and judgment enforcements',
      'Fiduciary duty violations and commercial fraud litigation',
      'Grayson County landlord-tenant commercial contract disputes'
    ],
    timeline: [
      {
        step: '01',
        title: 'Initial Contract Audit & Liability Assessment',
        desc: 'We review your underlying agreements, trace economic damages, identify breach elements, and study applicable Texas statutory limits.'
      },
      {
        step: '02',
        title: 'Pre-Litigation Demands & Dispute Filing',
        desc: 'We draft and send formal Chapter 38 demand letters. If separate entities ignore our options, we file structured petitions in District and County Courts.'
      },
      {
        step: '03',
        title: 'Discovery, Deposition & Aggressive Court Advocacy',
        desc: 'We manage structured digital discovery exchanges, complete depositions of critical witnesses, draft summary judgments, and advocate at trial.'
      }
    ],
    faqs: [
      {
        q: 'What constitutes a breach of contract under Texas civil statutes?',
        a: 'In Texas, a valid breach of contract claim requires demonstrating: (1) a legally valid contract existed; (2) the plaintiff executed their obligations; (3) the defendant default-failed to execute theirs; and (4) the plaintiff suffered real measurable financial losses due to that default.'
      },
      {
        q: 'How long do I have to file a commercial dispute lawsuit in Sherman?',
        a: 'The general statute of limitations for a breach of contract action or debt collection in Texas is four (4) years from the exact date the breach or default occurred. Tortious fraud or fiduciary violations have different timelines, typically two to four years.'
      },
      {
        q: 'What remedies can I seek in a Texas real estate boundary disagreement?',
        a: 'Remedies include trespass to try title suits for property boundary adjustments, actions for permanent injunctive relief to block encroachment, actions for financial damages for property degradation, and quiet title actions to clear real estate issues.'
      },
      {
        q: 'Can I recover attorney fees in a successful civil breach contract litigation?',
        a: 'Yes, under Chapter 38 of the Texas Civil Practice and Remedies Code, a successful plaintiff can recover reasonable, necessary attorney fees if they succeed on a breach of contract claim, provided a proper 30-day notice and demand was made.'
      },
      {
        q: 'What is the Deceptive Trade Practices Act (DTPA) and how does it protect businesses?',
        a: 'The DTPA protects consumers against false, misleading, or deceptive business practices. Businesses with assets representing under $25 million may also assert claims for deceptive commercial vendor conduct, securing treble (triple) damages and attorney fees.'
      },
      {
        q: 'What is the difference between arbitration, mediation, and courtroom trials?',
        a: 'Mediation is a cooperative, non-binding negotiation guided by a neutral third party. Arbitration is a private, binding process where an arbitrator decides. Courtroom litigation is an official public action on state docket records, decided by a judge or jury.'
      }
    ],
    relatedAreas: [
      { title: 'Family Law', route: 'practice-areas/family-law' },
      { title: 'Personal Injury', route: 'practice-areas/personal-injury' },
      { title: 'Employment Law', route: 'practice-areas/employment-law' }
    ]
  },
  'employment-law': {
    title: 'Employment Law',
    seoTitle: 'Employment Law & Wrongful Termination Attorney Sherman TX | Benjamin A. Baker P.C.',
    metaDesc: 'Facing unpaid overtime, discrimination, or wrongful termination? Benjamin A. Baker P.C. defends workplace rights for workers across Grayson County, TX.',
    h1: 'Employment Law Attorney in Sherman, TX',
    icon: <ShieldAlert className="w-8 h-8 text-[#C9A84C]" />,
    intro: `Workplaces must be governed by lawful and fair principles. But employees frequently encounter illegal discrimination, withheld overtime compensation, or retaliatory discharge. Managed by attorney Benjamin A. Baker, our firm serves as an advocate for workers facing unfair workplace actions throughout Grayson County. We represent professionals in seeking redress for civil violations, wrongful terminations, wage and hour theft, and unlawful employer practices. If an employer has violated the Texas Labor Code, denied legitimate FMLA medical leave, or attempted to enforce restrictive, illegal covenants of a non-compete clause, we provide the aggressive counsel needed to level the field and secure your professional livelihood.`,
    handles: [
      'Wrongful termination in violation of state or federal laws',
      'Title VII workplace discrimination based on race, sex, age, or religion',
      'Unpaid overtime, wage theft, and Fair Labor Standards Act (FLSA) violations',
      'Severance packages analysis, review, and restrictive covenant negotiation',
      'Family and Medical Leave Act (FMLA) and ADA medical leave violations',
      'Unenforceable and restrictive non-compete agreements defenses',
      'Whistleblower protection and illegal occupational retaliations',
      'Sexual harassment and hostile work environment litigation'
    ],
    timeline: [
      {
        step: '01',
        title: 'Initial Workplace Case Audit & Strategy',
        desc: 'We review payroll records, personnel files, employment handbooks, contract clauses, and communication records to confirm legal viability.'
      },
      {
        step: '02',
        title: 'EEOC / TWC Filing & Administrative Process',
        desc: 'We draft and file formal charges of discrimination with the EEOC and Texas Workforce Commission, managing administrative interviews.'
      },
      {
        step: '03',
        title: 'Federal Lawsuits & Damage Compensation Trials',
        desc: 'Upon securing your "Right to Sue" letter, we file formal actions in state or federal courts to secure lost back wages, front pay, and punitive damage awards.'
      }
    ],
    faqs: [
      {
        q: 'Is Texas an "at-will" state and what qualifies as wrongful termination?',
        a: 'Yes, Texas is an at-will employment state, meaning an employer or employee can end employment at any time for any legal reason or no reason. However, wrongful termination occurs if you are discharged in violation of employment contracts, for discriminatory reasons, or as illegal retaliation.'
      },
      {
        q: 'What should I do if I am experiencing workplace harassment or discrimination?',
        a: 'First, document every incident with dates, times, and witness details. Second, report the conduct in writing to HR or management using explicit terms. Third, preserve all emails, text messages, and internal communications separately on your personal device.'
      },
      {
        q: 'Are non-compete agreements legally enforceable in Sherman, TX?',
        a: 'In Texas, a non-compete agreement is enforceable only if it is ancillary to an otherwise enforceable agreement and contains reasonable limits as to geographical scope, duration, and the specific activities and services restricted.'
      },
      {
        q: 'What are my rights regarding overtime pay under the Fair Labor Standards Act?',
        a: 'The FLSA requires employers to pay non-exempt employees overtime pay—at 1.5 times the regular hourly rate—for all hours worked in excess of 40 hours per workweek. Misclassifying employees as exempt managers to avoid paying overtime represents a major wage violation.'
      },
      {
        q: 'Am I protected if I blow the whistle on illegal company activities?',
        a: 'Yes, several state and federal laws protect employees who decline to perform illegal acts, report fraud, or participate in regulatory investigations. Retaliating against a whistleblower is highly illegal and opens employers to lawsuits.'
      },
      {
        q: 'How does the Family and Medical Leave Act (FMLA) protect my employment?',
        a: 'The FMLA provides eligible employees with up to 12 weeks of unpaid, job-protected leave per year for specified family and medical reasons. Employers are forbidden from retaliating, demoting, or terminating workers who request or utilize FMLA blocks.'
      }
    ],
    relatedAreas: [
      { title: 'Family Law', route: 'practice-areas/family-law' },
      { title: 'Personal Injury', route: 'practice-areas/personal-injury' },
      { title: 'Civil Litigation', route: 'practice-areas/civil-litigation' }
    ]
  }
};

export default function PracticeAreaDetail({ areaId, setRoute }: PracticeAreaDetailProps) {
  const content = AREAS_CONTENT[areaId] || AREAS_CONTENT['family-law'];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // SEO Optimization & Schema Markup injection
  useEffect(() => {
    // 1. Dynamic document Title & Meta
    document.title = content.seoTitle;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', content.metaDesc);

    // 2. Dynamic Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://babakerpc.com/#practice-areas/${areaId}`);

    // 3. Dynamic JSON-LD Hook for Schemas (LegalService, FAQPage, and BreadcrumbList)
    const existingScript = document.getElementById('seo-schema-script');
    if (existingScript) {
      existingScript.remove();
    }

    const schemaData = [
      {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        '@id': 'https://babakerpc.com/#legal-service-schema',
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
        'url': 'https://babakerpc.com/',
        'logo': 'https://babakerpc.com/logo.png',
        'image': 'https://babakerpc.com/office_preview.jpg',
        'priceRange': '$$',
        'areaServed': [
          'Sherman, TX',
          'Denison, TX',
          'Pottsboro, TX',
          'Whitesboro, TX',
          'Whitewright, TX',
          'Collinsville, TX',
          'Grayson County, TX'
        ],
        'knowsAbout': [
          'Family Law',
          'Divorce Law',
          'Child Custody',
          'Personal Injury Claims',
          'Car Accident Restitution',
          'Civil Litigation',
          'Contract Disputes',
          'Employment Disagreements'
        ]
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
            'name': 'Practice Areas',
            'item': 'https://babakerpc.com/#practice-areas'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': content.title,
            'item': `https://babakerpc.com/#practice-areas/${areaId}`
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': content.faqs.map(f => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      }
    ];

    const script = document.createElement('script');
    script.id = 'seo-schema-script';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // Track page views dynamically in analytics placeholders
    if (typeof window !== 'undefined') {
      console.log(`[SEO Engine] GA4 logged view for: /practice-areas/${areaId}`);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [areaId, content]);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const navigateToRoute = (route: RouteType) => {
    setRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = `#${route}`;
  };

  const citiesList: { name: string; route: RouteType }[] = [
    { name: 'Sherman, TX', route: 'sherman-tx' },
    { name: 'Denison, TX', route: 'denison-tx' },
    { name: 'Pottsboro, TX', route: 'pottsboro-tx' },
    { name: 'Whitesboro, TX', route: 'whitesboro-tx' },
    { name: 'Whitewright, TX', route: 'whitewright-tx' },
    { name: 'Collinsville, TX', route: 'collinsville-tx' },
    { name: 'Grayson County, TX', route: 'grayson-county-tx' }
  ];

  return (
    <main className="bg-[#FAF8F3] min-h-screen text-[#1F1D1A] relative pt-32 pb-24 px-5 sm:px-6 lg:px-8 overflow-x-hidden" id="practice-details-wrapper">
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-[0.03]" />
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.03)_0%,rgba(0,0,0,0)_75%)] pointer-events-none filter blur-2xl" />

      {/* Structured Core Body Grid */}
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Dynamic Breadcrumb bar */}
        <nav className="flex items-center space-x-2 text-xs text-[#5F5B53] tracking-widest uppercase font-mono py-2.5 border-b border-black/[0.08]">
          <button onClick={() => navigateToRoute('home')} className="hover:text-[#C9A84C] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>HOME</span>
          </button>
          <span>/</span>
          <button onClick={() => navigateToRoute('practice-areas')} className="hover:text-[#C9A84C]">PRACTICE AREAS</button>
          <span>/</span>
          <span className="text-[#9A7A28]">{content.title.toUpperCase()}</span>
        </nav>

        {/* 1. Full-Width Hero layout banner */}
        <div className="space-y-6 max-w-4xl" id="seo-details-hero">
          <div className="inline-flex items-center space-x-2 border border-[#C9A84C]/25 bg-black/[0.03] py-1.5 px-4 rounded-full text-[10px] font-sans tracking-[4px] uppercase text-[#9A7A28]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            <span>EXPERT TEXAS LEGAL ADVOCACY</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#9A7A28] font-medium leading-[1.1] tracking-tight">
            {content.h1}
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#5F5B53] tracking-widest uppercase border-l-2 border-[#C9A84C] pl-4">
            Managing Counselor Benjamin A. Baker · Grayson County, Texas Legal Representation
          </p>
        </div>

        {/* 2. Structured Copy Block: H2 Header and Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="seo-deep-details-grid">
          
          {/* Main Left Content Group: 8 cols */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Intro paragraph (200+ words) */}
            <section className="space-y-6 border-b border-black/[0.08] pb-10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1F1D1A] font-semibold tracking-wide flex items-center gap-3">
                {content.icon}
                <span>Straightforward Counsel & Aggressive Protection</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm md:text-base text-[#5F5B53]/90 leading-relaxed font-normal whitespace-pre-line">
                {content.intro}
              </p>
            </section>

            {/* What We Handle checklist block */}
            <section className="space-y-6" id="what-we-handle-bullets">
              <h2 className="font-serif text-2xl text-[#9A7A28] font-semibold tracking-wide">
                Specific Case Types We Handle
              </h2>
              <p className="font-sans text-xs text-[#5F5B53] mt-1 leading-relaxed">
                Texas civil and family codes are highly technical. Our firm represents clients in resolving high-risk complexities across multiple core specialties:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {content.handles.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-[#FFFFFF]/80 p-4 border border-black/[0.07] rounded-sm hover:border-[#C9A84C]/20 transition-all">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#C9A84C] shrink-0 mt-0.5" />
                    <span className="font-sans text-xs text-[#1F1D1A]/80 leading-normal font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3-Step Process Timeline block */}
            <section className="space-y-8 pt-6 border-t border-black/[0.08]" id="strategy-process-timeline">
              <div>
                <h2 className="font-serif text-2xl text-[#9A7A28] font-semibold tracking-wide">
                  Strategic Case Workflow Pathway
                </h2>
                <p className="font-sans text-xs text-[#5F5B53] mt-1">
                  How Benjamin A. Baker P.C. prepares and defends your legal options:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {content.timeline.map((step, idx) => (
                  <div key={idx} className="bg-[#FFFFFF] border border-[rgba(201,168,76,0.15)] p-6 rounded-sm relative shadow-xl flex flex-col justify-between group">
                    <div>
                      <span className="font-serif text-[#C9A84C] text-5xl font-extralight block mb-4 border-b border-[#C9A84C]/10 pb-2">
                        {step.step}
                      </span>
                      <h3 className="font-serif text-[#1F1D1A] text-base font-semibold tracking-wide mb-2">
                        {step.title}
                      </h3>
                      <p className="font-sans text-xs text-[#5F5B53] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Accordion Section (6 Questions) */}
            <section className="space-y-6 pt-6 border-t border-black/[0.08]" id="faq-accordions-container">
              <div>
                <h2 className="font-serif text-2xl text-[#9A7A28] font-semibold tracking-wide flex items-center gap-2">
                  <Landmark className="w-6 h-6 text-[#C9A84C]" />
                  <span>Frequently Asked Questions & Advisory Details</span>
                </h2>
                <p className="font-sans text-xs text-[#5F5B53] mt-1 leading-relaxed">
                  Important legal aspects concerning your legal protections inside Sherman and Grayson County courts:
                </p>
              </div>

              <div className="space-y-3.5">
                {content.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx}
                      className="border border-black/[0.08] bg-[#FFFFFF]/40 hover:bg-[#FFFFFF]/90 rounded-sm overflow-hidden transition-all duration-300"
                    >
                      <button 
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-5 flex justify-between items-center text-xs sm:text-sm font-serif font-semibold text-[#1F1D1A] hover:text-[#9A7A28] focus:outline-none transition-colors"
                      >
                        <span className="pr-4">{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#C9A84C] shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#C9A84C] shrink-0" />}
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-5 pb-5 pt-1 border-t border-black/[0.07] text-xs text-[#5F5B53] leading-relaxed whitespace-pre-line font-sans">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right Sidebar: Quick links to other locations / areas (4 cols) */}
          <div className="lg:col-span-4 space-y-8" id="seo-deep-sidebar">
            
            {/* Immediate Intake prompt card */}
            <div className="border border-[#C9A84C]/20 bg-[#FFFFFF] p-6 text-center space-y-4 shadow-xl">
              <span className="font-serif text-lg text-[#9A7A28] font-semibold block tracking-wide">
                Urgent Case Evaluation
              </span>
              <p className="font-sans text-xs text-[#5F5B53] leading-relaxed">
                Need immediate representation at the Grayson County Justice Center? Call our office today. Any data shared is held under strict Texas Attorney-Client Privilege.
              </p>
              <div className="w-10 h-0.5 bg-[#C9A84C] mx-auto" />
              <div className="text-xl font-serif text-[#1F1D1A] font-bold font-mono">
                (903) 271-7824
              </div>
              <button 
                onClick={() => navigateToRoute('contact')}
                className="w-full bg-[#C9A84C] hover:bg-[#9A7A28] text-[#0C0C0C] font-sans text-xs font-bold tracking-widest uppercase py-3 transition-colors cursor-pointer"
              >
                Intake Free Claim Review
              </button>
            </div>

            {/* Related Practice Specialties */}
            <div className="bg-[#FFFFFF]/60 border border-black/[0.07] p-6 rounded-sm space-y-4">
              <h3 className="font-serif text-[#9A7A28] text-lg font-semibold border-b border-black/[0.08] pb-2">
                Related Practice Areas
              </h3>
              <div className="space-y-2 font-sans text-xs">
                {content.relatedAreas.map((area, idx) => (
                  <button 
                    key={idx}
                    onClick={() => navigateToRoute(area.route)}
                    className="w-full text-left py-2 px-3 bg-black/[0.03] hover:bg-[#C9A84C]/10 border border-transparent hover:border-[#C9A84C]/20 text-[#5F5B53] hover:text-[#9A7A28] transition-all flex items-center justify-between group"
                  >
                    <span>{area.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
                <button 
                  onClick={() => navigateToRoute('practice-areas')}
                  className="w-full text-center hover:text-[#C9A84C] transition-colors font-semibold text-[11px] uppercase tracking-wider block pt-3 border-t border-black/[0.07]"
                >
                  View All Specialties
                </button>
              </div>
            </div>

            {/* Service Cities SEO Directory */}
            <div className="bg-[#FFFFFF]/60 border border-black/[0.07] p-6 rounded-sm space-y-4">
              <h3 className="font-serif text-[#9A7A28] text-lg font-semibold border-b border-black/[0.08] pb-2">
                Regional Service Covered
              </h3>
              <p className="font-sans text-[11px] text-[#5F5B53] leading-relaxed">
                Benjamin A. Baker provides courtroom advocates and counsel across Grayson County, TX municipal networks:
              </p>
              <div className="grid grid-cols-2 gap-2 font-sans text-[11px]">
                {citiesList.map((city, idx) => (
                  <button 
                    key={idx}
                    onClick={() => navigateToRoute(city.route)}
                    className="text-left py-2 px-2.5 bg-black/[0.02] text-[#5F5B53] hover:text-[#C9A84C] border border-black/[0.06] hover:border-[#C9A84C]/20 transition-all text-xs"
                  >
                    • {city.name.replace(', TX', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Global Full-Width Shimmer Consultation CTA Banner */}
        <section className="w-full bg-gradient-to-r from-[#F0E6CC] via-[#FAF3E0] to-[#F0E6CC] border-t border-b border-[#C9A84C]/25 p-8 sm:p-12 text-center rounded-sm relative overflow-hidden shadow-2xl" id="seo-bottom-cta">
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.3)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <Landmark className="w-10 h-10 text-[#C9A84C] mx-auto block" />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#9A7A28] font-semibold tracking-wide">
              Secure Straightforward Counsel & Aggressive Protection
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#5F5B53] max-w-xl mx-auto leading-relaxed">
              If you have an active legal dispute in Family Law, Personal Injury, or Civil contracts, do not wait. Request confidential direct evaluation logs with attorney Benjamin A. Baker immediately.
            </p>
            <div className="h-px bg-[#C9A84C]/15 w-24 mx-auto" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a 
                href="tel:9032717824"
                className="inline-flex items-center space-x-2 bg-[#C9A84C] hover:bg-[#9A7A28] text-[#0C0C0C] font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 shadow-xl transition-colors cursor-pointer"
              >
                <Landmark className="w-4 h-4" />
                <span>Call (903) 271-7824</span>
              </a>
              <button 
                onClick={() => navigateToRoute('contact')}
                className="border border-[#C9A84C]/50 hover:border-[#C9A84C] hover:bg-black/[0.04] text-[#C9A84C] hover:text-[#9A7A28] font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 transition-colors cursor-pointer"
              >
                Inquire Online Now
              </button>
            </div>
            <p className="font-sans text-[10px] text-[#5F5B53] pt-2 flex items-center justify-center gap-1.5 uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
              <span>Texas Attorney-Client Privilege Enforced</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
