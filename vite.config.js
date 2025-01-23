import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['lucide-svelte']
	},
	resolve: {
		alias: {
			'@styles': path.resolve(__dirname, './src/styles'),
			'@theme': path.resolve(__dirname, './src/lib/theme'),
			'@components': path.resolve(__dirname, './src/lib/components')
		}
	}
});
