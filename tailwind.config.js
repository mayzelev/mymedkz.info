/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                footerMainColor: '#1e2226',
                mainTextColor: '#0097d7',
                secondaryTextColor: '#a0a0a0',
                borgerColor: '#4B9ACD',
                backgroundColor: '#0097d7',
                backgroundColorTabs: '#4c9bcf',
                dividerColor: ' #A9A9A9',
                buttonBgColor: '#B7B7B7',
                gradientInputStart: '#0097d7',
                gradientInputFinish: '#008053',
                selectTextColor: '#686868'
            },
            backgroundImage: {
                formBackground: 'linear-gradient(90deg, #e6f4f7 0%, #e6f3f0 100%)'
            },
            borderImage: {
                formInputColor: 'linear-gradient(102.76deg, #0097d7 0%, #008053 100%)'
            },
            fontFamily: {
                sans: ['Arial', 'Halvetica', 'sans-serif'],
                custom: ['"Open Sans"', 'sans-serif']
            }
        }
    },

    plugins: []
};
