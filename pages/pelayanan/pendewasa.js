import Head from 'next/head'
import Layout from '../../components/Layout'
import Button from '../../components/Button'

export default function PelayananPendewasa() {
  // Data kegiatan pendewasa
  const kegiatanPendewasa = [
    {
      id: 1,
      nama: 'Ibadah Pendewasa',
      kelompok: 'Umum',
      hari: 'Minggu',
      waktu: 'Pasca Ibadah Umum',
      tempat: 'Ruang Serbaguna',
      deskripsi: 'Ibadah khusus pendewasa dengan pembahasan topik-topik kehidupan Kristen dewasa'
    },
    {
      id: 2,
      nama: 'Bible Study Pendewasa',
      kelompok: 'Pasutri',
      hari: 'Kamis',
      waktu: '19.00 WIB',
      tempat: 'Rumah-Rumah',
      deskripsi: 'Kajian Alkitab mingguan untuk pasangan suami istri'
    },
    {
      id: 3,
      nama: 'Komunitas Keluarga',
      kelompok: 'Keluarga',
      hari: 'Minggu',
      waktu: '17.30 WIB',
      tempat: 'Halaman Gereja',
      deskripsi: 'Fellowship keluarga dengan kegiatan membangun hubungan harmonis'
    }
  ]

  // Data visi misi pelayanan pendewasa
  const visiMisi = {
    visi: 'Menjadi keluarga Kristen yang hidup dalam kasih Kristus, saling mendukung, dan memberkati sesama.',
    misi: [
      'Membangun kehidupan rohani keluarga Kristen',
      'Membantu pasangan suami istri dalam membina hubungan kasih',
      'Mendidik anak-anak dalam kekudusan dan ajaran Kristus',
      'Membentuk komunitas keluarga yang saling peduli dan berbagi'
    ]
  }

  // Data konseling keluarga
  const konselingKeluarga = [
    {
      topik: 'Pembinaan Pernikahan',
      deskripsi: 'Konseling dan pembinaan untuk pasangan suami istri dalam membangun keluarga Kristen'
    },
    {
      topik: 'Pendidikan Anak Kristen',
      deskripsi: 'Konseling tentang pendidikan anak dalam ajaran dan nilai-nilai Kristen'
    },
    {
      topik: 'Manajemen Keuangan Keluarga',
      deskripsi: 'Konseling tentang pengelolaan keuangan keluarga sesuai prinsip Alkitab'
    },
    {
      topik: 'Konflik dan Komunikasi',
      deskripsi: 'Konseling untuk menyelesaikan konflik dan meningkatkan komunikasi dalam keluarga'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Pelayanan Pendewasa - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Pelayanan pendewasa Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Pelayanan Pendewasa</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah mb-8">
          <h2 className="text-xl font-semibold text-toraja-merah mb-3">Tentang Pelayanan Pendewasa</h2>
          <p className="text-gray-700">
            Pelayanan Pendewasa Gereja Toraja Jemaat Surabaya adalah wadah untuk jemaat 
            berusia 30 tahun ke atas yang memiliki keluarga untuk dibina dalam kehidupan 
            rohani dan keluarga Kristen. Kami percaya bahwa keluarga adalah unit terkecil 
            dari gereja yang harus dibangun di atas dasar kasih Kristus.
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
            {kegiatanPendewasa.map((kegiatan) => (
              <div key={kegiatan.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-toraja-merah">{kegiatan.nama}</h3>
                  <span className="bg-toraja-kuning text-toraja-hitam text-xs px-2 py-1 rounded">{kegiatan.kelompok}</span>
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
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Layanan Konseling Keluarga</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {konselingKeluarga.map((layanan, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <h3 className="font-semibold text-toraja-merah mb-2">{layanan.topik}</h3>
                <p className="text-gray-700 text-sm">{layanan.deskripsi}</p>
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
              <h3 className="font-semibold text-toraja-merah">Bapak Yusak Toding</h3>
              <p className="text-sm text-gray-600">Ketua Pelayanan Pendewasa</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="font-semibold text-toraja-merah">Ibu Sarah Rende</h3>
              <p className="text-sm text-gray-600">Sekretaris</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="font-semibold text-toraja-merah">Tim Pendewasa</h3>
              <p className="text-sm text-gray-600">Anggota</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button variant="primary">
              Bergabung dengan Pelayanan Pendewasa
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}