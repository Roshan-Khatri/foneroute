
import React, { createContext, useContext, ReactNode } from 'react';
import { SiteSettings } from '@/sanity/types';

// Create a context to hold the site settings. It's initialized to null.
const SiteSettingsContext = createContext<SiteSettings | null>(null);

/**
 * A provider component that makes the site settings object available to any
 * child component that calls the `useSiteSettingsContext` hook.
 */
export const SiteSettingsProvider = ({ children, settings }: { children: ReactNode; settings: SiteSettings | null }) => {
  return (
    <SiteSettingsContext.Provider value={settings}>
      {children}
    </SiteSettingsContext.Provider>
  );
};

/**
 * A custom hook to easily access the site settings from the context.
 * It ensures that components using this hook are wrapped in a SiteSettingsProvider.
 */
export const useSiteSettingsContext = (): SiteSettings => {
  const context = useContext(SiteSettingsContext);
  if (context === null) {
    // This error will be triggered if a component tries to access the settings
    // without being a child of the provider, which is a common bug.
    throw new Error('useSiteSettingsContext must be used within a SiteSettingsProvider');
  }
  return context;
};
