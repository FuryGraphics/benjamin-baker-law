/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Scale, ChevronDown } from 'lucide-react';
import { RouteType } from '../types';

interface NavbarProps {
  currentRoute: RouteType;
  setRoute: (route: RouteType) => void;
}

interface NavItem {
  name: string;
  route: RouteType;
}

interface NavGroup {
  name: string;
  /** Top-level destination when the label itself is clicked */
  route: RouteType;
  /** Dropdown children */
  items: NavItem[];
}

const PRACTICE_ITEMS: NavItem[] = [
  { name: 'All Practice Areas', route: 'practice-areas' },
  { name: 'Family Law', route: 'practice-areas/family-law' },
  { name: 'Personal Injury', route: 'practice-areas/personal-injury' },
  { name: 'Civil Litigation', route: 'practice-areas/civil-litigation' },
  { name: 'Employment Law', route: 'practice-areas/employment-law' },
];

const AREA_ITEMS: NavItem[] = [
  { name: 'Sherman, TX', route: 'sherman-tx' },
  { name: 'Denison, TX', route: 'denison-tx' },
  { name: 'Pottsboro, TX', route: 'pottsboro-tx' },
  { name: 'Whitesboro, TX', route: 'whitesboro-tx' },
  { name: 'Whitewright, TX', route: 'whitewright-tx' },
  { name: 'Collinsville, TX', route: 'collinsville-tx' },
  { name: 'Grayson County, TX', route: 'grayson-county-tx' },
];

const LEGAL_ITEMS: NavItem[] = [
  { name: 'Privacy Policy', route: 'privacy' },
  { name: 'Attorney Disclaimer', route: 'disclaimer' },
  { name: 'Site Map', route: 'html-sitemap' },
];

const GROUPS: NavGroup[] = [
  { name: 'Practice Areas', route: 'practice-areas', items: PRACTICE_ITEMS },
  { name: 'Areas Served', route: 'grayson-county-tx', items: AREA_ITEMS },
  { name: 'Legal', route: 'html-sitemap', items: LEGAL_ITEMS },
];

export default function Navbar({ currentRoute, setRoute }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (route: RouteType) => {
    setRoute(route);
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
    setOpenMobileGroup(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = route === 'home' ? '' : `#${route}`;
  };

  const isGroupActive = (group: NavGroup) =>
    group.items.some((i) => i.route === currentRoute);

  const openGroup = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(name);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const simpleLinkClass = (route: RouteType) =>
    `font-sans text-[11px] tracking-widest uppercase font-semibold transition-colors py-2 cursor-pointer relative ${
      currentRoute === route ? 'text-[#9A7A28]' : 'text-[#5F5B53] hover:text-[#9A7A28]'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#C9A84C]/25 py-2.5 shadow-md shadow-black/[0.06]'
          : 'bg-[#FAF8F3]/80 backdrop-blur-sm border-b border-[#C9A84C]/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo / Brand */}
          <button
            onClick={() => navigate('home')}
            className="flex items-center space-x-3 text-left focus:outline-none rounded p-1 group cursor-pointer"
            aria-label="Benjamin A. Baker Homepage"
            id="nav-logo-btn"
          >
            <div className="border border-[#C9A84C]/45 p-1.5 rounded transition-transform duration-300 group-hover:scale-105 bg-white">
              <Scale className="w-4.5 h-4.5 text-[#C9A84C]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] sm:text-[20px] font-serif font-bold tracking-tight text-[#9A7A28] uppercase leading-none">
                BENJAMIN A. BAKER P.C.
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#5F5B53] mt-1 block">
                Attorney &amp; Counselor at Law
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav
            className="hidden xl:flex items-center space-x-6"
            aria-label="Desktop Main Navigation"
            id="desktop-main-navigation"
          >
            <button onClick={() => navigate('home')} className={simpleLinkClass('home')}>
              Home
            </button>

            {/* Practice Areas dropdown */}
            <DesktopDropdown
              group={GROUPS[0]}
              isOpen={openMenu === GROUPS[0].name}
              isActive={isGroupActive(GROUPS[0])}
              onOpen={() => openGroup(GROUPS[0].name)}
              onClose={scheduleClose}
              onNavigate={navigate}
              currentRoute={currentRoute}
            />

            <button onClick={() => navigate('attorney')} className={simpleLinkClass('attorney')}>
              About
            </button>

            {/* Areas Served dropdown */}
            <DesktopDropdown
              group={GROUPS[1]}
              isOpen={openMenu === GROUPS[1].name}
              isActive={isGroupActive(GROUPS[1])}
              onOpen={() => openGroup(GROUPS[1].name)}
              onClose={scheduleClose}
              onNavigate={navigate}
              currentRoute={currentRoute}
            />

            <button onClick={() => navigate('testimonials')} className={simpleLinkClass('testimonials')}>
              Reviews
            </button>
            <button onClick={() => navigate('blog')} className={simpleLinkClass('blog')}>
              Blog
            </button>

            {/* Legal dropdown */}
            <DesktopDropdown
              group={GROUPS[2]}
              isOpen={openMenu === GROUPS[2].name}
              isActive={isGroupActive(GROUPS[2])}
              onOpen={() => openGroup(GROUPS[2].name)}
              onClose={scheduleClose}
              onNavigate={navigate}
              currentRoute={currentRoute}
            />

            {/* Phone */}
            <a
              href="tel:9032717824"
              className="flex items-center space-x-1.5 text-[#9A7A28] hover:text-[#C9A84C] font-sans text-[11px] font-bold tracking-wide transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(903) 271-7824</span>
            </a>

            {/* CTA */}
            <button
              onClick={() => navigate('contact')}
              className="bg-[#C9A84C] text-[#1A1407] px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#9A7A28] hover:text-white transition-colors duration-300 cursor-pointer focus:outline-none rounded-sm"
              id="header-cta-btn"
            >
              Free Consultation
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="flex xl:hidden items-center space-x-3">
            <a
              href="tel:9032717824"
              className="p-2 border border-[#C9A84C]/35 rounded text-[#9A7A28] hover:bg-[#C9A84C]/10 transition-colors"
              aria-label="Call attorney now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border border-[#C9A84C]/35 rounded text-[#1F1D1A] hover:text-[#9A7A28] transition-colors focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          className="xl:hidden absolute top-full left-0 right-0 bg-[#FAF8F3] border-b border-[#C9A84C]/25 shadow-xl max-h-[calc(100vh-72px)] overflow-y-auto flex flex-col px-5 py-5"
          id="mobile-links-drawer"
        >
          <MobileLink label="Home" active={currentRoute === 'home'} onClick={() => navigate('home')} />

          <MobileGroup
            group={GROUPS[0]}
            open={openMobileGroup === GROUPS[0].name}
            currentRoute={currentRoute}
            onToggle={() => setOpenMobileGroup(openMobileGroup === GROUPS[0].name ? null : GROUPS[0].name)}
            onNavigate={navigate}
          />

          <MobileLink label="About the Firm" active={currentRoute === 'attorney'} onClick={() => navigate('attorney')} />

          <MobileGroup
            group={GROUPS[1]}
            open={openMobileGroup === GROUPS[1].name}
            currentRoute={currentRoute}
            onToggle={() => setOpenMobileGroup(openMobileGroup === GROUPS[1].name ? null : GROUPS[1].name)}
            onNavigate={navigate}
          />

          <MobileLink label="Client Reviews" active={currentRoute === 'testimonials'} onClick={() => navigate('testimonials')} />
          <MobileLink label="Legal Blog" active={currentRoute === 'blog'} onClick={() => navigate('blog')} />

          <MobileGroup
            group={GROUPS[2]}
            open={openMobileGroup === GROUPS[2].name}
            currentRoute={currentRoute}
            onToggle={() => setOpenMobileGroup(openMobileGroup === GROUPS[2].name ? null : GROUPS[2].name)}
            onNavigate={navigate}
          />

          <div className="pt-4 mt-2 flex flex-col space-y-3 border-t border-black/[0.08]">
            <button
              onClick={() => navigate('contact')}
              className="w-full text-center bg-[#C9A84C] text-[#1A1407] font-sans text-xs font-bold tracking-widest uppercase py-3.5 px-4 hover:bg-[#9A7A28] hover:text-white transition-colors rounded-sm"
            >
              Schedule Free Consultation
            </button>
            <a
              href="tel:9032717824"
              className="w-full text-center border border-[#C9A84C]/45 hover:border-[#C9A84C] text-[#9A7A28] font-sans text-xs font-semibold tracking-widest uppercase py-3.5 px-4 flex items-center justify-center space-x-2 rounded-sm"
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

/* ---------- Desktop dropdown ---------- */
function DesktopDropdown({
  group,
  isOpen,
  isActive,
  onOpen,
  onClose,
  onNavigate,
  currentRoute,
}: {
  group: NavGroup;
  isOpen: boolean;
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
  onNavigate: (route: RouteType) => void;
  currentRoute: RouteType;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        onClick={() => onNavigate(group.route)}
        className={`flex items-center space-x-1 font-sans text-[11px] tracking-widest uppercase font-semibold transition-colors py-2 cursor-pointer ${
          isActive || isOpen ? 'text-[#9A7A28]' : 'text-[#5F5B53] hover:text-[#9A7A28]'
        }`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{group.name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-60 z-50">
          <div className="bg-white border border-[#C9A84C]/25 rounded-sm shadow-xl shadow-black/[0.10] py-2 overflow-hidden">
            {group.items.map((item) => (
              <button
                key={item.route}
                onClick={() => onNavigate(item.route)}
                className={`w-full text-left px-5 py-2.5 font-sans text-xs tracking-wide transition-colors border-l-2 ${
                  currentRoute === item.route
                    ? 'border-[#C9A84C] text-[#9A7A28] bg-[#C9A84C]/[0.06] font-semibold'
                    : 'border-transparent text-[#5F5B53] hover:text-[#9A7A28] hover:bg-[#C9A84C]/[0.05] hover:border-[#C9A84C]/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Mobile helpers ---------- */
function MobileLink({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`text-left font-sans text-sm tracking-widest uppercase py-3 border-b border-black/[0.06] transition-colors ${
        active ? 'text-[#9A7A28] font-semibold pl-2 border-l-2 border-l-[#C9A84C]' : 'text-[#1F1D1A]'
      }`}
    >
      {label}
    </button>
  );
}

function MobileGroup({
  group,
  open,
  currentRoute,
  onToggle,
  onNavigate,
}: {
  group: NavGroup;
  open: boolean;
  currentRoute: RouteType;
  onToggle: () => void;
  onNavigate: (route: RouteType) => void;
}) {
  return (
    <div className="border-b border-black/[0.06]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left font-sans text-sm tracking-widest uppercase py-3 text-[#1F1D1A]"
        aria-expanded={open}
      >
        <span>{group.name}</span>
        <ChevronDown className={`w-4 h-4 text-[#9A7A28] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-3 pl-3 flex flex-col">
          {group.items.map((item) => (
            <button
              key={item.route}
              onClick={() => onNavigate(item.route)}
              className={`text-left font-sans text-[13px] tracking-wide py-2 transition-colors ${
                currentRoute === item.route ? 'text-[#9A7A28] font-semibold' : 'text-[#5F5B53] hover:text-[#9A7A28]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
