import ProfileIcons from "../components/Atoms/ProfileIcons";
import Map from "../components/Map/Map";
import Layout from "../Layout";

export default function KontakPage() {
  const data = [
    {
      image: "./profile-icon-1.png",
      text: 'Rizal',
      link: "https://wa.me/6281286666666"
    },
    {
      image: "./profile-icon-2.png",
      text: 'siti',
      link: "https://wa.me/6281286666666"

    },
    {
      image: "./profile-icon-3.png",
      text: 'Rulli',
      link: "https://wa.me/6281286666666"

    },
    {
      image: "./profile-icon-4.png",
      text: 'Office',
      link: "https://wa.me/6281286666666"

    }
  ]
  return (
    <Layout
      titleHeader="Kontak"
      grid="grid md:grid-cols-3 grid-cols-2 gap-9 place-items-center"
      padding="px-0 py-9"
      contentHeader={
        <>
          <div className="col-span-2 w-full">
            <Map />
          </div>
          <p className="bg-[#F2EE6F] col-span-2 md:col-span-1 rounded-tr-xl rounded-bl-xl h-max px-3 py-11">
            Jl. Manggarai Utara VI No.F10, RT.8/RW.1, Manggarai, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12850
          </p>
        </>
      }
      background="bg-white"
      content={
        <ProfileIcons
          data={data}
        />
      }
    />
  )
};
