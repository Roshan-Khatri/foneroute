
import React from 'react';
import { SEO } from '@/components/layout/SEO';
import PageHeader from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const ContactCenterSolutionPage = () => {
  const solution = {
    title: 'Contact Center',
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
    benefits: [
        {
            title: 'Improved Customer Satisfaction',
            description: 'By providing faster response times, personalized interactions, and a seamless experience across all channels, our solution helps you build stronger customer relationships and boost satisfaction.',
        },
        {
            title: 'Increased Agent Efficiency',
            description: 'The unified agent desktop, AI-powered assistance, and workflow automation enable your agents to handle more interactions in less time, reducing operational costs and improving productivity.',
        },
        {
            title: 'Enhanced Operational Insights',
            description: 'With our advanced reporting and analytics, you can track key performance indicators (KPIs), identify trends, and make data-driven decisions to optimize your contact center operations.',
        },
        {
            title: 'Greater Scalability & Flexibility',
            description: 'Our cloud-based platform allows you to easily scale your operations up or down, add new channels, and integrate with other business systems, ensuring that your contact center can adapt to changing demands.',
        },
    ],
    faq: [
      {
        question: 'What is an omnichannel contact center?',
        answer: 'An omnichannel contact center provides a seamless and consistent customer experience across all communication channels, such as voice, email, chat, and social media. It allows agents to have a unified view of customer interactions, leading to more personalized and efficient service.'
      },
      {
        question: 'How does your solution improve agent productivity?',
        answer: 'Our solution boosts agent productivity by providing a unified agent desktop, which eliminates the need to switch between applications. Features like skill-based routing, CRM integration, and knowledge base access empower agents to resolve customer issues faster and more effectively.'
      },
      {
        question: 'Is the contact center solution scalable?',
        answer: 'Yes, our cloud-based platform is designed to be highly scalable. You can easily add or remove agents, channels, and features as your business needs evolve, ensuring that you only pay for what you use.'
      },
    ],
  };

  const renderSection = (title, items) => (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold">{title}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <Card className="bg-background shadow-lg h-full text-left card-hover-animation">
                    <CardHeader>
                        <CardTitle className="font-poppins text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderFAQ = (title, items) => (
    <section className="py-12 md:py-16">
        <div className="container-custom max-w-3xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl font-poppins font-bold">{title}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {items.map((faq, i) => (
                     <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
  );

  return (
    <>
      <SEO title={solution.title} description={solution.hero.subtitle} />
      <div>
        <PageHeader title={solution.hero.title} subtitle={solution.hero.subtitle} />
        <main>
          <section className="py-12 md:py-16">
            <div className="container-custom max-w-4xl text-center">
              <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">Overview</h2>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {solution.overview}
              </motion.p>
            </div>
          </section>
          
          {solution.features && solution.features.length > 0 && renderSection('Key Features', solution.features)}
          {solution.benefits && solution.benefits.length > 0 && renderSection('Benefits', solution.benefits)}

          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container-custom text-center">
                <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-base md:text-lg max-w-2xl mx-auto mb-8">
                    Contact our sales team to get a personalized demo for the Contact Center industry.
                </p>
                <Button size="lg" variant="secondary" asChild className="h-12 text-base">
                    <Link to="/contact">Contact Sales</Link>
                </Button>
            </div>
          </section>

          {solution.faq && solution.faq.length > 0 && renderFAQ('Frequently Asked Questions', solution.faq)}
        </main>
      </div>
    </>
  );
};

export default ContactCenterSolutionPage;
