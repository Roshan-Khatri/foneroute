
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Globe, BarChart2, GitMerge, Settings } from 'lucide-react';

const features = [
  {
    icon: <Clock size={32} className="text-primary" />,
    title: "Time-of-Day Routing",
    description: "Direct calls based on your business hours, ensuring callers reach the right destination, whether it's your active team, an after-hours message, or voicemail."
  },
  {
    icon: <Users size={32} className="text-primary" />,
    title: "Skills-Based Routing",
    description: "Match callers with the agents best equipped to handle their needs. Route calls based on agent expertise, language proficiency, or other custom criteria."
  },
  {
    icon: <GitMerge size={32} className="text-primary" />,
    title: "Round-Robin Routing",
    description: "Evenly distribute calls among your team members to ensure fair workload distribution and prevent agent burnout. Perfect for sales and support teams."
  },
  {
    icon: <Globe size={32} className="text-primary" />,
    title: "Geographic Routing",
    description: "Route calls based on the caller's geographic location, area code, or country. Connect customers to their local branch or region-specific team automatically."
  },
  {
    icon: <BarChart2 size={32} className="text-primary" />,
    title: "Least-Idle Routing",
    description: "Optimize productivity by sending the next incoming call to the agent who has been idle the longest, maximizing team efficiency and reducing customer wait times."
  },
  {
    icon: <Settings size={32} className="text-primary" />,
    title: "Custom IVR Integration",
    description: "Build powerful and intuitive call flows. Use our drag-and-drop IVR builder to create custom menus that guide callers and route them based on their selections."
  }
];

const CallRoutingPage = () => {
  return (
    <div>
      <PageHeader
        title="Intelligent Call Routing"
        subtitle="Direct calls to the right person, every time. Optimize your workflow, reduce wait times, and improve customer satisfaction with FoneRoute's advanced call routing capabilities."
        breadcrumb="Home / Features / Call Routing"
      />

      {/* Main Content Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Streamline Your Inbound Calls</h2>
              <p className="text-lg text-muted-foreground">
                Call routing is the backbone of an efficient business phone system. It's the process of automatically directing incoming calls to a specific destination—be it a person, a department, or a message—based on a predefined set of rules and criteria. 
              </p>
              <p className="text-lg text-muted-foreground">
                With FoneRoute, you can move beyond simple call forwarding. Our platform empowers you to design sophisticated call flows that reduce manual call handling, shorten wait times, and ensure your customers always talk to the right person on the first try. This leads to faster resolutions, higher customer satisfaction, and a more productive team.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Get a Demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div>
              <img src="/images/features/call-routing.png" alt="Call Routing Flowchart" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Powerful Routing for Any Scenario</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            From simple business hours to complex, multi-level IVRs, our flexible routing engine can be configured to meet your exact needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {features.map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Ready to Revolutionize Your Call Management?</h2>
          <p className="text-lg opacity-90 mb-6">
            Let us show you how intelligent call routing can transform your business communication. Get in touch with our experts for a personalized demo.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact-sales">Contact Sales</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CallRoutingPage;
