'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Volume2, Bot } from 'lucide-react';
import { speakJarvisVoice, playJarvisBeep } from '@/utils/soundEffects';

const NAV_ITEMS = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'CERTIFICATES', href: '#certifications' },
  { name: 'CODE', href: '#code' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'RESUME', href: '#resume' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleReplayJarvis = () => {
    playJarvisBeep('activation');
    speakJarvisVoice('Welcome back. How can I assist you?');
    // Dispatch custom event to open Jarvis floating panel
    window.dispatchEvent(new CustomEvent('open-jarvis-panel'));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between p-2.5 rounded-3xl glass-nav border border-emerald-500/30 shadow-[0_0_30px_rgba(0,255,136,0.15)] backdrop-blur-2xl bg-slate-950/85">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            data-cursor="JARVIS"
            className="flex items-center gap-3 px-3 py-1 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform border border-emerald-300/40">
              <Cpu className="w-5 h-5 text-emerald-200 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-extrabold tracking-wider text-white uppercase group-hover:text-emerald-400 transition-colors">
                {portfolioData.personalInfo.name}
              </span>
              <span className="text-[9px] font-mono tracking-widest font-bold text-emerald-400">
                JARVIS HUD v4.2
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  data-cursor="NAV"
                  className={`relative px-3 py-1.5 text-[11px] font-mono tracking-wider font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-slate-400 hover:text-emerald-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 -z-10 shadow-[0_0_15px_rgba(0,255,136,0.5)] border border-emerald-300/50"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* 🔊 JARVIS Voice Replay Control Button */}
            <button
              onClick={handleReplayJarvis}
              data-cursor="JARVIS VOICE"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-[11px] font-bold hover:bg-emerald-500 hover:text-slate-950 transition-colors shadow-lg shadow-emerald-500/10"
              title="Replay JARVIS Voice Assistant"
            >
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>JARVIS</span>
            </button>

            <ThemeToggle />

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl border border-emerald-500/30 text-emerald-400 bg-slate-900"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="p-4 rounded-3xl glass-panel border border-emerald-500/30 bg-slate-950/95 space-y-2 backdrop-blur-2xl">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-2.5 rounded-xl text-xs font-mono font-semibold tracking-wider transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-500/30 to-teal-600/30 text-emerald-300 border border-emerald-500/30'
                        : 'text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
