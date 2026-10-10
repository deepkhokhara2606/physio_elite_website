import React, { useState } from 'react';
import { Activity, ShieldCheck, ChevronDown, Check, AlertCircle, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOVEMENT_PATTERNS } from '../data/physioData';
import { MovementPattern } from '../types';

interface DynamicMovementScreenProps {
  onOpenBooking: (mode: 'home' | 'online', condition?: string) => void;
}

interface PatternDetailProps {
  pattern: MovementPattern;
  onOpenBooking: (mode: 'home' | 'online', condition?: string) => void;
}

const PatternDetailContent: React.FC<PatternDetailProps> = ({ pattern, onOpenBooking }) => {
  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-700/80">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
            Step-by-Step Movement Check
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
            {pattern.name}
          </h3>
          <p className="text-xs text-stone-300 mt-0.5 font-medium">
            {pattern.subtitle}
          </p>
        </div>

        <div className="text-left sm:text-right">
          <span className="text-[10px] text-stone-400 block uppercase font-mono">Body Area Checked</span>
          <span className="text-xs font-semibold text-emerald-300">
            {pattern.focusArea}
          </span>
        </div>
      </div>

      {/* Movement Visual Photo Banner with Motto Quote */}
      {pattern.imageUrl && (
        <div className="relative aspect-16/9 sm:aspect-21/9 rounded-xl overflow-hidden border border-stone-700/80 bg-stone-900 group">
          <img
            src={pattern.imageUrl}
            alt={pattern.name}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/35 to-transparent pointer-events-none" />
          {pattern.quote && (
            <div className="absolute bottom-2.5 left-3 right-3 text-xs font-serif-accent italic text-emerald-200 drop-shadow-xs">
              {pattern.quote}
            </div>
          )}
        </div>
      )}

      <div className="space-y-4">
        {/* Assessment Goal */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Clinical Evaluation Goal</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-200 bg-stone-900/70 p-3 rounded-xl border border-stone-800 leading-relaxed">
            {pattern.assessmentGoal}
          </p>
        </div>

        {/* Common Dysfunction / Compensation */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-1.5">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>Common Dysfunction & Compensation Pattern</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-300 bg-stone-900/70 p-3 rounded-xl border border-stone-800 leading-relaxed">
            {pattern.commonDysfunction}
          </p>
        </div>

        {/* Corrective Rehabilitation Approach */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1.5">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Dr. Bansi's Targeted Rehab Approach</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-200 bg-stone-900/70 p-3 rounded-xl border border-stone-800 leading-relaxed">
            {pattern.rehabApproach}
          </p>
        </div>

        {/* Form cues */}
        <div className="pt-1">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
            Key Proprioceptive Cues:
          </div>
          <div className="flex flex-wrap gap-2">
            {pattern.keyCues.map((cue, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs text-stone-200 bg-stone-800 border border-stone-700 px-3 py-1.5 rounded-lg"
              >
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{cue}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Assessment CTA */}
      <div className="pt-4 border-t border-stone-700/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <span className="text-xs text-stone-300 text-center sm:text-left">
          Experiencing restriction or pain in this movement?
        </span>
        <button
          onClick={() => onOpenBooking('home', `Movement Assessment: ${pattern.name}`)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-stone-900 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-xs cursor-pointer"
        >
          <span>Book a Movement Screen</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export const DynamicMovementScreen: React.FC<DynamicMovementScreenProps> = ({ onOpenBooking }) => {
  const [selectedId, setSelectedId] = useState<string>(MOVEMENT_PATTERNS[0].id);

  const activePattern =
    MOVEMENT_PATTERNS.find((item) => item.id === selectedId) || MOVEMENT_PATTERNS[0];

  return (
    <section id="movement" className="py-20 sm:py-24 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10 sm:mb-14"
        >
          <div className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">
            Movement-Based Physiotherapy Assessment
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 6 Foundational Movement Screens
          </h2>
          <p className="text-stone-300 text-sm sm:text-base lg:text-lg mt-3 leading-relaxed">
            Pain is frequently a downstream symptom of compensation elsewhere. Dr. Bansi screens these six kinetic patterns during every initial consultation to identify root-cause biomechanical restrictions.
          </p>
        </motion.div>

        {/* MOBILE VIEW (lg:hidden): Inline Accordion so details expand directly under each tapped item! */}
        <div className="lg:hidden space-y-3">
          {MOVEMENT_PATTERNS.map((pattern, idx) => {
            const isSelected = pattern.id === selectedId;
            return (
              <div
                key={pattern.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isSelected
                    ? 'bg-stone-850 border-emerald-500/80 shadow-md ring-1 ring-emerald-500/40'
                    : 'bg-stone-800/80 border-stone-700/70 hover:bg-stone-800'
                }`}
              >
                <button
                  onClick={() => setSelectedId(isSelected ? '' : pattern.id)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-400 tabular-nums shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="text-sm font-bold tracking-tight text-white">
                        {pattern.name}
                      </div>
                      <div className="text-xs text-stone-400 mt-0.5 line-clamp-1">
                        {pattern.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isSelected ? 'rotate-180 text-emerald-400' : 'text-stone-400'
                    }`}
                  />
                </button>

                {/* Inline Expanded Content on Mobile */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5 pt-2 border-t border-stone-700/60 bg-stone-900/60">
                        <PatternDetailContent
                          pattern={pattern}
                          onOpenBooking={onOpenBooking}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* DESKTOP VIEW (hidden lg:grid): 2-Column Synchronized Inspector */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Pattern Selector List (Left Column) */}
          <div className="lg:col-span-5 space-y-2.5">
            {MOVEMENT_PATTERNS.map((pattern, idx) => {
              const isSelected = pattern.id === selectedId;
              return (
                <button
                  key={pattern.id}
                  onClick={() => setSelectedId(pattern.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-150 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-950/80 border-emerald-500/70 text-white shadow-xs'
                      : 'bg-stone-800/60 border-stone-700/60 text-stone-300 hover:bg-stone-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs font-bold text-emerald-400 tabular-nums">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="text-sm font-bold tracking-tight text-white">
                        {pattern.name}
                      </div>
                      <div className="text-xs text-stone-400">
                        {pattern.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? '-rotate-90 text-emerald-400' : 'text-stone-500 -rotate-90'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Kinetic Breakdown (Right Column) with AnimatePresence */}
          <div className="lg:col-span-7 bg-stone-850 rounded-2xl border border-stone-700 p-8 shadow-md overflow-hidden min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePattern.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <PatternDetailContent
                  pattern={activePattern}
                  onOpenBooking={onOpenBooking}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
