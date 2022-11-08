/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color-blue":"#4151FF",
        "secondary-color-blue":"#A3C5F8"

      },
      keyframes:{
        navbar:{
          "0%":{
            opacity: '0',
            transform: 'scale(.8)'
          },
        
          "70%":{
            opacity: '1',
            transform: 'scale(1.05)',
          },
          "100%":{
            transform: 'scale(1)',
          },
        },
        slider: {
          "0%":{
            opacity: '0',
            transform: 'scale(.8)'
          },
        
          "50%":{
            opacity: '0.6',
            transform: 'scale(0.9)',
          },
          "100%":{
            opacity: '1',
            transform: 'scale(1)',
          },
        }
      },
      animation:{
        'nav' :' navbar 1s linear',
        'slider' : 'slider 500ms linear '
      },
      
    },
  },
  plugins: [],
}