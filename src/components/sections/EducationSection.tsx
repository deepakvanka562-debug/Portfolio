'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic History</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight"
          >
            ACADEMIC <span className="gradient-text-cyan">TIMELINE</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 -translate-x-1/2 hidden sm:block shadow-[0_0_10px_#00F0FF]" />
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 sm:hidden" />

          <div className="space-y-12">
            {education.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)] z-20">
                    <BookOpen className="w-4 h-4 text-cyan-300" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0">
                    <div
                      data-cursor="TIMELINE"
                      className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-cyan-400/50 transition-all bg-slate-950/80 shadow-xl"
                    >
                      <span className="inline-block px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
                        {edu.period}
                      </span>

                      <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-1">
                        {edu.institution}
                      </h3>

                      <h4 className="text-xs font-mono font-bold text-cyan-400 mb-4">
                        {edu.degree}
                      </h4>

                      <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4 pb-4 border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-amber-400" />
                          <span className="font-bold text-amber-300 font-mono">
                            {edu.score}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-rose-400" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      {edu.details && (
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {edu.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-cyan-400 font-bold mt-0.5">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
