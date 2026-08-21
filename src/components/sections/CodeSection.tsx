'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { Terminal, GitBranch, GitCommit, FolderGit2, Star, ExternalLink, Code2 } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/SocialIcons';

export default function CodeSection() {
  const { personalInfo, projects } = portfolioData;

  return (
    <section id="code" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,255,136,0.2)]"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Codebase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-mono"
          >
            CODE <span className="gradient-text-emerald">COMMAND CENTER</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </div>

        {/* Terminal Header Shell */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto rounded-3xl glass-panel border-2 border-emerald-500/40 p-6 sm:p-8 bg-slate-950/95 font-mono shadow-[0_0_40px_rgba(0,255,136,0.15)] mb-12"
        >
          {/* Top Window Dots */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-emerald-500/20">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            </div>
            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
              GITHUB ARCHITECTURE // @{personalInfo.github}
            </span>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <span>$ git status</span>
            </div>
            <div className="pl-4 text-emerald-200 space-y-1">
              <p>SYSTEM: ACTIVE</p>
              <p>REPOSITORIES: ONLINE</p>
              <p>CODEBASE: LOADED</p>
              <p>BRANCH: main (origin/main)</p>
            </div>
          </div>
        </motion.div>

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((proj) => (
            <motion.a
              key={proj.id}
              href={proj.githubUrl || personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              data-cursor="GITHUB"
              className="p-6 rounded-3xl glass-panel border border-emerald-500/30 bg-slate-950/80 hover:border-emerald-400 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <FolderGit2 className="w-5 h-5" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">
                      {proj.category}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2 group-hover:text-emerald-300 transition-colors font-mono">
                  {proj.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4 line-clamp-2">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                {proj.techStack.slice(0, 4).map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded-lg bg-slate-900 border border-emerald-500/20 text-emerald-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
