interface Props {
  images: string
}

export default function Jumbotron(props: Props) {
  const images = props.images;
  return (
    <div className="flex relative flex-col md:flex-row gap-5">
      <div className="text-5xl w-1/3 font-bold">
        <p>PT</p>
        <p>JASA</p>
        <p>PINDAH</p>
        <p>TOTAL</p>
      </div>
      <div className="w-full">
        <img src={images} alt="Logo" width={400} height={400} className="object-cover -z-50 w-full h-full rounded-md" />
      </div>
    </div>
  )
};
