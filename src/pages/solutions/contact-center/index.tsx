
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';

const ContactCenterPage = () => {

  return (
    <main className="pt-16">
      <PageHeader
        title="Contact Center"
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'Contact Center', url: '/solutions/contact-center' }
          ]
        }}
        description="A comprehensive solution for managing customer interactions across all channels."
      />

      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Key Features of Our Contact Center Solution
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Our Contact Center solution is designed to provide your business with a complete communication solution. Here are some of the key features that we offer:
              </p>
              <ul className="mt-8 list-disc list-inside text-lg text-gray-600 dark:text-gray-300">
                <li>Inbound Call Management: Efficiently manage incoming calls with features like IVR, call routing, and queuing.</li>
                <li>Outbound Campaigns: Power your sales and marketing efforts with our predictive, power, and progressive dialers.</li>
                <li>Unified Communications: Communicate with your customers through voice, SMS, email, and social media from a single platform.</li>
                <li>Analytics and Reporting: Gain insights into your contact center performance with real-time dashboards and historical reports.</li>
              </ul>
            </div>
            <div>
              <img
                src="https://ik.imagekit.io/nb6cfzd7m/ChatGPT%20Image%20Dec%2014,%202025,%2007_17_34%20PM.png"
                alt="An illustration of the various features of a contact center solution, including call routing, unified communications, and analytics."
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
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
                src="https://ik.imagekit.io/nb6cfzd7m/Gemini_Generated_Image_cgy1w2cgy1w2cgy1.png"
                alt="A diagram showing the benefits of a contact center solution, such as improved customer satisfaction, increased agent productivity, and lower costs."
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Benefits of Our Contact Center Solution
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Our Contact Center solution is designed to provide your business with a complete communication solution. Here are some of the key benefits that we offer:
              </p>
              <ul className="mt-8 list-disc list-inside text-lg text-gray-600 dark:text-gray-300">
                <li>Improved Customer Satisfaction: Provide a seamless and consistent experience across all channels to improve customer satisfaction.</li>
                <li>Increased Agent Productivity: Empower your agents with the tools and information they need to resolve customer issues more quickly and efficiently.</li>
                <li>Lower Costs: Reduce your operational costs by automating routine tasks and optimizing your workflows.</li>
                <li>Actionable Insights: Gain valuable insights into your contact center performance with our advanced analytics and reporting features.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Explore Our Contact Center Solutions
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold">Inbound</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Manage incoming customer calls with ease.</p>
              <Button asChild className="mt-4">
                <Link to="/solutions/contact-center/inbound">Learn More</Link>
              </Button>
            </div>
            <div className="border p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold">Outbound</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Power your outbound sales and marketing campaigns.</p>
              <Button asChild className="mt-4">
                <Link to="/solutions/contact-center/outbound">Learn More</Link>
              </Button>
            </div>
            <div className="border p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold">Predictive Dialer</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Increase agent productivity with our AI-powered dialer.</p>
              <Button asChild className="mt-4">
                <Link to="/solutions/contact-center/predictive-dialer">Learn More</Link>
              </Button>
            </div>
            <div className="border p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold">Power Dialer</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A simple and effective way to boost agent productivity.</p>
              <Button asChild className="mt-4">
                <Link to="/solutions/contact-center/power-dialer">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#191919]">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Case Study: How FoneRoute2 Boosted Customer Satisfaction by 40%
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Read how one of our clients transformed their customer service with our Contact Center Solution.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold">The Challenge</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                A leading e-commerce company was struggling to keep up with the growing volume of customer inquiries. Their siloed support channels—phone, email, and social media—resulted in slow response times, frustrated customers, and a decline in customer satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">The Solution</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                They implemented our unified Contact Center Solution to centralize their customer communications. With a single view of the customer journey, their agents could now seamlessly switch between channels and have all the necessary context to resolve issues quickly and efficiently.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">The Results</h3>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>40% increase in customer satisfaction.</li>
                <li>30% reduction in average handling time.</li>
                <li>25% boost in agent productivity.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactCenterPage;
