import React from 'react';
import { Home, Video, CheckCircle2, ArrowRight, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { DOCTOR_INFO, SURAT_AREAS } from '../data/physioData';

interface AccessModesProps {
  onOpenBooking: (mode: 'home' | 'online') => void;
}

export const AccessModes: React.FC<AccessModesProps> = ({ onOpenBooking }) => {
  return (
    <section id="modes" className="py-20 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="text-xs font-bold tracking-widest text-emerald-800 uppercase mb-2">
            Care Delivered On Your Terms
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight text-balance">
            Two distinct ways to work with Dr. Bansi Kansara
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            Whether you need hands-on therapeutic rehabilitation at your doorstep in Surat or focused movement coaching wherever you are in the world.
          </p>
        </motion.div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Home Physiotherapy in Surat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between relative overflow-hidden group hover:border-emerald-800/40 transition-colors"
          >
            <div className="relative z-10">
              {/* Photo Banner */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-stone-100 border border-stone-200/80 shadow-xs">
                <img
                  src="/images/home-visit.jpg"
                  alt="Dr. Bansi Kansara home visit physiotherapy in Surat"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to high-res online image if file missing
                    e.currentTarget.src = "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-stone-950/20 pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded-md shadow-xs">
                    Doorstep Home Visit
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-[11px] font-bold text-white bg-emerald-700/90 backdrop-blur-md px-2.5 py-1 rounded-md shadow-xs">
                    All Areas of Surat
                  </span>
                </div>
              </div>

              {/* Motto quote */}
              <div className="text-xs font-serif-accent italic text-emerald-950 bg-emerald-50/90 border-l-2 border-emerald-700 px-3 py-2 rounded-r-md mb-4 leading-snug">
                "No traffic. No crowded clinic waiting rooms. Complete hands-on therapy right in your living room."
              </div>

              <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">
                Home Physiotherapy in Surat
              </h3>
              <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                Personalized, doctor-level care right in the comfort of your living room. Perfect for when pain makes traveling difficult or when you want therapy matched to your daily furniture and routine.
              </p>

              <div className="space-y-4 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  What Dr. Bansi brings to your home:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Thorough movement check:</strong> Dr. Bansi checks your joints, spine, and muscle strength in person.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Hands-on pain relief:</strong> Gentle joint mobilization, dry needling for tight knots, or kinesiology taping.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Real home guidance:</strong> Checking your bed, chair, and staircase so you move safely at home.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Simple exercise plan:</strong> Easy daily routines you can practice between visits to stay pain-free.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 mb-6 text-xs text-stone-600">
                <strong className="text-stone-900 block mb-1">Most suitable for:</strong>
                Sharp back pain, knee replacement recovery, knee arthritis in elderly parents, new mothers, and busy professionals across Surat.
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-stone-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                45–60 min per session
              </span>
              <button
                onClick={() => onOpenBooking('home')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-emerald-900 rounded-lg transition-colors shadow-2xs"
              >
                <span>Book a Home Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: 1-on-1 Online Physiotherapy Consultation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between relative overflow-hidden group hover:border-emerald-800/40 transition-colors"
          >
            <div className="relative z-10">
              {/* Photo Banner */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-stone-100 border border-stone-200/80 shadow-xs">
                <img
                  src="/images/telehealth.jpg"
                  alt="Online Physiotherapy Video Consultation"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to high-res online image if file missing
                    e.currentTarget.src = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-stone-950/20 pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded-md shadow-xs">
                    Live Video Consultation
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-[11px] font-bold text-white bg-teal-700/90 backdrop-blur-md px-2.5 py-1 rounded-md shadow-xs">
                    Anywhere via Video
                  </span>
                </div>
              </div>

              {/* Motto quote */}
              <div className="text-xs font-serif-accent italic text-teal-950 bg-teal-50/90 border-l-2 border-teal-700 px-3 py-2 rounded-r-md mb-4 leading-snug">
                "Doctor-guided movement correction & posture check from your screen, wherever you are."
              </div>

              <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">
                Online Physiotherapy Sessions
              </h3>
              <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                Connect directly with Dr. Bansi from anywhere via Google Meet or WhatsApp Video. Perfect for posture checkups, exercise coaching, and guided recovery routines.
              </p>

              <div className="space-y-4 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  What is included in an online session:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span><strong>Live movement screening:</strong> Dr. Bansi watches you bend, squat, and reach to pinpoint problem areas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span><strong>Instant form corrections:</strong> Clear verbal and visual cues so you do every exercise safely.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span><strong>Custom video plan:</strong> A clear, simple routine with short video guides tailored to you.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span><strong>WhatsApp follow-up:</strong> Message Dr. Bansi directly between sessions whenever you have questions.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 mb-6 text-xs text-stone-600">
                <strong className="text-stone-900 block mb-1">Most suitable for:</strong>
                Work-from-home neck & back stiffness, posture improvement, gym form correction, and Pilates core guidance.
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-stone-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                30–45 min online video
              </span>
              <button
                onClick={() => onOpenBooking('online')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors border border-stone-300/70"
              >
                <span>Book Online Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
