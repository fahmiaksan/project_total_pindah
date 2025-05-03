import { FaWhatsapp, FaPhoneAlt, FaPlus, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function SideContact() {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    {
      icons: <FaWhatsapp size={30} className="text-white" />,
      link: "https://wa.me/6281210086633",
      name: "Whatsapp Rizal"
    },
    {
      icons: <FaWhatsapp size={30} className="text-white" />,
      link: "https://wa.me/6281290081625",
      name: "Whatsapp Siti"
    },
    {
      icons: <FaPhoneAlt size={30} className="text-white p-1" />,
      link: "https://wa.me/6281316346902",
      name: "Pindahan Luar Kota"
    },
  ];

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:flex pl-2 h-screen flex-col justify-center space-y-5 z-20 fixed">
        {data.map((item, index) => (
          <div key={index} className="group flex items-center space-x-2 relative">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#005CB5] px-2 py-2 rounded-full flex justify-center items-center hover:bg-[#0070dd] transition-colors"
            >
              {item.icons}
            </a>
            <div className="absolute left-14 w-max opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="relative bg-yellow-400 text-black font-medium px-3 py-2 rounded-md shadow-md">
                {item.name}
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

      {/* Mobile Version */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            bg-[#005CB5] w-14 h-14 rounded-full flex items-center justify-center shadow-lg
            hover:bg-[#0070dd] transition-all duration-300
            ${isOpen ? 'rotate-45 transform' : ''}
          `}
        >
          {isOpen ? <FaTimes size={24} className="text-white" /> : <FaPlus size={24} className="text-white" />}
        </button>

        {/* Contact Buttons */}
        <div className={`
          absolute bottom-16 right-0
          flex flex-col items-end space-y-3
          transition-all duration-300 origin-bottom-right
          ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        `}>
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="bg-yellow-400 text-black text-sm px-3 py-2 rounded-lg shadow-md">
                {item.name}
              </span>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#005CB5] w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-[#0070dd] transition-colors"
              >
                {item.icons}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
