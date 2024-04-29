/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        fontFamily: {
            display: 'Futura Light',
            sans: 'Myriad Pro',
            serif: 'Varela Round'
        },
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.1em',
            widest: '.25em'
        }
    },
    plugins: [],
}
