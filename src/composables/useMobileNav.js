import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

export const moreOpen = ref(false)

export function useMobileNav() {
  const route = useRoute()

  const isHome = computed(() => route.path === '/')
  const pageTitle = computed(() => route.meta?.title || 'Temple Moriah')

  function openMore() {
    moreOpen.value = true
  }

  function closeMore() {
    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    moreOpen.value = false
  }

  function toggleMore() {
    moreOpen.value = !moreOpen.value
  }

  async function sharePage() {
    const data = {
      title: document.title,
      url: window.location.href,
    }
    try {
      if (navigator.share) {
        await navigator.share(data)
        return 'shared'
      }
      await navigator.clipboard.writeText(data.url)
      return 'copied'
    } catch {
      return 'cancelled'
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      return true
    } catch {
      return false
    }
  }

  return {
    moreOpen,
    isHome,
    pageTitle,
    openMore,
    closeMore,
    toggleMore,
    sharePage,
    copyLink,
  }
}
