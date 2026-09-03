import { onMounted, onUnmounted, ref } from 'vue'

export function useReducedMotion() {
  const reduced = ref(false)

  function update() {
    reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  onMounted(() => {
    update()
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    mq.addEventListener('change', update)
    onUnmounted(() => mq.removeEventListener('change', update))
  })

  return reduced
}
