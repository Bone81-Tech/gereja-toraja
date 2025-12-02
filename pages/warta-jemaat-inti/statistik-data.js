import Head from 'next/head'
import Layout from '../../components/Layout'

export default function StatistikData() {
  return (
    <Layout>
      <Head>
        <title>Statistik & Data Jemaat - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Statistik dan data jemaat Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Statistik & Data Jemaat</h1>
        <p>Halaman ini akan menampilkan berbagai statistik dan data terkait jemaat.</p>
      </div>
    </Layout>
  )
}
