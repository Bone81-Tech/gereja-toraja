import Head from 'next/head'
import Layout from '../../components/Layout'

export default function BeritaGereja() {
  // Contoh data berita
  const beritaList = [
    {
      id: 1,
      judul: 'Ibadah Raya Natal 2024 Berlangsung Khidmat',
      tanggal: '25 Desember 2024',
      deskripsi: 'Ibadah Natal yang dihadiri oleh ratusan jemaat berlangsung dengan penuh sukacita dan kekhidmatan...',
      gambar: '/images/foto-gereja.jpg'
    },
    {
      id: 2,
      judul: 'Kegiatan Retret Pemuda Berlangsung Meriah',
      tanggal: '15 November 2024',
      deskripsi: 'Retret pemuda yang diadakan di Wisata Malang berlangsung dengan semangat dan penuh kebersamaan...',
      gambar: '/images/foto-gereja.jpg'
    },
    {
      id: 3,
      judul: 'Penggalangan Dana untuk Korban Bencana',
      tanggal: '10 November 2024',
      deskripsi: 'Gereja mengadakan penggalangan dana untuk membantu saudara-saudara kita yang terkena bencana...',
      gambar: '/images/foto-gereja.jpg'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Berita Gereja - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Berita terbaru dari Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Berita Gereja</h1>
        
        <div className="space-y-6">
          {beritaList.map((berita) => (
            <div key={berita.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <img 
                    src={berita.gambar} 
                    alt={berita.judul} 
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-xl font-semibold text-blue-800 mb-2">{berita.judul}</h2>
                  <p className="text-gray-600 text-sm mb-2">{berita.tanggal}</p>
                  <p className="text-gray-700">{berita.deskripsi}</p>
                  <button className="mt-3 text-blue-700 hover:underline">
                    Baca selengkapnya →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}