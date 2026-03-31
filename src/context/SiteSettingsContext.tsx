import React, { createContext, useContext, ReactNode } from 'react';
import { useSiteSettings as useSanitySiteSettings } from '../hooks/useSanityContent';
import type { SiteSettings } from '../sanity/types';

interface SiteSettingsContextValue {
  siteSettings: SiteSettings | null;
  isLoading: boolean;
}

const SiteSettingsContext = createContext<SiteSettingsContextValue | undefined>(undefined);

export const SiteSettingsProvider = ({ children }: { children: ReactNode }) => {
  const { data: siteSettings, isLoading } = useSanitySiteSettings();

  return (
    <SiteSettingsContext.Provider value={{ siteSettings, isLoading }}>
      {children}
    </SiteSettingsContext.Provider>
  );
};

export const useSiteSettings = (): SiteSettingsContextValue => {
  const context = useContext(SiteSettingsContext);
  if (!context) {
    throw new Error('useSiteSettings must be used within a SiteSettingsProvider');
  }
  return context;
};
