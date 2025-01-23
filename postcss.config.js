export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		'postcss-import': {
			root: './src',
			path: ['./src/styles']
		}
	}
};
