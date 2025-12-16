
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';

const InboundPage = () => {
  return (
    <main className="pt-16">
      <PageHeader
        title="Inbound Call Solutions"
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'Contact Center', url: '/solutions/contact-center' },
            { name: 'Inbound', url: '/solutions/contact-center/inbound' }
          ]
        }}
        description="Handle incoming calls with ease and professionalism. Our inbound call solutions are designed to help you manage high volumes of calls, improve customer service, and boost your business reputation."
      />

      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Key Features of Our Inbound Call Solutions
              </h2>
              <ul className="mt-8 list-disc list-inside text-lg text-gray-600 dark:text-gray-300">
                <li>Interactive Voice Response (IVR): Guide callers to the right department or agent with a customizable IVR system.</li>
                <li>Automatic Call Distribution (ACD): Distribute incoming calls to the most appropriate agent based on predefined rules.</li>
                <li>Call Queuing: Manage high call volumes by placing callers in a queue until an agent is available.</li>
                <li>Real-Time Analytics: Monitor call metrics in real-time to track performance and make data-driven decisions.</li>
              </ul>
            </div>
            <div>
              <img
                src="https://ik.imagekit.io/nb6cfzd7m/ChatGPT%20Image%20Dec%2014,%202025,%2006_26_46%20PM.png"
                alt="Inbound call features"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ik.imagekit.io/nb6cfzd7m/ChatGPT%20Image%20Dec%2014,%202025,%2006_28_29%20PM.png"
                alt="Inbound call benefits"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Benefits of Our Inbound Call Solutions
              </h2>
              <ul className="mt-8 list-disc list-inside text-lg text-gray-600 dark:text-gray-300">
                <li>Improved Customer Satisfaction: Provide callers with a seamless and efficient experience, leading to higher satisfaction rates.</li>
                <li>Increased Agent Productivity: Automate call routing and streamline workflows to help your agents handle more calls in less time.</li>
                <li>Enhanced Business Image: Project a professional image with a sophisticated call management system.</li>
                <li>Data-Driven Insights: Gain valuable insights into call patterns and agent performance to make informed business decisions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-[#191919] py-16 sm:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Elevate Your Customer Service
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Ready to transform your inbound call management? Explore our solutions and see how we can help you deliver exceptional customer experiences.
          </p>
          <div className="mt-8 space-x-4">
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

export default InboundPage;
