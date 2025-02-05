/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-shape': "url('/closedAcordeon.svg')",
        'second-custom-shape': "url('/openAcordeon.svg')",
      },
      screens: {
        hd: '1920px',
      },
      
    },
  },
  plugins: [],
};
