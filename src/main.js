import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import '@/composables/useTheme'

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(() => {})
  })
} else if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((regs) => {
    regs.forEach((reg) => reg.unregister())
  })
}

createApp(App).use(router).mount('#app')
