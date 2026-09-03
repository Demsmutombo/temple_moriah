<script setup>
import { ref } from 'vue'
import PhotoLightbox from './PhotoLightbox.vue'

defineProps({
  photos: { type: Array, required: true },
})

const open = ref(false)
const start = ref(0)

function openAt(i) {
  start.value = i
  open.value = true
}
</script>

<template>
  <div>
    <ul class="grid grid-cols-2 lg:grid-cols-3 gap-1.5 lg:gap-4">
      <li v-for="(photo, i) in photos" :key="photo.id">
        <button type="button" class="photo-tile" @click="openAt(i)">
          <img v-if="photo.src" :src="photo.src" :alt="photo.caption || photo.title" />
          <div v-else class="photo-fallback">
            <span class="text-meta text-gold">{{ photo.year || photo.date }}</span>
            <span class="font-display text-sm lg:text-2xl mt-2 block line-clamp-3">{{ photo.title }}</span>
          </div>
          <span class="sr-only">Ouvrir {{ photo.title }}</span>
        </button>
      </li>
    </ul>
    <PhotoLightbox :photos="photos" :open="open" :start-index="start" @close="open = false" />
  </div>
</template>

<style scoped>
.photo-tile {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  text-align: left;
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
  border-radius: 12px;
  overflow: hidden;
  padding: 0;
}
.photo-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (min-width: 1024px) {
  .photo-tile {
    aspect-ratio: auto;
    border-radius: 28px;
    padding: 0.7rem;
    box-shadow: var(--neu-raised);
  }
}
.photo-fallback {
  aspect-ratio: 1;
  height: 100%;
  background: var(--neu-bg);
  border-radius: 12px;
  padding: 0.55rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
@media (min-width: 1024px) {
  .photo-fallback {
    aspect-ratio: 4 / 3;
    border-radius: 22px;
    padding: 1.25rem;
    box-shadow: var(--neu-inset);
  }
}
</style>
