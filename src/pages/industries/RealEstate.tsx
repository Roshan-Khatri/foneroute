
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const RealEstatePage = () => {
  const realEstate = {
    hero: {
      title: "Connecting Properties with People, Faster",
      subtitle: "From lead generation to closing deals, our communication solutions help real estate professionals stay connected with clients and streamline their workflow."
    },
    overview: "In the competitive real estate market, timely and effective communication is the cornerstone of success. Our platform empowers agents, brokers, and property managers to automate communication, nurture leads, and provide exceptional client service, all while saving time and closing deals faster.",
    features: [
      {
        title: "Automated Lead Nurturing",
        description: "Capture and nurture leads from various sources with automated SMS and email campaigns, ensuring no opportunity is missed."
      },
      {
        title: "Appointment and Viewing Reminders",
        description: "Reduce no-shows and keep your schedule on track with automated reminders for property viewings, open houses, and client meetings."
      },
      {
        title: "Property Listing Notifications",
        description: "Instantly notify potential buyers and renters about new properties that match their criteria, keeping them engaged and interested."
      },
      {
        title: "Virtual Tour Invitations",
        description: "Promote virtual tours and online open houses by sending mass invitations via SMS and email, reaching a wider audience."
      },
      {
        title: "Maintenance and Rent Reminders",
        description: "For property managers, automate rent reminders and maintenance notifications to tenants, improving cash flow and property upkeep."
      },
      {
        title: "Closing and Escrow Updates",
        description: "Keep all parties informed with automated updates throughout the closing process, ensuring a smooth and transparent transaction."
      }
    ],
    benefits: [
      "Faster Lead Response and Conversion Rates",
      "Improved Client Communication and Satisfaction",
      "Streamlined Appointment and Viewing Schedules",
      "Increased Efficiency in Property Management",
      "Wider Reach for Property Listings",
      "More Transparent and Smoother Transactions"
    ],
    useCases: {
        title: "Real-World Scenarios",
        subtitle: "See how our communication solutions are helping real estate professionals close more deals.",
        cases: [
          {
            title: "Automated Lead Follow-Up",
            description: "A real estate agency uses our system to automatically send a welcome text and email to new leads from their website, resulting in a 25% increase in lead engagement."
          },
          {
            title: "Open House Reminders",
            description: "A broker sends automated SMS reminders to all registered attendees a day before an open house, leading to a 40% higher attendance rate."
          },
          {
            title: "Rent Collection for Property Managers",
            description: "A property management company uses automated SMS reminders to tenants, reducing late rent payments by 60%."
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
            {realEstate.hero.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            {realEstate.hero.subtitle}
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
            {realEstate.overview}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realEstate.features.map((feature, i) => (
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
            {realEstate.benefits.map((benefit, i) => (
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
                <h2 className="text-3xl font-bold mb-4 text-foreground">{realEstate.useCases.title}</h2>
                <p className="text-lg max-w-3xl mx-auto text-muted-foreground">{realEstate.useCases.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {realEstate.useCases.cases.map((useCase, i) => (
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

export default RealEstatePage;
