import Head from 'next/head'
import Layout from '../../components/Layout'

export default function ProyekPembangunan() {
  return (
    <Layout>
      <Head>
        <title>Proyek Pembangunan - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Informasi proyek pembangunan Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Proyek Pembangunan</h1>
        <p>Halaman ini akan berisi informasi dan update mengenai proyek-proyek pembangunan gereja.</p>
      </div>
    </Layout>
  )
}
