
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, ShieldCheck, BarChart2, MessageSquare, ShoppingBag, Bell, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatsappBusinessSolutionPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>WhatsApp Business Solution | FoneRoute</title>
        <meta name="description" content="Engage customers on WhatsApp with FoneRoute's official Business Solution. Send notifications, provide support, and run marketing campaigns at scale." />
      </Helmet>
      <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="section-padding bg-background mt-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold font-poppins tracking-tight mb-4">
              Connect with Customers on WhatsApp
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Leverage the world's most popular messaging app to deliver exceptional customer service, send timely notifications, and run engaging marketing campaigns.
            </p>
            <Link to="/contact">
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </section>

        {/* Why Choose FoneRoute Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose FoneRoute for WhatsApp?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-professional transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4"><ShieldCheck className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Official WhatsApp BSP</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">As an official Business Solution Provider (BSP), we provide reliable, secure, and compliant access to the WhatsApp Business API.</p>
                </CardContent>
              </Card>
              <Card className="card-professional transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4"><Zap className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Unified API Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Integrate WhatsApp along with SMS, MMS, and Voice through a single, powerful API, simplifying your communication stack.</p>
                </CardContent>
              </Card>
              <Card className="card-professional transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4"><BarChart2 className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Scalable and Reliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our robust infrastructure is built to handle high-volume messaging, ensuring your important communications are always delivered.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section-padding">
            <div className="container-custom">
                <h2 className="text-3xl font-bold text-center mb-12">Transform Your Customer Engagement</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4"><MessageSquare className="h-7 w-7 text-primary" /></div>
                        <h3 className="text-xl font-semibold mb-2">Conversational Support</h3>
                        <p className="text-muted-foreground">Provide real-time, personalized customer service and resolve issues faster on a channel your customers prefer and trust.</p>
                    </div>
                    <div className="text-center">
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4"><ShoppingBag className="h-7 w-7 text-primary" /></div>
                        <h3 className="text-xl font-semibold mb-2">Promotional Messaging</h3>
                        <p className="text-muted-foreground">Run targeted marketing campaigns, send product announcements, and share exclusive offers with rich media to boost sales.</p>
                    </div>
                    <div className="text-center">
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4"><Bell className="h-7 w-7 text-primary" /></div>
                        <h3 className="text-xl font-semibold mb-2">Transactional Alerts</h3>
                        <p className="text-muted-foreground">Keep customers informed with automated shipping notifications, order confirmations, and appointment reminders.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Getting Started Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Get Started with WhatsApp in 3 Steps</h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                <div className="flex items-center justify-between mb-12">
                  <div className="w-2/5"><h3 className="text-xl font-semibold text-right">Apply for Access</h3></div>
                  <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center z-10">1</div>
                  <div className="w-2/5"><p className="text-muted-foreground">Our team will guide you through the WhatsApp approval process and get your business account and phone number verified.</p></div>
                </div>
                <div className="flex items-center justify-between mb-12 flex-row-reverse">
                  <div className="w-2/5"><h3 className="text-xl font-semibold text-left">Integrate the API</h3></div>
                  <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center z-10">2</div>
                  <div className="w-2/5 text-right"><p className="text-muted-foreground">Use our developer-friendly documentation and SDKs to easily integrate the WhatsApp API into your existing systems.</p></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-2/5"><h3 className="text-xl font-semibold text-right">Launch & Scale</h3></div>
                  <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center z-10">3</div>
                  <div className="w-2/5"><p className="text-muted-foreground">Start sending messages, manage conversations in our unified dashboard, and scale your engagement globally.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
            <div className="container-custom text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Engage on WhatsApp?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Talk to one of our experts to learn how the WhatsApp Business Solution can help you grow your business and improve customer satisfaction.</p>
                <Link to="/contact">
                  <Button size="lg">Talk to an Expert</Button>
                </Link>
            </div>
        </section>
      </div>
    </>
  );
};

export default WhatsappBusinessSolutionPage;
