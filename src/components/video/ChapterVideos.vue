<script setup>
import { computed } from 'vue'
import VideoGrid from '@/components/video/VideoGrid.vue'
import { videosInCategory, videoCategoryLabel } from '@/data'

const props = defineProps({
  category: { type: String, required: true },
})

const list = computed(() => videosInCategory(props.category))
const label = computed(() => videoCategoryLabel(props.category))
</script>

<template>
  <section v-if="list.length" class="chapter-videos">
    <h2 class="chapter-videos-title">{{ label }}</h2>
    <VideoGrid :videos="list" />
  </section>
</template>

<style scoped>
.chapter-videos {
  margin-top: 1.25rem;
}
.chapter-videos-title {
  margin: 0 0 0.7rem;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
}
@media (min-width: 1024px) {
  .chapter-videos {
    margin-top: 2rem;
  }
  .chapter-videos-title {
    font-size: 1.45rem;
    margin-bottom: 1rem;
  }
}
</style>
