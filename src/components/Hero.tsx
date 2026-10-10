import React, { useState } from 'react';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2, MessageCircle, Calendar, Phone } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { DOCTOR_INFO } from '../data/physioData';

interface HeroProps {
  onOpenBooking: (mode: 'home' | 'online') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [allPhotosFailed, setAllPhotosFailed] = useState(false);

  const photoCandidates = [
    '/images/dr-bansi.jpg',
    '/images/dr-bansi.png',
    '/images/dr-bansi.webp',
    '/images/dr-bansi.jpeg',
  ];

  const handlePhotoError = () => {
    if (photoIndex < photoCandidates.length - 1) {
      setPhotoIndex((prev) => prev + 1);
    } else {
      setAllPhotosFailed(true);
    }
  };

  const whatsappUrl = `https://wa.me/91${DOCTOR_INFO.phone}?text=${encodeURIComponent(
    'Hello Dr. Bansi, I would like to book a physiotherapy consultation.'
  )}`;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-8 pb-12 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden border-b border-stone-200/70">
      {/* Subtle organic background mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-emerald-100/40 via-stone-200/30 to-teal-50/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Personal Brand Proposition */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Clean unboxed metadata with typographic separators */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-emerald-900">
                <span className="font-bold">Dr. Bansi Kansara</span>
                <span className="text-emerald-300">·</span>
                <span>BPT Degree</span>
                <span className="text-emerald-300">·</span>
                <span className="hidden sm:inline">Advanced Fitness & Aerobics Instructor</span>
                <span className="text-emerald-300 hidden sm:inline">·</span>
                <span className="hidden md:inline">Certified Antenatal & Postnatal Specialist</span>
                <span className="text-emerald-300 hidden md:inline">·</span>
                <span className="flex items-center gap-1 text-emerald-800">
                  <MapPin className="w-3 h-3 text-emerald-600" />
                  Surat & Online
                </span>
              </div>
            </motion.div>

            {/* Display Headline with balanced wrap */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-stone-950 tracking-tight leading-[1.12] sm:leading-[1.08] text-balance mb-4 sm:mb-6"
            >
              From pain relief to{' '}
              <span className="text-emerald-850 font-serif-accent italic font-normal text-emerald-800">
                stronger movement.
              </span>
            </motion.h1>

            {/* Sub-headline description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed max-w-2xl mb-6 sm:mb-8"
            >
              Personalized one-on-one physiotherapy delivered directly to your home across{' '}
              <strong className="text-stone-900 font-semibold">Surat</strong>, alongside structured online
              rehabilitation. Combining musculoskeletal medicine with Yoga & Power Yoga, advanced aerobics, and women's health so you recover for good.
            </motion.p>

            {/* Clean, Mobile-Optimized Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4"
            >
              <motion.button
                whileHover={{ scale: 1.01, translateY: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenBooking('home')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-stone-900 hover:bg-emerald-900 rounded-xl transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Book Home Visit in Surat</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200/90 rounded-xl border border-emerald-300/80 transition-colors shadow-2xs"
                title="Direct WhatsApp consultation enquiry"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Enquiry</span>
              </motion.a>
            </motion.div>

            {/* Alternate Online booking link */}
            <motion.div variants={itemVariants} className="mb-8">
              <button
                onClick={() => onOpenBooking('online')}
                className="text-xs text-stone-500 hover:text-stone-900 font-medium inline-flex items-center gap-1.5 transition-colors underline underline-offset-4"
              >
                <span>Prefer a 1-on-1 Online Video Consultation?</span>
                <span className="text-emerald-800 font-semibold">Book online session →</span>
              </button>
            </motion.div>

            {/* Authentic Trust Proof Grid (Balanced 2x2 on mobile, 4 columns on desktop) */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-left"
            >
              <div className="bg-white/80 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-stone-200/60 sm:border-0">
                <div className="font-display text-xl sm:text-2xl font-bold text-stone-900 tabular-nums">
                  3+ Years
                </div>
                <div className="text-[11px] sm:text-xs text-stone-500 font-medium mt-0.5">
                  Clinical Practice
                </div>
              </div>

              <div className="bg-white/80 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-stone-200/60 sm:border-0">
                <div className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                  Surat Wide
                </div>
                <div className="text-[11px] sm:text-xs text-stone-500 font-medium mt-0.5">
                  Home Visits
                </div>
              </div>

              <div className="bg-white/80 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-stone-200/60 sm:border-0">
                <div className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                  1-on-1
                </div>
                <div className="text-[11px] sm:text-xs text-stone-500 font-medium mt-0.5">
                  Dedicated Attention
                </div>
              </div>

              <div className="bg-white/80 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-stone-200/60 sm:border-0">
                <div className="font-display text-xl sm:text-2xl font-bold text-emerald-800">
                  Active Care
                </div>
                <div className="text-[11px] sm:text-xs text-stone-500 font-medium mt-0.5">
                  Movement First
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Refined Clinician Visual Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="w-full max-w-md bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden p-5 sm:p-7 relative hover:shadow-md transition-shadow">
              {/* Top clinician badge */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-50 animate-pulse" />
                  <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                    Available for Booking
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-800 font-semibold bg-emerald-50 px-2 py-1 rounded">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Licensed BPT</span>
                </div>
              </div>

              {/* Clinician Card Hero Graphic - Guaranteed to NEVER break */}
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-stone-100 border border-stone-300/80 mb-5 flex flex-col justify-end p-4">
                {!allPhotosFailed ? (
                  <img
                    src={photoCandidates[photoIndex]}
                    alt={`${DOCTOR_INFO.name} - Physiotherapist & Advanced Fitness Instructor in Surat`}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={handlePhotoError}
                    loading="eager"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-stone-900 flex flex-col items-center justify-center p-6 text-center text-white">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400/40 flex items-center justify-center mb-3">
                      <span className="font-display font-extrabold text-2xl text-emerald-300">DB</span>
                    </div>
                    <div className="font-display font-bold text-lg text-white">Dr. Bansi Kansara</div>
                    <div className="text-xs text-emerald-200 mt-1">BPT · Advanced Fitness & Aerobics</div>
                    <div className="text-[11px] text-stone-300 mt-0.5">Certified Antenatal & Postnatal Specialist</div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/25 to-transparent pointer-events-none" />

                {/* Overlay card */}
                <div className="relative z-10 bg-white/95 backdrop-blur-xs rounded-lg p-2.5 sm:p-3 border border-stone-200 shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-stone-500 font-medium">Next available visit slot</div>
                    <div className="text-xs font-bold text-stone-900">Home Visit (Surat) or Online Video</div>
                  </div>
                  <button
                    onClick={() => onOpenBooking('home')}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-2"
                  >
                    Check Slot
                  </button>
                </div>
              </div>

              {/* Clinical Competency Badges */}
              <div className="space-y-2.5 mb-5 text-xs text-stone-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Home Visits in Surat:</strong> Comprehensive hands-on assessment, manual therapy, and customized home rehabilitation.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Yoga & Power Yoga:</strong> Advanced Aerobics, Power Yoga, Mat Pilates, and progressive strength reconditioning.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Women's Health:</strong> Certified Antenatal & Postnatal Specialist, pelvic core stability, and gentle postnatal diastasis care.
                  </span>
                </div>
              </div>

              {/* Direct Call / Contact Action */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <a
                  href={`tel:+91${DOCTOR_INFO.phone}`}
                  className="font-bold text-stone-900 hover:text-emerald-800 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Call {DOCTOR_INFO.phoneFormatted}</span>
                </a>

                <span className="text-[11px] text-stone-500 font-medium">
                  Doorstep care in Surat
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
