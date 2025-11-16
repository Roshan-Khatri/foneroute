import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, subtitle, breadcrumb, children }: PageHeaderProps) => {
  return (
    <div className="bg-gradient-surface border-b border-border">
      <div className="container-custom py-12 md:py-20">
        {breadcrumb && (
          <nav className="mb-4">
            <p className="text-sm text-muted-foreground">{breadcrumb}</p>
          </nav>
        )}
        <div className="max-w-4xl">
          <h1 className="font-poppins font-bold text-foreground mb-4 text-3xl md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg md:text-xl">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
