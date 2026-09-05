<script setup>
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, default: '' },
  wide: { type: Boolean, default: false },
  cinema: { type: Boolean, default: false },
})
const emit = defineEmits(['close'])

function onKey(e) {
  if (e.key !== 'Escape') return
  if (document.fullscreenElement || document.webkitFullscreenElement) return
  if (document.querySelector('.yt.is-expanded')) return
  emit('close')
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
    <div v-if="open" class="modal-root" :class="{ 'is-cinema': cinema }" role="dialog" aria-modal="true" :aria-label="title || 'Fenêtre'">
      <button class="modal-backdrop" type="button" aria-label="Fermer" @click="emit('close')" />
      <div class="modal-panel" :class="{ 'is-wide': wide, 'is-cinema': cinema }">
        <header class="modal-head">
          <h2 v-if="title">{{ title }}</h2>
          <button type="button" class="modal-close" @click="emit('close')">Fermer</button>
        </header>
        <div class="modal-body">
          <slot />
        </div>
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
.modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}
.modal-head h2 {
  margin: 0;
  min-width: 0;
  font-family: var(--font-display);
  font-size: 1.5rem;
  line-height: 1.25;
  overflow-wrap: break-word;
}
.modal-close {
  flex-shrink: 0;
  border: 0;
  background: none;
  color: var(--color-muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
}
.modal-panel.is-wide {
  width: min(960px, 100%);
}
.modal-root.is-cinema {
  z-index: 140;
  align-items: start;
  justify-items: center;
  padding: 0.65rem;
  overflow: hidden;
}
.modal-panel.is-cinema {
  display: flex;
  flex-direction: column;
  width: min(52rem, 100%);
  max-height: calc(100dvh - 1.3rem);
  overflow: hidden;
  padding: 0;
}
.modal-panel.is-cinema .modal-head {
  flex-shrink: 0;
  margin: 0;
  padding: 0.85rem 1rem 0.7rem;
}
.modal-panel.is-cinema .modal-head h2 {
  font-size: 1.08rem;
}
.modal-panel.is-cinema .modal-body {
  flex: 1;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  padding: 0 1rem 1.15rem;
}
@media (max-width: 1023px) {
  .modal-root.is-cinema {
    padding: 0;
  }
  .modal-panel.is-cinema {
    width: 100%;
    max-height: 100dvh;
    min-height: 100dvh;
    border-radius: 0;
    box-shadow: none;
  }
  .modal-panel.is-cinema .modal-head {
    padding: 0.7rem 0.85rem 0.55rem;
  }
  .modal-panel.is-cinema .modal-body {
    padding: 0 0.85rem calc(1.1rem + env(safe-area-inset-bottom, 0px));
  }
}
</style>
