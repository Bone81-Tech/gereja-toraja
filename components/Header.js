import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-white text-blue-900 font-bold text-xl p-2 rounded">GTS</div>
          <h1 className="text-xl font-semibold">GEREJA TORAJA JEMAAT SURABAYA</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-blue-300 transition">Beranda</Link></li>
            <li><Link href="/tentang" className="hover:text-blue-300 transition">Tentang</Link></li>
            <li><Link href="/kontak" className="hover:text-blue-300 transition">Kontak</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header