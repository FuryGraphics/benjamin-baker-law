/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Scale, AlertTriangle, FileText } from 'lucide-react';
import { RouteType } from '../types';

interface PrivacyDisclaimerProps {
  mode: 'privacy' | 'disclaimer';
  setRoute: (route: RouteType) => void;
}

export default function PrivacyDisclaimer({ mode, setRoute }: PrivacyDisclaimerProps) {
  const handleContactLink = () => {
    setRoute('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-[#FAF8F3] min-h-screen pt-32 pb-24 px-5 sm:px-6 lg:px-8 relative" id="privacy-disclaimer-subpage">
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        {mode === 'privacy' ? (
          /* Privacy Policy View */
          <div className="space-y-6" id="privacy-policy-view">
            <div className="flex items-center space-x-3 text-[#C9A84C] mb-4">
              <ShieldCheck className="w-8 h-8" />
              <h1 className="font-serif text-3xl sm:text-4xl text-[#1F1D1A] font-medium tracking-tight">
                Privacy Policy
              </h1>
            </div>
            
            <p className="font-sans text-xs text-[#5F5B53] uppercase tracking-widest block border-b border-black/[0.08] pb-4">
              LAST UPDATED: MAY 23, 2026 • BENJAMIN A. BAKER P.C.
            </p>

            <div className="font-sans text-xs sm:text-sm text-[#5F5B53]/90 leading-relaxed space-y-6">
              <p>
                Benjamin A. Baker P.C. operates BABakerPC.com. We take the privacy of our site visitors and potential clients extremely seriously. This Privacy Charter governs how we collect, store, and utilize data submitted via our consultation request terminals.
              </p>

              <div>
                <h2 className="font-serif text-lg text-[#9A7A28] font-medium tracking-wide mb-2">1. Information We Collect</h2>
                <p>
                  We compile personal credentials submitted voluntarily via our contact forms, including names, telephone numbers, email addresses, and case summary notes. No personal credentials are synthesized without your explicit authorization.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-[#9A7A28] font-medium tracking-wide mb-2">2. How We Protect Submitted Case Details</h2>
                <p>
                  Any transmissions containing inquiries on our website are protected by standard Secure Socket Layer (SSL) encryption client modules. Physical records are kept under guarded, restricted files at our Sherman Headquarters. We strictly respect the absolute boundaries of Texas Attorney-Client Privilege.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-[#9A7A28] font-medium tracking-wide mb-2">3. Non-Disclosure Commitment</h2>
                <p>
                  We absolutely never distribute, sell, trade, or leak personal identifier credentials or contact details to third-party commercial marketing groups. Records are shared only when mandatory to comply with state legislation or under direct written client retainers.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-[#9A7A28] font-medium tracking-wide mb-2">4. Digital Cookies</h2>
                <p>
                  We apply minor tracker analytic cookies solely to analyze generic traffic patterns and geographic regions (such as Sherman, Texas). This tracking stores no personal case details.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Attorney Disclaimer View */
          <div className="space-y-6" id="attorney-disclaimer-view">
            <div className="flex items-center space-x-3 text-[#C9A84C] mb-4">
              <AlertTriangle className="w-8 h-8" />
              <h1 className="font-serif text-3xl sm:text-4xl text-[#1F1D1A] font-medium tracking-tight">
                Attorney Disclaimer
              </h1>
            </div>

            <p className="font-sans text-xs text-[#5F5B53] uppercase tracking-widest block border-b border-black/[0.08] pb-4">
              MANDATORY LEGAL NOTICES & DISCLOSURES • STATUTORY TEXAS RULES
            </p>

            <div className="font-sans text-xs sm:text-sm text-[#5F5B53]/90 leading-relaxed space-y-6">
              <p>
                The materials compiled inside BABakerPC.com are constructed solely for educational and informational parameters regarding Family Law, Civil Litigation, Personal Injury, and Employment Law in Sherman, Texas and surrounding Grayson County.
              </p>

              <div className="border border-[#C9A84C]/25 bg-black/[0.03] p-6 rounded-sm space-y-3">
                <h2 className="font-serif text-lg text-[#9A7A28] font-semibold tracking-wide">No Attorney-Client Connection Confirmed</h2>
                <p className="text-xs">
                  Completing website request contact forms, sending emails, or receiving automated summaries does NOT construct an official legal counselor-client connection. A formal legal relationship occurs solely upon direct, mutual signature of a formalized letter of representation (retainer contract) with Benjamin A. Baker.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-[#9A7A28] font-medium tracking-wide mb-2">Not Substitute of Counsel</h2>
                <p>
                  Materials published and maintained throughout our Legal Publication logs or service summary sheets are not substitute advisories. You should not perform actions or withhold decisions based solely on these materials. Consult qualified attorneys regarding active legal situations.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-[#9A7A28] font-medium tracking-wide mb-2">Texas Advertising Rules</h2>
                <p>
                  Matches of prior case success stories or client feedback listed do not represent guarantees of identical future outcomes. Results vary heavily based on court records, judge configurations, and objective evidence. This website behaves under State Bar of Texas Mandatory Attorney Advertising guidelines.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-[#9A7A28] font-medium tracking-wide mb-2">Third-Party Coordinates</h2>
                <p>
                  Any external hyperlinks or reference records are included as general conveniences. Benjamin A. Baker P.C. has no control over external domains and takes no liability for their contents.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Unified Bottom CTA block urging users to consult safely */}
        <div className="pt-12 border-t border-[#C9A84C]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-lg text-[#9A7A28] font-medium">Have an active legal inquiry?</h3>
            <p className="font-sans text-xs text-[#5F5B53] mt-1">Get straightforward advisory evaluation blocks today.</p>
          </div>
          <button
            onClick={handleContactLink}
            className="bg-[#C9A84C] hover:bg-[#9A7A28] text-[#0C0C0C] font-sans text-xs font-bold tracking-widest uppercase py-3.5 px-6 transition-colors cursor-pointer"
            id="privacy-cta-btn"
          >
            Speak to a Lawyer Now
          </button>
        </div>
      </div>
    </main>
  );
}
