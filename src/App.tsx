import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Solutions from '@/pages/Solutions';
import Solution from '@/pages/solutions/Solution';
import Header from '@/components/layout/NewNavbar';
import Footer from '@/components/layout/Footer';
import IndustryDetailPage from '@/pages/IndustryDetailPage';
import Features from '@/pages/Features';
import FeatureDetailPage from '@/pages/FeatureDetailPage';
import ContactCenterSolutionPage from '@/pages/solutions/ContactCenter';
import Support from '@/pages/Support';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import CaseStudies from '@/pages/CaseStudies';
import CallTracking from '@/pages/features/CallTracking';
import InternationalNumbers from '@/pages/InternationalNumbers';

function App() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/contact-center" element={<ContactCenterSolutionPage />} />
        <Route path="/solutions/:slug" element={<Solution />} />
        <Route path="/industries/:slug" element={<IndustryDetailPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/features/call-tracking" element={<CallTracking />} />
        <Route path="/features/:slug" element={<FeatureDetailPage />} />
        <Route path="/international-numbers" element={<InternationalNumbers />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
