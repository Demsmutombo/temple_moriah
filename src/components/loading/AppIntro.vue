<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import LoadingDots from '@/components/loading/LoadingDots.vue'
import { site } from '@/data'
import { usePageLoader } from '@/composables/usePageLoader'

const { phase, finish } = usePageLoader()
const boot = typeof document !== 'undefined' ? document.getElementById('tm-boot') : null

function applyPhase(value) {
  if (!boot) return
  if (value === 'leaving') boot.classList.add('is-leaving')
  if (value === 'ready') {
    boot.remove()
    document.documentElement.classList.remove('tm-booting')
  }
}

watch(phase, applyPhase, { immediate: true })

onMounted(() => {
  boot?.addEventListener('click', finish)
  applyPhase(phase.value)
})

onUnmounted(() => {
  boot?.removeEventListener('click', finish)
})
</script>

<template>
  <Teleport v-if="!boot && phase !== 'ready'" to="body">
    <div
      class="intro"
      :class="{ 'is-leaving': phase === 'leaving' }"
      role="dialog"
      aria-modal="true"
      :aria-label="`Ouverture — ${site.name}`"
      @click="finish"
    >
      <div class="intro-mark">
        <img src="/screempage.jfif" :alt="site.name" />
      </div>
      <LoadingDots />
    </div>
  </Teleport>
</template>

<style scoped>
.intro {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background: var(--neu-bg);
  cursor: pointer;
  touch-action: manipulation;
}
.intro.is-leaving {
  animation: intro-fade 0.48s ease forwards;
  pointer-events: none;
}
.intro-mark {
  width: min(46vw, 176px);
  aspect-ratio: 1;
  border-radius: 22%;
  overflow: hidden;
  background: var(--neu-light);
  box-shadow: var(--neu-raised);
  animation: intro-breathe 2.8s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.intro-mark img {
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  object-fit: cover;
  object-position: center;
  display: block;
}
@keyframes intro-breathe {
  0% {
    transform: scale(0.94);
  }
  38% {
    transform: scale(1);
  }
  72% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.97);
  }
}
@keyframes intro-fade {
  to {
    opacity: 0;
  }
}
@media (min-width: 1024px) {
  .intro-mark {
    width: min(20vw, 200px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .intro-mark,
  .intro.is-leaving {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
