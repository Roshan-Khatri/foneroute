
import type { Feature } from '@/sanity/types';

export const features: Partial<Feature>[] = [
  {
    title: 'Voicemail to Email',
    slug: { current: 'voicemail-to-email' },
    excerpt: 'Get voicemails delivered directly to your inbox.',
    description: 'Never miss an important message again. Get your voicemails delivered directly to your email inbox as audio files, with optional transcription for quick reading. Key features include instant email notifications with MP3 attachments, voicemail transcription for at-a-glance reading, easy archiving within your email client, and the ability to listen to messages from any device.',
    benefits: [
      'Increased Efficiency: Save time by quickly scanning transcriptions or listening to audio files without dialing into your voicemail.',
      'Improved Responsiveness: Address urgent messages faster by receiving them directly in your inbox, no matter where you are.',
      'Better Organization: Keep a searchable record of all your communications, both emails and voicemails, in one place.',
      'Enhanced Accessibility: Provides an accessible alternative for team members who may have hearing impairments.',
    ],
  },
  {
    title: 'Call Forwarding',
    slug: { current: 'call-forwarding' },
    excerpt: 'Redirect calls to any number or device.',
  },
  {
    title: 'Auto Attendant',
    slug: { current: 'auto-attendant' },
    excerpt: 'A virtual receptionist to greet and direct callers.',
    description: 'An Auto Attendant acts as a virtual receptionist, greeting callers and directing them to the right person or department without human intervention. This feature ensures that your business presents a professional image and that callers are handled efficiently, 24/7.',
    keyFeatures: [
      'Customizable Greetings: Record personalized greetings for business hours, after-hours, and holidays.',
      'Intuitive Call Routing: Set up menu options to route callers to specific extensions, departments, ring groups, or voicemail.',
      'Directory Listing: Allow callers to find a specific person by name using a dial-by-name directory.',
      'Multi-Level Menus: Create nested menus for more complex call routing needs.',
    ],
    benefits: [
        'Enhance Professional Image: Greet every caller with a consistent and professional message.',
        'Improve Caller Experience: Reduce wait times and connect callers to the right person faster.',
        'Increase Efficiency: Automate call handling to free up your team for other tasks.',
        'Ensure 24/7 Availability: Never miss a call, even outside of business hours.',
    ],
    commonUseCases: [
      'Route calls to sales and support teams.',
      'Provide business hours and location information.',
      'Set up special greetings for holidays or promotions.',
      'Direct calls to a company directory.',
    ]
  },
  {
    title: 'Call Recording',
    slug: { current: 'call-recording' },
    excerpt: 'Record calls for quality assurance and training.',
    description: 'Call Recording is a powerful feature that automatically records inbound and outbound calls. These recordings can be used for quality monitoring, training new staff, resolving disputes, and ensuring compliance with industry regulations.',
    keyFeatures: [
      'Automatic Recording: Record all calls to and from your business numbers without manual intervention.',
      'On-Demand Recording: Start and stop recordings manually during a call for specific cases.',
      'Secure Cloud Storage: Access recordings from anywhere with secure, centralized cloud storage.',
      'Easy Search and Playback: Quickly find and listen to recordings using a web-based interface.',
    ],
    benefits: [
      'Improve Quality Assurance: Review calls to monitor customer service quality and provide feedback to your team.',
      'Enhance Employee Training: Use real-world call examples to train new hires and develop existing staff.',
      'Resolve Disputes: Settle disagreements by referring to a verbatim record of the conversation.',
      'Ensure Compliance: Maintain records for legal and regulatory compliance.',
    ],
    commonUseCases: [
      'Monitor sales calls for quality and training.',
      'Review support calls to improve customer satisfaction.',
      'Archive calls for legal or compliance purposes.',
      'Settle a “he said, she said” dispute with a customer.',
    ],
  },
  {
    title: 'Ring Groups',
    slug: { current: 'ring-groups' },
    excerpt: 'Route calls to multiple extensions simultaneously.',
    description: 'Ring Groups, also known as hunt groups, allow you to route incoming calls to multiple extensions or phone numbers simultaneously or in a specific order. This ensures that calls are answered more quickly and efficiently by distributing them across a team.',
    keyFeatures: [
      'Simultaneous Ringing: Ring all extensions in the group at the same time.',
      'Sequential Ringing: Ring extensions one by one in a predefined order.',
      'Longest Idle Ringing: Send the call to the person who has been idle the longest.',
      'Customizable Ring Duration: Set how long to ring each extension before moving to the next or going to voicemail.',
    ],
    benefits: [
      'Reduce Caller Wait Times: Get calls answered faster by ringing multiple people at once.',
      'Improve Call Distribution: Evenly distribute call load among team members.',
      'Increase Team Availability: Ensure that even if one person is busy, another can answer the call.',
      'Enhance Customer Satisfaction: Provide a better experience by connecting callers to a live person more quickly.',
    ],
    commonUseCases: [
      'Sales Teams: Route incoming sales inquiries to all available sales representatives.',
      'Support Departments: Distribute support calls among a team of technicians.',
      'Reception Desks: Ring multiple receptionists to handle high call volumes.',
      'Small Businesses: Ensure someone always answers the main business line, even if one person is unavailable.',
    ],
  },
];
