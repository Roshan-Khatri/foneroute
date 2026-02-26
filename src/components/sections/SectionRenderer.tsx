
import React from 'react';

// Define your section components here
const HeroSection = ({ section }: { section: any }) => (
  <section key={section._key} className="hero-section">
    <h2>{section.title}</h2>
    <p>{section.subtitle}</p>
  </section>
);

const FeaturesSection = ({ section }: { section: any }) => (
  <section key={section._key} className="features-section">
    <h2>{section.title}</h2>
    {/* Render features */}
  </section>
);

const CtaSection = ({ section }: { section: any }) => (
  <section key={section._key} className="cta-section">
    <h2>{section.title}</h2>
    {/* Render CTA */}
  </section>
);

const FaqSection = ({ section }: { section: any }) => (
  <section key={section._key} className="faq-section">
    <h2>{section.title}</h2>
    {/* Render FAQs */}
  </section>
);

const StatsSection = ({ section }: { section: any }) => (
    <section key={section._key} className="stats-section">
      <h2>{section.title}</h2>
      {/* Render Stats */}
    </section>
  );

const UnknownSection = ({ type }: { type: string }) => (
    <section className="unknown-section">
      <p>Unknown section type: {type}</p>
    </section>
  );

const SectionRenderer = ({ sections }: { sections: any[] }) => {
  if (!sections) {
    return null;
  }

  return (
    <>
      {sections.map((section) => {
        switch (section._type) {
            case 'heroSection':
                return <HeroSection key={section._key} section={section} />;
            case 'featuresSection':
                return <FeaturesSection key={section._key} section={section} />;
            case 'ctaSection':
                return <CtaSection key={section._key} section={section} />;
            case 'faqSection':
                return <FaqSection key={section._key} section={section} />;
            case 'statsSection':
                return <StatsSection key={section._key} section={section} />;
            default:
                if (process.env.NODE_ENV !== 'production') {
                    return <UnknownSection key={section._key} type={section._type} />;
                }
                return null;
        }
      })}
    </>
  );
};

export default SectionRenderer;
