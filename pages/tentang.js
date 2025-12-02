import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Tentang() {
  return (
    <Layout>
      <Head>
        <title>Tentang Kami - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Tentang Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-toraja-merah mb-4">Tentang Kami</h1>
          <div className="w-24 h-1 bg-toraja-kuning mx-auto"></div>
        </div>

        <Card className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Sejarah Gereja</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3">
              <Image
                src="/images/foto-gereja-toraja.webp"
                alt="Gedung Gereja Toraja Jemaat Surabaya"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
                Gereja Toraja Jemaat Surabaya berdiri pada tahun 1960-an sebagai tempat berkumpulnya
                jemaat dari suku Toraja yang merantau ke Surabaya. Awalnya, ibadah dilakukan secara
                sederhana di rumah-rumah jemaat sebelum akhirnya memiliki gedung gereja permanen.
              </p>
              <p className="text-gray-700">
                Dalam perjalannya, gereja ini telah menjadi tempat yang tidak hanya digunakan untuk
                beribadah, tetapi juga sebagai wadah pelayanan dan pembinaan rohani bagi jemaat.
              </p>
            </div>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Visi & Misi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-toraja-merah p-5 rounded-lg text-white">
              <h3 className="text-xl font-semibold text-toraja-kuning mb-3">Visi</h3>
              <p className="text-white">
                Menjadi gereja yang memberitakan Kasih Kristus dan menjadi berkat bagi sesama
                serta membangun masyarakat yang beriman, berbuah, dan berdaya guna.
              </p>
            </div>
            <div className="bg-toraja-kuning p-5 rounded-lg text-toraja-hitam">
              <h3 className="text-xl font-semibold text-toraja-hitam mb-3">Misi</h3>
              <ul className="list-disc pl-5 text-toraja-hitam space-y-2">
                <li>Membangun jemaat dalam iman dan kasih Kristus</li>
                <li>Menjadi berkat bagi masyarakat sekitar</li>
                <li>Melakukan pelayanan sosial dan pendidikan</li>
                <li>Mengembangkan kehidupan gerejawi yang aktif dan produktif</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Pelayanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-toraja-merah rounded-lg p-4 text-center hover:shadow-md transition bg-gray-50">
              <div className="w-12 h-12 bg-toraja-merah rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-toraja-merah mb-2">Pelayanan Ibadah</h3>
              <p className="text-gray-600 text-sm">Ibadah mingguan dalam tiga pelayanan berbeda</p>
            </div>
            <div className="border-2 border-toraja-merah rounded-lg p-4 text-center hover:shadow-md transition bg-gray-50">
              <div className="w-12 h-12 bg-toraja-merah rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-toraja-merah mb-2">Pelayanan Kaum Muda</h3>
              <p className="text-gray-600 text-sm">Kegiatan pembinaan untuk anak muda</p>
            </div>
            <div className="border-2 border-toraja-merah rounded-lg p-4 text-center hover:shadow-md transition bg-gray-50">
              <div className="w-12 h-12 bg-toraja-merah rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-toraja-merah mb-2">Pelayanan Sosial</h3>
              <p className="text-gray-600 text-sm">Bakti sosial untuk masyarakat sekitar</p>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <Button variant="primary" size="lg">
            Bergabung dengan Kami
          </Button>
        </div>
      </div>
    </Layout>
  );
}