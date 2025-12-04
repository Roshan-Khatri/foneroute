
import PageHeader from '@/components/layout/PageHeader';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, BarChart3, Building, GraduationCap, ShoppingCart, Stethoscope, Banknote, Factory } from 'lucide-react';
import { useSanityContent } from '@/hooks/useSanityContent';
import IndustriesSkeleton from './IndustriesSkeleton';
import type { Industry } from '@/sanity/types';

const iconMap = {
  Healthcare: Stethoscope,
  Finance: Banknote,
  Education: GraduationCap,
  Technology: Building,
  Retail: ShoppingCart,
  Manufacturing: Factory,
};

const Industries = () => {
  const { data: industries, isLoading, isError } = useSanityContent<Industry[]>('industry');

  if (isLoading) {
    return <IndustriesSkeleton />;
  }

  if (isError) {
    return <div>Error loading page.</div>;
  }

  const mappedIndustries = industries.map(ind => ({
    ...ind,
    icon: iconMap[ind.title] || Building,
  }));
  
  const allChallenges = industries.flatMap(ind => ind.challenges || []);
  const allSuccessStories = industries.flatMap(ind => ind.successStories || []);

  return (
	<div>
		<PageHeader
			title="Industry Solutions"
			subtitle="Tailored telecommunications solutions for every industry."
			breadcrumb="Home / Industries"
		>
					<div className="flex flex-col md:flex-row gap-4 mt-4">
            <Button asChild size="lg">
              <Link to="/contact">Book Consultation</Link>
            </Button>
					</div>
		</PageHeader>

		{/* Hero Section */}
		<section className="py-12 bg-background">
			<div className="container-custom text-center max-w-2xl mx-auto">
				<h2 className="text-3xl font-bold mb-2">Empowering Industries</h2>
				<p className="text-lg text-muted-foreground mb-6">FoneRoute delivers secure, scalable, and innovative telecom solutions for every sector.</p>
			</div>
		</section>

		{/* Industries Grid */}
		<section className="py-12">
			<div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{mappedIndustries.map(ind => (
          <Link to={`/industries/${ind.slug.current}`} key={ind.title}>
            <Card className="card-professional card-hover h-full">
              <CardContent className="p-4 flex flex-col items-center">
                <ind.icon size={32} className="mb-2 text-primary"/>
                <h3 className="text-xl font-bold mb-1">{ind.title}</h3>
                <p className="mb-2 text-muted-foreground text-center text-base">{ind.description}</p>
                <ul className="mb-2 text-sm">
                  {(ind.solutions || []).map(s => (
                    <li key={s.slug.current} className="flex items-center gap-2 text-green-700"><Shield size={14}/>{s.title}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Link>
				))}
			</div>
		</section>

		{/* Industry Challenges */}
		<section className="py-12 bg-background">
			<div className="container-custom max-w-3xl mx-auto">
				<h4 className="text-xl font-bold mb-3">Common Challenges</h4>
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
					{allChallenges.map((c, idx) => (
						<li key={idx} className="bg-muted rounded-lg p-3 flex items-center gap-2 text-base"><BarChart3 size={16}/>{c}</li>
					))}
				</ul>
			</div>
		</section>

		{/* Solutions Overview */}
		<section className="py-12">
			<div className="container-custom max-w-2xl mx-auto text-center">
				<h4 className="text-xl font-bold mb-3">How FoneRoute Helps</h4>
				<p className="mb-3">Our platform addresses industry-specific needs with flexible, secure, and scalable solutions. From compliance to customer engagement, we help you succeed.</p>
			</div>
		</section>

		{/* Success Stories */}
		<section className="py-12 bg-background">
			<div className="container-custom max-w-2xl mx-auto">
				<h4 className="text-xl font-bold mb-3">Success Stories</h4>
				<div className="space-y-3">
					{allSuccessStories.map((s, idx) => (
						<div key={idx} className="bg-muted rounded-lg p-3">
							<div className="font-semibold mb-1">{s.industry}</div>
							<div className="text-muted-foreground">{s.story}</div>
						</div>
					))}
				</div>
			</div>
		</section>

		{/* Compliance & Security */}
		<section className="py-12">
			<div className="container-custom max-w-2xl mx-auto text-center">
				<h4 className="text-xl font-bold mb-3">Compliance & Security</h4>
				<p className="mb-3">Our solutions meet industry standards for security and compliance, including HIPAA, PCI DSS, FERPA, and more.</p>
			</div>
		</section>

	</div>
  );
}

export default Industries;
