import React from "react";

interface Props {
  image: string;
  icon: React.ReactNode;
  content: string;
}
export default function Donwload(props: Props) {
  const { image, icon, content } = props;
  return (
    <div className="flex flex-wrap space-y-10  justify-center md:space-x-24 md:justify-center items-center  mt-32">
      <img src={image} alt="Logo" width={500} height={500} className="object-cover rounded-md" />
      <div className="bg-[#A90000] h-max flex rounded-xl items-center w-max px-5 py-2 text-white">
        {icon}


        <a href="">
          {content}
        </a>
      </div>
    </div>
  )
};
