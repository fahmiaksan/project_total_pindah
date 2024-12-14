import Card from "../../components/Atoms/Card";
import Layout from "../../Layout";

export default function PindahanLuarKota() {
  const benefitFullService = [
    "Survey, Packing",
    "Loading",
    "Trucking",
    "Unloading",
    "Unpacking",
    "Penataan Kembali di Lokasi Tujuan",
  ];
  const benefitMiddleService = [
    "Survey, Packing",
    "Loading",
    "Trucking",
    "Unloading",
    "Unpacking",
  ];
  const benefitTruckingService = [
    "Loading",
    "Trucking",
    "Unloading",
  ]
  return (
    <Layout
      titleHeader="Jasa Pindahan Luar Kota Antar Pulau"
      contentHeader="Tak jarang seseorang atau satu keluarga melakukan perpindahan dari kota satu ke kota lainnya. Ini dikarenakan untuk mendapatkan suasana baru yang tidak didapatkan di kota sebelumnya. Seperti gaya hidup yang tidak sesuai, cuaca yang kurang mendukung, hingga ke tingkat keramaian dan jenis kuliner yang ada di kota tersebut.
Total Pindah melayani berbagai macam jasa pindahan, termasuk jasa pindahan jarak jauh, seperti jasa pindahan antar kota dengan berbagai layanan. Jenis layanan yang dipilih menjadi faktor utama kami menentukan suatu tarif jasa pindahan, selain itu faktor jarak tempuh dan banyaknya jumlah barang – barang yang akan dipindahkan juga turut mempengaruhi tercipta nya suatu tarif jasa pindahan kami."
      content={
        <div className="space-y-14">
          <p className="mb-14 tracking-widest">Tersedia Pilihan Paket:</p>
          <div className="flex flex-col flex-1 items-center md:items-start gap-9 md:flex-row justify-center">
            <Card
              benefit={benefitFullService}
              content={
                <p>
                  Kami menyediakan layanan pindahan yang{" "}
                  <strong className="font-bold text-[#0C142E]">cepat, aman,</strong> dan{" "}
                  <strong className="font-bold text-[#0C142E]">terjangkau.</strong> Dengan paket ini, Anda dapat menikmati pengalaman pindahan{" "}
                  <strong className="font-bold text-[#0C142E]">tanpa ribet, </strong>
                  karena kami akan mengurus segalanya untuk Anda. Hubungi kami sekarang untuk solusi pindahan terbaik!
                </p>

              }
              title="Full Service" />
            <Card
              title="Middle Service"
              content="Kami menyediakan layanan pindahan dari lokasi lama lokasi yang baru anda bisa menata sendiri sesuai keinginan dan waktu luang anda kapanpun ingin melakukannya. Hubungi kami sekarang untuk solusi pindahan terbaik!"
              benefit={benefitMiddleService}
            />
            <Card
              title="Trucking Service"
              benefit={benefitTruckingService}
              content={
                <p>
                  Jenis armada yang dapat kami sediakan adalah :
                  <p>
                    • Pick Up Grand Max Bak terbuka </p>• CDE Box (Roda 4/Truck) dengan daya muat 8 CBM
                  <p>• CDD Bak terbuka / Box (Roda 6/Truck) dengan daya muat 15 CBM</p> <p>• Fuso Bak Terbuka (Roda 6/Truck) dengan daya muat 25 CBM</p>
                </p>
              }
            />
          </div>
        </div>
      }
    />
  )
};
