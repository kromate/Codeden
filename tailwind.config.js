module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	mode:'jit',
	theme: {
		extend: {
			colors: {
				primary: '#4f46e5',
				bgDark: '#0000001f',
			}
		},
	},
	plugins: [],
}
