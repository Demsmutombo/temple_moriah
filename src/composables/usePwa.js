import { computed, onMounted, onUnmounted, ref } from 'vue'

const DISMISS_KEY = 'tm-pwa-install-dismissed'
const deferredPrompt = ref(null)
const installed = ref(false)
const standalone = ref(false)
const iOS = ref(false)
const dismissed = ref(false)

function readStandalone() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: fullscreen)').matches ||
    window.navigator.standalone === true
  )
}

function readIOS() {
  const ua = window.navigator.userAgent
  const iPhone = /iPhone|iPad|iPod/i.test(ua)
  const touchMac = ua.includes('Mac') && 'ontouchend' in document
  return iPhone || touchMac
}

export function usePwa() {
  function onBeforeInstall(event) {
    event.preventDefault()
    deferredPrompt.value = event
  }

  function onInstalled() {
    installed.value = true
    deferredPrompt.value = null
    standalone.value = true
    document.documentElement.classList.add('is-standalone')
  }

  async function install() {
    if (!deferredPrompt.value) return false
    deferredPrompt.value.prompt()
    const result = await deferredPrompt.value.userChoice
    deferredPrompt.value = null
    return result.outcome === 'accepted'
  }

  function dismiss() {
    dismissed.value = true
    try {
      sessionStorage.setItem(DISMISS_KEY, '1')
    } catch {
      /* ignore */
    }
  }

  const canInstall = computed(() => Boolean(deferredPrompt.value) && !installed.value && !standalone.value)
  const showIosHint = computed(() => iOS.value && !standalone.value && !dismissed.value && !installed.value)
  const showBanner = computed(() => !dismissed.value && (canInstall.value || showIosHint.value))

  onMounted(() => {
    standalone.value = readStandalone()
    iOS.value = readIOS()
    try {
      dismissed.value = sessionStorage.getItem(DISMISS_KEY) === '1'
    } catch {
      dismissed.value = false
    }
    if (standalone.value) document.documentElement.classList.add('is-standalone')
    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', onInstalled)
  })

  onUnmounted(() => {
    window.removeEventListener('beforeinstallprompt', onBeforeInstall)
    window.removeEventListener('appinstalled', onInstalled)
  })

  return {
    canInstall,
    showIosHint,
    showBanner,
    standalone,
    install,
    dismiss,
  }
}
