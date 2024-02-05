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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'ferra': "#734652",
        'mulberry': "#bf567d",
        'cancan': "#d98baf",
        'bloom': "#d9b0c3",
        'maverick': "#d9c5ce",
        'shocking': {
          '50': '#fbf4f8',
          '100': '#f8ebf1',
          '200': '#f2d8e5',
          '300': '#e8b9d0',
          '400': '#d98baf',
          '500': '#cb6993',
          '600': '#b64c74',
          '700': '#9c3a5d',
          '800': '#82324d',
          '900': '#6d2e43',
          '950': '#411624',
      },
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
