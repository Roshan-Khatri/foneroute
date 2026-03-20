
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Cloud, Users, TrendingUp } from 'lucide-react';

const TechnologyPage = () => {
  const { slug } = useParams();

  const solutions = [
    {
      icon: Cloud,
      title: 'Scalable Cloud Communications',
      description: 'Build on a flexible, scalable cloud platform that grows with your business, from startup to enterprise.',
    },
    {
      icon: Code,
      title: 'Developer-Friendly APIs',
      description: 'Easily integrate voice, video, and messaging into your applications with our robust and well-documented APIs.',
    },
    {
      icon: Users,
      title: 'Unified Collaboration Tools',
      description: 'Connect your global teams with a unified suite of collaboration tools designed for agility and productivity.',
    },
    {
      icon: TrendingUp,
      title: 'High-Performance & Reliability',
      description: 'Ensure mission-critical communications are always online with our globally distributed, high-availability infrastructure.',
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 text-center bg-secondary">
        <div className="container mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Powering Innovation with Seamless Communication</h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Scalable, reliable, and integrated solutions for the tech industry.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Built for the Modern Tech Company</h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            In the fast-paced world of technology, your communication infrastructure needs to be as agile and innovative as your team. Our solutions are designed to keep you ahead of the curve.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {solutions.map((solution, i) => (
              <Card key={i} className="shadow-lg h-full text-left">
                <CardHeader className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to accelerate your innovation?</h2>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
