import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi2-demo',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/Button' },
    ],
    theme: {
      '@dumi-primary': '#1DA57A'
    }
  },
  // 取消打包静态单个组件库和函数工具
  exportStatic: false,
  styles: [
    `.dumi-default-header-left {
      width: 220px !important;
    }`,
  ],
});
