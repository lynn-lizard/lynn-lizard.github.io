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
    sidebar: [	
	{
	label: 'Holsters',
	items: [
		// Each item here is one entry in the navigation menu.
		{
			label: 'Melee DPS',
			link: '/holsters/melee'
		},
		{
			label: 'Physical Ranged DPS',
			link: '/holsters/phys'
		},
		{
			label: 'Caster DPS',
			link: '/holsters/caster'
		},
		{
			label: 'Tanks',
			link: '/holsters/tank'
		},		
		{
			label: 'Healers',
			link: '/holsters/healer'
		}]
	},	
	{
      label: 'Encounter Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Slimes',
        link: '/guides/slimes'
      },
	  {
        label: 'Golems',
        link: '/guides/golems'
      },
	  {
        label: 'Trinity Seeker',
        link: '/guides/seeker'
      },
	  {
        label: 'Dahu',
        link: '/guides/dahu'
      },
	  {
        label: 'Queen\'s Guard',
        link: '/guides/guards'
      },
	  {
        label: 'Bozjan Phantom',
        link: '/guides/phantom'
      },
	  {
        label: 'Trinity Avowed',
        link: '/guides/avowed'
      },
	  {
        label: 'Stygimoloch Lord',
        link: '/guides/lord'
      },
	  {
        label: 'The Queen',
        link: '/guides/queen'
      },
	]
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