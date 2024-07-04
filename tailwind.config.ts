import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "Magenta": "#C26EB4",
        "Silver": "#CBC8D4",
        "Orchid": "#E66FD2",
        "green": "#01F0D0",
        "Cyan": "#D8FCF7",
        "Purple": "#8C6FE6",
        "BlueViolet": "#7E6CAB",
        "LightPink": "#FFE6F1",
        "LightBlue": "#E0F3FA",
        "MistyRose": "#FFE6E9",
        "Magnolia": "#F4F0FE",
        "deepdark": "#072635",
        "lighterGray": "#E3E4E6",
        "DarkSliver ": "#707070",
        "LightGray": "#F6F7F8",
      },
    },
  },
  plugins: [],
};
export default config;
