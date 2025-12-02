import Head from 'next/head'
import Layout from '../../components/Layout'
import Button from '../../components/Button'

export default function PelayananPenasihat() {
  // Data kegiatan penasihat
  const kegiatanPenasihat = [
    {
      id: 1,
      nama: 'Sidang Penasihat',
      frekuensi: 'Bulanan',
      waktu: 'Minggu pertama tiap bulan',
      tempat: 'Ruang Sidang',
      deskripsi: 'Sidang penasihat untuk membahas arah dan pelayanan gereja'
    },
    {
      id: 2,
      nama: 'Konsultasi Pelayanan',
      frekuensi: 'Mingguan',
      waktu: 'Setiap Jumat, 17.00 WIB',
      tempat: 'Ruang Pendeta',
      deskripsi: 'Konsultasi rutin mengenai pelayanan dan kebutuhan jemaat'
    },
    {
      id: 3,
      nama: 'Retret Penasihat',
      frekuensi: 'Tahunan',
      waktu: 'Setiap bulan Juni',
      tempat: 'Luar Gereja',
      deskripsi: 'Retret tahunan untuk memperbarui semangat pelayanan'
    }
  ]

  // Data tugas dan fungsi penasihat
  const tugasFungsi = [
    {
      tugas: 'Pengawasan Spiritual',
      deskripsi: 'Mengawasi kehidupan rohani gereja dan pelayanan jemaat'
    },
    {
      tugas: 'Pembimbing Pelayan',
      deskripsi: 'Membimbing dan menasihati pelayan gereja dalam tugas pelayanan'
    },
    {
      tugas: 'Pengambilan Keputusan',
      deskripsi: 'Berpartisipasi dalam pengambilan keputusan penting gereja'
    },
    {
      tugas: 'Penasihat Keluarga',
      deskripsi: 'Memberikan nasihat dan bimbingan kepada keluarga jemaat yang membutuhkan'
    }
  ]

  // Data anggota penasihat
  const anggotaPenasihat = [
    {
      id: 1,
      nama: 'Bapak Petrus Toding',
      periode: '2020-2025',
      bidang: 'Pengawasan Spiritual',
      deskripsi: 'Penatua senior dengan pengalaman pelayanan lebih dari 20 tahun'
    },
    {
      id: 2,
      nama: 'Bapak Daniel Rende',
      periode: '2021-2026',
      bidang: 'Pembimbing Pelayan',
      deskripsi: 'Penasihat dengan fokus pada pembinaan pelayan gereja'
    },
    {
      id: 3,
      nama: 'Ibu Maria Paruntu',
      periode: '2019-2024',
      bidang: 'Penasihat Keluarga',
      deskripsi: 'Penasihat khusus untuk masalah keluarga dan pribadi'
    },
    {
      id: 4,
      nama: 'Bapak Yusak Mangundap',
      periode: '2022-2027',
      bidang: 'Administrasi Gereja',
      deskripsi: 'Penasihat dengan fokus pada administrasi dan manajemen gereja'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Pelayanan Penasihat - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Pelayanan penasihat Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Pelayanan Penasihat</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah mb-8">
          <h2 className="text-xl font-semibold text-toraja-merah mb-3">Tentang Pelayanan Penasihat</h2>
          <p className="text-gray-700">
            Pelayanan Penasihat Gereja Toraja Jemaat Surabaya merupakan organ pendukung 
            pelayanan gereja yang terdiri dari orang-orang berpengalaman dalam iman dan 
            pelayanan. Penasihat berperan penting dalam memberikan nasihat spiritual, 
            membimbing pelayan gereja, serta membantu dalam pengambilan keputusan penting 
            untuk kemajuan gereja.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Tugas dan Fungsi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tugasFungsi.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <h3 className="font-semibold text-toraja-merah mb-2">{item.tugas}</h3>
                <p className="text-gray-700 text-sm">{item.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Kegiatan Rutin</h2>
          <div className="space-y-4">
            {kegiatanPenasihat.map((kegiatan) => (
              <div key={kegiatan.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-toraja-merah">{kegiatan.nama}</h3>
                  <span className="bg-toraja-merah text-white text-xs px-2 py-1 rounded">{kegiatan.frekuensi}</span>
                </div>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Anggota Penasihat</h2>
          <div className="space-y-4">
            {anggotaPenasihat.map((anggota) => (
              <div key={anggota.id} className="border-l-4 border-toraja-merah pl-4 py-3 bg-gray-50 rounded-r">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg text-toraja-merah">{anggota.nama}</h3>
                  <span className="text-sm text-gray-600">Periode: {anggota.periode}</span>
                </div>
                <p className="font-medium text-toraja-kuning">{anggota.bidang}</p>
                <p className="text-gray-700 text-sm mt-1">{anggota.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-toraja-kuning p-6 rounded-lg border-2 border-toraja-merah">
          <h2 className="text-xl font-semibold text-toraja-hitam mb-3">Kriteria Anggota Penasihat</h2>
          <ul className="list-disc pl-5 text-toraja-hitam space-y-2">
            <li>Memiliki iman yang teguh dan hidup rohani yang baik</li>
            <li>Berperilaku baik dan dihormati dalam dan luar gereja</li>
            <li>Berusia minimal 40 tahun dengan pengalaman pelayanan</li>
            <li>Memiliki karunia melayani dan kemampuan memberikan nasihat</li>
            <li>Memiliki pengetahuan Alkitab yang memadai</li>
            <li>Menerima dan siap ditahbiskan sesuai dengan tata gereja</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}