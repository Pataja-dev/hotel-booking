// tailwind.config.js
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as necessary
    "./src/**/**/*.{js,jsx,ts,tsx}", // Adjust paths as necessary
];
export const theme = {
    extend: {},
};
export const plugins = [
    require("@tailwindcss/oxide"), // Include this if you're using the oxide plugin
];
