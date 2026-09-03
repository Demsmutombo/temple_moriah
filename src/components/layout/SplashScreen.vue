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
    document.body.style.overflow = ''
  }, 1500)
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  holdTimer = window.setTimeout(close, reduced ? 1800 : 5600)
})

onUnmounted(() => {
  window.clearTimeout(holdTimer)
  window.clearTimeout(hideTimer)
  document.body.style.overflow = ''
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
      <div class="splash-icon">
        <img src="/screempage.jfif" :alt="site.name" />
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
  background: #ffffff;
  cursor: pointer;
}
.splash.is-leaving {
  animation: splash-fade 1.4s ease forwards;
  pointer-events: none;
}
.splash-icon {
  width: min(42vw, 196px);
  aspect-ratio: 1;
  border-radius: 22%;
  overflow: hidden;
  background: #eaf2fb;
  transform-origin: center center;
  animation: splash-zoom-in 2.8s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.splash.is-leaving .splash-icon {
  animation: splash-zoom-out 1.4s ease forwards;
}
.splash-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
@keyframes splash-zoom-in {
  0% {
    transform: scale(0.52);
    opacity: 0;
  }
  22% {
    opacity: 1;
  }
  78% {
    transform: scale(1.08);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes splash-zoom-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.72);
    opacity: 0;
  }
}
@keyframes splash-fade {
  to {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .splash-icon,
  .splash.is-leaving .splash-icon {
    animation: none;
    transform: none;
    opacity: 1;
  }
}
</style>
