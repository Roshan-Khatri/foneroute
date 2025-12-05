
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, BarChart2, Users, Phone, MessageSquare, Cog, LineChart, ShieldCheck } from 'lucide-react';
import SolutionsByIndustry from '@/components/SolutionsByIndustry';
import { Industry } from '@/sanity/types';
import { industries } from '@/content/industries';

const solutions = [
    { 
        icon: Zap, 
        title: "Contact Center Solution", 
        description: "A comprehensive solution for managing customer interactions across all channels. Provide exceptional service with our intuitive agent interface and powerful analytics.", 
        link: "/solutions/contact-center" 
    },
    { 
        icon: BarChart2, 
        title: "Predictive Dialer", 
        description: "Boost sales and marketing with our AI-driven predictive dialer. Increase agent talk time, improve lead conversion rates, and ensure compliance.", 
        link: "/solutions/predictive-dialer" 
    },
    { 
        icon: Users, 
        title: "Cloud PBX System", 
        description: "A flexible, scalable, and feature-rich cloud phone system for modern businesses. Enjoy crystal-clear voice quality and advanced features like call forwarding and voicemail-to-email.", 
        link: "/solutions/cloud-pbx" 
    },
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
    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="bg-gray-100 py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl lg:text-5xl font-poppins font-bold mb-4">Our Solutions</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        A complete suite of communication tools designed to help your business grow.
                    </p>
                </div>
            </section>

            {/* Core Solutions Section */}
            <section className="py-16 bg-background">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-poppins font-bold">Our Core Solutions</h2>
                        <p className="text-muted-foreground mt-2">Click to learn more about each of our powerful solutions.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {solutions.map((solution, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                                <Card className="bg-background shadow-lg h-full text-center card-hover-animation">
                                    <CardHeader>
                                        <div className="mx-auto bg-primary text-primary-foreground p-3 rounded-full w-fit mb-4"><solution.icon className="h-6 w-6" /></div>
                                        <CardTitle className="font-poppins">{solution.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">{solution.description}</p>
                                        <Button asChild>
                                            <Link to={solution.link}>Learn More</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions by Industry */}
            <SolutionsByIndustry industries={industries as Industry[]} />

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
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                                <Card className="bg-background shadow-lg h-full text-left card-hover-animation">
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Solutions;
