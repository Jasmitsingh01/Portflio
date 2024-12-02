/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'radical-gradient': ' linear-gradient(to top left,rgba(32,29,70,0.9864320728291317) 0%, rgba(4,4,36,0.9668242296918768) 31%, rgba(0,0,0,0.9864320728291317) 100%);'
      },
      colors:{
        'menu-bar':'rgb(38,38,38)',
        'start-menu-bar':'rgb(24,24,24)',
        'start-menu-bg':'rgb(38,38,38)'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
  ],
}

