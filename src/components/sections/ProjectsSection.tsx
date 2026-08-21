'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import ProjectModal from '@/components/ui/ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Sparkles, CheckCircle2, ArrowRight, Cpu, Layers, Radio, Activity, Car, ShieldAlert, CpuIcon } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/SocialIcons';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [rfidScanned, setRfidScanned] = useState(false);

  const handleRfidScan = () => {
    setRfidScanned(true);
    setTimeout(() => setRfidScanned(false), 3000);
  };

  return (
    <section id="projects" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,255,136,0.2)]"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>3D Holographic Project Command Center</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-mono"
          >
            SYSTEM <span className="gradient-text-emerald">MODULES</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </div>

        {/* Holographic Project Modules Grid */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl glass-panel border-2 border-emerald-500/30 p-8 sm:p-12 overflow-hidden bg-slate-950/85 shadow-2xl hover:border-emerald-400 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Details */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-emerald-400 block mb-2">
                      MODULE 0{idx + 1} / {project.category}
                    </span>

                    <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-emerald-300 transition-colors font-mono">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="text-xs sm:text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider mb-6">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3">
                        Key Features & Capabilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Architecture flow for IoT */}
                    {project.architectureFlow && (
                      <div className="mb-8 p-4 rounded-2xl bg-slate-900 border border-emerald-500/30 font-mono text-xs">
                        <span className="text-[10px] text-emerald-400 font-bold uppercase block mb-2">
                          HARDWARE ARCHITECTURE FLOW
                        </span>
                        <div className="flex flex-wrap items-center gap-2 text-emerald-300 font-bold">
                          {project.architectureFlow.map((step, sIdx) => (
                            <React.Fragment key={sIdx}>
                              <span className="px-2 py-1 bg-emerald-950 rounded border border-emerald-500/40">
                                {step}
                              </span>
                              {sIdx < project.architectureFlow!.length - 1 && <span>↓</span>}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-slate-900 border border-emerald-500/20 text-emerald-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      data-cursor="INSPECT"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 text-white font-mono text-xs uppercase tracking-widest font-bold shadow-lg shadow-emerald-500/25 hover:opacity-95 transition-opacity border border-emerald-300/40"
                    >
                      <span>INSPECT FULL SYSTEM</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {project.iotSimulation && (
                      <button
                        onClick={handleRfidScan}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-950 border border-emerald-400 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 hover:text-slate-950 transition-colors"
                      >
                        <Radio className="w-4 h-4 animate-pulse" />
                        <span>SIMULATE RFID SCAN</span>
                      </button>
                    )}

                    <a
                      href={project.githubUrl || 'https://github.com/deepakvanka562-debug'}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="GITHUB"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass-panel border border-white/10 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      <GitHubIcon className="w-4 h-4 text-emerald-400" />
                      <span>GITHUB</span>
                    </a>
                  </div>
                </div>

                {/* Right Interactive Graphic */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => setActiveModalProject(project)}
                    data-cursor="VIEW"
                    className="w-full h-80 sm:h-96 rounded-3xl glass-panel border-2 border-emerald-500/30 bg-slate-950 p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-emerald-400 transition-all cursor-pointer shadow-2xl"
                  >
                    {/* Top Bar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                        HOLOGRAPHIC HUD // 0{idx + 1}
                      </span>
                    </div>

                    {/* Central Graphic */}
                    <div className="my-auto text-center space-y-4">
                      {project.id === 'ecodrive' && (
                        <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,255,136,0.3)] animate-pulse">
                          <Car className="w-10 h-10" />
                        </div>
                      )}

                      {project.id === 'emergency-vehicle' && (
                        <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 text-rose-400 border border-rose-400/40 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(244,63,94,0.3)] animate-pulse">
                          <ShieldAlert className="w-10 h-10" />
                        </div>
                      )}

                      {project.id === 'valute-ai' && (
                        <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 text-cyan-400 border border-cyan-400/40 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                          <CpuIcon className="w-10 h-10" />
                        </div>
                      )}

                      {project.id === 'smart-rfid-iot' && (
                        <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,255,136,0.3)] animate-pulse">
                          <Radio className="w-10 h-10" />
                        </div>
                      )}

                      {!['ecodrive', 'emergency-vehicle', 'valute-ai', 'smart-rfid-iot'].includes(project.id) && (
                        <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,255,136,0.3)]">
                          <Sparkles className="w-10 h-10" />
                        </div>
                      )}

                      <p className="text-xs font-mono text-emerald-300 tracking-wider uppercase">
                        {project.title} MODULE
                      </p>
                    </div>

                    {/* Simulated RFID Alert Banner */}
                    {project.iotSimulation && rfidScanned && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 rounded-xl bg-emerald-950 border border-emerald-400 text-[10px] font-mono font-bold text-emerald-300 text-center space-y-1"
                      >
                        <p className="text-emerald-400">CARD DETECTED: UID 8A:4F:92:C1</p>
                        <p className="text-white">STUDENT VERIFIED: DEEPAK VANKA</p>
                        <p className="text-emerald-300">ATTENDANCE RECORDED IN GOOGLE SHEETS</p>
                      </motion.div>
                    )}

                    <div className="w-full py-2 rounded-xl bg-slate-900/90 border border-white/10 text-[11px] font-mono font-bold text-slate-300 text-center uppercase tracking-wider">
                      CLICK TO OPEN FULL SYSTEM INTERFACE
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Project Detail Overlay Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
