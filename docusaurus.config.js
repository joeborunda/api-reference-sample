// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'API Reference Sample',
  tagline: 'A sample Docusaurus site for API reference documentation',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here (host only — no sub-path).
  // The repo/project sub-path should be set in `baseUrl` below.
  url: 'https://joeborunda.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/api-reference-sample/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'joeborunda', // Usually your GitHub org/user name.
  projectName: 'api-reference-sample', // Usually your repo name.

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
          // Use require.resolve for a reliable absolute path to the sidebar file
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Set this to your repository edit URL so "Edit this page" links open
          // the correct location in your GitHub repo.
          // Example: https://github.com/<org-or-user>/<repo>/edit/<branch>/
          editUrl: 'https://github.com/joeborunda/api-reference-sample/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/static/img/api-reference-sample-social-card.png',
      navbar: {
        title: 'API Reference Sample',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'API Reference',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/joeborunda/api-reference-sample',
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
                label: 'API Reference',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Resume',
                href: 'https://joeborunda.github.io/Resume-Web/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/joeborunda/api-reference-sample',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jose Borunda. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};


// No GitHub Pages deployment configuration applied.
// Export the base config directly so no automatic GitHub Pages
// deployment settings are merged.
export default config;
