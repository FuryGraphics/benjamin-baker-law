/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 20;
      const duration = 1500; // ms
      const incrementTime = Math.floor(duration / end);
      
      const timer = setInterval(() => {
        start += 1;
        setYearsCount(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const stats = [
    {
      value: isInView ? `${yearsCount}+ Years` : "0+ Years",
      desc: "Legal Experience"
    },
    {
      value: "Licensed",
      desc: "State Bar of Texas"
    },
    {
      value: "Free",
      desc: "Initial Consult"
    },
    {
      value: "Grayson Co.",
      desc: "Local Expertise"
    }
  ];

  return (
    <div 
      ref={ref}
      className="bg-[#FFFFFF] py-8 md:py-6 px-12 border-t border-b border-[#C9A84C]/20 relative z-10"
      aria-label="Firm Credentials and Trust Statistics"
      id="trust-bar-section"
    >
      <div className="absolute inset-0 grain-overlay pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center w-full md:w-auto justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="text-center md:text-left flex flex-col"
                id={`trust-stat-${idx}`}
              >
                <span className="block font-serif text-[26px] md:text-[24px] text-[#C9A84C] leading-none font-medium">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#5F5B53] mt-1.5 block">
                  {stat.desc}
                </span>
              </motion.div>
              
              {/* Vertical border separator for desktop */}
              {idx < stats.length - 1 && (
                <div className="hidden md:block h-8 w-px bg-[#C9A84C]/20 ml-16 lg:ml-24 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
