import PageHeader from '@/components/layout/PageHeader';
import AnimatedSection from '@/components/layout/AnimatedSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, User, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const faqs = [
  {
    question: 'How do I get started with your platform?',
    answer: 'Getting started is easy! Simply sign up for a free trial to explore our features. Our intuitive onboarding process will guide you through the initial setup, and our support team is available to help if you have any questions.'
  },
  {
    question: 'What should I do if I encounter a technical issue?',
    answer: 'Our support team is available 24/7 to assist you. You can reach us through email, phone, or live chat for immediate help. We also have an extensive knowledge base with helpful articles and tutorials to guide you.'
  },
  {
    question: 'Can I customize my subscription plan to fit my needs?',
    answer: 'Yes, we offer flexible plans that can be tailored to your specific requirements. Contact our sales team to discuss custom pricing and feature options that align with your business goals.'
  },
  {
    question: 'What is your policy on refunds and cancellations?',
    answer: 'We offer a 30-day money-back guarantee. If you are not satisfied with our service for any reason, you can request a full refund within the first 30 days of your subscription. You can cancel your subscription at any time from your account settings.'
  }
];

const troubleshootingIssues = [
  {
    question: "I can't log in to my account.",
    answer: "If you're having trouble logging in, please try resetting your password. If that doesn't work, contact our support team for assistance."
  },
  {
    question: "The application is running slow.",
    answer: "A slow application can be caused by several factors. Try clearing your browser cache and cookies. If the issue persists, check your internet connection or contact support to check for any ongoing service disruptions."
  },
  {
    question: "I'm experiencing a bug.",
    answer: "We're sorry to hear that. Please report the bug to our support team with as much detail as possible, including screenshots or screen recordings. This will help us resolve the issue quickly."
  }
];

const accountBillingIssues = [
    {
        question: "How do I upgrade my plan?",
        answer: "You can upgrade your plan at any time from your account settings. Go to the 'Billing' section and choose the plan that best fits your needs."
    },
    {
        question: "Can I get an invoice for my payment?",
        answer: "Yes, you can download all your invoices from the 'Billing' section in your account settings."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, as well as PayPal."
    }
];

const Support = () => {
  return (
    <div>
      <PageHeader
        title="Support Center"
        subtitle="Your success is our priority. Get help and support from our expert team."
        breadcrumb="Home / Support"
      />
      <AnimatedSection id="contact-support" animation="fade-in-up" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Contact Our Support Team</h2>
            <p className="text-muted-foreground text-lg">
              Our dedicated support team is here to help you with any questions or issues you may have. We offer multiple ways to get in touch with us, ensuring you receive timely and effective assistance.
            </p>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Getting Started Section */}
      <AnimatedSection id="getting-started" animation="fade-in-up" delay="0.2s" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              New to our platform? Here are some resources to help you get started on the right foot.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg border bg-background card-lift-shine">
              <BookOpen className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Read the Docs</h3>
              <p className="text-muted-foreground mb-4">Our comprehensive documentation is the best place to start.</p>
              <Button asChild variant="outline">
                <Link to="#">Documentation <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="p-6 rounded-lg border bg-background card-lift-shine">
              <User className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Set up your profile</h3>
              <p className="text-muted-foreground mb-4">Personalize your account and set your preferences.</p>
              <Button asChild variant="outline">
                <Link to="#">Go to Your Profile <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="p-6 rounded-lg border bg-background card-lift-shine">
              <CreditCard className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Billing Information</h3>
              <p className="text-muted-foreground mb-4">Manage your subscription and payment methods.</p>
              <Button asChild variant="outline">
                <Link to="#">Manage Billing <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Troubleshooting Section */}
      <AnimatedSection id="troubleshooting" animation="fade-in-up" delay="0.4s" className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Troubleshooting</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Having an issue? Check out our troubleshooting guides for quick solutions to common problems.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {troubleshootingIssues.map((issue, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{issue.question}</AccordionTrigger>
                  <AccordionContent>{issue.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </AnimatedSection>

      {/* Account & Billing Section */}
      <AnimatedSection id="account-billing" animation="fade-in-up" delay="0.6s" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Account & Billing</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Questions about your account or subscription? Find your answers here.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {accountBillingIssues.map((issue, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{issue.question}</AccordionTrigger>
                  <AccordionContent>{issue.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </AnimatedSection>

      {/* Submit a Support Ticket Section */}
      <AnimatedSection id="submit-ticket" animation="fade-in-up" delay="0.8s" className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Submit a Support Ticket</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name" className="mb-2 block">Name</Label>
                  <Input id="name" type="text" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2 block">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="mb-6">
                <Label htmlFor="subject" className="mb-2 block">Subject</Label>
                <Input id="subject" type="text" placeholder="How can we help?" />
              </div>
              <div className="mb-6">
                <Label htmlFor="message" className="mb-2 block">Message</Label>
                <Textarea id="message" placeholder="Describe your issue in detail..." rows={6} />
              </div>
              <div className="text-center">
                <Button type="submit" size="lg">
                  Submit Ticket <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="faq" animation="fade-in-up" delay="1s" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about our services and getting started.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection id="contact-channels" animation="fade-in-up" delay="1.2s" className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border bg-background card-lift-shine">
              <h3 className="text-2xl font-bold mb-4">Email Support</h3>
              <p className="text-muted-foreground mb-4">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <a href="mailto:support@example.com" className="text-primary font-medium">
                support@example.com
              </a>
            </div>
            <div className="p-8 rounded-lg border bg-background card-lift-shine">
              <h3 className="text-2xl font-bold mb-4">Phone Support</h3>
              <p className="text-muted-foreground mb-4">
                Speak directly with a support agent for immediate assistance.
              </p>
              <a href="tel:+1234567890" className="text-primary font-medium">
                +1 (234) 567-890
              </a>
            </div>
            <div className="p-8 rounded-lg border bg-background card-lift-shine">
              <h3 className="text-2xl font-bold mb-4">Knowledge Base</h3>
              <p className="text-muted-foreground mb-4">
                Browse our extensive knowledge base for self-help articles and guides.
              </p>
              <Button asChild>
                <Link to="/contact">Visit Knowledge Base <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Support;
