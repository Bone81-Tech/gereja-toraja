import React from 'react';
// import Link from 'next/link' // Komentar: Diganti dengan <a> agar komponen bisa berjalan mandiri

// Definisi Warna Toraja (dari CSS Variables sebelumnya)
const TORAJA_COLORS = {
  red: "#C41230",      // Merah Darah
  yellow: "#FFC72C",   // Kuning Emas
  black: "#000000",    // Hitam Legam
  white: "#FFFFFF",    // Putih Bersih
};

const Header = ({ toggleSidebar }) => {
  // Array untuk mempermudah pengulangan motif
  // Lebar target coverage: 3000px (untuk layar ultra-wide)
  const SALIB_COUNT = 25; // 3000 / 120 = 25
  const FILLER_COUNT = 25; // 3000 / 120 = 25
  const STAR_COUNT = 36; // 3000 / 85 = ~35.2

  return (
    <header
      className="relative text-white shadow-xl w-full"
      style={{ height: '80px' }}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ backgroundColor: TORAJA_COLORS.black }}
      >
        <svg
          viewBox="0 0 3000 150"
          height="100%"
          width="100%"
          preserveAspectRatio="xMinYMin slice"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
        >
          {/* Background rect, menggunakan properti fill */}
          <rect width="3000" height="150" fill={TORAJA_COLORS.black} /> 
          
          <defs>
            {/* 1. Motif Utama: Salib Toraja */}
            <g id="salib-toraja-scaled">
              {/* A. Outline Putih (Base) */}
              <path d="M 60 2 L 70 30 L 90 30 L 90 50 L 70 50 L 70 90 L 50 90 L 50 50 L 30 50 L 30 30 L 50 30 Z" 
                    fill={TORAJA_COLORS.white} />
              {/* B. Spacer Hitam */}
              <path d="M 60 5 L 68 32 L 85 32 L 85 48 L 68 48 L 68 85 L 52 85 L 52 48 L 35 48 L 35 32 L 52 32 Z" 
                    fill={TORAJA_COLORS.black} />
              {/* C. Pita Merah */}
              <path d="M 60 10 L 65 35 L 80 35 L 80 45 L 65 45 L 65 80 L 55 80 L 55 45 L 40 45 L 40 35 L 55 35 Z" 
                    fill={TORAJA_COLORS.red} />
              {/* D. Pita Kuning (Inner Accent) */}
              <path d="M 60 15 L 63 38 L 75 38 L 75 42 L 63 42 L 63 75 L 57 75 L 57 42 L 45 42 L 45 38 L 57 38 Z" 
                    fill={TORAJA_COLORS.yellow} />
              {/* E. Inti Hitam (Pusat) */}
              <rect x="58" y="40" width="4" height="4" fill={TORAJA_COLORS.black} />
            </g>

            {/* 2. FILLER ATAS (V GANTUNG) */}
            <g id="filler-top-horn-flat">
              <path d="M 0 0 L 60 90 L 120 0 Z" fill={TORAJA_COLORS.white} />
              <path d="M 15 0 L 60 88 L 105 0 Z" fill={TORAJA_COLORS.red} />
              <circle cx="60" cy="75" r="3" fill={TORAJA_COLORS.white} />
            </g>

            {/* 3. BORDER BAWAH (BINTANG) & GIGI */}
            <g id="manik-star-acc-flat">
              <rect x="0" y="2" width="10" height="30" rx="1" fill={TORAJA_COLORS.red} />
              <circle cx="50" cy="18" r="15" fill={TORAJA_COLORS.white} />
              <path d="M 50 5 Q 55 18 63 18 Q 55 18 50 31 Q 45 18 37 18 Q 45 18 50 5 Z" fill={TORAJA_COLORS.black} />
            </g>

            {/* Segitiga Gigi (Runcing) */}
            <polygon id="gigi-acc" points="0,15 10,0 20,15" fill={TORAJA_COLORS.white} />
            <pattern id="pola-gigi-master-flat" x="0" y="0" width="20" height="10" patternUnits="userSpaceOnUse">
              <use href="#gigi-acc" />
            </pattern>
          </defs>

          {/* AREA RENDERING (ASSEMBLY) */}
          <g transform="translate(0, 0)">
            {/* 1. Background Fillers (V Gantung) */}
            <g transform="translate(60, 0)">
              {/* Mengganti pengulangan manual dengan map */}
              <use href="#filler-top-horn-flat" x={-120}/> 
              {Array.from({ length: FILLER_COUNT }).map((_, i) => (
                <use key={`filler-${i}`} href="#filler-top-horn-flat" x={i * 120} />
              ))}
            </g>

            {/* 2. Motif Utama (Salib Toraja) */}
            <g>
              {Array.from({ length: SALIB_COUNT }).map((_, i) => (
                <use key={`salib-${i}`} href="#salib-toraja-scaled" x={i * 120} />
              ))}
              <use href="#salib-toraja-scaled" x={3000} /> {/* Tambahan untuk memastikan penuh di ujung kanan */}
            </g>
          </g>

          {/* GROUP B: TENGAH (BARISAN GIGI PEMISAH) - Y=90 */}
          <g transform="translate(0, 90)">
            <rect width="3000" height="10" fill={TORAJA_COLORS.black} />
            <rect width="3000" height="10" fill="url(#pola-gigi-master-flat)" />
          </g>

          {/* GROUP C: BAWAH (BORDER BINTANG) - Y=100 */}
          <g transform="translate(0, 100)">
            {/* Garis Putih Pemisah Atas */}
            <rect x="0" y="0" width="3000" height="2" fill={TORAJA_COLORS.white} />

            {/* 1. Gigi Kecil Atas (Menghadap Bawah) */}
            <g transform="translate(0, 2)">
              <rect width="3000" height="10" fill={TORAJA_COLORS.black} />
              <g transform="scale(1, -1) translate(0, -10)">
                <rect width="3000" height="10" fill="url(#pola-gigi-master-flat)" />
              </g>
            </g>

            {/* 2. Band Utama (Bintang) */}
            <rect x="0" y="12" width="3000" height="30" fill={TORAJA_COLORS.black} />
            
            {/* Isi Band (Jarak 85px) */}
            <g transform="translate(5, 12)"> 
              {Array.from({ length: STAR_COUNT }).map((_, i) => (
                <use key={`star-${i}`} href="#manik-star-acc-flat" x={i * 85} />
              ))}
            </g>

            {/* 3. Gigi Kecil Bawah (Menghadap Atas) */}
            <g transform="translate(0, 42)">
              <rect width="3000" height="10" fill={TORAJA_COLORS.black} />
              <rect width="3000" height="10" fill="url(#pola-gigi-master-flat)" />
            </g>

            {/* Garis Putih Pemisah Bawah */}
            <rect x="0" y="52" width="3000" height="2" fill={TORAJA_COLORS.white} />
          </g>
        </svg>
      </div>
      
      {/* Navigation Content (Di atas SVG dengan z-index) */}
      <div className="relative z-10 container mx-auto flex justify-between items-center p-4 h-full">
        <div className="flex items-center space-x-4">
          {/* Logo / Title area could go here */}
        </div>
      </div>
    </header>
  );
}

export default Header;