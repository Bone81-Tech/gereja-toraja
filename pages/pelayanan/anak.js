import Head from 'next/head'
import Layout from '../../components/Layout'
import Button from '../../components/Button'

export default function PelayananAnak() {
  // Data kegiatan anak
  const kegiatanAnak = [
    {
      id: 1,
      nama: 'Sekolah Minggu',
      usia: '3-12 tahun',
      hari: 'Minggu',
      waktu: '09.30 - 10.30 WIB',
      tempat: 'Ruang Sekolah Minggu',
      deskripsi: 'Pembelajaran Alkitab dasar disesuaikan dengan usia anak'
    },
    {
      id: 2,
      nama: 'Pendalaman Iman Anak',
      usia: '8-12 tahun',
      hari: 'Sabtu',
      waktu: '16.00 - 17.00 WIB',
      tempat: 'Ruang Serbaguna',
      deskripsi: 'Diskusi dan kegiatan yang mendalami iman anak secara menyenangkan'
    },
    {
      id: 3,
      nama: 'Kegiatan Ekstrakurikuler',
      usia: '5-12 tahun',
      hari: 'Minggu',
      waktu: '15.00 - 16.00 WIB',
      tempat: 'Halaman Gereja',
      deskripsi: 'Permainan edukatif dan kegiatan seni untuk mengekspresikan iman'
    }
  ]

  // Data kurikulum sekolah minggu
  const kurikulum = [
    {
      kelas: 'Balita (3-5 tahun)',
      tema: 'Tuhan Menciptakan Dunia',
      aktivitas: 'Mewarnai, bercerita, menyanyi lagu anak'
    },
    {
      kelas: 'TK (5-7 tahun)',
      tema: 'Yesus Teman Terbaik',
      aktivitas: 'Permainan Alkitab, drama sederhana, mewarnai'
    },
    {
      kelas: 'SD I (7-9 tahun)',
      tema: 'Mengenal Karakter Allah',
      aktivitas: 'Membaca Alkitab, diskusi kecil, kreatifitas'
    },
    {
      kelas: 'SD II (9-12 tahun)',
      tema: 'Mengikut Yesus',
      aktivitas: 'Membaca Alkitab, diskusi, pelayanan sederhana'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Pelayanan Anak - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Pelayanan anak Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Pelayanan Anak</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah mb-8">
          <h2 className="text-xl font-semibold text-toraja-merah mb-3">Tentang Pelayanan Anak</h2>
          <p className="text-gray-700">
            Pelayanan Anak Gereja Toraja Jemaat Surabaya berkomitmen untuk membimbing anak-anak 
            berusia 3-12 tahun dalam mengenal Tuhan Yesus sebagai Juruselamat dan Tuhan dalam 
            kehidupan mereka. Kami percaya bahwa anak-anak adalah anugerah Tuhan dan masa depan 
            gereja yang harus dibina sejak dini dalam kasih Kristus.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Kegiatan Rutin</h2>
          <div className="space-y-4">
            {kegiatanAnak.map((kegiatan) => (
              <div key={kegiatan.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-toraja-merah">{kegiatan.nama}</h3>
                  <span className="bg-toraja-kuning text-toraja-hitam text-xs px-2 py-1 rounded">{kegiatan.usia}</span>
                </div>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {kegiatan.hari}
                  </span>
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

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Kurikulum Sekolah Minggu</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kelas</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tema</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktivitas</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {kurikulum.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{item.kelas}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{item.tema}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{item.aktivitas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah">
          <h2 className="text-xl font-semibold text-toraja-merah mb-4">Tim Pelayan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="font-semibold text-toraja-merah">Ibu Maria Toding</h3>
              <p className="text-sm text-gray-600">Koordinator Sekolah Minggu</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="font-semibold text-toraja-merah">Ibu Sari Rende</h3>
              <p className="text-sm text-gray-600">Pendamping Pujian Anak</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="font-semibold text-toraja-merah">Tim Sekolah Minggu</h3>
              <p className="text-sm text-gray-600">Anggota</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button variant="primary">
              Jadikan Anak Anda Bagian dari Pelayanan
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}