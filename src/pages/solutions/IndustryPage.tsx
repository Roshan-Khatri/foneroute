
import { useParams, Link } from 'react-router-dom';
import { industries } from '@/content/industries';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertTriangle, Briefcase, Zap, Users, Shield, Mic, Lock, ShieldAlert, Database, Calendar, Video, Bot, Mail, Code, Cloud, Globe, Truck, Megaphone, Smartphone, Server, Phone, ConciergeBell, Star, FileLock, Inbox, Clock, Archive, ArrowLeft } from 'lucide-react';

// Helper to get the correct icon component
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'CheckCircle': return CheckCircle;
    case 'AlertTriangle': return AlertTriangle;
    case 'Briefcase': return Briefcase;
    case 'Zap': return Zap;
    case 'Users': return Users;
    case 'Shield': return Shield;
    case 'Mic': return Mic;
    case 'Lock': return Lock;
    case 'ShieldAlert': return ShieldAlert;
    case 'Database': return Database;
    case 'Calendar': return Calendar;
    case 'Video': return Video;
    case 'Bot': return Bot;
    case 'Mail': return Mail;
    case 'Code': return Code;
    case 'Cloud': return Cloud;
    case 'Globe': return Globe;
    case 'Truck': return Truck;
    case 'Megaphone': return Megaphone;
    case 'Smartphone': return Smartphone;
    case 'Server': return Server;
    case 'Phone': return Phone;
    case 'ConciergeBell': return ConciergeBell;
    case 'Star': return Star;
    case 'FileLock': return FileLock;
    case 'Inbox': return Inbox;
    case 'Clock': return Clock;
    case 'Archive': return Archive;
    default: return Briefcase; // Default icon
  }
};

const IndustryPage = () => {
  const { slug } = useParams();
  const industry = industries.find((ind) => ind.slug === slug);

  if (!industry) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20">
          <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
          <h1 className="text-4xl font-bold mb-2">Industry Not Found</h1>
          <p className="text-muted-foreground mb-6">Sorry, we couldn't find the industry you're looking for.</p>
          <Button asChild>
              <Link to="/solutions"><ArrowLeft className="mr-2 h-4 w-4" />Back to Solutions</Link>
          </Button>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {industry.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {industry.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="pt-0 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {industry.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Key Problems Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Key Industry Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(industry.keyProblems || []).map((problem, index) => (
              <Card key={index} className="bg-background/70 border-none shadow-lg">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  <CardTitle className="text-lg font-semibold">{problem}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Tailored Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(industry.ourSolutions || industry.features || []).map((solution) => {
              const Icon = getIcon(solution.icon || 'Briefcase');
              return (
                <Card key={solution.title} className="flex flex-col md:flex-row items-start p-6 border-l-4 border-primary shadow-sm hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-primary/10 rounded-full mr-6 mb-4 md:mb-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Real-World Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(industry.useCases || []).map((useCase, index) => (
              <Card key={index} className="bg-background/70 border-none shadow-lg transform transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {(industry.benefits || []).map((benefit, index) => (
              <Badge key={index} variant="default" className="text-lg font-medium py-2 px-4 shadow-sm flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                {benefit}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;
