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
    pagefind: false,
    plugins: [starlightThemeNext()],
    title: 'N.A. Field Operations',
    routeMiddleware: './src/components/routeMiddleware.ts',
    social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/foexiv' },
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/lynn-lizard/lynn-lizard.github.io',
        },
      ],
    pagination: false,
    expressiveCode: false,
    components: {
      ThemeProvider: './src/components/ForceDarkTheme.astro',
      ThemeSelect: './src/components/EmptyComponent.astro',
    },
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
        label: 'N.A. Discords',
        link: '/others/discords'
    },
    {
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
        label: 'General Information',
        link: '/crescent/occult'
      },
      {
        label: 'Phantom Jobs',
        link: '/crescent/pjobs'
      },
      {
        label: 'Phantom Weapons',
        link: '/crescent/ocrelics'
      },
      {
        label: 'South Horn',
        link: '/crescent/southhorn'
      },
      {
        label: 'Forked Tower: Blood',
        link: '/crescent/ftb'
      },
      {
        label: 'North Horn',
        link: '/crescent/northhorn'
      },
    ]
    }]
  }), mdx(), icon()]
});
