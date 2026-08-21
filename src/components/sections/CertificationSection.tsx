'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Certification } from '@/types/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, Calendar, Clock, Key, CheckCircle2, FileCheck, X, Eye } from 'lucide-react';

export default function CertificationSection() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,255,136,0.2)]"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials Vault</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight"
          >
            CERTIFICATION <span className="gradient-text-emerald">VAULT</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </div>

        {/* Certificate Cards Vault Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedCert(cert)}
              data-cursor="SCAN"
              className="p-8 rounded-3xl glass-panel border-2 border-emerald-500/30 bg-slate-950/90 relative overflow-hidden shadow-[0_0_35px_rgba(0,255,136,0.1)] group hover:border-emerald-400 cursor-pointer transition-all flex flex-col justify-between"
            >
              {/* Vault Corner Indicators */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-emerald-500/20">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                  <Award className="w-4 h-4 animate-pulse" />
                  <span>VAULT RECORD #{cert.id.toUpperCase()}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  ID: {cert.certificateId}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-4">
                  {cert.issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  {cert.description}
                </p>

                {/* Metadata Pills */}
                <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-bold text-emerald-300">{cert.certificateId}</span>
                  </div>
                </div>
              </div>

              <div className="w-full py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-300 text-center uppercase tracking-wider group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                <span>INSPECT CERTIFICATE RECORD</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Holographic Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-2xl p-8 rounded-3xl glass-panel border-2 border-emerald-400 bg-slate-950 text-slate-100 shadow-[0_0_60px_rgba(0,255,136,0.3)] relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-xl border border-white/10 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500/30">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-400 flex items-center justify-center text-emerald-400">
                  <Award className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                    VERIFIED CREDENTIAL VAULT // ID: {selectedCert.certificateId}
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                    {selectedCert.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-900 border border-emerald-500/20 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">PROVIDER</span>
                    <span className="text-emerald-300 font-bold">{selectedCert.issuer}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">DATE / DURATION</span>
                    <span className="text-emerald-300 font-bold">{selectedCert.date} ({selectedCert.duration})</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {selectedCert.description}
                </p>

                <div>
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <FileCheck className="w-4 h-4" />
                    Curriculum & Core Modules Verified
                  </h4>
                  <div className="space-y-2">
                    {selectedCert.topics.map((tp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{tp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-3 rounded-2xl bg-emerald-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-widest shadow-lg shadow-emerald-500/30"
              >
                CLOSE VAULT RECORD
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
