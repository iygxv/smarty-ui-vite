import component from './sidebar'

const config = {
  title: "🔨  Smarty-UI",
  description: "组件库搭建的教学模型",
  themeConfig: {
    sidebar: {
      '/': component
    }
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
}
export default config