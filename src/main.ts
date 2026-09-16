import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'
import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  pinia.use(persistedstate)
  app.use(pinia)
  return {
    app,
  }
}
