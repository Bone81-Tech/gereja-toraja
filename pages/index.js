import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Website resmi Gereja Toraja Jemaat Surabaya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-toraja-merah mb-4">
            Selamat Datang di GEREJA TORAJA JEMAAT SURABAYA
          </h1>
          <div className="w-24 h-1 bg-toraja-kuning mx-auto mb-6"></div>
          <p className="text-xl text-gray-700">
            Menjadi berkat bagi sesama dan memuliakan Tuhan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/images/foto-gereja-toraja.webp"
              alt="Gereja Toraja Jemaat Surabaya"
              width={500}
              height={300}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Tentang Kami</h2>
            <p className="text-gray-700 mb-4">
              Gereja Toraja Jemaat Surabaya adalah komunitas iman yang berkomitmen untuk menyembah
              Tuhan dan melayani sesama dengan kasih Kristus. Kami berdiri sejak lama sebagai tempat
              orang-orang percaya berkumpul, belajar Firman Tuhan, dan saling mendukung dalam iman.
            </p>
            <p className="text-gray-700">
              Kami percaya bahwa gereja bukan hanya sebuah bangunan, tetapi komunitas yang hidup
              untuk memuliakan Tuhan dan menjadi berkat bagi dunia.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-toraja-merah mb-4">Ibadah Minggu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-toraja-merah p-4 rounded text-center bg-gray-50">
              <h3 className="font-medium text-toraja-merah">Pelayanan I</h3>
              <p className="mt-2">07.00 WIB</p>
            </div>
            <div className="border-2 border-toraja-merah p-4 rounded text-center bg-gray-50">
              <h3 className="font-medium text-toraja-merah">Pelayanan II</h3>
              <p className="mt-2">09.00 WIB</p>
            </div>
            <div className="border-2 border-toraja-merah p-4 rounded text-center bg-gray-50">
              <h3 className="font-medium text-toraja-merah">Pelayanan III</h3>
              <p className="mt-2">17.00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}