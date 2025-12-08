
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/layout/PageHeader";

const caseStudies = [
  {
    title: "Global Tech Inc. Increases Sales by 300%",
    challenge: "Global Tech Inc. was facing a decline in their outbound sales effectiveness. Their agents were spending too much time on manual dialing and were not reaching enough qualified leads.",
    solution: "We implemented our AI-powered Predictive Dialer, which automated the dialing process and used a smart algorithm to connect agents only to live prospects. This, combined with our CRM integration, provided agents with instant access to customer data.",
    results: "Within three months, Global Tech Inc. saw a 300% increase in agent talk time, a 50% increase in lead conversion rates, and a significant boost in overall sales revenue. Agent morale also improved due to the reduction in tedious manual tasks.",
    image: "/public/placeholder.svg",
  },
  {
    title: "SupportPro Services Enhances Customer Satisfaction",
    challenge: "SupportPro Services was struggling with long wait times and a fragmented customer support experience. They needed a unified platform to manage interactions across multiple channels.",
    solution: "Our Contact Center Solution provided a unified agent desktop, bringing together voice, email, chat, and social media interactions. Intelligent call routing ensured customers were connected to the right agent every time.",
    results: "SupportPro Services reduced their average customer wait time by 40% and improved their First Call Resolution (FCR) rate by 25%. Their Customer Satisfaction (CSAT) scores increased by 15 points.",
    image: "/public/placeholder.svg",
  },
  {
    title: "FinanceFast Corp. Achieves 99.9% Uptime and Compliance",
    challenge: "As a financial institution, FinanceFast Corp. required a highly reliable and secure communication system that met strict regulatory compliance standards.",
    solution: "We deployed our Cloud PBX System, which offers 99.9% uptime and includes advanced security features like end-to-end encryption and secure call recording. The system is fully compliant with financial industry regulations.",
    results: "FinanceFast Corp. achieved and maintained 99.9% uptime, ensuring their critical communications were never interrupted. They also passed all their security audits with flying colors, giving them peace of mind and building trust with their clients.",
    image: "/public/placeholder.svg",
  },
];

const CaseStudies = () => {
  return (
    <>
      <PageHeader 
        title="Customer Success Stories" 
        subtitle="See how our solutions have helped businesses like yours achieve their goals." 
      />
      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <img src={study.image} alt={study.title} className="mb-4 rounded-md" />
                <CardTitle>{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Challenge</h3>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Solution</h3>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Results</h3>
                  <p className="text-muted-foreground">{study.results}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Read Full Study</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
