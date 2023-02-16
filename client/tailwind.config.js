/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-1": "#FBD38D",
        "primary-2": "#E0BC7E",
        "primary-3": "#BA9C68",
        "primary-4": "#7A6745",
        "primary-5": "#3B3121",
        "grey-1": "#F7F7F7",
        "grey-2": "#E1E1E1",
        "grey-3": "#CFCFCF",
        "grey-4": "#B1B1B1",
        "grey-5": "#7E7E7E",
        "grey-6": "#626262",
        "grey-7": "#515151",
        "grey-8": "#3B3B3B",
        "grey-9": "#222222",
    },
  },
  plugins: [],
  }
}
