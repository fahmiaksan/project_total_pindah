import Carousel from "../../components/Atoms/Carousel";
import Layout from "../../Layout";

export default function PindahanKantor() {
  const images = [
    "/pagination.jpg",
    "/pagination-1.jpg",
    "/pagination.jpg",
    "/pagination-1.jpg", "/pagination.jpg",
    "/pagination-1.jpg",
  ];
  return (
    <Layout
      titleHeader="Jasa Pindahan Kantor"
      contentHeader="Kantor (serapan dari bahasa Belanda kantoor, yang diturunkan dari bahasa Prancis comptoir) adalah sebutan untuk tempat yang digunakan untuk perniagaan atau perusahaan yang dijalankan secara rutin. Kantor bisa hanya berupa suatu kamar atau ruangan kecil maupun bangunan bertingkat tinggi. Kantor sering dibagi kepada dua jenis; kantor yang terbesar dan terpenting biasanya dijadikan kantor pusat, sedangkan kantor-kantor lainnya dinamakan kantor cabang."
      content={
        <Carousel
          images={images}
        />
      }
    />
  )
};
