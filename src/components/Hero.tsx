/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Phone, Scale } from 'lucide-react';
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

  const rightCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 50, damping: 18, delay: 0.5 }
    }
  };

  return (
    <section 
      className="relative min-h-screen bg-[#0C0C0C] flex flex-col justify-center overflow-hidden pt-28 pb-16 px-5 sm:px-6 lg:px-8 border-b border-[rgba(201,168,76,0.12)]"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Headline & Description */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            id="hero-content-left"
          >
            <div className="space-y-4">
              {/* Sherman, Texas Attorney SEO H1 (hidden visually or styled visually elegantly) */}
              <h1 className="sr-only">Sherman, Texas Attorney — Family Law, Personal Injury & Civil Litigation</h1>
              
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 border border-[#C9A84C]/25 bg-[#141414]/85 backdrop-blur-sm py-1.5 px-4 rounded-full text-[10px] font-sans tracking-[4px] uppercase text-[#E8D08A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                <span>Texas Legal Counsel</span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="font-serif leading-[1.05] tracking-tight">
                <span className="block italic text-[#C9A84C] text-[58px] sm:text-[72px] lg:text-[84px] font-light">
                  Justice Starts
                </span>
                <span className="block text-[#F2EDE4] text-[48px] sm:text-[62px] lg:text-[72px] font-medium tracking-wide mt-1">
                  With One Call.
                </span>
              </motion.h2>
            </div>

            <motion.p variants={itemVariants} className="font-sans text-[#888880] text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Serving clients across Grayson County with straightforward counsel and aggressive representation. Family Law, Personal Injury, and Civil dispute resolutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 pt-2">
              <button
                onClick={() => {
                  setRoute('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group flex items-center justify-center space-x-2 bg-[#C9A84C] text-[#0C0C0C] font-sans text-[12px] font-bold tracking-widest uppercase py-4 px-8 hover:bg-[#E8D08A] transition-all duration-300 shadow-xl shadow-black/40 cursor-pointer focus:outline-none"
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
                className="group flex items-center justify-center space-x-2 border border-[#C9A84C]/45 hover:border-[#C9A84C] text-[#C9A84C] hover:text-[#E8D08A] font-sans text-[12px] font-bold tracking-widest uppercase py-4 px-8 transition-all duration-300 cursor-pointer focus:outline-none"
                id="hero-explore-btn"
              >
                <span>Explore Practice Areas</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Premium custom tall placeholder card */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            variants={rightCardVariants}
            initial="hidden"
            animate="visible"
            id="hero-content-right"
          >
            <div className="relative w-full max-w-md aspect-[4/5] bg-[#141414] border border-[#C9A84C]/30 rounded-sm p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
              {/* Refined gradient overlay */}
              <div className="absolute inset-0 opacity-[0.08] bg-gradient-to-br from-[#C9A84C] to-transparent pointer-events-none" />
              
              {/* Background scale wireframe watermarked */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] pointer-events-none transform -rotate-12 scale-125">
                <Scale className="w-96 h-96 text-white" />
              </div>

              {/* Top Corners Accent */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#C9A84C]/40" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#C9A84C]/40" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#C9A84C]/40" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#C9A84C]/40" />

              {/* Card Header label */}
              <div className="text-center pt-4">
                <span className="font-sans text-[10px] tracking-[6px] text-[#888880] uppercase block">
                  Sherman, Texas Office
                </span>
                <span className="font-serif text-[#C9A84C] text-[11px] block tracking-widest mt-1 uppercase">
                  ESTABLISHED 2004
                </span>
              </div>

              {/* Centered initials BAB with Refined typography watermark */}
              <div className="flex flex-col items-center justify-center py-6 relative">
                <span className="text-[120px] font-serif font-light text-[#C9A84C]/15 leading-none select-none">BAB</span>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#C9A84C] mt-2 font-semibold">Portrait Pending</p>
              </div>

              {/* Bottom Card text info */}
              <div className="text-center pb-4 border-t border-white/[0.04] pt-4">
                <h3 className="font-serif text-[#F2EDE4] text-xl tracking-wider font-semibold">
                  Benjamin A. Baker
                </h3>
                <p className="font-sans text-[10px] text-[#888880] tracking-widest uppercase mt-1">
                  Managing Attorney & Counselor
                </p>
                <div className="mt-4 inline-flex items-center space-x-2 text-[#C9A84C] hover:text-[#E8D08A] text-xs font-semibold font-sans tracking-wide cursor-pointer" onClick={() => setRoute('attorney')}>
                  <span>View Professional Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
            <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[4px] text-[#888880] uppercase">
              REPRESENTATION ACROSS GRAYSON COUNTY
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[#F2EDE4]/80 font-sans text-xs tracking-wider uppercase">
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
