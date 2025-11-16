import type { Solution } from '@/sanity/types';

export const solutionSlugs = ['contact-center', 'auto-dialer', 'power-dialer', 'predictive-dialer', 'cloud-pbx', 'unified-communications'];

export const fallbackData: { [key: string]: Partial<Solution> } = {
  'contact-center': {
    title: 'Contact Center Solution',
    description: 'Comprehensive omnichannel platform for customer engagement, agent productivity, and operational efficiency.',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Our Contact Center Solution delivers seamless omnichannel support, intelligent routing, and real-time analytics to elevate customer experience and drive business growth.' }] }],
    features: ['Omnichannel Support', 'Intelligent Routing', 'Real-time Analytics', 'Agent Desktop', 'Quality Management', 'Workforce Management'],
    benefits: ['Increase CSAT', 'Reduce handle time', 'Improve agent utilization'],
    specifications: [{ _type: 'block', children: [{ _type: 'span', text: '99.9% uptime, enterprise-grade security, scalable architecture.' }] }],
    pricing: 'Starting at $49/user/month',
    pricingModel: 'per-user',
    testimonials: ['“FoneRoute transformed our customer service operations.”', '“Agent productivity increased by 40% after switching.”'],
    relatedSolutions: [
      { title: 'Auto Dialer', slug: { current: 'auto-dialer' } },
      { title: 'Power Dialer', slug: { current: 'power-dialer' } },
      { title: 'Unified Communications', slug: { current: 'unified-communications' } },
    ],
  },
  'auto-dialer': {
    title: 'Auto Dialer Solution',
    description: 'Automated dialing for maximum productivity.',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Boost agent efficiency and connect more calls with our Auto Dialer solution.' }] }],
    features: ['Progressive Dialing', 'Contact Management', 'Call Disposition', 'Lead Prioritization', 'Compliance Tools', 'Real-time Monitoring'],
    benefits: ['Increase productivity', 'Reduce idle time', 'Improve connection rates'],
    specifications: [{ _type: 'block', children: [{ _type: 'span', text: 'TCPA compliant, scalable, integrates with CRM.' }] }],
    pricing: 'Starting at $39/user/month',
    pricingModel: 'per-user',
    testimonials: ['“Our sales team doubled their call volume.”', '“Compliance is effortless with FoneRoute.”'],
    relatedSolutions: [
      { title: 'Power Dialer', slug: { current: 'power-dialer' } },
      { title: 'Predictive Dialer', slug: { current: 'predictive-dialer' } },
      { title: 'Contact Center', slug: { current: 'contact-center' } },
    ],
  },
  'power-dialer': {
    title: 'Power Dialer Solution',
    description: 'High-speed dialing for sales teams.',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Accelerate outbound campaigns and maximize agent talk time with our Power Dialer.' }] }],
    features: ['Rapid Dialing', 'CRM Integration', 'Call Recording', 'Disposition Tracking', 'Agent Dashboard', 'Analytics'],
    benefits: ['Boost sales productivity', 'Streamline workflows', 'Gain actionable insights'],
    specifications: [{ _type: 'block', children: [{ _type: 'span', text: 'Integrates with major CRMs, scalable, secure.' }] }],
    pricing: 'Starting at $49/user/month',
    pricingModel: 'per-user',
    testimonials: ['“Our agents love the speed and simplicity.”', '“Integration was seamless.”'],
    relatedSolutions: [
      { title: 'Auto Dialer', slug: { current: 'auto-dialer' } },
      { title: 'Predictive Dialer', slug: { current: 'predictive-dialer' } },
      { title: 'Contact Center', slug: { current: 'contact-center' } },
    ],
  },
  'predictive-dialer': {
    title: 'Predictive Dialer Solution',
    description: 'AI-powered dialing for maximum efficiency.',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Leverage machine learning to optimize call connect rates and agent utilization.' }] }],
    features: ['AI Call Scheduling', 'Abandon Rate Control', 'Real-time Analytics', 'CRM Integration', 'Compliance Management', 'Agent Performance Tracking'],
    benefits: ['Maximize agent efficiency', 'Reduce dropped calls', 'Enhance campaign ROI'],
    specifications: [{ _type: 'block', children: [{ _type: 'span', text: 'AI-driven algorithms, scalable, TCPA compliant.' }] }],
    pricing: 'Starting at $59/user/month',
    pricingModel: 'per-user',
    testimonials: ['“Our connect rates improved dramatically.”', '“Predictive logic saves us hours daily.”'],
    relatedSolutions: [
      { title: 'Auto Dialer', slug: { current: 'auto-dialer' } },
      { title: 'Power Dialer', slug: { current: 'power-dialer' } },
      { title: 'Contact Center', slug: { current: 'contact-center' } },
    ],
  },
  'cloud-pbx': {
    title: 'Cloud PBX Solution',
    description: 'Flexible, scalable business phone system.',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Empower your business with a modern, cloud-based PBX for seamless communication.' }] }],
    features: ['Virtual Extensions', 'Auto Attendant', 'Call Routing', 'Voicemail-to-Email', 'Mobile App', 'Call Analytics'],
    benefits: ['Scale effortlessly', 'Reduce hardware costs', 'Enable remote work'],
    specifications: [{ _type: 'block', children: [{ _type: 'span', text: 'Hosted in secure data centers, 99.99% uptime, global reach.' }] }],
    pricing: 'Starting at $29/user/month',
    pricingModel: 'per-user',
    testimonials: ['“Our team is more connected than ever.”', '“Setup was fast and easy.”'],
    relatedSolutions: [
      { title: 'Unified Communications', slug: { current: 'unified-communications' } },
      { title: 'Contact Center', slug: { current: 'contact-center' } },
    ],
  },
  'unified-communications': {
    title: 'Unified Communications Solution',
    description: 'All-in-one platform for business collaboration.',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Connect teams, customers, and partners with voice, video, chat, and file sharing in one platform.' }] }],
    features: ['Voice & Video Calling', 'Team Messaging', 'File Sharing', 'Presence & Status', 'Mobile & Desktop Apps', 'Third-party Integrations'],
    benefits: ['Improve collaboration', 'Reduce app sprawl', 'Enable remote work'],
    specifications: [{ _type: 'block', children: [{ _type: 'span', text: 'End-to-end encrypted, cross-platform, scalable.' }] }],
    pricing: 'Starting at $35/user/month',
    pricingModel: 'per-user',
    testimonials: ['“Our team productivity soared.”', '“One app for everything!”'],
    relatedSolutions: [
      { title: 'Cloud PBX', slug: { current: 'cloud-pbx' } },
      { title: 'Contact Center', slug: { current: 'contact-center' } },
    ],
  },
};

export const labelMap: { [key: string]: string } = {
    'contact-center': 'Contact Center',
    'auto-dialer': 'Auto Dialer',
    'power-dialer': 'Power Dialer',
    'predictive-dialer': 'Predictive Dialer',
    'cloud-pbx': 'Cloud PBX',
    'unified-communications': 'Unified Communications',
  };