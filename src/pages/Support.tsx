import PageHeader from '@/components/layout/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase for a full refund. Please see our returns page for more details.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order has shipped, you will receive an email with a tracking number. You can use this number to track your order on the carrier's website.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.",
  },
];

const guides = [
  {
    title: "Account Setup",
    description: "Learn how to create and set up your account in a few easy steps.",
    link: "#",
  },
  {
    title: "Product Configuration",
    description: "Follow our guide to configure the product to meet your needs.",
    link: "#",
  },
  {
    title: "Troubleshooting Tips",
    description: "Find solutions to common issues and keep things running smoothly.",
    link: "#",
  },
];

const resources = [
  {
    title: "Documentation",
    description: "Browse our detailed documentation to find answers to your questions.",
    link: "#",
  },
  {
    title: "Community Forums",
    description: "Connect with other users and get help from the community.",
    link: "#",
  },
  {
    title: "Blog",
    description: "Read our latest articles and stay up-to-date with our products.",
    link: "#",
  },
];

const securityInfo = [
  {
    title: "Data Encryption",
    description: "All your communications—voice, video, and messages—are protected with end-to-end and in-transit encryption using industry-standard protocols.",
    link: "#",
  },
  {
    title: "Compliance Certifications",
    description: "We adhere to major global privacy and security standards, including GDPR, HIPAA, and SOC 2, to ensure your data is handled responsibly.",
    link: "#",
  },
  {
    title: "Secure Infrastructure",
    description: "Our platform is built on a resilient and secure infrastructure with regular security audits and threat monitoring to prevent unauthorized access.",
    link: "#",
  },
];

const Support = () => {
  return (
    <div>
      <PageHeader
        title="Support"
        subtitle="Get help with our products and services."
        breadcrumb="Home / Support"
      />

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Contact Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Can't find the answer you're looking for? Fill out the form below to get in touch with our support team.
            </p>
          </div>
          <form className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" />
              </div>
              <div className="text-center">
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Getting Started Guides
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our guides to get started with our products and services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div className="bg-surface rounded-lg shadow-lg p-6" key={index}>
                <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                <p className="text-muted-foreground mb-4">{guide.description}</p>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link to={guide.link}>Read More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of our most frequently asked questions.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Helpful Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Check out these resources for more information and support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div className="bg-surface rounded-lg shadow-lg p-6" key={index}>
                <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link to={resource.link}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about our commitment to protecting your data and privacy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityInfo.map((item, index) => (
              <div className="bg-surface rounded-lg shadow-lg p-6" key={index}>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link to={item.link}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              System Status
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Check the current status of our services.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
            <p className="text-lg">All systems operational</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Live Chat
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Need immediate assistance? Chat with a support agent now.
            </p>
          </div>
          <div className="text-center">
            <Button size="lg">Start Live Chat</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Submit a Feature Request
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a great idea for a new feature? Let us know!
            </p>
          </div>
          <form className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <Label htmlFor="feature-title">Feature Title</Label>
                <Input type="text" id="feature-title" placeholder="Enter a title for your feature request" />
              </div>
              <div>
                <Label htmlFor="feature-description">Description</Label>
                <Textarea id="feature-description" placeholder="Describe your feature request in detail" />
              </div>
              <div className="text-center">
                <Button type="submit">Submit Request</Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Support;
