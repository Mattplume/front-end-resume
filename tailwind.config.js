/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"space-grotesk": ["Space Grotesk", "serif"],
			},
			colors: {
				darkPrimary: "#323330",
				darkerPrimary: "#1E1E1E",
			},
			padding: {
				paddingTopXL: "160px",
			},
			fontSize: {
				h1: "50px",
			},
		},
	},
	plugins: [],
};
