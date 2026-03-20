import { Heart, Scale, BookOpen, Code, ShoppingCart, Truck, Hotel, Home, Briefcase } from 'lucide-react';

export const industries = [
  {
    slug: 'healthcare',
    title: 'Healthcare',
    icon: Heart,
    hero: {
      title: 'Transform Patient Communication in Healthcare',
      subtitle: 'Secure, compliant, and integrated solutions for modern healthcare providers.',
    },
    overview: 'In the healthcare sector, timely and secure communication is not just a matter of convenience—it can be a matter of life and death...',
    keyProblems: [
      'High no-show rates for appointments',
      'Insecure communication channels',
      'Fragmented communication between departments',
      'Lack of scalable telehealth solutions',
      'Difficulty in managing patient feedback'
    ],
    ourSolutions: [
      {
        title: 'Automated Appointment Reminders',
        description: 'Reduce no-shows with automated reminders.',
        icon: 'Calendar'
      }
    ],
    useCases: [
      {
        title: 'Appointment Management',
        description: 'Reduce no-shows by 30%.'
      }
    ],
    benefits: [
      'Improved patient outcomes',
      'Enhanced efficiency'
    ],
  },

  {
    slug: 'finance',
    title: 'Finance',
    icon: Scale,
    hero: {
      title: 'Secure Communication for Finance',
      subtitle: 'Build trust and compliance.',
    },
    overview: 'Financial services require secure and reliable communication...',
    keyProblems: ['Compliance risks', 'High operational cost'],
    ourSolutions: [
      {
        title: 'Call Recording',
        description: 'Secure call recording.',
        icon: 'Mic'
      }
    ],
    useCases: [],
    benefits: ['Compliance', 'Security'],
  },

  {
    slug: 'education',
    title: 'Education',
    icon: BookOpen,
    hero: {
      title: 'Connecting Education',
      subtitle: 'Better communication for institutions.',
    },
    overview: 'Educational institutions need seamless communication...',
    keyProblems: ['Delayed communication'],
    ourSolutions: [],
    useCases: [],
    benefits: [],
  },

  {
    slug: 'technology',
    title: 'Technology',
    icon: Code,
    hero: {
      title: 'Build & Scale',
      subtitle: 'Communication APIs for developers.',
    },
    overview: 'Tech companies need scalable infra...',
    keyProblems: [],
    ourSolutions: [],
    useCases: [],
    benefits: [],
  },

  {
    slug: 'retail',
    title: 'Retail',
    icon: ShoppingCart,
    hero: {
      title: 'Enhance Retail Experience',
      subtitle: 'Drive engagement and sales.',
    },
    overview: 'Retail depends on customer experience...',
    keyProblems: [],
    ourSolutions: [],
    useCases: [],
    benefits: [],
  },

  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    icon: Truck,
    hero: {
      title: 'Streamline Manufacturing',
      subtitle: 'Improve operations.',
    },
    overview: 'Manufacturing needs real-time coordination...',
    keyProblems: [],
    ourSolutions: [],
    useCases: [],
    benefits: [],
  },

  {
    slug: 'hospitality',
    title: 'Hospitality',
    icon: Hotel,
    hero: {
      title: 'Guest Experience',
      subtitle: 'Deliver better service.',
    },
    overview: 'Hospitality thrives on experience...',
    keyProblems: [],
    ourSolutions: [],
    useCases: [],
    benefits: [],
  },

  {
    slug: 'real-estate',
    title: 'Real Estate',
    icon: Home,
    hero: {
      title: 'Close Deals Faster',
      subtitle: 'Stay connected.',
    },
    overview: 'Real estate depends on timing...',
    keyProblems: [],
    ourSolutions: [],
    useCases: [],
    benefits: [],
  },

  {
    slug: 'legal',
    title: 'Legal',
    icon: Briefcase,
    hero: {
      title: 'Secure Legal Communication',
      subtitle: 'Confidential & compliant.',
    },
    overview: 'Legal sector needs security...',
    keyProblems: [],
    ourSolutions: [],
    useCases: [],
    benefits: [],
  },

  // ✅ ONLY NEW ADDITION
  {
    slug: 'power-dialer',
    title: 'Power Dialer',
    icon: Briefcase,
    hero: {
      title: 'Intelligent Power Dialer',
      subtitle: 'Boost your outbound sales with smart auto-dialing.',
    },
    overview: 'Power dialer helps agents connect faster by auto dialing leads.',
    keyProblems: [
      'Manual dialing wastes time',
      'Low productivity',
      'High idle time',
    ],
    ourSolutions: [
      {
        title: 'Auto Dialing',
        description: 'Automatically dial numbers.',
        icon: 'Phone',
      },
      {
        title: 'Lead Management',
        description: 'Manage leads efficiently.',
        icon: 'Users',
      },
    ],
    useCases: [
      {
        title: 'Sales Teams',
        description: 'Increase outbound efficiency.',
      },
    ],
    benefits: [
      'Higher productivity',
      'Better conversion',
      'Reduced idle time',
    ],
  },
];