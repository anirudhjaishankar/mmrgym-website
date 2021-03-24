module.exports = {
    purge: {
        enabled: true,
        content: ['./index.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primaryColor: '#0C1221',
                primaryTextColor: '#ffffff',
                navbarInactiveColor: '#8D8D8D'
            },
            fontFamily: {
                primary: ['Stardos Stencil'],
                secondary: ['Lato']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}