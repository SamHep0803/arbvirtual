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
				sans: ["Roboto", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
