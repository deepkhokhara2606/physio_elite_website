import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { DOCTOR_INFO } from '../data/physioData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/91${DOCTOR_INFO.phone}?text=${encodeURIComponent(
    'Hello Dr. Bansi, I would like to book a physiotherapy session.'
  )}`;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2.5 shadow-lg flex items-center gap-2">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-lg transition-colors"
      >
        <MessageCircle className="w-4 h-4 text-emerald-800" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-white bg-stone-900 hover:bg-emerald-900 rounded-lg transition-colors shadow-xs"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Session</span>
      </button>
    </div>
  );
};
