<script setup>
defineProps({
  variant: {
    type: String,
    default: 'ink',
  },
  decorative: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <svg
    viewBox="0 0 240 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="emblem"
    :class="`emblem--${variant}`"
    :aria-hidden="decorative ? 'true' : undefined"
    :role="decorative ? undefined : 'img'"
    :aria-label="decorative ? undefined : 'Emblème architectural du Temple Moriah'"
  >
    <title v-if="!decorative">Temple Moriah — emblème de la façade</title>
    <!-- Apex light -->
    <path d="M120 10 V28" stroke="currentColor" stroke-width="1.4" />
    <circle cx="120" cy="32" r="3" fill="currentColor" />
    <!-- Pediment -->
    <path d="M120 38 L28 92 H212 Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="miter" />
    <path d="M120 52 L52 92 H188 Z" stroke="currentColor" stroke-width="0.8" opacity="0.45" />
    <!-- Entablature -->
    <rect x="32" y="92" width="176" height="14" stroke="currentColor" stroke-width="1.4" />
    <path d="M40 99 H200" stroke="currentColor" stroke-width="0.6" opacity="0.5" />
    <!-- Columns -->
    <g stroke="currentColor" stroke-width="1.5">
      <path d="M48 106 V214" />
      <path d="M72 106 V214" />
      <path d="M96 106 V214" />
      <path d="M144 106 V214" />
      <path d="M168 106 V214" />
      <path d="M192 106 V214" />
    </g>
    <g stroke="currentColor" stroke-width="1.1">
      <rect x="44" y="106" width="8" height="6" />
      <rect x="68" y="106" width="8" height="6" />
      <rect x="92" y="106" width="8" height="6" />
      <rect x="140" y="106" width="8" height="6" />
      <rect x="164" y="106" width="8" height="6" />
      <rect x="188" y="106" width="8" height="6" />
      <rect x="44" y="208" width="8" height="6" />
      <rect x="68" y="208" width="8" height="6" />
      <rect x="92" y="208" width="8" height="6" />
      <rect x="140" y="208" width="8" height="6" />
      <rect x="164" y="208" width="8" height="6" />
      <rect x="188" y="208" width="8" height="6" />
    </g>
    <!-- Central door -->
    <rect x="110" y="156" width="20" height="58" stroke="currentColor" stroke-width="1.4" />
    <path d="M120 156 V214" stroke="currentColor" stroke-width="0.7" opacity="0.5" />
    <!-- Side doors -->
    <rect x="78" y="176" width="12" height="38" stroke="currentColor" stroke-width="1.1" opacity="0.85" />
    <rect x="150" y="176" width="12" height="38" stroke="currentColor" stroke-width="1.1" opacity="0.85" />
    <!-- Stylobate -->
    <path d="M24 214 H216" stroke="currentColor" stroke-width="1.8" />
    <path d="M16 226 H224" stroke="currentColor" stroke-width="1.4" />
    <path d="M8 238 H232" stroke="currentColor" stroke-width="1.4" />
    <path d="M4 250 H236" stroke="currentColor" stroke-width="1.2" />
  </svg>
</template>

<style scoped>
.emblem {
  display: block;
  width: 100%;
  height: auto;
}
.emblem--ink {
  color: #24344a;
}
.emblem--ivory {
  color: #e8eef6;
}
.emblem--gold {
  color: #4a90e2;
}
</style>
