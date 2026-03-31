
import FeaturePage from './FeaturePage';

const callReportingData = {
  title: "Call Reporting & Analytics",
  subtitle: "Gain valuable insights into your call performance with comprehensive reporting and analytics.",
  overview: "FoneRoute's Call Reporting and Analytics tools provide deep insights into your call center's performance, customer interactions, and operational efficiency. With customizable dashboards and detailed reports, you can track key metrics, identify trends, and make data-driven decisions to optimize your communication strategy. Turn raw call data into actionable intelligence to improve agent productivity and enhance the customer experience.",
  capabilities: [
    "Real-Time Dashboards: Monitor live call activity, agent status, and service levels with customizable, real-time dashboards.",
    "Historical Reporting: Generate detailed historical reports on call volume, agent performance, queue times, and more.",
    "Call Detail Records (CDRs): Access comprehensive logs of every call, including timestamps, duration, caller ID, and call disposition.",
    "Performance Analytics: Analyze key performance indicators (KPIs) such as average handle time, first-call resolution, and agent utilization.",
    "Scheduled Reports: Automatically receive reports via email on a daily, weekly, or monthly basis to stay informed.",
    "Data Export: Export report data in various formats (e.g., CSV, PDF) for further analysis or integration with other business systems."
  ],
  benefits: [
    "Data-Driven Decision-Making: Make informed decisions based on accurate and timely data to improve your operations.",
    "Improved Agent Performance: Identify top-performing agents and areas for improvement with detailed performance metrics.",
    "Enhanced Customer Satisfaction: Reduce wait times and improve service levels by analyzing call patterns and queue performance.",
    "Optimized Resource Allocation: Use historical data to forecast call volume and schedule agents more effectively.",
    "Increased Accountability: Track individual and team performance to foster a culture of accountability and continuous improvement."
  ],
  useCases: [
    "Call Center Managers: Use real-time dashboards to monitor service levels and make immediate adjustments to agent assignments as call volumes fluctuate.",
    "Business Analysts: Analyze historical call data to identify peak hours, common customer issues, and trends in call volume to inform business strategy.",
    "Team Leaders: Generate weekly performance reports to review with their teams, celebrate successes, and identify coaching opportunities."
  ],
};

const CallReportingPage = () => {
  return <FeaturePage feature={callReportingData} />;
};

export default CallReportingPage;
