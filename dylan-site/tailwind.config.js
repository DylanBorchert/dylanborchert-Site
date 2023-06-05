/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(var(--gradient-color-stops))",
			},
			colors: {
				/* CSS HEX */
				"smoky-black": "#121212",
				"primary-1": "#0292F2",
				"secondary-1": "#0261A1",
				"primary-2": "#FFBE0B",
				"primary-3": "#DB4437",
				"primary-4": "#0F9D58",
			},
			fontFamily: {
				sans: "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif",
			},
			keyframes: {
				"fade-down-nav": {
					'0%': {opacity: "0.5",top: "-100px",},
					'100%': {opacity: "1",top: "0",},
				},
			},
      animation: {
        "fade-down-nav": "fade-down-nav 0.3s ease-in forwards",
      },
		},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
