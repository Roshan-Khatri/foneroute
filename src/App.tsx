
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/Home';
import About from '@/pages/About';
import SolutionsPage from '@/pages/Solutions';
import IndustryPage from '@/pages/solutions/IndustryPage';
import Contact from '@/pages/Contact';
import Support from '@/pages/Support';
import Blog from '@/pages/Blog';
import AutoDialerPage from '@/pages/solutions/contact-center/auto-dialer';
import InboundPage from '@/pages/solutions/contact-center/inbound';
import OutboundPage from '@/pages/solutions/contact-center/outbound';
import PowerDialerPage from '@/pages/solutions/contact-center/power-dialer';
import PredictiveDialerPage from '@/pages/solutions/contact-center/predictive-dialer';
import ProgressiveDialerPage from '@/pages/solutions/contact-center/progressive-dialer';
import ContactCenterPage from '@/pages/solutions/contact-center/index';
import LocalPage from '@/pages/solutions/international-numbers/local';
import LocalNumbersPage from '@/pages/solutions/international-numbers/local-numbers';
import TollFreePage from '@/pages/solutions/international-numbers/toll-free';
import UnifiedCommunicationsPage from '@/pages/solutions/unified-communications';
import CloudPBXPage from '@/pages/solutions/cloud-pbx';
import ClickToCallPage from '@/pages/solutions/click-to-call';
import SmsMmsApiPage from '@/pages/solutions/sms-mms-api';
import NumberMaskingPage from '@/pages/solutions/number-masking';
import WhatsappBusinessSolutionPage from '@/pages/solutions/whatsapp-business-solution';
import CallingFeaturesPage from '@/pages/features/CallingFeatures';
import CallForwardingPage from '@/pages/features/CallForwarding';
import CallManagementPage from '@/pages/features/CallManagement';
import CallReportingPage from '@/pages/features/call-reporting';
import CallTrackingPage from '@/pages/features/CallTracking';
import TargetManagementPage from '@/pages/features/TargetManagement';
import CallCappingPage from '@/pages/features/CallCapping';
import InternationalNumbers from '@/pages/features/InternationalNumbers';
import CaseStudies from '@/pages/CaseStudies';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/contact-center" element={<ContactCenterPage />} />
            <Route path="/solutions/contact-center/auto-dialer" element={<AutoDialerPage />} />
            <Route path="/solutions/contact-center/inbound" element={<InboundPage />} />
            <Route path="/solutions/contact-center/outbound" element={<OutboundPage />} />
            <Route path="/solutions/contact-center/power-dialer" element={<PowerDialerPage />} />
            <Route path="/solutions/contact-center/predictive-dialer" element={<PredictiveDialerPage />} />
            <Route path="/solutions/contact-center/progressive-dialer" element={<ProgressiveDialerPage />} />
            <Route path="/solutions/international-numbers/local" element={<LocalPage />} />
            <Route path="/solutions/international-numbers/local-numbers" element={<LocalNumbersPage />} />
            <Route path="/solutions/international-numbers/toll-free" element={<TollFreePage />} />
            <Route path="/solutions/unified-communications" element={<UnifiedCommunicationsPage />} />
            <Route path="/solutions/cloud-pbx" element={<CloudPBXPage />} />
            <Route path="/solutions/click-to-call" element={<ClickToCallPage />} />
            <Route path="/solutions/sms-mms-api" element={<SmsMmsApiPage />} />
            <Route path="/solutions/number-masking" element={<NumberMaskingPage />} />
            <Route path="/solutions/whatsapp-business-solution" element={<WhatsappBusinessSolutionPage />} />
            <Route path="/features/calling-features" element={<CallingFeaturesPage />} />
            <Route path="/features/call-forwarding" element={<CallForwardingPage />} />
            <Route path="/features/call-management" element={<CallManagementPage />} />
            <Route path="/features/call-reporting" element={<CallReportingPage />} />
            <Route path="/features/call-tracking" element={<CallTrackingPage />} />
            <Route path="/features/target-management" element={<TargetManagementPage />} />
            <Route path="/features/call-capping" element={<CallCappingPage />} />
            <Route path="/features/international-numbers" element={<InternationalNumbers />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/solutions/:slug" element={<IndustryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
