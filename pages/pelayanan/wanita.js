import Head from 'next/head'
import Layout from '../../components/Layout'
import Button from '../../components/Button'

export default function PelayananWanita() {
  // Data kegiatan wanita
  const kegiatanWanita = [
    {
      id: 1,
      nama: 'Ibadah Wanita',
      hari: 'Minggu',
      waktu: '15.00 WIB',
      tempat: 'Ruang Wanita',
      deskripsi: 'Ibadah khusus wanita dengan pembahasan topik-topik kehidupan Kristen'
    },
    {
      id: 2,
      nama: 'Bible Study Wanita',
      hari: 'Rabu',
      waktu: '10.00 WIB',
      tempat: 'Ruang Serbaguna',
      deskripsi: 'Kajian Alkitab mingguan yang membahas topik-topik untuk pertumbuhan rohani'
    },
    {
      id: 3,
      nama: 'Komunitas Ibu Rumah Tangga',
      hari: 'Jumat',
      waktu: '09.00 WIB',
      tempat: 'Rumah Ibu-Ibu',
      deskripsi: 'Fellowship dan pembahasan topik-topik kehidupan rumah tangga Kristen'
    },
    {
      id: 4,
      nama: 'Kelas Keterampilan',
      hari: 'Sabtu',
      waktu: '14.00 WIB',
      tempat: 'Ruang Serbaguna',
      deskripsi: 'Pelatihan keterampilan seperti memasak, menjahit, dan menjual kerajinan'
    }
  ]

  // Data visi misi pelayanan wanita
  const visiMisi = {
    visi: 'Menjadi wanita yang takut akan Tuhan, mengasihi keluarga, dan memberkati masyarakat.',
    misi: [
      'Membangun iman wanita dalam Kristus',
      'Membentuk karakter wanita Kristen yang tangguh',
      'Mengembangkan potensi dan karunia wanita',
      'Mendukung peran wanita dalam gereja, keluarga, dan masyarakat'
    ]
  }

  // Data program unggulan
  const programUnggulan = [
    {
      nama: 'Kelas Keterampilan',
      deskripsi: 'Kelas menjahit, memasak, dan membuat kerajinan tangan untuk meningkatkan pendapatan keluarga'
    },
    {
      nama: 'Bakti Sosial',
      deskripsi: 'Kegiatan bakti sosial yang diinisiasi dan dijalankan oleh pelayan wanita'
    },
    {
      nama: 'Pendidikan Anak',
      deskripsi: 'Program pendidikan agama anak yang dikoordinasikan oleh pelayan wanita'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Pelayanan Wanita - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Pelayanan wanita Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Pelayanan Wanita</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah mb-8">
          <h2 className="text-xl font-semibold text-toraja-merah mb-3">Tentang Pelayanan Wanita</h2>
          <p className="text-gray-700">
            Pelayanan Wanita Gereja Toraja Jemaat Surabaya adalah wadah bagi seluruh wanita 
            jemaat untuk dibina dalam iman dan dilibatkan dalam berbagai pelayanan. Kami 
            percaya bahwa wanita memiliki peran penting dalam membangun gereja dan masyarakat 
            melalui pelayanan yang beragam dan penuh kasih.
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
            {kegiatanWanita.map((kegiatan) => (
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

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Program Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {programUnggulan.map((program, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <h3 className="font-semibold text-toraja-merah mb-2">{program.nama}</h3>
                <p className="text-gray-700 text-sm">{program.deskripsi}</p>
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
              <h3 className="font-semibold text-toraja-merah">Ibu Sarah Toding</h3>
              <p className="text-sm text-gray-600">Ketua Pelayanan Wanita</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="font-semibold text-toraja-merah">Ibu Maria Rende</h3>
              <p className="text-sm text-gray-600">Sekretaris</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="font-semibold text-toraja-merah">Tim Wanita</h3>
              <p className="text-sm text-gray-600">Anggota</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button variant="primary">
              Bergabung dengan Pelayanan Wanita
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}