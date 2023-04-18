/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
    theme: {
        extend: {
            colors: {
                bgreact: "#61dbfb",
                txtreact: "#000000",
                bgtypescript: "#007acc",
                txttypescript: "#ffffff",
                bgtailwind: "#38BDF8",
                txttailwind: "#000000",
                bgfirebase: "#FFCB2C",
                txtfirebase: "#000000",
            },
        },
    },
    plugins: [],
}
