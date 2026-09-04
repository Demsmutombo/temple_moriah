<script setup>
import { ref } from 'vue'

defineProps({
  beforeLabel: { type: String, default: 'Avant' },
  afterLabel: { type: String, default: 'Après' },
})

const position = ref(50)

function onMove(e) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left
  position.value = Math.min(100, Math.max(0, (x / rect.width) * 100))
}
</script>

<template>
  <div
    class="ba"
    @mousedown="onMove"
    @mousemove="(e) => e.buttons === 1 && onMove(e)"
    @touchstart.prevent="onMove"
    @touchmove.prevent="onMove"
  >
    <div class="ba-pane ba-before">
      <slot name="before" />
      <span class="ba-label">{{ beforeLabel }}</span>
    </div>
    <div class="ba-pane ba-after" :style="{ clipPath: `inset(0 ${100 - position}% 0 0)` }">
      <slot name="after" />
      <span class="ba-label ba-label--after">{{ afterLabel }}</span>
    </div>
    <div class="ba-handle" :style="{ left: `${position}%` }" role="slider" :aria-valuenow="Math.round(position)" aria-valuemin="0" aria-valuemax="100" tabindex="0">
      <span />
    </div>
    <input
      class="sr-only"
      type="range"
      min="0"
      max="100"
      :value="position"
      :aria-label="`${beforeLabel} / ${afterLabel}`"
      @input="position = Number($event.target.value)"
    />
  </div>
</template>

<style scoped>
.ba {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: var(--neu-bg);
  border-radius: 28px;
  box-shadow: var(--neu-raised);
  cursor: ew-resize;
  user-select: none;
}
.ba-pane {
  position: absolute;
  inset: 0;
}
.ba-after {
  z-index: 1;
}
.ba-label {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  z-index: 2;
  font-family: var(--font-ui);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--neu-blue);
}
.ba-label--after {
  left: auto;
  right: 1rem;
}
.ba-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--neu-blue);
  z-index: 3;
  transform: translateX(-50%);
}
.ba-handle span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
}
</style>
