import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#005CB5]">404</h1>
          <div className="animate-bounce mt-4">
            <img
              src="/logo.png"
              alt="Total Pindah Logo"
              className="w-32 h-32 mx-auto"
            />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Oops! Halaman Tidak Ditemukan
        </h2>

        <p className="text-gray-600 mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan.
          Halaman mungkin telah dipindahkan atau tidak tersedia.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/')}
            className="bg-[#005CB5] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#004a91] transition-colors duration-200"
          >
            Kembali ke Beranda
          </button>

          <p className="text-sm text-gray-500">
            Jika Anda yakin ini adalah kesalahan, silakan{' '}
            <button
              onClick={() => navigate('/kontak')}
              className="text-[#005CB5] hover:underline"
            >
              hubungi kami
            </button>
          </p>
        </div>
      </div>
    </div>
  );
} 