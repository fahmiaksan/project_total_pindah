import { memo, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
}

const SEO = memo(({
  title,
  description,
  keywords = '',
  image = '/logo.png',
  url = window.location.href,
  type = 'website',
  schema,
}: SEOProps) => {
  const siteName = 'Jasa Pindahan Profesional';

  const seoData = useMemo(() => ({
    fullTitle: `${title} | ${siteName}`,
    metaTags: {
      description,
      keywords,
      image,
      url,
      type
    }
  }), [title, description, keywords, image, url, type]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.fullTitle}</title>
      <meta name="description" content={seoData.metaTags.description} />
      <meta name="keywords" content={seoData.metaTags.keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={seoData.metaTags.url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoData.fullTitle} />
      <meta property="og:description" content={seoData.metaTags.description} />
      <meta property="og:type" content={seoData.metaTags.type} />
      <meta property="og:url" content={seoData.metaTags.url} />
      <meta property="og:image" content={seoData.metaTags.image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.fullTitle} />
      <meta name="twitter:description" content={seoData.metaTags.description} />
      <meta name="twitter:image" content={seoData.metaTags.image} />

      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
});

SEO.displayName = 'SEO';

export default SEO; 