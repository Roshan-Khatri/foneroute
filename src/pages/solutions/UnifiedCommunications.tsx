
import React from 'react';
import Solution from './Solution';
import { Solution as SolutionType } from '@/types/solution';

const UnifiedCommunications = () => {
  const solution: SolutionType = {
    title: 'Unified Communications',
    slug: { current: 'unified-communications' },
    hero: {
      title: 'Unify Your Business Communications in a Single Platform',
      subtitle: 'Integrate voice, video, messaging, and collaboration tools into one seamless experience to boost productivity and simplify communication.',
    },
    overview: 'Unified Communications as a Service (UCaaS) is a cloud-based solution that brings together all your business communication channels into a single, intuitive platform. It breaks down communication silos by allowing your team to seamlessly switch between voice calls, video meetings, and instant messaging from any device, anywhere. By providing a consistent and integrated user experience, UCaaS simplifies workflows, enhances collaboration, and empowers your team to work more efficiently.',
    features: [
      { title: 'HD Voice & Video Calling', description: 'Make and receive high-definition voice and video calls from your desk phone, computer, or mobile device.' },
      { title: 'Team Chat & Instant Messaging', description: 'Create private or public channels for team discussions, share files, and get instant feedback with real-time messaging.' },
      { title: 'Video Conferencing & Webinars', description: 'Host online meetings with screen sharing, virtual backgrounds, and recording capabilities to connect with your team and customers.' },
      { title: 'Presence Status', description: 'See the real-time availability of your colleagues—whether they are on a call, in a meeting, or available—to reduce interruptions.' },
      { title: 'One Unified Application', description: 'Access all your communication tools—voice, video, and chat—from a single, easy-to-use application on any device.' },
      { title: 'Seamless Integration with Business Apps', description: 'Integrate with popular tools like Google Workspace, Microsoft 365, and your CRM to streamline workflows and boost productivity.' },
    ],
    benefits: [
      { title: 'Boost Productivity & Collaboration', description: 'With all communication tools in one place, your team can collaborate more effectively and make faster decisions.' },
      { title: 'Simplify IT Management', description: 'A single, cloud-based platform is easier to manage, maintain, and scale than multiple disparate systems.' },
      { title: 'Reduce Communication Costs', description: 'Consolidate your communication expenses into a single, predictable monthly subscription and reduce reliance on multiple vendors.' },
      { title: 'Enhance the Employee Experience', description: 'Empower your employees with the flexibility to communicate and collaborate from anywhere, on any device, improving job satisfaction and retention.' },
    ],
    useCases: [
      { title: 'Hybrid & Remote Teams', description: 'Provide a consistent communication experience for employees, whether they are in the office, at home, or on the go.' },
      { title: 'Fast-Growing Companies', description: 'A scalable solution that can easily grow with your business, allowing you to add new users and features as you expand.' },
      { title: 'Businesses with Multiple Locations', description: 'Connect all your offices and employees under a single, unified communication system, fostering a sense of a single, cohesive organization.' },
      { title: 'Organizations Focused on Collaboration', description: 'For teams that rely on close collaboration, UCaaS provides the integrated tools needed to drive innovation and efficiency.' },
    ],
    relatedSolutions: [
      { title: 'Cloud PBX', slug: { current: 'cloud-pbx' } },
      { title: 'Contact Center', slug: { current: 'contact-center' } },
    ],
  };

  return <Solution solution={solution} />;
};

export default UnifiedCommunications;
