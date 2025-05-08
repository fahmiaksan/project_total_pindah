export default function ContentHome() {
  return (
    <div className="my-24 flex-col md:flex-row flex w-full">
      <div className="bg-[#F2EE6F] w-full md:w-1/2">
        <div className="flex px-14 flex-col gap-10 py-36">
          <div className="flex flex-col flex-1">
            <p className="text-black text-3xl font-bold">
              Praktis, Cepat -
              Solusi Pindahan Tanpa Beban!
            </p>
          </div>
          <div className="space-y-3 w-max">
            <div >
              <p className="font-bold text-center rounded-xl text-white bg-[#005CB5] px-4 py-2">TOTAL PINDAH</p>
            </div>
            <p className="italic font-bold text-black">Jasa Pindahan Terbaik</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full relative">
        <img src={"/content.png"} alt="Logo" width={400} height={400} className="w-full h-full object-cover " />
      </div>
    </div>
  )
};
