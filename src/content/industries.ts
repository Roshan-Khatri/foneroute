
import { Briefcase, Landmark, ShoppingCart, Heart, Scale, Building, Zap, MessageSquare, Globe, Users, Home, Gavel } from 'lucide-react';

// Industry content types and constants
export type Industry = {
  title: string;
  slug: { current: string };
  icon: any;
  description: string;
  solutions: { title: string; slug: { current: string } }[];
  metrics: string;
  challenges?: string[];
  longDescription?: any[];
};

export const industries: Industry[] = [
  {
    title: 'Healthcare',
    slug: { current: 'healthcare' },
    icon: Heart,
    description: 'Secure, compliant communications for hospitals, clinics, and providers.',
    solutions: [
      { title: 'Contact Center', slug: { current: 'contact-center' } },
      { title: 'Unified Communications', slug: { current: 'unified-communications' } },
      { title: 'Compliance Tools', slug: { current: 'compliance-tools' } },
    ],
    metrics: 'HIPAA Compliant, 99.99% uptime',
    challenges: [
        'Ensuring patient data privacy (HIPAA)',
        'Providing reliable telehealth services',
        'Managing high call volumes for appointments and inquiries',
        'Coordinating communication across multiple departments',
    ],
  },
  {
    title: 'Finance',
    slug: { current: 'finance' },
    icon: Scale,
    description: 'Reliable, secure telecom for banks, fintech, and insurance.',
    solutions: [
      { title: 'Call Recording', slug: { current: 'call-recording' } },
      { title: 'Fraud Prevention', slug: { current: 'fraud-prevention' } },
      { title: 'Analytics', slug: { current: 'analytics' } },
    ],
    metrics: 'PCI DSS Ready, Real-time monitoring',
    challenges: [
        'Meeting strict regulatory compliance (PCI DSS, MIFID II)',
        'Protecting against financial fraud and data breaches',
        'Providing high-quality, documented customer interactions',
        'Integrating communication with financial software',
    ],
  },
  {
    title: 'Education',
    slug: { current: 'education' },
    icon: Building,
    description: 'Flexible solutions for schools, universities, and e-learning.',
    solutions: [
      { title: 'Virtual Classrooms', slug: { current: 'virtual-classrooms' } },
      { title: 'Parent Notification', slug: { current: 'parent-notification' } },
      { title: 'Cloud PBX', slug: { current: 'cloud-pbx' } },
    ],
    metrics: 'FERPA Compliant, Scalable',
    challenges: [
        'Facilitating remote learning and virtual classrooms',
        'Ensuring student privacy and data security (FERPA)',
        'Managing communications between faculty, students, and parents',
        'Scaling resources for fluctuating enrollment',
    ],
  },
  {
    title: 'Technology',
    slug: { current: 'technology' },
    icon: Zap,
    description: 'Agile communications for tech companies and startups.',
    solutions: [
        { title: 'API Integrations', slug: { current: 'api-integrations' } },
        { title: 'Global Numbers', slug: { current: 'global-numbers' } },
        { title: 'Auto Dialer', slug: { current: 'auto-dialer' } },
    ],
    metrics: 'Developer Friendly, Global Reach',
    challenges: [
        'Rapidly scaling communication services with business growth',
        'Integrating communication features into proprietary apps and software',
        'Providing global support for a distributed user base',
        'Maintaining high uptime and service reliability',
    ],
  },
  {
    title: 'Retail',
    slug: { current: 'retail' },
    icon: ShoppingCart,
    description: 'Omnichannel solutions for stores and e-commerce.',
    solutions: [
      { title: 'Contact Center', slug: { current: 'contact-center' } },
      { title: 'SMS Marketing', slug: { current: 'sms-marketing' } },
      { title: 'Analytics', slug: { current: 'analytics' } },
    ],
    metrics: 'Omnichannel, Scalable',
  },
  {
    title: 'Manufacturing',
    slug: { current: 'manufacturing' },
    icon: Globe,
    description: 'Robust telecom for logistics, supply chain, and production.',
    solutions: [
      { title: 'Unified Communications', slug: { current: 'unified-communications' } },
      { title: 'IoT Integration', slug: { current: 'iot-integration' } },
      { title: 'Reporting', slug: { current: 'reporting' } },
    ],
    metrics: 'Reliable, Secure',
  },
  {
    title: 'Hospitality',
    slug: { current: 'hospitality' },
    icon: Users,
    description: 'Enhance guest experiences with seamless communication solutions.',
    solutions: [
      { title: 'Cloud PBX', slug: { current: 'cloud-pbx' } },
      { title: 'Call-back service', slug: { current: 'call-back-service' } },
      { title: 'Voicemail to email', slug: { current: 'voicemail-to-email' } },
    ],
    metrics: 'Reliable, Secure',
  },
  {
    title: 'Real Estate',
    slug: { current: 'real-estate' },
    icon: Home,
    description: 'Stay connected with clients and agents on the go.',
    solutions: [
      { title: 'Predictive Dialer', slug: { current: 'predictive-dialer' } },
      { title: 'Call recording', slug: { current: 'call-recording' } },
      { title: 'Call forwarding', slug: { current: 'call-forwarding' } },
    ],
    metrics: 'Reliable, Secure',
  },
  {
    title: 'Legal',
    slug: { current: 'legal' },
    icon: Gavel,
    description: 'Confidential and compliant communication for law firms.',
    solutions: [
      { title: 'Call recording', slug: { current: 'call-recording' } },
      { title: 'Call tracking', slug: { current: 'call-tracking' } },
      { title: 'Voicemail to email', slug: { current: 'voicemail-to-email' } },
    ],
    metrics: 'Reliable, Secure',
  },
];
