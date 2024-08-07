// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nithin Varghese',
  tagline: 'Building a beautiful future supported with AI',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://humandotlearning.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'humandotlearning', // Usually your GitHub org/user name.
  projectName: 'humandotlearning.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh_pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/humandotlearning/humandotlearning.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/humandotlearning/humandotlearning.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  customFields: {
    glitchTagline: 'Building a beautiful future supported with AI',
    glitchWord: 'AI',
    glitchIntensity: 8,
    glitchColors: ['#ff00ff', '#00ffff', '#ffff00'],
  },


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/profile_pixelart.png',
      navbar: {
        title: "nithin's tinyverse",
        logo: {
          alt: "nithin's tinyverse Logo",
          src: 'img/profile_pixelart.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/humandotlearning',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About Me',
                to: '/aboutMe',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
             
              {
                label: 'GitHub',
                href: 'https://github.com/humandotlearning',
              },
              {
                href: 'https://drive.google.com/file/d/12_Q1ttgEQCrrDUZC7xGs3TNrq8_ZvGNT/view?usp=sharing',
                label: 'Resume',
              },
            ],
          },
        ],
        copyright: `Treat your AI with love`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
