
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

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

const PageHeader = ({ title, description, breadcrumb, children }: PageHeaderProps) => {
  return (
    <div className="bg-secondary/30 border-b border-border pt-16">
      <div className="container-custom py-12 md:py-16">
        {breadcrumb && breadcrumb.links && Array.isArray(breadcrumb.links) && (
          <nav className="mb-4">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              {breadcrumb.links.map((link, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {index > 0 && <span className="text-muted-foreground">/</span>}
                  {index === breadcrumb.links.length - 1 ? (
                    <span className="font-medium text-foreground">{link.name}</span>
                  ) : (
                    <Link to={link.url} className="hover:text-foreground">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="max-w-4xl">
          <h1 className="font-poppins font-bold text-foreground mb-4 text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg lg:text-xl">
              {description}
            </p>
          )}
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

export default PageHeader;
