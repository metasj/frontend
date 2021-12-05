const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				orange: colors.orange,
			},
			boxShadow: {
				brand: '6px 6px 0 0 #FDE68A',
				'brand-hover': '3px 3px 0 0 #FDE68A',
			},
			fontFamily: {
				sans: ['Redrose', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
