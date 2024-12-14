import Card from "../../components/Atoms/Card";
import Layout from "../../Layout";

export default function PindahanRumah() {
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
  ]
  return (
    <Layout
      titleHeader="Jasa Pindahan Rumah Profesional"
      contentHeader={
        <p>
          "Total Pindah hadir untuk memberi kemudahan jasa layanan pindahan yang akan membantu anda sehingga pindahan rumah, apartemen dan kost menjadi terasa mudah dan menyenangkan. karena kami mengerti betapa waktu begitu berharga bagi anda untuk itu kami menawarkan jasa Pindahan yang meliputi Survey, Packing, Loading, Trucking, Unloading, Unpacking, dan penataan kembali dilokasi tujuan. anda cukup menghubungi kami dan kami akan mengurus segala kerepotan pindahan bagi anda
          <p>
            Lingkup layanan jasa pindahan kami :
          </p>
          <p>
            • Pindahan rumah
          </p>
          <p>
            •  Pindahan apartemen
          </p>
          <p>
            •  Pindahan Ke Kost
          </p>
          <p>
            • Pindahan Antar Kota ke Seluruh Indonesia
          </p>
          <p>
            • Pindahan Ke Malaysia dan Singapura"
          </p>
        </p>
      }
      content={
        <div className="space-y-14">
          <p className="mb-14 tracking-widest">Tersedia Pilihan Paket:</p>
          <div className="flex flex-col flex-1 items-center md:items-start gap-9 md:flex-row justify-center">
            <Card
              benefit={benefitFullServicePackage}
              content={
                <p>
                  Kami menyediakan layanan pindahan yang{" "}
                  <strong className="font-bold text-[#0C142E]">cepat, aman,</strong> dan{" "}
                  <strong className="font-bold text-[#0C142E]">terjangkau.</strong> Dengan paket ini, Anda dapat menikmati pengalaman pindahan{" "}
                  <strong className="font-bold text-[#0C142E]">tanpa ribet, </strong>
                  karena kami akan mengurus segalanya untuk Anda. Hubungi kami sekarang untuk solusi pindahan terbaik!
                </p>

              }
              title="Paket Full Service" />
            <Card
              title="Paket Bisnis"
              content="Kami menyediakan layanan pindahan dari lokasi lama lokasi yang baru anda bisa menata sendiri sesuai keinginan dan waktu luang anda kapanpun ingin melakukannya. Hubungi kami sekarang untuk solusi pindahan terbaik!"
              benefit={benefitBisnisPackage}
            />
            <Card
              title="Paket Ekonomi"
              benefit={benefitEconomiPackage}
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
          <div className="text-center leading-9">
            *Syarat dan Ketentuan Pindahan:
            <p>Belum termasuk special handling, langsir dan bad access & Diluar Asuransi</p>
          </div>
        </div>
      }
    />
  )
};
