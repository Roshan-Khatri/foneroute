
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          className="text-center py-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Welcome to our blog. Here you will find the latest news, updates, and best practices.
          </p>
        </motion.section>

        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Tech Spotlight</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4">The Rise of AI in Communication</h3>
                <p className="text-muted-foreground">Artificial intelligence is revolutionizing the way we communicate. From AI-powered chatbots to predictive analytics, AI is enabling businesses to provide more personalized and efficient customer experiences.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4">The Future of 5G</h3>
                <p className="text-muted-foreground">5G is the next generation of wireless technology, promising faster speeds, lower latency, and greater capacity. This will unlock new possibilities for businesses, from enhanced mobile broadband to mission-critical communications.</p>
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
            <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
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
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">From Our Customers</h2>
            <div className="space-y-8">
              <blockquote className="p-6 border-l-4 border-primary bg-card">
                <p className="text-muted-foreground italic">"FoneRoute's platform has been a game-changer for our sales team. The predictive dialer is incredibly efficient, and the call analytics have provided us with invaluable insights."</p>
                <cite className="mt-4 block font-bold not-italic">- John Doe, Head of Sales at Innovate Inc.</cite>
              </blockquote>
              <blockquote className="p-6 border-l-4 border-primary bg-card">
                <p className="text-muted-foreground italic">"The support team at FoneRoute is top-notch. They are always responsive and go above and beyond to help us with any issues we encounter."</p>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg shadow-lg bg-card">
                <h3 className="text-xl font-bold mb-4">5 Ways to Improve Your Customer Service with a Cloud PBX</h3>
                <p className="text-muted-foreground">Discover five practical ways a Cloud PBX system can help you enhance your customer service and build stronger customer relationships.</p>
                <a href="#" className="text-primary hover:underline mt-4 inline-block">Read More</a>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card">
                <h3 className="text-xl font-bold mb-4">The Benefits of a Predictive Dialer for Your Sales Team</h3>
                <p className="text-muted-foreground">Learn how a predictive dialer can boost your sales team's productivity, increase call connection rates, and drive revenue growth.</p>
                <a href="#" className="text-primary hover:underline mt-4 inline-block">Read More</a>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card">
                <h3 className="text-xl font-bold mb-4">Why Your Business Needs a Toll-Free Number</h3>
                <p className="text-muted-foreground">Find out how a toll-free number can enhance your brand image, improve customer accessibility, and increase sales inquiries.</p>
                <a href="#" className="text-primary hover:underline mt-4 inline-block">Read More</a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Blog;
