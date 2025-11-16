import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const CallingFeatures = () => {
  return (
    <div>
      <PageHeader
        title="Calling Features"
        subtitle="Details about our calling features are coming soon."
        breadcrumb="Home / Features / Calling"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Feature List Coming Soon</h2>
              <p className="text-muted-foreground">
                The detailed list of calling features will be available here shortly. Please check back later for more information.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CallingFeatures;
