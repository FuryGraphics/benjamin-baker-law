/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Scale } from 'lucide-react';
import { RouteType } from '../types';

interface FooterProps {
  currentRoute: RouteType;
  setRoute: (route: RouteType) => void;
}

export default function Footer({ currentRoute, setRoute }: FooterProps) {
  const handleQuickLink = (route: RouteType) => {
    setRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = route === 'home' ? '' : `#${route}`;
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-[#0C0C0C] border-t border-[rgba(201,168,76,0.18)] pt-16 pb-8 px-5 sm:px-6 lg:px-8 relative z-20"
      aria-label="Footer Navigation & Legal Info"
      id="main-app-footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/[0.04]" id="footer-cols-grid">
          
          {/* Column 1: Firm & Office Info */}
          <div className="space-y-4" id="footer-col-1">
            <button
              onClick={() => handleQuickLink('home')}
              className="flex items-center space-x-2 text-left focus:outline-none"
              id="footer-logo-btn"
            >
              <span className="font-serif text-[#C9A84C] text-xl font-bold tracking-wider block uppercase">
                BENJAMIN A. BAKER P.C.
              </span>
            </button>
            <p className="font-sans text-xs text-[#888880] leading-relaxed max-w-sm">
              Dedicated, professional Legal service throughout Grayson County, Texas. Providing comprehensive advocacy for families and local business groups.
            </p>
            <div className="space-y-2.5 pt-2 text-xs text-[#F2EDE4]/90 font-sans">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                <span>416 S Crockett St, Sherman, TX 75090</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C9A84C] shrink-0" />
                <a href="tel:9032717824" className="hover:text-[#C9A84C] hover:underline font-semibold text-[#E8D08A]">
                  (903) 271-7824
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#C9A84C] shrink-0" />
                <a href="mailto:BenjaminABaker62@gmail.com" className="hover:text-[#C9A84C] hover:underline">
                  BenjaminABaker62@gmail.com
                </a>
              </div>
            </div>
            <p className="font-sans text-[10px] text-[#888880]/70 italic pt-2">
              Attorney Advertising. Prior results do not guarantee a similar outcome.
            </p>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="space-y-4" id="footer-col-2">
            <h3 className="font-serif text-lg text-[#E8D08A] font-medium tracking-wide">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 font-sans text-xs text-[#888880]" id="footer-quick-links-list">
              <li>
                <button 
                  onClick={() => handleQuickLink('home')} 
                  className={`hover:text-[#C9A84C] transition-colors ${currentRoute === 'home' ? 'text-[#C9A84C] font-semibold' : ''}`}
                >
                  Homepage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleQuickLink('practice-areas')} 
                  className={`hover:text-[#C9A84C] transition-colors ${currentRoute === 'practice-areas' ? 'text-[#C9A84C] font-semibold' : ''}`}
                >
                  Practice Areas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleQuickLink('attorney')} 
                  className={`hover:text-[#C9A84C] transition-colors ${currentRoute === 'attorney' ? 'text-[#C9A84C] font-semibold' : ''}`}
                >
                  Attorney Biography
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleQuickLink('testimonials')} 
                  className={`hover:text-[#C9A84C] transition-colors ${currentRoute === 'testimonials' ? 'text-[#C9A84C] font-semibold' : ''}`}
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleQuickLink('blog')} 
                  className={`hover:text-[#C9A84C] transition-colors ${currentRoute === 'blog' ? 'text-[#C9A84C] font-semibold' : ''}`}
                >
                  Legal Publications
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleQuickLink('contact')} 
                  className={`hover:text-[#C9A84C] transition-colors ${currentRoute === 'contact' ? 'text-[#C9A84C] font-semibold' : ''}`}
                >
                  Confidential Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Coverages and free prompt */}
          <div className="space-y-4" id="footer-col-3">
            <h3 className="font-serif text-lg text-[#E8D08A] font-medium tracking-wide">
              Service Areas
            </h3>
            <p className="font-sans text-xs text-[#888880] leading-normal">
              Sherman, Denison, Pottsboro, Whitesboro, Whitewright, Collinsville, and surrounding Grayson County.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleQuickLink('contact')}
                className="w-full bg-transparent border border-[rgba(201,168,76,0.25)] hover:border-[#C9A84C] text-[#E8D08A] font-sans text-xs font-bold tracking-widest uppercase py-3 px-4 transition-colors cursor-pointer"
                id="footer-cta-btn"
              >
                Request Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar with Copyright, Privacy, and Disclaimer links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[11px] text-[#888880]" id="footer-bottom-bar">
          <p>© {currentYear} Benjamin A. Baker P.C. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <button 
              onClick={() => handleQuickLink('privacy')} 
              className="hover:text-[#C9A84C] transition-colors"
              id="footer-privacy-link"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button 
              onClick={() => handleQuickLink('disclaimer')} 
              className="hover:text-[#C9A84C] transition-colors"
              id="footer-disclaimer-link"
            >
              Attorney Disclaimer
            </button>
            <span>|</span>
            <button 
              onClick={() => handleQuickLink('html-sitemap')} 
              className="hover:text-[#C9A84C] transition-colors"
              id="footer-html-sitemap-link"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>

      {/* Floating Universal Call Now Button, fixed bottom-right */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:9032717824"
          className="group flex items-center space-x-2 bg-[#C9A84C] hover:bg-[#E8D08A] active:bg-[#C9A84C] text-[#0C0C0C] font-sans text-xs font-bold tracking-[2px] uppercase py-3.5 px-5 rounded-full shadow-2xl transition-all duration-300"
          title="Call attorney now"
          id="floating-call-now-trigger"
        >
          <Phone className="w-4 h-4 text-[#0C0C0C] fill-current" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out inline-block whitespace-nowrap pl-0 group-hover:pl-1">
            Call (903) 271-7824
          </span>
        </a>
      </div>
    </footer>
  );
}
