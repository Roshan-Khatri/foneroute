
import React from 'react';
import { SEO } from '@/components/layout/SEO';
import PageHeader from '@/components/layout/PageHeader';

// A self-contained component to display the Contact Center solution content.
// This bypasses the faulty shared 'Solution.tsx' component.

const ContactCenterSolutionPage = () => {
  const solution = {
    title: 'Contact Center Solution',
    hero: {
      title: 'Deliver Exceptional Customer Service with Our Contact Center Solution',
      subtitle: 'Empower your agents with an all-in-one omnichannel platform designed for modern customer engagement.',
    },
    overview: 'Our Contact Center Solution is a comprehensive, cloud-based platform that enables you to manage all your customer interactions—voice, email, chat, and social media—from a single, unified interface. It is designed to help you deliver seamless, personalized, and efficient customer service. By equipping your agents with powerful tools and providing managers with real-time insights, our solution empowers your team to resolve issues faster and create exceptional customer experiences.',
    features: [
      { title: 'Omnichannel Routing', description: 'Intelligently route all incoming interactions from any channel to the most appropriate agent based on skills, availability, and customer history.' },
      { title: 'Advanced IVR & Self-Service', description: 'Build sophisticated Interactive Voice Response (IVR) flows that allow customers to self-serve for common inquiries, freeing up agents for more complex issues.' },
      { title: 'Unified Agent Desktop', description: 'Give your agents a single view of the customer, with access to their entire interaction history across all channels, right at their fingertips.' },
      { title: 'Real-Time & Historical Reporting', description: 'Monitor key metrics, track agent performance, and gain deep insights into your contact center operations with customizable dashboards and reports.' },
    ],
  };

  const renderSection = (title, items) => (
    <section className="py-12 md:py-16 bg-background alternate-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="p-6 bg-surface rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <SEO title={solution.title} description={solution.hero.subtitle} />
      <div className="relative">
        <PageHeader title={solution.hero.title} subtitle={solution.hero.subtitle} />
        <main>
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{solution.overview}</p>
            </div>
          </section>
          {solution.features && solution.features.length > 0 && renderSection('Key Features', solution.features)}
        </main>
      </div>
    </>
  );
};

export default ContactCenterSolutionPage;
