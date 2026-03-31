
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const RetailPage = () => {
  const retail = {
    hero: {
      title: "Drive Sales and Customer Loyalty in Retail",
      subtitle: "From personalized marketing to seamless customer service, our communication solutions help retailers create exceptional shopping experiences that boost sales and build lasting loyalty."
    },
    overview: "In the fast-paced retail landscape, effective customer communication is essential for success. Our platform provides retailers with the tools to engage customers at every step of their journey, from personalized promotions to post-purchase support, driving both sales and satisfaction.",
    features: [
      {
        title: "SMS and Email Marketing Campaigns",
        description: "Promote sales, new arrivals, and special offers with targeted SMS and email campaigns that drive traffic to your online and physical stores."
      },
      {
        title: "Order and Shipping Notifications",
        description: "Keep customers informed with real-time order confirmations, shipping updates, and delivery notifications, reducing customer service inquiries."
      },
      {
        title: "Personalized Product Recommendations",
        description: "Increase sales and customer engagement by sending personalized product recommendations based on past purchase history and browsing behavior."
      },
      {
        title: "Customer Feedback and Surveys",
        description: "Gather valuable feedback on products and shopping experiences through automated post-purchase surveys, helping you improve your offerings."
      },
      {
        title: "In-Store Wi-Fi and Proximity Marketing",
        description: "Engage with customers in-store by offering free Wi-Fi and sending targeted promotions and offers based on their location within the store."
      },
      {
        title: "Customer Support and Service",
        description: "Provide instant customer support through two-way messaging, allowing customers to ask questions, resolve issues, and get help when they need it."
      }
    ],
    benefits: [
      "Increased Sales and Revenue",
      "Enhanced Customer Loyalty and Retention",
      "Improved Customer Shopping Experience",
      "Higher ROI on Marketing Campaigns",
      "Reduced Customer Service Costs",
      "Valuable Insights into Customer Behavior"
    ],
    useCases: {
        title: "Real-World Scenarios",
        subtitle: "See how our communication solutions are helping retailers thrive in a competitive market.",
        cases: [
          {
            title: "Flash Sale Promotion",
            description: "A fashion retailer sends out an SMS blast announcing a 24-hour flash sale, resulting in a 300% increase in online sales for the day."
          },
          {
            title: "Abandoned Cart Reminders",
            description: "An e-commerce store sends automated email reminders to customers who have abandoned their shopping carts, recovering 15% of lost sales."
          },
          {
            title: "Post-Purchase Feedback",
            description: "A home goods retailer sends a post-purchase SMS survey to customers, gathering valuable feedback that leads to a new and improved product line."
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
            {retail.hero.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            {retail.hero.subtitle}
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
            {retail.overview}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retail.features.map((feature, i) => (
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
            {retail.benefits.map((benefit, i) => (
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
                <h2 className="text-3xl font-bold mb-4 text-foreground">{retail.useCases.title}</h2>
                <p className="text-lg max-w-3xl mx-auto text-muted-foreground">{retail.useCases.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {retail.useCases.cases.map((useCase, i) => (
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

export default RetailPage;
