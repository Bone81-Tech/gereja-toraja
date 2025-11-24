import Head from 'next/head'
import Layout from '../../components/Layout'

export default function AgendaIbadah() {
  // Contoh data agenda
  const agendaList = [
    {
      id: 1,
      judul: 'Ibadah Minggu Pelayanan I',
      tanggal: '24 November 2024',
      waktu: '07.00 WIB',
      tempat: 'Gereja Toraja Jemaat Surabaya',
      deskripsi: 'Ibadah Minggu Pagi dengan tema "Kasih Kristus yang Menggerakkan"'
    },
    {
      id: 2,
      judul: 'Ibadah Minggu Pelayanan II',
      tanggal: '24 November 2024',
      waktu: '09.00 WIB',
      tempat: 'Gereja Toraja Jemaat Surabaya',
      deskripsi: 'Ibadah Minggu Pagi dengan tema "Kasih Kristus yang Menggerakkan"'
    },
    {
      id: 3,
      judul: 'Ibadah Kaum Muda',
      tanggal: '30 November 2024',
      waktu: '19.00 WIB',
      tempat: 'Gereja Toraja Jemaat Surabaya',
      deskripsi: 'Ibadah khusus kaum muda dengan perenungan dan pujian'
    },
    {
      id: 4,
      judul: 'Persekutuan Doa',
      tanggal: '05 Desember 2024',
      waktu: '18.00 WIB',
      tempat: 'Ruang Serbaguna',
      deskripsi: 'Persekutuan doa mingguan untuk seluruh jemaat'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Agenda Ibadah - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Agenda ibadah dan kegiatan Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Agenda Ibadah</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Kalender Ibadah Mingguan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border p-4 rounded text-center">
              <h3 className="font-medium text-blue-700">Pelayanan I</h3>
              <p className="mt-2">07.00 WIB</p>
            </div>
            <div className="border p-4 rounded text-center">
              <h3 className="font-medium text-blue-700">Pelayanan II</h3>
              <p className="mt-2">09.00 WIB</p>
            </div>
            <div className="border p-4 rounded text-center">
              <h3 className="font-medium text-blue-700">Pelayanan III</h3>
              <p className="mt-2">17.00 WIB</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Agenda Mendatang</h2>
          <div className="space-y-4">
            {agendaList.map((agenda) => (
              <div key={agenda.id} className="border-l-4 border-blue-600 pl-4 py-2 bg-gray-50 rounded-r">
                <h3 className="font-semibold text-lg text-blue-800">{agenda.judul}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 text-gray-700">
                  <div><span className="font-medium">Tanggal:</span> {agenda.tanggal}</div>
                  <div><span className="font-medium">Waktu:</span> {agenda.waktu}</div>
                  <div><span className="font-medium">Tempat:</span> {agenda.tempat}</div>
                </div>
                <p className="mt-2 text-gray-700">{agenda.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}