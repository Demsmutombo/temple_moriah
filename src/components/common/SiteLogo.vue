<script setup>
import logo from '@/assets/images/logo.png'

defineProps({
  alt: { type: String, default: 'Temple Moriah' },
  size: { type: String, default: 'md' },
})
</script>

<template>
  <img
    :src="logo"
    :alt="alt"
    class="site-logo"
    :class="`site-logo--${size}`"
    width="480"
    height="320"
  />
</template>

<style scoped>
.site-logo {
  display: block;
  object-fit: contain;
  background: transparent;
  cursor: pointer;
  transform-origin: center center;
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.4s ease;
}
.site-logo:hover {
  transform: none;
  filter: none;
}
@media (hover: hover) and (pointer: fine) {
  .site-logo:hover {
    transform: scale(1.08);
    filter: drop-shadow(0 10px 20px rgba(74, 144, 226, 0.38));
  }
}
.site-logo--sm {
  width: 56px;
  height: 42px;
}
.site-logo--md {
  width: 132px;
  height: 96px;
}
.site-logo--lg {
  width: 220px;
  height: 160px;
}
.site-logo--xl {
  width: min(86vw, 460px);
  height: auto;
  aspect-ratio: 3 / 2;
}
@media (min-width: 768px) {
  .site-logo--sm {
    width: 64px;
    height: 48px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .site-logo {
    transition: none;
  }
  .site-logo:hover {
    transform: none;
    filter: none;
  }
}
</style>
