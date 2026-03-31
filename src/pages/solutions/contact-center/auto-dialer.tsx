
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { TrendingUp, UserCheck, TimerOff, BarChart } from 'lucide-react';

const AutoDialerPage = () => {
  return (
    <main className="pt-16">
      <PageHeader
        title="Auto Dialer"
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'Contact Center Solution', url: '/solutions/contact-center' },
            { name: 'Auto Dialer', url: '/solutions/contact-center/auto-dialer' }
          ]
        }}
        description="An Auto Dialer is a software that automatically dials phone numbers from a list. When a call is answered, the auto dialer can either play a pre-recorded message or connect the call to a live agent."
      />
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
            Supercharge Your Outreach with FoneRoute's Auto Dialer
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Automate your calling process, connect with more leads, and empower your agents to have more meaningful conversations. Our Auto Dialer is designed to maximize efficiency and drive results.
          </p>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Benefits of an Auto Dialer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center transition-transform duration-300 ease-in-out hover:scale-105">
                    <UserCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Increased Agent Productivity</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Spend more time talking and less time dialing.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center transition-transform duration-300 ease-in-out hover:scale-105">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Improved Lead Conversion</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Reach more prospects and boost your sales pipeline.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center transition-transform duration-300 ease-in-out hover:scale-105">
                    <TimerOff className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Reduced Agent Idle Time</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Keep your agents engaged and productive.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center transition-transform duration-300 ease-in-out hover:scale-105">
                    <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Data-Driven Campaigns</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Track performance and optimize your strategy.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#191919]">
        <div className="container-custom">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">Key Features of Our Auto Dialer</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg bg-white dark:bg-[#252525] shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Answering Machine Detection</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Automatically detect answering machines and leave a pre-recorded message, freeing up agents to handle live calls.</p>
                </div>
                <div className="p-6 rounded-lg bg-white dark:bg-[#252525] shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Real-Time Analytics</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Monitor your campaign performance with live dashboards and detailed reports on call metrics and agent productivity.</p>
                </div>
                <div className="p-6 rounded-lg bg-white dark:bg-[#252525] shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">CRM Integration</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Seamlessly integrate with popular CRMs to sync contact information and record call activity automatically.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-custom text-center">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Ready to Boost Your Sales?</h2>
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

export default AutoDialerPage;
