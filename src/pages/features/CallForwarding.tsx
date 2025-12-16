
import FeaturePage from './FeaturePage';

const callForwardingData = {
  title: "Call Forwarding",
  subtitle: "Redirect incoming calls to any number, ensuring you never miss an important call, wherever you are.",
  overview: "FoneRoute's Call Forwarding feature gives you the flexibility to stay connected and manage your business communications from anywhere. Seamlessly redirect incoming calls from your business number to any other phone, whether it's your mobile, home office, or a colleague's line. This simple yet powerful tool ensures business continuity, enhances mobility for your team, and guarantees that every important customer call gets answered.",
  capabilities: [
    "Find Me / Follow Me: Create a sequence of numbers that ring in order, ensuring calls find you wherever you are.",
    "Simultaneous Ringing: Ring multiple numbers at the same time, so you or a team member can answer on the most convenient device.",
    "Time-Based Forwarding: Automatically redirect calls to different numbers based on the time of day or day of the week, perfect for after-hours support.",
    "Conditional Forwarding: Set rules to forward calls only when your line is busy, unanswered, or unreachable.",
    "Caller ID Control: Maintain a professional image by displaying your primary business number as the caller ID, even when forwarding to a personal device.",
    "Easy Configuration: Manage and update your call forwarding rules anytime through an intuitive web portal."
  ],
  benefits: [
    "Enhanced Mobility: Run your business from anywhere by taking calls on your mobile device without exposing your personal number.",
    "Improved Customer Satisfaction: Reduce voicemails and missed opportunities by ensuring every call is answered by a live person.",
    "Increased Availability: Provide 24/7 coverage by forwarding after-hours calls to an on-call team member or answering service.",
    "Business Continuity: Keep your communications operational during emergencies or outages by quickly redirecting calls to an alternative location.",
    "Professional Image: Maintain a consistent and professional appearance with a single business number, regardless of where the call is answered."
  ],
  useCases: [
    "Entrepreneurs & Sole Proprietors: Forward calls from a dedicated business line to a personal mobile to stay connected with clients while on the go.",
    "Remote & Hybrid Teams: Allow employees to receive work calls on their preferred devices, whether they are in the office, at home, or traveling.",
    "Service Businesses: Automatically forward after-hours emergency calls to an on-call technician's mobile number to provide round-the-clock support."
  ],
};

const CallForwardingPage = () => {
  return <FeaturePage feature={callForwardingData} />;
};

export default CallForwardingPage;
