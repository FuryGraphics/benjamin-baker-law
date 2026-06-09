/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, Scale, ShieldCheck, HeartPulse, CheckSquare } from 'lucide-react';
import { RouteType } from '../types';

interface AttorneyIntroProps {
  isFullPage?: boolean;
  setRoute: (route: RouteType) => void;
}

export default function AttorneyIntro({ isFullPage = false, setRoute }: AttorneyIntroProps) {
  const handleContactLink = () => {
    setRoute('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1) Full Subpage View (/attorney)
  if (isFullPage) {
    return (
      <main className="bg-[#FAF8F3] min-h-screen pt-32 pb-24 px-5 sm:px-6 lg:px-8 relative" id="attorney-full-page">
        {/* Subtle decorative gold light */}
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,rgba(0,0,0,0)_75%)] pointer-events-none filter blur-2xl" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-sans text-xs tracking-[6px] text-[#C9A84C] uppercase block mb-3">
              Attorney Profile
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1F1D1A] font-medium tracking-tight">
              Meet Benjamin A. Baker
            </h1>
            <p className="font-sans text-xs tracking-widest text-[#5F5B53] uppercase mt-2">
              FOUNDING ATTORNEY · BENJAMIN A. BAKER P.C.
            </p>
            <div className="w-16 h-[2px] bg-[#C9A84C] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Portrait Placeholders card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/5] bg-[#FFFFFF] border border-[#C9A84C]/30 rounded-sm p-6 flex flex-col justify-between shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08] bg-gradient-to-br from-[#C9A84C] to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.012] pointer-events-none transform -rotate-12 scale-110">
                  <Scale className="w-80 h-80 text-[#C9A84C]" />
                </div>
                
                {/* Thin styled borders */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#C9A84C]/40" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#C9A84C]/40" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#C9A84C]/40" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#C9A84C]/40" />

                <div className="text-center pt-4">
                  <span className="font-sans text-[10px] tracking-[6px] text-[#5F5B53] uppercase block">
                    Benjamin A. Baker
                  </span>
                  <span className="font-serif text-[#C9A84C] text-[11px] block tracking-normal mt-1 italic">
                    "Decades of Dedicated Sherman Court Advocacy"
                  </span>
                </div>

                {/* Centered initials BAB with Refined typography watermark */}
                <div className="flex flex-col items-center justify-center py-6 relative">
                  <span className="text-[120px] font-serif font-light text-[#C9A84C]/15 leading-none select-none">BAB</span>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#C9A84C] mt-2 font-semibold">Portrait Pending</p>
                </div>

                <div className="text-center pb-4 border-t border-black/[0.08] pt-4">
                  <p className="font-sans text-[11px] text-[#9A7A28] tracking-wider uppercase font-semibold">
                    Benjamin A. Baker P.C.
                  </p>
                  <p className="font-sans text-[10px] text-[#5F5B53] tracking-wide mt-1">
                    Licensed State Bar of Texas (#24045431)
                  </p>
                </div>
              </div>

              {/* Quick Credentials Pills */}
              <div className="bg-[#FFFFFF] border border-[rgba(201,168,76,0.12)] p-6 space-y-4">
                <div className="flex items-center space-x-3 text-xs">
                  <ShieldCheck className="w-5 h-5 text-[#C9A84C] shrink-0" />
                  <span className="text-[#1F1D1A] font-medium tracking-wide">Licensed Texas Attorney (Active)</span>
                </div>
                <div className="flex items-center space-x-3 text-xs">
                  <Award className="w-5 h-5 text-[#C9A84C] shrink-0" />
                  <span className="text-[#1F1D1A] font-medium tracking-wide">Trial Lawyers Association Member</span>
                </div>
                <div className="flex items-center space-x-3 text-xs">
                  <Briefcase className="w-5 h-5 text-[#C9A84C] shrink-0" />
                  <span className="text-[#1F1D1A] font-medium tracking-wide">Over 20 Years Active Service</span>
                </div>
              </div>
            </div>

            {/* Right Column: In-depth Biography CV */}
            <div className="lg:col-span-7 space-y-8 text-[#1F1D1A]/90 pr-2">
              <div className="space-y-4">
                <span className="font-sans text-xs text-[#C9A84C] tracking-[4px] uppercase block font-semibold">
                  Founder & Principal Counsel
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#9A7A28] font-medium">
                  Straightforward Advisories, Aggressive Client Representation
                </h2>
              </div>

              <div className="font-sans text-xs sm:text-sm text-[#5F5B53] leading-relaxed space-y-6">
                <p className="text-[#1F1D1A]/80 text-base leading-relaxed">
                  Benjamin A. Baker has built his practice on a simple belief: every client deserves honest advice and fierce representation. Located in the heart of Sherman, Texas, Mr. Baker brings decades of experience to family law, personal injury, civil litigation, and employment matters across Grayson County. He takes time to understand your situation — then fights to protect what matters most to you.
                </p>
                <p>
                  Before establishing Benjamin A. Baker P.C., Mr. Baker served as a lead trial prosecutor and litigation associate, acquiring first-hand expertise in courtroom psychology, judicial evaluations, and trial evidence rules. This seasoned court perspective empowers him to construct strong statutory positions and structure aggressive legal disputes.
                </p>
                <p>
                  Mr. Baker believes that effective representation begins with transparency. He will never conceal risks or build unrealistic expectations. Instead, you will receive straightforward answers and regular reviews throughout your case. When fair mediation is unreachable, you have an experienced courtroom trial litigator ready to protect your interests.
                </p>
              </div>

              {/* Education & Admissions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-black/[0.08]">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-[#C9A84C]">
                    <GraduationCap className="w-5 h-5" />
                    <h3 className="font-serif text-lg font-semibold tracking-wider">Education</h3>
                  </div>
                  <ul className="space-y-3 font-sans text-xs leading-relaxed text-[#5F5B53]">
                    <li>
                      <strong className="text-[#1F1D1A] block">Juris Doctor (J.D.)</strong>
                      South Texas College of Law — Houston, TX
                    </li>
                    <li>
                      <strong className="text-[#1F1D1A] block">Bachelor of Science (B.S.)</strong>
                      Southern Methodist University — Dallas, TX
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-[#C9A84C]">
                    <Scale className="w-5 h-5" />
                    <h3 className="font-serif text-lg font-semibold tracking-wider">Bar Admissions</h3>
                  </div>
                  <ul className="space-y-3 font-sans text-xs leading-relaxed text-[#5F5B53]">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full mt-1.5 shrink-0" />
                      <span>State Bar of Texas, 2004</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full mt-1.5 shrink-0" />
                      <span>U.S. District Court, Eastern District of Texas</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Practice Philosophy Points */}
              <div className="bg-[#FFFFFF] p-8 border border-[rgba(201,168,76,0.18)] space-y-6">
                <h3 className="font-serif text-xl text-[#9A7A28] font-semibold tracking-wide">Core Principles of the Firm</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <span className="font-serif text-[#C9A84C] text-md font-medium block">Straightforward Guidance</span>
                    <p className="font-sans text-xs text-[#5F5B53] leading-relaxed">
                      We outline all legal fees and court risks clearly during your initial review. No hidden retainers or confusing legal jargon.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="font-serif text-[#C9A84C] text-md font-medium block">Aggressive Court Advocacy</span>
                    <p className="font-sans text-xs text-[#5F5B53] leading-relaxed">
                      We prepare every case as though it is headed for trial, putting our clients in an optimal position during any settlement meetings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={handleContactLink}
                  className="bg-[#C9A84C] hover:bg-[#9A7A28] text-[#0C0C0C] font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 transition-colors cursor-pointer"
                  id="attorney-schedule-consult-btn"
                >
                  Schedule A Direct Discussion With Mr. Baker
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // 2) Homepage Section Overview
  return (
    <section 
      className="bg-[#FFFFFF] py-24 px-5 sm:px-6 lg:px-8 border-b border-[rgba(201,168,76,0.12)] relative"
      aria-labelledby="attorney-intro-title"
      id="meet-attorney-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Placement style box */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start" id="meet-attorney-left">
            <div className="relative w-full max-w-sm aspect-[4/5] bg-[#FAF8F3] border border-[#C9A84C]/25 rounded-sm p-6 flex flex-col justify-between shadow-2xl overflow-hidden animate-pulse-slow">
              <div className="absolute inset-0 opacity-[0.06] bg-gradient-to-br from-[#C9A84C] to-transparent pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.012] pointer-events-none transform -rotate-12 scale-110">
                <Scale className="w-72 h-72 text-[#C9A84C]" />
              </div>
              
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#C9A84C]/30" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#C9A84C]/30" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#C9A84C]/30" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#C9A84C]/30" />

              <div className="text-center pt-4">
                <span className="font-sans text-[10px] tracking-[6px] text-[#5F5B53] uppercase block">
                  Benjamin A. Baker
                </span>
                <span className="font-serif text-[#C9A84C] text-[10px] block tracking-wide mt-1 uppercase">
                  ESTABLISHED PRACTICE
                </span>
              </div>

              {/* Centered initials BAB with Refined typography watermark */}
              <div className="flex flex-col items-center justify-center py-6 relative">
                <span className="text-[120px] font-serif font-light text-[#C9A84C]/15 leading-none select-none">BAB</span>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#C9A84C] mt-2 font-semibold">Portrait Pending</p>
              </div>

              <div className="text-center pb-4 border-t border-black/[0.08] pt-4">
                <p className="font-sans text-[11px] text-[#1F1D1A]/90 tracking-wide font-medium">
                  Grayson County Courthouse Advocate
                </p>
                <p className="font-sans text-[9px] text-[#5F5B53] tracking-wide mt-1">
                  OFFICE LOCATED IN SHERMAN, TX
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Introductory Summary */}
          <div className="lg:col-span-7 space-y-8" id="meet-attorney-right">
            <div className="space-y-4">
              <span className="font-sans text-xs tracking-[6px] text-[#5F5B53] uppercase block font-semibold">
                Meet Your Attorney
              </span>
              <h2 id="attorney-intro-title" className="font-serif text-3xl sm:text-4xl text-[#1F1D1A] font-medium leading-tight">
                Benjamin A. Baker — Straightforward Counsel, Aggressive Advocacy.
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#5F5B53] leading-relaxed">
              Benjamin A. Baker has built his practice on a simple belief: every client deserves honest advice and fierce representation. Located in the heart of Sherman, Texas, Mr. Baker brings decades of experience to family law, personal injury, civil litigation, and employment matters across Grayson County. He takes time to understand your situation — then fights to protect what matters most to you.
            </p>

            {/* Stat Pills */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="border border-[#C9A84C]/30 bg-black/[0.02] text-[#9A7A28] font-sans text-xs tracking-wider font-semibold uppercase py-2.5 px-5 rounded-full flex items-center space-x-2">
                <CheckSquare className="w-4 h-4 text-[#C9A84C]" />
                <span>Licensed Texas Attorney</span>
              </div>
              <div className="border border-[#C9A84C]/30 bg-black/[0.02] text-[#9A7A28] font-sans text-xs tracking-wider font-semibold uppercase py-2.5 px-5 rounded-full flex items-center space-x-2">
                <CheckSquare className="w-4 h-4 text-[#C9A84C]" />
                <span>Serving Grayson County</span>
              </div>
            </div>

            {/* Learn More link */}
            <div className="pt-4">
              <button
                onClick={() => {
                  setRoute('attorney');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group inline-flex items-center space-x-2 text-[#C9A84C] hover:text-[#9A7A28] font-sans text-xs font-bold uppercase tracking-widest cursor-pointer focus:outline-none"
                id="homepage-attorney-learn-more-btn"
              >
                <span>Learn More About Benjamin</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
