
import { useSiteSettings } from '@/hooks/useSanityContent';
import { ReactNode } from 'react';
import PageLayout from './PageLayout';

const Layout = ({ children, location }: { children: ReactNode, location: any }) => {
  const { data: siteSettings, isLoading } = useSiteSettings();

  return (
    <PageLayout siteSettings={siteSettings} isLoading={isLoading} location={location}>
      {children}
    </PageLayout>
  );
};

export default Layout;
