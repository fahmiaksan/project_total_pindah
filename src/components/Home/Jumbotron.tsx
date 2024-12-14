import { FaBuilding, FaHome, FaWarehouse } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Jumbotron() {
  return (
    <div className="flex md:flex-row items-center justify-between space-y-10 md:space-y-0 flex-1 flex-col px-14 slg:flex-row pt-14">
      <div className="flex w-full flex-col  gap-10 ">
        <div className="px-5 w-max py-2 text-white bg-[#005CB5]">
          Selamat Datang di totalpindah.com
        </div>
        <div className="text-base space-y-7 text-left">
          <p className="font-bold text-3xl ">
            Yuk, Kenalan dulu
          </p>
          <p>
            Jasa layanan pindahan ini merupakan jasa yang melayani jasa pindah rumah, kantor, apartement, yang melayani ke antar kota dan keseluruh Indonesia dengan harga yang kompetitif namun tetap memiliki standar keselamatan dan keamanan pemindahan barang – barang ketempat yang ingin dituju baik didalam kota maupun diluar kota
          </p>
        </div>
        <div className="w-max">
          <div className="pl-5 pr-24 flex items-center justify-between rounded-full relative py-2 text-white bg-[#005CB5]">
            <p>
              Lihat Company Profile
            </p>
            <div className="bg-[#A90000] absolute h-full px-3 right-0 flex items-center rounded-full">
              <IoIosArrowForward className="" color="white" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:justify-start justify-center md:w-10/12 flex flex-row-reverse items-center md:items-end relative">
        <div className="relative ">
          <img src={"/jumbotron.png"} alt="Logo" className="object-contain " width={250} height={250} />
          <div className="w-36 flex z-50 absolute left-0 bottom-0 text-[#22333B] flex-col h-36 bg-[#F2EE6F] px-3 py-4">
            <FaWarehouse size={30} />
            <p className="pt-2 font-bold text-2xl">
              +150
            </p>
            <p className="text-sm pt-3">
              Pindahan Kantor
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="w-36 flex left-0 bottom-0 text-[#22333B] flex-col h-36 bg-[#F2EE6F] px-3 py-4">
              <FaHome size={30} />
              <p className="pt-2 font-bold text-2xl">
                500+
              </p>
              <p className="text-sm pt-3">
                Pindahan Rumah
              </p>
            </div>
          </div>
          <div className="w-36 flex left-0 bottom-0 text-white flex-col h-36 bg-[#A90000] px-3 py-4">
            <FaBuilding size={30} />
            <p className="pt-2 font-bold text-2xl">
              200+
            </p>
            <p className="text-sm pt-3">
              Pindahan Apartemen
            </p>
          </div>
        </div>

      </div>
    </div>
  )
};