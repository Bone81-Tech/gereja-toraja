import Head from 'next/head'
import Layout from '../../components/Layout'

export default function KegiatanSosial() {
  // Contoh data kegiatan sosial
  const kegiatanList = [
    {
      id: 1,
      judul: 'Bakti Sosial ke Panti Asuhan',
      tanggal: '15 November 2024',
      lokasi: 'Panti Asuhan Kasih Ibu, Surabaya',
      deskripsi: 'Kegiatan bakti sosial dengan memberikan bantuan sembako, pakaian, dan bermain bersama anak-anak panti',
      gambar: '/images/foto-gereja-toraja.webp',
      jumlahPeserta: 35
    },
    {
      id: 2,
      judul: 'Donor Darah Bersama PMI',
      tanggal: '05 November 2024',
      lokasi: 'Gereja Toraja Jemaat Surabaya',
      deskripsi: 'Kampanye donor darah dalam rangka menyambut hari pelayanan sosial gereja',
      gambar: '/images/foto-gereja-toraja.webp',
      jumlahPeserta: 87
    },
    {
      id: 3,
      judul: 'Bakti Lingkungan di Kampung Kenjeran',
      tanggal: '20 Oktober 2024',
      lokasi: 'Kampung Kenjeran, Surabaya',
      deskripsi: 'Kegiatan bersih-bersih lingkungan dan pembagian makanan kepada warga tidak mampu',
      gambar: '/images/foto-gereja-toraja.webp',
      jumlahPeserta: 42
    },
    {
      id: 4,
      judul: 'Bantuan Korban Bencana Alam',
      tanggal: '05 September 2024',
      lokasi: 'Lumajang, Jawa Timur',
      deskripsi: 'Pengiriman bantuan logistik dan kebutuhan pokok untuk korban banjir',
      gambar: '/images/foto-gereja-toraja.webp',
      jumlahPeserta: 20
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Kegiatan Sosial - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Kegiatan sosial dari Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Kegiatan Sosial</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah mb-8">
          <h2 className="text-xl font-semibold text-toraja-merah mb-3">Tentang Pelayanan Sosial</h2>
          <p className="text-gray-700 mb-3">
            Pelayanan sosial merupakan bagian penting dari wujud kasih Kristus kepada sesama. 
            Gereja Toraja Jemaat Surabaya secara rutin mengadakan berbagai kegiatan sosial 
            sebagai bentuk pelayanan kasih kepada masyarakat yang membutuhkan.
          </p>
          <p className="text-gray-700">
            Setiap kegiatan sosial dirancang untuk membantu sesama dan menjadi berkat bagi 
            komunitas sekitar sebagai wujud dari ajaran Kristus.
          </p>
        </div>

        <div className="space-y-6">
          {kegiatanList.map((kegiatan) => (
            <div key={kegiatan.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-toraja-merah">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <img
                    src={kegiatan.gambar}
                    alt={kegiatan.judul}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-xl font-semibold text-toraja-merah mb-2">{kegiatan.judul}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {kegiatan.tanggal}
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {kegiatan.lokasi}
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {kegiatan.jumlahPeserta} peserta
                    </span>
                  </div>
                  <p className="text-gray-700">{kegiatan.deskripsi}</p>
                  <button className="mt-3 text-toraja-merah hover:underline">
                    Lihat detail kegiatan →
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