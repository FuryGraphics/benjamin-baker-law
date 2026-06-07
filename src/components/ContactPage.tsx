/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactFormData } from '../types';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    practiceArea: 'family-law',
    message: '',
    urgency: 'medium'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUrgencyChange = (val: 'low' | 'medium' | 'high') => {
    setFormData((prev) => ({ ...prev, urgency: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    // Basic Validation
    const emptyFields = [];
    if (!formData.fullName.trim()) emptyFields.push("Full Name");
    if (!formData.phone.trim()) emptyFields.push("Phone Number");
    if (!formData.email.trim()) emptyFields.push("Email Address");
    if (!formData.message.trim()) emptyFields.push("Case Description");

    if (emptyFields.length > 0) {
      setErrors([`Please complete the following required fields: ${emptyFields.join(', ')}`]);
      return;
    }

    setIsSubmitting(true);

    // Mock secure dispatch sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(true);
    }, 1200);
  };

  return (
    <main className="bg-[#0C0C0C] min-h-screen pt-32 pb-24 px-5 sm:px-6 lg:px-8 relative" id="contact-subpage">
      {/* Decorative gradients */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,rgba(0,0,0,0)_75%)] pointer-events-none filter blur-2xl" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[6px] text-[#C9A84C] uppercase block mb-3 font-semibold">
            Confidential Consultation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F2EDE4] font-medium tracking-tight">
            Contact Benjamin A. Baker
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#888880] tracking-widest uppercase mt-4">
            Get Straightforward Counsel and Aggressive Court Representation
          </p>
          <div className="w-16 h-[2.5px] bg-[#C9A84C] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-layout-grid">
          
          {/* Left Column: Form Intake (7 cols desktop) */}
          <div className="lg:col-span-7 bg-[#141414] border border-[rgba(201,168,76,0.18)] p-8 sm:p-10 shadow-2xl rounded-sm" id="contact-form-card">
            
            <AnimatePresence mode="wait">
              {!successMessage ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  id="intake-form"
                >
                  <div className="border-b border-white/[0.04] pb-5">
                    <h2 className="font-serif text-xl text-[#E8D08A] font-semibold tracking-wide">
                      Confidential Case Review Inquiry
                    </h2>
                    <p className="font-sans text-xs text-[#888880] mt-1.5 leading-relaxed">
                      Please supply accurate details below. Any information transmitted is strictly protected by Texas attorney-client privilege regulations.
                    </p>
                  </div>

                  {errors.length > 0 && (
                    <div className="border border-red-500/20 bg-red-500/10 p-4 flex items-start space-x-3 text-red-100 text-xs">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        {errors.map((err, i) => <p key={i}>{err}</p>)}
                      </div>
                    </div>
                  )}

                  {/* Row 1: Name / Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="font-sans text-[11px] font-semibold text-[#888880] uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-[#0C0C0C] border border-white/10 focus:border-[#C9A84C] py-3 px-4 text-[#F2EDE4] text-xs transition-colors focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="font-sans text-[11px] font-semibold text-[#888880] uppercase tracking-wider block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(903) 555-0100"
                        className="w-full bg-[#0C0C0C] border border-white/10 focus:border-[#C9A84C] py-3 px-4 text-[#F2EDE4] text-xs transition-colors focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email / Practice Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-sans text-[11px] font-semibold text-[#888880] uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#0C0C0C] border border-white/10 focus:border-[#C9A84C] py-3 px-4 text-[#F2EDE4] text-xs transition-colors focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="practiceArea" className="font-sans text-[11px] font-semibold text-[#888880] uppercase tracking-wider block">
                        Practice Area Specialty *
                      </label>
                      <select
                        name="practiceArea"
                        id="practiceArea"
                        value={formData.practiceArea}
                        onChange={handleInputChange}
                        className="w-full bg-[#0C0C0C] border border-white/10 focus:border-[#C9A84C] py-3 px-4 text-xs text-[#F2EDE4] transition-colors focus:outline-none"
                      >
                        <option value="family-law">Family Law & Divorce Actions</option>
                        <option value="personal-injury">Personal Injury / Collision Claims</option>
                        <option value="civil-litigation">Civil / Contract Litigation</option>
                        <option value="employment-law">Employment & Wage Violations</option>
                        <option value="other">Other Legal Advisory Requirement</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Case Urgency Level selection */}
                  <div className="space-y-2">
                    <span className="font-sans text-[11px] font-semibold text-[#888880] uppercase tracking-wider block">
                      Case Urgency Level
                    </span>
                    <div className="grid grid-cols-3 gap-3">
                      {(['low', 'medium', 'high'] as const).map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => handleUrgencyChange(level)}
                          className={`py-2.5 px-4 text-xs transition-all uppercase tracking-wider font-semibold border ${
                            formData.urgency === level
                              ? 'bg-[#C9A84C] text-[#0C0C0C] border-[#C9A84C]'
                              : 'bg-transparent border-white/10 text-[#888880] hover:border-white/20 hover:text-white'
                          }`}
                          id={`urgency-btn-${level}`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Message text */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="font-sans text-[11px] font-semibold text-[#888880] uppercase tracking-wider block">
                      Description of Your Legal Matter *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide high-level, summary details of your case context. Do not transmit confidential third-party credentials."
                      className="w-full bg-[#0C0C0C] border border-white/10 focus:border-[#C9A84C] py-3 px-4 text-[#F2EDE4] text-xs transition-colors focus:outline-none resize-none leading-relaxed"
                    />
                  </div>

                  {/* Row 5: Submit dispatch */}
                  <div className="pt-4 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-sans text-[10px] text-[#888880] flex items-center gap-1.5 leading-tight">
                      <ShieldCheck className="w-4 h-4 text-[#C9A84C] shrink-0" />
                      <span>Confidential submission protected by state counselor privilege laws.</span>
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#C9A84C] hover:bg-[#E8D08A] text-[#0C0C0C] font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 cursor-pointer disabled:opacity-50 transition-colors"
                      id="submit-form-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#0C0C0C] border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Dispatch Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-banner"
                  className="space-y-8 py-12 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  id="success-message"
                >
                  <div className="inline-flex items-center justify-center p-4 border border-[#C9A84C]/20 bg-[#C9A84C]/10 rounded-full mb-2">
                    <CheckCircle2 className="w-12 h-12 text-[#C9A84C]" />
                  </div>
                  <div className="space-y-3 max-w-lg mx-auto">
                    <h2 className="font-serif text-3xl text-[#E8D08A] font-semibold tracking-wide">
                      Counsel Request Logged
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-[#F2EDE4]/80 leading-relaxed">
                      Thank you. Benjamin A. Baker P.C. has received your confidential inquiry securely. Our legal coordinator is evaluating your case timelines against the Texas statutes of limitations immediately.
                    </p>
                    <p className="font-sans text-xs text-[#888880]">
                      We will attempt direct contact within <strong>one business day</strong> at standard phone number <strong>{formData.phone}</strong> or address <strong>{formData.email}</strong>.
                    </p>
                  </div>

                  {/* Submission logs sequence */}
                  <div className="border border-white/[0.04] bg-black/30 p-5 rounded-sm max-w-md mx-auto space-y-2.5 text-left font-sans text-[10px] text-[#888880]">
                    <span className="font-semibold text-[11px] text-[#E8D08A] tracking-[3px] uppercase block mb-1">DATA DISPATCH RECEIPTS:</span>
                    <p className="flex justify-between"><span>SSL Certified Connection Matched:</span> <span className="text-green-500 font-semibold">[SECURE]</span></p>
                    <p className="flex justify-between"><span>Legal Case Catalog ID:</span> <span className="text-[#F2EDE4]">BAB-PC-2026-{(Math.floor(Math.random() * 8999) + 1000)}</span></p>
                    <p className="flex justify-between"><span>Urgency Rating Recorded:</span> <span className="text-[#C9A84C] font-semibold uppercase">{formData.urgency}</span></p>
                    <p className="flex justify-between"><span>Destination Inbox Routed:</span> <span className="text-[#F2EDE4]">BenjaminABaker62@gmail.com</span></p>
                  </div>

                  <button
                    onClick={() => setSuccessMessage(false)}
                    className="border border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#C9A84C] font-sans text-xs font-semibold tracking-widest uppercase py-3 px-6 transition-colors"
                    id="submit-another-btn"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Office info sidebar (5 cols desktop) */}
          <div className="lg:col-span-5 space-y-8" id="contact-sidebar-info">
            
            {/* Sherman Office Details Card */}
            <div className="bg-[#141414] border border-[rgba(201,168,76,0.12)] p-8 space-y-6">
              <span className="font-sans text-xs tracking-[4px] text-[#C9A84C] uppercase block font-semibold">
                Offices Information
              </span>
              <h3 className="font-serif text-2xl text-[#E8D08A] font-semibold">
                Sherman Headquarters
              </h3>

              <div className="space-y-4 pt-2 text-xs sm:text-sm text-[#F2EDE4]/90 font-sans">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#F2EDE4] font-medium">Benjamin A. Baker P.C.</strong>
                    <span className="text-[#888880] block mt-1">416 S Crockett St</span>
                    <span className="text-[#888880] block">Sherman, TX 75090</span>
                    <span className="text-[#888880] text-[11px] italic block mt-1">Located steps from the Grayson County Courthouse.</span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#C9A84C] shrink-0" />
                  <div>
                    <span className="text-[#888880]">Direct Line:</span>{' '}
                    <a href="tel:9032717824" className="text-[#E8D08A] hover:text-[#C9A84C] hover:underline font-semibold font-mono">
                      (903) 271-7824
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#C9A84C] shrink-0" />
                  <div>
                    <span className="text-[#888880]">Confidential Email:</span>{' '}
                    <a href="mailto:BenjaminABaker62@gmail.com" className="text-[#E8D08A] hover:text-[#C9A84C] hover:underline">
                      BenjaminABaker62@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3 leading-relaxed">
                  <Clock className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#888880] block">Consultation Hours:</span>
                    <span className="text-[#F2EDE4] block mt-1">Monday – Friday</span>
                    <span className="text-[#888880] block text-[11px]">8:30 AM – 5:30 PM (Sat/Sun by appointment)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Advisory warning banner */}
            <div className="border-l-2 border-[#C9A84C] bg-[#141414] p-6 text-xs text-[#888880] leading-relaxed font-sans shadow-md">
              <strong className="text-[#E8D08A] block mb-2 font-serif text-sm tracking-wide">Attorneys Protection Mandate:</strong>
              Completing this secure contact form or sending email transmissions does not form an official attorney-client relationship. An official contract relation is established solely upon direct signature of a formal written Letter of Retainer.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
