import { ReactNode } from 'react';

interface BreadcrumbLink {
  name: string;
  url: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: {
    links: BreadcrumbLink[];
  };
  children?: ReactNode;
}

// ✅ Named export (so { PageHeader } works)
export const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  return (
    <div className="bg-secondary/30 border-b border-border pt-16">
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-4xl">
          
          {/* Title */}
          <h1 className="font-poppins font-bold text-foreground mb-4 text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg lg:text-xl">
              {description}
            </p>
          )}

          {/* Extra Content */}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// ✅ Default export (so PageHeader works)
export default PageHeader;