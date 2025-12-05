
import React from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '@/components/layout/SEO';
import PageHeader from '@/components/layout/PageHeader';
import { solutionsData, industriesData } from './solutionsData';

const Solution = () => {
  const { slug } = useParams();
  const solution = solutionsData.find(s => s.slug.current === slug);

  if (!solution) {
    return (
      <div className="container-custom mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
        <p className="text-lg text-muted-foreground">
          Sorry, we couldn't find the solution you were looking for.
        </p>
      </div>
    );
  }

  const renderSection = (title, items) => {
    if (!items || items.length === 0) {
      return null;
    }
    return (
      <section id={title.toLowerCase().replace(/ /g, '-')} className="py-12 md:py-16 bg-background alternate-bg">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div key={index} className="p-6 bg-surface rounded-lg shadow-lg card-hover-animation">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <SEO
        title={solution.metaTitle || solution.title}
        description={solution.metaDescription || solution.hero.subtitle}
      />
      <div className="relative">
        <PageHeader title={solution.hero.title} subtitle={solution.hero.subtitle} />

        <main>
          {/* Overview Section */}
          <section id="overview" className="py-12 md:py-16">
            <div className="container-custom mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {solution.overview}
              </p>
            </div>
          </section>

          {/* Dynamically render sections based on available data */}
          {renderSection('Key Features', solution.features)}
          {renderSection('Benefits', solution.benefits)}
          {renderSection('Use Cases', solution.useCases)}

          {/* Solutions by Industry Section */}
          {renderSection('Solutions by Industry', industriesData)}

          {/* Related Solutions Section */}
          {solution.relatedSolutions && solution.relatedSolutions.length > 0 && (
            <section id="related-solutions" className="py-12 md:py-16 bg-background alternate-bg">
              <div className="container-custom mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Related Solutions</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {solution.relatedSolutions.map((related, index) => (
                    <a
                      key={index}
                      href={`/solutions/${related.slug.current}`}
                      className="px-6 py-3 bg-surface hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary rounded-lg shadow-md font-medium text-foreground transition-all duration-300"
                    >
                      {related.title}
                    </a>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
};

export default Solution;
