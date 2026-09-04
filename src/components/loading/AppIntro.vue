<script setup>
import logo from '@/assets/images/logo.png'
import LoadingDots from '@/components/loading/LoadingDots.vue'
import { site } from '@/data'
import { usePageLoader } from '@/composables/usePageLoader'

const { phase, mode, finish } = usePageLoader()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="phase !== 'ready'"
      class="intro"
      :class="{ 'is-leaving': phase === 'leaving', 'is-dots': mode === 'dots' }"
      role="dialog"
      aria-modal="true"
      :aria-label="`Ouverture — ${site.name}`"
      @click="finish"
    >
      <div v-if="mode === 'full'" class="intro-mark">
        <img :src="logo" :alt="site.name" />
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
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 1.6rem;
  background: var(--neu-bg);
  cursor: pointer;
  touch-action: manipulation;
}
.intro.is-leaving {
  animation: intro-fade 0.52s ease forwards;
  pointer-events: none;
}
.intro-mark {
  width: min(42vw, 168px);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  animation: intro-breathe 3.2s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.intro-mark img {
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: contain;
  object-position: center;
  display: block;
}
@keyframes intro-breathe {
  0% {
    transform: scale(0.78);
    opacity: 0.22;
  }
  42% {
    transform: scale(1);
    opacity: 1;
  }
  62% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.94);
    opacity: 1;
  }
}
@keyframes intro-fade {
  to {
    opacity: 0;
  }
}
@media (min-width: 1024px) {
  .intro-mark {
    width: min(22vw, 196px);
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
