import PindahanApartmentComponent from "../../components/Layanan/PindahanApartment/Page";

export default function PindahanApartmenPage() {
  const images = [
    "/pagination.jpg",
    "/pagination-1.jpg",
    "/pagination.jpg",
    "/pagination-1.jpg", "/pagination.jpg",
    "/pagination-1.jpg",
  ];
  return (
    <PindahanApartmentComponent images={images} />
  )
};
