import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Zap, Workflow, ShieldCheck, Users, Headset, Mail, Gauge } from 'lucide-react'; // Added new imports

const Integrations: React.FC = () => {
  return (
    <MainLayout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Powerful Integrations</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
            Seamlessly connect FoneRoute with your favorite business tools to enhance productivity and streamline workflows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Integration Card 1 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
              <img src="https://via.placeholder.com/64x64" alt="Integration Icon" className="mb-4 h-16 w-16" />
              <h3 className="text-xl font-semibold mb-2">Salesforce CRM</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Integrate with Salesforce to log calls, manage contacts, and automate workflows.
              </p>
              <Button asChild variant="outline" className="mt-auto">
                <Link to="#">Learn More</Link>
              </Button>
            </div>

            {/* Integration Card 2 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
              <img src="https://via.placeholder.com/64x64" alt="Integration Icon" className="mb-4 h-16 w-16" />
              <h3 className="text-xl font-semibold mb-2">Zendesk Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Connect with Zendesk to provide seamless customer support.
              </p>
              <Button asChild variant="outline" className="mt-auto">
                <Link to="#">Learn More</Link>
              </Button>
            </div>

            {/* Integration Card 3 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
              <img src="https://via.placeholder.com/64x64" alt="Integration Icon" className="mb-4 h-16 w-16" />
              <h3 className="text-xl font-semibold mb-2">Slack Communication</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Stay connected with your team and get real-time notifications.
              </p>
              <Button asChild variant="outline" className="mt-auto">
                <Link to="#">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Integrate with FoneRoute? Section */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Integrate with FoneRoute?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md text-center">
              <Zap className="h-10 w-10 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Boost Productivity</h3>
              <p className="text-muted-foreground">
                Automate repetitive tasks and free up your team to focus on what matters most.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md text-center">
              <Workflow className="h-10 w-10 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Streamline Workflows</h3>
              <p className="text-muted-foreground">
                Connect your essential business tools for a seamless operational flow.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md text-center">
              <ShieldCheck className="h-10 w-10 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Enhance Data Accuracy</h3>
              <p className="text-muted-foreground">
                Ensure consistent and accurate data across all your platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Integration Categories Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Key Integration Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md text-center">
              <Users className="h-10 w-10 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">CRM Systems</h3>
              <p className="text-muted-foreground">
                Manage customer relationships and sales pipelines effortlessly.
              </p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md text-center">
              <Headset className="h-10 w-10 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Helpdesk & Support</h3>
              <p className="text-muted-foreground">
                Provide top-tier customer service with integrated support tools.
              </p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md text-center">
              <Mail className="h-10 w-10 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Marketing Automation</h3>
              <p className="text-muted-foreground">
                Automate your campaigns and track customer engagement.
              </p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md text-center">
              <Gauge className="h-10 w-10 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Analytics & Reporting</h3>
              <p className="text-muted-foreground">
                Gain deeper insights into your communication and business performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Simple Steps to Connect</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Integration</h3>
              <p className="text-muted-foreground text-sm">
                Browse our extensive list of compatible applications and select the ones you use.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Configure Settings</h3>
              <p className="text-muted-foreground text-sm">
                Follow our easy setup guides to connect your FoneRoute account with your chosen app.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Automating</h3>
              <p className="text-muted-foreground text-sm">
                Enjoy seamless data flow and automated workflows between FoneRoute and your business tools.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/contact">Explore All Integrations</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Integrations;