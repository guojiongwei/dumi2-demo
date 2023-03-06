import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-demo',
  },
  // @ts-ignore
  exportStatic: false,
});
