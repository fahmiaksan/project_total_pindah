'use client';
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavbar from "./Home/MobileNavbar";
import { useState } from "react";


const navbar = [
  'Beranda',
  'Profile',
  'Layanan',
  'Harga',
  'Material',
  'Galeri',
  'Testimoni',
  'Artikel',
  'Kontak',
];

const submenu = [
  'Jasa Pindahan Rumah',
  'Jasa Pindahan Apartemen',
  'Jasa Pindahan Kantor',
  'Jasa Pindahan Luar Kota dan Antar Pulau'
]
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(navbar.length);
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto md:grid md:grid-cols-4 flex justify-between items-center pr-6 md:pr-0 relative">
        {/* Logo */}
        <div className="flex md:pt-10 lg:mt-0 justify-center flex-col items-center text-lg font-bold py-4 pl-6 md:mt-5 lg:pt-0">
          <img src={"/logo.png"} alt="Logo" width={300} height={300} className={"object-contain"} />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:grid col-span-3 space-x-6">
          <div className="bg-[#005CB5] -mt-2 md:w-full md:flex lg:px-10 md:px-5 2xl:space-x-36 lg:space-x-5 md:absolute lg:relative left-0 right-0 items-center justify-between rounded-b-lg md:py-1 lg:py-2 xl:py-3 2xl:py-4">
            <div className="flex items-center space-x-2">
              <IoMdMail className="text-white" />
              <p className="text-white text-sm">
                jasapindahtotal@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-2 border-l pl-10 border-l-white">
              <FaMapMarkerAlt className="text-white" />
              <p className="text-white text-sm">
                Jl. Manggarai Utara VI No.F10, RT.8/RW.1, Manggarai, Kec. Tebet, Kota Jakarta Selatan,
                Daerah Khusus Ibukota Jakarta 12850
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaFacebookF className="text-white" />
              <FaTwitter className="text-white" />
              <FaInstagram className="text-white" />
              <FaLinkedinIn className="text-white" />
            </div>
          </div>
          <div>
            <ul className="flex md:pt-10 items-center flex-wrap lg:justify-normal justify-center md:mt-10 space-x-5 lg:py-6 lg:mt-0 font-medium">
              {
                navbar.map((item: string, index: number): JSX.Element => (
                  <li key={index} className={`text-black ${navbar.length - 1 === index && 'border-r-0'} mb-4 group relative flex cursor-pointer flex-col justify-end items-center md:pb-3 lg:pb-0 border-r border-r-[#D9D9D9] pr-3 text-center text-sm`}>
                    {
                      index !== 2 ? <a key={index} href={`/${item.toLowerCase()}`}>{item}</a>
                        :
                        <div key={index}>{item}</div>
                    }
                    {
                      index === 2 && submenu.map(() => (
                        <div className="absolute z-50 top-full -left-5 shadow-md hidden group-hover:block">
                          {submenu.map((s: string, i: number) => (
                            <div
                              key={i}
                              className="py-2 px-1 hover:text-white bg-[#F2EE6F] hover:bg-[#A90000] cursor-pointer text-sm"
                            >
                              <a href={`/${s.toLowerCase().split(' ').join('-')}`}>{s}</a>
                            </div>
                          ))}
                        </div>
                      ))
                    }
                  </li>
                ))
              }
            </ul>
          </div>
        </nav>

        {/* Hamburger Menu */}
        <div className="md:hidden ">
          <button className="text-gray-700 hover:text-blue-500 py-4">
            <GiHamburgerMenu className="text-3xl" onClick={() => setIsOpen(!isOpen)} />
          </button>
        </div>

      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <MobileNavbar navbar={navbar} />
      )}
    </header>
  );
};



export default Header;
