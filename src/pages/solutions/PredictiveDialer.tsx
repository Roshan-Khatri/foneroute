import React from 'react';
import Solution from './Solution';

const PredictiveDialer = () => {
  const solution = {
    title: 'Predictive Dialer',
    slug: { current: 'predictive-dialer' },
    hero: {
      title: 'Maximize Efficiency with Predictive Dialer',
      subtitle: 'Use AI-powered algorithms to predict agent availability and connect them to live calls at the perfect moment, dramatically increasing outbound call volume.',
    },
    overview: 'Our Predictive Dialer is an intelligent outbound calling system that uses machine learning to optimize your dialing rate. It dials multiple numbers simultaneously and analyzes call metrics in real-time to predict when an agent will become available. The system then connects answered calls to the next free agent, minimizing idle time and maximizing productivity. It is the ultimate tool for high-volume outbound contact centers.',
    features: [
      { title: 'AI-Powered Predictive Algorithm', description: 'Leverages machine learning to adjust the dialing rate based on agent availability, call abandonment rates, and other real-time metrics.' },
      { title: 'Real-Time Pacing Adjustment', description: 'Automatically adapts the dialing pace to ensure a minimal wait time between calls and a low drop rate.' },
      { title: 'Advanced Answering Machine Detection', description: 'Accurately distinguishes between live answers and answering machines to ensure agents only receive connected calls.' },
      { title: 'Compliance Management Tools', description: 'Helps you adhere to regulatory requirements like TCPA and Ofcom with features like time zone management and drop rate controls.' },
      { title: 'Advanced Campaign Analytics', description: 'Gain deep insights into campaign performance with detailed reports on agent productivity, lead penetration, and call outcomes.' },
      { title: 'Seamless CRM Integration', description: 'Integrate with popular CRMs to automate workflows, sync data, and provide agents with contextual information.' },
    ],
    benefits: [
      { title: 'Dramatically Increase Agent Talk Time', description: 'By connecting only live calls and minimizing idle time, agents can spend up to 50 minutes of every hour in active conversation.' },
      { title: 'Reduce Agent Idle Time', description: 'The predictive algorithm ensures there is always a call ready for the next available agent, eliminating costly downtime.' },
      { title: 'Improve Lead Conversion Rates', description: 'More talk time means more opportunities to pitch, qualify, and convert leads into customers.' },
      { title: 'Ensure Regulatory Compliance', description: 'Built-in tools help you manage compliance and avoid costly penalties, providing peace of mind.' },
    ],
    useCases: [
      { title: 'High-Volume Telemarketing', description: 'Perfect for large-scale telemarketing operations that need to contact thousands of leads per day.' },
      { title: 'Debt Collection', description: 'Efficiently manage high volumes of outbound calls to collection accounts, improving right-party contact rates.' },
      { title: 'Political Campaigning', description: 'Quickly reach voters for get-out-the-vote campaigns, polling, and fundraising efforts.' },
      { title: 'Market Research & Surveys', description: 'Gather valuable market data by conducting large-scale surveys in a fraction of the time.' },
    ],
    relatedSolutions: [
      { title: 'Power Dialer', slug: { current: 'power-dialer' } },
      { title: 'Auto Dialer', slug: { current: 'auto-dialer' } },
      { title: 'Contact Center', slug: { current: 'contact-center' } },
    ],
  } as any;

  return <Solution solution={solution} />;
};

export default PredictiveDialer;
