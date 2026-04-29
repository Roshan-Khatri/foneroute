import { ReactNode } from "react";

interface BreadcrumbLink {
  name: string;
  url: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;      // ✅ added
  description?: string;   // already exists
  breadcrumb?: {
    links: BreadcrumbLink[];
  };
  children?: ReactNode;
}

export const PageHeader = ({
  title,
  subtitle,
  description,
  children,
}: PageHeaderProps) => {
  return (
    <div className="bg-secondary/30 border-b border-border pt-16">
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-4xl">

          {/* TITLE */}
          <h1 className="font-poppins font-bold text-foreground mb-4 text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>

          {/* ✅ SUBTITLE (top priority) */}
          {subtitle && (
            <p className="text-muted-foreground leading-relaxed text-lg md:text-xl mb-2">
              {subtitle}
            </p>
          )}

          {/* ✅ DESCRIPTION (optional second line) */}
          {description && (
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {description}
            </p>
          )}

          {/* EXTRA */}
          {children && <div className="mt-8">{children}</div>}

        </div>
      </div>
    </div>
  );
};

export default PageHeader;