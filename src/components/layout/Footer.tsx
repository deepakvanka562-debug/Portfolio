'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/ui/SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/90 py-12 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-black text-white uppercase tracking-wider">
            {portfolioData.personalInfo.name}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Computer Science & Engineering (AI & ML)
          </p>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GITHUB"
            className="p-2.5 rounded-full border border-white/10 bg-slate-900 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LINKEDIN"
            className="p-2.5 rounded-full border border-white/10 bg-slate-900 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            data-cursor="EMAIL"
            className="p-2.5 rounded-full border border-white/10 bg-slate-900 text-slate-300 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right Copyright */}
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span>© 2026 Deepak Vanka. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            aria-label="Scroll to top"
            className="p-2 rounded-full border border-white/10 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
