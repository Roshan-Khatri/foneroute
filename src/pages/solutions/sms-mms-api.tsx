
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Zap, Shield, BarChart2, Bell, MessageCircle, Key, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmsMmsApiPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>SMS/MMS API | FoneRoute</title>
        <meta name="description" content="Integrate powerful SMS and MMS messaging into your applications with FoneRoute's reliable and developer-friendly API." />
      </Helmet>
      <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="section-padding bg-background mt-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold font-poppins tracking-tight mb-4">
              Powerful & Simple SMS/MMS API
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Integrate reliable and scalable messaging into your applications. Our developer-friendly API lets you send and receive text and multimedia messages with ease.
            </p>
          </div>
        </section>

        {/* Why Choose Our API Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose the FoneRoute API?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-professional transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4"><Zap className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Built for Developers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Clean, well-documented REST API with client libraries in your favorite languages. Get up and running in minutes.</p>
                </CardContent>
              </Card>
              <Card className="card-professional transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4"><BarChart2 className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Scalable & Reliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our global infrastructure ensures high-throughput delivery and 99.99% uptime, so your messages always get through.</p>
                </CardContent>
              </Card>
              <Card className="card-professional transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4"><Shield className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Secure & Compliant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We handle the complexities of compliance and security, so you can focus on building great applications.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section-padding">
            <div className="container-custom">
                <h2 className="text-3xl font-bold text-center mb-12">Powering Communication for Any Use Case</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4"><Bell className="h-7 w-7 text-primary" /></div>
                        <h3 className="text-xl font-semibold mb-2">Notifications & Alerts</h3>
                        <p className="text-muted-foreground">Send real-time appointment reminders, delivery updates, and critical alerts to users.</p>
                    </div>
                    <div className="text-center">
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4"><MessageCircle className="h-7 w-7 text-primary" /></div>
                        <h3 className="text-xl font-semibold mb-2">Conversational Marketing</h3>
                        <p className="text-muted-foreground">Engage customers with two-way SMS conversations, promotional campaigns, and personalized offers.</p>
                    </div>
                    <div className="text-center">
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4"><Key className="h-7 w-7 text-primary" /></div>
                        <h3 className="text-xl font-semibold mb-2">Two-Factor Authentication (2FA)</h3>
                        <p className="text-muted-foreground">Secure user accounts and prevent fraud by sending one-time passwords (OTPs) via SMS.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Getting Started Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Start Sending Messages in 3 Simple Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4"><Users className="h-8 w-8 text-primary" /></div>
                <h3 className="text-xl font-semibold mb-2">1. Create an Account</h3>
                <p className="text-muted-foreground">Sign up for a free FoneRoute account to get instant access to our dashboard and API.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4"><Key className="h-8 w-8 text-primary" /></div>
                <h3 className="text-xl font-semibold mb-2">2. Get Your API Keys</h3>
                <p className="text-muted-foreground">Find your unique API keys and authentication tokens in the developer section of your dashboard.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4"><Code className="h-8 w-8 text-primary" /></div>
                <h3 className="text-xl font-semibold mb-2">3. Start Building</h3>
                <p className="text-muted-foreground">Follow our documentation to integrate the API and start sending your first messages in minutes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
            <div className="container-custom text-center bg-primary dark:bg-[#191919] text-primary-foreground p-12 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Ready to Integrate?</h2>
                <p className="max-w-2xl mx-auto mb-8">Explore our documentation, see pricing, or talk to one of our messaging experts to find the best solution for your business.</p>
                <div className="flex gap-4 justify-center">
                    <Link to="/pricing"><Button size="lg" variant="outline">See Pricing</Button></Link>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default SmsMmsApiPage;
