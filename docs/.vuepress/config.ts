import { defineUserConfig,defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  port: 8081,
  theme: defaultTheme({
    logo: "/images/logo.png"
  }),
  base: '/cm-music-docs/'
})