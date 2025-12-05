
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Search, UserCircle, Wrench, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useDebounce } from '@/hooks/useDebounce';

const faqs = [
  {
    question: "What is FoneRoute?",
    answer: "FoneRoute is a leading provider of cloud-based communication solutions, including contact centers, auto dialers, and unified communications platforms."
  },
  {
    question: "How can I get started?",
    answer: "You can get started by signing up for a free trial on our website or by contacting our sales team for a personalized demo."
  },
  {
    question: "What are your support hours?",
    answer: "Our support team is available 24/7 to assist you with any issues or questions you may have. You can reach us by phone, email, or live chat."
  },
  {
    question: "Do you offer international numbers?",
    answer: "Yes, FoneRoute provides international numbers in over 100 countries, allowing you to establish a local presence anywhere in the world."
  },
];

const helpCategories = [
    {
        icon: <UserCircle size={48} className="text-primary" />,
        title: 'Account & Subscription',
        description: 'Manage profile, billing, login help',
        link: '/contact?topic=account',
    },
    {
        icon: <Wrench size={48} className="text-primary" />,
        title: 'Technical Support',
        description: 'Troubleshooting, product issues, setup guides',
        link: '/contact?topic=tech-support',
    },
    {
        icon: <Mail size={48} className="text-primary" />,
        title: 'Contact Us',
        description: 'Live support, email support, business inquiries',
        link: '/contact',
    },
];

const Support = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );

    const isSearching = searchTerm !== debouncedSearchTerm;

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="py-20 text-center bg-background">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Support Center</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        We’re here to help you with anything — explore solutions or contact our team.
                    </p>
                    <div className="relative max-w-lg mx-auto">
                        <Input
                            type="search"
                            placeholder="Search FAQs..."
                            className="pl-12 pr-4 py-3 text-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                         <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                    </div>
                </div>
            </section>

            {/* Help Categories Section */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {helpCategories.map((category, index) => (
                            <Card key={index} className="text-center card-hover-animation">
                                <CardHeader>
                                    <div className="flex justify-center mb-4">{category.icon}</div>
                                    <CardTitle>{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6">{category.description}</p>
                                    <Button asChild variant="outline">
                                        <Link to={category.link}>Get Help</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Search Results */}
            {(debouncedSearchTerm) && (
                <section className="py-16 bg-muted/30">
                    <div className="container-custom max-w-3xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Search Results
                        </h2>
                        {isSearching ? (
                            <div className="flex justify-center items-center">
                                <Loader className="animate-spin h-8 w-8 text-primary" />
                            </div>
                        ) : filteredFaqs.length > 0 ? (
                            <Accordion type="single" collapsible className="w-full">
                            {filteredFaqs.map((faq, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                            </Accordion>
                        ) : (
                            <p className="text-center text-muted-foreground">No results found for "{debouncedSearchTerm}"</p>
                        )}
                    </div>
                </section>
            )}

            {/* "Need More Help?" Section */}
            <section className="py-20 text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Our support team is just a click away. Get in touch with us for personalized assistance.
                    </p>
                    <Button asChild size="lg">
                        <Link to="/contact">Talk to Support</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Support;
