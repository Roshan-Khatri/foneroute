import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// ================= STATIC =================
import HomePage from "@/pages/Home";
import About from "@/pages/About";
import SolutionsPage from "@/pages/Solutions";
import Support from "@/pages/Support";
import Blog from "@/pages/Blog";
import CaseStudies from "@/pages/CaseStudies";
import Pricing from "@/pages/Pricing";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

// ================= INDUSTRY =================
import IndustryPage from "@/pages/IndustryPage";

// ================= FEATURES =================
import FeaturesPage from "@/pages/features/Features";
import FeatureDetailPage from "@/pages/FeatureDetailPage";

// ================= CONTACT CENTER =================
import AutoDialerPage from "@/pages/solutions/contact-center/auto-dialer";
import PowerDialerPage from "@/pages/solutions/contact-center/power-dialer";
import PredictiveDialerPage from "@/pages/solutions/contact-center/predictive-dialer";
import ProgressiveDialerPage from "@/pages/solutions/contact-center/progressive-dialer";
import InboundPage from "@/pages/solutions/contact-center/inbound";
import OutboundPage from "@/pages/solutions/contact-center/outbound";

// ================= INTERNATIONAL NUMBERS =================
import TollFreePage from "@/pages/solutions/international-numbers/toll-free";
import LocalPage from "@/pages/solutions/international-numbers/local";

// ================= OTHER SOLUTIONS =================
import CloudPbxPage from "@/pages/solutions/cloud-pbx";
import UnifiedCommunicationsPage from "@/pages/solutions/unified-communications";
import ClickToCallPage from "@/pages/solutions/click-to-call";
import SmsMmsApiPage from "@/pages/solutions/sms-mms-api";
import NumberMaskingPage from "@/pages/solutions/number-masking";

// ================= LAZY =================
const Contact = lazy(() => import("@/pages/Contact"));

// ================= LAYOUT =================
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import AIAssistant from "@/components/ai-assistant/AI-Assistant";

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>

          <Routes>

            {/* MAIN */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<SolutionsPage />} />

            {/* INDUSTRY */}
            <Route path="/industry/:slug" element={<IndustryPage />} />

            {/* FEATURES */}
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/features/:slug" element={<FeatureDetailPage />} />

            {/* CONTACT CENTER */}
            <Route path="/solutions/auto-dialer" element={<AutoDialerPage />} />
            <Route path="/solutions/power-dialer" element={<PowerDialerPage />} />
            <Route path="/solutions/predictive-dialer" element={<PredictiveDialerPage />} />
            <Route path="/solutions/progressive-dialer" element={<ProgressiveDialerPage />} />
            <Route path="/solutions/inbound-call-solutions" element={<InboundPage />} />
            <Route path="/solutions/outbound" element={<OutboundPage />} />

            {/* INTERNATIONAL NUMBERS */}
            <Route path="/solutions/toll-free" element={<TollFreePage />} />
            <Route path="/solutions/local" element={<LocalPage />} />

            {/* OTHER SOLUTIONS */}
            <Route path="/solutions/cloud-pbx" element={<CloudPbxPage />} />
            <Route path="/solutions/unified-communications" element={<UnifiedCommunicationsPage />} />
            <Route path="/solutions/click-to-call" element={<ClickToCallPage />} />
            <Route path="/solutions/sms-mms-api" element={<SmsMmsApiPage />} />
            <Route path="/solutions/number-masking" element={<NumberMaskingPage />} />

            {/* OTHER */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>

        </Suspense>
      </LayoutWrapper>

      <AIAssistant />
    </Router>
  );
}

export default App;