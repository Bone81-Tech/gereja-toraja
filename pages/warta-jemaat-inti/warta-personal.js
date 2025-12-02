import Head from 'next/head'
import Layout from '../../components/Layout'

export default function WartaPersonal() {
  return (
    <Layout>
      <Head>
        <title>Warta Personal - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Informasi warta personal jemaat dari Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Warta Personal</h1>
        <p>Halaman ini akan berisi informasi personal jemaat seperti ulang tahun, kelahiran, pernikahan, dll.</p>
      </div>
    </Layout>
  )
}
