import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS, DOCTOR_INFO } from '../data/physioData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const whatsappUrl = `https://wa.me/91${DOCTOR_INFO.phone}?text=${encodeURIComponent(
    'Hello Dr. Bansi, I have a question regarding physiotherapy sessions.'
  )}`;

  return (
    <section id="faq" className="py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="text-xs font-bold tracking-widest text-emerald-800 uppercase mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
            Everything you need to know about your consultation
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Clear, straightforward answers about home visits across Surat and online rehabilitation.
          </p>
        </motion.div>

        {/* FAQ Accordion with AnimatePresence */}
        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="bg-stone-50 rounded-xl border border-stone-200/90 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-stone-900 pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-stone-900 text-white border-stone-900' : 'text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-stone-200/60 text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <h3 className="font-display text-base font-bold text-stone-900">
              Have a specific condition or query?
            </h3>
            <p className="text-xs text-stone-600 mt-0.5">
              Dr. Bansi is available to answer your clinical doubts directly.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-emerald-950 bg-emerald-200/80 hover:bg-emerald-300 rounded-lg transition-colors border border-emerald-300 shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-800" />
            <span>Ask via WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
