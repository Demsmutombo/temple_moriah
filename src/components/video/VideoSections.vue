<script setup>
import { computed } from 'vue'
import VideoGrid from '@/components/video/VideoGrid.vue'
import MediaCompanion from '@/components/media/MediaCompanion.vue'
import { groupYoutubeVideos, mediaCompanion } from '@/data'

const props = defineProps({
  videos: { type: Array, required: true },
  variant: { type: String, default: 'card' },
})

const groups = computed(() =>
  groupYoutubeVideos(props.videos).map((group) => ({
    ...group,
    companion: mediaCompanion(group.id),
  })),
)
</script>

<template>
  <div class="video-sections">
    <section v-for="group in groups" :key="group.id" class="video-section">
      <MediaCompanion :title="group.label" :companion="group.companion" />
      <VideoGrid :videos="group.videos" :variant="variant" />
    </section>
  </div>
</template>

<style scoped>
.video-sections {
  display: grid;
  gap: 1.8rem;
}
@media (min-width: 1024px) {
  .video-sections {
    gap: 2.8rem;
  }
}
</style>
