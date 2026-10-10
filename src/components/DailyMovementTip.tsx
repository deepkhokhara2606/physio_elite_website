import React, { useState } from 'react';
import { Sparkles, RefreshCw, Share2, Check, Heart, ShieldAlert, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DAILY_MOVEMENT_TIPS } from '../data/physioData';

export const DailyMovementTip: React.FC = () => {
  const [tipIndex, setTipIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentTip = DAILY_MOVEMENT_TIPS[tipIndex];

  const handleNextTip = () => {
    setTipIndex((prev) => (prev + 1) % DAILY_MOVEMENT_TIPS.length);
  };

  const handleShare = () => {
    const textToShare = `💡 Dr. Bansi's Movement Tip: "${currentTip.title}" - ${currentTip.body} (PhysioElite Surat · Call/WhatsApp 9106387568)`;
    navigator.clipboard.writeText(textToShare);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-stone-50 to-emerald-950/10 border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl border border-stone-200 p-7 sm:p-10 shadow-xs relative overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-100/50 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-850 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  Dr. Bansi’s 60-Second Movement Tip
                </span>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                  {currentTip.tag}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTip.title}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mb-2">
                    {currentTip.title}
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                    {currentTip.body}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Doctor's personal quote anchor */}
              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-serif-accent italic text-emerald-900">
                <Heart className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>"Small daily habits protect your joints for a lifetime of pain-free living."</span>
              </div>
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex sm:flex-col items-center gap-2.5 w-full md:w-auto shrink-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNextTip}
                className="flex-1 md:w-44 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition-all border border-stone-300/80 shadow-2xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Another Daily Tip</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleShare}
                className="flex-1 md:w-44 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-emerald-950 bg-emerald-100/90 hover:bg-emerald-200/90 rounded-xl transition-all border border-emerald-300/80 shadow-2xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Copied for WhatsApp!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Share with Family</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
