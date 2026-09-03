import { ref } from 'vue'

export const STORAGE_KEY = 'tm-theme'

function readStoredDark() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'dark'
  } catch {
    return false
  }
}

export const isDark = ref(readStoredDark())

function meta(name) {
  return document.querySelector(`meta[name="${name}"]`)
}

export function applyTheme(dark) {
  isDark.value = dark
  document.documentElement.classList.toggle('theme-dark', dark)
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
  meta('theme-color')?.setAttribute('content', dark ? '#1B2433' : '#E8EEF6')
  meta('apple-mobile-web-app-status-bar-style')?.setAttribute(
    'content',
    dark ? 'black-translucent' : 'default',
  )
  try {
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
  } catch {
    /* ignore */
  }
}

if (typeof document !== 'undefined') {
  if (readStoredDark() || document.documentElement.classList.contains('theme-dark')) {
    applyTheme(true)
  }
}

export function useTheme() {
  function toggle() {
    applyTheme(!isDark.value)
  }

  return { isDark, toggle }
}
