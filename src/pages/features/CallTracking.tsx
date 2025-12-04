import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={cardVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Real-Time Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitor your call data in real-time with our intuitive dashboard. Keep track of call volumes, peak times, and other key metrics to make immediate adjustments to your campaigns.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card>
              <CardHeader>
                <CardTitle>IVR & Call Routing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Set up interactive voice response (IVR) menus to direct callers to the right department or agent. Our flexible call routing ensures a seamless customer experience and improves efficiency.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default CallTracking;
