
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, TrendingUp, MousePointerClick } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClickToCallPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Click-to-Call | FoneRoute</title>
        <meta name="description" content="Enable instant voice communication from your website or app with FoneRoute's Click-to-Call solution. Improve customer engagement and generate more leads." />
      </Helmet>
      <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="section-padding bg-background mt-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold font-poppins tracking-tight mb-4">
              Instant Connections with Click-to-Call
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Make it effortless for customers to reach you directly from your website or app. Embed a simple button to enable instant voice communication, boost engagement, and capture more leads.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Why Your Business Needs Click-to-Call</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-professional transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4"><TrendingUp className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Boost Conversion Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Remove friction from the customer journey. Allow interested prospects to connect with your sales team instantly, leading to higher conversion rates.</p>
                </CardContent>
              </Card>
              <Card className="card-professional transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4"><CheckCircle className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Enhance Customer Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Provide immediate support and answers. A quick call can resolve issues faster than emails or forms, leading to happier customers.</p>
                </CardContent>
              </Card>
              <Card className="card-professional transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4"><Zap className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Improve Lead Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Engage with high-intent visitors in real-time. A customer who initiates a call is often more qualified and ready to make a decision.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Simple to Implement, Powerful in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4"><MousePointerClick className="h-8 w-8 text-primary" /></div>
                <h3 className="text-xl font-semibold mb-2">1. Embed the Button</h3>
                <p className="text-muted-foreground">Easily add our customizable Click-to-Call button to your website or mobile application with just a few lines of code.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4"><Zap className="h-8 w-8 text-primary" /></div>
                <h3 className="text-xl font-semibold mb-2">2. Customer Clicks</h3>
                <p className="text-muted-foreground">A visitor clicks the button, initiating an instant voice call through their browser or our dedicated web-client.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4"><CheckCircle className="h-8 w-8 text-primary" /></div>
                <h3 className="text-xl font-semibold mb-2">3. Connect & Convert</h3>
                <p className="text-muted-foreground">The call is routed to your designated sales or support team, ready to assist the customer and close the deal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="max-w-3xl mx-auto">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-muted-foreground">
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />Easy website and app integration</li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />Real-time calls from any browser</li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />Customizable button and branding</li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />Intelligent call routing options</li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />Detailed analytics and reporting</li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />VoIP and WebRTC technology</li>
                </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
            <div className="container-custom text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Add Click-to-Call to your website today and start turning visitors into valuable conversations.</p>
                <Link to="/contact">
                  <Button size="lg">Talk to an Expert</Button>
                </Link>
            </div>
        </section>
      </div>
    </>
  );
};

export default ClickToCallPage;
