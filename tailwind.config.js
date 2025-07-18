/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        borderWidth: {
            '1/2': '0.5px',
            1: '1px'
        }
    },
    plugins: []
};
