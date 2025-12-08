
import { useParams } from 'react-router-dom';
import { industries } from '@/content/industries';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Phone, MessageSquare, Cog, LineChart, Users, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const featureIcons = {
    'Intelligent Call Routing': Phone,
    'Unified Messaging': MessageSquare,
    'CRM Integration': Cog,
    'Real-Time Analytics': LineChart,
    'Team Collaboration': Users,
    'Compliance & Security': ShieldCheck,
};

const IndustryDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const industry = industries.find(ind => ind.slug.current === slug);

    if (!industry) {
        return <div>Industry not found</div>;
    }

    return (
        <main className="flex-1">
            {/* Breadcrumbs */}
            <section className="bg-gray-100 py-4">
                <div className="container-custom">
                    <p className="text-muted-foreground">
                        <Link to="/solutions" className="hover:underline">Solutions</Link>
                        <span className="mx-2">{'>'}</span>
                        <span>{industry.title}</span>
                    </p>
                </div>
            </section>

            {/* Hero Section */}
            <section className="bg-background py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl lg:text-5xl font-poppins font-bold mb-4">{industry.title}</h1>
                    <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
                        {industry.description}
                    </p>
                </div>
            </section>

            {/* Features and Solutions Section */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-poppins font-bold">Key Features & Solutions</h2>
                        <p className="text-muted-foreground mt-2">Solutions tailored for the {industry.title} industry.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industry.solutions.map((solution, i) => {
                            const Icon = featureIcons[solution.title] || CheckCircle;
                            return (
                                <Card key={i} className="bg-background shadow-lg h-full text-left card-hover-animation">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="bg-primary text-primary-foreground p-3 rounded-full">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="font-poppins text-lg">{solution.title}</CardTitle>
                                    </CardHeader>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default IndustryDetailPage;
