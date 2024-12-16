import { useParams } from "react-router-dom";
import { dataArtikel } from "../utils";
import Layout from "../../Layout";
export default function ArtikelDetailPage() {
  const { id } = useParams();
  const artikel = dataArtikel.find((item) => item.id === parseInt(id));
  if (!artikel) {
    return <p className="text-center mt-4">Artikel tidak ditemukan.</p>;
  }
  return (
    <Layout
      background="bg-white"
      content={
        <div>
          <img src={artikel.image} className="w-full object-cover" alt={artikel.content} />
          {
            parseInt(id) === 2 ? (
              <>
                <p className="text-5xl pt-20 mb-10 tracking-wider  font-bold">Tips dan Trik Memilih Jasa Angkut Rumah yang Tepat</p>
                <div className="space-y-5 leading-7">
                  <p>Memilih jasa angkut rumah yang tepat adalah kunci keberhasilan pindahan Anda. Dengan memilih perusahaan yang tepat, Anda dapat memastikan barang-barang Anda aman sampai tujuan dan proses pindahan berjalan lancar. Namun, dengan banyaknya pilihan jasa angkut yang tersedia, memilih satu yang tepat bisa menjadi tugas yang membingungkan. Berikut beberapa tips dan trik yang dapat Anda gunakan untuk membantu Anda memilih jasa angkut rumah yang tepat:</p>
                  <p><strong>Pertama,</strong> lakukan riset yang menyeluruh. Cari tahu reputasi perusahaan melalui ulasan pelanggan, baik di situs web mereka maupun di platform ulasan online. Perhatikan juga pengalaman perusahaan dalam menangani berbagai jenis pindahan, baik itu pindahan rumah, apartemen, atau kantor. Selain itu, jangan ragu untuk meminta rekomendasi dari teman atau keluarga yang pernah menggunakan jasa angkut sebelumnya.</p>
                  <p><strong>Kedua,</strong> bandingkan harga dan layanan yang ditawarkan. Setiap perusahaan jasa angkut biasanya memiliki paket layanan yang berbeda-beda dengan harga yang bervariasi. Bandingkan harga dari beberapa perusahaan dan pastikan Anda memahami apa yang termasuk dalam setiap paket. Selain harga, perhatikan juga layanan tambahan yang ditawarkan, seperti asuransi pengiriman, pengemasan barang, dan bongkar muat.</p>
                  <p><strong>Terakhir,</strong> pastikan perusahaan memiliki izin operasional dan asuransi. Sebuah perusahaan jasa angkut yang terpercaya pasti memiliki izin operasional yang sah dan asuransi untuk melindungi barang-barang Anda selama proses pengiriman. Dengan adanya asuransi, Anda tidak perlu khawatir jika terjadi kerusakan atau kehilangan barang selama dalam perjalanan.</p>
                  <p>Dengan mengikuti tips-tips di atas, Anda dapat memilih jasa angkut rumah yang tepat dan memastikan pindahan Anda berjalan lancar tanpa hambatan.</p>
                </div>
              </>) : (
              <>
                <p className="text-5xl pt-20 mb-10 tracking-wider  font-bold">Pindahan Rumah Tanpa Ribet? Serahkan pada Kami!
                </p>
                <div className="space-y-5 leading-7">
                  <p>Pindahan rumah seringkali menjadi momen yang melelahkan dan merepotkan. Namun, dengan layanan jasa angkut profesional, proses pindahan Anda bisa menjadi jauh lebih mudah dan lancar. Kami memahami bahwa memindahkan seluruh barang dari satu tempat ke tempat lain bukanlah tugas yang sederhana. Mulai dari perencanaan, pengemasan, hingga pemindahan barang memerlukan waktu, tenaga, dan keahlian khusus. Jika tidak ditangani dengan benar, pindahan rumah bisa menjadi sumber stres yang tidak diinginkan. Oleh karena itu, mempercayakan proses pindahan kepada jasa angkut profesional adalah solusi yang tepat untuk Anda.</p>
                  <p>Kenapa Harus Menggunakan Jasa Angkut Profesional?</p>
                  <p>
                    <strong>1. Hemat Waktu dan Tenaga</strong><br />
                  </p>
                  <p>
                    Mengemas barang satu per satu, memindahkannya, dan membawanya ke lokasi tujuan membutuhkan banyak waktu dan tenaga. Jika Anda melakukan semuanya sendiri, ada risiko kelelahan dan kurangnya efisiensi. Dengan bantuan jasa angkut profesional, tim berpengalaman akan membantu Anda mengemas, memuat, dan mengangkut barang dengan cepat. Anda hanya perlu memantau prosesnya tanpa perlu khawatir bekerja terlalu keras.</p>
                  <p>
                    <strong>2. Keamanan Barang Terjamin
                    </strong>
                  </p>
                  <p>Salah satu kekhawatiran terbesar saat pindahan adalah keamanan barang-barang Anda, terutama barang berharga atau rentan rusak seperti perabotan, barang elektronik, dan barang pecah belah. Layanan jasa angkut profesional menggunakan teknik pengemasan yang aman dan peralatan khusus untuk memastikan barang Anda tetap dalam kondisi sempurna selama proses pengiriman. Tidak hanya itu, perusahaan terpercaya biasanya menyediakan asuransi yang akan melindungi barang Anda jika terjadi kerusakan atau kehilangan.</p>
                  <p>
                    <strong>3. Peralatan Lengkap dan Tim Berpengalaman</strong>
                  </p>
                  <p>Jasa angkut profesional memiliki peralatan lengkap, seperti kendaraan khusus angkut, alat bantu pengangkutan, dan material pengemasan berkualitas. Selain itu, tim yang berpengalaman tahu cara menangani berbagai jenis barang, mulai dari barang besar dan berat hingga barang kecil yang memerlukan perlakuan khusus. Keahlian mereka membuat proses pindahan menjadi lebih cepat dan efisien.</p>
                </div>
              </>
            )
          }
        </div>
      }
    />
  )
};
