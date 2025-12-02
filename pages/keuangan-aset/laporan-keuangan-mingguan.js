import Head from 'next/head'
import Layout from '../../components/Layout'
import Button from '../../components/Button'

export default function LaporanKeuangan() {
  // Contoh data laporan keuangan
  const laporanList = [
    {
      id: 1,
      periode: 'Triwulan III 2024',
      jenis: 'Laporan Keuangan',
      tanggal: '30 September 2024',
      deskripsi: 'Laporan keuangan triwulan III 2024 termasuk pemasukan dan pengeluaran gereja',
      status: 'Terkini'
    },
    {
      id: 2,
      periode: 'Triwulan II 2024',
      jenis: 'Laporan Keuangan',
      tanggal: '30 Juni 2024',
      deskripsi: 'Laporan keuangan triwulan II 2024 termasuk pemasukan dan pengeluaran gereja',
      status: 'Arsip'
    },
    {
      id: 3,
      periode: 'Triwulan I 2024',
      jenis: 'Laporan Keuangan',
      tanggal: '31 Maret 2024',
      deskripsi: 'Laporan keuangan triwulan I 2024 termasuk pemasukan dan pengeluaran gereja',
      status: 'Arsip'
    },
    {
      id: 4,
      periode: 'Tahun 2023',
      jenis: 'Laporan Tahunan',
      tanggal: '31 Desember 2023',
      deskripsi: 'Laporan keuangan tahunan 2023 termasuk audit dan pertanggungjawaban dana jemaat',
      status: 'Arsip'
    }
  ]

  // Contoh data pemasukan dan pengeluaran
  const ringkasanKeuangan = {
    pemasukan: 250000000,
    pengeluaran: 180000000,
    saldo: 70000000
  }

  return (
    <Layout>
      <Head>
        <title>Laporan Keuangan - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Laporan keuangan Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Laporan Keuangan</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border-2 border-toraja-merah rounded-lg p-4 bg-toraja-merah text-white">
            <h3 className="font-medium mb-1">Pemasukan</h3>
            <p className="text-xl font-bold">Rp 250.000.000</p>
          </div>
          <div className="border-2 border-toraja-merah rounded-lg p-4 bg-toraja-kuning text-toraja-hitam">
            <h3 className="font-medium mb-1">Pengeluaran</h3>
            <p className="text-xl font-bold">Rp 180.000.000</p>
          </div>
          <div className="border-2 border-toraja-merah rounded-lg p-4 bg-toraja-hitam text-white">
            <h3 className="font-medium mb-1">Saldo</h3>
            <p className="text-xl font-bold">Rp 70.000.000</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah mb-8">
          <h2 className="text-xl font-semibold text-toraja-merah mb-4">Informasi Transparansi Keuangan</h2>
          <p className="text-gray-700 mb-4">
            Gereja Toraja Jemaat Surabaya berkomitmen untuk menjaga transparansi keuangan 
            sebagai bentuk pertanggungjawaban kepada Tuhan dan jemaat. Setiap pemasukan dan 
            pengeluaran dicatat secara akurat dan dilaporkan secara berkala.
          </p>
          <p className="text-gray-700">
            Laporan keuangan disusun berdasarkan prinsip akuntansi gereja dan diaudit secara 
            internal oleh tim bendahara gereja serta eksternal oleh pihak independen secara 
            berkala.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-toraja-merah mb-4">Daftar Laporan</h2>
          <div className="space-y-4">
            {laporanList.map((laporan) => (
              <div key={laporan.id} className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-gray-50">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg text-toraja-merah">{laporan.periode}</h3>
                    {laporan.status === 'Terkini' && (
                      <span className="bg-toraja-merah text-white text-xs px-2 py-1 rounded">Terbaru</span>
                    )}
                  </div>
                  <p className="text-gray-600">{laporan.deskripsi}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <Button variant="outline">
                    Unduh Laporan
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}