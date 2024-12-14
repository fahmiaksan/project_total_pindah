import { GoDownload } from "react-icons/go";
import Jumbotron from "../components/Profile/Jumbotron";
import Content from "../components/Profile/Content";
import Visi_Misi from "../components/Profile/Visi_Misi";
import Donwload from "../components/Profile/Donwload";

export default function Profile() {
  const content_misi = [
    "1. Memberikan pelayanan yang terbaik kepada penggunajasa",
    "2. Menghormati dan Menjalin hubungan baik dengan pengguna jasa agar terciptanya kepuasan",
    "3. Memberikan solusi pindah yang baik dan lebih hemat",
    "4. Membangun jaringan kuat yang didukung oleh SDM yang kompeten didalam bidang nya",
  ]

  const content_1 = "Jasa layanan pindahan ini merupakan jasa yang melayani jasa pindah rumah, kantor, apartement, yang melayani ke antar kota dan keseluruh Indonesia dengan harga yang kompetitif namun tetap memiliki standar keselamatan dan keamanan pemindahan barang - barang ketempat yang ingin dituju baik didalam kota maupun diluar kota.";

  const content_2 = "Pelaksanaan layanan sangat professional mulai dari pembongkaran, pengepakan, muat, pengiriman, hingga penataan barang kembali dilokasi yang baru."
  return (
    <div className="my-28 px-14">
      {
        <Jumbotron images={"/profile.png"} />
      }
      {
        <Content
          content_1={content_1}
          content_2={content_2}
        />
      }
      {
        <Visi_Misi
          content={content_misi}
        />
      }
      {
        <Donwload
          image="/company-profile.png"
          icon={<GoDownload className="mr-2 text-white" />}
          content="Download PDF Company Profile"
        />
      }
    </div>
  )
};
