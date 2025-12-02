import React from 'react';

const techStack = [
  { type: 'text', value: '⚠️ WEBSITE INI MASIH DALAM TAHAP PEMBANGUNAN, menggunakan techstack:' },
  { type: 'text', value: 'Next.js' },
  { type: 'image', src: 'https://static.cdnlogo.com/logos/n/80/next-js.svg', alt: 'Next.js' },
  { type: 'text', value: 'JavaScript' },
  { type: 'image', src: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg', alt: 'JavaScript' },
  { type: 'text', value: 'React' },
  { type: 'image', src: 'https://static.cdnlogo.com/logos/r/63/react.svg', alt: 'React' },
  { type: 'text', value: 'Tailwind CSS' },
  { type: 'image', src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', alt: 'Tailwind CSS' },
  { type: 'text', value: 'npm' },
  { type: 'image', src: 'https://static.cdnlogo.com/logos/n/17/npm-2.svg', alt: 'npm' },
  { type: 'text', value: 'Cloudflare Pages' },
  { type: 'image', src: 'https://cf-icons.pages.dev/pages-logo.svg', alt: 'Cloudflare Pages' },
  { type: 'text', value: ' | Developed by Orang Toraja Asli (Blasteran Ulusalu & Bittuang 😂😂😂)' },
  { type: 'text', value: '⚠️' },
];

// We repeat the content to create a seamless loop for the marquee effect.
const marqueeContent = [...techStack, ...techStack];

const RunningText = () => {
  return (
    <div className="bg-white text-black py-2 overflow-hidden relative z-50 border-b-2 border-red-600">
      <div className="animate-marquee whitespace-nowrap inline-block">
        <span className="mx-8 font-bold text-lg inline-flex items-center">
          {marqueeContent.map((item, index) => (
            <React.Fragment key={index}>
              {item.type === 'text' ? (
                <span className="mx-2">{item.value}</span>
              ) : (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="inline-block h-6 w-auto mx-2"
                />
              )}
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
};

export default RunningText;