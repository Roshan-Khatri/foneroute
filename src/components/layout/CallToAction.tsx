
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/FadeIn';

const CallToAction = () => {
  return (
    <FadeIn>
      <section id="cta" className="py-24 bg-surface">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Ready to Transform Your Business Communications?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 prose-professional">
            Get started with a free consultation and discover how our solutions can drive your business forward.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default CallToAction;
