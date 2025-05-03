import Layout from "../Layout";
import { dataArtikel } from "./utils";
import { Link } from "react-router-dom";

export default function ArtikelPage() {
  return (
    <Layout
      titleHeader="Artikel & Tips"
      seo={{
        title: "Artikel dan Tips Seputar Jasa Pindahan | Total Pindah",
        description: "Kumpulan artikel dan tips berguna seputar jasa pindahan, cara packing yang benar, dan informasi penting lainnya untuk pindahan yang aman dan nyaman.",
        keywords: "artikel jasa pindahan, tips pindahan, panduan pindahan, info pindahan",
        type: "blog"
      }}
      contentHeader={
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Temukan berbagai artikel informatif dan tips berguna seputar jasa pindahan.
            Kami berbagi pengalaman dan pengetahuan untuk membantu proses pindahan Anda berjalan lancar.
          </p>
        </div>
      }
      content={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataArtikel.map((artikel) => (
            <Link
              key={artikel.id}
              to={`/artikel/${artikel.slug}`}
              className="group"
            >
              <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={artikel.image}
                    alt={artikel.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span>{artikel.date && new Date(artikel.date).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                    <span>•</span>
                    <span>{artikel.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {artikel.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">
                    {artikel.description}
                  </p>
                  <div className="pt-4">
                    <span className="inline-flex items-center text-blue-600 group-hover:text-blue-700">
                      Baca selengkapnya
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      }
    />
  );
}
