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
			blue: colors.blue,
			slate: colors.slate,

			primary: "#5C38F5",
			secondary: "#DFD7FC",
		},
		extend: {},
	},
	plugins: [],
}
