'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import Hero3DCanvas from '@/components/ui/Hero3DCanvas';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Cpu, Activity, Terminal, ShieldCheck, Database } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/ui/SocialIcons';

export default function HeroSection() {
  const { personalInfo } = portfolioData;

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden z-10">
      {/* Three.js Interactive Particle Mesh Background */}
      <Hero3DCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* System Status Banner */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>AI SYSTEM ONLINE • SRM IST</span>
            </div>

            {/* Name Typography */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase mb-4 font-sans leading-none">
              DEEPAK <span className="gradient-text-emerald">VANKA</span>
            </h1>

            {/* Role Subtitle */}
            <p className="text-sm sm:text-lg font-mono font-bold tracking-widest text-emerald-400 uppercase max-w-2xl mb-6">
              Software Engineer | AI/ML Developer | Full-Stack Developer
            </p>

            {/* Short Statement */}
            <blockquote className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-sans font-normal border-l-2 border-emerald-500/40 pl-4 text-left">
              &quot;Building intelligent software systems, AI-powered applications, and real-world technology solutions.&quot;
            </blockquote>

            {/* System Status HUD Box */}
            <div className="w-full max-w-xl p-4 rounded-2xl glass-panel border border-emerald-500/30 bg-slate-950/80 mb-8 font-mono text-xs grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div>
                <span className="text-[9px] uppercase text-slate-400 block">SYSTEM STATUS</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              <div>
                <span className="text-[9px] uppercase text-slate-400 block">AI ENGINE</span>
                <span className="text-cyan-400 font-bold mt-0.5 block">ACTIVE</span>
              </div>

              <div>
                <span className="text-[9px] uppercase text-slate-400 block">PROJECTS</span>
                <span className="text-amber-400 font-bold mt-0.5 block">6+ MODULES</span>
              </div>

              <div>
                <span className="text-[9px] uppercase text-slate-400 block">TECH STACK</span>
                <span className="text-emerald-300 font-bold mt-0.5 block truncate">AI • C++ • Java • Py</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                data-cursor="EXPLORE"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 text-white font-mono text-xs uppercase tracking-widest font-bold shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(0,255,136,0.6)] hover:scale-[1.03] transition-all duration-300 border border-emerald-300/40"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-emerald-200" />
              </a>

              <a
                href="/resume.pdf"
                download="Deepak_Vanka_Resume.pdf"
                data-cursor="DOWNLOAD"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl glass-panel border border-emerald-500/30 text-emerald-200 font-mono text-xs uppercase tracking-widest font-bold hover:border-emerald-400 hover:bg-slate-900/80 transition-all duration-300 shadow-xl"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Social handles */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel border border-white/10 text-xs font-mono text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-all"
              >
                <GitHubIcon className="w-4 h-4 text-emerald-400" />
                <span>deepakvanka562-debug</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel border border-white/10 text-xs font-mono text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-all"
              >
                <LinkedInIcon className="w-4 h-4 text-emerald-400" />
                <span>vankadeepak</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Photo with Holographic HUD Frame & Floating AI Data Panels */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 sm:w-88 h-72 sm:h-88 flex items-center justify-center">
              {/* Outer Rotating HUD Ring 1 */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-400/40 animate-spin-slow pointer-events-none" />

              {/* Inner Rotating HUD Ring 2 */}
              <div className="absolute -inset-4 rounded-full border border-emerald-500/30 border-t-emerald-400 border-b-cyan-400 animate-spin-reverse pointer-events-none" />

              {/* Technical Coordinates Grid Lines */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-emerald-400/70 tracking-widest uppercase">
                LAT: 12.8231° N // LON: 80.0442° E
              </div>

              {/* Glowing Outer Hexagon Frame Container */}
              <div
                data-cursor="DEEPAK"
                className="relative w-64 sm:w-80 h-64 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-emerald-500/50 via-teal-500/30 to-cyan-500/50 shadow-[0_0_50px_rgba(0,255,136,0.35)] group overflow-hidden border-2 border-emerald-400/60"
              >
                {/* Photo image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-900 shadow-2xl">
                  <Image
                    src="/deepak.jpg"
                    alt="Deepak Vanka"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Holographic scanning overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent opacity-60 pointer-events-none animate-pulse-slow" />
                </div>
              </div>

              {/* Floating AI HUD Data Panel 1 (Top Left) */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-6 px-3.5 py-2 rounded-2xl glass-panel border border-emerald-400/50 bg-slate-950/90 shadow-[0_0_20px_rgba(0,255,136,0.2)] text-[10px] font-mono font-bold text-emerald-300 flex items-center gap-2"
              >
                <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>DEEPAK.VANKA // PROFILE</span>
              </motion.div>

              {/* Floating AI HUD Data Panel 2 (Bottom Right) */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-6 px-3.5 py-2 rounded-2xl glass-panel border border-emerald-400/50 bg-slate-950/90 shadow-[0_0_20px_rgba(0,255,136,0.2)] text-[10px] font-mono font-bold text-emerald-300 flex items-center gap-2"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>SYSTEM CORE: OPTIMAL</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
