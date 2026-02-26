
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Lock, Car, ShoppingCart, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const NumberMaskingPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Number Masking | FoneRoute</title>
        <meta name="description" content="Protect user privacy with FoneRoute's Number Masking solution. Enable secure, anonymous communication for deliveries, ride-sharing, and more." />
      </Helmet>
      <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="section-padding bg-background mt-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold font-poppins tracking-tight mb-4">
              Secure Communications with Number Masking
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Safeguard your users' privacy by enabling anonymous conversations. Our Number Masking solution provides temporary, virtual phone numbers to protect personal information.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Anonymizing Conversations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-professional transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4"><Shield className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Enhance User Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Protect your customers' and partners' personal phone numbers from being exposed, building trust and confidence in your platform.</p>
                </CardContent>
              </Card>
              <Card className="card-professional transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4"><Users className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Secure All Interactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Keep conversations within your ecosystem. Prevent off-platform communication and ensure all interactions can be monitored for safety and quality.</p>
                </CardContent>
              </Card>
              <Card className="card-professional transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4"><Lock className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Maintain Platform Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">By masking numbers, you encourage users to communicate through your app or service, increasing engagement and data insights.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">How Number Masking Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4"><Users className="h-8 w-8 text-primary" /></div>
                    <h3 className="text-xl font-semibold mb-2">1. User Initiates Contact</h3>
                    <p className="text-muted-foreground">A user (e.g., a buyer or rider) clicks a button to call or text another user (e.g., a seller or driver).</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4"><Shield className="h-8 w-8 text-primary" /></div>
                    <h3 className="text-xl font-semibold mb-2">2. Virtual Number is Assigned</h3>
                    <p className="text-muted-foreground">Our system instantly assigns a temporary, virtual phone number to connect the two parties for a specific duration.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4"><MessageSquare className="h-8 w-8 text-primary" /></div>
                    <h3 className="text-xl font-semibold mb-2">3. Conversation is Connected</h3>
                    <p className="text-muted-foreground">The call or text is routed through the virtual number, keeping both parties' real phone numbers private.</p>
                </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Ideal for a Variety of Platforms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-professional text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4"><Car className="h-8 w-8 text-primary" /></div>
                  <CardTitle>Ride-Sharing & Mobility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Connect riders and drivers without revealing personal phone numbers, ensuring privacy and safety for both.</p>
                </CardContent>
              </Card>
              <Card className="card-professional text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4"><ShoppingCart className="h-8 w-8 text-primary" /></div>
                  <CardTitle>E-Commerce & Marketplaces</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Enable secure communication between buyers and sellers for inquiries and support without exposing contact details.</p>
                </CardContent>
              </Card>
              <Card className="card-professional text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4"><MessageSquare className="h-8 w-8 text-primary" /></div>
                  <CardTitle>Delivery & Logistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Allow delivery agents and customers to coordinate seamlessly while keeping personal information confidential.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
            <div className="container-custom text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Communications?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Integrate Number Masking into your platform today and give your users the privacy they deserve.</p>
                <Link to="/contact">
                  <Button size="lg">Talk to an Expert</Button>
                </Link>
            </div>
        </section>
      </div>
    </>
  );
};

export default NumberMaskingPage;
