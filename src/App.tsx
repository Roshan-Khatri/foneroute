
import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayout from "./components/layout/MainLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import AdminAuth from "./pages/AdminAuth";
import { ScrollSpyProvider } from './context/ScrollSpyContext';
import AllFeaturesSkeleton from './pages/AllFeaturesSkeleton';

// Lazy-loaded components
const Admin = lazy(() => import("./pages/Admin"));
const AllSolutions = lazy(() => import("./pages/AllSolutions"));
const AllFeatures = lazy(() => import("./pages/AllFeatures"));
const SolutionPage = lazy(() => import("./pages/solutions/Solution.tsx"));
const Pricing = lazy(() => import("./pages/Pricing.tsx"));
const Industries = lazy(() => import("./pages/Industries.tsx"));
const FeatureCalling = lazy(() => import("./pages/features/Calling.tsx"));
const FeatureCallManagement = lazy(() => import("./pages/features/CallManagement.tsx"));
const FeatureCallReporting = lazy(() => import("./pages/features/CallReporting.tsx"));
const SolutionContactCenter = lazy(() => import("./pages/solutions/ContactCenter.tsx"));
const ContactSales = lazy(() => import("./pages/ContactSales.tsx"));
const ContactCenterFeatures = lazy(() => import("./pages/features/ContactCenterFeatures.tsx"));

// Skeleton components
const SolutionsSkeleton = () => <div>Loading Solutions...</div>;
const FeaturesSkeleton = () => <AllFeaturesSkeleton />;
const SolutionPageSkeleton = () => <div>Loading...</div>;
const SolutionContactCenterSkeleton = () => <div>Loading...</div>;
const ContactSalesSkeleton = () => <div>Loading...</div>;
const PricingSkeleton = () => <div>Loading Pricing...</div>;
const IndustriesSkeleton = () => <div>Loading Industries...</div>;
const ContactCenterFeaturesSkeleton = () => <div>Loading...</div>;
const FeatureCallingSkeleton = () => <div>Loading Feature: Calling...</div>;
const FeatureCallManagementSkeleton = () => <div>Loading Feature: Call Management...</div>;
const FeatureCallReportingSkeleton = () => <div>Loading Feature: Call Reporting...</div>;

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ErrorBoundary>
          <ScrollSpyProvider>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solutions" element={
                  <Suspense fallback={<SolutionsSkeleton />}>
                    <AllSolutions />
                  </Suspense>
                } />
                <Route path="/features" element={
                  <Suspense fallback={<FeaturesSkeleton />}>
                    <AllFeatures />
                  </Suspense>
                } />
                <Route path="/solutions/:slug" element={<Suspense fallback={<SolutionPageSkeleton />}><SolutionPage /></Suspense>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact-sales" element={
                  <Suspense fallback={<ContactSalesSkeleton />}>
                    <ContactSales />
                  </Suspense>
                } />
                <Route path="/pricing" element={
                  <Suspense fallback={<PricingSkeleton />}>
                    <Pricing />
                  </Suspense>
                } />
                <Route path="/industries" element={
                  <Suspense fallback={<IndustriesSkeleton />}>
                    <Industries />
                  </Suspense>
                } />
                <Route path="/features/contact-center" element={
                  <Suspense fallback={<ContactCenterFeaturesSkeleton />}>
                    <ContactCenterFeatures />
                  </Suspense>
                } />
                <Route path="/features/calling" element={
                  <Suspense fallback={<FeatureCallingSkeleton />}>
                    <FeatureCalling />
                  </Suspense>
                } />
                <Route path="/features/call-management" element={
                  <Suspense fallback={<FeatureCallManagementSkeleton />}>
                    <FeatureCallManagement />
                  </Suspense>
                } />
                <Route path="/features/call-reporting" element={
                  <Suspense fallback={<FeatureCallReportingSkeleton />}>
                    <FeatureCallReporting />
                  </Suspense>
                } />
                <Route path="/admin" element={
                  <Suspense fallback={<div>Loading Admin...</div>}>
                    <AdminAuth>
                      <Admin />
                    </AdminAuth>
                  </Suspense>
                } />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="/not-found" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
          </ScrollSpyProvider>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
