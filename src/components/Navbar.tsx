/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Scale } from 'lucide-react';
import { RouteType } from '../types';

interface NavbarProps {
  currentRoute: RouteType;
  setRoute: (route: RouteType) => void;
}

export default function Navbar({ currentRoute, setRoute }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; route: RouteType }[] = [
    { name: 'Home', route: 'home' },
    { name: 'Practice Areas', route: 'practice-areas' },
    { name: 'Attorney Bio', route: 'attorney' },
    { name: 'Testimonials', route: 'testimonials' },
    { name: 'Legal Blog', route: 'blog' },
    { name: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: RouteType) => {
    setRoute(route);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update hash passively
    window.location.hash = route === 'home' ? '' : `#${route}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0C0C0C]/95 backdrop-blur-md border-b border-[#C9A84C]/10 py-3.5 shadow-lg shadow-black/30'
          : 'bg-[#0C0C0C]/30 backdrop-blur-[2px] border-b border-[#C9A84C]/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-none focus:ring-1 focus:ring-[#C9A84C]/50 rounded p-1 group cursor-pointer"
            aria-label="Benjamin A. Baker Homepage"
            id="nav-logo-btn"
          >
            <div className="border border-[#C9A84C]/35 p-1.5 rounded transition-transform duration-300 group-hover:scale-105 bg-black/40">
              <Scale className="w-4.5 h-4.5 text-[#C9A84C]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] sm:text-[20px] font-serif font-bold tracking-tight text-[#C9A84C] uppercase leading-none">
                BENJAMIN A. BAKER P.C.
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#888880] mt-1 block">
                Attorney & Counselor at Law
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Desktop Main Navigation" id="desktop-main-navigation">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`font-sans text-[11px] tracking-widest uppercase font-medium transition-colors py-2 cursor-pointer focus:outline-none focus:text-[#C9A84C] relative ${
                  currentRoute === link.route ? 'text-[#C9A84C]' : 'text-[#888880] hover:text-[#C9A84C]'
                }`}
                id={`nav-link-${link.route}`}
              >
                {link.name}
                {currentRoute === link.route && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C9A84C]" />
                )}
              </button>
            ))}
            
            {/* Quick Contact Header Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-[#C9A84C] text-[#0C0C0C] px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#E8D08A] transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
              id="header-cta-btn"
            >
              Consult Free
            </button>
          </nav>

          {/* Mobile hamburger toggle */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              href="tel:9032717824"
              className="p-2 border border-[rgba(201,168,76,0.25)] rounded text-[#C9A84C] hover:bg-[#C9A84C]/10 active:bg-[#C9A84C]/20 transition-colors"
              aria-label="Call attorney now"
              id="mobile-quick-call-btn"
            >
              <Phone className="w-4 h-4" />
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border border-[rgba(201,168,76,0.18)] rounded text-[#F2EDE4] hover:text-[#C9A84C] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C9A84C]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              id="hamburger-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 bg-[#0C0C0C] border-b border-[rgba(201,168,76,0.25)] shadow-xl transition-all duration-300 flex flex-col px-5 py-6 space-y-4"
          id="mobile-links-drawer"
        >
          {navLinks.map((link) => (
            <button
              key={link.route}
              onClick={() => handleNavClick(link.route)}
              className={`text-left font-sans text-sm tracking-widest uppercase py-2.5 border-b border-white/[0.03] transition-colors ${
                currentRoute === link.route ? 'text-[#C9A84C] font-semibold pl-2 border-l border-[#C9A84C]' : 'text-[#F2EDE4]'
              }`}
              id={`nav-link-mobile-${link.route}`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-2 flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center bg-[#C9A84C] text-[#0C0C0C] font-sans text-xs font-bold tracking-widest uppercase py-3.5 px-4 active:bg-[#E8D08A] transition-colors"
              id="mobile-cta-consult-btn"
            >
              Schedule Free Consultation
            </button>
            <a
              href="tel:9032717824"
              className="w-full text-center border border-[rgba(201,168,76,0.35)] hover:border-[#C9A84C] text-[#E8D08A] font-sans text-xs font-semibold tracking-widest uppercase py-3.5 px-4 flex items-center justify-center space-x-2"
              id="mobile-cta-call-direct"
            >
              <Phone className="w-4 h-4" />
              <span>Call (903) 271-7824</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
