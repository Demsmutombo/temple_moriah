<script setup>
import { computed } from 'vue'
import VideoStack from '@/components/video/VideoStack.vue'
import MediaCompanion from '@/components/media/MediaCompanion.vue'
import { videosInCategory, videoCategoryLabel, mediaCompanion } from '@/data'

const props = defineProps({
  category: { type: String, required: true },
})

const list = computed(() => videosInCategory(props.category))
const label = computed(() => videoCategoryLabel(props.category))
const companion = computed(() => mediaCompanion(props.category))
</script>

<template>
  <section v-if="list.length" class="chapter-videos">
    <MediaCompanion :title="label" :companion="companion" />
    <VideoStack :videos="list" />
  </section>
</template>

<style scoped>
.chapter-videos {
  margin-top: 1.25rem;
}
@media (min-width: 1024px) {
  .chapter-videos {
    margin-top: 2rem;
  }
}
</style>
