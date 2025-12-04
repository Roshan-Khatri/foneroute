// Industry content types and constants
export type Industry = {
  name: string;
  icon: any;
  description: string;
  solutions: { title: string; slug: { current: string } }[];
  metrics: string;
  slug: { current: string };
  challenges?: string[];
  longDescription?: any[];
};

export const industries: Industry[] = [
  {
    name: 'Healthcare',
    slug: { current: 'healthcare' },
    icon: undefined, // Set icon in page
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
    longDescription: [
        {
          _key: 'desc1',
          _type: 'block',
          children: [
            {
              _key: 'desc1-child1',
              _type: 'span',
              marks: [],
              text: 'In the fast-paced and critical environment of healthcare, communication is key. FoneRoute provides a suite of HIPAA-compliant tools designed to streamline communication between providers, patients, and administrative staff, ensuring that sensitive information remains secure while improving the quality of care.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
    ]
  },
  {
    name: 'Finance',
    slug: { current: 'finance' },
    icon: undefined,
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
    longDescription: [
        {
          _key: 'desc1',
          _type: 'block',
          children: [
            {
              _key: 'desc1-child1',
              _type: 'span',
              marks: [],
              text: 'The financial services industry demands the highest levels of security and reliability. FoneRoute offers solutions that are PCI DSS ready, providing secure call recording, real-time fraud detection, and detailed analytics to help financial institutions meet compliance requirements and protect their customers.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
    ]
  },
  {
    name: 'Education',
    slug: { current: 'education' },
    icon: undefined,
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
     longDescription: [
        {
          _key: 'desc1',
          _type: 'block',
          children: [
            {
              _key: 'desc1-child1',
              _type: 'span',
              marks: [],
              text: 'From K-12 to higher education, effective communication is essential for learning. FoneRoute offers scalable and FERPA-compliant solutions that support virtual classrooms, streamline parent notifications, and provide a reliable communication infrastructure for educational institutions of all sizes.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
    ]
  },
  {
    name: 'Technology',
    slug: { current: 'technology' },
    icon: undefined,
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
    longDescription: [
        {
          _key: 'desc1',
          _type: 'block',
          children: [
            {
              _key: 'desc1-child1',
              _type: 'span',
              marks: [],
              text: 'The technology sector moves fast, and communication tools need to keep up. FoneRoute\'s developer-friendly APIs, global number availability, and scalable infrastructure are designed for the agility that tech companies and startups need to innovate and grow.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
    ]
  },
  {
    name: 'Retail',
    slug: { current: 'retail' },
    icon: undefined,
    description: 'Omnichannel solutions for stores and e-commerce.',
    solutions: [
      { title: 'Contact Center', slug: { current: 'contact-center' } },
      { title: 'SMS Marketing', slug: { current: 'sms-marketing' } },
      { title: 'Analytics', slug: { current: 'analytics' } },
    ],
    metrics: 'Omnichannel, Scalable',
  },
  {
    name: 'Manufacturing',
    slug: { current: 'manufacturing' },
    icon: undefined,
    description: 'Robust telecom for logistics, supply chain, and production.',
    solutions: [
      { title: 'Unified Communications', slug: { current: 'unified-communications' } },
      { title: 'IoT Integration', slug: { current: 'iot-integration' } },
      { title: 'Reporting', slug: { current: 'reporting' } },
    ],
    metrics: 'Reliable, Secure',
  },
];
export const challenges: string[] = [
  'Data security & compliance',
  'Scalability for growth',
  'Omnichannel customer engagement',
  'Integration with business systems',
  'Real-time analytics & reporting',
  'Cost control & efficiency',
];
export type SuccessStory = { industry: string; story: string };
export const successStories: SuccessStory[] = [
  {
    industry: 'Healthcare',
    story: 'A hospital reduced missed appointments by 30% using automated reminders.',
  },
  {
    industry: 'Retail',
    story: 'An e-commerce brand increased customer satisfaction by 25% with omnichannel support.',
  },
  {
    industry: 'Finance',
    story: 'A bank improved fraud detection with real-time call analytics.',
  },
];
