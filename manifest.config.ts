import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'

export default defineManifestConfig({
  'name': 'App Template',
  'appid': '',
  'description': 'iOS / Android uni-app starter',
  'versionName': '1.0.0',
  'versionCode': '100',
  'transformPx': false,
  'app-plus': {
    usingComponents: true,
    nvueStyleCompiler: 'uni-app',
    compilerVersion: 3,
    splashscreen: {
      alwaysShowBeforeRender: true,
      waiting: true,
      autoclose: true,
      delay: 0,
    },
    modules: {},
    distribute: {
      android: {
        packagename: 'com.example.app',
        permissions: [
          '<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>',
          '<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>',
        ],
      },
      ios: {
        id: 'com.example.app',
      },
      sdkConfigs: {},
    },
  },
  'quickapp': {},
  'mp-weixin': {
    appid: '',
    setting: {
      urlCheck: false,
    },
    usingComponents: true,
    darkmode: false,
  },
  'mp-alipay': {
    usingComponents: true,
  },
  'mp-baidu': {
    usingComponents: true,
  },
  'mp-toutiao': {
    usingComponents: true,
  },
  'h5': {
    darkmode: false,
    title: 'App Template',
  },
  'uniStatistics': {
    enable: false,
  },
  'vueVersion': '3',
})
