<script setup>
import { computed } from 'vue'
import PhotoGallery from '@/components/gallery/PhotoGallery.vue'
import MediaCompanion from '@/components/media/MediaCompanion.vue'
import { photosInCategory, photoCategories, mediaCompanion } from '@/data'

const props = defineProps({
  category: { type: String, required: true },
})

const list = computed(() => photosInCategory(props.category))
const label = computed(() => photoCategories.find((c) => c.id === props.category)?.label || '')
const companion = computed(() => mediaCompanion(props.category))
</script>

<template>
  <section v-if="list.length" class="chapter-photos">
    <MediaCompanion :title="label" :companion="companion" />
    <PhotoGallery :photos="list" />
  </section>
</template>

<style scoped>
.chapter-photos {
  margin-top: 1.25rem;
}
@media (min-width: 1024px) {
  .chapter-photos {
    margin-top: 2rem;
  }
}
</style>
