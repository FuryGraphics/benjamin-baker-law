/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PracticeArea, Testimonial, BlogPost } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'family-law',
    title: 'Family Law',
    summary: 'Navigating life transitions with balanced discretion and protective counsel. Expert representation for divorce, custody and division in Grayson County.',
    details: [
      'Contested and Uncontested Divorce Actions',
      'Child Custody, Visitation, & Support Agreements',
      'Marital Property & Complex Asset Division',
      'Spousal Maintenance / Alimony Determinations',
      'Mediation & Collaborative Family Solutions',
      'Post-Divorce Modifications & Enforcement Orders'
    ],
    casesText: 'Family matters require both empathy and strong legal boundaries. We represent your family interests fiercely inside and outside Grayson County courtrooms.',
    iconName: 'Users'
  },
  {
    id: 'personal-injury',
    title: 'Personal Injury',
    summary: 'Securing medical costs, lost wages, and maximum restitution after negligent accidents. No-cost consultation and zero fees unless we recover for you.',
    details: [
      'Motor Vehicle & Trucking Collisions',
      'Premises Liability / Slip-and-Fall Incidents',
      'Catastrophic Injury & Long-term Disability Claims',
      'Wrongful Death Representation',
      'Insurance Liability Disputes & Bad Faith Refusals',
      'Pedestrian & Bicycle Injury Claims'
    ],
    casesText: 'If you have been injured by someone else’s negligence, we secure the support you need for complete financial and physical recovery.',
    iconName: 'Scale'
  },
  {
    id: 'civil-litigation',
    title: 'Civil Litigation',
    summary: 'Resolving high-stakes real estate, contract, and general business disagreements. Pragmatic pretrial conflict resolution and seasoned courtroom trial services.',
    details: [
      'Breach of Contract & Enforcement Claims',
      'Deceptive Trade Practices Act (DTPA) Actions',
      'Real Estate Title, Boundary & Purchase Disputes',
      'Partnership Disputes & Business Dissolutions',
      'Construction Defect & Mechanic’s Lien Claims',
      'Debt Scrambles & Creditor/Debtor Rights Actions'
    ],
    casesText: 'We protect your financial, contractual, and real estate assets using aggressive strategies tailored to statutory Texas rules.',
    iconName: 'Briefcase'
  },
  {
    id: 'employment-law',
    title: 'Employment Law',
    summary: 'Standing for fair pay, lawful workplaces, and employee rights. Aggressive representation for wrongful discharge and state labor violations.',
    details: [
      'Wrongful Termination Actions & Claims',
      'Title VII & Texas Labor Code Discrimination Defenses',
      'Wage and Hour / Unpaid Overtime Disputes',
      'Severance Package Negotiations & Covenants',
      'FMLA, ADA & Medical Leave Disagreements',
      'Non-Compete Agreement Enforceability Reviews'
    ],
    casesText: 'We help professionals and employees stand up against illegal employment practices, toxic environments, and withheld compensation.',
    iconName: 'ShieldAlert'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Benjamin Baker handled my divorce and custody proceedings in the Sherman Court with incredible professionalism. He was direct about what to expect, and didn't let the other side play games. Thanks to his aggressive representation, my parental rights were protected.",
    clientName: "Sarah M.",
    location: "Sherman, TX",
    stars: 5,
    date: "April 14, 2026"
  },
  {
    id: 't2',
    quote: "After a severe collision on Highway 75 near Denison, an insurance adjustor tried to push a quick, low settlement on me. Mr. Baker stepped in, took over negotiations immediately, and secured a resolution that fully covered all my medical treatments and lost salary.",
    clientName: "David K.",
    location: "Denison, TX",
    stars: 5,
    date: "May 3, 2026"
  },
  {
    id: 't3',
    quote: "In a complex commercial real estate title issue, our developer company needed immediate guidance. Benjamin analyzed our contract issues rapidly, found several state leverage points, and negotiated a resolution that kept our project perfectly on schedule.",
    clientName: "Robert H.",
    location: "Pottsboro, TX",
    stars: 5,
    date: "March 22, 2026"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'family-court-grayson',
    title: 'Navigating Grayson County Family Courts: A Practical Guide',
    excerpt: 'What Sherman and Denison residents must know before a custody or divorce hearing. Learn local courtroom decorum, document filing requirements, and local expectations.',
    content: [
      'Facing a family law dispute in the 15th, 59th, or 397th District Courts of Grayson County can be an intimidating process. Texas family law statutes are heavily detailed, but Grayson County local rules add a layer of specific local guidelines that directly affect temporary orders and child custody decisions.',
      'One major factor is the Grayson County requirement for mediation before any final, contested custody trial. Seeking a balanced compromise through mediation is almost always preferred by local district judges, and preparing with structured documentation often yields far more control over the final outcome.',
      'We recommend organizing an accurate chronological journal of events, physical and virtual text communications, and explicit financial balance sheets well in advance. Having clean records is crucial when presenting child support arguments or request divisions under Texas community property rules.'
    ],
    date: "May 18, 2026",
    readTime: "4 min read",
    category: "Family Law",
    author: "Benjamin A. Baker"
  },
  {
    id: 'personal-injury-timeline',
    title: 'The Immediate Timeline: What to Do After a Collision in Grayson County',
    excerpt: 'Critical steps within 48 hours to protect your health and retain your legal rights. Understand insurance adjustor tactics and how medical records are evaluated.',
    content: [
      'The seconds following an automobile collision on busy Sherman highways like US-75 or FM-1417 are chaotic. However, the legal actions you initiate during the initial 48 hours play a foundational role in the ultimate valuation of any future personal injury claims.',
      'First and foremost is immediate professional medical assessment, even if you feel no immediate pain. Soft-tissue issues, neck strains, and mild brain concussions frequently do not show sensory symptoms until late the following day. Insurance claims managers will argue that any gap in medical treatment indicates injuries were sustained elsewhere.',
      'Second, avoid providing recorded statements to third-party insurance agents. They are trained to solicit statements that can be used to imply partial liability or minimize your physical pain. Simply direct them to report claims through your attorney, allowing your legal representing counsel to manage legal communications.'
    ],
    date: "April 29, 2026",
    readTime: "5 min read",
    category: "Personal Injury",
    author: "Benjamin A. Baker"
  },
  {
    id: 'civil-breach-contract',
    title: 'Texas Breach of Contract: Seeking Remedy for Commercial Disputes',
    excerpt: 'Essential contract clauses, the four-year Texas statute of limitations, and demonstrating material damages in Sherman business litigation cases.',
    content: [
      'To succeed in a Texas breach of contract lawsuit, a plaintiff must prove four core elements: first, that a legally valid contract existed; second, that the plaintiff executed their obligations; third, that the defendant defaulted on their commitments; and fourth, that the plaintiff suffered real financial damages as a direct result.',
      'Under the Texas Civil Practice and Remedies Code, business entities possess a default four-year statute of limitations to file suit. However, specific commercial contracts may contain valid clauses requiring prior alternate dispute resolution or shortening notice periods.',
      'Our approach to civil litigation in Sherman relies heavily on rapid pretrial analysis. By evaluating the material impact of the breach and locating verifiable financial records early, we often secure strong settlement outcomes without the cost of multi-year, drawn-out court trials.'
    ],
    date: "March 11, 2026",
    readTime: "6 min read",
    category: "Civil Litigation",
    author: "Benjamin A. Baker"
  }
];
