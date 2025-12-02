import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  // Submenu untuk Tentang Kami
  const tentangKamiMenu = [
    { name: "Sejarah Gereja", href: "/tentang/sejarah" },
    { name: "Visi & Misi", href: "/tentang/visi-misi" },
    { name: "Struktur Organisasi", href: "/tentang/struktur" },
    { name: "Pelayan Gereja", href: "/tentang/pelayan" },
  ];

  // Submenu untuk Warta Jemaat (Gabungan dari 5 menu)
  const wartaJemaatMenu = [
    // Pelayanan & Ibadah
    { name: "Renungan", href: "/pelayanan-ibadah/renungan" },
    { name: "Bacaan Alkitab", href: "/pelayanan-ibadah/bacaan-alkitab" },
    { name: "Petugas Pelayanan", href: "/pelayanan-ibadah/petugas-pelayanan" },
    { name: "Info Kolekte", href: "/pelayanan-ibadah/info-kolekte" },
    
    // Warta Jemaat Inti
    { name: "Warta Kedukaan/Sakit/Doa", href: "/warta-jemaat-inti/warta-kedukaan" },
    { name: "Warta Personal", href: "/warta-jemaat-inti/warta-personal" },
    { name: "Pengumuman Umum", href: "/warta-jemaat-inti/pengumuman-umum" },
    { name: "Statistik & Data", href: "/warta-jemaat-inti/statistik-data" },
    
    // Keuangan & Aset
    { name: "Laporan Keuangan Mingguan", href: "/keuangan-aset/laporan-keuangan-mingguan" },
    { name: "Proyek Pembangunan", href: "/keuangan-aset/proyek-pembangunan" },
    
    // Kegiatan & Kalender
    { name: "Jadwal & Warta Kategorial", href: "/kegiatan-kalender/jadwal-kategorial" },
    { name: "Ibadah Rumah Tangga/Wilayah", href: "/kegiatan-kalender/ibadah-wilayah" },
    { name: "Kalender Khusus/Hari Raya", href: "/kegiatan-kalender/kalender-khusus" },
    { name: "Kegiatan Pembinaan & Pelayanan", href: "/kegiatan-kalender/kegiatan-pembinaan" },
    
    // Pelayanan
    { name: "Pemuda", href: "/pelayanan/pemuda" },
    { name: "Anak-anak", href: "/pelayanan/anak" },
    { name: "Wanita", href: "/pelayanan/wanita" },
    { name: "Pendewasa", href: "/pelayanan/pendewasa" },
    { name: "Penasihat", href: "/pelayanan/penasihat" },
  ];

  // Menu utama
  const mainMenu = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", submenu: tentangKamiMenu, menuName: "tentangKami" },
    { name: "Warta Jemaat", submenu: wartaJemaatMenu, menuName: "wartaJemaat" },
    { name: "Pengurus", href: "/pengurus" },
    { name: "Galeri", href: "/galeri" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside 
        className={`
          fixed md:relative z-30
          bg-[#1A1A1A] text-white w-64 h-full flex-shrink-0 p-4
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="mb-8 h-full overflow-y-auto pb-20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">MENU</h2>
            <button onClick={closeSidebar} className="md:hidden text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <ul className="space-y-2">
            {mainMenu.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleMenu(item.menuName)}
                      className="flex justify-between items-center w-full text-left p-2 hover:bg-toraja-merah rounded transition"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          activeMenu === item.menuName ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeMenu === item.menuName && (
                      <ul className="ml-4 mt-2 space-y-1 bg-toraja-merah-muda p-2 rounded">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className="block p-2 hover:bg-toraja-kuning hover:text-toraja-hitam rounded transition"
                              onClick={() => {
                                // Optional: close sidebar on mobile when link clicked
                                // closeSidebar(); 
                              }}
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
                    className="block p-2 hover:bg-toraja-merah rounded transition"
                    onClick={() => {
                       // Optional: close sidebar on mobile when link clicked
                       // closeSidebar();
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-[#1A1A1A] border-t border-toraja-merah">
          <p className="text-sm text-toraja-kuning text-center">
            GEREJA TORAJA JEMAAT SURABAYA &copy; {new Date().getFullYear()}
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
