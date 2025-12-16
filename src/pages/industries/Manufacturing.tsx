
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const ManufacturingPage = () => {
  const manufacturing = {
    hero: {
      title: "Streamline Operations and Supply Chain with Smart Communication",
      subtitle: "Enhance productivity, improve safety, and optimize your supply chain with our communication solutions for the manufacturing industry."
    },
    overview: "In the fast-paced manufacturing sector, real-time communication is key to operational efficiency and safety. Our solutions help manufacturers connect their workforce, automate processes, and gain visibility into their supply chain, from the factory floor to the final delivery.",
    features: [
      {
        title: "Production Line Alerts",
        description: "Instantly notify technicians of equipment malfunctions or production line stoppages with automated alerts, minimizing downtime and production delays."
      },
      {
        title: "Supply Chain and Logistics Coordination",
        description: "Coordinate with suppliers, distributors, and logistics partners in real-time to track shipments, manage inventory, and respond to supply chain disruptions."
      },
      {
        title: "Workforce Communication and Safety",
        description: "Connect your entire workforce, including non-desk employees, with secure group messaging, emergency alerts, and safety protocol updates."
      },
      {
        title: "Quality Control and Reporting",
        description: "Enable workers to report quality issues and incidents instantly from the factory floor using SMS or an IVR system, improving product quality and reducing waste."
      },
      {
        title: "Inventory and Stock Alerts",
        description: "Automate low-inventory alerts to your procurement team and suppliers, ensuring you never run out of critical raw materials."
      },
      {
        title: "Customer and Order Updates",
        description: "Keep customers informed with automated order confirmations, shipping notifications, and delivery updates, enhancing customer satisfaction."
      }
    ],
    benefits: [
      "Increased Operational Efficiency and Productivity",
      "Reduced Downtime and Production Delays",
      "Improved Supply Chain Visibility and Resilience",
      "Enhanced Workforce Safety and Communication",
      "Better Quality Control and Reduced Waste",
      "Higher Customer Satisfaction and Loyalty"
    ],
    useCases: {
        title: "Real-World Scenarios",
        subtitle: "Discover how our communication solutions are driving efficiency and productivity in the manufacturing sector.",
        cases: [
          {
            title: "Instant Equipment Failure Alerts",
            description: "A car manufacturing plant uses our automated alert system to notify maintenance crews of equipment failures on the assembly line, reducing downtime by 30%."
          },
          {
            title: "Real-Time Supply Chain Coordination",
            description: "A food and beverage company coordinates with its suppliers and distributors via a centralized messaging platform, ensuring on-time delivery of raw materials and finished goods."
          },
          {
            title: "Safety Drills and Emergency Notifications",
            description: "A chemical manufacturing facility uses our mass notification system to conduct regular safety drills and issue emergency alerts to all employees, improving workplace safety."
          }
        ]
      }
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 text-center bg-secondary">
        <div className="container mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {manufacturing.hero.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            {manufacturing.hero.subtitle}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            {manufacturing.overview}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturing.features.map((feature, i) => (
              <Card key={i} className="shadow-lg h-full text-left">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {manufacturing.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center">
                <Check className="h-6 w-6 text-primary mr-2" />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-foreground">{manufacturing.useCases.title}</h2>
                <p className="text-lg max-w-3xl mx-auto text-muted-foreground">{manufacturing.useCases.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {manufacturing.useCases.cases.map((useCase, i) => (
                    <Card key={i} className="shadow-lg h-full text-left">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">{useCase.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{useCase.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingPage;
