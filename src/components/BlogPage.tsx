/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Calendar, ArrowLeft, ChevronRight, User, AlertTriangle } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost, RouteType } from '../types';

interface BlogPageProps {
  setRoute: (route: RouteType) => void;
}

export default function BlogPage({ setRoute }: BlogPageProps) {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = BLOG_POSTS.find((p) => p.id === selectedPostId);

  const handleReadPost = (id: string) => {
    setSelectedPostId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-[#0C0C0C] min-h-screen pt-32 pb-24 px-5 sm:px-6 lg:px-8 relative" id="blog-subpage">
      {/* Subtle decorative lights */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none filter blur-2xl" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {/* Individual Article Reader View */}
          {selectedPost ? (
            <motion.article
              key="reader-pane"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto space-y-8"
              id="blog-article-reader"
            >
              {/* Back CTA Button */}
              <button
                onClick={handleBackToList}
                className="inline-flex items-center space-x-2 text-[#C9A84C] hover:text-[#E8D08A] font-sans text-xs font-semibold tracking-widest uppercase py-2 cursor-pointer focus:outline-none"
                id="blog-reader-back-btn"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Legal Publications</span>
              </button>

              {/* Header meta */}
              <div className="space-y-4 pt-4 border-b border-white/[0.04] pb-6">
                <div className="flex flex-wrap gap-4 text-xs font-sans text-[#888880]">
                  <span className="flex items-center gap-1.5 font-medium uppercase text-[#C9A84C] tracking-wide">
                    {selectedPost.category}
                  </span>
                  <span className="text-white/10">•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C9A84C]/60" />
                    <span>{selectedPost.date}</span>
                  </span>
                  <span className="text-white/10">•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C9A84C]/60" />
                    <span>{selectedPost.readTime}</span>
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F2EDE4] font-medium leading-tight">
                  {selectedPost.title}
                </h1>

                <div className="flex items-center space-x-2.5 pt-2">
                  <div className="w-6 h-6 rounded-full bg-[#C9A84C]/25 text-[#E8D08A] border border-[#C9A84C]/30 flex items-center justify-center text-[10px] font-sans font-bold">
                    BAB
                  </div>
                  <span className="font-sans text-xs text-[#E8D08A] font-medium">
                    By {selectedPost.author} • Practice Principal
                  </span>
                </div>
              </div>

              {/* Main article text body */}
              <div className="font-sans text-xs sm:text-sm md:text-base text-[#888880] leading-relaxed space-y-6" id="blog-body-paragraphs">
                {selectedPost.content.map((para, count) => (
                  <p key={count} className="text-[#F2EDE4]/80">
                    {para}
                  </p>
                ))}
              </div>

              {/* Safe legal alert block */}
              <div className="bg-[#141414] border-l-2 border-[#C9A84C] p-6 text-xs text-[#888880] leading-relaxed font-sans shadow-md space-y-2 mt-12">
                <div className="flex items-center space-x-2 text-[#E8D08A] font-serif text-sm font-semibold tracking-wide">
                  <AlertTriangle className="w-4 h-4 text-[#C9A84C]" />
                  <span>Mandatory Texas Ad Board Notice:</span>
                </div>
                <p>
                  Any legal publications published within this journal are meant solely as educational guides for Sherman, Texas residents. They absolutely do not configure formalized legal consultation. Texas statutes are subject to immediate shifts — consult an attorney directly regarding active situations.
                </p>
              </div>

              {/* Consultation trigger box */}
              <div className="bg-[#141414] border border-[rgba(201,168,76,0.18)] p-8 text-center rounded-sm space-y-4">
                <span className="font-sans text-[11px] tracking-[4px] text-[#A8A8A0] uppercase block">
                  HAVE A RELATED LEGAL QUESTION?
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#E8D08A] font-medium max-w-md mx-auto">
                  Get straightforward answers directly from Benjamin A. Baker
                </h3>
                <button
                  onClick={() => setRoute('contact')}
                  className="bg-[#C9A84C] hover:bg-[#E8D08A] text-[#0C0C0C] font-sans text-xs font-bold tracking-widest uppercase py-3.5 px-8 transition-colors cursor-pointer"
                  id="blog-reader-cta-btn"
                >
                  Schedule A Free Consultation
                </button>
              </div>
            </motion.article>
          ) : (
            // Standard Article Lists View
            <motion.div
              key="list-pane"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
              id="blog-posts-lists"
            >
              {/* Journal Title header */}
              <div className="text-center mb-16">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F2EDE4] font-medium tracking-tight">
                  The Grayson County Legal Journal
                </h1>
                <p className="font-sans text-xs sm:text-sm text-[#888880] tracking-widest uppercase mt-4">
                  Straightforward Legal Insights & Sherman Court Updates
                </p>
                <div className="w-16 h-[2.5px] bg-[#C9A84C] mx-auto mt-6" />
              </div>

              {/* Articles Grid list */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-grid">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.id}
                    className="bg-[#141414] border border-[rgba(201,168,76,0.15)] rounded-sm p-6 flex flex-col justify-between hover:border-[#C9A84C]/40 transition-colors shadow-lg group relative"
                    id={`blog-card-${post.id}`}
                  >
                    <div>
                      {/* Category Label */}
                      <span className="font-sans text-[10px] tracking-[3px] text-[#C9A84C] uppercase block mb-3 font-semibold">
                        {post.category}
                      </span>

                      {/* Title */}
                      <h2 className="font-serif text-[#F2EDE4]/95 text-xl font-bold leading-normal mb-3 group-hover:text-[#E8D08A] transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Meta information row */}
                      <div className="flex space-x-3 text-[10px] text-[#888880] font-sans mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#C9A84C]/40" />
                          <span>{post.readTime}</span>
                        </span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>

                      {/* Excerpt Summary */}
                      <p className="font-sans text-xs text-[#888880] leading-relaxed mb-6 block lg:line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Action button */}
                    <button
                      onClick={() => handleReadPost(post.id)}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold font-sans text-[#C9A84C] hover:text-[#E8D08A] uppercase tracking-widest pt-2 cursor-pointer focus:outline-none"
                      id={`blog-card-btn-${post.id}`}
                    >
                      <span>Read Publication</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>
                  </article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
