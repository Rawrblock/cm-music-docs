import { defineUserConfig,defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '音乐APP全栈开发',
  description: '实战项目',
  port: 8081,
  theme: defaultTheme({
    logo: "/images/logo.png"
  }),
  base: '/cm-music-docs/'
})