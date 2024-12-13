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
				yellow: "#F0DB4F",
			},
			fontSize: {
				h1: "50px",
				mobileh1: "30px",
				h2: "35px",
				h3: "28px",
				h4: "20px",
			},
			headingStyle: {
				h2mb: "60px",
			},
		},
	},
	plugins: [],
};
