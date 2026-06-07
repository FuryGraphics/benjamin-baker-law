/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, ArrowRight } from 'lucide-react';
import { RouteType } from '../types';

interface CtaBannerProps {
  setRoute: (route: RouteType) => void;
}

export default function CtaBanner({ setRoute }: CtaBannerProps) {
  const handleMessageClick = () => {
    setRoute('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      className="relative bg-[#0C0C0C] py-24 px-5 sm:px-6 lg:px-8 border-b border-[rgba(201,168,76,0.18)] text-center overflow-hidden" 
      aria-labelledby="cta-banner-title"
      id="cta-banner-section"
    >
      {/* Subtle background glow mimicking the hero page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,rgba(0,0,0,0)_70%)] blur-3xl animate-shimmer" />
      </div>

      {/* SVG Grain Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        {/* Main Title heading (Cormorant Serif Italic) */}
        <h2 id="cta-banner-title" className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-[#E8D08A] font-light leading-snug">
          Ready to Protect What Matters?
        </h2>

        {/* Muted description text */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-[#888880] tracking-wider max-w-xl mx-auto leading-relaxed">
          Contact Benjamin A. Baker today for a free consultation. We serve clients throughout Grayson County and North Texas. Let’s evaluate your situation.
        </p>

        {/* Dynamic Buttons */}
        <div className="flex flex-col items-center justify-center space-y-4 pt-4">
          <a
            href="tel:9032717824"
            className="group inline-flex items-center justify-center space-x-3 bg-[#C9A84C] text-[#0C0C0C] font-sans text-xs sm:text-sm font-bold tracking-[4px] uppercase py-5 px-10 hover:bg-[#E8D08A] active:bg-[#C9A84C] transition-all duration-300 shadow-xl shadow-black/80"
            id="cta-banner-call-btn"
          >
            <Phone className="w-5 h-5 text-[#0C0C0C] fill-current" />
            <span>Call (903) 271-7824</span>
          </a>

          <button
            onClick={handleMessageClick}
            className="group flex items-center space-x-2 text-[#C9A84C] hover:text-[#E8D08A] text-xs font-semibold uppercase tracking-widest transition-colors py-2 cursor-pointer focus:outline-none"
            id="cta-banner-message-link"
          >
            <span>Or send a confidential message</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
