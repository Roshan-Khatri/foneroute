
import React from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '@/components/layout/SEO';
import PageHeader from '@/components/layout/PageHeader';
import { solutionsData, industriesData } from './solutionsData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Solution = () => {
  const { slug } = useParams();
  const solution = solutionsData.find(s => s.slug.current === slug);

  if (!solution) {
    return (
      <div className="container-custom mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Solution Not Found</h1>
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
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold">{title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {items.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <Card className="bg-background shadow-lg h-full text-left card-hover-animation">
                  <CardHeader>
                    <CardTitle className="font-poppins text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
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
      <div>
        <PageHeader title={solution.hero.title} subtitle={solution.hero.subtitle} />

        <main>
          {/* Overview Section */}
          <section id="overview" className="py-12 md:py-16">
            <div className="container-custom mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">Overview</h2>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {solution.overview}
              </motion.p>
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
              <div className="container-custom mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-8">Related Solutions</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {solution.relatedSolutions.map((related, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                      <Button asChild variant="outline" size="lg">
                        <a
                          href={`/solutions/${related.slug.current}`}
                          className="transition-all duration-300"
                        >
                          {related.title}
                        </a>
                      </Button>
                    </motion.div>
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
