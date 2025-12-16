
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';

const pageData = {
  title: 'Advanced IVR System',
  breadcrumb: [
    { name: 'Home', url: '/' },
    { name: 'Features', url: '/features' },
    { name: 'IVR System', url: '/features/ivr-system' }
  ],
  description: 'Empower your business with a sophisticated Interactive Voice Response (IVR) system designed to streamline customer interactions, reduce operational costs, and enhance the caller experience.',
  sections: [
    {
      title: 'Revolutionize Your Inbound Call Management',
      content: 'Our state-of-the-art IVR system empowers businesses to automate inbound call routing with unparalleled efficiency. By providing callers with a clear and intuitive menu of options, you can effortlessly direct them to the most appropriate department or agent, significantly reducing wait times and improving first-contact resolution rates. This automation frees up your valuable human resources to focus on more complex and high-value interactions.',
    },
    {
      title: 'Core Capabilities',
      isFeatureList: true,
      features: [
        {
          name: 'Scalable Multi-Level Menus',
          description: 'Construct sophisticated, multi-layered IVR menus capable of handling a diverse range of customer intents and inquiries. Our system scales with your business needs, from simple call routing to complex, data-driven interactions.',
        },
        {
          name: 'Professional Voice and Audio Customization',
          description: 'Reinforce your brand identity with fully customizable greetings and voice prompts. Upload professionally recorded audio files or our high-quality text-to-speech engine for a polished and consistent caller experience.',
        },
        {
          name: 'Intelligent Call Routing Strategies',
          description: 'Implement a variety of routing strategies, including skills-based, time-based, and priority-based routing, to ensure every caller is connected to the best-suited agent or department.',
        },
        {
          name: 'Seamless Voicemail and Off-Hours Handling',
          description: 'Provide callers with the option to leave a detailed voicemail during or after business hours. Voicemails can be transcribed and delivered to email for efficient follow-up.',
        },
        {
            name: 'CRM and Database Integration',
            description: 'Leverage existing customer data by integrating your CRM or database. Personalize the IVR experience and enable data-driven routing decisions for a truly intelligent and context-aware interaction.'
        }
      ],
    },
    {
        title: 'Tangible Business Benefits',
        isFeatureList: true,
        features: [
            {
                name: 'Enhanced Customer Satisfaction',
                description: 'Provide a seamless and efficient self-service experience, reducing frustration and improving overall customer perception of your brand.',
            },
            {
                name: 'Increased Agent Productivity',
                description: 'Automate repetitive tasks and filter inbound calls, allowing your agents to focus on resolving complex issues and delivering exceptional service.',
            },
            {
                name: 'Reduced Operational Costs',
                description: 'Lower your cost-per-call by automating a significant portion of your inbound call volume and optimizing agent allocation.',
            },
            {
                name: '24/7 Availability',
                description: 'Offer round-the-clock customer service and support, ensuring your business is always accessible to your customers.',
            },
        ]
    },
    {
        title: 'Why Our IVR Solution?',
        content: 'Our commitment to innovation and excellence sets us apart. We provide an intuitive, drag-and-drop IVR designer that empowers you to build and modify call flows in real-time, without any technical expertise. Our platform is built on a robust, carrier-grade infrastructure, ensuring maximum uptime and crystal-clear audio quality. When you partner with us, you gain more than just a tool; you gain a team of experts dedicated to your success.'
    }
  ],
  cta: {
    text: 'Request a Demo',
    link: '/contact'
  }
};

const IvrSystemPage = () => {
  return (
    <main className="pt-20">
      <PageHeader
        title={pageData.title}
        breadcrumb={{ links: pageData.breadcrumb }}
        description={pageData.description}
      />

      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="prose dark:prose-invert max-w-none">
            {
              pageData.sections.map((section, index) => (
                <div key={index}>
                  <h2>{section.title}</h2>
                  {section.content && <p>{section.content}</p>}
                  {section.isFeatureList && (
                    <ul>
                      {section.features?.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <strong>{feature.name}:</strong> {feature.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            }
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link to={pageData.cta.link}>{pageData.cta.text}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IvrSystemPage;
