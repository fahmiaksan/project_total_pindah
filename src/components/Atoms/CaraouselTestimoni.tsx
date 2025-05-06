/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Key } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface Props {
  data: {
    author: string[];
    ratings: number[];
    reviews: string[];
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

export default function CarouselTestimoni(props: Props) {
  const { data } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {data.author.map((author, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-lg shadow-md p-6 min-h-[300px] flex flex-col">
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(data.ratings[index])].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Review Text */}
              <div className="flex-grow">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  "{data.reviews[index]}"
                </p>
              </div>

              {/* Author Name */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-800 text-center">
                  {author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}