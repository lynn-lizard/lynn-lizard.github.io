import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  site: 'https://lynn-lizard.github.io',
  integrations: [starlight({
    title: 'NA Field Operations',
    social: {
      github: 'https://github.com/lynn-lizard/lynn-lizard.github.io',
      discord: 'https://discord.gg/pebe'
    },
	pagination: false,
	sidebar: [
		// A group of links labelled "Constellations".
		{ label: 'Home', link: '/' },
		{
		  label: 'Delubrum Reginae (Savage)',
		  items: [
			{ label: 'Overview', link: '/drs/overview' },
			// A nested group of links for seasonal constellations.
			{
			  label: 'Holsters',
			  collapsed: true,
			  items: [
				{ label: 'Tanks', link: '/drs/holsters/tank' },
				{ label: 'Healers', link: '/drs/holsters/healer' },
				{ label: 'Melee', link: '/drs/holsters/melee' },
				{ label: 'Physical Ranged', link: '/drs/holsters/phys' },
				{ label: 'Caster', link: '/drs/holsters/caster' },
			  ],
			},
			{
				label: 'Encounters',
				collapsed: true,
				items: [
				  { label: 'Slimes', link: '/drs/guides/slimes' },
				  { label: 'Golems', link: '/drs/guides/golems' },
				  { label: 'Trinity Seeker', link: '/drs/guides/seeker' },
				  { label: 'Dahu', link: '/drs/guides/dahu' },
				  { label: 'Queen\'s Gurad', link: '/drs/guides/guards' },
				  { label: 'Bozjan Phantom', link: '/drs/guides/phantom' },
				  { label: 'Trinity Avowed', link: '/drs/guides/avowed' },
				  { label: 'Stygimoloch Lord', link: '/drs/guides/lord' },
				  { label: 'The Queen', link: '/drs/guides/queen' },
				],
			  },
		  ],
		},
		{
			label: 'Shade\'s Triangle',
			items: [
				{ label: 'Coming in 7.0!!', link: '/triangle/confirmed' },
			]	
		},
		{
			label: 'Credits and Discords',
			items: [
				{ label: 'Credit', link: '/others/credits' },
				{ label: 'Discords', link: '/others/discords' },
			]	
		}
	  ]
  }), mdx()]
});