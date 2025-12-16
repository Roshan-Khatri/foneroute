
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';

const LeadManagementPage = () => {
  return (
    <main>
      <PageHeader
        title="Lead Management"
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'Sales Engagement', url: '/solutions/sales-engagement' },
            { name: 'Lead Management', url: '/solutions/sales-engagement/lead-management' }
          ]
        }}
        description="Lead Management is the process of capturing, tracking, and managing sales leads as they move through your sales pipeline. It's about converting potential customers into actual customers."
      />
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Benefits of Lead Management
          </h2>
          <ul className="mt-8 list-disc list-inside text-lg text-gray-600 dark:text-gray-300">
            <li>Increased Sales Efficiency: By automating and streamlining the lead management process, your sales team can focus on what they do best: selling.</li>
            <li>Improved Lead Quality: Score and prioritize leads to ensure that your sales team is always working on the most promising opportunities.</li>
            <li>Enhanced Lead Nurturing: Nurture leads with targeted and personalized communication, moving them closer to a purchase decision.</li>
            <li>Better Sales Forecasting: With a clear view of your sales pipeline, you can make more accurate sales forecasts and business decisions.</li>
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

export default LeadManagementPage;
