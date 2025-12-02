import Head from 'next/head'
import Layout from '../../components/Layout'

export default function KalenderKhusus() {
  return (
    <Layout>
      <Head>
        <title>Kalender Khusus & Hari Raya - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Kalender khusus dan hari raya Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Kalender Khusus & Hari Raya</h1>
        <p>Halaman ini akan menampilkan kalender berisi hari-hari besar gerejawi dan acara khusus lainnya.</p>
      </div>
    </Layout>
  )
}
