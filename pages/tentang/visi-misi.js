import Head from 'next/head'
import Layout from '../../components/Layout'

export default function VisiMisi() {
  return (
    <Layout>
      <Head>
        <title>Visi & Misi - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Visi dan Misi Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Visi & Misi</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-toraja-merah p-6 rounded-lg text-white shadow-lg">
            <h2 className="text-2xl font-semibold text-toraja-kuning mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Visi
            </h2>
            <p className="text-lg">
              Menjadi gereja yang memberitakan Kasih Kristus dan menjadi berkat bagi sesama 
              serta membangun masyarakat yang beriman, berbuah, dan berdaya guna.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-toraja-kuning mb-2">Tujuan Visi:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Mengembangkan iman jemaat yang kokoh dalam Kristus</li>
                <li>Menjadi berkat bagi masyarakat sekitar</li>
                <li>Menghasilkan buah-buah rohani yang nyata</li>
                <li>Meningkatkan kualitas hidup jemaat secara spiritual dan sosial</li>
              </ul>
            </div>
          </div>

          <div className="bg-toraja-kuning p-6 rounded-lg text-toraja-hitam shadow-lg">
            <h2 className="text-2xl font-semibold text-toraja-hitam mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Misi
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>Membangun jemaat dalam iman dan kasih Kristus</li>
              <li>Menjadi berkat bagi masyarakat sekitar</li>
              <li>Melakukan pelayanan sosial dan pendidikan</li>
              <li>Mengembangkan kehidupan gerejawi yang aktif dan produktif</li>
              <li>Menjaga dan melestarikan nilai-nilai budaya Toraja yang sesuai dengan iman Kristen</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-toraja-hitam mb-2">Strategi Misi:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Menyelenggarakan ibadah yang edukatif dan menginspirasi</li>
                <li>Memberikan pelayanan yang ramah dan penuh kasih</li>
                <li>Melakukan pelayanan sosial secara konsisten</li>
                <li>Menyediakan program pembinaan rohani bagi semua usia</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah mt-8">
          <h2 className="text-xl font-semibold text-toraja-merah mb-4">Pernyataan Iman</h2>
          <p className="text-gray-700 mb-4">
            Kami percaya kepada satu Allah yang kekal, yang menciptakan langit dan bumi, 
            dan menyatakan diri-Nya dalam tiga pribadi: Bapa, Anak, dan Roh Kudus. 
            Kami percaya bahwa Yesus Kristus adalah Juruselamat yang datang ke dunia 
            untuk menebus manusia dari dosa melalui kematian dan kebangkitan-Nya.
          </p>
          <p className="text-gray-700">
            Gereja Toraja Jemaat Surabaya juga meneguhkan keyakinannya terhadap 
            Alkitab sebagai Firman Allah yang tidak salah dan menjadi dasar iman 
            serta pedoman hidup bagi semua jemaat.
          </p>
        </div>
      </div>
    </Layout>
  )
}