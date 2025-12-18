
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { features } from '@/content/features';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Zap, Users, Star, MessageCircle } from 'lucide-react';

const Features: FC = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="section-padding bg-background mt-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-poppins tracking-tight mb-4">
            Powerful Features to Elevate Your Business
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover a comprehensive suite of tools designed to streamline your communication, enhance customer engagement, and boost productivity.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.slug?.current}
                to={`/features/${feature.slug?.current}`}
                className="card-professional block"
              >
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.excerpt}</p>
                </CardContent>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Choose Your Features</h3>
              <p className="text-muted-foreground">
                Select the tools that best fit your business needs from our extensive feature list.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Integrate and Onboard</h3>
              <p className="text-muted-foreground">
                Easily integrate with your existing systems and get your team up and running in no time.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. See the Results</h3>
              <p className="text-muted-foreground">
                Watch your productivity and customer satisfaction soar with our powerful communication solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Versatile Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Sales Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Empower your sales force with tools like Power Dialer and Call Tracking to close deals faster.
                </p>
              </CardContent>
            </Card>
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Support Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deliver exceptional customer service with features like IVR, Call Routing, and a unified Contact Center.
                </p>
              </CardContent>
            </Card>
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Marketing Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Run effective marketing campaigns using SMS/MMS APIs and track your ROI with detailed Call Reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />))}
                </div>
                <p className="text-muted-foreground mb-4">"FoneRoute has transformed how we handle customer calls. The call routing feature is a game-changer!"</p>
                <div className="flex items-center">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">Sarah J., Operations Manager</p>
                    <p className="text-sm text-muted-foreground">Tech Solutions Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />))}
                </div>
                <p className="text-muted-foreground mb-4">"The Power Dialer has boosted our sales team's productivity by 50%. Highly recommended!"</p>
                <div className="flex items-center">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">Mark C., Sales Director</p>
                    <p className="text-sm text-muted-foreground">Innovate Corp.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />))}
                </div>
                <p className="text-muted-foreground mb-4">"Exceptional call quality and reliability. The support team is also very responsive."</p>
                <div className="flex items-center">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">Emily R., Customer Success</p>
                    <p className="text-sm text-muted-foreground">Global Connect</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is FoneRoute suitable for small businesses?</AccordionTrigger>
              <AccordionContent>
                Yes, FoneRoute is designed to be scalable, making it a perfect fit for businesses of all sizes. Our flexible pricing plans allow you to choose the features you need and scale as your business grows.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I integrate FoneRoute with my existing CRM?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We offer seamless integrations with popular CRMs and business tools to ensure a smooth workflow. You can find more information on our Integrations page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer international calling?</AccordionTrigger>
              <AccordionContent>
                Yes, we provide high-quality international calling services at competitive rates. You can also get international and toll-free numbers for your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What kind of support do you provide?</AccordionTrigger>
              <AccordionContent>
                We offer 24/7 customer support through various channels, including live chat, email, and phone. Our dedicated support team is always ready to assist you with any questions or issues.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Features;
