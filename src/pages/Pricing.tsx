
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { CheckCircle, XCircle, ShieldCheck } from 'lucide-react';
import PricingSkeleton from './PricingSkeleton';


const plans = {
  monthly: [
    { name: 'Basic', price: 29, features: ['5 Users', '10GB Storage', 'Basic Support'] },
    { name: 'Pro', price: 99, features: ['20 Users', '50GB Storage', 'Priority Support', 'Advanced Analytics'] },
    { name: 'Enterprise', price: 299, features: ['Unlimited Users', '200GB Storage', '24/7 Support', 'Custom Integrations'] },
  ],
  annual: [
    { name: 'Basic', price: 24, features: ['5 Users', '10GB Storage', 'Basic Support'] },
    { name: 'Pro', price: 82, features: ['20 Users', '50GB Storage', 'Priority Support', 'Advanced Analytics'] },
    { name: 'Enterprise', price: 249, features: ['Unlimited Users', '200GB Storage', '24/7 Support', 'Custom Integrations'] },
  ],
};

const allFeatures = [
  'User Management', 'Storage Solutions', 'Customer Support', 'Analytics & Reporting', 'Third-Party Integrations',
  'Security & Compliance', 'Automated Backups', 'API Access', 'Custom Branding',
];

const planFeatures: { [key: string]: string[] } = {
  Basic: ['User Management', 'Storage Solutions', 'Customer Support'],
  Pro: ['User Management', 'Storage Solutions', 'Customer Support', 'Analytics & Reporting', 'Third-Party Integrations'],
  Enterprise: allFeatures,
};

function Pricing() {
  const [billing, setBilling] = useState('monthly');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PricingSkeleton />;
  }

  return (
      <div>
        <PageHeader
          title="Pricing Plans"
          subtitle="Flexible pricing options to fit every business size. Choose the plan that’s right for you."
          breadcrumb="Home / Pricing"
        >
          <div className="flex flex-col md:flex-row gap-4 mt-4 items-center">
            <Button asChild size="lg">
              <Link to="#plans">View Plans</Link>
            </Button>
            {/* Billing Toggle */}
            <div className="inline-flex rounded-lg border border-border bg-background ml-0 md:ml-6 mt-4 md:mt-0" role="group" aria-label="Billing cycle toggle">
              <Button
                type="button"
                variant={billing === 'monthly' ? 'default' : 'outline'}
                aria-pressed={billing === 'monthly'}
                className="rounded-l-lg px-4 py-2 font-semibold focus:z-10"
                onClick={() => setBilling('monthly')}
              >
                Monthly
              </Button>
              <Button
                type="button"
                variant={billing === 'annual' ? 'default' : 'outline'}
                aria-pressed={billing === 'annual'}
                className="rounded-r-lg px-4 py-2 font-semibold focus:z-10"
                onClick={() => setBilling('annual')}
              >
                Annual
              </Button>
            </div>
          </div>
        </PageHeader>


      {/* Plans Section */}
      <section id="plans" className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(plans[billing as keyof typeof plans] || []).map((plan, index) => (
              <div key={index} className="card-professional flex flex-col">
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-poppins font-bold text-primary mb-4">{plan.name}</h3>
                  <p className="text-4xl font-poppins font-bold text-foreground mb-2">
                    ${plan.price}
                    <span className="text-lg font-normal text-muted-foreground">/ month</span>
                  </p>
                  <p className="text-muted-foreground mb-6">Billed {billing}.</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <Button asChild className="w-full text-lg">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A detailed look at what each plan offers to help you decide.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="p-4 border-b border-border text-lg font-semibold">Features</th>
                  {plans.monthly.map(plan => <th key={plan.name} className="p-4 border-b border-border text-center text-lg font-semibold">{plan.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map(feature => (
                  <tr key={feature}>
                    <td className="p-4 border-b border-border font-medium">{feature}</td>
                    {plans.monthly.map(plan => (
                      <td key={plan.name} className="p-4 border-b border-border text-center">
                        {(planFeatures[plan.name] || []).includes(feature) ? 
                          <CheckCircle className="h-6 w-6 text-accent mx-auto" /> : 
                          <XCircle className="h-6 w-6 text-muted-foreground/50 mx-auto" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  {plans.monthly.map(plan => (
                    <td key={plan.name} className="p-4 text-center">
                       <Button asChild className="w-full mt-4">
                        <Link to="/contact">Choose Plan</Link>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Custom Solution Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom text-center">
          <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            If our standard plans don’t fit, we can create a custom package tailored to your specific business requirements. Contact us to discuss your needs.
          </p>
          <Button asChild size="lg" className="btn-hero">
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}

export default Pricing;
