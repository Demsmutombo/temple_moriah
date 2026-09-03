<script setup>
import { computed } from 'vue'
import PhotoGallery from '@/components/gallery/PhotoGallery.vue'
import { photosInCategory, photoCategories } from '@/data'

const props = defineProps({
  category: { type: String, required: true },
})

const list = computed(() => photosInCategory(props.category))
const label = computed(() => photoCategories.find((c) => c.id === props.category)?.label || '')
</script>

<template>
  <section v-if="list.length" class="chapter-photos">
    <h2 class="chapter-photos-title">{{ label }}</h2>
    <PhotoGallery :photos="list" />
  </section>
</template>

<style scoped>
.chapter-photos {
  margin-top: 1.25rem;
}
.chapter-photos-title {
  margin: 0 0 0.7rem;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
}
@media (min-width: 1024px) {
  .chapter-photos {
    margin-top: 2rem;
  }
  .chapter-photos-title {
    font-size: 1.45rem;
    margin-bottom: 1rem;
  }
}
</style>
