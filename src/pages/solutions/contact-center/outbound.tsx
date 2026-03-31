
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { SEO } from '@/components/layout/SEO';

const OutboundPage = () => {
  return (
    <main className="pt-16">
      <SEO 
        title="Outbound Call Center Solutions | FoneRoute"
        description="Power up your sales and outreach campaigns with FoneRoute's advanced outbound calling solutions. Featuring auto-dialers, power dialers, and predictive dialers to boost agent productivity and drive growth."
        keywords={['outbound call center', 'auto-dialer', 'power dialer', 'predictive dialer', 'sales campaigns']}
      />
      <PageHeader
        title="Outbound Call Solutions"
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'Contact Center', url: '/solutions/contact-center' },
            { name: 'Outbound', url: '/solutions/contact-center/outbound' }
          ]
        }}
        description="Power up your sales and outreach campaigns with our advanced outbound calling solutions. Reach more prospects, improve agent productivity, and drive business growth."
      />

      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Key Features of Our Outbound Call Solutions
              </h2>
              <ul className="mt-8 list-disc list-inside text-lg text-gray-600 dark:text-gray-300">
                <li>Auto-Dialer: Automatically dial numbers from a list, saving your agents valuable time.</li>
                <li>Power Dialer: Dial numbers sequentially, skipping busy and unanswered calls to maximize efficiency.</li>
                <li>Predictive Dialer: Use AI to predict agent availability and dial multiple numbers at once for maximum productivity.</li>
                <li>Lead Management: Organize and manage your leads effectively to improve follow-up and conversion rates.</li>
              </ul>
            </div>
            <div>
              <img
                src="https://ik.imagekit.io/nb6cfzd7m/ChatGPT%20Image%20Dec%2014,%202025,%2006_34_44%20PM.png"
                alt="Illustration of outbound call features like auto-dialing and lead management."
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#191919]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ik.imagekit.io/nb6cfzd7m/ChatGPT%20Image%20Dec%2014,%202025,%2006_39_29%20PM.png"
                alt="Diagram showing the benefits of outbound call solutions, including increased sales and improved agent productivity."
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Benefits of Our Outbound Call Solutions
              </h2>
              <ul className="mt-8 list-disc list-inside text-lg text-gray-600 dark:text-gray-300">
                <li>Increased Sales: Reach more potential customers and close more deals with efficient outbound campaigns.</li>
                <li>Improved Agent Productivity: Automate dialing and reduce idle time, allowing agents to focus on what they do best - selling.</li>
                <li>Better Lead Conversion: Follow up with leads more effectively and improve your conversion rates.</li>
                <li>Scalable Campaigns: Easily scale your outbound calling campaigns up or down as your business needs change.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Elevate Your Customer Service</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to transform your inbound call management? Explore our solutions and see how we can help you deliver exceptional customer experiences.
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

export default OutboundPage;
