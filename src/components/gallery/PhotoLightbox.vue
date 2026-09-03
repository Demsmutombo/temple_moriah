<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  photos: { type: Array, default: () => [] },
  startIndex: { type: Number, default: 0 },
  open: { type: Boolean, default: false },
})
const emit = defineEmits(['close'])

const index = ref(props.startIndex)
const current = computed(() => props.photos[index.value])

watch(
  () => props.startIndex,
  (v) => {
    index.value = v
  },
)
watch(
  () => props.open,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
  },
)

function prev() {
  index.value = (index.value - 1 + props.photos.length) % props.photos.length
}
function next() {
  index.value = (index.value + 1) % props.photos.length
}
function onKey(e) {
  if (!props.open) return
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div v-if="open && current" class="lb" role="dialog" aria-modal="true" aria-label="Visionneuse photographique">
      <button class="lb-close text-meta" type="button" @click="emit('close')">Fermer</button>
      <button v-if="photos.length > 1" class="lb-nav lb-prev" type="button" aria-label="Photographie précédente" @click="prev">←</button>
      <figure class="lb-figure">
        <img v-if="current.src" :src="current.src" :alt="current.caption || current.title" />
        <div v-else class="lb-placeholder">
          <p class="text-meta text-gold-pale">Archive photographique à verser</p>
          <p class="font-display text-3xl mt-3">{{ current.title }}</p>
        </div>
        <figcaption class="mt-4 text-center">
          <p class="text-meta text-gold-pale">{{ current.displayDate || current.date }}</p>
          <p class="mt-2 text-ivory/90">{{ current.caption || current.context }}</p>
        </figcaption>
      </figure>
      <button v-if="photos.length > 1" class="lb-nav lb-next" type="button" aria-label="Photographie suivante" @click="next">→</button>
    </div>
  </Teleport>
</template>

<style scoped>
.lb {
  position: fixed;
  inset: 0;
  z-index: 90;
  background: #100e0c;
  display: grid;
  place-items: center;
  padding: 4rem 1rem 2rem;
  color: #faf7f1;
}
.lb-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  color: #d4c4a0;
}
.lb-figure {
  max-width: 920px;
  width: 100%;
}
.lb-placeholder {
  aspect-ratio: 16 / 10;
  display: grid;
  place-content: center;
  border: 1px solid rgba(250, 247, 241, 0.15);
  text-align: center;
  padding: 2rem;
}
.lb-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: #faf7f1;
  padding: 1rem;
}
.lb-prev { left: 0.5rem; }
.lb-next { right: 0.5rem; }
</style>
