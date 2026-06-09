/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const CONTACT_EMAIL = 'BenjaminABaker62@gmail.com';
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Confidential Case Review Inquiry'
)}&body=${encodeURIComponent(
  'Name:\nPhone:\nPractice Area (Family Law / Personal Injury / Civil Litigation / Employment Law / Other):\n\nBrief description of your legal matter:\n'
)}`;

export default function ContactPage() {
  return (
    <main className="bg-[#FAF8F3] min-h-screen pt-32 pb-24 px-5 sm:px-6 lg:px-8 relative" id="contact-subpage">
      {/* Decorative gradients */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,rgba(0,0,0,0)_75%)] pointer-events-none filter blur-2xl" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header section */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[6px] text-[#C9A84C] uppercase block mb-3 font-semibold">
            Confidential Consultation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1F1D1A] font-medium tracking-tight">
            Contact Benjamin A. Baker
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#5F5B53] tracking-widest uppercase mt-4">
            Get Straightforward Counsel and Aggressive Court Representation
          </p>
          <div className="w-16 h-[2.5px] bg-[#C9A84C] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-layout-grid">

          {/* Left Column: Email / Call CTA (7 cols desktop) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[rgba(201,168,76,0.18)] p-8 sm:p-12 shadow-2xl rounded-sm flex flex-col" id="contact-cta-card">
            <div className="border-b border-black/[0.08] pb-5 mb-8">
              <h2 className="font-serif text-2xl text-[#9A7A28] font-semibold tracking-wide">
                Request a Confidential Case Review
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#5F5B53] mt-2 leading-relaxed">
                The fastest way to reach the firm is by email or phone. Send a short message describing your
                situation and the best time to reach you — we respond to every inquiry within one business day.
              </p>
            </div>

            {/* Primary: Email button */}
            <a
              href={MAILTO}
              className="group flex items-center justify-between gap-4 bg-[#C9A84C] hover:bg-[#9A7A28] text-[#0C0C0C] hover:text-white transition-colors duration-300 py-5 px-7 rounded-sm shadow-xl shadow-black/[0.08]"
              id="contact-email-btn"
            >
              <span className="flex items-center gap-4">
                <Mail className="w-6 h-6 shrink-0" />
                <span className="flex flex-col text-left">
                  <span className="font-sans text-[10px] font-bold tracking-[3px] uppercase opacity-80">
                    Email the Firm
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide break-all">
                    {CONTACT_EMAIL}
                  </span>
                </span>
              </span>
              <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary: Call button */}
            <a
              href="tel:9032717824"
              className="group mt-5 flex items-center justify-between gap-4 border border-[#C9A84C]/45 hover:border-[#C9A84C] hover:bg-[#C9A84C]/[0.06] transition-colors duration-300 py-5 px-7 rounded-sm"
              id="contact-call-btn"
            >
              <span className="flex items-center gap-4 text-[#9A7A28]">
                <Phone className="w-6 h-6 shrink-0" />
                <span className="flex flex-col text-left">
                  <span className="font-sans text-[10px] font-bold tracking-[3px] uppercase text-[#5F5B53]">
                    Call Direct
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide">
                    (903) 271-7824
                  </span>
                </span>
              </span>
              <ArrowRight className="w-5 h-5 shrink-0 text-[#C9A84C] transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
              <span className="font-sans text-[11px] text-[#5F5B53] leading-relaxed">
                All communications are treated as confidential and protected by Texas attorney-client privilege.
                Please avoid sending sensitive third-party credentials by email.
              </span>
            </div>
          </div>

          {/* Right Column: Office info sidebar (5 cols desktop) */}
          <div className="lg:col-span-5 space-y-8" id="contact-sidebar-info">

            {/* Sherman Office Details Card */}
            <div className="bg-[#FFFFFF] border border-[rgba(201,168,76,0.12)] p-8 space-y-6">
              <span className="font-sans text-xs tracking-[4px] text-[#C9A84C] uppercase block font-semibold">
                Offices Information
              </span>
              <h3 className="font-serif text-2xl text-[#9A7A28] font-semibold">
                Sherman Headquarters
              </h3>

              <div className="space-y-4 pt-2 text-xs sm:text-sm text-[#1F1D1A]/90 font-sans">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1F1D1A] font-medium">Benjamin A. Baker P.C.</strong>
                    <span className="text-[#5F5B53] block mt-1">416 S Crockett St</span>
                    <span className="text-[#5F5B53] block">Sherman, TX 75090</span>
                    <span className="text-[#5F5B53] text-[11px] italic block mt-1">Located steps from the Grayson County Courthouse.</span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#C9A84C] shrink-0" />
                  <div>
                    <span className="text-[#5F5B53]">Direct Line:</span>{' '}
                    <a href="tel:9032717824" className="text-[#9A7A28] hover:text-[#C9A84C] hover:underline font-semibold font-mono">
                      (903) 271-7824
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#C9A84C] shrink-0" />
                  <div>
                    <span className="text-[#5F5B53]">Confidential Email:</span>{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#9A7A28] hover:text-[#C9A84C] hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3 leading-relaxed">
                  <Clock className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#5F5B53] block">Consultation Hours:</span>
                    <span className="text-[#1F1D1A] block mt-1">Monday – Friday</span>
                    <span className="text-[#5F5B53] block text-[11px]">8:30 AM – 5:30 PM (Sat/Sun by appointment)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Advisory warning banner */}
            <div className="border-l-2 border-[#C9A84C] bg-[#FFFFFF] p-6 text-xs text-[#5F5B53] leading-relaxed font-sans shadow-md">
              <strong className="text-[#9A7A28] block mb-2 font-serif text-sm tracking-wide">Attorneys Protection Mandate:</strong>
              Completing this secure contact form or sending email transmissions does not form an official attorney-client relationship. An official contract relation is established solely upon direct signature of a formal written Letter of Retainer.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
