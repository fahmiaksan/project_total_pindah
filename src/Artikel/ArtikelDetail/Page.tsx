import { useParams } from "react-router-dom";
import { dataArtikel } from "../utils";
import Layout from "../../Layout";

export default function ArtikelDetailPage() {
  const { slug } = useParams();
  const artikel = dataArtikel.find((item) => item.slug === slug);

  if (!artikel) {
    return (
      <Layout
        titleHeader="Artikel Tidak Ditemukan"
        content={
          <div className="text-center py-12">
            <p className="text-gray-600">Maaf, artikel yang Anda cari tidak ditemukan.</p>
          </div>
        }
      />
    );
  }

  return (
    <Layout
      titleHeader={artikel.title}
      seo={{
        title: `${artikel.title} | Total Pindah`,
        description: artikel.description,
        keywords: `artikel jasa pindahan, ${artikel.title.toLowerCase()}, tips pindahan, panduan pindahan`,
        type: "article"
      }}
      content={
        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500 space-x-4 mb-6">
              <span>{new Date(artikel.date).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <span>•</span>
              <span>{artikel.author}</span>
            </div>
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <img
                src={artikel.image}
                alt={artikel.title}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {artikel.description}
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {artikel.content.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph.trim()}
                </p>
              )
            ))}
          </div>

          {/* Share and Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Bagikan artikel ini:
                <div className="flex space-x-4 mt-2">
                  <button
                    onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="text-green-600 hover:text-green-700"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Facebook
                  </button>
                </div>
              </div>
              <a
                href="/artikel"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                <svg className="w-4 h-4 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Kembali ke Artikel
              </a>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Artikel Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataArtikel
                .filter(item => item.slug !== slug)
                .slice(0, 2)
                .map(artikel => (
                  <a
                    key={artikel.id}
                    href={`/artikel/${artikel.slug}`}
                    className="group block"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48">
                        <img
                          src={artikel.image}
                          alt={artikel.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                          {artikel.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2">
                          {artikel.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </article>
      }
    />
  );
}
