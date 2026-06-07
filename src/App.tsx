/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { RouteType } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PracticeAreas from './components/PracticeAreas';
import AttorneyIntro from './components/AttorneyIntro';
import ServiceAreaMap from './components/ServiceAreaMap';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import PrivacyDisclaimer from './components/PrivacyDisclaimer';
import PracticeAreaDetail from './components/PracticeAreaDetail';
import CityLocationDetail from './components/CityLocationDetail';
import HtmlSitemap from './components/HtmlSitemap';

export default function App() {
  const [route, setRoute] = useState<RouteType>('home');

  // Handle URL hash changes passively to enable browser history backing and links bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as RouteType;
      const validRoutes: RouteType[] = [
        'home',
        'practice-areas',
        'practice-areas/family-law',
        'practice-areas/personal-injury',
        'practice-areas/civil-litigation',
        'practice-areas/employment-law',
        'attorney',
        'testimonials',
        'blog',
        'contact',
        'privacy',
        'disclaimer',
        'sherman-tx',
        'denison-tx',
        'pottsboro-tx',
        'whitesboro-tx',
        'whitewright-tx',
        'collinsville-tx',
        'grayson-county-tx',
        'html-sitemap'
      ];
      
      if (validRoutes.includes(hash)) {
        setRoute(hash);
      } else {
        setRoute('home');
      }
      
      // Smooth scroll to top when navigation occurs
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initialize state on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSetRoute = (newRoute: RouteType) => {
    setRoute(newRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0C0C0C] text-[#F2EDE4] selection:bg-[#C9A84C]/30 selection:text-[#E8D08A] overflow-x-hidden font-sans" id="law-firm-root">
      {/* Premium Header/Navigation Bar */}
      <Navbar currentRoute={route} setRoute={handleSetRoute} />

      {/* Main Dynamic View Layout Wrapper */}
      <div className="flex-grow">
        {route === 'home' && (
          <div id="homepage-rendered-views">
            {/* A. Full-Screen Page Hero and Crest */}
            <Hero setRoute={handleSetRoute} />
            
            {/* B. Count-Up Stats Trust Bar */}
            <TrustBar />
            
            {/* C. Interactive Practice Specialties Grid */}
            <PracticeAreas setRoute={handleSetRoute} />
            
            {/* D. Attorney Introduction Bio */}
            <AttorneyIntro setRoute={handleSetRoute} />
            
            {/* E. Grayson County Location Map and Contacts Info */}
            <ServiceAreaMap setRoute={handleSetRoute} />
            
            {/* F. Client Testimonials Grid */}
            <Testimonials />
            
            {/* G. Direct Consultation CTA Shimmer Banner */}
            <CtaBanner setRoute={handleSetRoute} />
          </div>
        )}

        {/* Subsequent Deep Specialties Detail Subpage */}
        {route === 'practice-areas' && (
          <PracticeAreas isFullPage={true} setRoute={handleSetRoute} />
        )}

        {/* Subsequent Attorney Biography Subpage */}
        {route === 'attorney' && (
          <AttorneyIntro isFullPage={true} setRoute={handleSetRoute} />
        )}

        {/* Subsequent Testimonials Subpage */}
        {route === 'testimonials' && (
          <Testimonials isFullPage={true} />
        )}

        {/* Subsequent Legal Journal Publication Subpage */}
        {route === 'blog' && (
          <BlogPage setRoute={handleSetRoute} />
        )}

        {/* Subsequent Free Case Review Intake Form Subpage */}
        {route === 'contact' && (
          <ContactPage />
        )}

        {/* Subsequent Mandatory Privacy Charter Subpage */}
        {route === 'privacy' && (
          <PrivacyDisclaimer mode="privacy" setRoute={handleSetRoute} />
        )}

        {/* Subsequent Counsel Advertising Disclosures Subpage */}
        {route === 'disclaimer' && (
          <PrivacyDisclaimer mode="disclaimer" setRoute={handleSetRoute} />
        )}

        {/* Dedicated Practice Area Pages */}
        {route === 'practice-areas/family-law' && (
          <PracticeAreaDetail areaId="family-law" setRoute={handleSetRoute} />
        )}
        {route === 'practice-areas/personal-injury' && (
          <PracticeAreaDetail areaId="personal-injury" setRoute={handleSetRoute} />
        )}
        {route === 'practice-areas/civil-litigation' && (
          <PracticeAreaDetail areaId="civil-litigation" setRoute={handleSetRoute} />
        )}
        {route === 'practice-areas/employment-law' && (
          <PracticeAreaDetail areaId="employment-law" setRoute={handleSetRoute} />
        )}

        {/* Dedicated City Pages */}
        {route === 'sherman-tx' && (
          <CityLocationDetail cityId="sherman-tx" setRoute={handleSetRoute} />
        )}
        {route === 'denison-tx' && (
          <CityLocationDetail cityId="denison-tx" setRoute={handleSetRoute} />
        )}
        {route === 'pottsboro-tx' && (
          <CityLocationDetail cityId="pottsboro-tx" setRoute={handleSetRoute} />
        )}
        {route === 'whitesboro-tx' && (
          <CityLocationDetail cityId="whitesboro-tx" setRoute={handleSetRoute} />
        )}
        {route === 'whitewright-tx' && (
          <CityLocationDetail cityId="whitewright-tx" setRoute={handleSetRoute} />
        )}
        {route === 'collinsville-tx' && (
          <CityLocationDetail cityId="collinsville-tx" setRoute={handleSetRoute} />
        )}
        {route === 'grayson-county-tx' && (
          <CityLocationDetail cityId="grayson-county-tx" setRoute={handleSetRoute} />
        )}

        {/* html sitemap */}
        {route === 'html-sitemap' && (
          <HtmlSitemap setRoute={handleSetRoute} />
        )}
      </div>

      {/* Premium Three Column Footer + Unified Floating Contact Trigger */}
      <Footer currentRoute={route} setRoute={handleSetRoute} />
    </div>
  );
}
