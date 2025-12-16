
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          className="text-center py-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            See how businesses like yours have succeeded with FoneRoute.
          </p>
        </motion.section>

        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg shadow-lg bg-card">
                <h3 className="text-xl font-bold mb-4">How FoneRoute Helped a Startup Scale</h3>
                <p className="text-muted-foreground">Read how a fast-growing startup leveraged FoneRoute's predictive dialer to triple their sales outreach and close more deals.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card">
                <h3 className="text-xl font-bold mb-4">Enhancing Customer Support with Cloud PBX</h3>
                <p className="text-muted-foreground">Learn how a mid-sized e-commerce company improved customer satisfaction by 40% after implementing FoneRoute's Cloud PBX system.</p>
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
            <h2 className="text-3xl font-bold mb-6">Customer Testimonials</h2>
            <div className="space-y-8">
              <blockquote className="p-6 border-l-4 border-primary bg-card">
                <p className="text-muted-foreground italic">"FoneRoute's predictive dialer has been a game-changer for our sales team. We've seen a 3x increase in our call volume and a significant boost in our sales numbers."</p>
                <cite className="mt-4 block font-bold not-italic">- John Doe, Head of Sales at Innovate Inc.</cite>
              </blockquote>
              <blockquote className="p-6 border-l-4 border-primary bg-card">
                <p className="text-muted-foreground italic">"The Cloud PBX system from FoneRoute has revolutionized our customer support. Our customer satisfaction scores have improved by 40% since we implemented it."</p>
                <cite className="mt-4 block font-bold not-italic">- Jane Smith, Customer Support Manager at Acme Corp.</cite>
              </blockquote>
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
            <h2 className="text-3xl font-bold mb-6">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg shadow-lg bg-card">
                <h3 className="text-4xl font-bold text-primary">3x</h3>
                <p className="text-muted-foreground mt-2">Increase in Sales Outreach</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card">
                <h3 className="text-4xl font-bold text-primary">40%</h3>
                <p className="text-muted-foreground mt-2">Improvement in Customer Satisfaction</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card">
                <h3 className="text-4xl font-bold text-primary">50%</h3>
                <p className="text-muted-foreground mt-2">Reduction in Operational Costs</p>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Challenges and Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg shadow-lg bg-card">
                <h3 className="text-xl font-bold mb-4">Challenge</h3>
                <p className="text-muted-foreground">A startup was struggling to scale its sales outreach and was facing high operational costs.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card">
                <h3 className="text-xl font-bold mb-4">Solution</h3>
                <p className="text-muted-foreground">FoneRoute's predictive dialer automated the dialing process, allowing the sales team to connect with more prospects and reduce idle time.</p>
              </div>
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
            <h2 className="text-3xl font-bold mb-6">How to Get Started</h2>
            <p className="text-muted-foreground mb-8">Ready to achieve similar results? Get in touch with our team to learn how FoneRoute can help your business.</p>
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default CaseStudies;
