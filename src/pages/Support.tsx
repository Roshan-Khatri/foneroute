import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, Phone, Ticket } from 'lucide-react';

const SupportPage = () => {
  const faqs = [
    {
      question: "How do I set up my voicemail?",
      answer: "To set up your voicemail, dial *99 from your FoneRoute device. You will be prompted to record a new greeting and set a PIN for security. Follow the audio instructions to complete the setup."
    },
    {
      question: "What are your international calling rates?",
      answer: "International calling rates vary depending on the destination. You can find a full list of our competitive rates on our 'International Numbers' page or by contacting our support team."
    },
    {
      question: "How can I track my usage?",
      answer: "You can monitor your call history, data usage, and billing information in real-time through your personal FoneRoute dashboard. Log in to your account on our website to access it."
    },
    {
        question: "My phone isn't working, what should I do?",
        answer: "If you're experiencing service issues, first try restarting your device. If the problem persists, check our network status page for any known outages. For further assistance, please contact our technical support team."
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Page Header */}
      <section className="bg-primary/5 text-center pt-20 sm:pt-28 pb-10 sm:pb-14">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FoneRoute Support Center</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help. Find answers to your questions and ways to get in touch with us.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="pt-10 sm:pt-12 pb-20 sm:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-max mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Send us an email and we'll get back to you shortly.</p>
                <Button variant="outline" asChild>
                  <a href="mailto:support@foneroute.com">Email Us</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-max mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Talk to one of our friendly agents. Available 24/7.</p>
                <Button variant="outline" asChild>
                  <a href="tel:+1-800-555-0123">+1 (800) 555-0123</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-max mb-4">
                  <Ticket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Submit a Ticket</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Open a support ticket for detailed technical issues.</p>
                <Button variant="outline" asChild>
                  <a href="/contact">Create Ticket</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
