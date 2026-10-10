import React from 'react';
import { ClipboardCheck, Sparkles, Activity, Trophy, MessageSquare, Calendar, Stethoscope, HeartPulse, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PatientJourneyProps {
  onOpenBooking: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Finding What Hurts',
      subtitle: 'Listening & Gentle Check',
      imageUrl: '/images/journey/step1.jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80',
      quote: '"We listen to your story first before touching any joint."',
      description: 'We sit down with you, listen closely to when and where it hurts, and gently check how your spine and joints move to find the true root cause.',
    },
    {
      num: '02',
      title: 'Gentle Hands-On Relief',
      subtitle: 'Targeted Muscle Release',
      imageUrl: '/images/journey/step2.jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=500&q=80',
      quote: '"Calming tight muscle knots so your body can breathe."',
      description: 'Gentle joint mobilizations, dry needling for stubborn muscle knots, cupping, or therapeutic taping to quickly calm down spasms and ease pain.',
    },
    {
      num: '03',
      title: 'Safe Strength & Pilates',
      subtitle: 'Rebuilding Natural Support',
      imageUrl: '/images/journey/step3.jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=500&q=80',
      quote: '"A strong core is your body’s natural back protector."',
      description: 'Easy, guided movements and Clinical Pilates exercises that teach your deep muscles to protect your spine — safe for all ages and fitness levels.',
    },
    {
      num: '04',
      title: 'Lasting Pain-Free Living',
      subtitle: 'Moving with Joy & Freedom',
      imageUrl: '/images/journey/step4.jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=500&q=80',
      quote: '"Back to playing with your kids and walking with pride."',
      description: 'You finish care with a resilient body, simple 5-minute home habits, and the total confidence to travel, work, and exercise without fear of pain returning.',
    },
  ];

  const bookingSteps = [
    {
      step: '1',
      title: 'Send a Quick Message',
      desc: 'Fill out the simple form or tap WhatsApp. Choose Home Visit in Surat or Online video.',
      icon: MessageSquare,
    },
    {
      step: '2',
      title: 'Friendly Confirmation',
      desc: 'Dr. Bansi confirms the time slot directly with you and shares easy preparation tips.',
      icon: Calendar,
    },
    {
      step: '3',
      title: 'Your 1-on-1 Session',
      desc: 'Doctor-level personal care in your living room or via clear video call.',
      icon: Stethoscope,
    },
    {
      step: '4',
      title: 'Daily WhatsApp Support',
      desc: 'Simple video exercises and direct message support whenever you have any questions.',
      icon: HeartPulse,
    },
  ];

  return (
    <section className="py-24 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: The Patient Recovery Journey */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-xs font-bold tracking-widest text-emerald-800 uppercase mb-2">
            Your Path to Freedom
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
            How we guide you from pain back to active living
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3">
            A simple, friendly 4-step path so you never feel confused about your recovery.
          </p>
        </motion.div>

        {/* 4 Steps Horizon with Visual Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {steps.map((st, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-3xl border border-stone-200/90 p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-emerald-800/40 transition-all group"
              >
                <div>
                  {/* Photo Visual for each Phase */}
                  <div className="relative aspect-16/10 rounded-2xl overflow-hidden mb-4 bg-stone-100 border border-stone-200/70">
                    <img
                      src={st.imageUrl}
                      alt={st.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = st.fallbackUrl;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-2.5 left-2.5 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                      Step {st.num}
                    </div>
                    <div className="absolute bottom-2 left-2.5 right-2.5 text-[11px] font-medium text-emerald-200 truncate">
                      {st.subtitle}
                    </div>
                  </div>

                  {/* Motto Quote */}
                  <div className="text-[11px] font-serif-accent italic text-emerald-950 bg-emerald-50 px-2.5 py-1.5 rounded-md mb-3 border-l-2 border-emerald-700">
                    {st.quote}
                  </div>

                  <h3 className="font-display text-lg font-bold text-stone-900 mb-1.5">
                    {st.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-semibold uppercase tracking-wider">
                  <span>Phase {st.num}</span>
                  <span className="text-emerald-700 group-hover:translate-x-0.5 transition-transform">Next Step →</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section 2: How Booking Works in simple everyday terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-xs"
        >
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Clear & Simple Scheduling
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Booking your consultation takes less than a minute
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              No complicated passwords or long apps. Direct, personal communication on WhatsApp from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="relative p-5 rounded-2xl bg-stone-50 border border-stone-200/70">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4 font-bold text-sm">
                    {b.step}
                  </div>
                  <h4 className="font-display text-base font-bold text-stone-900 mb-1.5">
                    {b.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-500 text-center sm:text-left">
              Have questions about your pain or whether a home visit is right for you?
            </span>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-stone-900 hover:bg-emerald-900 rounded-xl transition-colors shadow-2xs"
            >
              <span>Schedule Your Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
