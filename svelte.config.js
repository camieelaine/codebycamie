// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
};
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/codebycamie' : ''
		},
		alias: {
			'$components/*': './src/lib/components/*',
			'$data/*': './src/lib/data/*',
			'$styles/*': './src/lib/styles/*'
		}
	}
};

export default config;
