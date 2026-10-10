import React, { useState } from 'react';
import { Stethoscope, Activity, HeartHandshake, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { DOCTOR_INFO, CREDENTIAL_GROUPS } from '../data/physioData';

export const AboutSection: React.FC = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [allPhotosFailed, setAllPhotosFailed] = useState(false);

  const aboutCandidates = [
    '/images/about-bansi.jpg',
    '/images/about-bansi.png',
    '/images/about-bansi.webp',
    '/images/dr-bansi.jpg',
    '/images/dr-bansi.webp',
  ];

  const handlePhotoError = () => {
    if (photoIndex < aboutCandidates.length - 1) {
      setPhotoIndex((prev) => prev + 1);
    } else {
      setAllPhotosFailed(true);
    }
  };

  return (
    <section id="about" className="py-10 sm:py-16 lg:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Visible at top on all screens so mobile screen is never empty */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Meet Dr. Bansi Kansara</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-stone-950 tracking-tight leading-tight">
            Physiotherapist, Advanced Fitness & Aerobics Instructor
          </h2>
          <p className="text-stone-600 text-xs sm:text-base mt-2">
            Surat Home Visits & Online Care · BPT Degree · Certified Antenatal & Postnatal Specialist
          </p>
        </motion.div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
          {/* Left Column: Doctor Consultation Photo & Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-stone-50 rounded-3xl border border-stone-200 p-5 sm:p-7 shadow-xs relative overflow-hidden group">
              {/* Doctor Consultation Visual Photo - Balanced portrait framing */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 sm:mb-6 bg-stone-200 border border-stone-300/80 shadow-xs">
                {!allPhotosFailed ? (
                  <img
                    src={aboutCandidates[photoIndex]}
                    alt="Dr. Bansi Kansara - Physiotherapist & Advanced Fitness Instructor in Surat"
                    className="w-full h-full object-cover object-[center_46%] transition-transform duration-300 group-hover:scale-102"
                    onError={handlePhotoError}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-emerald-900 to-stone-900 flex flex-col items-center justify-center p-6 text-center text-white">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400/40 flex items-center justify-center mb-3">
                      <span className="font-display font-extrabold text-2xl text-emerald-300">DB</span>
                    </div>
                    <div className="font-display font-bold text-lg text-white">Dr. Bansi Kansara</div>
                    <div className="text-xs text-emerald-200 mt-1">BPT · Advanced Fitness & Aerobics</div>
                    <div className="text-[11px] text-stone-300 mt-0.5">Certified Antenatal & Postnatal Specialist</div>
                  </div>
                )}

                {/* Soft gradient only at bottom edge to protect visibility of clothes and face */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent pointer-events-none" />

                {/* Refined Glassmorphic Clinician Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 sm:py-2 rounded-xl bg-stone-950/80 backdrop-blur-md border border-white/20 text-white shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 ring-2 ring-emerald-400/30" />
                    <div>
                      <div className="text-xs font-bold leading-tight tracking-wide text-white drop-shadow-xs">
                        Dr. Bansi Kansara · BPT
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-emerald-200 font-medium leading-tight mt-0.5">
                        Surat Home Visits & Online Care
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Our Core Motto</span>
              </div>
              <h3 className="font-display text-lg sm:text-2xl font-bold text-stone-950 mb-3 leading-snug">
                "We don't just treat your symptoms — we teach your body how to stay strong forever."
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5 sm:mb-6">
                Most ordinary clinics stop therapy the day acute pain calms down. But without restoring joint flexibility and strengthening your core muscles, pain comes right back. We give you lasting freedom.
              </p>

              {/* Easy-to-understand recovery continuum */}
              <div className="p-4 bg-white rounded-2xl border border-stone-200/80 space-y-2">
                <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Your 4 Steps to Freedom:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center text-[11px] font-bold text-emerald-900">
                  <span className="bg-emerald-50 border border-emerald-200/80 py-1.5 rounded-lg">1. Stop Pain</span>
                  <span className="bg-emerald-50 border border-emerald-200/80 py-1.5 rounded-lg">2. Ease Stiff Joints</span>
                  <span className="bg-emerald-50 border border-emerald-200/80 py-1.5 rounded-lg">3. Build Strength</span>
                  <span className="bg-emerald-50 border border-emerald-200/80 py-1.5 rounded-lg">4. Move Freely</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative in warm, everyday words */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Inspiring motto quote */}
            <div className="text-sm font-serif-accent italic text-emerald-950 bg-emerald-50/80 border-l-3 border-emerald-700 p-3.5 rounded-r-xl mb-6">
              "Healing starts when you feel understood. When I visit your home or meet you online, I listen first, treat gently, and guide you with total care."
            </div>

            <div className="space-y-4 text-sm sm:text-base text-stone-600 leading-relaxed mb-8">
              <p>
                {DOCTOR_INFO.aboutBio}
              </p>
              <p>
                As a <strong>Physiotherapist (BPT)</strong>, <strong>Advanced Fitness & Aerobics Instructor</strong>, <strong>Certified Antenatal & Postnatal Specialist</strong>, and <strong>Mat Pilates Coach</strong>, my sessions do not simply leave you lying alone with cold gel pads. Every visit is an active, friendly learning experience where you understand how your joints work and regain total confidence in your daily steps.
              </p>
            </div>

            {/* Why Patients Love Dr. Bansi */}
            <div className="border-t border-stone-200 pt-6">
              <div className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-4">
                Why Patients Across Surat Recommend Dr. Bansi:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>3+ Years Clinical Experience:</strong> Focused on back pain, neck stiffness, knee recovery & sports rehab.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Patient-First Listening:</strong> Dedicated 1-on-1 assessment with zero rush before starting any treatment.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Doorstep Care in Surat:</strong> Convenient home visits across every neighborhood in Surat.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Active & Safe Recovery:</strong> Gentle exercises tailored to your age, body type, and daily routine.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Credentials by 3 Pillars */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="text-xs font-bold tracking-widest text-emerald-800 uppercase mb-2">
              Recognized Credentials & Training
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
              Qualified medical and movement qualifications
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Bridging professional medical physiotherapy with modern Pilates, pregnancy wellness, and functional strength.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CREDENTIAL_GROUPS.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -2 }}
                className="bg-stone-50 rounded-2xl border border-stone-200/90 p-6 flex flex-col justify-between hover:border-emerald-800/30 transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {idx === 0 && <Stethoscope className="w-5 h-5 text-emerald-800" />}
                    {idx === 1 && <Activity className="w-5 h-5 text-emerald-800" />}
                    {idx === 2 && <HeartHandshake className="w-5 h-5 text-emerald-800" />}
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      {group.pillar}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-stone-900 mb-4">
                    {group.title}
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
