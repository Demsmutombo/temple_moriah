<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { site } from '@/data'

const visible = ref(true)
const leaving = ref(false)
let holdTimer
let hideTimer

function close() {
  if (leaving.value || !visible.value) return
  leaving.value = true
  window.clearTimeout(holdTimer)
  hideTimer = window.setTimeout(() => {
    visible.value = false
    document.body.style.removeProperty('overflow')
  }, 480)
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  holdTimer = window.setTimeout(close, reduced ? 700 : 1600)
})

onUnmounted(() => {
  window.clearTimeout(holdTimer)
  window.clearTimeout(hideTimer)
  document.body.style.removeProperty('overflow')
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="splash"
      :class="{ 'is-leaving': leaving }"
      role="dialog"
      aria-modal="true"
      :aria-label="`Ouverture — ${site.name}`"
      @click="close"
    >
      <div class="splash-motion">
        <div class="splash-icon">
          <img src="/screempage.jfif" :alt="site.name" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.splash {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  background: var(--neu-bg);
  cursor: pointer;
  touch-action: manipulation;
}
.splash.is-leaving {
  animation: splash-fade 0.48s ease forwards;
  pointer-events: none;
}
.splash-motion {
  transform-origin: center center;
  animation: splash-zoom-in 1.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.splash.is-leaving .splash-motion {
  animation: splash-zoom-out 0.42s ease forwards;
}
.splash-icon {
  width: min(52vw, 220px);
  aspect-ratio: 1;
  border-radius: 22%;
  overflow: hidden;
  overflow: clip;
  background: var(--neu-light);
  box-shadow: var(--neu-raised);
}
.splash-icon img {
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
  object-position: center;
  display: block;
  border-radius: inherit;
}
@keyframes splash-zoom-in {
  from {
    transform: scale(0.92);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes splash-zoom-out {
  to {
    transform: scale(0.97);
    opacity: 0;
  }
}
@keyframes splash-fade {
  to {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .splash-motion,
  .splash.is-leaving .splash-motion {
    animation: none;
    transform: none;
    opacity: 1;
  }
}
</style>
