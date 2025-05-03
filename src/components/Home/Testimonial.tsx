export default function Testimonial() {
  const data = [
    {
      name: 'Pindahan Rumah',
      description: 'Melayani jasa pindahan rumah aparternen, didukung dengan tim yang berpengalaman dan profesional.',
      image: '/pindah-rumah.png'
    },
    {
      name: 'Pindahan Kantor dan Pabrik',
      description: 'Total Pindah siap melayani perpindahan kantor dengan dukungan tim yang handal dan terpercaya.',
      image: '/pindah-kantor.png'
    }, {
      name: 'Pindahan Ke Luar Kota',
      description: 'Total Pindah membantu pengiriman barang pindahan anda ke seluruh kota di Indonesia.',
      image: '/pindahan-luar.png'
    }
    , {
      name: 'Pindahan Antar Pulau',
      description: 'Total Pindah membantu pengiriman barang pindahan anda ke berbagai pulau Se-Indonesia.',
      image: '/pindah-pulau.png'
    }
  ]
  return (
    <div className="bg-[#F2EE6F] w-full">
      <div className="grid gap-8 sm:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
          data.map((item, index) => (
            <div key={index} className="flex w-full space-y-4 sm:space-y-5 flex-col">
              <img alt={item.name} className="w-full rounded-lg hover:shadow-lg transition-shadow duration-300" width={200} height={200} src={item.image} />
              <strong className="text-lg sm:text-xl text-[#0C142E]">{item.name}</strong>
              <p className="text-sm sm:text-base text-[#0C142E] leading-relaxed">{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
};
