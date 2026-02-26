
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GlobalCTA = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800/20 w-full py-20">
      <div className="container mx-auto text-center px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your Business Communications?
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get started with a free consultation and discover how our solutions can drive your business forward.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" variant="outline">
            <Link to="/solutions">Explore Solutions</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalCTA;
