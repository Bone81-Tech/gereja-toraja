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
          <h1 className="text-5xl font-extrabold text-toraja-merah tracking-tight">
            Selamat Datang
          </h1>
          <p className="text-lg italic text-gray-700">
            di
          </p>
          <p className="text-3xl font-bold text-gray-800 mt-1">
            Gereja Toraja Jemaat Surabaya
          </p>
          <div className="w-24 h-1 bg-toraja-kuning mx-auto my-6"></div>
          <p className="text-xl text-gray-700 italic">
            "Menjadi berkat bagi sesama dan memuliakan Tuhan"
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

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold text-toraja-merah mb-2">Ibadah Hari Minggu</h2>
          <p className="text-xl text-gray-600">Dilaksanakan setiap pukul 09.00 WIB</p>
        </div>
      </div>
    </Layout>
  )
}