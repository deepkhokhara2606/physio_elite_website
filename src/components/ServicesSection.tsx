import React, { useState } from 'react';
import { Stethoscope, Activity, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICE_ITEMS } from '../data/physioData';

interface ServicesSectionProps {
  onOpenBooking: (mode: 'home' | 'online', condition?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'physio' | 'fitness' | 'womens'>('all');

  const filteredServices =
    activeTab === 'all'
      ? SERVICE_ITEMS
      : SERVICE_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="services" className="py-24 bg-stone-100/50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="text-xs font-bold tracking-widest text-emerald-800 uppercase mb-2">
            Targeted Clinical Protocols
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
            Specialized care built across three core disciplines
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            From acute musculoskeletal pain alleviation to Yoga & Power Yoga, and specialized Women's Health care.
          </p>

          {/* Interactive Category Segmented Control */}
          <div className="mt-8 flex justify-center max-w-full">
            <div className="inline-flex items-center p-1.5 bg-white border border-stone-200/90 rounded-xl shadow-2xs max-w-full overflow-x-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All ({SERVICE_ITEMS.length})
              </button>
              <button
                onClick={() => setActiveTab('physio')}
                className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'physio'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Physiotherapy</span>
              </button>
              <button
                onClick={() => setActiveTab('fitness')}
                className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'fitness'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Yoga & Power Yoga</span>
              </button>
              <button
                onClick={() => setActiveTab('womens')}
                className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'womens'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Women's Health</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Services Cards Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-emerald-800/40 transition-all duration-200 group"
              >
                <div>
                  {/* Service Visual Photo */}
                  <div className="relative aspect-16/10 rounded-xl overflow-hidden mb-5 bg-stone-100 border border-stone-200/70">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2.5 left-3 text-[11px] font-bold uppercase tracking-wider text-white drop-shadow-xs">
                      {service.category === 'physio'
                        ? 'Pain Relief & Physio'
                        : service.category === 'fitness'
                        ? 'Yoga & Power Yoga'
                        : "Women's Health · Antenatal & Postnatal Instructor"}
                    </span>
                  </div>

                  {/* Inspiring Patient Motto / Quote */}
                  {service.quote && (
                    <div className="text-xs font-serif-accent italic text-emerald-950 bg-emerald-50/90 border-l-2 border-emerald-700 px-3 py-2 rounded-r-md mb-4 leading-snug">
                      {service.quote}
                    </div>
                  )}

                  <h3 className="font-display text-xl font-bold text-stone-900 mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-850 mb-3 text-emerald-800">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Suitable for list */}
                  <div className="mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-900 mb-2">
                      When to see Dr. Bansi:
                    </div>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {service.suitableFor.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Techniques used */}
                  <div className="pt-4 border-t border-stone-100 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2">
                      How we help you recover:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techniques.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action footer */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500">Home in Surat or Online</span>
                  <button
                    onClick={() => onOpenBooking('home', service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 hover:text-emerald-800 transition-colors group/btn"
                  >
                    <span>Book for this</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
