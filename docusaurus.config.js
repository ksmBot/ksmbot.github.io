// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ksmの使用文档',
  tagline: '让群里面多一只可爱的KsmBot吧',
  favicon: 'img/ksm.ico',

  // Set the production url of your site here
  url: 'https://ksmbot.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ksmbot', // Usually your GitHub org/user name.
  projectName: 'ksmbot.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/title.jpg',
      navbar: {
        title: 'ksmの使用文档',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ksm.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'ksm',
          },
	
          {
            href: 'https://github.com/ksmbot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '开始·加群须知',
                to: '/docs/intro',
              },
              {
                label: '使用说明',
                to: '/docs/help',
              },
              {
                label: '版权声明',
                to: '/docs/CopyrightNotice',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: '户山兔兔的哔哩哔哩主页',
                href: 'https://b23.tv/U09RKL6',
              },
              {
                label: 'ksmbot的哔哩哔哩主页',
                href: 'https://b23.tv/RqRNoYl',
              },
              {
                label: '小小趴bot by Kumo',
                href: 'http://xiaoxiaopa.com',
              },
              {
                label: '另一只可爱的Kasumi Bot by 吉太',
                href: 'https://www.bilibili.com/read/cv20718127',
              },
              {
                label: 'KanonBot',
                href: 'https://www.bilibili.com/read/cv21464391',
              },
              
            ],
          },
          {
            title: '更多',
            items: [
              
              {
                label: '我们的QQ群-欣遇庭',
                href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Lqal0PCVCKBlG22gu-9soLlaRqffOpJA&authKey=Gh%2BoZD%2FWg2t8%2BT0jAkmQ7QLQblOHNw%2FSr5tQwoka5I55JW94TzFqNPdm7kM4gJUC&noverify=0&group_code=737704963',
              },
              {
                label: '基于ksm服务器的MinecraftPE服务器',
                href: '/docs/mc',
              },
              {
                label: 'GitHub文档站项目',
                href: 'https://github.com/ksmbot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://b23.tv/U09RKL6">户山兔兔</a> . `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
