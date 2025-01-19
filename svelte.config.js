import { mdsvex } from 'mdsvex';
import adapterStatic from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapterStatic({
			// 默认情况下，GitHub Pages 使用 /repository/ 作为基础路径
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
