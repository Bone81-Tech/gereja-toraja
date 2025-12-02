import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Pengumuman() {
  // Contoh data pengumuman
  const pengumumanList = [
    {
      id: 1,
      judul: 'Pengumpulan Persembahan Syukur Bulan November',
      tanggal: '20 November 2024',
      isi: 'Kepada seluruh jemaat, dimohon untuk berpartisipasi dalam pengumpulan persembahan syukur bulan November sebagai wujud syukur atas berkat yang Tuhan berikan.',
      kategori: 'Keuangan'
    },
    {
      id: 2,
      judul: 'Retret Kaum Bapa akan diselenggarakan bulan Desember',
      tanggal: '18 November 2024',
      isi: 'Kaum Bapa diminta untuk menyiapkan jadwal mereka untuk mengikuti retret yang akan diselenggarakan pada akhir bulan Desember. Informasi lebih lanjut akan disampaikan kemudian.',
      kategori: 'Pelayanan'
    },
    {
      id: 3,
      judul: 'Perubahan Jadwal Pelayanan Remaja',
      tanggal: '15 November 2024',
      isi: 'Mulai minggu depan, jadwal pelayanan remaja akan berubah menjadi hari Sabtu pukul 16.00 WIB. Mohon perhatian seluruh remaja gereja.',
      kategori: 'Pemuda'
    },
    {
      id: 4,
      judul: 'Kursus Baptis Dewasa',
      tanggal: '10 November 2024',
      isi: 'Bagi jemaat yang ingin mengikuti kursus baptis dewasa, pendaftaran dibuka mulai tanggal 20 November hingga 10 Desember 2024. Silakan mendaftar di meja informasi.',
      kategori: 'Pendidikan'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Pengumuman - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Pengumuman terbaru dari Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Pengumuman</h1>

        <div className="mb-6 flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-toraja-merah text-white rounded-full text-sm">Semua</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-toraja-merah hover:text-white">Keuangan</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-toraja-merah hover:text-white">Pelayanan</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-toraja-merah hover:text-white">Pemuda</button>
          </div>
        </div>

        <div className="space-y-4">
          {pengumumanList.map((pengumuman) => (
            <div key={pengumuman.id} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-toraja-merah">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-semibold text-toraja-merah">{pengumuman.judul}</h2>
                <span className="bg-toraja-merah text-white text-xs px-2 py-1 rounded">{pengumuman.kategori}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm mt-2">
                <span>{pengumuman.tanggal}</span>
              </div>
              <p className="mt-3 text-gray-700">{pengumuman.isi}</p>
              <div className="mt-4 flex justify-end">
                <button className="text-toraja-merah hover:underline text-sm">
                  Baca selengkapnya →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}