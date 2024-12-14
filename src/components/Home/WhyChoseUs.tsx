
export default function WhyChoseUs() {
  return (
    <div className="px-10 mb-24">
      <div className="text-black text-4xl font-bold">
        Kenapa Harus Total Pindah?
      </div>
      <div className="flex justify-center gap-5 items-center flex-wrap">
        <div className="flex justify-center flex-col items-center">
          <img src={"/hand.png"} alt="Logo" width={400} height={400} />
          <div>
            <p className="text-2xl font-bold ">Tarif Yang Terjangkau</p>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <img src={"/profesional.png"} alt="Logo" width={400} height={400} />
          <div>
            <p className="text-2xl font-bold ">Tim Yang Profesional</p>
          </div>
        </div>
        <div className="flex grid-cols-subgrid justify-center flex-col items-center">
          <img src={"/armada.png"} alt="Logo" width={400} height={400} />
          <div>
            <p className="text-2xl font-bold ">Armada Yang Mumpuni</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-center items-center gap-36 mt-24">
        <div className="flex justify-center flex-col items-center">
          <img src={"/material.png"} alt="Logo" width={400} height={400} />
          <div>
            <p className="text-2xl font-bold align-text-bottom h-max">Beragam Material dan Alat Packing</p>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <img src={"/terpercaya.png"} alt="Logo" width={200} height={200} />
          <div>
            <p className="text-2xl font-bold ">Asuransi Terpercaya</p>
          </div>
        </div>
      </div>
    </div>
  )
};
