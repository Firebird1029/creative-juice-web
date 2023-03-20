const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			black: colors.black,
			white: colors.white,
			gray: colors.gray,

			primary: "#5C38F5",
		},
		extend: {},
	},
	plugins: [],
}
