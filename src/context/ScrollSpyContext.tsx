
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Section {
  id: string;
  label: string;
}

interface ScrollSpyContextType {
  sections: Section[];
  setSections: (sections: Section[]) => void;
  activeSection: string | null;
  setActiveSection: (sectionId: string | null) => void;
}

const ScrollSpyContext = createContext<ScrollSpyContextType | undefined>(undefined);

export const ScrollSpyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const value = {
    sections,
    setSections,
    activeSection,
    setActiveSection,
  };

  return (
    <ScrollSpyContext.Provider value={value}>
      {children}
    </ScrollSpyContext.Provider>
  );
};

export const useScrollSpy = () => {
  const context = useContext(ScrollSpyContext);
  if (!context) {
    throw new Error('useScrollSpy must be used within a ScrollSpyProvider');
  }
  return context;
};
