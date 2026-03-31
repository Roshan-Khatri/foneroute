
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string | string[];
  imageUrl?: string;
  url?: string;
}

export const SEO = ({ title, description, keywords, imageUrl, url }: SEOProps) => {
  const defaultTitle = 'FoneRoute';
  const siteName = 'FoneRoute';
  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Helmet>
  );
};

export const withSEO = (Component: React.FC<any>, seoProps: SEOProps) => {
  return (props: any) => (
    <HelmetProvider>
      <SEO {...seoProps} />
      <Component {...props} />
    </HelmetProvider>
  );
};
