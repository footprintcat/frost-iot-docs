import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '寒霜物联',
  tagline: '完全开源的 IoT 设备统一接入平台',
  // favicon: 'img/favicon.ico',
  favicon: 'img/logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://iot.footprintcat.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  /*
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'footprintcat', // Usually your GitHub org/user name.
  projectName: 'frost-iot', // Usually your repo name.
  */

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: [
      // refer: https://docusaurus.io/zh-CN/docs/i18n/git
      'zh-Hans',
    ],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/footprintcat/frost-iot-docs/tree/main/',
          showLastUpdateTime: true,
          // The edit URL will target the localized file, instead of the original unlocalized file. Ignored when `editUrl` is a function.
          editLocalizedFiles: true,
          // sidebarCollapsed: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/footprintcat/frost-iot-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          // The edit URL will target the localized file, instead of the original unlocalized file. Ignored when `editUrl` is a function.
          editLocalizedFiles: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '寒霜物联',
      logo: {
        alt: 'logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: '文档',
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          // position: 'left',
        },
        /*
        {
          label: '文档',
          position: 'left',
          items: [
            {
              label: '使用手册',
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              // position: 'left',
            },
            {
              type: 'html',
              value: '<hr style="margin: 0; margin-top: 0.2rem;">',
            },
            {
              label: '开发文档',
              type: 'docSidebar',
              sidebarId: 'developmentSidebar',
              // position: 'left',
            },
          ],
        },
        */
        {
          label: 'API',
          type: 'docSidebar',
          sidebarId: 'apiReferenceSidebar',
          // position: 'left',
        },
        {
          label: '共创',
          type: 'docSidebar',
          sidebarId: 'contributeSidebar',
          // position: 'left',
        },
        {
          label: '动态', // 博客
          // label: 'Blog',
          to: '/blog',
          position: 'left',
        },
        {
          label: '关于',
          // label: 'About',
          type: 'docSidebar',
          sidebarId: 'aboutSidebar',
          position: 'left',
        },
        {
          label: '查看演示',
          to: 'https://docs-preview.iot.footprintcat.com/',
          position: 'right',
          // 样式见 src/css/custom.css
          className: 'btn-demo',
          // style: {},
        },
        {
          label: '联系我们',
          to: '/docs/about/contact',
          position: 'right',
        },
        {
          label: '开源地址',
          position: 'right',
          items: [
            {
              href: 'https://github.com/footprintcat/frost-iot',
              label: 'GitHub',
            },
            {
              href: 'https://gitee.com/footprintcat/frost-iot',
              label: 'Gitee',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          // title: 'Docs',
          items: [
            {
              label: '使用手册',
              // label: 'Tutorial',
              to: '/docs/introduction',
            },
            {
              label: 'API',
              to: '/docs/api-reference/intro',
            },
            {
              label: '共创',
              to: '/docs/contribute/intro',
            },
          ],
        },
        {
          title: '更多',
          // title: 'More',
          items: [
            {
              label: '动态', // 博客
              // label: 'Blog',
              to: '/blog',
            },
            {
              label: '许可证',
              // label: 'License',
              to: '/docs/tutorial/license',
            },
          ],
        },
        {
          title: '开源',
          // title: 'Open Source',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/footprintcat/frost-iot',
            },
            {
              label: 'Gitee',
              href: 'https://gitee.com/footprintcat/frost-iot',
            },
          ],
        },
      ],
      logo: {
        alt: 'Logo',
        src: 'img/footprintcat-logo.svg',
        width: 120,
        height: 120,
        style: {
          filter: "drop-shadow(black 2px 2px 2px)",
        },
      },
      copyright: [
        `Copyright © 2023 - ${new Date().getFullYear()} 武汉脚印猫科技有限公司`,
        // `Wuhan Footprint Cat Technology Co., Ltd.`,
      ].join('<br>'),
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: {
      minHeadingLevel: 2,  // 最小显示的标题级别 (H2)
      maxHeadingLevel: 4,  // 最大显示的标题级别 (H4)
    },
    mermaid: {
      // refer: https://mermaid.js.org/config/theming.html
      theme: {
        light: 'neutral', // default
        dark: 'dark',
      },
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
    // document local search
    // refer: https://github.com/easyops-cn/docusaurus-search-local
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        language: ["en", "zh"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],
};

export default config;
