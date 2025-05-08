import MaterialPageComponent from "../components/Material/Page";

export default function MaterialPage() {
  const contentSmallCard: {
    title: string;
    size: string;
    price: string;
    background: string;
  }[] = [
      {
        title: "Kecil",
        size: "48 X 45 X 36",
        price: "20.000",
        background: "bg-[#F2EE6F]",
      },
      {
        title: "Sedang",
        size: "50 X 50 X 50",
        price: "25,000",
        background: "bg-[#A90000]",
      },
      {
        title: "Besar",
        size: "50 X 50 X 76",
        price: "30,000",
        background: "bg-[#005CB5]",
      },
      {
        title: 'Besar Eks Tupperware',
        size: "59 x 39 x 50",
        price: "18,000",
        background: "bg-[#3E5879]",
      }

    ]
  return (
    <MaterialPageComponent contentSmallCard={contentSmallCard} />
  )
};
