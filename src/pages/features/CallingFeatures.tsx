
import FeaturePage from './FeaturePage';

const callingFeaturesData = {
  title: "Calling Features",
  subtitle: "Enhance your communication with a suite of powerful calling features designed to improve productivity and customer engagement.",
  overview: "FoneRoute's calling features provide a robust suite of tools to enhance your business communications. From basic call handling to advanced routing and management, our platform ensures every call is efficient, professional, and contributes to your business goals. Streamline your workflows, improve agent productivity, and deliver exceptional customer experiences with our comprehensive calling capabilities.",
  capabilities: [
    "Voicemail: Set up personalized voicemail greetings and receive audio recordings of messages directly in your email inbox.",
    "Call Hold & Mute: Easily place calls on hold or mute them as needed to handle interruptions or consult with colleagues.",
    "Call Transfer (Warm & Cold): Transfer calls to other team members with a warm transfer (announcing the caller) or a cold transfer (direct handoff).",
    "Conference Calling: Host multi-party conference calls to collaborate with team members and clients simultaneously.",
    "Caller ID Management: Customize the outbound caller ID to display your business name and number, enhancing brand recognition and trust.",
    "Do Not Disturb (DND): Set your status to Do Not Disturb to temporarily block incoming calls and focus on other tasks."
  ],
  benefits: [
    "Improved Professionalism: Present a polished and professional image to your customers with features like custom greetings and call transfers.",
    "Increased Productivity: Streamline call handling and reduce downtime for your agents, allowing them to focus on high-value conversations.",
    "Enhanced Collaboration: Easily bring in other team members to calls for quick consultations and problem-solving.",
    "Greater Flexibility: Manage calls from anywhere, on any device, ensuring you never miss an important conversation.",
    "Better Customer Experience: Reduce wait times and ensure callers reach the right person quickly, improving overall satisfaction."
  ],
  useCases: [
    "Sales Teams: Sales representatives can use warm transfers to seamlessly hand off qualified leads to account executives, providing a smooth customer journey.",
    "Support Desks: Support agents can use conference calling to bring in technical experts to resolve complex customer issues on a single call.",
    "Remote Workforces: Distributed teams can stay connected and manage business calls effectively using features like call forwarding and voicemail-to-email."
  ],
};

const CallingFeaturesPage = () => {
  return <FeaturePage feature={callingFeaturesData} />;
};

export default CallingFeaturesPage;
