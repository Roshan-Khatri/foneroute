
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const features = [
  {
    title: 'Inbound Contact Center',
    href: '/solutions/contact-center/inbound',
    description: 'Handle incoming calls with ease. Our inbound contact center solution ensures that your customers are always connected to the right agent.',
  },
  {
    title: 'Outbound Contact Center',
    href: '/solutions/contact-center/outbound',
    description: 'Boost your sales and marketing efforts with our powerful outbound contact center solution. Reach out to your customers proactively and drive conversions.',
  },
  {
    title: 'Predictive Dialer',
    href: '/solutions/contact-center/predictive-dialer',
    description: 'Maximize agent productivity with our intelligent predictive dialer. It automatically dials numbers from your contact list and connects agents to live calls.',
  },
  {
    title: 'Power Dialer',
    href: '/solutions/contact-center/power-dialer',
    description: 'A step up from manual dialing, our power dialer dials numbers one by one, ensuring that an agent is always available to take the call.',
  },
  {
    title: 'Auto Dialer',
    href: '/solutions/contact-center/auto-dialer',
    description: 'Automate your outbound calling process with our auto dialer. Simply upload your contact list, and our system will dial the numbers for you.',
  },
  {
    title: 'Progressive Dialer',
    href: '/solutions/contact-center/progressive-dialer',
    description: 'A more advanced version of the power dialer, our progressive dialer adjusts the dialing rate based on agent availability.',
  },
];

const ContactCenterFeatures = () => {
  return (
    <div>
      <PageHeader
        title="Contact Center Features"
        description="Explore the powerful features of our omnichannel contact center solution."
      />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link to={feature.href} key={feature.href} className="card-hover-parent">
              <Card className="h-full card-professional card-hover-animation">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCenterFeatures;

