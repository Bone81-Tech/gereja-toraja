import Head from 'next/head'
import Layout from '../../components/Layout'

export default function RenunganMingguIni() {
  return (
    <Layout>
      <Head>
        <title>Renungan Minggu Ini - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Renungan minggu ini dari Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Renungan Minggu Ini</h1>

        {/* Renungan Utama */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-toraja-merah mb-6">
          {/* Header Renungan */}
          <div className="mb-6 pb-4 border-b-2 border-toraja-kuning">
            <h2 className="text-2xl font-bold text-toraja-merah mb-2">
              Yesus Menyambut Semua Generasi
            </h2>
            <p className="text-lg text-gray-600 italic mb-1">
              (Mintu' bati' siosso' nakarangi melo Puang Yesus)
            </p>
            <p className="text-sm font-semibold text-toraja-hitam bg-toraja-kuning inline-block px-3 py-1 rounded">
              Lukas 18:15-17
            </p>
          </div>

          {/* Isi Renungan */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Pernah ada seorang ibu memposting keresahannya di salah satu akun media sosialnya. Ia mengungkapkan rasa bersalahnya ketika harus membawa anaknya yang masih kecil ke gereja, sebab ia tahu ada sebagian warga jemaat yang merasa tidak nyaman dengan kehadiran anak-anak. Faktanya, memang tidak sedikit warga jemaat yang berpikir bahwa kehadiran anak-anak dalam peribadahan hanya akan mengganggu, entah karena dianggap ribut, berlarian, atau bahkan memindah-mindahkan barang. Hal ini jugalah yang tergambar dalam kasih Yesus memberkati anak-anak. Dikisahkan bahwa para orang tua datang membawa anak-anak mereka yang masih kecil kepada Yesus, namun murid-murid Yesus memarahi mereka. Bagian ini mengungkapkan bahwa tugas membawa anak-anak kepada pengenalan akan Kristus bukanlah hal yang mudah. Akan selalu ada halangan dan tantangan, namun tanggapan Yesus seharusnya mampu memotivasi kita kembali tentang bagaimana anak-anak seharusnya dididik atau dilatih.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Dua hal penting dalam tanggapan Yesus, diantaranya: <strong>pertama</strong>, Yesus menerima anak-anak. Ini menegaskan bahwa dihadapan Yesus, tidak ada muda ataupun terlalu tua. Semua generasi boleh datang dan disambut-Nya dengan cara yang sama; <strong>Kedua</strong>, Yesus menggunakan sikap anak-anak sebagai syarat untuk diterima dalam kerajaan-Nya, yakni sikap yang apa adanya dan penuh dengan kegembiraan. Sikap-sikap inilah yang Yesus harapkan dari kita ketika datang kepada-Nya. Dengan demikian, setiap orangtua Kristen juga diharapkan akan mengalami perubahan pola pikir, yakni untuk memberi ruang bagi anak-anak sedini mungkin untuk mengenal Yesus melalui setiap kesempatan dan pada jalan yang kita bisa (Ams. 22:6). Amin.
            </p>
          </div>

          {/* Footer Renungan */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-right text-sm text-gray-600 italic">
              REHAT-Renungan Harian, 23 November 2025
            </p>
          </div>
        </div>

        {/* Info Tambahan */}
        <div className="bg-toraja-kuning bg-opacity-20 p-6 rounded-lg border-l-4 border-toraja-merah">
          <h3 className="text-lg font-semibold text-toraja-merah mb-3">
            📖 Bacaan Alkitab Minggu Ini
          </h3>
          <p className="text-gray-700">
            <strong>Lukas 18:15-17</strong> - "Yesus Memberkati Anak-anak"
          </p>
          <p className="text-sm text-gray-600 mt-2 italic">
            Renungan ini mengingatkan kita untuk menyambut semua generasi dalam kasih Kristus, terutama anak-anak yang memiliki iman yang tulus dan sederhana.
          </p>
        </div>
      </div>
    </Layout>
  )
}