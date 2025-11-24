import Link from 'next/link'
import { useState } from 'react'

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null)

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName)
  }

  // Submenu untuk Warta Jemaat
  const wartaJemaatMenu = [
    { name: 'Berita Gereja', href: '/warta-jemaat/berita' },
    { name: 'Agenda Ibadah', href: '/warta-jemaat/agenda' },
    { name: 'Pengumuman', href: '/warta-jemaat/pengumuman' },
    { name: 'Renungan Harian', href: '/warta-jemaat/renungan' },
    { name: 'Laporan Keuangan', href: '/warta-jemaat/laporan-keuangan' },
    { name: 'Kegiatan Sosial', href: '/warta-jemaat/kegiatan-sosial' },
    { name: 'Jadwal Pelayanan', href: '/warta-jemaat/jadwal-pelayanan' },
    { name: 'Berita Internal', href: '/warta-jemaat/berita-internal' },
  ]

  // Submenu untuk Tentang Kami
  const tentangKamiMenu = [
    { name: 'Sejarah Gereja', href: '/tentang/sejarah' },
    { name: 'Visi & Misi', href: '/tentang/visi-misi' },
    { name: 'Struktur Organisasi', href: '/tentang/struktur' },
    { name: 'Pelayan Gereja', href: '/tentang/pelayan' },
  ]

  // Submenu untuk Pelayanan
  const pelayananMenu = [
    { name: 'Pemuda', href: '/pelayanan/pemuda' },
    { name: 'Anak-anak', href: '/pelayanan/anak' },
    { name: 'Wanita', href: '/pelayanan/wanita' },
    { name: 'Pendewasa', href: '/pelayanan/pendewasa' },
    { name: 'Penasihat', href: '/pelayanan/penasihat' },
  ]

  // Menu utama
  const mainMenu = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', submenu: tentangKamiMenu, menuName: 'tentangKami' },
    { name: 'Warta Jemaat', submenu: wartaJemaatMenu, menuName: 'wartaJemaat' },
    { name: 'Pelayanan', submenu: pelayananMenu, menuName: 'pelayanan' },
    { name: 'Pengurus', href: '/pengurus' },
    { name: 'Galeri', href: '/galeri' },
    { name: 'Kontak', href: '/kontak' },
  ]

  return (
    <aside className="bg-blue-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">MENU</h2>
        <ul className="space-y-2">
          {mainMenu.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleMenu(item.menuName)}
                    className="flex justify-between items-center w-full text-left p-2 hover:bg-blue-700 rounded transition"
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${activeMenu === item.menuName ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeMenu === item.menuName && (
                    <ul className="ml-4 mt-2 space-y-1 bg-blue-700 p-2 rounded">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block p-2 hover:bg-blue-600 rounded transition"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block p-2 hover:bg-blue-700 rounded transition"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pt-8 border-t border-blue-700">
        <p className="text-sm text-blue-300">
          GEREJA TORAJA JEMAAT SURABAYA &copy; {new Date().getFullYear()}
        </p>
      </div>
    </aside>
  )
}

export default Sidebar