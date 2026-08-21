'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Database, Wrench, Cpu, Sparkles, Terminal } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  desc: string;
}

const ALL_TECHS: TechItem[] = [
  // Programming
  { name: 'C', category: 'PROGRAMMING', desc: 'System programming, pointers, low-level memory handling, data structures.' },
  { name: 'C++', category: 'PROGRAMMING', desc: 'Object-oriented programming, STL, performance-critical algorithm design.' },
  { name: 'Java', category: 'PROGRAMMING', desc: 'Core Java, OOP paradigms, multithreading, collections, NPTEL Certified.' },
  { name: 'Python', category: 'PROGRAMMING', desc: 'AI/ML scripting, NLP pipelines, data processing, backend logic.' },
  { name: 'SQL', category: 'PROGRAMMING', desc: 'Relational database querying, joins, index optimizations, transaction management.' },

  // Web
  { name: 'React.js', category: 'WEB', desc: 'Modern component architecture, hooks, state management, SPA routing.' },
  { name: 'Node.js', category: 'WEB', desc: 'Asynchronous event-driven server runtime, RESTful API endpoints.' },
  { name: 'Express.js', category: 'WEB', desc: 'Backend web application routing, middleware execution, JWT integration.' },
  { name: 'Flask', category: 'WEB', desc: 'Lightweight Python microframework for REST microservices & ML models.' },
  { name: 'JavaScript', category: 'WEB', desc: 'ES6+ async/await, DOM interaction, functional programming paradigms.' },
  { name: 'HTML5 & CSS3', category: 'WEB', desc: 'Semantic layout architecture, glassmorphism, responsive grid & flexbox.' },

  // Databases
  { name: 'MySQL', category: 'DATABASES', desc: 'Normalized relational database design, foreign keys, index indexing.' },
  { name: 'SQLite', category: 'DATABASES', desc: 'Self-contained embedded SQL database engine for desktop & mobile.' },
  { name: 'MongoDB', category: 'DATABASES', desc: 'Document-oriented NoSQL database schema, aggregation pipelines.' },

  // Tools
  { name: 'Git', category: 'TOOLS', desc: 'Distributed version control, branching, merging, commit histories.' },
  { name: 'GitHub', category: 'TOOLS', desc: 'Code repository hosting, pull requests, project collaboration.' },
  { name: 'VS Code', category: 'TOOLS', desc: 'Primary IDE, debugging, extension ecosystem, terminal integration.' },
  { name: 'Postman', category: 'TOOLS', desc: 'REST API testing, endpoint payload validation, environment variables.' },
  { name: 'Figma', category: 'TOOLS', desc: 'UI/UX prototyping, wireframing, component design systems.' },

  // Platforms
  { name: 'Linux', category: 'PLATFORMS', desc: 'Unix terminal commands, shell scripting, process management.' },
  { name: 'Web', category: 'PLATFORMS', desc: 'Cross-browser deployment, client-side rendering, SSG/SSR.' },
  { name: 'Windows', category: 'PLATFORMS', desc: 'Windows OS development environment, PowerShell tooling.' },
];

export default function TechConstellation() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  const categories = ['ALL', 'PROGRAMMING', 'WEB', 'DATABASES', 'TOOLS', 'PLATFORMS'];

  const filteredTechs =
    selectedCategory === 'ALL'
      ? ALL_TECHS
      : ALL_TECHS.filter((t) => t.category === selectedCategory);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            data-cursor="SELECT"
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold shadow-lg shadow-cyan-500/25 border border-cyan-400/50'
                : 'glass-panel text-slate-400 hover:text-white hover:border-cyan-500/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Floating Interactive Constellation Grid */}
      <div className="w-full max-w-5xl relative min-h-[340px] p-8 rounded-3xl glass-panel border border-white/10 flex flex-wrap items-center justify-center gap-3 bg-slate-950/60 backdrop-blur-2xl">
        {filteredTechs.map((tech) => {
          const isHovered = hoveredTech?.name === tech.name;
          return (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1, y: -4 }}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
              data-cursor="INSPECT"
              className={`relative px-4 py-2.5 rounded-2xl cursor-pointer transition-all duration-200 flex items-center gap-2 text-xs font-semibold ${
                isHovered
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.6)] border border-cyan-300'
                  : 'bg-slate-900/80 text-slate-200 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isHovered ? 'bg-white animate-ping' : 'bg-cyan-400'}`} />
              <span>{tech.name}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Info Panel */}
      <div className="w-full max-w-2xl mt-6 min-h-[90px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {hoveredTech ? (
            <motion.div
              key={hoveredTech.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full p-4 rounded-2xl glass-panel border border-cyan-500/30 bg-slate-900/90 text-center shadow-xl shadow-cyan-500/10"
            >
              <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{hoveredTech.category} • {hoveredTech.name}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-lg mx-auto">
                {hoveredTech.desc}
              </p>
            </motion.div>
          ) : (
            <div className="text-center text-xs text-slate-500 font-mono tracking-wider">
              Hover over any technology node in the constellation to inspect technical details
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
