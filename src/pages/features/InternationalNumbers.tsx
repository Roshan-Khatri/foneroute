
import { motion } from "framer-motion";

const InternationalNumbers = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          className="text-center py-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">International Numbers</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expand your global reach with international phone numbers from FoneRoute.
          </p>
        </motion.section>

        <motion.section
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Connect with Customers Worldwide</h2>
            <p className="text-muted-foreground">
              FoneRoute offers a wide range of international phone numbers, including local, national, and toll-free numbers in over 100 countries. Establish a local presence in new markets and make it easy for customers to reach you, no matter where they are.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="py-12 bg-muted dark:bg-[#191919] rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose FoneRoute for International Numbers?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg shadow-lg bg-card">
                <h3 className="text-xl font-bold mb-4">Global Reach</h3>
                <p className="text-muted-foreground">Get access to phone numbers in over 100 countries and establish a local presence anywhere in the world.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card">
                <h3 className="text-xl font-bold mb-4">Cost-Effective</h3>
                <p className="text-muted-foreground">Save on international calling charges and provide your customers with a low-cost way to reach you.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card">
                <h3 className="text-xl font-bold mb-4">Easy Setup</h3>
                <p className="text-muted-foreground">Get your international numbers up and running in minutes with our simple and intuitive setup process.</p>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Local, national, and toll-free numbers</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Call forwarding to any device</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Voicemail and call recording</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Advanced call routing and IVR</span>
              </li>
            </ul>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default InternationalNumbers;
