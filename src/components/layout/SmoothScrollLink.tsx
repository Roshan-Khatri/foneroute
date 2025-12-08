
import React, { ReactNode, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface SmoothScrollLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
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

    return (
      <Link to={to} onClick={handleClick} reloadDocument ref={ref} {...props}>
        {children}
      </Link>
    );
  }
);

SmoothScrollLink.displayName = 'SmoothScrollLink';

export default SmoothScrollLink;
