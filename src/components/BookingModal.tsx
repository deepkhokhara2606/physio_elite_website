import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, CheckCircle2, Home, Video, MapPin, Calendar, Clock, User, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOCTOR_INFO, SURAT_AREAS } from '../data/physioData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'home' | 'online';
  initialCondition?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'home',
  initialCondition = '',
}) => {
  const [serviceType, setServiceType] = useState<'home' | 'online'>(initialMode);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [suratArea, setSuratArea] = useState('');
  const [condition, setCondition] = useState(initialCondition);
  const [preferredTime, setPreferredTime] = useState('Morning (9:00 AM – 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialMode) setServiceType(initialMode);
    if (initialCondition) setCondition(initialCondition);
  }, [initialMode, initialCondition]);

  const generateWhatsAppMessage = () => {
    const serviceName =
      serviceType === 'home' ? 'Home Visit in Surat' : 'Online Video Consultation';
    const areaText = serviceType === 'home' ? `Area in Surat: ${suratArea || 'Not specified'}` : 'Mode: Online Consultation';

    return encodeURIComponent(
      `Hello Dr. Bansi,\n\nI would like to schedule a ${serviceName}.\n\n` +
        `• Name: ${fullName || 'Patient'}\n` +
        `• Phone: ${phone || 'Provided'}\n` +
        `• ${areaText}\n` +
        `• Condition / Chief Complaint: ${condition || 'General Physiotherapy'}\n` +
        `• Preferred Time: ${preferredTime}\n` +
        (notes ? `• Additional Notes: ${notes}\n\n` : '\n') +
        `Please let me know your available slots.`
    );
  };

  const handleWhatsAppDirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    const url = `https://wa.me/91${DOCTOR_INFO.phone}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
    setIsSuccess(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl border border-stone-200 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8 z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-2 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-950 mb-2">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Dr. Bansi Kansara will review your details and personally confirm your appointment slot via WhatsApp or phone.
                </p>

                <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-xs text-left text-stone-700 max-w-sm mx-auto mb-6 space-y-1.5">
                  <div><strong>Service:</strong> {serviceType === 'home' ? 'Home Visit in Surat' : 'Online Video Session'}</div>
                  {serviceType === 'home' && <div><strong>Location:</strong> {suratArea || 'Surat'}</div>}
                  <div><strong>Preferred Window:</strong> {preferredTime}</div>
                  <div><strong>Contact:</strong> {phone}</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/91${DOCTOR_INFO.phone}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-emerald-950 bg-emerald-200 hover:bg-emerald-300 rounded-lg transition-colors border border-emerald-300"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-800" />
                    <span>Open in WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      onClose();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Direct Appointment Booking
                  </span>
                  <h3 className="font-display text-2xl font-bold text-stone-950 mt-0.5">
                    Book with Dr. Bansi Kansara
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Personalized doorstep care across Surat or dedicated 1-on-1 video consultations.
                  </p>
                </div>

                {/* Service Mode Selector */}
                <div className="grid grid-cols-2 gap-3 mb-6 p-1 bg-stone-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setServiceType('home')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      serviceType === 'home'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <Home className="w-4 h-4 text-emerald-800" />
                    <span>Home Visit (Surat)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('online')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      serviceType === 'online'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <Video className="w-4 h-4 text-teal-800" />
                    <span>Online Video Session</span>
                  </button>
                </div>

                <form onSubmit={handleWhatsAppDirect} className="space-y-4 text-xs">
                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Patient Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Priyanshu Patel"
                          className="w-full pl-9 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        WhatsApp / Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 98765 43210"
                          className="w-full pl-9 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Area in Surat (Conditional on Home Visit) */}
                  {serviceType === 'home' && (
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">
                        Area / Society in Surat *
                      </label>
                      <div className="relative">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          required
                          value={suratArea}
                          onChange={(e) => setSuratArea(e.target.value)}
                          placeholder="e.g. Vesu, Adajan, Pal, Althan, City Light, Piplod..."
                          className="w-full pl-9 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {['Vesu', 'Adajan', 'Pal', 'Althan', 'City Light', 'Piplod'].map((a) => (
                          <button
                            key={a}
                            type="button"
                            onClick={() => setSuratArea(a)}
                            className="text-[10px] bg-stone-100 hover:bg-stone-200 text-stone-600 px-2 py-0.5 rounded transition-colors"
                          >
                            +{a}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Condition / Chief Complaint */}
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      What are you experiencing? (Condition / Issue) *
                    </label>
                    <input
                      type="text"
                      required
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      placeholder="e.g. Lower back pain, neck stiffness, post-surgery rehab, mat pilates"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  {/* Preferred Time Window */}
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Preferred Time Window
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
                    >
                      <option value="Morning (9:00 AM – 1:00 PM)">Morning (9:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                      <option value="Evening (4:00 PM – 8:00 PM)">Evening (4:00 PM – 8:00 PM)</option>
                    </select>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Additional Notes or Questions (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any previous scans, specific restrictions, or questions?"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full sm:w-auto px-4 py-2.5 border border-stone-200 text-stone-700 rounded-lg hover:bg-stone-50"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp (+91 {DOCTOR_INFO.phone})</span>
                    </button>
                  </div>

                  <div className="text-[11px] text-stone-400 text-center pt-1">
                    Dr. Bansi Kansara personally reviews all enquiries. Consultation fees shared transparently upon review.
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
