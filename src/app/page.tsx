'use client';

import React from 'react';
import OpeningLoader from '@/components/ui/OpeningLoader';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import CustomCursor from '@/components/ui/CustomCursor';
import JarvisAssistant from '@/components/ui/JarvisAssistant';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationSection from '@/components/sections/CertificationSection';
import CodeSection from '@/components/sections/CodeSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 overflow-hidden font-sans">
      {/* Cinematic Opening Terminal Loader */}
      <OpeningLoader />

      {/* Top Thin Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Custom Contextual Cursor */}
      <CustomCursor />

      {/* Floating JARVIS AI Assistant Widget */}
      <JarvisAssistant />

      {/* Floating Glass Navigation Header */}
      <Navbar />

      {/* Portfolio Content Sections */}
      <div className="relative z-10 space-y-4">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationSection />
        <CodeSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
        <ResumeSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
