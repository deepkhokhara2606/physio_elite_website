import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp, Instagram, Linkedin, Youtube, Download } from 'lucide-react';
import { DOCTOR_INFO } from '../data/physioData';
import { PhysioEliteLogo } from './PhysioEliteLogo';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/91${DOCTOR_INFO.phone}?text=${encodeURIComponent(
    'Hello Dr. Bansi, I would like to enquire about your physiotherapy / fitness services.'
  )}`;

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 lg:pb-16 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <PhysioEliteLogo size="lg" variant="light" showTagline={true} />
            </div>
            <span className="text-xs font-semibold tracking-wider uppercase text-teal-400 block mb-3">
              Dr. Bansi Kansara · BPT · Advanced Fitness & Aerobics Instructor · Certified Antenatal & Postnatal Specialist
            </span>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md mb-6">
              Individualized musculoskeletal rehabilitation, hands-on home visit physiotherapy across Surat, and structured online movement guidance. Moving you from pain relief to lifelong strength.
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/70 border border-emerald-800 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 {DOCTOR_INFO.phone}</span>
              </a>

              <a
                href={`tel:+91${DOCTOR_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-300 bg-stone-900 hover:bg-stone-800 border border-stone-700 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Dr. Bansi</span>
              </a>
            </div>

            {/* Official Social Media Links */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2.5">
                Connect on Social Media:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={DOCTOR_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-pink-400 hover:bg-pink-950/50 hover:border-pink-800/80 transition-colors shadow-2xs"
                  aria-label="Instagram - @physioelite.health"
                  title="Follow on Instagram (@physioelite.health)"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={DOCTOR_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-sky-400 hover:bg-sky-950/50 hover:border-sky-800/80 transition-colors shadow-2xs"
                  aria-label="LinkedIn - Dr. Bansi Kansara"
                  title="Connect on LinkedIn (Dr. Bansi Kansara)"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={DOCTOR_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-red-400 hover:bg-red-950/50 hover:border-red-800/80 transition-colors shadow-2xs"
                  aria-label="YouTube - @bansikansara5586"
                  title="Subscribe on YouTube (@bansikansara5586)"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${DOCTOR_INFO.email}`}
                  className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 hover:bg-emerald-950/50 hover:border-emerald-800/80 transition-colors shadow-2xs"
                  aria-label="Email - dr.bansikansaraphysio02@gmail.com"
                  title="Email Dr. Bansi Kansara"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Clinical Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Musculoskeletal Physiotherapy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Yoga & Power Yoga
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Women's Health (Antenatal & Postnatal)
                </a>
              </li>
              <li>
                <a href="#movement" className="hover:text-emerald-400 transition-colors">
                  Dynamic Movement Screen (6 Patterns)
                </a>
              </li>
              <li>
                <a href="#modes" className="hover:text-emerald-400 transition-colors">
                  Surat Home Visit Physiotherapy
                </a>
              </li>
              <li>
                <a href="#modes" className="hover:text-emerald-400 transition-colors">
                  1-on-1 Online Video Consultations
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About Dr. Bansi Kansara
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition-colors">
                  Patient Reviews & Outcomes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Practice Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Practice Information
            </h4>
            <div className="space-y-3.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-200 block">Surat, Gujarat, India</strong>
                  <span>Doorstep home visits across Vesu, Adajan, Pal, Althan, City Light, Piplod & all Surat localities.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-200 block">Direct Call & WhatsApp</strong>
                  <a href={`tel:+91${DOCTOR_INFO.phone}`} className="hover:underline">
                    {DOCTOR_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-200 block">Official Email</strong>
                  <a href={`mailto:${DOCTOR_INFO.email}`} className="hover:underline break-all">
                    {DOCTOR_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 space-y-2.5">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 text-xs font-bold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors text-center shadow-xs cursor-pointer"
              >
                Schedule Your Consultation
              </button>

              <a
                href="/final-website-physio-elite.zip"
                download="final website physio elite.zip"
                className="w-full py-2.5 text-xs font-bold text-stone-200 bg-stone-900 hover:bg-stone-800 border border-stone-700/80 hover:border-emerald-600 rounded-lg transition-colors flex items-center justify-center gap-2 text-center"
                title="Download complete website source code as ZIP"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Download Final Website ZIP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} PhysioElite · Dr. Bansi Kansara (BPT). "Move Better Every Day."
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>Surat Home Physiotherapy</span>
            <span>·</span>
            <span>Online Care</span>
            <span>·</span>
            <a href={DOCTOR_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              Instagram
            </a>
            <span>·</span>
            <a href={DOCTOR_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              LinkedIn
            </a>
            <span>·</span>
            <a href={DOCTOR_INFO.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              YouTube
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-stone-300 flex items-center gap-1 transition-colors cursor-pointer ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
