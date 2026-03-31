"use client";

import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "../ScrollToTop";
import { ReactNode } from "react";
import { SiteSettings } from "@/sanity/types";
import GlobalCTA from "./GlobalCTA";

interface PageLayoutProps {
  children: ReactNode;
  siteSettings: SiteSettings | null;
  isLoading: boolean;
}

const PageLayout = ({
  children,
  siteSettings,
  isLoading,
}: PageLayoutProps) => {

  const showMaintenance = (() => {
    if (isLoading || !siteSettings?.maintenanceMode) return false;

    const now = new Date();
    const start = siteSettings.maintenanceStartDate
      ? new Date(siteSettings.maintenanceStartDate)
      : null;
    const end = siteSettings.maintenanceEndDate
      ? new Date(siteSettings.maintenanceEndDate)
      : null;

    if (start && now < start) return false;
    if (end && now > end) return false;

    return true;
  })();

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col bg-background text-foreground">

        <Header />

        {showMaintenance && (
          <div className="w-full bg-yellow-100 text-yellow-900 text-center py-2 font-semibold">
            {typeof siteSettings?.maintenanceMessage === "string"
              ? siteSettings.maintenanceMessage
              : "The site is currently under maintenance."}
          </div>
        )}

        <main className="flex-grow pt-24">
          {children}
        </main>

        {/* 🔥 THIS IS YOUR BLACK BUTTON */}
        <GlobalCTA />

        <Footer />
        <Toaster />
        <ScrollToTop />

      </div>
    </ThemeProvider>
  );
};

export default PageLayout;