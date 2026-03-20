import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import HomePage from '@/pages/Home';
import About from '@/pages/About';
import SolutionsPage from '@/pages/Solutions';
import Support from '@/pages/Support';
import Blog from '@/pages/Blog';
import Features from '@/pages/Features';
import Feature from '@/pages/features/Feature';
import CaseStudies from '@/pages/CaseStudies';
import Pricing from '@/pages/Pricing';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';

import LayoutWrapper from '@/components/layout/LayoutWrapper';
import AIAssistant from '@/components/ai-assistant/AI-Assistant';

import './light-mode.css';

// ================= LAZY =================
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

// ================= CONTACT CENTER =================
const ContactCenterPage = lazy(() => import('@/pages/solutions/contact-center'));
const AutoDialerPage = lazy(() => import('@/pages/solutions/contact-center/auto-dialer'));
const PowerDialerPage = lazy(() => import('@/pages/solutions/contact-center/power-dialer'));
const PredictiveDialerPage = lazy(() => import('@/pages/solutions/contact-center/predictive-dialer'));
const ProgressiveDialerPage = lazy(() => import('@/pages/solutions/contact-center/progressive-dialer'));
const InboundPage = lazy(() => import('@/pages/solutions/contact-center/inbound'));
const OutboundPage = lazy(() => import('@/pages/solutions/contact-center/outbound'));

// ================= FEATURES =================
const CallingFeaturesPage = lazy(() => import('@/pages/features/CallingFeatures'));
const CallForwardingPage = lazy(() => import('@/pages/features/CallForwarding'));
const CallManagementPage = lazy(() => import('@/pages/features/CallManagement'));
const CallReportingPage = lazy(() => import('@/pages/features/call-reporting'));
const CallTrackingPage = lazy(() => import('@/pages/features/CallTracking'));
const TargetManagementPage = lazy(() => import('@/pages/features/TargetManagement'));
const CallCappingPage = lazy(() => import('@/pages/features/CallCapping'));
const InternationalNumbers = lazy(() => import('@/pages/features/InternationalNumbers'));
const VoicemailToEmailPage = lazy(() => import('@/pages/features/voicemail-to-email'));
const AutoAttendantPage = lazy(() => import('@/pages/features/auto-attendant'));

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>

          <Routes>

            {/* ================= MAIN ================= */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* ================= CONTACT CENTER ================= */}
            <Route path="/solutions/contact-center" element={<ContactCenterPage />} />
            <Route path="/solutions/auto-dialer" element={<AutoDialerPage />} />
            <Route path="/solutions/power-dialer" element={<PowerDialerPage />} />
            <Route path="/solutions/predictive-dialer" element={<PredictiveDialerPage />} />
            <Route path="/solutions/progressive-dialer" element={<ProgressiveDialerPage />} />
            <Route path="/solutions/inbound-call-solutions" element={<InboundPage />} />
            <Route path="/solutions/outbound" element={<OutboundPage />} />

            {/* ================= OTHER SOLUTIONS ================= */}
            <Route path="/solutions/unified-communications" element={<UnifiedCommunicationsPage />} />
            <Route path="/solutions/cloud-pbx" element={<CloudPbxPage />} />
            <Route path="/solutions/click-to-call" element={<ClickToCallPage />} />
            <Route path="/solutions/sms-mms-api" element={<SmsMmsApiPage />} />
            <Route path="/solutions/number-masking" element={<NumberMaskingPage />} />
            <Route path="/solutions/whatsapp-business-solution" element={<WhatsappBusinessSolutionPage />} />
            <Route path="/solutions/local" element={<LocalPage />} />
            <Route path="/solutions/local-numbers" element={<LocalNumbersPage />} />
            <Route path="/solutions/toll-free" element={<TollFreePage />} />

            {/* ================= REDIRECTS ================= */}
            <Route path="/solutions/contact-center/auto-dialer" element={<Navigate to="/solutions/auto-dialer" />} />
            <Route path="/solutions/contact-center/inbound" element={<Navigate to="/solutions/inbound-call-solutions" />} />
            <Route path="/solutions/contact-center/outbound" element={<Navigate to="/solutions/outbound" />} />
            <Route path="/solutions/contact-center/power-dialer" element={<Navigate to="/solutions/power-dialer" />} />
            <Route path="/solutions/contact-center/predictive-dialer" element={<Navigate to="/solutions/predictive-dialer" />} />
            <Route path="/solutions/contact-center/progressive-dialer" element={<Navigate to="/solutions/progressive-dialer" />} />

            {/* ================= FEATURES ================= */}
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
            <Route path="/features/:slug" element={<Feature />} />

            {/* ================= FALLBACK ================= */}
            <Route path="*" element={<Navigate to="/" />} />

          </Routes>

        </Suspense>
      </LayoutWrapper>

      <AIAssistant />
    </Router>
  );
}

export default App;