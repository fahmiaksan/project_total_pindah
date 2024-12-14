import Carousel from "../../components/Atoms/Carousel";
import Layout from "../../Layout";

export default function PindahanApartmen() {
  const images = [
    "/pagination.jpg",
    "/pagination-1.jpg",
    "/pagination.jpg",
    "/pagination-1.jpg", "/pagination.jpg",
    "/pagination-1.jpg",
  ];
  return (
    <Layout
      titleHeader="Jasa Pindahan Apartmen"
      contentHeader={
        <>
          <p>
            Apartemen atau rumah pangsa merupakan sebuah jenis tempat tinggal yang hanya mencakup sebagian dari suatu bangunan. KBBI mengartikan apartemen sebagai tempat tinggal (terdiri atas kamar duduk, kamar tidur, kamar mandi, dapur, dan sebagainya) yang berada pada satu lantai bangunan bertingkat yang besar dan mewah, dilengkapi dengan berbagai fasilitas (kolam renang, pusat kebugaran, toko, dan sebagainya). Suatu gedung apartemen dapat memiliki puluhan bahkan ratusan unit apartemen. Istilah apartemen digunakan secara luas di Amerika Utara, sementara istilah flat digunakan di Britania Raya dan negara-negara persemakmuran.
            <p>
              Jumlah apartemen di Indonesia terus naik. Pada 2013 ada 15,068 apartemen baru di Jakarta, 2014 ada 20,889 dan 2015 ada 24,854 apartemen baru di Jakarta.
            </p>
          </p>
        </>
      }
      content={
        <Carousel
          images={images}
        />
      }
    />
  )
};
