# Total Pindah - Jasa Pindahan Profesional

Sebuah website modern untuk layanan jasa pindahan profesional yang dibangun menggunakan React, TypeScript, dan Tailwind CSS.

## 🚀 Teknologi Utama

- React 18.3.1
- TypeScript
- Tailwind CSS
- Vite
- React Router DOM
- EmailJS
- Google Maps API
- React Slick (untuk carousel)

## 📁 Struktur Project

```
src/
├── components/         # Reusable components
├── Home/              # Halaman Beranda
├── Artikel/           # Halaman Artikel
├── Galeri/           # Halaman Galeri
├── Harga/            # Halaman Harga
├── Kontak/           # Halaman Kontak
├── Layanan/          # Halaman Layanan
├── Material/         # Halaman Material
├── Profile/          # Halaman Profile
├── Testimoni/        # Halaman Testimoni
├── Layout.tsx        # Layout utama
├── Pages.tsx         # Router configuration
└── main.tsx          # Entry point
```

## 🎯 Fitur Utama

- Sistem routing yang komprehensif
- Integrasi Google Maps
- Sistem pengiriman email (EmailJS)
- Carousel/slider untuk konten dinamis
- Responsive design
- SEO optimization
- Modern UI/UX

## 💻 Cara Menjalankan Project

1. Clone repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```
4. Build untuk production:
   ```bash
   npm run build
   ```
5. Preview build:
   ```bash
   npm run preview
   ```

## 📱 Analisis Halaman Beranda

### 1. Struktur Utama (`Home.tsx`)
- SEO optimization dengan schema.org markup
- 4 komponen utama:
  - Jumbotron (Hero section)
  - ContentHome (Konten utama)
  - WhyChoseUs (Keunggulan)
  - Testimonial (Testimoni pelanggan)

### 2. Jumbotron Section
#### Left Content:
- Welcome message dengan animasi gradient
- Heading utama dengan efek gradient text
- Deskripsi layanan
- CTA button menuju profile

#### Right Content:
- Statistik cards:
  - 500+ Pindahan Rumah
  - 200+ Pindahan Apartemen
  - 150+ Pindahan Kantor
- Gambar ilustrasi dengan efek hover

#### Fitur UI/UX:
- Responsive design (mobile-first)
- Animasi hover pada cards
- Gradient effects
- Shadow effects
- Smooth transitions

### 3. Content Section
#### Layout:
- 2 kolom layout (desktop)
- Left Column:
  - Background kuning (#F2EE6F)
  - Tagline utama
  - Brand highlight
- Right Column:
  - Gambar ilustrasi full-width

## 🎨 Styling dan UI/UX

### Teknologi CSS
- Tailwind CSS untuk styling
- Custom colors dan gradients
- Responsive classes
- Animation utilities

### Best Practices
- Semantic HTML
- Responsive images dengan lazy loading
- SEO optimization
- Reusable components
- Proper alt text untuk accessibility
- Performance optimization

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - sm: Small devices
  - md: Medium devices
  - lg: Large devices
- Flexible layouts
- Responsive typography
- Adaptive spacing

## 🔧 Development Tools

### Dependencies Utama
```json
{
  "@emailjs/browser": "^4.4.1",
  "@react-google-maps/api": "^2.20.3",
  "react": "^18.3.1",
  "react-router-dom": "^7.0.2",
  "react-slick": "^0.30.2"
}
```

### Development Dependencies
```json
{
  "typescript": "~5.6.2",
  "tailwindcss": "^3.4.16",
  "vite": "^6.0.1"
}
```

## 🚀 Performance Optimization

- Lazy loading untuk gambar
- Code splitting
- Optimized animations
- Efficient Tailwind usage
- TypeScript untuk type safety

## 📈 SEO dan Metadata

- React Helmet untuk manajemen meta tags
- Schema.org markup
- Optimized meta descriptions
- Proper heading hierarchy

## 🔐 Security

- Environment variables untuk API keys
- Type checking dengan TypeScript
- Secure form handling
- Protected routes

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📝 License

[MIT License](LICENSE)

---

Dibuat dengan ❤️ oleh Tim Total Pindah

## 📱 Analisis Detail Setiap Halaman

### 1. Halaman Beranda (Home)
#### Struktur Utama (`Home.tsx`):
- File ini adalah komponen utama yang mengatur layout halaman beranda
- Menggunakan SEO optimization dengan schema.org markup
- Terdiri dari 4 komponen utama:
  - Jumbotron (Hero section)
  - ContentHome (Konten utama)
  - WhyChoseUs (Keunggulan)
  - Testimonial (Testimoni pelanggan)

#### Jumbotron Section (`Jumbotron.tsx`):
- Bagian hero/pembuka website
- Terbagi menjadi 2 bagian utama:
  
  **Left Content:**
  - Welcome message dengan animasi gradient
  - Heading utama dengan efek gradient text
  - Deskripsi layanan
  - CTA button menuju profile
  
  **Right Content:**
  - Statistik cards:
    - 500+ Pindahan Rumah
    - 200+ Pindahan Apartemen
    - 150+ Pindahan Kantor
  - Gambar ilustrasi dengan efek hover

#### Content Section (`Content.tsx`):
- Layout 2 kolom (desktop view)
- Left Column:
  - Background kuning (#F2EE6F)
  - Tagline utama
  - Brand highlight "TOTAL PINDAH"
- Right Column:
  - Gambar ilustrasi full-width

### 2. Halaman Artikel (`Artikel.tsx`)
#### Struktur Utama:
- Grid layout untuk daftar artikel
- Fitur filter dan pencarian
- Pagination untuk navigasi artikel

#### Komponen Article Card:
- Thumbnail image
- Judul artikel
- Preview text
- Tanggal publikasi
- Read more button

### 3. Halaman Galeri (`Galeri.tsx`)
#### Struktur Utama:
- Masonry layout untuk gallery
- Image lightbox untuk preview
- Filter berdasarkan kategori

#### Fitur:
- Lazy loading images
- Image optimization
- Responsive grid
- Smooth animations

### 4. Halaman Harga (`Harga.tsx`)
#### Struktur Utama:
- Pricing cards
- Comparison table
- FAQ section

#### Features:
- Toggle harga (bulanan/tahunan)
- Highlight paket populer
- CTA buttons
- Tooltip informasi

### 5. Halaman Kontak (`Kontak.tsx`)
#### Struktur Utama:
- Contact form
- Google Maps integration
- Contact information

#### Fitur:
- Form validation
- EmailJS integration
- Real-time map
- Social media links

### 6. Halaman Layanan (`Layanan.tsx`)
#### Struktur Utama:
- Service cards
- Detail sections
- Testimonial slider

#### Fitur:
- Animated icons
- Service comparison
- Request quote button
- Case studies

### 7. Halaman Material (`Material.tsx`)
#### Struktur Utama:
- Material catalog
- Filter system
- Detail modal

#### Fitur:
- Search functionality
- Category filtering
- Material specifications
- Request information form

### 8. Halaman Profile (`Profile.tsx`)
#### Struktur Utama:
- Company overview
- Team section
- Achievement timeline

#### Fitur:
- Animated statistics
- Team member cards
- Company milestones
- Vision & mission

### 9. Halaman Testimoni (`Testimoni.tsx`)
#### Struktur Utama:
- Testimonial cards
- Rating system
- Client showcase

#### Fitur:
- Star rating display
- Client photos
- Verified badge
- Sort by rating

## 🎨 Implementasi UI/UX

### Teknologi yang Digunakan:
- React Icons untuk icon-icon
- React Router untuk navigasi
- Tailwind CSS untuk styling:
  - Flexbox untuk layout
  - Grid system
  - Custom colors
  - Responsive classes
  - Animation classes

### Best Practices:
- Semantic HTML
- Responsive images dengan lazy loading
- SEO optimization
- Reusable components
- Proper alt text
- Consistent styling
- Performance optimization

### Interaktivitas:
- Hover effects
- Transition animations
- Interactive buttons
- Smooth scrolling
- Form validations
- Real-time feedback

### Responsive Design:
- Mobile-first approach
- Breakpoints:
  - sm: Small devices
  - md: Medium devices
  - lg: Large devices
- Flexible layouts
- Responsive typography
- Adaptive spacing

### Performance Considerations:
- Lazy loading
- Code splitting
- Image optimization
- Efficient CSS
- Caching strategies
- Bundle size optimization

## 🧩 Penjelasan Detail Komponen

### 1. Layout.tsx - Komponen Induk
Ini adalah komponen yang membungkus SEMUA halaman. Bayangkan seperti template utama website.
```tsx
Struktur:
- Navbar (Menu atas)
- Children (Konten halaman yang berubah-ubah)
- Footer (Bagian bawah website)
```
**Fungsi:**
- Mengatur tampilan dasar yang sama di semua halaman
- Menangani SEO (meta tags, titxle, dll)
- Mengatur responsive layout

### 2. Komponen Navbar
Ini adalah menu navigasi di bagian atas website.
```tsx
Fitur:
- Logo perusahaan (kiri)
- Menu navigasi (tengah)
- Tombol kontak (kanan)
- Menu hamburger untuk mobile
```
**State yang digunakan:**
- isMenuOpen (buka/tutup menu di mobile)
- isScrolled (mengubah style saat di-scroll)

### 3. Komponen Home
#### a. Jumbotron
```tsx
Struktur:
<div className="flex flex-col md:flex-row">
  {/* Bagian Kiri */}
  <div className="left-content">
    <WelcomeMessage />
    <MainHeading />
    <Description />
    <CTAButton />
  </div>
  
  {/* Bagian Kanan */}
  <div className="right-content">
    <StatisticCards />
    <IllustrationImage />
  </div>
</div>
```
**Penjelasan Simpel:**
- Bagian kiri: Isinya text-text penting
- Bagian kanan: Isinya angka-angka prestasi dan gambar

#### b. ContentHome
```tsx
Struktur:
<div className="grid grid-cols-1 md:grid-cols-2">
  {/* Kolom Kiri */}
  <div className="bg-yellow">
    <Tagline />
    <BrandHighlight />
  </div>
  
  {/* Kolom Kanan */}
  <div>
    <Image />
  </div>
</div>
```
**Cara Kerjanya:**
1. Di HP: Tampil 1 kolom (atas bawah)
2. Di Desktop: Tampil 2 kolom (kiri kanan)

### 4. Komponen Artikel
#### a. ArticleList
```tsx
Struktur:
<div>
  <FilterBar /> {/* Filter artikel */}
  <SearchBar /> {/* Pencarian */}
  <Grid>
    {articles.map(article => (
      <ArticleCard key={article.id} {...article} />
    ))}
  </Grid>
  <Pagination />
</div>
```
**Cara Kerja:**
1. Data artikel disimpan di state
2. Bisa difilter pakai FilterBar
3. Bisa dicari pakai SearchBar
4. Tampil dalam bentuk grid

#### b. ArticleCard
```tsx
Props yang diterima:
- title: Judul artikel
- image: Gambar thumbnail
- date: Tanggal publish
- preview: Teks preview
```

### 5. Komponen Galeri
```tsx
Struktur:
<div>
  <FilterCategories /> {/* Filter foto */}
  <MasonryGrid>
    {images.map(img => (
      <ImageCard 
        key={img.id}
        onClick={() => openLightbox(img)}
        {...img}
      />
    ))}
  </MasonryGrid>
  <Lightbox /> {/* Preview foto besar */}
</div>
```
**Fitur Keren:**
- Foto tersusun rapi pakai Masonry
- Klik foto bisa zoom
- Ada filter berdasarkan kategori

### 6. Komponen Form
#### a. ContactForm
```tsx
State yang dipakai:
- formData (nama, email, pesan, dll)
- isLoading (status loading)
- errors (pesan error)

Validasi:
- Nama minimal 3 huruf
- Email harus valid
- Pesan tidak boleh kosong
```
**Cara Pakai EmailJS:**
1. User isi form
2. Klik submit
3. Data dikirim ke EmailJS
4. Email masuk ke admin

### 7. Komponen Maps
```tsx
Fitur:
- Tampilan peta Google Maps
- Marker lokasi kantor
- Info window saat marker diklik
- Custom styling peta
```
**Setup yang Dibutuhkan:**
1. API Key Google Maps
2. Koordinat lokasi
3. Styling custom

### 8. Komponen Testimonial
```tsx
Struktur:
<Slider settings={sliderSettings}>
  {testimonials.map(testimonial => (
    <TestimonialCard
      key={testimonial.id}
      name={testimonial.name}
      rating={testimonial.rating}
      comment={testimonial.comment}
      image={testimonial.image}
    />
  ))}
</Slider>
```
**Cara Kerja Slider:**
1. Pakai library React-Slick
2. Auto-slide tiap 5 detik
3. Bisa di-swipe di mobile
4. Ada tombol next/prev

### 9. Komponen Harga
```tsx
State:
- selectedPlan (paket yang dipilih)
- isYearly (toggle harga tahunan/bulanan)

Struktur:
<div>
  <PlanToggle /> {/* Switch harga */}
  <PricingCards>
    {plans.map(plan => (
      <PriceCard
        key={plan.id}
        isSelected={selectedPlan === plan.id}
        {...plan}
      />
    ))}
  </PricingCards>
  <ComparisonTable /> {/* Tabel perbandingan */}
</div>
```

## 📝 Update Terbaru (May 2025)

### 1. Penambahan Halaman 404 Not Found
- Implementasi custom 404 page dengan desain modern
- Integrasi dengan brand identity perusahaan
- Fitur navigasi ke halaman beranda dan kontak
- Animasi dan UI/UX yang user-friendly
- Fully responsive design

### 2. Perbaikan Sistem Testimonial
- Optimasi struktur data testimonial
- Perbaikan rendering carousel testimonial
- Peningkatan performa komponen
- Transformasi data yang lebih efisien

### 3. Loading State
- Mempertahankan loading state sesuai requirement client
- Animasi loading yang smooth dan profesional
- Konsisten dengan brand identity

## 📱 Struktur Halaman dan Pola Layout

### Pola Umum Layout
Setiap halaman menggunakan komponen `Layout` yang konsisten dengan struktur:
```tsx
<Layout
  titleHeader="Judul Halaman"
  background="bg-white"
  spacing="space-y-8"
  contentHeader={<Component />}
  content={<Component />}
/>
```

### 1. Halaman Beranda (Home)
Struktur yang konsisten dengan 4 section utama:
- Jumbotron (Hero section)
- ContentHome (Konten utama)
- WhyChoseUs (Keunggulan)
- Galeri (Galeri foto)

### 2. Halaman Profile
Struktur yang konsisten dengan 4 section utama:
- Jumbotron (Hero section)
- Content (Konten utama)
- Visi & Misi
- Download (Company Profile)

### 3. Halaman Layanan
Setiap sub-halaman layanan (Rumah, Apartemen, Kantor, Luar Kota) memiliki struktur yang sama:
- Title Header
- Content Header (Deskripsi layanan)
- Carousel (Galeri foto)

### 4. Halaman Harga
Struktur khusus:
- Title Header
- Content Header (Deskripsi harga)
- Pricing Cards
- Comparison Table

### 5. Halaman Material
Struktur khusus:
- Title Header
- Content Header (Deskripsi material)
- Grid Cards (Material options)

### 6. Halaman Galeri
Struktur khusus:
- Title Header
- Grid Gallery
- Carousel

### 7. Halaman Testimoni
Struktur khusus:
- Title Header
- Carousel Testimoni
- Feedback Form

### 8. Halaman Artikel
Struktur khusus:
- Title Header
- Content Header (Deskripsi artikel)
- Article Grid
- Pagination

### 9. Halaman Kontak
Struktur khusus:
- Title Header
- Contact Information
- Google Maps
- Contact Form

## 🎨 Pola Desain Konsisten

### Warna Utama
- Biru: `#005CB5` (Primary)
- Merah: `#A90000` (Secondary)
- Kuning: `#F2EE6F` (Accent)

### Komponen yang Digunakan
1. **Cards**
   - SmallCard
   - Card
   - ArticleCard

2. **Carousel**
   - CarouselTestimoni
   - Carousel

3. **Forms**
   - ContactForm
   - FeedbackForm

4. **Layout Components**
   - Layout
   - Header
   - Footer
   - SideContact

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

### Spacing System
- Container padding: `px-3 sm:px-6 md:px-8 lg:px-12`
- Section margin: `my-8 sm:my-12 md:my-16 lg:my-20`
- Component spacing: `space-y-8 sm:space-y-12`

### Typography
- Headings:
  - H1: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
  - H2: `text-xl sm:text-2xl md:text-3xl lg:text-4xl`
  - H3: `text-lg sm:text-xl md:text-2xl lg:text-3xl`
- Body text: `text-base sm:text-lg`
- Small text: `text-sm`

### Animations
- Hover effects pada cards dan buttons
- Smooth transitions
- Loading spinners
- Carousel animations

### Icons
Menggunakan React Icons:
- FiSend (Send icon)
- FaWhatsapp (WhatsApp icon)
- FaPhoneAlt (Phone icon)
- FaMapMarkerAlt (Location icon)
- Social media icons (Facebook, Twitter, Instagram, LinkedIn)

## 🔧 State Management

### Context Usage
- NavContext: Mengelola state navigasi
- FormContext: Mengelola state form
- AuthContext: Mengelola state autentikasi

### Reducer Pattern
- formReducer: Mengelola state form dengan actions:
  - SET_LOADING
  - SET_ERROR
  - SET_DATA
  - SET_DISABLED
  - RESET_FORM

### Local Storage
- lastSubmitTime: Menyimpan waktu submit terakhir
- userPreferences: Menyimpan preferensi pengguna

## 🚀 Performance Optimization

### Code Splitting
- Lazy loading untuk routes
- Dynamic imports untuk komponen besar

### Image Optimization
- Lazy loading untuk images
- Responsive images dengan srcset
- WebP format support

### Caching Strategy
- Browser caching
- Service worker caching
- API response caching

### Bundle Optimization
- Tree shaking
- Code splitting
- Dynamic imports
- Asset optimization

## 📱 Mobile Responsiveness

### Breakpoint Strategy
```css
sm: '640px'   /* Mobile landscape */
md: '768px'   /* Tablet */
lg: '1024px'  /* Desktop */
xl: '1280px'  /* Large desktop */
2xl: '1536px' /* Extra large desktop */
```

### Mobile-First Approach
- Base styles untuk mobile
- Media queries untuk larger screens
- Flexible layouts
- Responsive typography
- Touch-friendly interactions

### Responsive Components
- Mobile navigation
- Responsive tables
- Flexible grids
- Adaptive images
- Touch-friendly buttons

## 🔒 Security Measures

### Form Security
- Input validation
- CSRF protection
- XSS prevention
- Rate limiting

### API Security
- API key protection
- Request validation
- Response sanitization
- Error handling

### Data Protection
- Secure storage
- Data encryption
- Privacy policy
- GDPR compliance

## 🧪 Testing Strategy

### Unit Tests
- Component testing
- Reducer testing
- Utility function testing
- Context testing

### Integration Tests
- Form submission
- API integration
- Navigation flow
- State management

### E2E Tests
- User flows
- Critical paths
- Cross-browser testing
- Mobile testing

## 📈 Analytics & Monitoring

### Performance Monitoring
- Page load times
- API response times
- Error tracking
- User behavior

### SEO Analytics
- Meta tags
- Schema markup
- Sitemap
- Robots.txt

### User Analytics
- Page views
- User flow
- Conversion tracking
- Event tracking
