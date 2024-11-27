/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                footerMainColor: '#1e2226',
                startGradient: '#e6f4f7',
                endGradient: '#e6f3f0',
                mainTextColor: '#0097d7',
                borgerColor: '#4B9ACD',
                backgroundColor: '#0097d7',
                backgroundColorTabs: '#4c9bcf',
                dividerColor: ' #A9A9A9'
            },
            backgroundImage: {
                formBackground: 'linear-gradient(90deg, #e6f4f7 0%, #e6f3f0 100%)'
            }
        }
    },
    plugins: []
};
