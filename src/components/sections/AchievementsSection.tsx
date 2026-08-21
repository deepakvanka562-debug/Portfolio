'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { Trophy, Users, Shield, Star, CheckCircle } from 'lucide-react';

const ACHIEVEMENT_ICONS: Record<string, React.ElementType> = {
  'mechanical-workshop': Trophy,
  'community-connect': Users,
  'dsa-discipline': Shield,
};

export default function AchievementsSection() {
  const { achievements } = portfolioData;

  const numbers = ['01', '02', '03'];

  return (
    <section id="achievements" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Campus Roles</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight"
          >
            ACHIEVEMENTS & <span className="gradient-text-cyan">LEADERSHIP</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => {
            const IconComp = ACHIEVEMENT_ICONS[item.id] || Star;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                data-cursor="HONOR"
                className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-cyan-400/50 transition-all bg-slate-950/80 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity">
                      {numbers[idx]}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono font-bold text-indigo-400 mb-4 uppercase tracking-wider">
                    {item.roleOrResult}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>
                </div>

                {item.highlights && (
                  <div className="pt-4 border-t border-white/10 space-y-1.5">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
