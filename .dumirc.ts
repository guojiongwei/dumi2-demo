import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@wuyou/dumi',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/Button' },
    ],
  },
  styles: [
    `.dumi-default-header-left {
      width: 220px !important;
    }`,
  ],
});
