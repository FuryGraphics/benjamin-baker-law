/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Scale, Briefcase, ShieldAlert, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRACTICE_AREAS } from '../data';
import { PracticeArea, RouteType } from '../types';

interface PracticeAreasProps {
  isFullPage?: boolean;
  setRoute: (route: RouteType) => void;
}

export default function PracticeAreas({ isFullPage = false, setRoute }: PracticeAreasProps) {
  const [activeTab, setActiveTab] = useState<string>(PRACTICE_AREAS[0].id);

  // Helper to map icon name strings to actual Lucide component instances
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className={className} />;
      case 'Scale':
        return <Scale className={className} />;
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'ShieldAlert':
        return <ShieldAlert className={className} />;
      default:
        return <Scale className={className} />;
    }
  };

  const handleLearnMore = (id: string) => {
    const detailRoute = `practice-areas/${id}` as RouteType;
    setRoute(detailRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = `#${detailRoute}`;
  };

  // 1) Full Page Layout
  if (isFullPage) {
    const activeArea = PRACTICE_AREAS.find(p => p.id === activeTab) || PRACTICE_AREAS[0];

    return (
      <main className="bg-[#0C0C0C] min-h-screen pt-32 pb-24 px-5 sm:px-6 lg:px-8 relative" id="practice-areas-page">
        {/* Subtle decorative lights */}
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none filter blur-3xl" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-sans text-xs tracking-[6px] text-[#C9A84C] uppercase block mb-3">
              Comprehensive Legal Services
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F2EDE4] font-medium tracking-tight">
              Grayson County Practice Areas
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#888880] tracking-widest uppercase mt-4">
              Sherman · Denison · Pottsboro · Whitesboro · Grayson County, TX
            </p>
            <div className="w-16 h-[2px] bg-[#C9A84C] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Sidebar selection tabs */}
            <div className="lg:col-span-4 space-y-3" id="practice-areas-sidebar">
              <span className="font-sans text-[10px] tracking-[4px] text-[#888880] uppercase block mb-3 font-semibold px-4">
                SELECT A PRACTICE SPECIALTY
              </span>
              {PRACTICE_AREAS.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className={`w-full text-left p-5 transition-all duration-300 flex items-center justify-between border ${
                    activeTab === area.id
                      ? 'bg-[#141414] border-[#C9A84C] text-[#E8D08A] shadow-lg shadow-[#000]/40'
                      : 'bg-transparent border-[rgba(201,168,76,0.12)] text-[#F2EDE4]/70 hover:bg-[#141414]/40 hover:text-[#F2EDE4]'
                  }`}
                  id={`tab-btn-${area.id}`}
                >
                  <div className="flex items-center space-x-4">
                    {renderIcon(area.iconName, `w-5 h-5 ${activeTab === area.id ? 'text-[#C9A84C]' : 'text-[#888880]'}`)}
                    <span className="font-serif text-lg tracking-wider font-medium">{area.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeTab === area.id ? 'translate-x-1 text-[#C9A84C]' : 'text-[#888880]/50'}`} />
                </button>
              ))}

              <div className="bg-[#141414]/60 border border-[rgba(201,168,76,0.12)] p-6 mt-8 space-y-4 text-center rounded-sm">
                <span className="font-serif text-[#C9A84C] text-lg block tracking-wide font-medium">Have an Urgent Legal Need?</span>
                <p className="font-sans text-xs text-[#888880] leading-relaxed">
                  Benjamin A. Baker provides immediate directly responsive legal reviews across Sherman, Texas.
                </p>
                <button 
                  onClick={() => setRoute('contact')}
                  className="w-full bg-[#C9A84C] text-[#0C0C0C] font-sans text-xs font-bold tracking-widest uppercase py-3 hover:bg-[#E8D08A] active:bg-[#C9A84C] transition-colors cursor-pointer"
                  id="sidebar-call-box-btn"
                >
                  Request Consultation
                </button>
              </div>
            </div>

            {/* Depth analysis display board */}
            <div className="lg:col-span-8 bg-[#141414] border border-[rgba(201,168,76,0.18)] p-8 lg:p-12 shadow-2xl relative" id="practice-depth-display-board">
              <div className="absolute top-4 right-4 text-[rgba(201,168,76,0.05)] font-serif font-black text-9xl pointer-events-none select-none">
                BAB
              </div>

              <div className="flex items-center space-x-4 border-b border-white/[0.04] pb-6 mb-8">
                <div className="border border-[#C9A84C]/40 p-3 bg-black/30 rounded-full">
                  {renderIcon(activeArea.iconName, "w-8 h-8 text-[#C9A84C]")}
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#E8D08A] font-semibold tracking-wide">
                    {activeArea.title} Representation
                  </h2>
                  <p className="font-sans text-[11px] tracking-widest text-[#888880] uppercase mt-1">
                    Benjamin A. Baker P.C. · Sherman, TX
                  </p>
                </div>
              </div>

              <p className="font-serif italic text-xl text-[#F2EDE4]/90 leading-relaxed mb-8 border-l-2 border-[#C9A84C] pl-6">
                "{activeArea.summary}"
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-sans text-xs tracking-[3px] text-[#C9A84C] uppercase mb-4 font-semibold">
                    OUR CORE SPECIALTIES IN {activeArea.title.toUpperCase()}:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5" id="specialties-subgrid">
                    {activeArea.details.map((detail, count) => (
                      <div key={count} className="flex items-start space-x-3 bg-black/15 p-3.5 border border-white/[0.03] rounded-sm hover:border-[#C9A84C]/25 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                        <span className="font-sans text-xs text-[#F2EDE4]/90 leading-normal font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/[0.04] pt-6 mt-8">
                  <h4 className="font-serif text-[#E8D08A] text-lg font-medium mb-3">Courtroom Philosophy</h4>
                  <p className="font-sans text-xs text-[#888880] leading-relaxed">
                    {activeArea.casesText} At BABakerPC.com, we avoid unnecessary litigation billing by investigating leverage points or contract wording early. When settlements are unfavorable, we enter Texas courtrooms fully prepared to initiate aggressive trial strategies to defend our clients.
                  </p>
                </div>

                <div className="bg-[#0C0C0C] p-6 border border-[rgba(201,168,76,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                  <div className="text-center sm:text-left">
                    <span className="font-sans text-[10px] tracking-[4px] text-[#888880] uppercase block">
                      DEEP CASES DATA & FAQS
                    </span>
                    <span className="font-serif text-base text-[#C9A84C] block mt-1 font-semibold">
                      Open Dedicated {activeArea.title} Search Directory Page
                    </span>
                  </div>
                  <button
                    onClick={() => handleLearnMore(activeArea.id)}
                    className="border border-[#C9A84C]/50 hover:bg-[#C9A84C] hover:text-[#0C0C0C] text-[#C9A84C] font-sans text-xs font-bold tracking-widest uppercase py-3 px-6 transition-all duration-300 shadow-md cursor-pointer"
                    id="depth-directory-page-btn"
                  >
                    Open Directory Page
                  </button>
                </div>

                <div className="bg-[#0C0C0C] p-6 border border-[rgba(201,168,76,0.18)] flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                  <div className="text-center sm:text-left">
                    <span className="font-sans text-[10px] tracking-[4px] text-[#888880] uppercase block">
                      SCHEDULE A TEST CASE REVIEW
                    </span>
                    <span className="font-serif text-base text-[#F2EDE4] block mt-1">
                      Let us evaluate your legal objectives today.
                    </span>
                  </div>
                  <button
                    onClick={() => setRoute('contact')}
                    className="bg-[#C9A84C] hover:bg-[#E8D08A] text-[#0C0C0C] font-sans text-xs font-bold tracking-widest uppercase py-3 px-6 transition-colors shadow-md shadow-black"
                    id="depth-schedule-btn"
                  >
                    Contact Attorney
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // 2) Homepage Section Grid
  return (
    <section 
      className="bg-[#0C0C0C] py-24 px-5 sm:px-6 lg:px-8 border-b border-[rgba(201,168,76,0.1)] relative"
      aria-labelledby="practice-areas-title"
      id="practice-areas-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="font-sans text-xs tracking-[6px] text-[#888880] uppercase block mb-3 font-semibold">
            Services
          </span>
          <h2 id="practice-areas-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F2EDE4] font-medium leading-tight relative pb-6">
            Dedicated Representation Across Multiple Practice Areas
            <span className="absolute bottom-0 left-0 w-24 h-[2px] bg-[#C9A84C]" />
          </h2>
        </div>

        {/* 2x2 Desktop Grid, 1col Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="practice-cards-grid">
          {PRACTICE_AREAS.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#141414] border border-[rgba(201,168,76,0.15)] gold-glow p-8 flex flex-col justify-between group rounded-sm"
              id={`practice-card-${area.id}`}
            >
              <div>
                {/* Gold Outline Icon (32px) */}
                <div className="mb-6 inline-block p-3 border border-[rgba(201,168,76,0.22)] bg-black/20 rounded-sm">
                  {renderIcon(area.iconName, "w-8 h-8 text-[#C9A84C]")}
                </div>
                
                {/* Practice Name */}
                <h3 className="font-serif text-[#E8D08A] text-xl sm:text-2xl font-semibold tracking-wide mb-3">
                  {area.title}
                </h3>
                
                {/* 2-sentence Summary */}
                <p className="font-sans text-xs sm:text-sm text-[#888880] leading-relaxed mb-6 group-hover:text-[#F2EDE4]/80 transition-colors">
                  {area.summary}
                </p>
              </div>

              {/* Learn More link */}
              <button
                onClick={() => handleLearnMore(area.id)}
                className="inline-flex items-center space-x-2 text-[#C9A84C] hover:text-[#E8D08A] text-xs font-semibold font-sans uppercase tracking-widest pt-2 cursor-pointer focus:outline-none"
                id={`practice-card-btn-${area.id}`}
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
