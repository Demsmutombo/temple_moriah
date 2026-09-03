<script setup>
import { computed } from 'vue'
import VideoGrid from '@/components/video/VideoGrid.vue'
import { groupYoutubeVideos } from '@/data'

const props = defineProps({
  videos: { type: Array, required: true },
  variant: { type: String, default: 'card' },
})

const groups = computed(() => groupYoutubeVideos(props.videos))
</script>

<template>
  <div class="video-sections">
    <section v-for="group in groups" :key="group.id" class="video-section">
      <h2 class="section-title">{{ group.label }}</h2>
      <VideoGrid :videos="group.videos" :variant="variant" />
    </section>
  </div>
</template>

<style scoped>
.video-sections {
  display: grid;
  gap: 1.6rem;
}
.section-title {
  margin: 0 0 0.7rem;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}
@media (min-width: 1024px) {
  .video-sections {
    gap: 2.4rem;
  }
  .section-title {
    font-size: 1.45rem;
    margin-bottom: 1rem;
  }
}
</style>
