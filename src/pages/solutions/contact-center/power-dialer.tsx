
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { CheckCircle, Phone, Voicemail, BarChart, TrendingUp, UserCheck } from 'lucide-react';

const PowerDialerPage = () => {
  return (
    <main className="pt-16">
      <PageHeader
        title="Power Dialer"
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'Contact Center Solution', url: '/solutions/contact-center' },
            { name: 'Power Dialer', url: '/solutions/contact-center/power-dialer' }
          ]
        }}
        description="A Power Dialer automatically dials the next number on a list as soon as an agent finishes a call. It's designed to maximize agent talk time and minimize downtime between calls."
      />
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
            Streamline Your Outbound Calling with a Power Dialer
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Empower your agents to have more conversations and close more deals. Our Power Dialer is the perfect tool for sales teams, telemarketers, and anyone who needs to make a high volume of outbound calls.
          </p>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Benefits of a Power Dialer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md text-center">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Increased Efficiency</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Agents are always connected to a live call, eliminating manual dialing.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md text-center">
                    <UserCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Improved Productivity</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Agents focus on conversations, not dialing, to close more deals.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md text-center">
                    <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Reduced Errors</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Eliminates misdials, ensuring you always call the right person.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md text-center">
                    <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Better Lead Management</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Track call outcomes and schedule callbacks so no lead is left behind.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#191919]">
        <div className="container-custom">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">Key Features of Our Power Dialer</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md">
                    <Phone className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold">Click-to-Call</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Initiate calls directly from your CRM or any web page with a single click.</p>
                </div>
                <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md">
                    <Voicemail className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold">Voicemail Drop</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Leave pre-recorded voicemails with a single click, saving agents valuable time.</p>
                </div>
                <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md">
                    <BarChart className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold">Call Analytics</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Track key metrics like call volume, connection rates, and agent performance.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Ready to Power Up Your Sales?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how our Power Dialer can help your team reach more leads and close more deals.
          </p>
          <div className="mt-8 space-x-4">
            <Button asChild size="lg">
              <Link to="/contact">Request a Demo</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PowerDialerPage;
