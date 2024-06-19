import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

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
    customCss: [
    // Relative path to your custom CSS file
    './src/styles/custom.css'],
    sidebar: [{
      // Home Page
      label: 'Home',
      link: '/'
    }, {
      // Bozja/Delubrum
      label: 'Delubrum Reginae (Savage)',
      items: [{
        label: 'Overview',
        link: '/drs/overview'
      }, {
        label: 'Lost Actions for Beginners',
        link: '/drs/actions'
      },
      // A nested group of links for seasonal constellations.
      {
        label: 'Holsters',
        collapsed: true,
        items: [{
          label: 'Melee',
          link: '/drs/holsters/melee'
        }, {
          label: 'Physical Ranged',
          link: '/drs/holsters/phys'
        }, {
          label: 'Caster',
          link: '/drs/holsters/caster'
        }, {
          label: 'Tanks',
          link: '/drs/holsters/tank'
        }, {
          label: 'Healers',
          link: '/drs/holsters/healer'
        }]
      }, {
        label: 'Encounters',
        collapsed: true,
        items: [{
          label: 'Slimes',
          link: '/drs/guides/slimes'
        }, {
          label: 'Golems',
          link: '/drs/guides/golems'
        }, {
          label: 'Trinity Seeker',
          link: '/drs/guides/seeker'
        }, {
          label: 'Dahu',
          link: '/drs/guides/dahu'
        }, {
          label: 'Queen\'s Gurad',
          link: '/drs/guides/guards'
        }, {
          label: 'Bozjan Phantom',
          link: '/drs/guides/phantom'
        }, {
          label: 'Trinity Avowed',
          link: '/drs/guides/avowed'
        }, {
          label: 'Stygimoloch Lord',
          link: '/drs/guides/lord'
        }, {
          label: 'The Queen',
          link: '/drs/guides/queen'
        }]
      }, {
        label: 'Hosting Resources',
        link: '/drs/hosting'
    }]
    }, {
      // Shade's Triangle
      label: 'Shade\'s Triangle',
      items: [{
        label: 'Coming in 7.0!!',
        link: '/triangle/overview'
      }]
    }, {
      // Credits
      label: 'Other',
      items: [{
        label: 'Credits',
        link: '/others/credits'
      }, {
        label: 'Discords',
        link: '/others/discords'
      }]
    }]
  }), mdx(), icon()]
});