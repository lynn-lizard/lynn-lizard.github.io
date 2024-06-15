import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  site: 'https://lynn-lizard.github.io',
  integrations: [starlight({
    title: 'NA Delubrum Savage',
    social: {
      github: 'https://github.com/lynn-lizard/lynn-lizard.github.io',
      discord: 'https://discord.gg/pebe'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Slimes Guide',
        link: '/guides/slimes'
      }]
    }, {
      label: 'Others',
      items: [
		// Each item here is one entry in the navigation menu.
		{
			label: 'Credits',
			link: '/others/credits'
		},		
		{
			label: 'Discords',
			link: '/others/discords'
		}]
    }]
  }), mdx()]
});