interface Props {
  content: string[]
}
export default function Visi_Misi(props: Props) {
  const content = props.content;
  return (
    <div className="mt-32">
      <p className="text-4xl font-medium tracking-widest text-center">
        VISI & MISI
      </p>
      <div className="flex space-x-6 flex-col md:flex-row justify-between mt-10">
        <div className="flex pb-10 md:pb-0 mb-10 md:mb-0 md:border-r-4 md:border-b-0 border-b-4 border-black px-32 md:border-black flex-col space-y-11 ">
          <p className="text-3xl text-center font-bold">VISI</p>
          <p className="leading-8 tracking-widest">
            Menjadi perusahaan pelayanan jasa pindah rumah, apartment, kantor yang terpercaya, tercepat, dan berintegritas tinggi
          </p>
        </div>
        <div className="flex px-32 flex-col space-y-11">
          <p className="text-3xl font-bold">MISI</p>
          <div>
            {
              content.map((item, index) => (
                <p key={index} className="leading-6 tracking-widest">
                  {item}
                </p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};
