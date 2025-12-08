import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CallTracking: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Advanced Call Tracking"
        subtitle="Track calls to measure marketing ROI and optimize campaigns."
        breadcrumb="Home / Features / Call Tracking"
      />

      <motion.section
        className="section-padding bg-background"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={cardVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Source Attribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pinpoint exactly where your calls are coming from. With our dynamic number insertion, you can assign unique phone numbers to different marketing channels—both online and offline—to see which campaigns are driving the most calls.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Campaign Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Make data-driven decisions to optimize your marketing spend. By understanding which campaigns are performing best, you can reallocate your budget to the channels that deliver the highest return on investment.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="section-padding"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={cardVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Keyword-Level Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gain granular insights into your paid search campaigns. Track calls down to the keyword level to understand which terms are driving the most valuable conversations and optimize your bidding strategy accordingly.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Call Recording & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Record and analyze call conversations to uncover valuable customer insights. Use this data to improve sales scripts, identify training opportunities, and enhance the overall customer experience.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="section-padding bg-background"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Unlock Granular Insights with Call Tracking</h2>
            <p className="text-muted-foreground mt-2">
              Go beyond basic call counting and understand the entire customer journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={cardVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Dynamic Number Insertion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automatically display unique phone numbers to visitors from different traffic sources, such as Google Ads, Facebook, or organic search.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Campaign-Level Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Assign unique numbers to your marketing campaigns to measure their effectiveness and make data-driven decisions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Real-Time Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access real-time data on call volume, duration, and other key metrics to monitor your campaign performance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-padding"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Key Features of Our Call Tracking Solution</h2>
              <p className="text-muted-foreground mt-2">
                Everything you need to optimize your inbound calls.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface-hover">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">Comprehensive Analytics</h3>
                        <p className="text-muted-foreground">Get detailed insights into call performance and customer behavior.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface-hover">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">Seamless Integration</h3>
                        <p className="text-muted-foreground">Integrate with your existing CRM and marketing automation tools.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface-hover">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">Enhanced Customer Profiles</h3>
                        <p className="text-muted-foreground">Build rich customer profiles with call data and purchase history.</p>
                    </div>
                </div>
                 <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface-hover">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">IVR & Call Routing</h3>
                        <p className="text-muted-foreground">Set up interactive voice response (IVR) menus to direct callers to the right department or agent. Our flexible call routing ensures a seamless customer experience and improves efficiency.</p>
                    </div>
                </div>
                 <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface-hover">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">Call Recording</h3>
                        <p className="text-muted-foreground">Record and analyze call conversations to uncover valuable customer insights. Use this data to improve sales scripts, identify training opportunities, and enhance the overall customer experience.</p>
                    </div>
                </div>
                 <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface-hover">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">Spam Call Filtering</h3>
                        <p className="text-muted-foreground">Protect your business from unwanted spam calls with our advanced filtering system.</p>
                    </div>
                </div>
            </div>
        </div>
      </motion.section>

    </div>
  );
};

export default CallTracking;
