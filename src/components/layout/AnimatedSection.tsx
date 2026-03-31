import { ReactNode } from 'react';

interface AnimatedSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'slide-in-from-left' | 'slide-in-from-right' | 'zoom-in' | 'flip-down';
  delay?: string;
}

function AnimatedSection({ id, children, className, animation, delay }: AnimatedSectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={{
        animation: animation ? `${animation} 1s ease-out forwards` : 'none',
        animationDelay: delay,
      }}
    >
      {children}
    </section>
  );
}

export default AnimatedSection;
