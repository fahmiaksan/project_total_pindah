import React from "react";
import { ErrorBoundary } from './components/Atoms/ErrorBoundary';
import SEO from "./components/Atoms/SEO";
import Breadcrumbs from "./components/Atoms/Breadcrumbs";

interface Props {
  titleHeader?: string;
  contentHeader?: string | React.ReactNode;
  content: string | React.ReactNode;
  background?: string;
  padding?: string;
  spacing?: string;
  grid?: string;
  seo?: {
    title: string;
    description: string;
    keywords?: string;
    type?: string;
    schema?: {
      '@context': string;
      '@type': string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any;
    };
  };
}

export default function Layout(props: Props) {
  const {
    titleHeader,
    padding,
    contentHeader,
    content,
    background,
    spacing,
    grid,
    seo = {
      title: titleHeader || 'Jasa Pindahan Profesional',
      description: 'Layanan jasa pindahan profesional untuk rumah, apartemen, kantor, dan pindahan luar kota',
      keywords: 'jasa pindahan, pindahan rumah, pindahan kantor, pindahan apartemen, pindahan luar kota',
      type: 'website'
    }
  } = props;

  return (
    <>
      <SEO {...seo} />
      <ErrorBoundary>
        <main className={`
          container mx-auto 
          px-3 sm:px-6 md:px-8 lg:px-12 
          my-8 sm:my-12 md:my-16 lg:my-20 
          ${spacing ? spacing : 'space-y-8 sm:space-y-12'}
        `}>
          <Breadcrumbs />

          <div className={`${background ? "space-y-0" : "space-y-6 sm:space-y-8 md:space-y-10"}`}>
            {titleHeader && (
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black lg:tracking-widest">
                {titleHeader}
              </h1>
            )}

            {contentHeader && (
              <div className={`
                ${background ? background : 'bg-[#F2EE6F]'} 
                rounded-tr-xl rounded-bl-xl 
                ${padding ? padding : 'px-4 sm:px-6 md:px-8 py-6 sm:py-9'}
              `}>
                <div className={`
                  leading-relaxed tracking-wide text-base sm:text-lg
                  ${grid ? grid : ''}
                `}>
                  {contentHeader}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 md:mt-12">
            {content}
          </div>
        </main>
      </ErrorBoundary>
    </>
  );
};
