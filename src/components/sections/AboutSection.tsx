'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { User, Cpu, GraduationCap, Calendar } from 'lucide-react';

export default function AboutSection() {
  const { personalInfo, aboutText } = portfolioData;

  return (
    <section id="about" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <User className="w-3.5 h-3.5" />
            <span>Profile Identity</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-mono"
          >
            IDENTITY / <span className="gradient-text-emerald">ABOUT</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Statement Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none font-mono">
              BUILDING WITH <span className="gradient-text-emerald">CODE.</span>
              <br />
              THINKING WITH <span className="text-emerald-400">AI.</span>
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {aboutText}
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/10 font-mono">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-slate-400">Focus Area</h4>
                  <p className="text-xs font-bold text-slate-100">Software & AI/ML</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-slate-400">University</h4>
                  <p className="text-xs font-bold text-slate-100">SRM IST B.Tech</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Digital ID Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div
              data-cursor="INSPECT"
              className="w-full max-w-md p-6 sm:p-8 rounded-3xl glass-panel border-2 border-emerald-500/30 bg-slate-950/85 shadow-[0_0_40px_rgba(0,255,136,0.15)] relative overflow-hidden group hover:border-emerald-400/60 transition-all duration-300"
            >
              {/* Top Card Bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
                    DEEPAK.VANKA // DIGITAL PROFILE
                  </span>
                </div>
                <span className="text-[10px] text-slate-500">ID: SRM-2028-AI</span>
              </div>

              {/* Photo & Identity Details */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-emerald-400/60 shadow-xl shadow-emerald-500/20 shrink-0">
                  <Image
                    src="/deepak.jpg"
                    alt="Deepak Vanka"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent opacity-60 pointer-events-none animate-pulse-slow" />
                </div>

                <div className="text-center sm:text-left">
                  <h4 className="text-2xl font-black text-white uppercase tracking-tight font-mono">
                    {personalInfo.name}
                  </h4>
                  <p className="text-xs font-mono font-bold text-emerald-400 mt-1">
                    B.Tech CSE (AI & ML)
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    SRM Institute of Science & Technology
                  </p>
                </div>
              </div>

              {/* Metric Badges Grid */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 font-mono">
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-emerald-500/20 flex flex-col justify-between">
                  <span className="text-[9px] uppercase tracking-widest text-slate-400">SPECIALIZATION</span>
                  <span className="text-xs font-extrabold text-emerald-400 mt-1">AI & ML ENGINE</span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/80 border border-emerald-500/20 flex flex-col justify-between">
                  <span className="text-[9px] uppercase tracking-widest text-slate-400">BATCH DURATION</span>
                  <span className="text-xs font-extrabold text-emerald-300 mt-1">2024 — 2028</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
