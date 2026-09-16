import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': '@wot-ui/ui/components/wd-$1/wd-$1.vue',
    },
  },
  pages: [],
  globalStyle: {
    backgroundColor: '#f4efe6',
    backgroundColorBottom: '#f4efe6',
    backgroundColorTop: '#f4efe6',
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#f4efe6',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'App Template',
    navigationStyle: 'default',
  },
  tabBar: {
    color: '#6b645c',
    selectedColor: '#2f5d56',
    backgroundColor: '#f7f3ea',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index',
        text: '首页',
        iconPath: 'static/tab/home.png',
        selectedIconPath: 'static/tab/home-active.png',
      },
      {
        pagePath: 'pages/mine',
        text: '我的',
        iconPath: 'static/tab/mine.png',
        selectedIconPath: 'static/tab/mine-active.png',
      },
    ],
  },
})
