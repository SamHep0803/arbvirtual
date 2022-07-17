/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"main-img": "url('/bg.png')",
			},
			fontFamily: {
				sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
