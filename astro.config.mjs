// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Standards',
			customCss: ['./src/styles/custom.css'],
			logo: {
				light: './src/assets/uni-crest.svg',
				dark: './src/assets/uni-crest.svg',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
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
