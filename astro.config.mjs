import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";
import starlightThemeNext from 'starlight-theme-next'
import '@fontsource-variable/comfortaa';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://lynn-lizard.github.io',
  integrations: [starlight({
    plugins: [starlightThemeNext()],
    title: 'NA Field Operations',
    social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/foexiv' },
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/lynn-lizard/lynn-lizard.github.io',
        },
      ],
    pagination: false,
    customCss: [
    // Relative path to your custom CSS file
    './src/styles/custom.css',
    '@fontsource/comfortaa/400.css'
  ],
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
        }, {
          label: 'Off Essences',
          link: '/drs/holsters/meme'
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
      },{
        label: 'How to Blood Rage',
        link: '/drs/bloodrage'
      },{
        label: 'Hosting Resources',
        link: '/drs/hosting'
    }]
    }, {
      // Occult Crescent
      label: 'Occult Crescent',
      items: [{
        label: 'Overview',
        link: '/crescent/overview'
      },
      {
        label: 'South Horn',
        collapsed: true,
        items: [{
          label: 'New Player Guide',
          link: '/crescent/south/newplayer'
        }, {
          label: 'FATEs and CEs',
          link: '/crescent/south/combat'
        }, {
          label: 'Phantom Jobs',
          link: '/crescent/south/pjobs'
        }, {
          label: 'Pots',
          link: '/crescent/south/pots'
        }]
      },
      {
        label: 'Forked Tower: Blood',
        collapsed: true,
        items: [{
          label: 'Overview',
          link: '/crescent/ftb/overview'
        }, {
          label: 'Encounter Guides',
          link: '/crescent/ftb/fights'
        }, {
          label: 'In-depth Phantom Job Guides',
          link: '/crescent/ftb/pjobs'
        }]
      }
    ]
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
