'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Terminal } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/ui/SocialIcons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string; server?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      // Call private backend server route POST /api/contact
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setIsSubmitting(false);

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {
          // Fallback if confetti blocked
        }
      } else {
        setErrors({ server: data.error || 'Failed to transmit message. Please try again.' });
      }
    } catch {
      setIsSubmitting(false);
      setErrors({ server: 'Network error. Could not connect to private backend API.' });
    }
  };

  const contactCards = [
    {
      label: 'EMAIL TERMINAL',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: 'text-rose-400',
    },
    {
      label: 'GITHUB REPOSITORY',
      value: 'deepakvanka562-debug',
      href: personalInfo.githubUrl,
      icon: GitHubIcon,
      color: 'text-emerald-400',
    },
    {
      label: 'LINKEDIN NETWORK',
      value: 'vankadeepak',
      href: personalInfo.linkedinUrl,
      icon: LinkedInIcon,
      color: 'text-cyan-400',
    },
    {
      label: 'MOBILE VOICE',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      icon: Phone,
      color: 'text-amber-400',
    },
  ];

  return (
    <section id="contact" className="relative py-32 z-10 overflow-hidden">
      {/* Glowing Emerald Particle Orb Convergence */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-emerald-600/15 via-teal-600/15 to-cyan-600/15 blur-[150px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,255,136,0.2)]"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>AI Communication Terminal</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-mono"
          >
            INITIALIZE <span className="gradient-text-emerald">CONNECTION</span>
          </motion.h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mt-4 font-sans">
            Have an idea, opportunity, or interesting problem? Let&apos;s connect.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-4">
              DIRECT HUD ACCESS
            </h3>

            {contactCards.map((card) => {
              const IconComp = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  data-cursor="CONNECT"
                  className="p-5 rounded-3xl glass-panel border border-emerald-500/30 hover:border-emerald-400 flex items-center gap-4 group transition-all bg-slate-950/80 shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-slate-900 ${card.color} flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block">
                      {card.label}
                    </span>
                    <span className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-emerald-300 transition-colors truncate block">
                      {card.value}
                    </span>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Right Column: Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border-2 border-emerald-500/30 bg-slate-950/90 relative shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <h3 className="text-lg font-mono font-bold text-white uppercase tracking-tight">
                TRANSMIT MESSAGE TO PRIVATE API SERVER
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-6 font-sans">
              Enter details below. Form submits securely via server-side rate-limited API endpoints.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-mono font-bold text-white uppercase tracking-wider">
                  TRANSMISSION SUCCESSFUL
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto font-sans">
                  Your message has been processed through private server routes. Feel free to also send a direct email to{' '}
                  <span className="text-emerald-400 font-mono font-bold">{personalInfo.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  data-cursor="NEW"
                  className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xl bg-slate-900 text-white border border-emerald-500/30 hover:border-emerald-400 transition-colors mt-2"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-mono">
                {errors.server && (
                  <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-xs text-rose-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errors.server}</span>
                  </div>
                )}

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-emerald-400 mb-2">
                    INPUT NAME
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className={`w-full px-4 py-3 rounded-2xl bg-slate-900 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-emerald-500/30'
                    }`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-xs text-rose-400 mt-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-emerald-400 mb-2">
                    INPUT EMAIL
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className={`w-full px-4 py-3 rounded-2xl bg-slate-900 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-emerald-500/30'
                    }`}
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-xs text-rose-400 mt-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-emerald-400 mb-2">
                    INPUT MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Deepak, I'd like to discuss an opportunity..."
                    className={`w-full px-4 py-3 rounded-2xl bg-slate-900 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors ${
                      errors.message ? 'border-rose-500' : 'border-emerald-500/30'
                    }`}
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1 text-xs text-rose-400 mt-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor="TRANSMIT"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-widest shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2 border border-emerald-300/40"
                >
                  {isSubmitting ? (
                    <span>PROCESSING VIA SERVER API...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>TRANSMIT VIA API ROUTE</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
