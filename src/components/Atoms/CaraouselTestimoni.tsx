/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Key } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface CarouselProps {
  data: {
    author: any,
    ratings: any,
    reviews: any,
  };
}

interface Arrow {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow = (props: Arrow) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-800 text-white rounded-full flex items-center justify-center`}
      style={{ ...style, display: "block", right: "10px", zIndex: 2 }}
      onClick={onClick}
    >
      ❯
    </div>
  );
};

const PrevArrow = (props: Arrow) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-800 text-white rounded-full flex items-center justify-center`}
      style={{ ...style, display: "block", left: "10px", zIndex: 2 }}
      onClick={onClick}
    >
      ❮
    </div>
  );
};

const CarouselTestimoni: React.FC<CarouselProps> = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    swipe: true,
    touchMove: true,
    arrows: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

    ]
  };

  return (
    <div className="flex h-max w-full">
      <Slider {...settings} className="w-full">
        {data.author.map((_nameItem: any, index: Key | null | undefined) => (
          <div
            key={index}
            className="flex col-span-3 flex-col w-full pt-10 space-y-4 items-center p-4 mb-4 bg-white"
          >
            <div className=" flex flex-col h-[250px] items-center">
              <p className="text-yellow-500 ">
                {
                  data.ratings[Number(index)]?.rating === "5" ? "⭐⭐⭐⭐⭐" : data.ratings[Number(index)]?.rating === "4" ? "⭐⭐⭐⭐" : data.ratings[Number(index)]?.rating === "3" ? "⭐⭐⭐" : data.ratings[Number(index)]?.rating === "2" ? "⭐⭐" : data.ratings[Number(index)]?.rating === "1" && "⭐"

                }
              </p>
              <p className="mt-2 text-gray-700 leading-relaxed text-center">
                "{data.reviews[Number(index)]?.review}"
              </p>
            </div>
            <h2 className="text-xl text-center font-semibold">{_nameItem.name}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselTestimoni;