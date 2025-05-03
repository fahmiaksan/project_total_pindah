import React from "react";
import { TiTick } from "react-icons/ti";

interface Props {
  title: string;
  benefit?: string[];
  content: string | React.ReactNode;
  height?: string;
  width?: string;
}

const Card: React.FC<Props> = ({ title, benefit, content, height, width }) => {
  return (
    <div className={`
      bg-white 
      rounded-lg 
      overflow-hidden 
      shadow-md 
      hover:shadow-xl 
      transition-shadow 
      duration-300
      ${width ? width : "w-full md:w-1/3"} 
    `}>
      <h2 className={`
        text-xl font-bold text-gray-900
        p-6
        border-b border-gray-100
      `}>
        {title}
      </h2>

      <div className={`
        p-6
        ${height ? height : "min-h-[250px]"}
      `}>
        {benefit && (
          <div className="space-y-4 mb-6">
            {benefit.map((item, index) => (
              <p key={index} className="flex items-center text-sm text-gray-600">
                <TiTick className="mr-2 flex-shrink-0 text-green-600" size={20} />
                <span>{item}</span>
              </p>
            ))}
          </div>
        )}

        <div className={`
          text-gray-600
          leading-relaxed 
          ${benefit ? "mt-4" : ""}
        `}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Card;