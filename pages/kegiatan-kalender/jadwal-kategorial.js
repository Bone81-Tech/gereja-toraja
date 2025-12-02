import Head from 'next/head'
import Layout from '../../components/Layout'

export default function JadwalKategorial() {
  return (
    <Layout>
      <Head>
        <title>Jadwal & Warta Kategorial - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Jadwal dan warta kegiatan kategorial Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Jadwal & Warta Kategorial</h1>
        <p>Halaman ini akan berisi jadwal dan warta kegiatan untuk setiap kategorial (PAR, PAM, PKB, PW).</p>
      </div>
    </Layout>
  )
}
