module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        typography: (theme) => ({}),
        extend: {
            fontFamily: {
                poppins: ['Poppins'],
                montserrat: ['Montserrat'],
                openSans: ['Open Sans'],
            },
            typography: (theme) => ({
                dark: {
                    css: {
                        color: 'white',
                    },
                },
            }),
        },
    },
    variants: {
        typography: ['dark'],
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
