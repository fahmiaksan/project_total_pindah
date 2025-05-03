import Card from "../components/Atoms/Card";
import Layout from "../Layout";

export default function HargaPage() {
  const benefit = [
    "Pemindahan brankas",
    "Bongkar pasang AC",
    "Bongkar pasang Kitchen set",
    "Pemindahan piano",
    "Pemindahan patung",
    "Pemindahan lampu kristal"
  ];

  const priceSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Harga Jasa Pindahan Total Pindah",
    "description": "Biaya jasa pindahan dihitung berdasarkan volume barang dalam meter kubik (M3)",
    "price": "400000",
    "priceCurrency": "IDR",
    "unitText": "per meter kubik",
    "validFrom": "2024-01-01",
    "priceType": "Negotiable",
    "additionalProperty": {
      "@type": "PropertyValue",
      "name": "Special Handling",
      "value": "Biaya tambahan untuk penanganan khusus (berat/besar/bongkar-pasang)"
    }
  };

  return (
    <Layout
      titleHeader="Harga Layanan"
      seo={{
        title: "Daftar Harga Jasa Pindahan - Total Pindah",
        description: "Informasi lengkap harga jasa pindahan Total Pindah. Harga dihitung per meter kubik (M3) dengan sistem survey. Tersedia layanan special handling untuk barang khusus.",
        keywords: "harga pindahan, biaya jasa pindahan, tarif pindahan rumah, harga special handling, kalkulasi biaya pindahan",
        type: "product",
        schema: priceSchema
      }}
      contentHeader={
        <>
          <p className="text-left font-bold">
            Tarif Jasa Pindahan
          </p>
          <p className="tracking-widest leading-7 text-base">
            Biaya Jasa Pindahan kami kenakan sesuai banyaknya barang yang akan dihitung dalam satuan per meter kubik / M3 yang akan ditentukan pada saat survey ketempat pelanggan oleh team TotalPindah
            <br />
            M3 adalah ukuran volume suatu benda/barang berbentuk kubus yang memiliki ukuran panjang masing-masing sisinya adalah 1 meter (Panjang x Lebar x Tinggi). Tehnik menghitung jumlah volume barang ini disebut dengan Rumus Perhitungan Kubikasi, yaitu untuk memperoleh jumlah nilai/ukuran suatu barang dalam satuan M3. Rumusnya yaitu:
            <br />
            panjang (cm) x lebar (cm) x tinggi (cm) <br />
            —————————————————– = hasil dalam M3<br />
            1.000.000<br />
            Setelah Anda memperoleh hasil dari perhitungan di atas ( M3 ) kemudian dikalikan dengan harga dasar pindahan (per M3) yang ditawarkan.<br />
            Contoh perhitungan<br /><br /><br />
            Maka apabila disepakati biaya pindahannya Rp.400.000 maka akan didapat biaya jasa Pindahan barang tersebut sebesar 5,5 M3 x Rp.400.000 = Rp.2.200.000 * biaya jasa pindahan negotiable</p>
        </>
      }
      content={
        <Card
          title="Ketentuan Lain"
          benefit={benefit}
          content={
            "Untuk barang barang tertentu dapat dikenakan biaya Special handling, yaitu untuk proses pemindahan barang yang memerlukan penanganan khusus (berat/besar/bongkar-pasang)"
          }
          width="w-full"
          height="h-[350px]"
        />
      }
      background="bg-white"
      padding="px-0 py-9"
    />
  );
}