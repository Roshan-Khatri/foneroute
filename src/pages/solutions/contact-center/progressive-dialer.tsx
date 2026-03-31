
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { Eye, Zap, SlidersHorizontal, User, TrendingUp, Smile, CheckCircle } from 'lucide-react';

const ProgressiveDialerPage = () => {
  return (
    <main className="pt-16">
      <PageHeader
        title="Progressive Dialer"
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'Contact Center Solution', url: '/solutions/contact-center' },
            { name: 'Progressive Dialer', url: '/solutions/contact-center/progressive-dialer' }
          ]
        }}
        description="A Progressive Dialer, also known as a preview dialer, is an automated dialing system that dials numbers at a fixed ratio to the number of available agents. It provides the agent with the contact's information before the call is made, allowing for a more personalized conversation."
      />
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
            Enhance Conversations with a Progressive Dialer
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Give your agents the context they need to have more meaningful conversations. Our Progressive Dialer provides customer information before dialing, empowering agents to deliver a personalized experience every time.
          </p>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Benefits of a Progressive Dialer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center card-hover-animation">
                    <User className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Personalized Interactions</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Agents review customer info before calls, leading to more productive conversations.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center card-hover-animation">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Increased Agent Confidence</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Being prepared for each call boosts agent confidence and improves performance.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center card-hover-animation">
                    <Smile className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Improved Customer Satisfaction</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">A personalized approach leads to higher customer satisfaction and loyalty.</p>
                </div>
                <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center card-hover-animation">
                    <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Better Lead Nurturing</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Previewing contact info allows for better lead qualification and nurturing.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#191919]">
        <div className="container-custom">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">Key Features of Our Progressive Dialer</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg bg-white dark:bg-[#252525] shadow-md card-hover-animation">
                    <Eye className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold">Contact Preview</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Presents agents with detailed contact information before initiating a call, allowing for personalized and context-aware conversations.</p>
                </div>
                <div className="p-6 rounded-lg bg-white dark:bg-[#252525] shadow-md card-hover-animation">
                    <Zap className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold">Automated Dialing</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Automatically dials the next contact on the list as soon as an agent is available, ensuring a steady workflow and minimal downtime.</p>
                </div>
                <div className="p-6 rounded-lg bg-white dark:bg-[#252525] shadow-md card-hover-animation">
                    <SlidersHorizontal className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold">Customizable Pacing</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Adjust the dialing pace and agent-to-contact ratio to match your campaign goals and team structure, optimizing for both efficiency and personalization.</p>
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

export default ProgressiveDialerPage;
