import React from 'react';

const RunningText = () => {
  return (
    <div className="bg-yellow-400 text-black py-2 overflow-hidden relative z-50 border-b-2 border-red-600">
      <div className="animate-marquee whitespace-nowrap inline-block">
        <span className="mx-8 font-bold text-lg">⚠️ WEBSITE INI MASIH DALAM TAHAP PEMBANGUNAN ⚠️</span>
        <span className="mx-8 font-bold text-lg">⚠️ WEBSITE INI MASIH DALAM TAHAP PEMBANGUNAN ⚠️</span>
        <span className="mx-8 font-bold text-lg">⚠️ WEBSITE INI MASIH DALAM TAHAP PEMBANGUNAN ⚠️</span>
        <span className="mx-8 font-bold text-lg">⚠️ WEBSITE INI MASIH DALAM TAHAP PEMBANGUNAN ⚠️</span>
      </div>
    </div>
  );
};

export default RunningText;
