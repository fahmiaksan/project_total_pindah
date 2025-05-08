import Layout from "../Layout";
import ContentHome from "../components/Home/ContentHome";
import Jumbotron from "../components/Home/Jumbotron";
import Galeri from "../components/Home/Galeri";
import WhyChoseUs from "../components/Home/WhyChoseUs";

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jasa Pindahan Profesional",
    "description": "Layanan jasa pindahan profesional untuk rumah, apartemen, dan kantor dengan pelayanan terpercaya di seluruh Indonesia",
    "url": window.location.origin,
    "areaServed": "Indonesia",
    "priceRange": "$$",
    "serviceType": ["Pindahan Rumah", "Pindahan Kantor", "Pindahan Apartemen", "Pindahan Luar Kota"]
  };

  return (
    <Layout
      seo={{
        title: "Jasa Pindahan Profesional - Layanan Pindahan Terpercaya",
        description: "Layanan jasa pindahan profesional untuk rumah, apartemen, dan kantor. Pelayanan cepat, aman, dan terpercaya di seluruh Indonesia.",
        keywords: "jasa pindahan, pindahan rumah, pindahan kantor, jasa pindahan profesional, pindahan apartemen, pindahan luar kota",
        type: "website",
        schema: homeSchema
      }}
      content={
        <>
          <Jumbotron />
          <ContentHome />
          <WhyChoseUs />
          <Galeri />
        </>
      }
    />
  );
};
