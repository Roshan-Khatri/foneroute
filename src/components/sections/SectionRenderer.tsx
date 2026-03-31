import React from "react";

import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ProvenResultsSection from "./ProvenResultsSection";
import OurValuesSection from "./OurValuesSection";
import TestimonialsSection from "./TestimonialsSection";
import FeatureComparisonSection from "./FeatureComparisonSection";
import FaqSection from "./FaqSection";
import CtaSection from "./CtaSection";
import TopSolutionsSection from "./TopSolutionsSection";
import IndustrySolutionsSection from "./IndustrySolutionsSection";

const SectionRenderer = ({ sections = [] }) => {

  if (!sections.length) {
    console.warn("No sections received from Sanity");
    return null;
  }

  return (
    <div className="flex flex-col">

      {sections.map((section, index) => {

        if (!section || !section._type) return null;

        const key = section._key || index;

        // ✅ Wrapper for spacing + consistency
        const Wrapper = ({ children }: any) => (
          <section className="">
            <div className="container mx-auto px-4">
              {children}
            </div>
          </section>
        );

        switch (section._type) {

          case "heroSection":
            // ✅ Hero usually full-width (no container wrap)
            return <HeroSection key={key} section={section} />;

          case "featuresSection":
            return (
              <Wrapper key={key}>
                <FeaturesSection section={section} />
              </Wrapper>
            );

          case "whyChooseUsSection":
            return (
              <Wrapper key={key}>
                <WhyChooseUsSection section={section} />
              </Wrapper>
            );

          case "provenResultsSection":
            return (
              <Wrapper key={key}>
                <ProvenResultsSection section={section} />
              </Wrapper>
            );

          case "ourValuesSection":
            return (
              <Wrapper key={key}>
                <OurValuesSection section={section} />
              </Wrapper>
            );

          case "industrySolutionsSection":
            return (
              <Wrapper key={key}>
                <IndustrySolutionsSection section={section} />
              </Wrapper>
            );

          case "topSolutionsSection":
            return (
              <Wrapper key={key}>
                <TopSolutionsSection section={section} />
              </Wrapper>
            );

          case "testimonialsSection":
            return (
              <Wrapper key={key}>
                <TestimonialsSection section={section} />
              </Wrapper>
            );

          case "featureComparisonSection":
            return (
              <Wrapper key={key}>
                <FeatureComparisonSection section={section} />
              </Wrapper>
            );

          case "faqSection":
            return (
              <Wrapper key={key}>
                <FaqSection section={section} />
              </Wrapper>
            );

          case "ctaSection":
            return (
              <Wrapper key={key}>
                <CtaSection section={section} />
              </Wrapper>
            );

          default:
            console.warn("Unknown section type:", section._type);
            return null;
        }
      })}

    </div>
  );
};

export default SectionRenderer;