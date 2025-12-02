import Head from 'next/head'
import Layout from '../../components/Layout'

export default function WartaKedukaan() {
  return (
    <Layout>
      <Head>
        <title>Warta Kedukaan - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Informasi warta kedukaan, sakit, dan doa dari Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Warta Kedukaan, Sakit, dan Doa</h1>
        <p>Halaman ini akan berisi informasi terbaru mengenai kedukaan, jemaat yang sakit, dan pokok-pokok doa.</p>
      </div>
    </Layout>
  )
}
