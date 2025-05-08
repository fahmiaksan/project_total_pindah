import PindahanKantorComponent from "../../components/Layanan/PindahanKantor/Page";

export default function PindahanKantorPage() {
  const images = [
    "/pagination.jpg",
    "/pagination-1.jpg",
    "/pagination.jpg",
    "/pagination-1.jpg", "/pagination.jpg",
    "/pagination-1.jpg",
  ];
  return (
    <PindahanKantorComponent images={images} />
  )
};
