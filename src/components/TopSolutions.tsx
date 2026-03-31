import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, BarChart2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const topSolutions = [
    { 
        icon: Zap, 
        title: "Contact Center Solution", 
        description: "A comprehensive solution for managing customer interactions across all channels.", 
        link: "/solutions/contact-center" 
    },
    { 
        icon: BarChart2, 
        title: "Predictive Dialer", 
        description: "Boost sales and marketing with our AI-driven predictive dialer.", 
        link: "/solutions/contact-center/predictive-dialer" 
    },
    { 
        icon: Users, 
        title: "Cloud PBX System", 
        description: "A flexible, scalable, and feature-rich cloud phone system for modern businesses.", 
        link: "/solutions/cloud-pbx" 
    },
];

const TopSolutions = () => {
    return (
        <section className="py-12 md:py-16">
            <div className="container-custom">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-poppins font-bold">Top Solutions</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                        Based on user engagement, these are our most popular solutions.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {topSolutions.map((solution, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-background shadow-lg h-full text-center card-hover-animation">
                                <CardHeader>
                                    
                                    {/* ✅ FINAL FIX */}
                                    <div className="mx-auto p-3 rounded-full w-fit mb-4 bg-black dark:bg-white">
                                        <solution.icon className="h-6 w-6 stroke-white dark:stroke-black" />
                                    </div>

                                    <CardTitle className="font-poppins">{solution.title}</CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-muted-foreground mb-6">
                                        {solution.description}
                                    </p>

                                    <Button asChild variant="custom">
                                        <Link to={solution.link}>Explore Solution</Link>
                                    </Button>
                                </CardContent>

                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopSolutions;