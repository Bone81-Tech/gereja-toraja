import Head from 'next/head'
import Layout from '../../components/Layout'
import Button from '../../components/Button'

export default function PelayananPemuda() {
  // Data kegiatan pemuda
  const kegiatanPemuda = [
    {
      id: 1,
      nama: 'Ibadah Pemuda',
      hari: 'Sabtu',
      waktu: '19.00 WIB',
      tempat: 'Ruang Pemuda',
      deskripsi: 'Ibadah khusus pemuda dengan pujian dan renungan yang menyegarkan iman'
    },
    {
      id: 2,
      nama: 'Kelas Pemuda',
      hari: 'Minggu',
      waktu: '15.00 WIB',
      tempat: 'Ruang Serbaguna',
      deskripsi: 'Kelas pembelajaran Alkitab dan diskusi tentang isu-isu pemuda kontemporer'
    },
    {
      id: 3,
      nama: 'Retret Pemuda',
      hari: 'Libur Nasional',
      waktu: '2hari 1malam',
      tempat: 'Luar Gereja',
      deskripsi: 'Retret pemuda secara berkala untuk memperdalam iman dan persaudaraan'
    }
  ]

  // Data visi misi pelayanan pemuda
  const visiMisi = {
    visi: 'Menjadi pemuda yang takut akan Tuhan, berakhlak mulia, dan menjadi berkat di tengah masyarakat.',
    misi: [
      'Membangun iman pemuda dalam Kristus',
      'Membentuk karakter pemuda yang berintegritas',
      'Mengembangkan karunia dan talenta pemuda',
      'Melibatkan pemuda dalam pelayanan gereja dan masyarakat'
    ]
  }

  return (
    <Layout>
      <Head>
        <title>Pelayanan Pemuda - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Pelayanan pemuda Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Pelayanan Pemuda</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah mb-8">
          <h2 className="text-xl font-semibold text-toraja-merah mb-3">Tentang Pelayanan Pemuda</h2>
          <p className="text-gray-700">
            Pelayanan Pemuda Gereja Toraja Jemaat Surabaya merupakan wadah bagi para pemuda 
            berusia 15-30 tahun untuk dibina secara rohani, intelektual, dan sosial. Kami 
            percaya bahwa pemuda adalah masa depan gereja dan masyarakat yang harus 
            dipersiapkan dengan matang dalam kasih Kristus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-toraja-merah p-5 rounded-lg text-white">
            <h3 className="text-xl font-semibold text-toraja-kuning mb-3">Visi</h3>
            <p className="text-white">{visiMisi.visi}</p>
          </div>
          <div className="bg-toraja-kuning p-5 rounded-lg text-toraja-hitam">
            <h3 className="text-xl font-semibold text-toraja-hitam mb-3">Misi</h3>
            <ul className="list-disc pl-5 text-toraja-hitam space-y-1">
              {visiMisi.misi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Kegiatan Rutin</h2>
          <div className="space-y-4">
            {kegiatanPemuda.map((kegiatan) => (
              <div key={kegiatan.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-toraja-merah">{kegiatan.nama}</h3>
                  <span className="bg-toraja-merah text-white text-xs px-2 py-1 rounded">{kegiatan.hari}</span>
                </div>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {kegiatan.waktu}
                  </span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {kegiatan.tempat}
                  </span>
                </div>
                <p className="text-gray-700 mt-2">{kegiatan.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah">
          <h2 className="text-xl font-semibold text-toraja-merah mb-4">Tim Pelayan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="font-semibold text-toraja-merah">Bapak Daniel Toding</h3>
              <p className="text-sm text-gray-600">Ketua Pelayanan Pemuda</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="font-semibold text-toraja-merah">Ibu Sari Rende</h3>
              <p className="text-sm text-gray-600">Sekretaris</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="font-semibold text-toraja-merah">Tim Pemuda</h3>
              <p className="text-sm text-gray-600">Anggota</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button variant="primary">
              Bergabung dengan Pelayanan Pemuda
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}