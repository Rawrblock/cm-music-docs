import { defineUserConfig,defaultTheme } from 'vuepress'
const { path } = require('@vuepress/utils')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

export default defineUserConfig({
  base: '/cm-music-docs/',
  lang: 'zh-CN',
  title: '音乐APP全栈开发',
  description: '实战项目',
  port: 8081,
  // 头部导航配置
  theme: defaultTheme({
    logo: "/images/logo.png",
    // 设置右上角文档仓库
    repo: "https://github.com/Rawrblock/cm-music-docs",
    // 标题
    repoLabel: "文档仓库",
    // 贡献者列表
    contributors: true,
    contributorsText: '贡献者',
    // 导航
    navbar: [
      {
        text: '概览',
        link: '/overview/'
      },
      {
        text: '服务端(SpringBoot)',
        link: '/service/'
      },
      {
        text: '后台(Vue3)',
        link: '/admin/'
      },
      {
        text: '小程序(原生)',
        link: '/mp/'
      },
      {
        text: 'APP(Flutter)',
        link: '/app/'
      },
    ],
    editLinkText: '编辑此页',
    lastUpdatedText: '最近更新时间',
    backToHome: '返回首页',
    notFound: ['哎呀！这个页面不存在耶'],
    tip: '提示',
    warning: '警告',
    danger: '危险',
    
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ]
})