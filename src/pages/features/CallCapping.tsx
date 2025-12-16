
import FeaturePage from './FeaturePage';

const callCappingData = {
  title: "Call Capping",
  subtitle: "Limit the number of calls made to your contacts within a specific timeframe to avoid over-dialing and improve customer experience.",
  overview: "FoneRoute\'s Call Capping feature helps you maintain a positive relationship with your contacts by preventing list burnout and over-dialing. By setting intelligent limits on how many times a number can be called within a specific period, you can ensure your outreach is effective and respectful. This not only improves customer experience but also enhances agent efficiency by focusing their efforts on leads that are not being fatigued, leading to better outcomes and protecting your brand\'s reputation.",
  capabilities: [
    "Rule-Based Limits: Set rules to cap calling attempts per number over a specific time (e.g., 3 calls per 24 hours).",
    "List-Wide & Campaign-Specific Caps: Apply capping rules across all lists or tailor them for specific campaigns.",
    "Disposition-Based Resets: Automatically reset the cap for a number based on call outcomes (e.g., reset if the call was successful).",
    "Timezone-Aware Capping: Ensure caps respect the local timezone of the contact to avoid calling at inappropriate hours.",
    "Manual Override: Provide supervisors with the ability to manually override caps for high-priority leads.",
    "Real-Time Enforcement: The system checks and enforces capping rules in real-time before a dial is initiated."
  ],
  benefits: [
    "Protect Brand Reputation: Avoid harassing contacts with excessive calls, which prevents brand damage and negative sentiment.",
    "Improve Customer Experience: Show respect for your contacts\' time and privacy, leading to more positive interactions.",
    "Increase Agent Efficiency: Focus agent time on fresh, responsive leads instead of repeatedly calling unresponsive ones.",
    "Reduce List Burnout: Preserve the long-term value of your contact lists by preventing them from becoming fatigued.",
    "Enhance Regulatory Compliance: Help adhere to telemarketing regulations that govern call frequency."
  ],
  useCases: [
    "Lead Nurturing Campaigns: Limit call attempts to a new lead to once per day to avoid appearing overly aggressive.",
    "Large-Scale Telemarketing: Apply a universal cap across a massive list to ensure no single person is called too frequently by different agents.",
    "Customer Surveys: Cap calls to one attempt per week to gather feedback without annoying existing customers."
  ],
};

const CallCappingPage = () => {
  return <FeaturePage feature={callCappingData} />;
};

export default CallCappingPage;
