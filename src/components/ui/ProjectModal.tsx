'use client';

import React, { useEffect } from 'react';
import { Project } from '@/types/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Lightbulb, UserCheck, ShieldAlert } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-white/10 dark:border-white/10 light:border-slate-300 bg-slate-900/95 dark:bg-slate-900/95 light:bg-white p-6 sm:p-8 shadow-2xl z-10 scrollbar-thin"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full border border-white/10 dark:border-white/10 border-slate-200 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-slate-800/50 hover:bg-slate-800 transition-colors"
            aria-label="Close details modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900 mb-1">
              {project.title}
            </h2>
            <p className="text-base font-medium text-cyan-400 dark:text-cyan-400 light:text-indigo-600">
              {project.subtitle}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-white/10 dark:border-white/10 light:border-slate-200">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-slate-800/80 hover:bg-slate-700 text-white dark:text-white light:bg-slate-100 light:text-slate-800 border border-white/10 transition-colors"
              >
                <GitHubIcon className="w-4 h-4 text-cyan-400" />
                View Code on GitHub
              </a>
            )}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20 hover:opacity-95 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                Live Application
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-slate-800/30 text-slate-500 border border-slate-700/40 cursor-not-allowed"
                title="Live preview URL configured for deployment"
              >
                <ExternalLink className="w-4 h-4 opacity-50" />
                Live Demo (Local / Staging)
              </button>
            )}
          </div>

          {/* Modal Grid Sections */}
          <div className="space-y-6">
            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-850/40 dark:bg-slate-800/30 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200">
                <div className="flex items-center gap-2 text-rose-400 dark:text-rose-400 light:text-rose-600 font-semibold mb-2 text-sm">
                  <ShieldAlert className="w-4 h-4" />
                  Problem Statement
                </div>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-850/40 dark:bg-slate-800/30 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200">
                <div className="flex items-center gap-2 text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-semibold mb-2 text-sm">
                  <Lightbulb className="w-4 h-4" />
                  Engineering Solution
                </div>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="flex items-center gap-2 text-base font-semibold text-white dark:text-white light:text-slate-900 mb-3">
                <Layers className="w-4 h-4 text-cyan-400" />
                Key Features & Functionality
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contribution */}
            <div className="p-4 rounded-xl bg-indigo-950/20 dark:bg-indigo-950/20 light:bg-indigo-50/70 border border-indigo-500/20">
              <div className="flex items-center gap-2 text-indigo-400 dark:text-indigo-400 light:text-indigo-700 font-semibold mb-2 text-sm">
                <UserCheck className="w-4 h-4" />
                My Contribution & Technical Scope
              </div>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-800 leading-relaxed">
                {project.contribution}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="flex items-center gap-2 text-base font-semibold text-white dark:text-white light:text-slate-900 mb-3">
                <Cpu className="w-4 h-4 text-indigo-400" />
                Technology Stack & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-800/80 text-slate-300 dark:text-slate-300 light:bg-slate-100 light:text-slate-700 border border-white/10 dark:border-white/10 light:border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
