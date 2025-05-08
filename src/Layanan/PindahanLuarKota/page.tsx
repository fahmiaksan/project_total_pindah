import PindahanLuarKotaComponent from "../../components/Layanan/PindahanLuarKota/Page";

export default function PindahanLuarKotaPage() {
  const benefitFullService = [
    "Survey, Packing",
    "Loading",
    "Trucking",
    "Unloading",
    "Unpacking",
    "Penataan Kembali di Lokasi Tujuan",
  ];
  const benefitMiddleService = [
    "Survey, Packing",
    "Loading",
    "Trucking",
    "Unloading",
    "Unpacking",
  ];
  const benefitTruckingService = [
    "Loading",
    "Trucking",
    "Unloading",
  ]
  return (
    <PindahanLuarKotaComponent benefitFullService={benefitFullService} benefitMiddleService={benefitMiddleService} benefitTruckingService={benefitTruckingService} />
  )
};
