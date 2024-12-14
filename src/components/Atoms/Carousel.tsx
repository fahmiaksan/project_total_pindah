import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface CarouselProps {
  images: string[];
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

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-80 object-cover bg-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;