import Carousel from "../components/Atoms/Carousel";
import Layout from "../Layout";

export default function GaleriPage() {
  const data = [
    "image-1.png",
    "image-2.png",
    "image-3.png",
    "image-4.png",
    "image-5.png",
    "image-6.png",
    "image-7.png",
    "image-8.png",
    "image-9.png"
  ]

  const images = [
    "/pagination.jpg",
    "/pagination-1.jpg",
    "/pagination.jpg",
    "/pagination-1.jpg", "/pagination.jpg",
    "/pagination-1.jpg",
  ];
  return (
    <Layout
      titleHeader="GALERI"
      background="bg-white"
      contentHeader={
        <div className="grid grid-cols-3 gap-10">
          {
            data.map((item) => (
              <img src={item} alt={item} className="object-cover rounded-xl" />
            ))
          }
        </div>
      }
      padding="px-0 py-9"
      content={
        <Carousel
          images={images}
        />
      }
    />
  )
};
