const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'chatListActiveBg': '#3390ec',
                'light-green': '#eefade',
            },
            spacing: {
                '13': '3.25rem',//52px
                '17': '4.25rem',//52px
                '120': '30rem', // 480px
            }
        },
    },


    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),

        plugin(function({ addVariant }) {
            addVariant('activeItem', '.active'),
            addVariant('group-has-active', ':merge(.active) &')
        })
    ],

};
