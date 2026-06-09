/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { RouteType } from '../types';

interface HeroProps {
  setRoute: (route: RouteType) => void;
}

export default function Hero({ setRoute }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15 }
    }
  };

  return (
    <section 
      className="relative min-h-screen bg-[#FAF8F3] flex flex-col justify-center overflow-hidden pt-28 pb-16 px-5 sm:px-6 lg:px-8 border-b border-[rgba(201,168,76,0.12)]"
      aria-label="Welcome and firm summary"
      id="hero-section"
    >
      {/* 1. Subtle gold/radial gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,rgba(0,0,0,0)_70%)] blur-2xl animate-shimmer" />
        <div className="absolute bottom-[15%] right-[5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,rgba(0,0,0,0)_75%)] blur-3xl" />
      </div>

      {/* 2. SVG Grain overlay (3% opacity) */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Hero Body Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex-grow flex flex-col justify-center">
        <motion.div
          className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          id="hero-content"
        >
            <div className="space-y-4 flex flex-col items-center">
              {/* Sherman, Texas Attorney SEO H1 (hidden visually or styled visually elegantly) */}
              <h1 className="sr-only">Sherman, Texas Attorney — Family Law, Personal Injury & Civil Litigation</h1>
              
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 border border-[#C9A84C]/25 bg-[#FFFFFF]/85 backdrop-blur-sm py-1.5 px-4 rounded-full text-[10px] font-sans tracking-[4px] uppercase text-[#9A7A28]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                <span>Texas Legal Counsel</span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="font-serif leading-[1.05] tracking-tight">
                <span className="block italic text-[#C9A84C] text-[58px] sm:text-[72px] lg:text-[84px] font-light">
                  Justice Starts
                </span>
                <span className="block text-[#1F1D1A] text-[48px] sm:text-[62px] lg:text-[72px] font-medium tracking-wide mt-1">
                  With One Call.
                </span>
              </motion.h2>
            </div>

            <motion.p variants={itemVariants} className="font-sans text-[#5F5B53] text-base md:text-lg max-w-xl leading-relaxed">
              Serving clients across Grayson County with straightforward counsel and aggressive representation. Family Law, Personal Injury, and Civil dispute resolutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 pt-2 justify-center">
              <button
                onClick={() => {
                  setRoute('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group flex items-center justify-center space-x-2 bg-[#C9A84C] text-[#0C0C0C] font-sans text-[12px] font-bold tracking-widest uppercase py-4 px-8 hover:bg-[#9A7A28] transition-all duration-300 shadow-xl shadow-black/[0.08] cursor-pointer focus:outline-none"
                id="hero-schedule-btn"
              >
                <span>Schedule a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  setRoute('practice-areas');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group flex items-center justify-center space-x-2 border border-[#C9A84C]/45 hover:border-[#C9A84C] text-[#C9A84C] hover:text-[#9A7A28] font-sans text-[12px] font-bold tracking-widest uppercase py-4 px-8 transition-all duration-300 cursor-pointer focus:outline-none"
                id="hero-explore-btn"
              >
                <span>Explore Practice Areas</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          </motion.div>
      </div>

      {/* Hero Bottom: Location bar & separator lines */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-full"
          id="hero-bottom-bar"
        >
          <hr className="border-[#C9A84C]/20 w-full mb-6" />
          <div className="flex flex-wrap items-center justify-between gap-y-4 px-2">
            <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[4px] text-[#5F5B53] uppercase">
              REPRESENTATION ACROSS GRAYSON COUNTY
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[#1F1D1A]/80 font-sans text-xs tracking-wider uppercase">
              <span className="hover:text-[#C9A84C] transition-colors">Sherman</span>
              <span className="text-[#C9A84C]/50">•</span>
              <span className="hover:text-[#C9A84C] transition-colors">Denison</span>
              <span className="text-[#C9A84C]/50">•</span>
              <span className="hover:text-[#C9A84C] transition-colors">Pottsboro</span>
              <span className="text-[#C9A84C]/50">•</span>
              <span className="hover:text-[#C9A84C] transition-colors">Whitesboro</span>
              <span className="text-[#C9A84C]/50">•</span>
              <span className="hover:text-[#C9A84C] transition-colors">Grayson County, TX</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
