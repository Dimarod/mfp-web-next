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
        mainbg: "#F5F5DC",
        maintxt: "#424242",
        buttons: "#D4AF37",
        secondtxt: "#E0E0E0"
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
