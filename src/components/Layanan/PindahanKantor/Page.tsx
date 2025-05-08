import Layout from "../../../Layout";
import Carousel from "../../Atoms/Carousel";

export default function PindahanKantorComponent({ images }: { images: string[] }) {
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
}
