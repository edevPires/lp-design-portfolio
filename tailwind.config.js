/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                main: '#ebebeb',
                font: '#1b1b1b',
            },
            fontFamily: {
                bahnschrift: ['Bahnschrift', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
