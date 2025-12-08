
import React from 'react';
import Solution from './Solution';
import { Solution as SolutionType } from '@/types/solution';

const PowerDialer = () => {
  const solution: SolutionType = {
    title: 'Power Dialer',
    slug: { current: 'power-dialer' },
    hero: {
      title: 'Amplify Your Outreach with Power Dialer',
      subtitle: 'Supercharge your sales and telemarketing teams by automating dialing processes, eliminating manual effort, and connecting agents only to live prospects.',
    },
    overview: 'Our Power Dialer is a high-performance outbound calling system designed to maximize agent productivity. It automatically dials numbers from a predefined list and connects agents to calls answered by a live person, bypassing busy signals, unanswered calls, and voicemails. This allows your team to spend more time talking to potential customers and less time dialing.',
    features: [
      { title: 'Automated High-Speed Dialing', description: 'Dials through your contact lists at a pace you control, ensuring a steady stream of live connections for your agents.' },
      { title: 'Answering Machine Detection', description: 'Intelligently detects and skips voicemails and answering machines, ensuring agents only handle live calls.' },
      { title: 'Campaign Management', description: 'Easily create, manage, and monitor multiple dialing campaigns with different lists and settings.' },
      { title: 'Real-Time Reporting', description: 'Track key metrics like call volume, connection rates, and agent performance with live dashboards and analytics.' },
      { title: 'CRM Integration', description: 'Seamlessly integrate with your existing CRM to log calls, update records, and streamline workflows.' },
      { title: 'Click-to-Call', description: 'Initiate calls directly from your CRM or any web application with a single click.' },
    ],
    benefits: [
      { title: 'Increase Agent Productivity', description: 'Agents spend more time talking to prospects and less time on manual dialing, leading to a significant increase in talk time.' },
      { title: 'Improve Connection Rates', description: 'Focus on live answers and bypass unproductive numbers to improve your overall connection success.' },
      { title: 'Accelerate Sales Cycles', description: 'More conversations lead to more qualified leads and faster conversions.' },
      { title: 'Enhance Agent Morale', description: 'By removing repetitive manual tasks, agents can focus on what they do best: selling and engaging with customers.' },
    ],
    useCases: [
      { title: 'Outbound Sales', description: 'Ideal for sales development teams making high volumes of calls to generate leads and set appointments.' },
      { title: 'Telemarketing Campaigns', description: 'Efficiently run telemarketing campaigns to reach a large audience in a short amount of time.' },
      { title: 'Customer Surveys', description: 'Conduct customer feedback surveys and market research quickly and effectively.' },
    ],
    relatedSolutions: [
      { title: 'Predictive Dialer', slug: { current: 'predictive-dialer' } },
      { title: 'Auto Dialer', slug: { current: 'auto-dialer' } },
      { title: 'Contact Center', slug: { current: 'contact-center' } },
    ],
  };

  return <Solution solution={solution} />;
};

export default PowerDialer;
