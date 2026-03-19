import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HomePage from '@/pages/Home';
import About from '@/pages/About';
import SolutionsPage from '@/pages/Solutions';
import Support from '@/pages/Support';
import Blog from '@/pages/Blog';

import ContactCenterPage from '@/pages/solutions/contact-center/index';
import AutoDialerPage from '@/pages/solutions/contact-center/auto-dialer';
import PowerDialerPage from '@/pages/solutions/contact-center/power-dialer';
import PredictiveDialerPage from '@/pages/solutions/contact-center/predictive-dialer';
import ProgressiveDialerPage from '@/pages/solutions/contact-center/progressive-dialer';
import InboundPage from '@/pages/solutions/contact-center/inbound';
import OutboundPage from '@/pages/solutions/contact-center/outbound';
import CallingFeaturesPage from '@/pages/features/CallingFeatures';
import CallForwardingPage from '@/pages/features/CallForwarding';
import CallManagementPage from '@/pages/features/CallManagement';
import CallReportingPage from '@/pages/features/call-reporting';
import CallTrackingPage from '@/pages/features/CallTracking';
import TargetManagementPage from '@/pages/features/TargetManagement';
import CallCappingPage from '@/pages/features/CallCapping';
import InternationalNumbers from '@/pages/features/InternationalNumbers';
import VoicemailToEmailPage from '@/pages/features/voicemail-to-email';
import AutoAttendantPage from '@/pages/features/auto-attendant';
import CaseStudies from '@/pages/CaseStudies';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Features from '@/pages/Features';
import Feature from '@/pages/features/Feature';
import AIAssistant from '@/components/ai-assistant/AI-Assistant';
import Pricing from '@/pages/Pricing';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import './light-mode.css';

const Contact = lazy(() => import('@/pages/Contact'));
const UnifiedCommunicationsPage = lazy(() => import('@/pages/solutions/unified-communications'));
const CloudPbxPage = lazy(() => import('@/pages/solutions/cloud-pbx'));
const ClickToCallPage = lazy(() => import('@/pages/solutions/click-to-call'));
const SmsMmsApiPage = lazy(() => import('@/pages/solutions/sms-mms-api'));
const NumberMaskingPage = lazy(() => import('@/pages/solutions/number-masking'));
const WhatsappBusinessSolutionPage = lazy(() => import('@/pages/solutions/whatsapp-business-solution'));
const LocalPage = lazy(() => import('@/pages/solutions/international-numbers/local'));
const LocalNumbersPage = lazy(() => import('@/pages/solutions/international-numbers/local-numbers'));
const TollFreePage = lazy(() => import('@/pages/solutions/international-numbers/toll-free'));

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <LayoutWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<SolutionsPage />} />

            {/* ✅ STATIC PAGES WORK */}
            <Route path="/solutions/contact-center" element={<ContactCenterPage />} />
            <Route path="/solutions/auto-dialer" element={<AutoDialerPage />} />
            <Route path="/solutions/power-dialer" element={<PowerDialerPage />} />
            <Route path="/solutions/predictive-dialer" element={<PredictiveDialerPage />} />
            <Route path="/solutions/progressive-dialer" element={<ProgressiveDialerPage />} />
            <Route path="/solutions/inbound-call-solutions" element={<InboundPage />} />
            <Route path="/solutions/outbound" element={<OutboundPage />} />
            <Route path="/solutions/unified-communications" element={<UnifiedCommunicationsPage />} />
            <Route path="/solutions/cloud-pbx" element={<CloudPbxPage />} />
            <Route path="/solutions/click-to-call" element={<ClickToCallPage />} />
            <Route path="/solutions/sms-mms-api" element={<SmsMmsApiPage />} />
            <Route path="/solutions/number-masking" element={<NumberMaskingPage />} />
            <Route path="/solutions/whatsapp-business-solution" element={<WhatsappBusinessSolutionPage />} />
            <Route path="/solutions/local" element={<LocalPage />} />
            <Route path="/solutions/local-numbers" element={<LocalNumbersPage />} />
            <Route path="/solutions/toll-free" element={<TollFreePage />} />

            {/* REDIRECTS */}
            <Route path="/solutions/contact-center/auto-dialer" element={<Navigate to="/solutions/auto-dialer" />} />
            <Route path="/solutions/contact-center/inbound" element={<Navigate to="/solutions/inbound" />} />
            <Route path="/solutions/contact-center/outbound" element={<Navigate to="/solutions/outbound" />} />
            <Route path="/solutions/contact-center/power-dialer" element={<Navigate to="/solutions/power-dialer" />} />
            <Route path="/solutions/contact-center/predictive-dialer" element={<Navigate to="/solutions/predictive-dialer" />} />
            <Route path="/solutions/contact-center/progressive-dialer" element={<Navigate to="/solutions/progressive-dialer" />} />

            <Route path="/solutions/international-numbers/local" element={<Navigate to="/solutions/local" />} />
            <Route path="/solutions/international-numbers/local-numbers" element={<Navigate to="/solutions/local-numbers" />} />
            <Route path="/solutions/international-numbers/toll-free" element={<Navigate to="/solutions/toll-free" />} />

            {/* FEATURES */}
            <Route path="/features" element={<Features />} />
            <Route path="/features/calling-features" element={<CallingFeaturesPage />} />
            <Route path="/features/call-forwarding" element={<CallForwardingPage />} />
            <Route path="/features/call-management" element={<CallManagementPage />} />
            <Route path="/features/call-reporting" element={<CallReportingPage />} />
            <Route path="/features/call-tracking" element={<CallTrackingPage />} />
            <Route path="/features/target-management" element={<TargetManagementPage />} />
            <Route path="/features/call-capping" element={<CallCappingPage />} />
            <Route path="/features/international-numbers" element={<InternationalNumbers />} />
            <Route path="/features/voicemail-to-email" element={<VoicemailToEmailPage />} />
            <Route path="/features/auto-attendant" element={<AutoAttendantPage />} />
            <Route path="/international-number" element={<Navigate to="/features/international-numbers" />} />
            <Route path="/features/:slug" element={<Feature />} />

            {/* OTHER */}
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

          </Routes>
        </Suspense>
      </LayoutWrapper>
      <AIAssistant />
    </Router>
  );
}

export default App;