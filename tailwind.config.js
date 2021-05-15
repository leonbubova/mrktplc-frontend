module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            Raleway: ['Raleway', 'sans-serif'],
        },
        extend: {},
    },
    variants: {
        extend: {
            display: ['group-hover'],
            padding: ['group-hover', 'hover'],
            inset: ['group-hover'],
            translate: ['group-hover'],
        },
    },
    plugins: [],
}
