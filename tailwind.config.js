/** @type {import('tailwindcss').Config} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#000000',
        'brand-platinum': '#E5E5E5',     // Fondo general sugerido
        'brand-vanilla': '#DDC1A6',      // Acento principal
        'brand-vanilla-dark': '#c5aa90', // Para efectos hover
      },
      fontFamily:{
        display: ['var(--font-tenor)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif']
      },
      spacing: {
        '1/5' : '20%',
        '2/5' : '40%',
        '3/5' : '60%',
        '4/5' : '80%',
        '5/5' : '100%',
        '14/15' : '93%',
        '2/7': '30%'
        
        
      },
      
    
    },
  },
  plugins: [],
};
