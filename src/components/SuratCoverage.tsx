import React from 'react';
import { MapPin, CheckCircle2, Home, ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { SURAT_AREAS } from '../data/physioData';

interface SuratCoverageProps {
  onOpenBooking: (mode: 'home') => void;
}

export const SuratCoverage: React.FC<SuratCoverageProps> = ({ onOpenBooking }) => {
  return (
    <section id="coverage" className="py-24 bg-stone-100/50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Geographic Reach */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="text-xs font-bold tracking-widest text-emerald-800 uppercase mb-2">
              Doorstep Healthcare in Surat
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight mb-4">
              Home Physiotherapy across all areas of Surat
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              Why deal with busy traffic, long auto rides, or clinic stairs when your back or knee hurts? Dr. Bansi brings clinical assessment tools, hands-on pain relief, and gentle exercise equipment directly to your living room.
            </p>

            {/* Photo Banner with Quote */}
            <div className="relative aspect-16/9 rounded-2xl overflow-hidden mb-6 border border-stone-200 shadow-xs group">
              <img
                src="/images/home-visit.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80';
                }}
                alt="Home visit physiotherapy care in Surat living room"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="text-xs font-serif-accent italic text-emerald-200">
                  "Your home, your comfort. High-standard medical care right where you relax."
                </div>
                <div className="text-[11px] font-semibold text-stone-300 mt-0.5">
                  Available in all societies and bungalows across Surat
                </div>
              </div>
            </div>

            {/* Areas Tag Grid */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                <span>Popular Surat Neighborhoods We Visit:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {SURAT_AREAS.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-stone-700 bg-stone-50 border border-stone-200/80 px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    {area}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500">
                Live in another society or apartment in Surat? Yes, Dr. Bansi visits any residential area in Surat!
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenBooking('home')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-stone-900 hover:bg-emerald-900 rounded-xl transition-colors shadow-2xs"
            >
              <span>Book a Home Visit in Surat</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Right Column: Home Visit Preparation Guide in everyday language */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-3xl border border-stone-200 p-7 sm:p-9 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                <Home className="w-4 h-4 text-emerald-800" />
                <span>Simple Checklist</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-stone-900 mb-3">
                4 Easy steps to prepare before Dr. Bansi arrives
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                To make the most of your 45–60 minute session, here is what you can keep ready:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200/70">
                  <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">
                      Comfortable, Loose Clothes
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Wear comfortable track pants, shorts, or a t-shirt so Dr. Bansi can easily check your knee, shoulder, or back.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200/70">
                  <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">
                      A Clean Floor Space or Firm Bed
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      A well-lit room with space for a yoga mat or a firm bed where you can lie down comfortably during treatment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200/70">
                  <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">
                      Any Past X-Rays or Doctor Reports
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      If you have previous doctor prescriptions, X-rays, or MRI reports, keep them handy so Dr. Bansi can review them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200/70">
                  <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">
                      Quiet, Relaxing Room
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      A calm setting helps you focus on breathing, muscle release, and learning each exercise with complete ease.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200/70 text-xs text-emerald-950 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  <strong>Doctor’s Promise:</strong> Gentle hands, attentive care, and zero rushing during your visit.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
