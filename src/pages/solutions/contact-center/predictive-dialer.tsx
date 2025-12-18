
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { BarChart, Cpu, Link as LinkIcon, PhoneOff, TrendingUp, UserCheck } from 'lucide-react';

const PredictiveDialerPage = () => {
  return (
    <main className="pt-16">
      <PageHeader
        title="Predictive Dialer"
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'Contact Center Solution', url: '/solutions/contact-center' },
            { name: 'Predictive Dialer', url: '/solutions/contact-center/predictive-dialer' }
          ]
        }}
        description="A Predictive Dialer is an automated telephone dialing system that uses algorithms to predict when an agent will be available to take the next call. It dials multiple numbers at once and only connects answered calls to live agents."
      />
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
            Maximize Your Team's Potential with a Predictive Dialer
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Supercharge your outbound campaigns by connecting agents only to live-answered calls. Our Predictive Dialer uses smart algorithms to dramatically increase talk time and campaign productivity.
          </p>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Benefits of a Predictive Dialer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center card-hover-animation">
                    <UserCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Maximum Agent Utilization</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Minimize idle time by ensuring agents are always engaged in live conversations.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center card-hover-animation">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Increased Contact Rates</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Reach more contacts in less time, boosting your call center's productivity.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center card-hover-animation">
                    <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Improved Campaign Efficiency</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Adjust dialing rates based on agent availability and abandonment rates.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center card-hover-animation">
                    <PhoneOff className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Reduced Dropped Calls</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Advanced algorithms improve customer experience by minimizing dropped calls.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#191919]">
        <div className="container-custom">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">Key Features of Our Predictive Dialer</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg bg-white dark:bg-[#252525] shadow-md card-hover-animation">
                    <Cpu className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold">Algorithmic Pacing</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Our dialer uses smart algorithms to adjust the dialing rate based on the number of available agents and the call abandonment rate.</p>
                </div>
                <div className="p-6 rounded-lg bg-white dark:bg-[#252525] shadow-md card-hover-animation">
                    <LinkIcon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold">CRM Integration</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Seamlessly integrate with popular CRMs to sync contact information and record call activity automatically.</p>
                </div>
                <div className="p-6 rounded-lg bg-white dark:bg-[#252525] shadow-md card-hover-animation">
                    <BarChart className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold">Real-Time Analytics</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Monitor your campaign performance with live dashboards and detailed reports on call metrics and agent productivity.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Ready to Boost Your Sales?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how FoneRoute's Auto Dialer can transform your outbound campaigns. Get in touch with our experts for a personalized demo.
          </p>
          <div className="mt-8 space-x-4">
            <Button asChild size="lg">
              <Link to="/contact">Book a Demo</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/pricing">Explore Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PredictiveDialerPage;
