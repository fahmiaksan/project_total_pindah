import ProfileIcons from "../components/Atoms/ProfileIcons";
import Layout from "../Layout";

export default function KontakPage() {
  const data = [
    {
      image: "./profile-icon-1.png",
      text: 'Rizal',
      link: "https://wa.me/6281210086633"
    },
    {
      image: "./profile-icon-2.png",
      text: 'siti',
      link: "https://wa.me/6281290081625"

    },
    {
      image: "./profile-icon-3.png",
      text: 'Rulli',
      link: "https://wa.me/6281316346902"

    },
    {
      image: "./profile-icon-4.png",
      text: 'Office',
      link: "https://wa.me/6281316346902"

    }
  ]
  return (
    <Layout
      titleHeader="Kontak"
      grid="grid md:grid-cols-3 grid-cols-2 gap-9 place-items-center"
      padding="px-0 py-9"
      contentHeader={
        <>
          <a href="https://www.google.com/maps/place/PT+TOTAL+PINDAH/@-6.2126913,106.8518595,18z/data=!3m1!4b1!4m6!3m5!1s0x2e69f5007849682f:0x97ee44bc061d1fae!8m2!3d-6.212694!4d106.853147!16s%2Fg%2F11vx6q6p4z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="col-span-2 w-full">
            <img src="./map.png" alt="map" className="w-full h-full object-cover" />
          </a>
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
