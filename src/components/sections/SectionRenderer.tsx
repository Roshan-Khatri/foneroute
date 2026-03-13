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
    console.log("No sections received from Sanity");
    return null;
  }

  console.log("Sections received:", sections);

  return (
    <>
      {sections.map((section, index) => {

        if (!section || !section._type) return null;

        const key = section._key || index;

        switch (section._type) {

          case "heroSection":
            return <HeroSection key={key} section={section} />;

          case "featuresSection":
            return <FeaturesSection key={key} section={section} />;

          case "whyChooseUsSection":
            return <WhyChooseUsSection key={key} section={section} />;

          case "provenResultsSection":
            return <ProvenResultsSection key={key} section={section} />;

          case "ourValuesSection":
            return <OurValuesSection key={key} section={section} />;

          case "industrySolutionsSection":
            return <IndustrySolutionsSection key={key} section={section} />;

          case "topSolutionsSection":
            return <TopSolutionsSection key={key} section={section} />;

          case "testimonialsSection":
            return <TestimonialsSection key={key} section={section} />;

          case "featureComparisonSection":
            return <FeatureComparisonSection key={key} section={section} />;

          case "faqSection":
            return <FaqSection key={key} section={section} />;

          case "ctaSection":
            return <CtaSection key={key} section={section} />;

          default:
            console.warn("Unknown section type:", section._type);
            return null;
        }
      })}
    </>
  );
};

export default SectionRenderer;