import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-demo',
  },
  // @ts-ignore
  exportStatic: false,
  styles: [
    `.dumi-default-features-item {
      text-align: center;
    }
    body .dumi-default-sidebar>dl>dt {
      font-size: 16px;
    }
    body .dumi-default-sidebar>dl>dd>a {
      color: #717484;
      font-size: 14px;
    }
    `,
  ],
});
