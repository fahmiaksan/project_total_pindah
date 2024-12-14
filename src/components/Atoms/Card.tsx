import React from "react";
import { TiTick } from "react-icons/ti";
import { useLocation } from "react-router-dom";

interface Props {
  title: string;
  benefit?: string[];
  content: string | React.ReactNode;
  flex_direction?: string;
  height?: string;
  width?: string;
}

const Card: React.FC<Props> = ({ title, flex_direction, benefit, content, height, width }) => {
  const location = useLocation();

  return (
    <div className={`px-10 ${width ? width : "md:w-1/3"} w-full py-6 shadow-2xl rounded-xl  ${location.pathname === '/harga' ? "space-y-0" : "space-y-4"}`}>
      <p className={`text-3xl ${location.pathname === '/harga' && "px-12"} font-bold`}>{title}</p>
      <div className={`flex ${flex_direction ? flex_direction : "flex-col"} ${height ? height : "h-[800px]"} px-12`}>
        {benefit && benefit.map((item, index) => (
          <p key={index} className="flex mb-4 items-center">
            <TiTick className="mr-2" />
            {item}
          </p>
        ))}

        <div className="leading-9 mb-4 tracking-wide break-words">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Card;