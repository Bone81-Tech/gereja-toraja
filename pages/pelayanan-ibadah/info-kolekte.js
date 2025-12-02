import Head from 'next/head'
import Layout from '../../components/Layout'

export default function InfoKolekte() {
  return (
    <Layout>
      <Head>
        <title>Informasi Kolekte - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Informasi mengenai kolekte dan persembahan di Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Informasi Kolekte</h1>
        <p>Halaman ini akan berisi informasi mengenai berbagai jenis kolekte dan cara memberikan persembahan.</p>
      </div>
    </Layout>
  )
}
