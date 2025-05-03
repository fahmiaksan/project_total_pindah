import { FaBuilding, FaHome, FaWarehouse } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Jumbotron() {
  return (
    <div className="flex md:flex-row items-center justify-between flex-col px-4 sm:px-8 lg:px-14 pt-6 md:pt-14 max-w-7xl mx-auto">
      {/* Left Content */}
      <div className="flex w-full flex-col gap-6 md:gap-10 mb-8 md:mb-0 animate-fadeIn">
        <div className="px-3 sm:px-5 py-2 text-sm sm:text-base text-white bg-gradient-to-r from-[#005CB5] to-[#0070dd] rounded-md w-max transform hover:scale-105 transition-transform duration-300 shadow-md">
          Selamat Datang di totalpindah.com
        </div>
        <div className="text-base space-y-4 md:space-y-7 text-left">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[#22333B] to-[#405965] bg-clip-text text-transparent animate-fadeInUp">
            Yuk, Kenalan dulu
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 animate-fadeInUp delay-200">
            Jasa layanan pindahan ini merupakan jasa yang melayani jasa pindah rumah, kantor, apartement, yang melayani ke antar kota dan keseluruh Indonesia dengan harga yang kompetitif namun tetap memiliki standar keselamatan dan keamanan pemindahan barang – barang ketempat yang ingin dituju baik didalam kota maupun diluar kota
          </p>
        </div>
        {/* CTA Button */}
        <div className="w-full sm:w-max animate-fadeInUp delay-300">
          <div className="group pl-4 sm:pl-5 pr-16 sm:pr-24 flex items-center justify-between rounded-full relative py-3 text-white bg-gradient-to-r from-[#005CB5] to-[#0070dd] hover:from-[#0070dd] hover:to-[#005CB5] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            <Link to="/profile" className="text-sm sm:text-base whitespace-nowrap">
              Lihat Company Profile
            </Link>
            <div className="bg-gradient-to-r from-[#A90000] to-[#cc0000] absolute h-full px-3 right-0 flex items-center rounded-full group-hover:from-[#cc0000] group-hover:to-[#A90000] transition-all duration-300">
              <IoIosArrowForward className="text-white group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Stats */}
      <div className="w-full md:w-10/12 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 md:gap-6 animate-fadeIn delay-200">
        {/* Stats Column 1 */}
        <div className="flex flex-col gap-4">
          <div className="w-32 sm:w-36 flex text-[#22333B] flex-col h-32 sm:h-36 bg-gradient-to-br from-[#F2EE6F] to-[#f0ec4d] px-3 py-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <FaHome size={24} className="sm:text-3xl group-hover:scale-110 transition-transform duration-300" />
            <p className="pt-2 font-bold text-xl sm:text-2xl group-hover:text-[#005CB5] transition-colors duration-300">500+</p>
            <p className="text-xs sm:text-sm pt-2 sm:pt-3">Pindahan Rumah</p>
          </div>
          <div className="w-32 sm:w-36 flex text-white flex-col h-32 sm:h-36 bg-gradient-to-br from-[#A90000] to-[#cc0000] px-3 py-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <FaBuilding size={24} className="sm:text-3xl group-hover:scale-110 transition-transform duration-300" />
            <p className="pt-2 font-bold text-xl sm:text-2xl">200+</p>
            <p className="text-xs sm:text-sm pt-2 sm:pt-3">Pindahan Apartemen</p>
          </div>
        </div>

        {/* Stats Column 2 with Image */}
        <div className="relative animate-fadeInRight">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-yellow-500/20 rounded-lg filter blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-70"></div>
            <img
              src="/jumbotron.png"
              alt="Jasa Pindahan Professional"
              className="object-contain w-[200px] sm:w-[250px] h-auto relative z-10 transform group-hover:scale-105 transition-transform duration-300"
              width={250}
              height={250}
              loading="lazy"
            />
          </div>
          <div className="w-32 sm:w-36 flex z-10 absolute left-0 bottom-0 text-[#22333B] flex-col h-32 sm:h-36 bg-gradient-to-br from-[#F2EE6F] to-[#f0ec4d] px-3 py-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <FaWarehouse size={24} className="sm:text-3xl group-hover:scale-110 transition-transform duration-300" />
            <p className="pt-2 font-bold text-xl sm:text-2xl group-hover:text-[#005CB5] transition-colors duration-300">150+</p>
            <p className="text-xs sm:text-sm pt-2 sm:pt-3">Pindahan Kantor</p>
          </div>
        </div>
      </div>
    </div>
  );
};