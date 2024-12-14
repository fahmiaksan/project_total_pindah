import SmallCard from "../components/Atoms/SmallCard";
import Layout from "../Layout";

export default function MaterialPage() {
  const contentSmallCard: {
    title: string;
    size: string;
    price: string;
    background: string;
  }[] = [
      {
        title: "Kecil",
        size: "48 X 45 X 36",
        price: "20.000",
        background: "#F2EE6F",
      },
      {
        title: "Sedang",
        size: "50 X 50 X 50",
        price: "25,000",
        background: "#A90000",
      },
      {
        title: "Besar",
        size: "50 X 50 X 76",
        price: "30,000",
        background: "#005CB5",
      },
      {
        title: 'Besar Eks Tupperware',
        size: "59 x 39 x 50",
        price: "18,000",
        background: "#08202b",
      }

    ]
  return (
    <Layout
      spacing="space-y-0"
      titleHeader="Material"
      contentHeader={
        <p>
          TotalPindah Menyediakan Carton box atau kardus dengan kualitas terbaik, untuk keperluan penyimpanan atau pengiriman barang anda.
          <br />
          Harga karton yang kami sediakan :
        </p>
      }
      background="bg-white"
      content={
        <>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            <SmallCard
              data={contentSmallCard}
            />
          </div>
          <p className="leading-9">
            Namun kami lebih menyarankan kepada para customer kami untuk lebih menggunakan karton bekas layak pakai yang baru sekali digunakan untuk pengepakan barang pabrikasi Pertanyaan mengenai mengapa sebaiknya tidak menggunakan kardus baru termasuk pertanyaan yang paling sering diajukan kepada timJakarta moving. Selain harganya yang relative jauh lebih murah Kami juga hanya berusaha semaksimal mungkin menerapkan prinsip 'kurangi, pakai ulang & daur ulang' termasuk dalam sistem pengepakan. Dengan selektif kami menguji kardus bekas layak pakai baik dari segi kebersihan maupun kekuatannya yang akan kami gunakan maupun yang akan kami jual. Bagaimana caranya ? kami melihat tampilan keseluruhannya apakah ada sambungan kardus yang terlepas dan menekan ujung kardus ketika dalam keadaan kosong, Tidak takut kardusnya remuk ? Sama sekali tidak ! Kardus yang kami gunakan hanyalah yang dua lapis. Dengan begitu dalam keadaan kosong sekailpun kardus tidak akan amblas menghadapi tindihan.
            <br />
            <br />
            Memproduksi kardus baru sesungguhnya menjadi kurang bijak di tengah kondisi alam indonesia yang terus digerus untuk kebutuhan industri. Demikian juga untuk pembungkus lemari dan barang barang besar lainnya, kami menggunakan karton roll dari pabrik yang sesungguhnya juga hasil dari daur ulang kardus kardus bekas namun khusus untuk material plastic kami terpaksa menggunakan material yang 100 % baru mengingat dampak kesehatan bagi kulit dan pernafasan bagi kami dan customer kami apabila kami menggunakan plastic daur ulang untuk membungkus barang barang tertentu
            <br />
            <br />
            <strong>Bagaimana dengan kasur?</strong><br />
            Pertama kami akan kemas kasur dengan plastic yang 100% baru kemudian akan kmi lapis dengan selimut besar supaya terjamin kebersihannya setelah itu Kami akan memakai kardus untuk menghindari kerusakan pada saat pengangkutan, kami juga membuat tas besar seukuran kasur dari terpal yang tebal sehingga kasur tetap bersih ketika dipindahkan <br /> <br />
            <strong>Apakah menyediakan kertas pembungkus?</strong><br />
            Untuk pecah belah kami menggunakan kertas koran yang masih polos sehingga sebenarnya kertas tersebut adalah kertas daur ulang dan tanpa pemutih.
          </p>
        </>
      }

      padding="px-0 py-9"
    />
  )
};
