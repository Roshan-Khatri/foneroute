
import { useState, useEffect, RefObject } from 'react';

interface ScrollSpyOptions extends IntersectionObserverInit {
  // No additional options needed for now, but can be extended
}

export function useScrollSpy(
  sectionIds: string[],
  options?: ScrollSpyOptions
): {
  activeId: string;
}
 {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, {
      rootMargin: '0px 0px -80% 0px',
      threshold: 0.1,
      ...options,
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, options]);

  return { activeId };
}
