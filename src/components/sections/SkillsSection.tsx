'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle2, Activity, Zap } from 'lucide-react';

export default function SkillsSection() {
  const { skills } = portfolioData;

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,255,136,0.2)]"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>AI System Competencies</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight"
          >
            TECHNICAL <span className="gradient-text-emerald">SYSTEMS</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </div>

        {/* Skill Category HUD Cards */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {skills.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="p-8 rounded-3xl glass-panel border-2 border-emerald-500/30 bg-slate-950/80 shadow-[0_0_35px_rgba(0,255,136,0.1)] relative"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500/30">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold text-white uppercase tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Grid of Skill Radar HUD Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.skills.map((sk) => {
                  const isHovered = hoveredSkill === sk.name;
                  return (
                    <motion.div
                      key={sk.name}
                      onMouseEnter={() => setHoveredSkill(sk.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.02 }}
                      data-cursor="CAPABILITY"
                      className={`p-4 rounded-2xl transition-all duration-200 border ${
                        isHovered
                          ? 'bg-slate-900 border-emerald-400 shadow-[0_0_20px_rgba(0,255,136,0.25)]'
                          : 'bg-slate-900/60 border-white/10 hover:border-emerald-500/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-emerald-400" />
                          <span className="text-sm font-bold text-white font-mono">{sk.name}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          {sk.level}%
                        </span>
                      </div>

                      {sk.categoryLabel && (
                        <p className="text-[11px] text-slate-400 mb-2 font-sans line-clamp-1">
                          {sk.categoryLabel}
                        </p>
                      )}

                      {/* Animated HUD progress line */}
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-emerald-500/20">
                        <motion.div
                          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${sk.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
