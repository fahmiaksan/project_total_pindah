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
  ]
  return (
    <Layout
      titleHeader="Harga Layanan"
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
          flex_direction="flex-col-reverse"
          benefit={
            benefit
          }
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

  )
}