
import FeaturePage from './FeaturePage';

const callManagementData = {
  title: "Call Management",
  subtitle: "Take control of your inbound and outbound calls with advanced call management tools that streamline your workflow.",
  overview: "Effective call management is the backbone of exceptional customer service and efficient team collaboration. FoneRoute\'s Call Management solutions provide a comprehensive suite of tools to direct, monitor, and analyze your voice communications. From intelligent call routing to in-depth performance analytics, our platform empowers you to optimize your workflows, reduce operational costs, and elevate every customer interaction.",
  capabilities: [
    "Automatic Call Distribution (ACD): Intelligently route incoming calls to the most suitable agent or department based on custom rules, skills, or availability.",
    "Interactive Voice Response (IVR): Create multi-level IVR menus to guide callers to the right destination, enabling self-service and reducing agent workload.",
    "Call Queuing: Manage high call volumes by placing callers in a queue with customized on-hold music and periodic updates, minimizing hang-ups.",
    "Call Monitoring & Whisper: Allow supervisors to listen in on live calls, provide real-time coaching to agents (whisper), or join the conversation if needed.",
    "Call Recording: Automatically record inbound and outbound calls for quality assurance, compliance, and training purposes.",
    "Ring Groups: Group multiple agents or extensions to ring simultaneously or sequentially, ensuring important calls are always answered."
  ],
  benefits: [
    "Boost Agent Productivity: Automate call routing and reduce manual handling, allowing agents to focus on meaningful customer interactions.",
    "Improve First-Call Resolution: Ensure callers are connected to the agent best equipped to handle their needs, increasing satisfaction and resolution rates.",
    "Enhance Agent Training & Quality: Use call monitoring and recording to provide targeted feedback and improve the quality of your customer service.",
    "Reduce Customer Wait Times: Efficiently manage call queues and distribute calls to available agents, minimizing caller frustration.",
    "Gain Actionable Insights: Leverage detailed analytics to understand call patterns, agent performance, and customer behavior to make data-driven decisions."
  ],
  useCases: [
    "Customer Support Teams: Implement an IVR to segment support requests (e.g., billing, technical support) and route them to specialized agents using ACD.",
    "Sales Department: Use Ring Groups to ensure that incoming sales inquiries are answered by the next available sales representative, reducing missed opportunities.",
    "Quality Assurance: Supervisors can use call recording and monitoring to review agent performance, ensure adherence to scripts, and identify areas for improvement."
  ],
};

const CallManagementPage = () => {
  return <FeaturePage feature={callManagementData} />;
};

export default CallManagementPage;
