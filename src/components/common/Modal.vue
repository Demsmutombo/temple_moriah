<script setup>
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, default: '' },
})
const emit = defineEmits(['close'])

function onKey(e) {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.open,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
  },
)

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="modal-root" role="dialog" aria-modal="true" :aria-label="title || 'Fenêtre'">
      <button class="modal-backdrop" type="button" aria-label="Fermer" @click="emit('close')" />
      <div class="modal-panel">
        <header class="flex items-center justify-between gap-4 mb-4">
          <h2 v-if="title" class="font-display text-2xl">{{ title }}</h2>
          <button type="button" class="text-meta text-muted hover:text-ink" @click="emit('close')">
            Fermer
          </button>
        </header>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-root {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: center;
  padding: 1rem;
}
.modal-backdrop {
  position: absolute;
  inset: 0;
  background: var(--neu-overlay);
  border: 0;
  cursor: pointer;
}
.modal-panel {
  position: relative;
  width: min(720px, 100%);
  max-height: 90vh;
  overflow: auto;
  background: var(--neu-bg);
  padding: 1.5rem;
  border-radius: 28px;
  box-shadow: var(--neu-raised);
}
</style>
