'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Cpu, FolderGit2, Briefcase, Rocket } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    phase: '01 / EDUCATION',
    title: 'SRM Institute of Science & Technology',
    subtitle: 'B.Tech CSE (AI & ML) • 2024 — 2028',
    desc: 'Specializing in Artificial Intelligence, Machine Learning algorithms, Data Structures, and Software Engineering.',
    icon: GraduationCap,
  },
  {
    phase: '02 / SKILLS CORE',
    title: 'Technical Mastery & Systems Architecture',
    subtitle: 'C, C++, Java, Python, React.js, MySQL, IoT',
    desc: 'Mastering foundational algorithms, system programming, full-stack frameworks, relational databases, and microcontrollers.',
    icon: Cpu,
  },
  {
    phase: '03 / PROJECTS MODULES',
    title: 'Applied Engineering Systems',
    subtitle: 'EcoDrive, Emergency Prediction, Valute AI, Smart RFID IoT',
    desc: 'Engineering 6+ practical AI, IoT, vehicle analytics, and full-stack web platforms.',
    icon: FolderGit2,
  },
  {
    phase: '04 / INTERNSHIPS & PRACTICAL',
    title: 'Industry & Leadership Collaborations',
    subtitle: 'Open Source & Technical Challenge Projects',
    desc: 'Collaborating on real-world engineering solutions, code optimization, and technical workshops.',
    icon: Briefcase,
  },
  {
    phase: '05 / CAREER GOAL',
    title: 'Top Technology & Software Roles',
    subtitle: 'Software Engineering & AI/ML Development',
    desc: 'Targeting high-impact Software Engineering and AI/ML positions at Microsoft, Qualcomm, Google, NVIDIA, Amazon, and Deloitte.',
    icon: Rocket,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,255,136,0.2)]"
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>Developer Journey Map</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-mono"
          >
            EXPERIENCE & <span className="gradient-text-emerald">JOURNEY</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </div>

        {/* Animated Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Emerald Glowing Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 -translate-x-1/2 hidden sm:block shadow-[0_0_10px_#00FF88]" />
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 sm:hidden" />

          <div className="space-y-12">
            {TIMELINE_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-slate-950 border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.6)] z-20">
                    <IconComp className="w-4 h-4 text-emerald-300" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0">
                    <div
                      data-cursor="JOURNEY"
                      className="p-6 sm:p-8 rounded-3xl glass-panel border border-emerald-500/30 hover:border-emerald-400 transition-all bg-slate-950/80 shadow-xl"
                    >
                      <span className="inline-block px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
                        {step.phase}
                      </span>

                      <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-1 font-mono">
                        {step.title}
                      </h3>

                      <h4 className="text-xs font-mono font-bold text-cyan-400 mb-3">
                        {step.subtitle}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {step.desc}
                      </p>
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
