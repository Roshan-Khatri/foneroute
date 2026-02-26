import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from './ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '../ScrollToTop';
import { ReactNode } from 'react';
import { SiteSettings } from '@/sanity/types';
import GlobalCTA from './GlobalCTA';

const PageLayout = ({
  children,
  siteSettings,
  isLoading,
}: {
  children: ReactNode;
  siteSettings: SiteSettings | null;
  isLoading: boolean;
}) => {
  const showMaintenance = (() => {
    if (isLoading || !siteSettings?.maintenanceMode) return false;
    const now = new Date();
    const start = siteSettings.maintenanceStartDate ? new Date(siteSettings.maintenanceStartDate) : null;
    const end = siteSettings.maintenanceEndDate ? new Date(siteSettings.maintenanceEndDate) : null;
    if (start && now < start) return false;
    if (end && now > end) return false;
    return true;
  })();

  const analyticsScripts = [];
  if (siteSettings?.googleAnalyticsId) {
    analyticsScripts.push(
      <script key="ga" async src={`https://www.googletagmanager.com/gtag/js?id=${siteSettings.googleAnalyticsId}`}></script>
    );
    analyticsScripts.push(
      <script key="ga-init">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${siteSettings.googleAnalyticsId}');
      `}</script>
    );
  }
  if (siteSettings?.facebookPixelId) {
    analyticsScripts.push(
      <script key="fb-pixel">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${siteSettings.facebookPixelId}');
        fbq('track', 'PageView');
      `}</script>
    );
  }
  if (siteSettings?.otherTrackingCodes) {
    analyticsScripts.push(
      <script key="other-tracking" dangerouslySetInnerHTML={{ __html: siteSettings.otherTrackingCodes }} />
    );
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {analyticsScripts}
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        {showMaintenance && (
          <div className="w-full bg-warning text-center py-2 text-warning-foreground font-semibold">
            {typeof siteSettings?.maintenanceMessage === 'string'
              ? siteSettings.maintenanceMessage
              : 'The site is currently under maintenance.'}
          </div>
        )}
        <main className="flex-grow pt-24">
          {children}
        </main>
        <GlobalCTA />
        <Footer />
        <Toaster />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default PageLayout;
