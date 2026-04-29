// Core
import siteSettings from './siteSettings';

// Pages
import homePage from './pages/homePage';
import aboutPage from './pages/aboutPage';
import contactPage from './pages/contactPage';
import supportPage from './supportPage';
import solutionsPage from './pages/solutionsPage';
import featuresPage from './pages/featuresPage'; // ✅ Detail Page
import blogPage from './pages/blogPage';
import pricingPage from './pages/pricingPage';
import featuresMainPage from './pages/featuresMainPage'; // ✅ Listing Page
import industryPage from './pages/industryPage';
import terms from './pages/terms';
import privacyPolicy from './pages/privacyPolicy';

// Extra Pages
import contactCenterPage from './pages/contactCenterPage';
import predictiveDialerPage from './pages/predictiveDialerPage';
import cloudPbxPage from './pages/cloudPbxPage';
import autoDialerPage from './pages/autoDialerPage';
import powerDialerPage from './pages/powerDialerPage';
import progressiveDialerPage from './pages/progressiveDialerPage';
import inboundCallSolutionsPage from './pages/inboundCallSolutionsPage';
import outboundPage from './pages/outboundPage';
import internationalNumbersPage from './pages/internationalNumbersPage';
import clickToCallPage from './pages/clickToCallPage';
import smsMmsApiPage from './pages/smsMmsApiPage';
import numberMaskingPage from './pages/numberMaskingPage';
import tollFreePage from './pages/tollFreePage';
import localNumbersPage from './pages/localNumbersPage';
import unifiedCommunicationsPage from './pages/unifiedCommunicationsPage';

// Objects
import link from './objects/link';
import cta from './objects/cta';
import seo from './objects/seo';
import featureCard from './objects/featureCard';
import testimonialItem from './objects/testimonialItem';
import valueCard from './objects/valueCard';
import stat from './objects/stat';
import faqItem from './objects/faqItem';
import featureComparison from './objects/featureComparison';

// Sections
import heroSection from './sections/heroSection';
import featuresSection from './sections/featuresSection';
import statsSection from './sections/statsSection';
import testimonialsSection from './sections/testimonialsSection';
import ourValuesSection from './sections/ourValuesSection';
import ctaSection from './sections/ctaSection';
import topSolutionsSection from './sections/topSolutionsSection';
import whyChooseUsSection from './sections/whyChooseUsSection';
import industrySolutionsSection from './sections/industrySolutionsSection';
import provenResultsSection from './sections/provenResultsSection';
import featureComparisonSection from './sections/featureComparisonSection';
import faqSection from './sections/faqSection';

// Navigation
import navigation from './navigation';

export const schemaTypes = [
  // Core
  siteSettings,

  // Pages
  homePage,
  aboutPage,
  contactPage,
  supportPage,
  solutionsPage,
  featuresPage,       // ✅ Detail Page (IMPORTANT)
  featuresMainPage,   // ✅ Listing Page
  blogPage,
  pricingPage,
  industryPage,
  terms,
  privacyPolicy,

  // Extra Pages
  contactCenterPage,
  predictiveDialerPage,
  cloudPbxPage,
  autoDialerPage,
  powerDialerPage,
  progressiveDialerPage,
  inboundCallSolutionsPage,
  outboundPage,
  internationalNumbersPage,
  clickToCallPage,
  smsMmsApiPage,
  numberMaskingPage,
  tollFreePage,
  localNumbersPage,
  unifiedCommunicationsPage,

  // Sections
  heroSection,
  featuresSection,
  statsSection,
  testimonialsSection,
  ourValuesSection,
  ctaSection,
  topSolutionsSection,
  whyChooseUsSection,
  industrySolutionsSection,
  provenResultsSection,
  featureComparisonSection,
  faqSection,

  // Objects
  link,
  cta,
  seo,
  featureCard,
  testimonialItem,
  valueCard,
  stat,
  faqItem,
  featureComparison,

  // Navigation
  navigation,
];