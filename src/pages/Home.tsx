
import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, TrendingUp, Zap, Heart, Bolt, Shield, DollarSign, BarChart2, Users, CheckCircle, ChevronLeft, Phone, Mail, MessageSquare, Cog, LineChart, ShieldCheck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from '@/components/ui/progress';
import SolutionsByIndustry from '@/components/SolutionsByIndustry';
import TopSolutions from '@/components/TopSolutions';
import { SEO } from '@/components/layout/SEO';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

    const slideVariants = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -80 } };
    const imageVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

    const heroContent = [
        { title: "Intelligent Predictive Dialer", description: "Boost your outbound sales and marketing efforts with our AI-driven predictive dialer. Increase agent talk time, improve lead conversion rates, and ensure compliance with automated dialing regulations.", image: { src: "/hero-image.png", alt: "Predictive Dialer" }, ctaLink: "/contact" },
        { title: "Advanced Contact Center Solutions", description: "Empower your support and sales teams with our state-of-the-art contact center technology. Handle interactions from all channels in a single, intuitive interface, and leverage AI-powered tools for exceptional service.", image: { src: "/contact-center-solution-image.png", alt: "Contact Center" }, ctaLink: "/contact" },
        { title: "Cloud PBX System", description: "A flexible, scalable, and feature-rich cloud phone system for modern businesses.", image: { src: "/cloud-pbx-solution-image.png", alt: "Cloud PBX System" }, ctaLink: "/contact" }
    ];

    const startProgress = useCallback(() => {
        setProgress(0);
        if (progressTimerRef.current) clearInterval(progressTimerRef.current);
        progressTimerRef.current = setInterval(() => {
            setProgress(prev => prev + 100 / (5000 / 100));
        }, 100);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % heroContent.length);
        startProgress();
    }, [heroContent.length, startProgress]);

    const previousSlide = () => {
        setCurrentSlide(prev => (prev - 1 + heroContent.length) % heroContent.length);
        startProgress();
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
        startProgress();
    };

    useEffect(() => {
        if (!isPaused) {
            timerRef.current = setInterval(nextSlide, 5000);
            startProgress();
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            if (progressTimerRef.current) clearInterval(progressTimerRef.current);
        };
    }, [nextSlide, isPaused, startProgress]);

    const whyChooseUs = [
      { icon: TrendingUp, title: "Increase Productivity", description: "See a significant boost in agent productivity and call connection rates." },
      { icon: DollarSign, title: "Reduce Costs", description: "Lower operational costs with our efficient, cloud-based infrastructure." },
      { icon: Shield, title: "Expert Support", description: "Our dedicated support team is available 24/7 to help you succeed." },
    ];

    const provenResults = [
        { stat: "300%", description: "Increase in Agent Productivity" },
        { stat: "98.9%", description: "Uptime SLA" },
        { stat: "80%", description: "Reduction in Dropped Calls" },
    ];

    const values = [
        { icon: Heart, title: "Customer-First", description: "We are deeply committed to understanding and meeting our customers' needs." },
        { icon: Bolt, title: "Innovation", description: "We foster a culture of creativity and continuous improvement." },
        { icon: Shield, title: "Integrity", description: "We operate with transparency and honesty in every interaction." },
    ];

    const testimonials = [
        { quote: "This is a testimonial quote. The service is great!", name: "John Doe", company: "Company Inc.", rating: 5 },
        { quote: "Fantastic experience with the team. Highly recommended.", name: "Jane Smith", company: "Solutions Corp.", rating: 5 },
        { quote: "The platform is robust and easy to use. A game-changer.", name: "Peter Jones", company: "Innovate LLC", rating: 5 },
    ];

    const featureComparison = [
        { feature: "Call Recording", solo: true, pro: true, enterprise: true },
        { feature: "CRM Integration", solo: false, pro: true, enterprise: true },
        { feature: "Predictive Dialing", solo: false, pro: true, enterprise: true },
        { feature: "Advanced Analytics", solo: false, pro: false, enterprise: true },
    ];

    const faqs = [
        { question: "What is a predictive dialer?", answer: "A predictive dialer is an automated telephone dialing system that aenables call center agents to spend more time talking to prospects and less time waiting for calls to be answered." },
        { question: "How does your pricing work?", answer: "Our pricing is based on a per-user, per-month subscription model. We offer different tiers of service to fit your business needs." },
        { question: "Can I integrate with my existing CRM?", answer: "Yes, our platform integrates with most popular CRMs, including Salesforce, HubSpot, and Zoho." },
    ];

    const keyFeatures = [
        { icon: Phone, title: 'Intelligent Call Routing', description: 'Direct calls to the right agent or department automatically based on custom rules.' },
        { icon: MessageSquare, title: 'Unified Messaging', description: 'Combine SMS, web chat, and social media messages into a single agent interface.' },
        { icon: Cog, title: 'CRM Integration', description: 'Seamlessly connect with your existing CRM to sync data and streamline workflows.' },
        { icon: LineChart, title: 'Real-Time Analytics', description: 'Monitor performance with live dashboards and detailed reports on call activity.' },
        { icon: Users, title: 'Team Collaboration', description: 'Tools like internal chat and call conferencing to improve teamwork.' },
        { icon: ShieldCheck, title: 'Compliance & Security', description: 'Ensure your communications are secure and compliant with industry regulations.' },
    ];

    const currentHero = heroContent[currentSlide];
    if (!currentHero) return null;

    return (
        <>
            <SEO 
                title="FoneRoute - Intelligent Communication Solutions for Modern Businesses" 
                description="Elevate your business communication with FoneRoute's intelligent predictive dialer, advanced contact center solutions, and scalable cloud PBX systems. Boost productivity, reduce costs, and enhance customer satisfaction."
                keywords={['predictive dialer', 'contact center', 'cloud pbx', 'business communication', 'sales dialer']}
            />
            {/* Hero Section */}
            <section 
                className="relative group overflow-hidden bg-background pt-40 sm:pt-28 pb-20"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                 <div className="container-custom flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh] lg:min-h-[calc(100vh-8rem)]">
                    <div className="z-10 text-center lg:text-left relative">
                        <AnimatePresence mode="wait">
                            <motion.div key={currentSlide} initial="hidden" animate="visible" exit="exit" variants={slideVariants} transition={{ duration: 0.5, ease: 'easeInOut' }}>
                                <h1 className="text-4xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-6 leading-tight tracking-tighter">{currentHero.title}</h1>
                                <p className="text-lg md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">{currentHero.description}</p>
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                    <a href={currentHero.ctaLink} className="w-full sm:w-auto"><Button size="lg" variant="default" className="w-full h-12 text-base">Request a Demo</Button></a>
                                    <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 text-base">Learn More</Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="relative w-full h-full flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div key={currentSlide} initial="hidden" animate="visible" exit="exit" variants={imageVariants} transition={{ duration: 0.5, delay: 0.2 }} className="w-full h-full">
                                <img src={currentHero.image.src} alt={currentHero.image.alt} className="object-contain w-full h-80 md:h-96 lg:h-[500px] card-hover-animation" />
                            </motion.div>
                        </AnimatePresence>
                         {/* Responsive Navigation Buttons */}
                        <Button variant="outline" size="icon" onClick={previousSlide} className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 h-10 w-10 md:h-12 md:w-12 opacity-80 hover:opacity-100 transition-opacity lg:hidden"><ChevronLeft className="h-6 w-6" /></Button>
                        <Button variant="outline" size="icon" onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 h-10 w-10 md:h-12 md:w-12 opacity-80 hover:opacity-100 transition-opacity lg:hidden"><ChevronRight className="h-6 w-6" /></Button>
                        
                        {/* Desktop Navigation Buttons */}
                        <Button variant="outline" size="icon" onClick={previousSlide} className="absolute top-1/2 -translate-y-1/2 -left-16 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:inline-flex"><ChevronLeft className="h-6 w-6" /></Button>
                        <Button variant="outline" size="icon" onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 -right-16 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:inline-flex"><ChevronRight className="h-6 w-6" /></Button>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroContent.map((_, i) => (
                        <button
                            key={i}
                            className={`h-2 w-10 rounded-full transition-colors ${currentSlide === i ? 'bg-zinc-400' : 'bg-zinc-200'}`}
                            onClick={() => goToSlide(i)}
                        />
                    ))}
                </div>
                <Progress 
                    value={progress} 
                    className="absolute bottom-0 left-0 w-full h-1 bg-zinc-200" 
                    indicatorClassName="bg-zinc-400"
                />
            </section>

            {/* Key Features Section */}
            <section className="py-12 md:py-16">
                <div className="container-custom">
                    <div className="text-center mb-10 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl font-poppins font-bold">Comprehensive Features for Every Need</h2>
                        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Our platform is packed with powerful features to enhance every aspect of your business communication.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {keyFeatures.map((feature, i) => (
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

            {/* Why Choose Us */}
            <section className="py-12 md:py-16 bg-secondary">
                <div className="container-custom text-center">
                    <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">Why Choose Us?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12">Discover the advantages of partnering with us for your communication needs.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                                <Card className="bg-transparent border-0 shadow-none text-center card-hover-animation">
                                  <CardHeader>
                                      <div className="mx-auto text-primary w-fit mb-4"><item.icon className="h-10 w-10" /></div>
                                      <CardTitle className="font-poppins text-xl">{item.title}</CardTitle>
                                  </CardHeader>
                                  <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proven Results */}
            <section className="py-12 md:py-16">
                <div className="container-custom flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
                    <div className='text-center lg:text-left'>
                        <h2 className="text-2xl sm:text-3xl font-poppins font-bold">Proven Results That Drive Success</h2>
                        <p className="text-muted-foreground mt-4 mb-6">Our platform is designed to deliver measurable improvements to your key business metrics.</p>
                        <ul className="space-y-4 inline-block text-left max-w-md">
                            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> Increased agent productivity by up to 300%</li>
                            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> Reduced operational costs with cloud infrastructure</li>
                            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> 99.9% uptime SLA for reliable service</li>
                        </ul>
                        <div className="mt-8">
                            <Button asChild variant="default" size="lg" className="h-12 text-base"><Link to="/case-studies">View Case Studies</Link></Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
                        {provenResults.map((result, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
                                <Card className="bg-background shadow-lg h-full card-hover-animation">
                                    <CardContent className="pt-6">
                                        <p className="text-4xl font-bold text-primary statistic-number">{result.stat}</p>
                                        <p className="text-muted-foreground mt-2">{result.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-12 md:py-16 bg-secondary">
                <div className="container-custom text-center">
                    <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">Our Values</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12">The principles that guide our mission and define our character.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                                <Card className="bg-transparent border-0 shadow-none text-center card-hover-animation">
                                  <CardHeader>
                                      <div className="mx-auto text-primary w-fit mb-4"><item.icon className="h-10 w-10" /></div>
                                      <CardTitle className="font-poppins text-xl">{item.title}</CardTitle>
                                  </CardHeader>
                                  <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions by Industry */}
            <SolutionsByIndustry limit={3} />
            
            {/* Top Solutions Section */}
            <TopSolutions />

            {/* Testimonials */}
            <section className="py-12 md:py-16 bg-secondary">
                <div className="container-custom text-center">
                    <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">What Our Customers Say</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12">Real feedback from satisfied clients who trust our platform.</p>
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                        {testimonials.map((item, i) => (
                           <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                                <Card className="bg-background shadow-lg h-full text-left card-hover-animation">
                                    <CardHeader>
                                        <div className="flex text-primary">
                                            {[...Array(item.rating)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">"{item.quote}"</p>
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-muted-foreground">{item.company}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Comparison */}
            <section className="py-12 md:py-16">
                <div className="container-custom text-center">
                    <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">Feature Comparison</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12">Find the perfect plan that fits the scale and needs of your business.</p>
                    <div className="overflow-x-auto rounded-lg border shadow-md card-hover-animation">
                        <Card className="min-w-[600px]">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b bg-secondary/50">
                                        <th className="p-4 text-left font-poppins text-sm">Feature</th>
                                        <th className="p-4 font-poppins text-sm">Solo</th>
                                        <th className="p-4 font-poppins text-sm">Pro</th>
                                        <th className="p-4 font-poppins text-sm">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {featureComparison.map((item, i) => (
                                        <tr key={i} className="hover:bg-secondary/30">
                                            <td className="p-4 text-left text-sm">{item.feature}</td>
                                            <td className="p-4">{item.solo ? <CheckCircle className="h-5 w-5 text-primary mx-auto" /> : '–'}</td>
                                            <td className="p-4">{item.pro ? <CheckCircle className="h-5 w-5 text-primary mx-auto" /> : '–'}</td>
                                            <td className="p-4">{item.enterprise ? <CheckCircle className="h-5 w-5 text-primary mx-auto" /> : '–'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-12 md:py-16 bg-secondary">
                <div className="container-custom max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-center mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 md:mb-12">Quick answers to common questions about our platform and services.</p>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                             <AccordionItem key={i} value={`item-${i}`}>
                                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </>
    );
};

export default Home;
