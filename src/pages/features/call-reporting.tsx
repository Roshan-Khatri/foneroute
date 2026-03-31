
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const capabilities = [
    {
        title: 'Real-time Dashboards',
        description: 'Monitor call queues, agent status, and service levels as they happen with customizable, live-updating wallboards and dashboards.'
    },
    {
        title: 'Historical Reporting',
        description: 'Analyze trends, track KPIs, and evaluate performance over time with a comprehensive suite of historical reports on calls, agents, and queues.'
    },
    {
        title: 'Dialer & Campaign Analytics',
        description: 'Measure the effectiveness of your outbound campaigns with detailed reports on contact rates, conversion rates, and agent performance.'
    },
    {
        title: 'CRM & App Integration',
        description: 'Sync call data seamlessly with your CRM and other business tools. Build custom reports and trigger workflows using our developer-friendly API.'
    }
]

const benefits = [
  { title: 'Improve Agent Performance' },
  { title: 'Enhance Customer Experience' },
  { title: 'Boost Operational Efficiency' },
  { title: 'Increase Business ROI' },
];

const useCases = [
    {
        title: 'Sales Team Performance',
        description: 'Track outbound call volume, connection rates, and conversion metrics to evaluate sales effectiveness and coach top performers.'
    },
    {
        title: 'Customer Support Metrics',
        description: 'Monitor average handle time (AHT), first call resolution (FCR), and customer satisfaction (CSAT) scores to improve support quality.'
    },
    {
        title: 'Contact Center Operations',
        description: 'Analyze call volume trends, peak hours, and abandonment rates to optimize staffing levels and improve service levels.'
    }
]

const CallReportingPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Comprehensive Call Reporting | FoneRoute</title>
        <meta
          name="description"
          content="Gain deep insights into your call performance, agent productivity, and customer experience with our advanced reporting and analytics tools."
        />
      </Helmet>
      <div className="bg-background text-foreground">
        {/* Hero Section */}
        <motion.section
          className="section-padding bg-background mt-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="container-custom text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold font-poppins tracking-tight mb-4"
              variants={fadeInUp}
            >
              Comprehensive Call Reporting
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              variants={fadeInUp}
            >
              Gain deep insights into your call performance, agent productivity, and customer experience with our advanced reporting and analytics tools.
            </motion.p>
          </div>
        </motion.section>

        {/* Overview Section */}
        <motion.section
          className="section-padding-g bg-surface"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-8">Overview</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="card-professional text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    From high-level dashboards to granular, call-by-call analysis, FoneRoute provides the tools you need to turn raw call data into actionable business intelligence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Key Capabilities Section */}
        <motion.section
          className="section-padding"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-12">Key Capabilities</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-left"
              variants={staggerContainer}
            >
              {capabilities.map((capability, index) => (
                <motion.div key={index} variants={staggerItem} className="flex">
                    <Card className="card-professional flex flex-col w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <CardHeader>
                        <CardTitle>{capability.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                            {capability.description}
                        </p>
                        </CardContent>
                    </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          className="section-padding-g bg-surface"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-12">Benefits</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto"
              variants={staggerContainer}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-left gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-background/80 shadow-sm hover:-translate-y-1"
                  variants={staggerItem}
                >
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium text-foreground flex-1">{benefit.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Use Cases Section */}
        <motion.section
          className="section-padding"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
            <div className="container-custom text-center">
                <h2 className="text-3xl font-bold mb-12">Common Use Cases</h2>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left" variants={staggerContainer}>
                    {useCases.map((useCase, index) => (
                        <motion.div key={index} variants={staggerItem} className="flex">
                            <Card className="card-professional flex flex-col w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <CardHeader>
                                    <CardTitle>{useCase.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">
                                        {useCase.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
      </div>
    </>
  );
};

export default CallReportingPage;
