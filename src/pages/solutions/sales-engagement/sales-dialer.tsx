
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';

const SalesDialerPage = () => {
  return (
    <main>
      <PageHeader
        title="Sales Dialer"
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'Sales Engagement', url: '/solutions/sales-engagement' },
            { name: 'Sales Dialer', url: '/solutions/sales-engagement/sales-dialer' }
          ]
        }}
        description="A Sales Dialer is a tool that automates the process of dialing sales leads. It's designed to increase the efficiency and productivity of sales teams by allowing them to make more calls in less time."
      />
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Benefits of a Sales Dialer
          </h2>
          <ul className="mt-8 list-disc list-inside text-lg text-gray-600 dark:text-gray-300">
            <li>Increased Call Volume: Automate the dialing process and enable your sales team to make more calls and connect with more leads.</li>
            <li>Improved Lead Conversion: With features like one-click dialing and pre-recorded voicemails, your team can focus on the conversation and convert more leads into customers.</li>
            <li>Enhanced Performance Tracking: Monitor key metrics like call volume, connection rates, and conversation times to track the performance of your sales team and identify areas for improvement.</li>
            <li>Streamlined Workflow: Integrate with your CRM to streamline your sales workflow and ensure that all lead information is in one place.</li>
          </ul>
          <div className="mt-12 space-x-4">
            <Button asChild>
              <Link to="/contact">Book a Demo</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/pricing">Explore Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SalesDialerPage;
