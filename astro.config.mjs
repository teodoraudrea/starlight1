// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Standards',
			head: [
				{ tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0' } },
			  ],
			customCss: ['./src/styles/custom.css'],
			logo: {
				light: './src/assets/uni-crest.svg',
				dark: './src/assets/uni-crest.svg',
			},
			social: {
				github: 'https://github.com/teodoraudrea/starlight1',
			},
			sidebar: [
				{ label: 'Guides', items: [{ label: 'Example Guide', slug: 'guides/example' }] },
				{ label: 'Reference', autogenerate: { directory: 'reference' } },
				{ label: 'Core', autogenerate: { directory: 'core' } },
				{ label: 'Components', autogenerate: { directory: 'components' } },
				{ label: 'Patterns', autogenerate: { directory: 'patterns' } },
				{ label: 'Page examples', autogenerate: { directory: 'page-examples' } },
				{ label: 'Setup', autogenerate: { directory: 'setup' } },
			],
		}),
		vue(), // Add Vue integration
		mdx(),
	],
});
