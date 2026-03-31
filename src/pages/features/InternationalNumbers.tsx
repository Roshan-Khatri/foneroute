
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
              <div className="p-6 rounded-lg shadow-lg bg-card transition-transform duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Global Reach</h3>
                <p className="text-muted-foreground">Get access to phone numbers in over 100 countries and establish a local presence anywhere in the world.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card transition-transform duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Cost-Effective</h3>
                <p className="text-muted-foreground">Save on international calling charges and provide your customers with a low-cost way to reach you.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card transition-transform duration-300 transform hover:scale-105">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg shadow-lg bg-card transition-transform duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Local, national, and toll-free numbers</h3>
                <p className="text-muted-foreground">Choose from a wide range of number types to suit your business needs.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card transition-transform duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Call forwarding to any device</h3>
                <p className="text-muted-foreground">Forward calls to your mobile, landline, or VoIP phone, so you never miss a call.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card transition-transform duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Voicemail and call recording</h3>
                <p className="text-muted-foreground">Capture important messages and record calls for quality and training purposes.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-card transition-transform duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Advanced call routing and IVR</h3>
                <p className="text-muted-foreground">Create custom call flows and interactive voice response menus to direct callers to the right department or agent.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default InternationalNumbers;
