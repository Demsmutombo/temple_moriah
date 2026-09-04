<script setup>
import { computed, ref } from 'vue'
import VideoCard from '@/components/video/VideoCard.vue'
import VideoModal from '@/components/video/VideoModal.vue'
import { displayVideo } from '@/composables/useYoutubeMeta'

const props = defineProps({
  videos: { type: Array, required: true },
  variant: { type: String, default: 'card' },
})

const current = ref(null)
const list = computed(() => props.videos.map(displayVideo))

function open(video) {
  current.value = video
}
</script>

<template>
  <div>
    <ul
      class="video-grid"
      :class="[
        variant === 'tile' ? 'is-tile' : 'is-card',
        list.length === 1 ? 'is-single' : '',
      ]"
    >
      <li v-for="video in list" :key="video.id">
        <VideoCard :video="video" :variant="variant" @play="open(video)" />
      </li>
    </ul>
    <VideoModal :video="current" @close="current = null" />
  </div>
</template>

<style scoped>
.video-grid {
  display: grid;
  gap: 0.45rem;
}
.video-grid.is-card {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}
.video-grid.is-single {
  grid-template-columns: minmax(0, 22rem);
  justify-content: center;
}
.video-grid.is-tile {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (min-width: 1024px) {
  .video-grid.is-card,
  .video-grid.is-tile {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
  .video-grid.is-single {
    grid-template-columns: minmax(0, 36rem);
  }
}
</style>
