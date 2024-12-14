import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function SideContact() {
  const data = [
    {
      icons: <FaWhatsapp size={30} className="text-white" />,
      link: "https://wa.me/6281286666666"
    }
    ,
    {
      icons: <FaWhatsapp size={30} className="text-white" />,
      link: "https://wa.me/6281286666666"
    },
    {
      icons: <FaPhoneAlt size={30} className="text-white px-1 py-1" />,
      link: "https://wa.me/6281286666666"
    }
  ]
  return (
    <div className="pl-2 h-screen flex flex-col justify-center space-y-5 z-50 fixed ">
      {
        data.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="bg-[#005CB5] px-2 py-2 rounded-full">
            {item.icons}
          </a>
        ))
      }
    </div>
  )
};
