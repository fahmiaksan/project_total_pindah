import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': pathnames.map((name, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@id': `${window.location.origin}/${pathnames.slice(0, index + 1).join('/')}`,
        'name': name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      }
    }))
  };

  return (
    <nav className="flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
            <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Beranda
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = name.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');

          return (
            <li key={name}>
              <div className="flex items-center">
                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                {isLast ? (
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                    {displayName}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </nav>
  );
};

export default Breadcrumbs; 