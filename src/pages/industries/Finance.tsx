
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const FinancePage = () => {
  const finance = {
    hero: {
      title: "Secure and Compliant Communication for Financial Services",
      subtitle: "Build trust and enhance customer relationships with secure, reliable, and compliant communication solutions tailored for the finance industry."
    },
    overview: "In the highly regulated financial services industry, secure and transparent communication is paramount. Our solutions provide banks, credit unions, and other financial institutions with the tools to deliver exceptional customer service while maintaining the highest levels of security and compliance.",
    features: [
      {
        title: "Secure Two-Factor Authentication (2FA)",
        description: "Protect customer accounts and sensitive data with secure 2FA via SMS or voice, preventing unauthorized access and fraud."
      },
      {
        title: "Transactional Alerts and Notifications",
        description: "Instantly notify customers of account activity, such as large transactions, low balances, and payment reminders, to keep them informed and in control."
      },
      {
        title: "Appointment and Loan Processing Updates",
        description: "Automate appointment reminders for financial advisors and provide real-time updates on loan application statuses, improving customer experience."
      },
      {
        title: "IVR for Secure Payments and Account Inquiries",
        description: "Allow customers to securely make payments, check account balances, and perform other routine transactions over the phone with our PCI-compliant IVR system."
      },
      {
        title: "Marketing and Promotional Campaigns",
        description: "Promote new financial products, special offers, and educational content through targeted SMS and email campaigns to drive customer acquisition and retention."
      },
      {
        title: "Compliance and Data Security",
        description: "Ensure all communications are compliant with industry regulations, such as TCPA and GDPR, and protected with end-to-end encryption."
      }
    ],
    benefits: [
      "Enhanced Customer Trust and Security",
      "Improved Regulatory Compliance",
      "Increased Customer Engagement and Retention",
      "Reduced Operational Costs and Fraud",
      "Streamlined Loan and Account Processing",
      "Higher ROI on Marketing Campaigns"
    ],
    useCases: {
        title: "Real-World Scenarios",
        subtitle: "Discover how our communication solutions are helping financial institutions build stronger customer relationships.",
        cases: [
          {
            title: "Fraud Prevention with 2FA",
            description: "A retail bank reduces online banking fraud by implementing SMS-based two-factor authentication for all login attempts and high-risk transactions."
          },
          {
            title: "Automated Loan Status Updates",
            description: "A mortgage lender improves customer satisfaction by sending automated SMS and email updates to applicants at each stage of the loan approval process."
          },
          {
            title: "IVR for Secure Bill Payments",
            description: "A credit card company streamlines its collections process by allowing customers to make secure payments over the phone using an automated IVR system."
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
            {finance.hero.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            {finance.hero.subtitle}
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
            {finance.overview}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finance.features.map((feature, i) => (
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
            {finance.benefits.map((benefit, i) => (
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
                <h2 className="text-3xl font-bold mb-4 text-foreground">{finance.useCases.title}</h2>
                <p className="text-lg max-w-3xl mx-auto text-muted-foreground">{finance.useCases.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {finance.useCases.cases.map((useCase, i) => (
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

export default FinancePage;
