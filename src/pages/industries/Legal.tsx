
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const LegalPage = () => {
  const legal = {
    hero: {
      title: "Secure and Confidential Communication for the Legal Sector",
      subtitle: "Ensure client confidentiality and streamline case management with our secure, compliant, and reliable communication solutions for law firms."
    },
    overview: "In the legal profession, confidentiality and timely communication are not just best practices—they are ethical obligations. Our solutions are designed to help law firms and legal professionals communicate securely with clients, manage case updates efficiently, and maintain the highest standards of privacy and compliance.",
    features: [
      {
        title: "Secure Client Communication",
        description: "Protect sensitive client information with end-to-end encrypted messaging, ensuring all communications are private and confidential."
      },
      {
        title: "Case Updates and Reminders",
        description: "Automate case updates, court date reminders, and document submission deadlines to keep clients informed and engaged throughout the legal process."
      },
      {
        title: "Appointment and Consultation Scheduling",
        description: "Simplify the scheduling of client appointments, consultations, and meetings with our automated booking and reminder system."
      },
      {
        title: "Secure Document Exchange",
        description: "Securely share and receive legal documents, contracts, and evidence with clients through our encrypted file transfer service."
      },
      {
        title: "Voice and Video Conferencing",
        description: "Conduct confidential client meetings and remote depositions with our secure and reliable voice and video conferencing solutions."
      },
      {
        title: "Compliance and Archiving",
        description: "Ensure all communications are archived and compliant with legal and ethical regulations, providing a complete audit trail for every case."
      }
    ],
    benefits: [
      "Enhanced Client Confidentiality and Trust",
      "Improved Case Management and Efficiency",
      "Reduced Administrative Overhead",
      "Streamlined Client Communication",
      "Assured Compliance and Data Security",
      "Increased Client Satisfaction and Referrals"
    ],
    useCases: {
        title: "Real-World Scenarios",
        subtitle: "See how our communication solutions are helping law firms improve client service and case management.",
        cases: [
          {
            title: "Confidential Client Updates",
            description: "A criminal defense attorney uses our encrypted messaging platform to securely send case updates and share evidence with a client, maintaining attorney-client privilege."
          },
          {
            title: "Automated Court Date Reminders",
            description: "A personal injury law firm reduces missed court dates by sending automated SMS and email reminders to clients with all the necessary details."
          },
          {
            title: "Secure Document Signing",
            description: "An estate planning lawyer uses our secure document exchange to send and receive signed legal documents from clients, speeding up the estate planning process."
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
            {legal.hero.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            {legal.hero.subtitle}
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
            {legal.overview}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legal.features.map((feature, i) => (
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
            {legal.benefits.map((benefit, i) => (
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
                <h2 className="text-3xl font-bold mb-4 text-foreground">{legal.useCases.title}</h2>
                <p className="text-lg max-w-3xl mx-auto text-muted-foreground">{legal.useCases.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {legal.useCases.cases.map((useCase, i) => (
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

export default LegalPage;
