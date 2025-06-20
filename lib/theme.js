import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sss: 400,
			ss: 500,
			sm: 540,
			md: 768,
			lg: 1200,
			xl: 1820,
		},
	},
	palette: {
		primary: {
			main: "#5c3a93",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
	},
	typography: {
		fontFamily: "'Noto Sans', '思源黑体', sans-serif",
	},
});

export default theme;
