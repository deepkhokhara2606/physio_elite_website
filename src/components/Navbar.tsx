import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { DOCTOR_INFO } from '../data/physioData';
import { PhysioEliteLogo } from './PhysioEliteLogo';

interface NavbarProps {
  onOpenBooking: (mode?: 'home' | 'online') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/91${DOCTOR_INFO.phone}?text=${encodeURIComponent(
    'Hello Dr. Bansi, I would like to enquire about physiotherapy / fitness consultation.'
  )}`;

  return (
    <header
      className={`relative sm:sticky sm:top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-stone-50/95 sm:backdrop-blur-md border-b border-stone-200/80 shadow-xs'
          : 'bg-stone-50/90 sm:backdrop-blur-xs border-b border-stone-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Zone 1: Official PhysioElite Logo (Single clean emblem) */}
        <div className="flex items-center">
          <a
            href="#"
            className="group flex items-center focus-visible:outline-none"
            aria-label="PhysioElite - Dr. Bansi Kansara"
          >
            <div className="sm:hidden">
              <PhysioEliteLogo size="sm" showTagline={false} />
            </div>
            <div className="hidden sm:block">
              <PhysioEliteLogo size="md" showTagline={true} />
            </div>
          </a>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a
            href="#services"
            className="hover:text-stone-900 transition-colors py-1"
          >
            Services
          </a>
          <a
            href="#modes"
            className="hover:text-stone-900 transition-colors py-1"
          >
            Home & Online
          </a>
          <a
            href="#movement"
            className="hover:text-stone-900 transition-colors py-1"
          >
            Movement Screen
          </a>
          <a
            href="#about"
            className="hover:text-stone-900 transition-colors py-1"
          >
            About Dr. Bansi
          </a>
          <a
            href="#reviews"
            className="hover:text-stone-900 transition-colors py-1"
          >
            Reviews
          </a>
          <a
            href="#coverage"
            className="hover:text-stone-900 transition-colors py-1"
          >
            Surat Areas
          </a>
          <a
            href="#faq"
            className="hover:text-stone-900 transition-colors py-1"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-900 bg-emerald-100/80 hover:bg-emerald-200/80 rounded-lg transition-colors border border-emerald-200"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span className="whitespace-nowrap">WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenBooking('home')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-stone-900 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs whitespace-nowrap"
          >
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenBooking('home')}
            className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-stone-900 hover:bg-emerald-900 rounded-lg"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 rounded-lg focus-visible:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-50 border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-stone-200/60"
            >
              Clinical Services
            </a>
            <a
              href="#modes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-stone-200/60"
            >
              Home Visits & Online Care
            </a>
            <a
              href="#movement"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-stone-200/60"
            >
              Dynamic Movement Screen
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-stone-200/60"
            >
              About & Credentials
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-stone-200/60"
            >
              Patient Reviews
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-stone-200/60"
            >
              Surat Coverage Areas
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-stone-200/60"
            >
              Frequently Asked Questions
            </a>
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <a
              href={`tel:+91${DOCTOR_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-stone-800 bg-stone-200/80 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {DOCTOR_INFO.phoneFormatted}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-emerald-950 bg-emerald-100 rounded-lg"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-800" />
              <span>WhatsApp Instant Enquiry</span>
            </a>
            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href={DOCTOR_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-stone-600 hover:text-pink-600 transition-colors"
              >
                Instagram
              </a>
              <span className="text-stone-300">·</span>
              <a
                href={DOCTOR_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-stone-600 hover:text-sky-600 transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-stone-300">·</span>
              <a
                href={DOCTOR_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-stone-600 hover:text-red-600 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
