import { onMounted, ref } from 'vue'

const INTRO_KEY = 'tm-intro-played'
const phase = ref('boot')
const mode = ref('full')

export function usePageLoader() {
  function finish() {
    try {
      sessionStorage.setItem(INTRO_KEY, '1')
    } catch {
      /* ignore */
    }
    if (phase.value === 'ready') return
    phase.value = 'leaving'
    window.setTimeout(() => {
      phase.value = 'ready'
      document.body.style.removeProperty('overflow')
    }, 520)
  }

  onMounted(() => {
    document.body.style.overflow = 'hidden'
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let seen = false
    try {
      seen = sessionStorage.getItem(INTRO_KEY) === '1'
    } catch {
      seen = false
    }
    mode.value = seen ? 'dots' : 'full'

    if (reduced) {
      finish()
      return
    }

    phase.value = mode.value === 'full' ? 'intro' : 'dots'
    const hold = mode.value === 'full' ? 3400 : 1100
    window.setTimeout(finish, hold)
  })

  return { phase, mode, finish }
}
