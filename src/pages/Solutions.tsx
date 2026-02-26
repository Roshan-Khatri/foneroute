
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, BarChart2, Users, Phone, MessageSquare, Cog, LineChart, ShieldCheck } from 'lucide-react';
import SolutionsByIndustry from '@/components/SolutionsByIndustry';

const iconMap = {
    Zap,
    BarChart2,
    Users,
    Phone,
    MessageSquare,
    Cog,
    LineChart,
    ShieldCheck,
};

const coreSolutions = [
    {
      title: 'Contact Center Solution',
      description: 'A comprehensive solution for managing customer interactions across all channels. Provide exceptional service with our intuitive agent interface and powerful analytics.',
      slug: 'contact-center',
      icon: 'Zap'
    },
    {
      title: 'Predictive Dialer',
      description: 'Boost sales and marketing with our AI-driven predictive dialer. Increase agent talk time, improve lead conversion rates, and ensure compliance.',
      slug: 'contact-center/predictive-dialer',
      icon: 'BarChart2'
    },
    {
      title: 'Cloud PBX System',
      description: 'A flexible, scalable, and feature-rich cloud phone system for modern businesses. Enjoy crystal-clear voice quality and advanced features like call forwarding and voicemail-to-email.',
      slug: 'cloud-pbx',
      icon: 'Users'
    }
  ];

const features = [
    { icon: Phone, title: 'Intelligent Call Routing', description: 'Direct calls to the right agent or department automatically based on custom rules.' },
    { icon: MessageSquare, title: 'Unified Messaging', description: 'Combine SMS, web chat, and social media messages into a single agent interface.' },
    { icon: Cog, title: 'CRM Integration', description: 'Seamlessly connect with your existing CRM to sync data and streamline workflows.' },
    { icon: LineChart, title: 'Real-Time Analytics', description: 'Monitor performance with live dashboards and detailed reports on call activity.' },
    { icon: Users, title: 'Team Collaboration', description: 'Tools like internal chat and call conferencing to improve teamwork.' },
    { icon: ShieldCheck, title: 'Compliance & Security', description: 'Ensure your communications are secure and compliant with industry regulations.' },
];

const Solutions = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="pt-28 pb-20 bg-secondary">
                <div className="container-custom text-center">
                    <h1 className="text-4xl lg:text-5xl font-poppins font-bold mb-4 text-foreground">Our Solutions</h1>
                    <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
                        A complete suite of communication tools designed to help your business grow.
                    </p>
                </div>
            </section>

            {/* Core Solutions Section */}
            <section className="py-16 bg-background">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-poppins font-bold">Our Core Solutions</h2>
                        <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">Click to learn more about each of our powerful solutions.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {coreSolutions.map((solution, i) => {
                            const Icon = iconMap[solution.icon];
                            return (
                                <Card key={i} className="bg-card shadow-sm border border-gray-200 h-full text-center flex flex-col p-8 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                    <CardHeader className="p-0">
                                        {Icon && <Icon className="h-8 w-8 text-foreground mx-auto mb-4" />}
                                        <CardTitle className="font-poppins text-xl font-bold">{solution.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow p-0 mt-4">
                                        <p className="text-muted-foreground">{solution.description}</p>
                                    </CardContent>
                                    <div className="mt-auto pt-6">
                                        <Button variant="outline" asChild>
                                            <Link to={`/solutions/${solution.slug}`}>Learn More</Link>
                                        </Button>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Solutions by Industry */}
            <SolutionsByIndustry />

            {/* All Features Section */}
            <section className="py-16 bg-background">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-poppins font-bold">All Features</h2>
                        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                            A closer look at the features that make our platform so powerful.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature,i) => (
                                <Card key={i} className="bg-background shadow-lg h-full text-left card-hover-animation">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="bg-primary text-primary-foreground p-3 rounded-full">
                                            <feature.icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="font-poppins text-lg">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </CardContent>
                                </Card>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Solutions;
