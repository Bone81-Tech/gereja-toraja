import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'

export default function SejarahGereja() {
  return (
    <Layout>
      <Head>
        <title>Sejarah Gereja - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Sejarah Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Sejarah Gereja</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
            <div className="md:w-2/5">
              <Image
                src="/images/foto-gereja-toraja.webp"
                alt="Gedung Gereja Toraja Jemaat Surabaya"
                width={300}
                height={200}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-3/5">
              <h2 className="text-xl font-semibold text-toraja-merah mb-3">Asal-usul Berdirinya</h2>
              <p className="text-gray-700">
                Gereja Toraja Jemaat Surabaya berdiri pada tahun 1960-an sebagai tempat berkumpulnya 
                jemaat dari suku Toraja yang merantau ke Surabaya. Awalnya, ibadah dilakukan secara 
                sederhana di rumah-rumah jemaat sebelum akhirnya memiliki gedung gereja permanen.
              </p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h3 className="text-xl font-semibold text-toraja-merah mt-6 mb-3">Periode Awal (1960-an)</h3>
            <p>
              Pada awal berdirinya, jemaat gereja Toraja di Surabaya masih sangat sedikit. 
              Hanya beberapa kepala keluarga yang berasal dari Toraja yang tinggal di Surabaya 
              untuk bekerja atau menuntut ilmu. Namun semangat untuk tetap beribadah dan 
              mempertahankan iman serta kebudayaan Toraja tetap tinggi.
            </p>

            <h3 className="text-xl font-semibold text-toraja-merah mt-6 mb-3">Periode Perkembangan (1970-1990)</h3>
            <p>
              Seiring berjalannya waktu, jumlah jemaat semakin bertambah seiring dengan 
              meningkatnya jumlah orang Toraja yang merantau ke Surabaya. Gereja mulai 
              memiliki struktur organisasi yang lebih formal dan kegiatan pelayanan yang 
              lebih teratur. Pada periode ini pula, gedung gereja permanen mulai dibangun.
            </p>

            <h3 className="text-xl font-semibold text-toraja-merah mt-6 mb-3">Periode Modern (1990-sekarang)</h3>
            <p>
              Dalam beberapa dekade terakhir, Gereja Toraja Jemaat Surabaya telah berkembang 
              pesat. Jemaat semakin aktif dalam berbagai pelayanan gerejawi dan sosial. 
              Gereja juga telah memiliki berbagai pelayanan khusus untuk pemuda, anak-anak, 
              wanita, dan kelompok usia lainnya.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-toraja-merah mt-6">
              <h4 className="font-semibold text-toraja-merah mb-2">Nilai-nilai yang Dijunjung</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Setia pada Firman Tuhan dan tradisi gerejawi</li>
                <li>Saling mengasihi sesama jemaat seperti saudara se-Tuhan</li>
                <li>Menjunjung tinggi nilai-nilai budaya Toraja yang sesuai dengan iman Kristen</li>
                <li>Menjadi berkat bagi masyarakat sekitar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}