import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, MessageSquarePlus, X, Heart, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { INITIAL_REVIEWS } from '../data/physioData';
import { ReviewItem } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem('physioelite_reviews');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_REVIEWS;
  });

  const [filter, setFilter] = useState<'all' | 'home' | 'online' | 'fitness'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New review form state
  const [name, setName] = useState('');
  const [condition, setCondition] = useState('');
  const [area, setArea] = useState('');
  const [serviceType, setServiceType] = useState<'Home Visit (Surat)' | 'Online Session' | 'Fitness & Pilates'>('Home Visit (Surat)');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !reviewText.trim()) return;

    const newRev: ReviewItem = {
      id: 'user-rev-' + Date.now(),
      patientName: name.trim(),
      condition: condition.trim() || 'General Rehabilitation',
      serviceType,
      area: area.trim() || (serviceType === 'Home Visit (Surat)' ? 'Surat' : 'Online'),
      rating,
      date: 'Just now',
      verified: true,
      reviewText: reviewText.trim(),
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem('physioelite_reviews', JSON.stringify(updated));
    } catch {
      // storage error
    }

    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setIsModalOpen(false);
      setName('');
      setCondition('');
      setArea('');
      setReviewText('');
      setRating(5);
    }, 1800);
  };

  const filteredReviews = reviews.filter((r) => {
    if (filter === 'all') return true;
    if (filter === 'home') return r.serviceType === 'Home Visit (Surat)';
    if (filter === 'online') return r.serviceType === 'Online Session';
    if (filter === 'fitness') return r.serviceType === 'Fitness & Pilates';
    return true;
  });

  return (
    <section id="reviews" className="py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Write Review Action */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-xs font-bold tracking-widest text-emerald-800 uppercase mb-2">
              Patient Experiences
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
              Real recovery stories from Surat & beyond
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              Verified experiences from patients receiving doorstep physiotherapy across Surat and structured online guidance.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-colors shadow-2xs self-start md:self-auto"
          >
            <MessageSquarePlus className="w-4 h-4 text-emerald-800" />
            <span>Write a Review</span>
          </motion.button>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 text-xs">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-md font-semibold transition-colors ${
              filter === 'all'
                ? 'bg-stone-900 text-white'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900'
            }`}
          >
            All Experiences ({reviews.length})
          </button>
          <button
            onClick={() => setFilter('home')}
            className={`px-3.5 py-1.5 rounded-md font-semibold transition-colors ${
              filter === 'home'
                ? 'bg-stone-900 text-white'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900'
            }`}
          >
            Home Visits in Surat
          </button>
          <button
            onClick={() => setFilter('online')}
            className={`px-3.5 py-1.5 rounded-md font-semibold transition-colors ${
              filter === 'online'
                ? 'bg-stone-900 text-white'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900'
            }`}
          >
            Online Consultations
          </button>
          <button
            onClick={() => setFilter('fitness')}
            className={`px-3.5 py-1.5 rounded-md font-semibold transition-colors ${
              filter === 'fitness'
                ? 'bg-stone-900 text-white'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900'
            }`}
          >
            Movement & Mat Pilates
          </button>
        </div>

        {/* Reviews Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -2 }}
                className="bg-stone-50 rounded-2xl border border-stone-200/80 p-6 flex flex-col justify-between shadow-2xs hover:border-emerald-800/30 transition-shadow"
              >
                <div>
                  {/* Rating stars & verified mark */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    {rev.verified && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Verified Patient
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6 italic">
                    "{rev.reviewText}"
                  </p>
                </div>

                {/* Patient details & Condition */}
                <div className="pt-4 border-t border-stone-200/70">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-sm font-bold text-stone-900">
                        {rev.patientName}
                      </h4>
                      <p className="text-xs text-emerald-850 font-medium text-emerald-800">
                        {rev.condition}
                      </p>
                    </div>
                    <span className="text-[11px] text-stone-400 font-medium">
                      {rev.date}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-[11px] text-stone-500">
                    <span className="bg-white border border-stone-200 px-2 py-0.5 rounded">
                      {rev.serviceType}
                    </span>
                    {rev.area && (
                      <span className="flex items-center gap-0.5">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        {rev.area}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Write a Review Modal with AnimatePresence */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl border border-stone-200 max-w-lg w-full p-6 sm:p-8 shadow-xl relative z-10"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-1 rounded-md"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {submittedMessage ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-stone-900 mb-1">
                    Thank You for Your Feedback!
                  </h3>
                  <p className="text-xs text-stone-600">
                    Your review has been successfully added to Dr. Bansi’s testimonials.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="font-display text-xl font-bold text-stone-950 mb-1">
                    Share Your Experience
                  </h3>
                  <p className="text-xs text-stone-500 mb-5">
                    Your review helps other patients in Surat find high quality, movement-focused rehabilitation.
                  </p>

                  <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Priyanshu Patel"
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">
                          Condition / Reason *
                        </label>
                        <input
                          type="text"
                          required
                          value={condition}
                          onChange={(e) => setCondition(e.target.value)}
                          placeholder="e.g. Neck stiffness, Knee rehab"
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">
                          Your Area in Surat / City
                        </label>
                        <input
                          type="text"
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                          placeholder="e.g. Vesu, Adajan, Pal"
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">
                          Service Received
                        </label>
                        <select
                          value={serviceType}
                          onChange={(e) => setServiceType(e.target.value as any)}
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
                        >
                          <option value="Home Visit (Surat)">Home Visit (Surat)</option>
                          <option value="Online Session">Online Session</option>
                          <option value="Fitness & Pilates">Fitness & Pilates</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">
                          Rating
                        </label>
                        <div className="flex items-center gap-1 py-1.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              type="button"
                              key={star}
                              onClick={() => setRating(star)}
                              className="p-1 text-stone-300 hover:text-amber-400 focus:outline-none"
                            >
                              <Star
                                className={`w-5 h-5 ${
                                  star <= rating
                                    ? 'fill-amber-400 text-amber-400'
                                    : 'text-stone-300'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Your Review & Experience *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="How did Dr. Bansi help with your assessment, pain relief, or movement exercises?"
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 border border-stone-200 text-stone-700 rounded-lg hover:bg-stone-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 bg-stone-900 text-white font-semibold rounded-lg hover:bg-emerald-900 transition-colors"
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
