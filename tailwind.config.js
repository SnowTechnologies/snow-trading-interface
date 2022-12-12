/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                white: "#FFFEFD",
                bright: "#C9C5BD",
                accent: "#0A78FF",
                gray: "#919191",
                dark: "#303030",
                background: "#10151D",
            },
        },
    },
    plugins: [],
};
