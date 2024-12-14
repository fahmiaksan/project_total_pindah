import { FaFacebook, FaClock, FaWhatsapp, FaPhone, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const data = [
    {
      title: 'Jl. Manggarai Utara VI No.F10, RT.8/RW.1, Manggarai, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12850',
      icon: <FaMapMarkerAlt className="text-white md:text-6xl text-4xl" />
    },
    {
      title: '021 2784-4948',
      icon: <FaPhone size={30} className="text-white text-xl" />
    },
    {
      title: '0812-1008-6633 / 0812-9008-1625',
      icon: <FaWhatsapp size={30} className="text-white text-xl" />
    },

    {
      title: 'Senin - Minggu, 07.00 - 21.00 WIB',
      icon: <FaClock size={30} className="text-white text-xl" />
    },
  ]
  return (
    <div className="bg-[#005CB5] flex-col md:flex-row px-14 flex-1 py-8 text-white gap-6 flex justify-center items-center">
      <div className="flex flex-col space-y-7">
        <strong className="font-bold ">Tentang Kami</strong>
        <p className="leading-7">Dengan berbekal pengalaman lebih dari 5 tahun dibidang Jasa Pindahan Rumah & Apartemen (Residential) maupunJasa Pindahan Kantor, kami selalu berusaha meningkatkan kualitas layanan dan kinerja perusahaan guna mewujudkan misi kami: Menjadi perusahaan nasional terbaik sebagai penyedia jasa pindahan terpercaya dengan harga Murah.</p>
        <div className="flex space-x-4">
          <FaFacebook className="text-xl text-white" />
          <FaInstagram className="text-xl text-white" />
          <FaTwitter className="text-xl text-white" />
          <FaLinkedin className="text-xl text-white" />
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          {
            data.map((item, index) => (
              <div key={index} className="flex items-center space-x-5 py-4 border-b border-b-white">
                {item.icon}
                <p className="text-sm">
                  {item.title}
                </p>
              </div>
            ))
          }

        </div>
      </div>
      <div className="flex flex-col space-y-7">
        <div className="border-l-4 pl-5 text-sm  border-l-white">
          <p className="py-3">Harga layanan yang sangat kompetitif dankualitas layanan aman dan cepat berkat dukungan oleh tenaga kerja berpengalaman,terlatih, dan handal serta menjamin keamanan,keselamatan, dan ketepatan waktu dalam melaksanakan semua proses pemindahan dan pengiriman barang.</p>
        </div>
        <div className="border-l-4 pl-5 text-sm border-l-white">
          <p className="py-3">Alat transportasi dan peralatan kerja adalah berkualitas Standar Internasional yang akan menjamin keamanan proses pindahan.</p>
        </div>
      </div>
    </div>
  )
};
