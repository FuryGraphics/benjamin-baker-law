/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Landmark, ArrowRight, ShieldCheck, Home } from 'lucide-react';
import { RouteType } from '../types';

interface HtmlSitemapProps {
  setRoute: (route: RouteType) => void;
}

export default function HtmlSitemap({ setRoute }: HtmlSitemapProps) {
  useEffect(() => {
    document.title = 'HTML Sitemap & Search Index | Benjamin A. Baker P.C.';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Comprehensive HTML sitemap for Benjamin A. Baker P.C. Find quick links to family law, personal injury, civil litigation, and North Texas city landing pages.');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToRoute = (route: RouteType) => {
    setRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = `#${route}`;
  };

  const coreLinks: { name: string; route: RouteType; desc: string }[] = [
    { name: 'Law Firm Homepage', route: 'home', desc: 'Main entry point, quick bio, credentials and general summary.' },
    { name: 'Practice Specialties Hub', route: 'practice-areas', desc: 'Comprehensive guide to our key areas of Texan legal services.' },
    { name: 'Attorney Biography', route: 'attorney', desc: 'Meet Managing Counselor Benjamin A. Baker, profile and licenses.' },
    { name: 'Client Reviews & Successes', route: 'testimonials', desc: 'Factual feedback and client reviews regarding Sherman proceedings.' },
    { name: 'Legal Publication Journal', route: 'blog', desc: 'Information articles, Texas statutes guides and courthouse news.' },
    { name: 'Intake Confidential Contact', route: 'contact', desc: 'Secure evaluation request form steps from District Court.' }
  ];

  const practiceLinks: { name: string; route: RouteType }[] = [
    { name: 'Family Law', route: 'practice-areas/family-law' },
    { name: 'Personal Injury', route: 'practice-areas/personal-injury' },
    { name: 'Civil Litigation', route: 'practice-areas/civil-litigation' },
    { name: 'Employment Law', route: 'practice-areas/employment-law' }
  ];

  const cityLinks: { name: string; route: RouteType }[] = [
    { name: 'Sherman, TX (Headquarters)', route: 'sherman-tx' },
    { name: 'Denison, TX', route: 'denison-tx' },
    { name: 'Pottsboro, TX', route: 'pottsboro-tx' },
    { name: 'Whitesboro, TX', route: 'whitesboro-tx' },
    { name: 'Whitewright, TX', route: 'whitewright-tx' },
    { name: 'Collinsville, TX', route: 'collinsville-tx' },
    { name: 'Grayson County, TX (All Coverages)', route: 'grayson-county-tx' }
  ];

  const legalLinks: { name: string; route: RouteType }[] = [
    { name: 'Privacy Charter & Data Commitments', route: 'privacy' },
    { name: 'Mandatory Attorney Disclaimer', route: 'disclaimer' },
    { name: 'HTML Sitemap Domain Index', route: 'html-sitemap' }
  ];

  return (
    <main className="bg-[#FAF8F3] min-h-screen text-[#1F1D1A] pt-32 pb-24 px-5 sm:px-6 lg:px-8 relative" id="html-sitemap-view">
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-[0.03]" />
      
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs text-[#5F5B53] tracking-widest uppercase font-mono py-2 bg-black/10 border-b border-black/[0.08] mb-8">
          <button onClick={() => navigateToRoute('home')} className="hover:text-[#C9A84C] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>HOME</span>
          </button>
          <span>/</span>
          <span className="text-[#9A7A28]">SITEMAP</span>
        </nav>

        {/* Hero header */}
        <div className="space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl text-[#9A7A28] font-medium tracking-tight">
            Benjamin A. Baker P.C. Directory Sitemap
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#5F5B53] uppercase tracking-widest block border-b border-black/[0.08] pb-4">
            COMPREHENSIVE WEB INDEX • MAY 23, 2026 • ATTORNEY & COUNSELOR
          </p>
        </div>

        {/* Master Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Section 1: Core Institutional Pages */}
          <div className="space-y-5 bg-[#FFFFFF]/40 border border-black/[0.07] p-6 sm:p-8 rounded-sm">
            <h2 className="font-serif text-xl text-[#9A7A28] font-semibold tracking-wide border-b border-black/[0.08] pb-2">
              1. Institutional Navigation
            </h2>
            <div className="space-y-4">
              {coreLinks.map((link, idx) => (
                <div key={idx} className="group">
                  <button 
                    onClick={() => navigateToRoute(link.route)}
                    className="flex items-center space-x-2 text-[#1F1D1A] hover:text-[#C9A84C] text-sm font-semibold transition-colors focus:outline-none"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <p className="font-sans text-xs text-[#5F5B53] mt-1 pr-6 leading-relaxed">
                    {link.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Deep Practice Areas */}
          <div className="space-y-5 bg-[#FFFFFF]/40 border border-black/[0.07] p-6 sm:p-8 rounded-sm flex flex-col justify-between">
            <div className="space-y-5">
              <h2 className="font-serif text-xl text-[#9A7A28] font-semibold tracking-wide border-b border-black/[0.08] pb-2">
                2. Specialized Practice Areas Page Index
              </h2>
              <ul className="space-y-3 font-sans text-sm">
                {practiceLinks.map((link, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => navigateToRoute(link.route)}
                      className="text-[#5F5B53] hover:text-[#C9A84C] font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      • {link.name} Attorney
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4: Compliance & Disclosures (nested inside for balance) */}
            <div className="space-y-4 pt-6 border-t border-black/[0.08] mt-6">
              <h2 className="font-serif text-base text-[#9A7A28] font-semibold tracking-wide">
                4. Legal Mandates & Compliances
              </h2>
              <ul className="space-y-2.5 font-sans text-xs">
                {legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => navigateToRoute(link.route)}
                      className="text-[#5F5B53]/80 hover:text-[#C9A84C] transition-colors"
                    >
                      › {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: City Location Signal Pages - Full Width Column span */}
          <div className="md:col-span-2 bg-[#FFFFFF] border border-[#C9A84C]/15 p-6 sm:p-8 rounded-sm space-y-5">
            <h2 className="font-serif text-xl text-[#9A7A28] font-semibold tracking-wide border-b border-black/[0.08] pb-2">
              3. Grayson County Regional Landing Pages Directories
            </h2>
            <p className="font-sans text-xs text-[#5F5B53] leading-relaxed">
              We provide straightforward legal counsel and aggressive representation inside local municipal courts and county dockets in the following locations across North Texas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 font-mono text-xs">
              {cityLinks.map((link, idx) => (
                <button 
                  key={idx}
                  onClick={() => navigateToRoute(link.route)}
                  className="w-full text-left p-3 bg-[#FAF8F3] border border-black/[0.06] hover:border-[#C9A84C]/35 text-[#5F5B53] hover:text-[#9A7A28] transition-all flex items-center justify-between group"
                >
                  <span className="font-sans text-xs">{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Global bottom block */}
        <section className="bg-gradient-to-r from-[#F0E6CC] to-[#FAF3E0] border-l-2 border-[#C9A84C] p-6 text-xs text-[#5F5B53] leading-relaxed font-sans shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <strong className="text-[#9A7A28] block font-serif text-sm tracking-wide">Texas Legal Representation Directories</strong>
            <p>Benjamin A. Baker P.C. serves Sherman, Denison, Pottsboro and outer regions step from Courthouses.</p>
          </div>
          <a 
            href="tel:9032717824"
            className="shrink-0 bg-[#C9A84C] text-[#0C0C0C] font-sans text-xs font-bold py-3 px-6 tracking-widest uppercase hover:bg-[#9A7A28] transition-colors inline-flex items-center gap-1.5"
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>Consult Free Now</span>
          </a>
        </section>
      </div>
    </main>
  );
}
