import Head from 'next/head'
import Layout from '../components/Layout'

export default function Pengurus() {
  // Data pengurus gereja
  const pengurusGereja = [
    {
      id: 1,
      nama: 'Pdt. Yohanes Toding',
      jabatan: 'Pendeta',
      periode: '2015 - Sekarang',
      foto: '/images/foto-gereja-toraja.webp', // Placeholder
      tanggungJawab: 'Pelayanan umum, pembinaan rohani, dan pemberitaan Firman'
    },
    {
      id: 2,
      nama: 'Bapak Yusak Rende',
      jabatan: 'Ketua Majelis Jemaat',
      periode: '2020 - 2024',
      foto: '/images/foto-gereja-toraja.webp', // Placeholder
      tanggungJawab: 'Pemerintahan jemaat dan koordinasi pelayanan gerejawi'
    },
    {
      id: 3,
      nama: 'Ibu Maria Paruntu',
      jabatan: 'Sekretaris Majelis',
      periode: '2020 - 2024',
      foto: '/images/foto-gereja-toraja.webp', // Placeholder
      tanggungJawab: 'Administrasi majelis dan dokumentasi kegiatan gereja'
    },
    {
      id: 4,
      nama: 'Bapak Daniel Tangdilera',
      jabatan: 'Bendahara',
      periode: '2020 - 2024',
      foto: '/images/foto-gereja-toraja.webp', // Placeholder
      tanggungJawab: 'Pengelolaan keuangan gereja dan laporan keuangan'
    },
    {
      id: 5,
      nama: 'Bapak Petrus Toding',
      jabatan: 'Ketua Badan Pelayan',
      periode: '2021 - 2025',
      foto: '/images/foto-gereja-toraja.webp', // Placeholder
      tanggungJawab: 'Koordinasi seluruh pelayanan gereja'
    },
    {
      id: 6,
      nama: 'Ibu Sarah Mangundap',
      jabatan: 'Sekretaris Badan Pelayan',
      periode: '2021 - 2025',
      foto: '/images/foto-gereja-toraja.webp', // Placeholder
      tanggungJawab: 'Dokumentasi dan administrasi pelayanan'
    }
  ]

  // Data komisi pelayanan
  const komisiPelayanan = [
    {
      nama: 'Komisi Pujian & Penyembahan',
      ketua: 'Ibu Sari Indah',
      jumlahAnggota: 12
    },
    {
      nama: 'Komisi Doa',
      ketua: 'Bapak Yusak Mangundap',
      jumlahAnggota: 15
    },
    {
      nama: 'Komisi Pemuda',
      ketua: 'Bapak Daniel Toding',
      jumlahAnggota: 10
    },
    {
      nama: 'Komisi Wanita',
      ketua: 'Ibu Maria Rende',
      jumlahAnggota: 18
    },
    {
      nama: 'Komisi Anak',
      ketua: 'Ibu Sarah Toding',
      jumlahAnggota: 8
    },
    {
      nama: 'Komisi Bakti Sosial',
      ketua: 'Bapak Petrus Rende',
      jumlahAnggota: 14
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Pengurus Gereja - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Pengurus gereja Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Pengurus Gereja</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah mb-8">
          <h2 className="text-xl font-semibold text-toraja-merah mb-3">Tentang Struktur Pengurus</h2>
          <p className="text-gray-700">
            Struktur pengurus Gereja Toraja Jemaat Surabaya terdiri dari Majelis Jemaat 
            yang dipimpin oleh Pendeta serta berbagai badan dan komisi pelayanan. 
            Seluruh pengurus dipilih melalui sidang jemaat dan ditahbiskan untuk 
            melayani dalam masa bakti tertentu.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Majelis Jemaat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pengurusGereja.map((pengurus) => (
              <div key={pengurus.id} className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center items-center">
                  <div className="bg-gray-200 border-2 border-toraja-merah rounded-full w-20 h-20 flex items-center justify-center">
                    <span className="text-gray-600 text-xs text-center">Foto</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-semibold text-lg text-toraja-merah">{pengurus.nama}</h3>
                  <p className="font-medium text-toraja-kuning">{pengurus.jabatan}</p>
                  <p className="text-sm text-gray-600 mb-1">Periode: {pengurus.periode}</p>
                  <p className="text-gray-700 text-sm">{pengurus.tanggungJawab}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Komisi Pelayanan</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Komisi</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ketua</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah Anggota</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {komisiPelayanan.map((komisi, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{komisi.nama}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{komisi.ketua}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{komisi.jumlahAnggota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-toraja-merah p-6 rounded-lg text-white">
          <h2 className="text-xl font-semibold text-toraja-kuning mb-3">Masa Bakti Pengurus</h2>
          <p className="mb-3">
            Pengurus gereja dipilih untuk masa bakti 4 tahun dan dapat dipercayakan 
            kembali untuk masa bakti berikutnya berdasarkan keputusan sidang jemaat. 
            Masa bakti pengurus periode saat ini adalah 2020-2024.
          </p>
          <p>
            Proses pemilihan pengurus dilakukan secara demokratis melalui sidang jemaat 
            dengan mempertimbangkan ketaatan, kerinduan melayani, dan karunia yang dimiliki 
            oleh calon pengurus.
          </p>
        </div>
      </div>
    </Layout>
  )
}