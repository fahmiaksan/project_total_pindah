import PindahanRumahComponent from "../../components/Layanan/PindahanRumah/Page";

export default function PindahanRumahPage() {
  const benefitFullServicePackage = [
    "Survey, Packing",
    "Loading",
    "Trucking",
    "Unloading",
    "Unpacking",
    "Penataan Kembali di Lokasi Tujuan",
  ];
  const benefitBisnisPackage = [
    "Survey, Packing",
    "Loading",
    "Trucking",
    "Unloading",
    "Unpacking",
  ];
  const benefitEconomiPackage = [
    "Survey, Packing",
    "Loading",
    "Trucking",
    "Unloading",
    "Unpacking",
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Pindahan Rumah Profesional",
    "description": "Layanan pindahan rumah profesional meliputi Survey, Packing, Loading, Trucking, Unloading, Unpacking, dan penataan kembali di lokasi tujuan",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Total Pindah"
    },
    "areaServed": "Indonesia",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Paket Layanan Pindahan Rumah",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Paket Full Service",
          "description": "Layanan pindahan lengkap termasuk penataan di lokasi tujuan"
        },
        {
          "@type": "Offer",
          "name": "Paket Bisnis",
          "description": "Layanan pindahan tanpa penataan di lokasi tujuan"
        },
        {
          "@type": "Offer",
          "name": "Paket Ekonomi",
          "description": "Layanan pindahan dengan berbagai pilihan armada"
        }
      ]
    }
  };

  return (
    <PindahanRumahComponent benefitFullServicePackage={benefitFullServicePackage} benefitBisnisPackage={benefitBisnisPackage} benefitEconomiPackage={benefitEconomiPackage} serviceSchema={serviceSchema} />
  );
};
