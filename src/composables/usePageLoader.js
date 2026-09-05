import { onMounted, ref } from 'vue'

const phase = ref('intro')
const mode = ref('full')
let started = false

export function usePageLoader() {
  function finish() {
    if (phase.value === 'ready' || phase.value === 'leaving') return
    phase.value = 'leaving'
    window.setTimeout(() => {
      phase.value = 'ready'
      document.body.style.removeProperty('overflow')
      document.documentElement.classList.remove('tm-booting')
    }, 480)
  }

  onMounted(() => {
    if (started) return
    started = true
    document.body.style.overflow = 'hidden'
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    mode.value = 'full'
    phase.value = 'intro'
    window.setTimeout(finish, reduced ? 800 : 3200)
  })

  return { phase, mode, finish }
}
