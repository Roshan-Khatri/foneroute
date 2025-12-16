
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Support = () => {
  const faqs = [
    {
      question: "What is FoneRoute?",
      answer: "FoneRoute is a comprehensive communication platform that offers a suite of tools to enhance business communications, including a predictive dialer, contact center solutions, and a cloud PBX system.",
    },
    {
      question: "How can I get started?",
      answer: "You can get started by requesting a demo or contacting our sales team. We offer a variety of plans to fit your business needs.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 support through various channels, including phone, email, and live chat. Our dedicated support team is always ready to help you with any issues or questions.",
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          className="text-center py-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Support</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Welcome to our support page. How can we help you today?
          </p>
        </motion.section>

        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.section>

        <motion.section
          className="py-12 bg-muted dark:bg-[#191919] rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Support</h2>
            <p className="text-muted-foreground mb-8">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.section>

        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Knowledge Base</h3>
                <p className="text-muted-foreground">Explore our comprehensive knowledge base for detailed guides and tutorials.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Community Forums</h3>
                <p className="text-muted-foreground">Join our community forums to connect with other users and share your experiences.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Blog</h3>
                <p className="text-muted-foreground">Read our blog for the latest news, updates, and best practices.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Video Tutorials</h3>
                <p className="text-muted-foreground">Watch our video tutorials to learn how to use FoneRoute's features.</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-12 bg-muted dark:bg-[#191919] rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">System Status</h2>
            <p className="text-muted-foreground mb-4">
              All systems are currently operational.
            </p>
            <div className="flex justify-center items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span>All Systems Operational</span>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Submit a Ticket</h2>
            <p className="text-muted-foreground mb-8">
              If you need further assistance, you can submit a support ticket.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Submit a Ticket</Link>
            </Button>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Support;
