export type ServiceMode = 'home' | 'online' | 'all';

export interface ServiceItem {
  id: string;
  category: 'physio' | 'fitness' | 'womens';
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  quote?: string;
  suitableFor: string[];
  techniques: string[];
  outcomes: string[];
}

export interface MovementPattern {
  id: string;
  name: string;
  subtitle: string;
  focusArea: string;
  assessmentGoal: string;
  commonDysfunction: string;
  rehabApproach: string;
  keyCues: string[];
  imageUrl?: string;
  quote?: string;
}

export interface ReviewItem {
  id: string;
  patientName: string;
  condition: string;
  serviceType: 'Home Visit (Surat)' | 'Online Session' | 'Fitness & Pilates';
  rating: number;
  date: string;
  reviewText: string;
  area?: string;
  verified: boolean;
}

export interface BookingData {
  serviceType: 'home' | 'online';
  patientName: string;
  phone: string;
  suratArea: string;
  condition: string;
  preferredTime: string;
  notes: string;
}
