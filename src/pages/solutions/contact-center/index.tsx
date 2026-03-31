
import { Link } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const exploreSolutions = [
  {
    title: 'Inbound',
    description: 'Manage incoming customer calls with ease.',
    link: '/solutions/contact-center/inbound',
  },
  {
    title: 'Outbound',
    description: 'Power your outbound sales and marketing campaigns.',
    link: '/solutions/contact-center/outbound',
  },
  {
    title: 'Predictive Dialer',
    description: 'Increase agent productivity with our AI-powered dialer.',
    link: '/solutions/contact-center/predictive-dialer',
  },
  {
    title: 'Power Dialer',
    description: 'A simple and effective way to boost agent productivity.',
    link: '/solutions/contact-center/power-dialer',
  },
];

const ContactCenterPage = () => {

  return (
    <main>
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

      <section className="py-16 sm:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Key Features of Our Contact Center Solution
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our Contact Center solution is designed to provide your business with a complete communication solution. Here are some of the key features that we offer:
              </p>
              <ul className="mt-8 space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1 checkmark">&#10003;</span><span><strong>Inbound Call Management:</strong> Efficiently manage incoming calls with features like IVR, call routing, and queuing.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1 checkmark">&#10003;</span><span><strong>Outbound Campaigns:</strong> Power your sales and marketing efforts with our predictive, power, and progressive dialers.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1 checkmark">&#10003;</span><span><strong>Unified Communications:</strong> Communicate with your customers through voice, SMS, email, and social media from a single platform.</span></li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1 checkmark">&#10003;</span><span><strong>Analytics and Reporting:</strong> Gain insights into your contact center performance with real-time dashboards and historical reports.</span></li>
              </ul>
            </div>
            <div>
              <img
                src="https://ik.imagekit.io/nb6cfzd7m/ChatGPT%20Image%20Dec%2014,%202025,%2007_17_34%20PM.png"
                alt="An illustration of the various features of a contact center solution, including call routing, unified communications, and analytics."
                className="rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted dark:bg-[#191919]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-last">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Benefits of Our Contact Center Solution
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our Contact Center solution is designed to provide your business with a complete communication solution. Here are some of the key benefits that we offer:
              </p>
              <ul className="mt-8 space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start"><span className="text-primary mr-3 mt-1 checkmark">&#10003;</span><span><strong>Improved Customer Satisfaction:</strong> Provide a seamless and consistent experience across all channels to improve customer satisfaction.</span></li>
                  <li className="flex items-start"><span className="text-primary mr-3 mt-1 checkmark">&#10003;</span><span><strong>Increased Agent Productivity:</strong> Empower your agents with the tools and information they need to resolve customer issues more quickly and efficiently.</span></li>
                  <li className="flex items-start"><span className="text-primary mr-3 mt-1 checkmark">&#10003;</span><span><strong>Lower Costs:</strong> Reduce your operational costs by automating routine tasks and optimizing your workflows.</span></li>
                  <li className="flex items-start"><span className="text-primary mr-3 mt-1 checkmark">&#10003;</span><span><strong>Actionable Insights:</strong> Gain valuable insights into your contact center performance with our advanced analytics and reporting features.</span></li>
              </ul>
            </div>
            <div className="md:order-first">
              <img
                src="https://ik.imagekit.io/nb6cfzd7m/Untitled%20design.png"
                alt="A diagram showing the benefits of a contact center solution, such as improved customer satisfaction, increased agent productivity, and lower costs."
                className="rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Explore Our Contact Center Solutions
          </h2>
           <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive deeper into the specific solutions that power our contact center platform.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {exploreSolutions.map((solution, index) => (
                <Link to={solution.link} key={index} className="block group">
                    <Card className="border rounded-lg shadow-sm p-6 text-left h-full flex flex-col group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
                        <CardHeader className="p-0">
                            <CardTitle className="text-xl font-semibold text-foreground mb-2">{solution.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 flex-grow">
                            <p className="text-muted-foreground">{solution.description}</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactCenterPage;
