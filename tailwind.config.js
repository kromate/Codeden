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
				bgDark: '#0000000f',
			},
			    boxShadow: {
				'block': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			}
		},
	},
	plugins: [],
}
