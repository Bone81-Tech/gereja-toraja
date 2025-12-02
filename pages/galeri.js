import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Galeri() {
  // Kategori galeri
  const kategoriGaleri = [
    { id: 1, nama: 'Ibadah Minggu', jumlah: 42 },
    { id: 2, nama: 'Acara Khusus', jumlah: 28 },
    { id: 3, nama: 'Pelayanan Sosial', jumlah: 15 },
    { id: 4, nama: 'Kegiatan Pemuda', jumlah: 22 },
    { id: 5, nama: 'Sekolah Minggu', jumlah: 18 },
    { id: 6, nama: 'Retret & Konferensi', jumlah: 12 }
  ]

  // Data foto galeri
  const fotoGaleri = [
    { id: 1, judul: 'Ibadah Minggu Pelayanan II', kategori: 'Ibadah Minggu', tanggal: '24 November 2024', url: '/images/foto-gereja-toraja.webp' },
    { id: 2, judul: 'Pernikahan Kristen', kategori: 'Acara Khusus', tanggal: '18 November 2024', url: '/images/foto-gereja-toraja.webp' },
    { id: 3, judul: 'Bakti Sosial ke Panti Asuhan', kategori: 'Pelayanan Sosial', tanggal: '15 November 2024', url: '/images/foto-gereja-toraja.webp' },
    { id: 4, judul: 'Retret Pemuda', kategori: 'Kegiatan Pemuda', tanggal: '10 November 2024', url: '/images/foto-gereja-toraja.webp' },
    { id: 5, judul: 'Sekolah Minggu Mingguan', kategori: 'Sekolah Minggu', tanggal: '03 November 2024', url: '/images/foto-gereja-toraja.webp' },
    { id: 6, judul: 'Perjamuan Kudus', kategori: 'Ibadah Minggu', tanggal: '27 Oktober 2024', url: '/images/foto-gereja-toraja.webp' },
    { id: 7, judul: 'Ibadah Kaum Bapa', kategori: 'Acara Khusus', tanggal: '20 Oktober 2024', url: '/images/foto-gereja-toraja.webp' },
    { id: 8, judul: 'Kunjungan Warga Jemaat Sakit', kategori: 'Pelayanan Sosial', tanggal: '13 Oktober 2024', url: '/images/foto-gereja-toraja.webp' }
  ]

  return (
    <Layout>
      <Head>
        <title>Galeri - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Galeri kegiatan Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Galeri</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah mb-8">
          <h2 className="text-xl font-semibold text-toraja-merah mb-3">Tentang Galeri Kami</h2>
          <p className="text-gray-700">
            Galeri ini berisi dokumentasi kegiatan gereja, ibadah, pelayanan, dan 
            momen-momen penting lainnya di Gereja Toraja Jemaat Surabaya. Setiap 
            foto merupakan wujud syukur kami atas penyertaan Tuhan dalam setiap 
            pelayanan yang kami lakukan.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Kategori</h2>
          <div className="flex flex-wrap gap-3">
            {kategoriGaleri.map((kategori) => (
              <button 
                key={kategori.id} 
                className="px-4 py-2 bg-toraja-merah text-white rounded-full hover:bg-toraja-merah-muda transition"
              >
                {kategori.nama} <span className="bg-toraja-kuning text-toraja-hitam text-xs px-2 py-1 rounded-full ml-2">{kategori.jumlah}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-toraja-merah">Foto Terbaru</h2>
            <div className="text-sm text-gray-600">
              Menampilkan {fotoGaleri.length} dari 128 foto
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {fotoGaleri.map((foto) => (
              <div key={foto.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={foto.url}
                    alt={foto.judul}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-toraja-merah text-lg mb-1 truncate">{foto.judul}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span className="bg-toraja-kuning text-toraja-hitam text-xs px-2 py-1 rounded">{foto.kategori}</span>
                    <span>{foto.tanggal}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-toraja-kuning p-6 rounded-lg border-2 border-toraja-merah">
          <h2 className="text-xl font-semibold text-toraja-hitam mb-3">Dokumentasi Kegiatan</h2>
          <p className="text-toraja-hitam mb-3">
            Setiap kegiatan gereja kami dokumentasikan sebagai kenang-kenangan 
            dan bahan evaluasi pelayanan. Foto-foto ini juga menjadi berkat bagi 
            jemaat yang tidak dapat hadir dalam kegiatan tersebut.
          </p>
          <p className="text-toraja-hitam">
            Kami menyimpan arsip foto sejak tahun 2005 dan terus menambah koleksi 
            dokumentasi kegiatan gereja setiap tahunnya.
          </p>
        </div>
      </div>
    </Layout>
  )
}