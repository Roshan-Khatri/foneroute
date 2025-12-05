
import { Link, useParams } from 'react-router-dom';
import { industries } from '@/content/industries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import NotFoundPage from '@/pages/NotFound';

function IndustryPage() {
  const { slug } = useParams();
  const industry = industries.find((inst) => inst.slug?.current === slug);

  if (!industry) {
    return <NotFoundPage />;
  }

  return (
    <div className="container-custom py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{industry.name}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {industry.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Solutions</h2>
          <div className="space-y-4">
            {industry.solutions.map((solution) => (
              <Link key={solution.slug.current} to={`/solutions/${solution.slug.current}`}>
                <Card className="card-hover-animation">
                  <CardHeader>
                    <CardTitle>{solution.title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Key Information</h2>
          <Card className="card-hover-animation">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {industry.metrics && (
                  <div>
                    <h3 className="font-semibold">Metrics</h3>
                    <p className="text-muted-foreground">{industry.metrics}</p>
                  </div>
                )}
                {industry.challenges && (
                  <div>
                    <h3 className="font-semibold">Challenges</h3>
                    <ul className="space-y-2 mt-2">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {industry.longDescription && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Why FoneRoute for {industry.name}?</h2>
          <div className="prose max-w-none">
            {industry.longDescription.map((block, index) => (
              <p key={index} className="text-muted-foreground leading-loose">
                {block.children.map(child => child.text).join('')}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default IndustryPage;
