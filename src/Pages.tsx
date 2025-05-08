import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideContact from "./components/Atoms/SideContact";
import Footer from "./components/Footer";
import ProfilePage from "./Profile/Page";
import PindahanRumahPage from "./Layanan/PindahanRumah/Page";
import PindahanApartmenPage from "./Layanan/PindahanApartment/Page";
import PindahanKantorPage from "./Layanan/PindahanKantor/Page";
import PindahanLuarKotaPage from "./Layanan/PindahanLuarKota/Page";
import HargaPage from "./Harga/Page";
import MaterialPage from "./Material/Page";
import GaleriPage from "./Galeri/Page";
import { useEffect, useState } from "react";
import KontakPage from "./Kontak/Page";
import TestimoniPage from "./Testimoni/Page";
import ArtikelPage from "./Artikel/Page";
import ArtikelDetailPage from "./Artikel/ArtikelDetail/Page";
import PanduanMemilihJasaPindahan from "./articles/PanduanMemilihJasaPindahan";
import NotFound from './NotFound';
import HomePage from "./Home/Page";

export default function Pages() {
  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/beranda', element: <HomePage /> },
    { path: '/profile', element: <ProfilePage /> },
    { path: '/jasa-pindahan-rumah', element: <PindahanRumahPage /> },
    { path: '/jasa-pindahan-apartemen', element: <PindahanApartmenPage /> },
    { path: '/jasa-pindahan-kantor', element: <PindahanKantorPage /> },
    { path: '/jasa-pindahan-luar-kota-dan-antar-pulau', element: <PindahanLuarKotaPage /> },
    { path: '/harga', element: <HargaPage /> },
    { path: '/material', element: <MaterialPage /> },
    { path: '/galeri', element: <GaleriPage /> },
    { path: '/kontak', element: <KontakPage /> },
    { path: '/testimoni', element: <TestimoniPage /> },
    { path: '/artikel', element: <ArtikelPage /> },
    { path: '/artikel/:id', element: <ArtikelDetailPage /> },
    { path: '/artikel/panduan-memilih-jasa-pindahan', element: <PanduanMemilihJasaPindahan /> },
    { path: '*', element: <NotFound /> },
  ];
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  return (
    loading ? (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
        </div>
      </div>
    ) :
      (
        <>
          <SideContact />
          <Header />
          <BrowserRouter>
            <Routes>
              {
                routes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))
              }
            </Routes>
          </BrowserRouter>
          <Footer />
        </>
      )
  )
};
