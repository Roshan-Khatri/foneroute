
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, subtitle, breadcrumb, children }: PageHeaderProps) => {
  return (
    <div className="bg-secondary/30 border-b border-border">
      <div className="container-custom py-12 md:py-16">
        {breadcrumb && (
          <motion.nav 
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground">{breadcrumb}</p>
          </motion.nav>
        )}
        <div className="max-w-4xl">
          <motion.h1 
            className="font-poppins font-bold text-foreground mb-4 text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              className="text-muted-foreground leading-relaxed text-base md:text-lg lg:text-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
