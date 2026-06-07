/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { RouteType } from '../types';

interface TestimonialsProps {
  isFullPage?: boolean;
}

export default function Testimonials({ isFullPage = false }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const renderStars = (starsCount: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < starsCount ? 'text-[#C9A84C] fill-[#C9A84C]' : 'text-[#888880]/30'}`} 
      />
    ));
  };

  return (
    <section 
      className={`bg-[#141414] py-24 px-5 sm:px-6 lg:px-8 border-b border-[rgba(201,168,76,0.12)] relative ${isFullPage ? 'min-h-screen pt-32' : ''}`}
      aria-labelledby="testimonials-title"
      id="testimonials-section"
    >
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[6px] text-[#A8A8A0] uppercase block mb-3 font-semibold">
            Testimonials
          </span>
          <h2 id="testimonials-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F2EDE4] font-medium tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-16 h-[2px] bg-[#C9A84C] mx-auto mt-6" />
        </div>

        {/* Desktop View: 3 Columns side-by-side */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16" id="desktop-testimonials">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.6, type: 'spring', stiffness: 45 }}
              className="bg-[#0C0C0C] border border-[rgba(201,168,76,0.15)] p-8 flex flex-col justify-between rounded-sm shadow-xl hover:border-[#C9A84C]/40 transition-colors"
              id={`desktop-testimonial-${testimonial.id}`}
            >
              <div className="space-y-6">
                {/* Gold Stars */}
                <div className="flex space-x-1">{renderStars(testimonial.stars)}</div>
                
                {/* Quote */}
                <p className="font-serif italic text-base text-[#F2EDE4]/90 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-8 pt-4 border-t border-white/[0.03] flex items-center justify-between">
                <div>
                  <span className="font-sans text-xs font-semibold text-[#E8D08A] uppercase tracking-wider block">
                    {testimonial.clientName}
                  </span>
                  <span className="font-sans text-[10px] text-[#888880] tracking-wide block mt-0.5">
                    Verified Client • {testimonial.location}
                  </span>
                </div>
                <span className="font-sans text-[9px] text-[#C9A84C] tracking-wide bg-[#C9A84C]/10 border border-[#C9A84C]/25 py-0.5 px-2 rounded-full uppercase">
                  {testimonial.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View with Carousel Slider */}
        <div className="block md:hidden relative max-w-lg mx-auto mb-16" id="mobile-testimonials-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0C0C0C] border border-[rgba(201,168,76,0.18)] p-6 sm:p-8 flex flex-col justify-between rounded-sm shadow-xl min-h-[350px]"
              id={`mobile-testimonial-${TESTIMONIALS[activeIndex].id}`}
            >
              <div className="space-y-4">
                {/* Gold Stars */}
                <div className="flex space-x-1">{renderStars(TESTIMONIALS[activeIndex].stars)}</div>
                
                {/* Quote */}
                <p className="font-serif italic text-sm sm:text-base text-[#F2EDE4]/90 leading-normal">
                  "{TESTIMONIALS[activeIndex].quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-8 pt-4 border-t border-white/[0.03] flex items-center justify-between">
                <div>
                  <span className="font-sans text-xs font-semibold text-[#E8D08A] uppercase block">
                    {TESTIMONIALS[activeIndex].clientName}
                  </span>
                  <span className="font-sans text-[10px] text-[#888880] block mt-0.5">
                    {TESTIMONIALS[activeIndex].location}
                  </span>
                </div>
                <span className="font-sans text-[9px] text-[#888880] block">
                  {TESTIMONIALS[activeIndex].date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Buttons Controls */}
          <div className="flex justify-center items-center space-x-6 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 border border-[rgba(201,168,76,0.22)] rounded-full text-[#C9A84C] hover:bg-[#C9A84C]/10 active:bg-[#C9A84C]/20 transition-colors"
              aria-label="Previous review"
              id="slider-prev-btn"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'bg-[#C9A84C] w-4' : 'bg-[#888880]/30'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  id={`slider-dot-${i}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 border border-[rgba(201,168,76,0.22)] rounded-full text-[#C9A84C] hover:bg-[#C9A84C]/10 active:bg-[#C9A84C]/20 transition-colors"
              aria-label="Next review"
              id="slider-next-btn"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Google Reviews Badge Placeholder */}
        <div className="flex justify-center" id="google-reviews-verification-badge">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 border border-[#C9A84C]/20 bg-[#0C0C0C]/80 px-6 py-4 rounded-sm shadow-md">
            <div className="flex items-center space-x-1.5">
              <span className="text-[#F2EDE4] font-bold text-xs font-sans tracking-wide">Google</span>
              <span className="text-[#C9A84C] font-semibold text-xs font-sans">Rating</span>
            </div>
            <div className="hidden sm:block w-[1px] h-4 bg-white/10" />
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-xs text-[#E8D08A] font-sans">4.9 / 5.0</span>
              <div className="flex space-x-0.5 ml-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 text-[#C9A84C] fill-[#C9A84C]" />
                ))}
              </div>
            </div>
            <div className="hidden sm:block w-[1px] h-4 bg-white/10" />
            <div className="flex items-center space-x-1.5 text-xs text-[#888880] font-sans">
              <CheckCircle className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>42+ verified Grayson County client reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
