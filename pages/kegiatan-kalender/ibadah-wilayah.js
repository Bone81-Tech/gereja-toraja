import Head from 'next/head'
import Layout from '../../components/Layout'

export default function IbadahWilayah() {
  return (
    <Layout>
      <Head>
        <title>Ibadah Rumah Tangga / Wilayah - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Informasi ibadah rumah tangga dan wilayah Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Ibadah Rumah Tangga / Wilayah</h1>
        <p>Halaman ini akan berisi jadwal dan lokasi ibadah rumah tangga dan wilayah jemaat.</p>
      </div>
    </Layout>
  )
}
