import Head from 'next/head'
import Layout from '../../components/Layout'

export default function PetugasPelayanan() {
  // Data Jadwal Majelis untuk 2 minggu
  const jadwalMajelis = [
    {
      tanggal: "Minggu, 23 November 2025 (Pukul 09.00 WIB)",
      tema: "Tuhan Kesukaan Kita",
      liturgi: "Liturgi I Stola Putih",
      bacaan: ["Yeremia 23:1-8 (Bahan Utama)", "Kolose 1:9b-23", "Lukas 23:33-43"],
      pelayanFirman: "Sdri. Wiwi Puspita Sulo, S.Th",
      pembawaAlkitab: "Dkn. Antonius Lolon",
      liturgis: "Pnt. Amos Sangka",
      lektor: ["Pnt. Irmay Kaori", "Dkn. Rinita Pappang"],
      pengedarPundi: ["Pnt. Daniel Sau' Sumbung", "Pnt. Matius Lembeng", "Dkn. Festerin"],
      sambutJemaat: ["Dkn. Panto Lipu'", "Dkn. Albertin Pandung"],
      organis: ["Sdr. Kevin Satria", "Dkn. Rexy Risyanto Paillin", "Sdri. Susi Samantha"]
    },
    {
      tanggal: "Minggu, 30 November 2025 (Pukul 09.00 WIB)",
      tema: "Berjaga Dalam Peziarahan",
      liturgi: "Liturgi I Stola Kuning",
      bacaan: ["Yesaya 2:1-5", "Roma 13:11-14", "Matius 24:36-44"],
      pelayanFirman: "Pdt. Shelove Sampe Toding Allo, S.Th, M.Psi",
      pembawaAlkitab: "Dkn. Novianus Toding",
      liturgis: "Pnt. Musa Alok Pongtuluran",
      lektor: ["Pnt. Abdiel Popang Kabanga'", "Pnt. Florence Maria Novitta Petta"],
      pengedarPundi: ["Pnt. Agustina Konginan", "Pnt. Glana Sumbung", "Dkn. Juliana Pangarita Toding"],
      sambutJemaat: ["Dkn. Yan Rinty", "Pnt. Philipus Palullungan"],
      organis: ["Dkn. Rionaldus Sampe Bangun", "Ibu Yetty Kristine Subira", "Sdr. Luckyson Patodingan", "Anak Alegria Matandung Popang Kabanga'", "Anak Christopher Erianto Lipu"]
    }
  ]

  // Data Petugas Multimedia
  const petugasMultimedia = [
    {
      posisi: "OBS",
      minggu23: "Sdri. Angela Megawati Alloto'dang",
      minggu30: "Sdr. Ernes Gideon Geononda Senang"
    },
    {
      posisi: "Camera 1",
      minggu23: "Sdr. Deddy Pakabu",
      minggu30: "Sdr. Sigit Prasetyo"
    },
    {
      posisi: "Easy Worship",
      minggu23: "Sdri. Olivia Adelia Kurapa",
      minggu30: "Sdri. Mildayanti Ampang"
    },
    {
      posisi: "Sound",
      minggu23: "Sdr. Efod Mongan",
      minggu30: "Sdr. Happy Anugerah Pasorong"
    },
    {
      posisi: "PIC",
      minggu23: "Dkn. Nobel Arthur Bu'tu",
      minggu30: "Sdri. Gedalya Angel Putri Senong"
    }
  ]

  // Data Jadwal SMGT
  const jadwalSMGT = [
    {
      kelas: "Kelas Balita",
      minggu23: [
        { nama: "Sdri. Devi Natalia Padang", keterangan: "(PF)" },
        { nama: "Sdri. Resyana Pongsanda", keterangan: "(PL)" }
      ],
      minggu30: "Ibadah Lintas Generasi"
    },
    {
      kelas: "Kelas Kecil",
      minggu23: [
        { nama: "Ibu Orpa", keterangan: "(PF)" },
        { nama: "Ibu Sanda Agita Pongtuluran", keterangan: "(PL)" }
      ],
      minggu30: "Ibadah Lintas Generasi"
    },
    {
      kelas: "Kelas Besar",
      minggu23: [
        { nama: "Ibu Nancy Matasik", keterangan: "(PF)" },
        { nama: "Sdr. Luckyson Patodingan", keterangan: "(PL)" }
      ],
      minggu30: "Ibadah Lintas Generasi"
    },
    {
      kelas: "Kelas Remaja",
      minggu23: [
        { nama: "Ibu Wony Bunga Payuk", keterangan: "(PL)" },
        { nama: "Sdri. Damayanti Lisuallo", keterangan: "(PF)" }
      ],
      minggu30: "Ibadah Lintas Generasi"
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Petugas Pelayanan - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Jadwal petugas pelayanan Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-2">Petugas Pelayanan</h1>
        <p className="text-gray-600 mb-6">Jadwal Pelayanan Ibadah Minggu - November 2025</p>

        {/* A. JADWAL MAJELIS YANG BERTUGAS */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-toraja-merah mb-4">A. Jadwal Majelis yang Bertugas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {jadwalMajelis.map((jadwal, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border-2 border-toraja-merah overflow-hidden">
                {/* Header */}
                <div className="bg-toraja-merah text-white p-4" style={{ backgroundColor: '#D22A2A' }}>
                  <h3 className="font-bold text-lg">{jadwal.tanggal}</h3>
                  <p className="text-toraja-kuning font-semibold mt-1" style={{ color: '#FFD700' }}>Tema: {jadwal.tema}</p>
                  <p className="text-sm mt-1">{jadwal.liturgi}</p>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3 text-sm">
                  {/* Pembacaan Alkitab */}
                  <div className="border-b pb-2">
                    <p className="font-semibold text-toraja-merah">📖 Pembacaan Alkitab:</p>
                    {jadwal.bacaan.map((ayat, i) => (
                      <p key={i} className="text-gray-700 ml-4">• {ayat}</p>
                    ))}
                  </div>

                  {/* Pelayan Firman */}
                  <div>
                    <span className="font-semibold text-toraja-merah">Pelayan Firman (PF):</span>
                    <p className="text-gray-700">{jadwal.pelayanFirman}</p>
                  </div>

                  {/* Pembawa Alkitab */}
                  <div>
                    <span className="font-semibold text-toraja-merah">Pembawa Alkitab (PPA):</span>
                    <p className="text-gray-700">{jadwal.pembawaAlkitab}</p>
                  </div>

                  {/* Liturgis */}
                  <div>
                    <span className="font-semibold text-toraja-merah">Liturgis:</span>
                    <p className="text-gray-700">{jadwal.liturgis}</p>
                  </div>

                  {/* Lektor */}
                  <div>
                    <span className="font-semibold text-toraja-merah">Lektor:</span>
                    {jadwal.lektor.map((nama, i) => (
                      <p key={i} className="text-gray-700">• {nama}</p>
                    ))}
                  </div>

                  {/* Pengedar Pundi */}
                  <div>
                    <span className="font-semibold text-toraja-merah">Pengedar Pundi:</span>
                    {jadwal.pengedarPundi.map((nama, i) => (
                      <p key={i} className="text-gray-700">• {nama}</p>
                    ))}
                  </div>

                  {/* Sambut Jemaat */}
                  <div>
                    <span className="font-semibold text-toraja-merah">Sambut/Hitung Jemaat:</span>
                    {jadwal.sambutJemaat.map((nama, i) => (
                      <p key={i} className="text-gray-700">• {nama}</p>
                    ))}
                  </div>

                  {/* Organis */}
                  <div>
                    <span className="font-semibold text-toraja-merah">Organis/Pemandu Lagu:</span>
                    {jadwal.organis.map((nama, i) => (
                      <p key={i} className="text-gray-700">• {nama}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* B. PETUGAS MULTIMEDIA */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-toraja-merah mb-4">B. Petugas Multimedia</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-toraja-merah">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-toraja-merah text-white" style={{ backgroundColor: '#D22A2A' }}>
                    <th className="px-6 py-3 text-left font-semibold">Posisi</th>
                    <th className="px-6 py-3 text-left font-semibold">Minggu, 23 November 2025<br/>(Pukul 09.00 WIB)</th>
                    <th className="px-6 py-3 text-left font-semibold">Minggu, 30 November 2025<br/>(Pukul 09.00 WIB)</th>
                  </tr>
                </thead>
                <tbody>
                  {petugasMultimedia.map((petugas, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-gray-200 ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="px-6 py-3 font-semibold text-toraja-merah">{petugas.posisi}</td>
                      <td className="px-6 py-3 text-gray-700">{petugas.minggu23}</td>
                      <td className="px-6 py-3 text-gray-700">{petugas.minggu30}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* C. JADWAL PELAYANAN SMGT */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-toraja-merah mb-4">C. Jadwal Pelayanan SMGT</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-toraja-merah">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-toraja-merah text-white" style={{ backgroundColor: '#D22A2A' }}>
                    <th className="px-6 py-3 text-left font-semibold">Kelas</th>
                    <th className="px-6 py-3 text-left font-semibold">Minggu, 23 November 2025<br/>(Pukul 09.00 WIB)</th>
                    <th className="px-6 py-3 text-left font-semibold">Minggu, 30 November 2025<br/>(Pukul 09.00 WIB)</th>
                  </tr>
                </thead>
                <tbody>
                  {jadwalSMGT.map((kelas, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-gray-200 ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="px-6 py-3 font-semibold text-toraja-merah">{kelas.kelas}</td>
                      <td className="px-6 py-3">
                        <div className="space-y-1">
                          {kelas.minggu23.map((petugas, i) => (
                            <p key={i} className="text-gray-700">
                              • {petugas.nama} <span className="text-toraja-merah font-semibold">{petugas.keterangan}</span>
                            </p>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <p className="text-gray-700 italic font-semibold" style={{ color: '#D22A2A' }}>
                          {kelas.minggu30}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Catatan */}
            <div className="bg-toraja-kuning bg-opacity-20 p-4 border-t-2 border-gray-200">
              <p className="text-sm text-gray-700">
                <strong>📌 Catatan:</strong> Jadwal Pelayanan SMGT untuk tanggal 30 November 2025 adalah <strong>Ibadah Lintas Generasi</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Keterangan */}
        <div className="bg-toraja-merah bg-opacity-10 p-4 rounded-lg border-l-4 border-toraja-merah">
          <p className="text-sm text-gray-700">
            <strong>Keterangan:</strong> PF = Pelayan Firman | PL = Pemandu Lagu | PPA = Pembawa Alkitab
          </p>
        </div>
      </div>
    </Layout>
  )
}