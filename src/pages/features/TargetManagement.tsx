
import FeaturePage from './FeaturePage';

const targetManagementData = {
  title: "Target Management",
  subtitle: "Efficiently manage and organize your contact lists to improve targeting and campaign effectiveness.",
  overview: "FoneRoute's Target Management feature provides a powerful suite of tools to import, segment, and maintain your contact lists. Clean, organized, and well-targeted lists are the foundation of any successful outbound campaign. Our system helps you ensure data hygiene, comply with regulations, and deliver the right message to the right audience, maximizing the impact of your sales and marketing efforts.",
  capabilities: [
    "List Import & Export: Easily upload contact lists from CSV files and export your data for external analysis or use.",
    "Contact Segmentation: Create dynamic or static segments based on any contact field, such as demographics, location, or purchase history.",
    "Data Deduplication: Automatically detect and merge duplicate contacts within and across lists to maintain a single source of truth.",
    "Custom Fields: Add unlimited custom fields to store unique information about your contacts, enabling highly specific targeting.",
    "Suppression & DNC Lists: Manage Do-Not-Call (DNC) lists and campaign-specific suppression lists to ensure compliance and respect customer preferences.",
    "List Cleansing: Automatically validate and scrub phone numbers to remove invalid entries, improving connection rates and data quality."
  ],
  benefits: [
    "Improved Targeting Precision: Reach the exact audience you want by creating highly specific segments, leading to higher conversion rates.",
    "Increased Operational Efficiency: Automate the process of cleaning and organizing lists, saving administrative time and effort.",
    "Enhanced Compliance: Mitigate risk by systematically managing opt-outs and adhering to DNC regulations.",
    "Higher Connection Rates: Improve the effectiveness of your outbound campaigns by removing bad numbers and duplicates.",
    "Better Personalization: Leverage custom data fields to personalize your scripts and messaging for different audience segments."
  ],
  useCases: [
    "Outbound Sales Teams: Segment a master prospect list into targeted campaigns based on lead source, company size, or previous engagement.",
    "Telemarketing Agencies: Maintain separate lists for different clients and campaigns, ensuring data privacy and accurate reporting.",
    "Market Research: Create specific contact segments to conduct surveys and gather feedback from particular customer demographics."
  ],
};

const TargetManagementPage = () => {
  return <FeaturePage feature={targetManagementData} />;
};

export default TargetManagementPage;
