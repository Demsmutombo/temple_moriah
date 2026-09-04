<script setup>
defineProps({
  label: { type: String, default: 'Chargement' },
})
</script>

<template>
  <div class="dots" role="status" :aria-label="label">
    <span class="dot" /><span class="dot" /><span class="dot" />
  </div>
</template>

<style scoped>
.dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.62rem;
}
.dot {
  width: 0.52rem;
  height: 0.52rem;
  border-radius: 50%;
  background: var(--neu-blue);
  opacity: 0.38;
  transform: scale(0.86);
  animation: morija-dot 1.8s ease-in-out infinite;
}
.dot:nth-child(1) {
  animation-delay: 0s;
}
.dot:nth-child(2) {
  animation-delay: 0.22s;
}
.dot:nth-child(3) {
  animation-delay: 0.44s;
}
@keyframes morija-dot {
  0%,
  100% {
    opacity: 0.32;
    transform: scale(0.84);
    background: color-mix(in srgb, var(--neu-blue) 70%, var(--color-muted));
  }
  35% {
    opacity: 1;
    transform: scale(1.18);
    background: var(--neu-blue-2);
  }
  55% {
    opacity: 0.78;
    transform: scale(1.04);
    background: var(--neu-blue);
  }
}
@media (prefers-reduced-motion: reduce) {
  .dot {
    animation: none;
    opacity: 0.7;
    transform: none;
  }
}
</style>
