import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Blug Docs',
  tagline: 'Creating a blog has never been easier',
  favicon: 'img/favicon.ico',
  url: 'https://docs.blug.io',
  baseUrl: '/',
  organizationName: 'blug-io',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: ({ locale, docPath }) => {
            return `https://github.com/blug-io/docs/edit/main/docs/${docPath}`;
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        pages: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Blug Docs',
      logo: {
        alt: 'Blug Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          position: 'left',
          label: 'API Reference',
          to: '/api-reference',
        },
        {to: 'https://blog.blug.io', label: 'Blog', position: 'left'},
        {
          to: 'https://slack.com',
          label: 'Community',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Blug Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
            {
              label: 'Templates',
              to: '/templates',
            },
            {
              label: 'API Reference',
              to: '/api-reference',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://slack.com',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com',
            },
            {
              label: 'X',
              href: 'https://x.com/blug',
            },
          ],
        },
        {
          title: 'Relevant Links',
          items: [
            {
              label: 'Blug',
              href: 'https://blug.io',
            },
            {
              label: 'Demo',
              href: 'https://demo.blug.io',
            },
            {
              label: 'Blog',
              href: 'https://blog.blug.io',
            },
            {
              label: 'Roadmap',
              href: 'https://roadmap.blug.io',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Privacy Policy',
              href: 'https://blug.io/privacy',
            },
            {
              label: 'Terms of Service',
              href: 'https://blug.io/terms',
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Blug, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
