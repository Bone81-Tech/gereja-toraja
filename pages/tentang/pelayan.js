import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'

export default function PelayanGereja() {
  // Data pelayan gereja
  const pelayanList = [
    {
      id: 1,
      nama: 'Pdt. Yohanes Toding',
      jabatan: 'Pendeta',
      foto: '/images/foto-gereja-toraja.webp', // Placeholder
      deskripsi: 'Pendeta utama gereja dengan pengalaman pelayanan lebih dari 15 tahun. Lulusan Sekolah Tinggi Teologi Jakarta.',
      pelayanan: 'Pelayanan umum, pembinaan rohani, dan pemberitaan Firman'
    },
    {
      id: 2,
      nama: 'Ibu Sarah Toding',
      jabatan: 'Pembantu Pendeta',
      foto: '/images/foto-gereja-toraja.webp', // Placeholder
      deskripsi: 'Pembantu pendeta dengan fokus pada pelayanan kaum perempuan dan anak-anak.',
      pelayanan: 'Pelayanan wanita, sekolah minggu, dan pelayanan sosial'
    },
    {
      id: 3,
      nama: 'Bapak Yusak Rende',
      jabatan: 'Pelayan Jemaat',
      foto: '/images/foto-gereja-toraja.webp', // Placeholder
      deskripsi: 'Pelayan dengan pengalaman panjang dalam pemerintahan gereja. Aktif dalam pelayanan doa dan konseling.',
      pelayanan: 'Pelayanan doa, konseling, dan pelayanan jemaat'
    },
    {
      id: 4,
      nama: 'Ibu Maria Paruntu',
      jabatan: 'Pelayan Wanita',
      foto: '/images/foto-gereja-toraja.webp', // Placeholder
      deskripsi: 'Pelayan khusus wanita dengan fokus pada pembinaan keluarga kristiani.',
      pelayanan: 'Pelayanan wanita, pembinaan keluarga, dan pelayanan anak'
    },
    {
      id: 5,
      nama: 'Bapak Daniel Tangdilera',
      jabatan: 'Pelayan Pemuda',
      foto: '/images/foto-gereja-toraja.webp', // Placeholder
      deskripsi: 'Pelayan khusus pemuda dengan semangat muda dalam pelayanan dan penanaman nilai-nilai kristiani.',
      pelayanan: 'Pelayanan pemuda, pujian dan penyembahan, serta pembinaan rohani'
    }
  ]

  // Data pelayan pujian
  const pelayanPujian = [
    {
      id: 1,
      nama: 'Ibu Sari Indah',
      jabatan: 'Koordinator Pujian',
      pelayanan: 'Pemimpin pujian utama dan penata lagu untuk ibadah'
    },
    {
      id: 2,
      nama: 'Bapak Petrus Toding',
      jabatan: 'Pemain Keyboard',
      pelayanan: 'Melayani dengan keyboard dalam setiap ibadah dan kegiatan gerejawi'
    },
    {
      id: 3,
      nama: 'Tim Pujian Toraja',
      jabatan: 'Anggota Pujian',
      pelayanan: 'Melayani pujian dalam berbagai bahasa termasuk Toraja, Indonesia, dan Bahasa Inggris'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Pelayan Gereja - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Pelayan-pelayan gereja Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Pelayan Gereja</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah mb-8">
          <h2 className="text-xl font-semibold text-toraja-merah mb-3">Tentang Pelayan Gereja</h2>
          <p className="text-gray-700">
            Pelayan gereja merupakan warga jemaat yang dipanggil dan ditahbiskan untuk melayani 
            kebutuhan rohani dan organisasi gereja. Setiap pelayan dipilih berdasarkan karunia, 
            kerinduan, dan komitmen untuk melayani Tuhan dan sesama dalam kasih Kristus.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Pelayan Pimpinan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pelayanList.map((pelayan) => (
              <div key={pelayan.id} className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
                  <Image
                    src={pelayan.foto}
                    alt={pelayan.nama}
                    width={120}
                    height={120}
                    className="rounded-full w-30 h-30 object-cover border-2 border-toraja-merah"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-semibold text-lg text-toraja-merah">{pelayan.nama}</h3>
                  <p className="font-medium text-toraja-kuning">{pelayan.jabatan}</p>
                  <p className="text-sm text-gray-600 mb-2">{pelayan.deskripsi}</p>
                  <div className="mt-2">
                    <p className="text-gray-700 text-sm"><span className="font-medium">Pelayanan:</span> {pelayan.pelayanan}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Pelayan Pujian & Penyembahan</h2>
          <div className="space-y-4">
            {pelayanPujian.map((pelayan) => (
              <div key={pelayan.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <h3 className="font-semibold text-lg text-toraja-merah">{pelayan.nama}</h3>
                <p className="font-medium text-toraja-kuning">{pelayan.jabatan}</p>
                <p className="text-gray-700 text-sm">{pelayan.pelayanan}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-toraja-kuning p-6 rounded-lg border-2 border-toraja-merah">
          <h2 className="text-xl font-semibold text-toraja-hitam mb-3">Proses Penahbisan Pelayan</h2>
          <p className="text-toraja-hitam mb-3">
            Proses penahbisan pelayan gereja dilakukan secara khusyuk dan penuh suka cita. 
            Sebelum ditahbiskan, calon pelayan melalui proses pembinaan dan seleksi yang ketat 
            yang mencakup:
          </p>
          <ul className="list-disc pl-5 text-toraja-hitam space-y-1">
            <li>Seleksi berdasarkan karunia dan kerinduan melayani</li>
            <li>Pembinaan rohani selama 6 bulan</li>
            <li>Uji kelayakan di hadapan majelis</li>
            <li>Pemilihan oleh sidang jemaat</li>
            <li>Penahbisan dalam ibadah khusus</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}