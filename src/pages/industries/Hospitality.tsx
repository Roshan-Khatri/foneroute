
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const HospitalityPage = () => {
  const hospitality = {
    hero: {
      title: "Enhance Guest Experiences in Hospitality",
      subtitle: "From booking confirmations to post-stay feedback, our communication solutions help you create a seamless and personalized guest journey."
    },
    overview: "In the competitive hospitality industry, guest satisfaction is everything. Our solutions empower hotels, resorts, and restaurants to deliver exceptional guest experiences by automating communication, personalizing interactions, and gathering valuable feedback.",
    features: [
      {
        title: "Booking Confirmations and Reminders",
        description: "Automate booking confirmations, pre-arrival reminders, and check-in instructions via SMS and email to reduce no-shows and enhance guest convenience."
      },
      {
        title: "Two-Way Guest Communication",
        description: "Enable guests to communicate with staff for requests, questions, and feedback in real-time through a dedicated messaging channel."
      },
      {
        title: "Post-Stay Feedback and Reviews",
        description: "Automatically send post-stay surveys and review requests to gather valuable feedback, improve services, and boost your online reputation."
      },
      {
        title: "Promotional Offers and Upselling",
        description: "Increase revenue with targeted promotions, special offers, and upselling opportunities for services like spa treatments, dining reservations, and room upgrades."
      },
      {
        title: "Staff Communication and Coordination",
        description: "Improve operational efficiency by streamlining communication between front desk, housekeeping, and maintenance staff with instant group messaging and task alerts."
      },
      {
        title: "Emergency Alerts and Guest Safety",
        description: "Ensure guest safety with an emergency alert system that can instantly notify all guests and staff of critical situations or important announcements."
      }
    ],
    benefits: [
      "Improved Guest Satisfaction and Loyalty",
      "Increased Revenue and Upselling Opportunities",
      "Enhanced Operational Efficiency",
      "Better Online Reputation and Reviews",
      "Reduced No-Shows and Cancellations",
      "Improved Guest and Staff Safety"
    ],
    useCases: {
        title: "Real-World Scenarios",
        subtitle: "Learn how our communication solutions are transforming the guest experience in the hospitality industry.",
        cases: [
          {
            title: "Automated Check-in Process",
            description: "A boutique hotel uses SMS to send guests a pre-check-in link, allowing them to complete the process online and receive their room key digitally, reducing wait times at the front desk."
          },
          {
            title: "Personalized Dining Offers",
            description: "A resort sends targeted SMS messages to guests with personalized dining offers and event invitations based on their preferences and past activities, boosting restaurant revenue."
          },
          {
            title: "Post-Stay Feedback for Service Improvement",
            description: "A hotel chain automatically sends a post-stay survey to guests, and uses the feedback to identify areas for improvement, leading to higher guest satisfaction scores."
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
            {hospitality.hero.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            {hospitality.hero.subtitle}
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
            {hospitality.overview}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitality.features.map((feature, i) => (
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
            {hospitality.benefits.map((benefit, i) => (
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
                <h2 className="text-3xl font-bold mb-4 text-foreground">{hospitality.useCases.title}</h2>
                <p className="text-lg max-w-3xl mx-auto text-muted-foreground">{hospitality.useCases.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {hospitality.useCases.cases.map((useCase, i) => (
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

export default HospitalityPage;
