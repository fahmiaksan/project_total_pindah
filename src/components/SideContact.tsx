import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function SideContact() {
  const data = [
    {
      icons: <FaWhatsapp size={30} className="text-white" />,
      link: "https://wa.me/6281286666666",
      name: "Whatsapp Rizal"
    },
    {
      icons: <FaWhatsapp size={30} className="text-white" />,
      link: "https://wa.me/6281286666666",
      name: "Whatsapp Siti"
    },
    {
      icons: <FaPhoneAlt size={30} className="text-white p-1" />,
      link: "https://wa.me/6281286666666",
      name: "Pindahan Luar Kota"
    },
  ];

  return (
    <div className="pl-2 h-screen flex flex-col justify-center space-y-5 z-20 fixed">
      {data.map((item, index) => (
        <div key={index} className="group flex items-center space-x-2 relative">
          {/* Icon Button */}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#005CB5] px-2 py-2 rounded-full flex justify-center items-center"
          >
            {item.icons}
          </a>
          {/* Hover Text with Triangle */}
          <div className="absolute left-14 w-max opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span className="relative bg-yellow-400 text-black font-medium px-3 py-2 rounded-md shadow-md">
              {item.name}
              {/* Segitiga Kiri */}
              <span className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 
                border-t-[8px] border-t-transparent 
                border-r-[8px] border-r-yellow-400 
                border-b-[8px] border-b-transparent">
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
