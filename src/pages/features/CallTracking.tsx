
import FeaturePage from './FeaturePage';

const callTrackingData = {
  title: "Call Tracking",
  subtitle: "Monitor and analyze your call sources to optimize your marketing campaigns and improve ROI.",
  overview: "FoneRoute's Call Tracking solution allows you to attribute inbound calls to the specific marketing channels, campaigns, or keywords that generated them. By assigning unique, trackable phone numbers to your ads, landing pages, and other marketing assets, you can gain a clear understanding of which initiatives are driving the most valuable customer calls. Use this data to measure your marketing ROI, optimize your ad spend, and make smarter decisions to grow your business.",
  capabilities: [
    "Dynamic Number Insertion (DNI): Automatically display unique tracking numbers on your website based on the referral source (e.g., Google Ads, organic search, social media).",
    "Campaign-Level Tracking: Assign static tracking numbers to offline marketing materials like brochures, billboards, and direct mail to measure their effectiveness.",
    "Keyword-Level Tracking: Pinpoint the exact search keywords that are generating inbound calls, allowing you to refine your PPC and SEO strategies.",
    "Call Attribution Reports: View detailed reports that connect call data to specific marketing sources, providing a clear picture of your campaign performance.",
    "Multi-Channel Tracking: Track calls from both online and offline sources in a single, unified dashboard for a holistic view of your marketing efforts.",
    "Integration with Analytics Platforms: Seamlessly integrate call tracking data with Google Analytics and other platforms to enrich your marketing insights."
  ],
  benefits: [
    "Prove Marketing ROI: Accurately measure the return on investment of your marketing campaigns by attributing inbound leads to specific channels.",
    "Optimize Ad Spend: Identify which campaigns and keywords are driving the most valuable calls and allocate your budget more effectively.",
    "Improve Customer Insights: Understand which marketing messages are resonating with your audience and generating the most engagement.",
    "Enhance Lead Quality: Focus your marketing efforts on the channels that deliver high-quality leads, increasing your conversion rates.",
    "Bridge the Online-Offline Gap: Connect your digital marketing efforts with offline conversions to get a complete view of the customer journey."
  ],
  useCases: [
    "Digital Marketing Agencies: Use DNI to show clients exactly which PPC campaigns, social media ads, and organic search terms are generating phone leads and proving campaign value.",
    "Local Businesses: Track calls from Google My Business, local directories, and print ads to understand which channels are driving the most foot traffic and appointments.",
    "Healthcare Providers: Assign unique numbers to different service pages to track which medical services are generating the most patient inquiries and booking requests."
  ],
};

const CallTrackingPage = () => {
  return <FeaturePage feature={callTrackingData} />;
};

export default CallTrackingPage;
