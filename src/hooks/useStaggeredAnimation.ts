
import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

interface StaggeredAnimationOptions {
  staggerDelay?: number; // in ms
  itemSelector: string;
}

export const useStaggeredAnimation = (
  options: StaggeredAnimationOptions = { staggerDelay: 100, itemSelector: '.stagger-item' }
) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (isIntersecting) {
      const items = (ref.current as HTMLElement)?.querySelectorAll(options.itemSelector);
      items?.forEach((item, index) => {
        const el = item as HTMLElement;
        el.style.transitionDelay = `${index * options.staggerDelay}ms`;
        el.classList.add('section-enter-visible'); 
      });
    }
  }, [isIntersecting, ref, options.itemSelector, options.staggerDelay]);

  return ref;
};
