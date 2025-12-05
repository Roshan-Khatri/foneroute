
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone } from "lucide-react";

const faqs = [
  {
    question: "What is FoneRoute?",
    answer: "FoneRoute is a leading provider of cloud-based communication solutions, including contact centers, auto dialers, and unified communications platforms."
  },
  {
    question: "How can I get started?",
    answer: "You can get started by signing up for a free trial on our website or by contacting our sales team for a personalized demo."
  },
  {
    question: "What are your support hours?",
    answer: "Our support team is available 24/7 to assist you with any issues or questions you may have. You can reach us by phone, email, or live chat."
  },
    {
    question: "Do you offer international numbers?",
    answer: "Yes, FoneRoute provides international numbers in over 100 countries, allowing you to establish a local presence anywhere in the world."
  },
];


const Support = () => {
  return (
    <div>
      <PageHeader
        title="Support Center"
        subtitle="We're here to help. Find answers to common questions or get in touch with our support team."
        breadcrumb="Home / Support"
      />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Support</h2>
            <p className="text-muted-foreground mb-8">
              Can't find the answer you're looking for? Our team is ready to assist you.
            </p>
            <div className="space-y-6">
              <Card className="card-hover-animation">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Phone className="h-8 w-8 text-primary" />
                  <CardTitle>By Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Our phone lines are open 24/7.</p>
                  <p className="text-lg font-semibold">+1 (800) 555-0199</p>
                </CardContent>
              </Card>
              <Card className="card-hover-animation">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Mail className="h-8 w-8 text-primary" />
                  <CardTitle>By Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">We'll get back to you within one business day.</p>
                  <p className="text-lg font-semibold">support@foneroute.com</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
