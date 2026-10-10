import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AccessModes } from './components/AccessModes';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { DynamicMovementScreen } from './components/DynamicMovementScreen';
import { DailyMovementTip } from './components/DailyMovementTip';
import { PatientJourney } from './components/PatientJourney';
import { ReviewsSection } from './components/ReviewsSection';
import { SuratCoverage } from './components/SuratCoverage';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingMode, setBookingMode] = useState<'home' | 'online'>('home');
  const [bookingCondition, setBookingCondition] = useState<string>('');

  const handleOpenBooking = (mode: 'home' | 'online' = 'home', condition: string = '') => {
    setBookingMode(mode);
    setBookingCondition(condition);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-emerald-900 selection:text-white flex flex-col font-sans">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Home Visit vs Online Care Modes */}
        <AccessModes onOpenBooking={handleOpenBooking} />

        {/* About Dr. Bansi Kansara & Credentials */}
        <AboutSection />

        {/* 3 Core Pillars: Physio, Movement & Pilates, Women's Wellness */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Dynamic Movement Screen (6 Foundational Tests) */}
        <DynamicMovementScreen onOpenBooking={handleOpenBooking} />

        {/* Memorable Daily Movement Tip (Interactive & Shareable) */}
        <DailyMovementTip />

        {/* Patient Recovery Journey & Booking Flow */}
        <PatientJourney onOpenBooking={() => handleOpenBooking('home')} />

        {/* Patient Reviews & Interactive Write a Review Modal */}
        <ReviewsSection />

        {/* Surat Geographical Coverage & Home Prep Guide */}
        <SuratCoverage onOpenBooking={() => handleOpenBooking('home')} />

        {/* Interactive FAQ Section */}
        <FaqSection />
      </main>

      {/* Quiet, Comprehensive Footer */}
      <Footer onOpenBooking={() => handleOpenBooking('home')} />

      {/* Mobile-First Sticky Action Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking('home')} />

      {/* Appointment & WhatsApp Booking Engine Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialMode={bookingMode}
        initialCondition={bookingCondition}
      />
    </div>
  );
}
