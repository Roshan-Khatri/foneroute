
import React, { ReactNode, forwardRef } from 'react';

interface SmoothScrollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  to: string | { pathname?: string };
}

const SmoothScrollLink = forwardRef<HTMLAnchorElement, SmoothScrollLinkProps>(
  ({ children, to, onClick, ...props }, ref) => {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const toStr = typeof to === 'string' ? to : to.pathname || '';
      const isHashLink = toStr.startsWith('#');

      if (isHashLink) {
        e.preventDefault();
        const targetId = toStr.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
      
      if (onClick) {
        onClick(e);
      }
    };

    const href = typeof to === 'string' ? to : to.pathname || '';

    return (
      <a href={href} onClick={handleClick} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);

SmoothScrollLink.displayName = 'SmoothScrollLink';

export default SmoothScrollLink;
