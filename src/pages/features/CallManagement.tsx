import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const CallManagementFeatures = () => {
  return (
    <div>
      <PageHeader
        title="Call Management Features"
        subtitle="Details about our call management features are coming soon."
        breadcrumb="Home / Features / Call Management"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Feature List Coming Soon</h2>
              <p className="text-muted-foreground">
                The detailed list of call management features will be available here shortly. Please check back later for more information.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CallManagementFeatures;
