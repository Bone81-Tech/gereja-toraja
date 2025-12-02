import Head from 'next/head'
import Layout from '../../components/Layout'

export default function BacaanAlkitab() {
  // Data bacaan alkitab sepekan
  const bacaanSepekan = [
    {
      hari: "Senin",
      tanggal: "24 November 2025",
      bacaan: "Ibrani 9:23-28",
      tema: "Pengampunan Sempurna",
      temaToraja: "Kadiila' bakalan Sundun"
    },
    {
      hari: "Selasa",
      tanggal: "25 November 2025",
      bacaan: "Mazmur 117:1-2",
      tema: "Semua Umat Diundang Datang Kepada-Nya",
      temaToraja: "Mintu' Tau Ditambai Sac Lako Kale-Na"
    },
    {
      hari: "Rabu",
      tanggal: "26 November 2025",
      bacaan: "Yeremia 30:1-17",
      tema: "Janji Pemulihan Bagi yang Berserah",
      temaToraja: "Pangallu Katilendokan Lako To Tontong Massorongngan"
    },
    {
      hari: "Kamis",
      tanggal: "27 November 2025",
      bacaan: "Yeremia 30:18-24",
      tema: "Tidak Ada Yang Dapat Menggagalkan Rencana-Nya",
      temaToraja: "Ta'e'misa Tau Pakulle Ussakkalangnganni Lalan Tangnga'-Na"
    },
    {
      hari: "Jumat",
      tanggal: "28 November 2025",
      bacaan: "Wahyu 22:8-21",
      tema: "Mempertahankan Hak Atas Pohon Kehidupan",
      temaToraja: "Tontong Untoe Manda' Taena Diomai Kayu Katuoan"
    },
    {
      hari: "Sabtu",
      tanggal: "29 November 2025",
      bacaan: "Yeremia 31:1-6",
      tema: "Berulang-ulang Allah Mengasihi Kita",
      temaToraja: "Tangtore Tu Puang Mekamasei"
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Bacaan Alkitab Sepekan - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Bacaan Alkitab sepekan dari Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-2">Bacaan Alkitab Sepekan</h1>
        <p className="text-gray-600 mb-6 italic">24 - 29 November 2025</p>

        {/* Versi Desktop - Tabel */}
        <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden border-2 border-toraja-merah">
          <table className="w-full">
            <thead>
              <tr className="bg-toraja-merah text-white">
                <th className="px-6 py-4 text-left font-semibold">Hari/Tanggal</th>
                <th className="px-6 py-4 text-left font-semibold">Bacaan</th>
                <th className="px-6 py-4 text-left font-semibold">Tema</th>
              </tr>
            </thead>
            <tbody>
              {bacaanSepekan.map((item, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-200 hover:bg-toraja-kuning hover:bg-opacity-20 transition ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="font-semibold text-toraja-merah">{item.hari}</div>
                    <div className="text-sm text-gray-600">{item.tanggal}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-toraja-hitam bg-toraja-kuning bg-opacity-30 px-2 py-1 rounded">
                      {item.bacaan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-800">{item.tema}</div>
                    <div className="text-sm text-gray-500 italic">({item.temaToraja})</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Versi Mobile - Cards */}
        <div className="md:hidden space-y-4">
          {bacaanSepekan.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-5 rounded-lg shadow-md border-l-4 border-toraja-merah"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-toraja-merah">{item.hari}</h3>
                  <p className="text-sm text-gray-600">{item.tanggal}</p>
                </div>
                <span className="bg-toraja-kuning text-toraja-hitam px-3 py-1 rounded text-sm font-semibold">
                  {item.bacaan}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <p className="font-medium text-gray-800 mb-1">{item.tema}</p>
                <p className="text-sm text-gray-500 italic">({item.temaToraja})</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-6 bg-toraja-kuning bg-opacity-20 p-4 rounded-lg border-l-4 border-toraja-kuning">
          <p className="text-sm text-gray-700">
            <strong>📖 GCA:</strong> Gerakan Cintai Alkitab
          </p>
          <p className="text-xs text-gray-600 mt-1 italic">
            Mari membaca Firman Tuhan setiap hari untuk menguatkan iman kita
          </p>
        </div>
      </div>
    </Layout>
  )
}
