/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { RouteType } from '../types';

interface ServiceAreaMapProps {
  setRoute?: (route: RouteType) => void;
}

export default function ServiceAreaMap({ setRoute }: ServiceAreaMapProps) {
  const serviceCitiesList: { name: string; route: RouteType }[] = [
    { name: "Sherman (Headquarters)", route: "sherman-tx" },
    { name: "Denison, TX", route: "denison-tx" },
    { name: "Pottsboro, TX", route: "pottsboro-tx" },
    { name: "Whitesboro, TX", route: "whitesboro-tx" },
    { name: "Whitewright, TX", route: "whitewright-tx" },
    { name: "Collinsville, TX", route: "collinsville-tx" },
    { name: "Grayson County, TX", route: "grayson-county-tx" }
  ];

  return (
    <section 
      className="bg-[#FAF8F3] py-24 px-5 sm:px-6 lg:px-8 border-b border-[rgba(201,168,76,0.12)] relative"
      aria-labelledby="map-section-title"
      id="service-area-map-section"
    >
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[6px] text-[#5F5B53] uppercase block mb-3 font-semibold">
            Our Location
          </span>
          <h2 id="map-section-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F1D1A] font-medium tracking-tight">
            Proudly Serving Grayson County & Surrounding Communities
          </h2>
          <div className="w-16 h-[2.5px] bg-[#C9A84C] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="map-grid-container">
          
          {/* Left Column: Darkened Google Map Embed */}
          <div className="lg:col-span-7 flex flex-col justify-between" id="map-col-left">
            <div className="relative w-full h-[380px] sm:h-[450px] border border-[rgba(201,168,76,0.22)] rounded-sm overflow-hidden bg-[#FFFFFF] shadow-2xl">
              {/* Light, lightly-desaturated map tiles to match the cream theme */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.8378564147345!2d-96.61330332356877!3d33.632203973318265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c12643a6d7db5%3A0xa674c15374828f9c!2s416%20S%20Crockett%20St%2C%20Sherman%2C%20TX%2075090!5e0!3m2!1sen!2sus!4v1716500000000!5m2!1sen!2sus" 
                title="Benjamin A. Baker P.C. Office Map Location in Sherman, TX"
                width="100%" 
                height="100%" 
                style={{
                  border: 0,
                  filter: "grayscale(0.25) contrast(1.02)"
                }}
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer"
                id="google-maps-iframe"
              />
            </div>
            
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border border-[rgba(201,168,76,0.1)] bg-[#FFFFFF]/50 rounded-xs">
              <span className="font-sans text-xs text-[#5F5B53] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C9A84C] shrink-0" />
                <span>Mon – Fri: 8:30 AM – 5:30 PM (Sat/Sun by appointment)</span>
              </span>
              {setRoute && (
                <button 
                  onClick={() => {
                    setRoute('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-sans font-semibold text-[#C9A84C] hover:text-[#9A7A28] tracking-wider uppercase flex items-center gap-1 cursor-pointer"
                  id="map-get-directions-btn"
                >
                  <span>Request Directions →</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Office Credentials and Service Cities */}
          <div className="lg:col-span-12 xl:col-span-5 lg:col-start-8 bg-[#FFFFFF] border border-[rgba(201,168,76,0.18)] p-8 sm:p-10 flex flex-col justify-between shadow-2xl rounded-sm" id="map-col-right">
            <div className="space-y-8">
              {/* Office Details */}
              <div className="space-y-4">
                <span className="font-sans text-xs tracking-[4px] text-[#C9A84C] uppercase block font-semibold">
                  Sherman Headquarters
                </span>
                <h3 className="font-serif text-2xl text-[#9A7A28] font-semibold tracking-wide">
                  Office Contact Information
                </h3>
                
                <div className="space-y-4 pt-4 text-xs sm:text-sm text-[#1F1D1A]/90 font-sans">
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#1F1D1A] font-medium">Benjamin A. Baker P.C.</strong>
                      <span className="text-[#5F5B53] block mt-1">416 S Crockett St</span>
                      <span className="text-[#5F5B53] block">Sherman, TX 75090</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#C9A84C] shrink-0" />
                    <div>
                      <span className="text-[#5F5B53]">Direct Line:</span>{' '}
                      <a href="tel:9032717824" className="text-[#9A7A28] hover:text-[#C9A84C] hover:underline font-semibold leading-none">
                        (903) 271-7824
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#C9A84C] shrink-0" />
                    <div>
                      <span className="text-[#5F5B53]">Confidential Email:</span>{' '}
                      <a href="mailto:BenjaminABaker62@gmail.com" className="text-[#9A7A28] hover:text-[#C9A84C] hover:underline font-medium">
                        BenjaminABaker62@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Cities Checklist */}
              <div className="border-t border-black/[0.08] pt-6 space-y-4">
                <span className="font-sans text-[10px] tracking-[4px] text-[#C9A84C] uppercase block font-semibold">
                  Grayson County Coverage Areas
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="service-cities-checklist">
                  {serviceCitiesList.map((city, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => {
                        if (setRoute) {
                          setRoute(city.route);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          window.location.hash = `#${city.route}`;
                        }
                      }}
                      className="flex items-center space-x-2 text-xs text-[#5F5B53] hover:text-[#C9A84C] transition-colors text-left focus:outline-none cursor-pointer group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="font-sans tracking-wide leading-none">{city.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA action bottom */}
            <div className="pt-8 border-t border-black/[0.08] mt-8 text-center sm:text-left">
              <span className="font-sans text-[11px] text-[#5F5B53] block leading-relaxed">
                Our office is positioned blocks from the Grayson County Courthouse, facilitating immediate responses for active litigation hearings.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
