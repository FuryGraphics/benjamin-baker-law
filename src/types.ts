/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type RouteType = 
  | 'home' 
  | 'practice-areas' 
  | 'practice-areas/family-law' 
  | 'practice-areas/personal-injury' 
  | 'practice-areas/civil-litigation' 
  | 'practice-areas/employment-law' 
  | 'attorney' 
  | 'testimonials' 
  | 'blog' 
  | 'contact' 
  | 'privacy' 
  | 'disclaimer'
  | 'sherman-tx'
  | 'denison-tx'
  | 'pottsboro-tx'
  | 'whitesboro-tx'
  | 'whitewright-tx'
  | 'collinsville-tx'
  | 'grayson-county-tx'
  | 'html-sitemap';

export interface PracticeArea {
  id: string;
  title: string;
  summary: string;
  details: string[];
  casesText: string;
  iconName: string; // Lucide icon identifier
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  location: string;
  stars: number;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
  author: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  practiceArea: string;
  message: string;
  urgency: 'low' | 'medium' | 'high';
}
