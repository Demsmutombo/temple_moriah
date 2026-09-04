<script setup>
import { computed, nextTick, ref } from 'vue'
import VideoPlayer from '@/components/video/VideoPlayer.vue'
import { displayVideo } from '@/composables/useYoutubeMeta'

const props = defineProps({
  videos: { type: Array, required: true },
})

const list = computed(() =>
  props.videos.map((video, index) => {
    const shown = displayVideo(video)
    const stamp = shown.displayDate || ''
    const [day, session] = stamp.split(' · ')
    const prev = index > 0 ? displayVideo(props.videos[index - 1]).displayDate || '' : ''
    const prevDay = prev.split(' · ')[0]
    return {
      ...shown,
      session: session || '',
      showDay: Boolean(day) && day !== prevDay,
      dayLabel: day,
    }
  }),
)
const followId = ref('')

function onEnded(index) {
  const next = list.value[index + 1]
  followId.value = next ? next.id : ''
  if (!next) return
  nextTick(() => {
    document.getElementById(`captation-${next.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}
</script>

<template>
  <ol v-if="list.length" class="video-stack">
    <li v-for="(video, index) in list" :key="video.id" :id="`captation-${video.id}`" class="stack-item">
      <p v-if="video.showDay" class="stack-day">{{ video.dayLabel }}</p>
      <p class="text-meta">{{ String(index + 1).padStart(2, '0') }}{{ video.session ? ` · ${video.session}` : '' }}</p>
      <h3>{{ video.title }}</h3>
      <p v-if="video.speaker && video.speaker !== video.title" class="text-caption">{{ video.speaker }}</p>
      <VideoPlayer
        :key="video.id"
        class="stack-player"
        :src="video.url"
        :youtube-id="video.youtubeId"
        :poster="video.thumbnail"
        :title="video.title"
        :start="video.start || 0"
        :end="video.end || 0"
        :autoplay="followId === video.id"
        @ended="onEnded(index)"
      />
    </li>
  </ol>
</template>

<style scoped>
.video-stack {
  display: grid;
  gap: 1.35rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.stack-item {
  scroll-margin-top: 4.5rem;
}
.stack-day {
  margin: 0.35rem 0 0.55rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--neu-blue);
}
.stack-item h3 {
  margin: 0.28rem 0 0.55rem;
  font-family: var(--font-display);
  font-size: 1.12rem;
  font-weight: 700;
  line-height: 1.3;
  overflow-wrap: anywhere;
}
.stack-item .text-caption {
  margin: -0.25rem 0 0.55rem;
}
@media (min-width: 1024px) {
  .video-stack {
    gap: 1.8rem;
  }
  .stack-item h3 {
    font-size: 1.45rem;
  }
}
</style>
