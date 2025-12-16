import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const CallReportingPage = () => {
  return (
    <div>
      <PageHeader
        title="Comprehensive Call Reporting"
        subtitle="Gain deep insights into your call performance, agent productivity, and customer experience with our advanced reporting and analytics tools."
        breadcrumb="Home / Features / Call Reporting"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Real-time Dashboards</h2>
              <p className="text-muted-foreground leading-relaxed">
                Monitor your call center activity as it happens. Our live dashboards provide an at-a-glance view of key metrics such as call volume, queue status, agent availability, and service levels. Instantly identify emerging trends and address issues proactively to maintain optimal performance.
              </p>
            </div>
            <div>
                <Card>
                    <CardContent className="p-8">
                        <img src="/images/stock/reporting-dashboard.png" alt="Real-time reporting dashboard" className="rounded-lg shadow-lg" />
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <Card>
                    <CardContent className="p-8">
                        <img src="/images/stock/historical-reports.png" alt="Historical reports and analytics" className="rounded-lg shadow-lg" />
                    </CardContent>
                </Card>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Historical Reporting & Analytics</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dive deep into your call data with our comprehensive historical reporting tools. Analyze call trends over time, measure agent performance against KPIs, and understand customer behavior. Use these insights to make informed decisions about staffing, training, and operational improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Dialer & Campaign Analytics</h2>
            <p className="text-muted-foreground mt-2">Measure and optimize the performance of your outbound calling campaigns.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Maximize Outbound ROI</h3>
              <p className="text-muted-foreground mb-4">
                Reporting isn't just for inbound calls. FoneRoute provides powerful analytics for your outbound efforts, including our advanced Power Dialer and Predictive Dialer. Track key metrics to ensure your agents are connecting with as many live prospects as possible.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><CheckCircle className="text-green-500 w-5 h-5 mr-2 mt-1 flex-shrink-0" /><span>Monitor campaign list penetration and lead conversion rates.</span></li>
                <li className="flex items-start"><CheckCircle className="text-green-500 w-5 h-5 mr-2 mt-1 flex-shrink-0" /><span>Analyze agent talk time, wait time, and calls per hour.</span></li>
                <li className="flex items-start"><CheckCircle className="text-green-500 w-5 h-5 mr-2 mt-1 flex-shrink-0" /><span>Track call outcomes and dispositions to refine your sales strategy.</span></li>
                <li className="flex items-start"><CheckCircle className="text-green-500 w-5 h-5 mr-2 mt-1 flex-shrink-0" /><span>Ensure TCPA compliance with detailed drop rate and call attempt reports.</span></li>
              </ul>
            </div>
            <div>
              <Card>
                  <CardHeader><CardTitle>Dialer Performance Metrics</CardTitle></CardHeader>
                  <CardContent>
                      <img src="/images/stock/dialer-analytics.png" alt="Dialer analytics dashboard" className="rounded-lg" />
                  </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">CRM & Business Tool Integration</h2>
            <p className="text-muted-foreground mt-2">Connect call data with your most important business systems for a unified view of the customer.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Card>
                  <CardHeader><CardTitle>Unified Customer View</CardTitle></CardHeader>
                  <CardContent>
                      <img src="/images/stock/crm-integration.png" alt="CRM Integration illustration" className="rounded-lg" />
                  </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Enrich Your Reports with Business Context</h3>
              <p className="text-muted-foreground mb-4">
                Seamlessly integrate FoneRoute with your CRM (like Salesforce, HubSpot, or Zendesk) to add powerful context to your call reports. Associate calls with customer records, support tickets, and sales opportunities to measure the true impact of your voice communications.
              </p>
              <ul className="space-y-2">
                  <li className="flex items-start"><CheckCircle className="text-green-500 w-5 h-5 mr-2 mt-1 flex-shrink-0" /><span>Automatically log call activities and recordings to CRM contacts.</span></li>
                  <li className="flex items-start"><CheckCircle className="text-green-500 w-5 h-5 mr-2 mt-1 flex-shrink-0" /><span>Trigger workflows and automations in your business tools based on call outcomes.</span></li>
                  <li className="flex items-start"><CheckCircle className="text-green-500 w-5 h-5 mr-2 mt-1 flex-shrink-0" /><span>Include sales revenue and support case status in your FoneRoute reports.</span></li>
                  <li className="flex items-start"><CheckCircle className="text-green-500 w-5 h-5 mr-2 mt-1 flex-shrink-0" /><span>Empower agents with screen-pops that display CRM data on incoming calls.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CallReportingPage;
