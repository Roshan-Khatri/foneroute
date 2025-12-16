
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const FeaturePage = ({ feature }) => {
  const { title, subtitle, overview, capabilities, benefits, useCases } = feature;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          className="text-center pt-20 pb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">{subtitle}</p>
        </motion.section>

        <motion.div variants={stagger} initial="initial" animate="animate">
          {/* Overview Section */}
          <motion.section variants={fadeIn} className="py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
              <div className="p-8 rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <p className="text-muted-foreground">{overview}</p>
              </div>
            </div>
          </motion.section>

          {/* Key Capabilities Section */}
          <motion.section variants={fadeIn} className="py-12 bg-muted dark:bg-[#191919] rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Key Capabilities</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((capability, index) => (
                  <li key={index} className="p-6 rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <p className="font-semibold text-center">{capability}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Benefits Section */}
          <motion.section variants={fadeIn} className="py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start p-6 rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <svg className="w-6 h-6 text-primary mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <p className="font-semibold">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Use Cases Section */}
          <motion.section variants={fadeIn} className="py-12 bg-muted dark:bg-[#191919] rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="p-6 rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <p className="font-semibold text-center">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

        </motion.div>
      </main>
    </div>
  );
};

export default FeaturePage;
