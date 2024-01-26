/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.html', './**/*.js'],
    theme: {
        extend: {
            colors: {
                main: '#ebebeb',
                font: '#1b1b1b',
            },
            fontFamily: {
                bahnschrift: ['Bahnschrift', 'sans-serif'],
                altone: ['Altone Trial', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
