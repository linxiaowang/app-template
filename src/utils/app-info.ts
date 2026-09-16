export function getAppInfo() {
  return {
    name: 'App Template',
    version: '1.0.0',
    bundleId: 'com.example.app',
    env: import.meta.env.MODE,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '（未配置）',
  }
}
