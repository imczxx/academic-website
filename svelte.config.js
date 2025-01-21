import { mdsvex } from 'mdsvex';
import adapterStatic from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapterStatic({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: false
		}),
		paths: {
			base: dev ? '' : '/academic-website'
		},
		appDir: 'app'
	},

	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
