import Head from 'next/head'
import Layout from '../../components/Layout'

export default function StrukturOrganisasi() {
  // Data struktur organisasi
  const strukturOrganisasi = [
    {
      id: 1,
      nama: 'Pdt. Yohanes Toding',
      jabatan: 'Pendeta',
      periode: '2015 - Sekarang',
      deskripsi: 'Bertugas sebagai pendeta utama gereja, memimpin ibadah dan memberikan pembinaan rohani'
    },
    {
      id: 2,
      nama: 'Bapak Yusak Rende',
      jabatan: 'Ketua Majelis Jemaat',
      periode: '2020 - 2024',
      deskripsi: 'Menyelenggarakan pemerintahan jemaat dan mengkoordinasikan pelayanan-pelayanan gerejawi'
    },
    {
      id: 3,
      nama: 'Ibu Maria Paruntu',
      jabatan: 'Sekretaris Majelis',
      periode: '2020 - 2024',
      deskripsi: 'Mengurus administrasi majelis dan mencatat kegiatan pelayanan gereja'
    },
    {
      id: 4,
      nama: 'Bapak Daniel Tangdilera',
      jabatan: 'Bendahara',
      periode: '2020 - 2024',
      deskripsi: 'Mengelola keuangan gereja dan membuat laporan keuangan secara transparan'
    },
    {
      id: 5,
      nama: 'Tim Pemuda',
      jabatan: 'Pelayanan Pemuda',
      periode: '2022 - 2025',
      deskripsi: 'Merencanakan dan melaksanakan pelayanan bagi kaum muda gereja'
    },
    {
      id: 6,
      nama: 'Tim Wanita',
      jabatan: 'Pelayanan Wanita',
      periode: '2021 - 2025',
      deskripsi: 'Melaksanakan pelayanan khusus untuk jemaat wanita dan keluarga'
    }
  ]

  // Data departemen pelayanan
  const departemenPelayanan = [
    {
      nama: 'Pemusik Gereja',
      ketua: 'Ibu Sari Indah',
      anggota: 8,
      deskripsi: 'Melayani dalam pujian dan penyembahan di setiap ibadah'
    },
    {
      nama: 'Unit Pelayanan Altar',
      ketua: 'Bapak Petrus Toding',
      anggota: 12,
      deskripsi: 'Melayani persiapan dan pelaksanaan sakramen-sakramen gereja'
    },
    {
      nama: 'Tim Doa',
      ketua: 'Ibu Yohana Rende',
      anggota: 15,
      deskripsi: 'Menyelenggarakan persekutuan doa dan mendoakan kebutuhan jemaat'
    },
    {
      nama: 'Konseling',
      ketua: 'Pdt. Yohanes Toding',
      anggota: 5,
      deskripsi: 'Memberikan layanan konseling rohani bagi jemaat yang membutuhkan'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Struktur Organisasi - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Struktur organisasi Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Struktur Organisasi</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah mb-8">
          <h2 className="text-xl font-semibold text-toraja-merah mb-4">Gambaran Umum</h2>
          <p className="text-gray-700 mb-4">
            Struktur organisasi Gereja Toraja Jemaat Surabaya dibentuk untuk melayani 
            kebutuhan rohani dan administrasi jemaat secara efektif dan efisien. 
            Organisasi gereja terdiri dari majelis jemaat yang dipimpin oleh pendeta, 
            serta berbagai pelayanan yang dijalankan oleh tim-tim pelayan yang ditahbiskan.
          </p>
          <p className="text-gray-700">
            Kami percaya bahwa setiap jemaat dipanggil untuk melayani sesuai dengan 
            karunia yang Tuhan berikan, sehingga semua pelayanan dilakukan secara 
            sukarela dan penuh kasih.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Majelis Jemaat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strukturOrganisasi.map((anggota) => (
              <div key={anggota.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md">
                <h3 className="font-semibold text-lg text-toraja-merah">{anggota.nama}</h3>
                <p className="font-medium text-toraja-kuning">{anggota.jabatan}</p>
                <p className="text-sm text-gray-600 mb-2">Periode: {anggota.periode}</p>
                <p className="text-gray-700 text-sm">{anggota.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Departemen Pelayanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {departemenPelayanan.map((dept, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md bg-gray-50">
                <h3 className="font-semibold text-lg text-toraja-merah">{dept.nama}</h3>
                <p className="text-sm text-gray-600">Ketua: {dept.ketua}</p>
                <p className="text-sm text-gray-600 mb-2">{dept.anggota} anggota aktif</p>
                <p className="text-gray-700 text-sm">{dept.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-toraja-merah p-6 rounded-lg text-white">
          <h2 className="text-xl font-semibold text-toraja-kuning mb-3">Proses Pemilihan Pemimpin</h2>
          <p className="mb-3">
            Pemilihan pemimpin dan pelayan gereja dilakukan melalui sidang jemaat 
            yang diadakan secara berkala. Calon pemimpin dipilih berdasarkan kualifikasi 
            rohani, pelayanan, dan komitmen terhadap gereja.
          </p>
          <p>
            Semua pelayan gereja dipilih untuk masa bakti tertentu dan dapat dipercayakan 
            kembali untuk masa bakti berikutnya berdasarkan sidik jemaat dan kebutuhan pelayanan.
          </p>
        </div>
      </div>
    </Layout>
  )
}