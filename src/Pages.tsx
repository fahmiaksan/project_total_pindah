import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideContact from "./components/SideContact";
import Footer from "./components/Footer";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import PindahanRumah from "./Layanan/PindahanRumah/Page";
import PindahanApartmen from "./Layanan/PindahanApartment/Page";
import PindahanKantor from "./Layanan/PindahanKantor/Page";
import PindahanLuarKota from "./Layanan/PindahanLuarKota/page";
import HargaPage from "./Harga/Page";
import MaterialPage from "./Material/Page";
import GaleriPage from "./Galeri/Page";
import { useEffect, useState } from "react";

export default function Pages() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/beranda', element: <Home /> },
    { path: '/profile', element: <Profile /> },
    { path: '/jasa-pindahan-rumah', element: <PindahanRumah /> },
    { path: '/jasa-pindahan-apartemen', element: <PindahanApartmen /> },
    { path: '/jasa-pindahan-kantor', element: <PindahanKantor /> },
    { path: '/jasa-pindahan-luar-kota-dan-antar-pulau', element: <PindahanLuarKota /> },
    { path: '/harga', element: <HargaPage /> },
    { path: '/material', element: <MaterialPage /> },
    { path: '/galeri', element: <GaleriPage /> },
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
