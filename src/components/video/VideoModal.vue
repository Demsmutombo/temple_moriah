<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import Modal from '@/components/common/Modal.vue'
import VideoPlayer from '@/components/video/VideoPlayer.vue'
import VideoCard from '@/components/video/VideoCard.vue'
import { displayVideo } from '@/composables/useYoutubeMeta'
import { suggestedVideos } from '@/composables/useVideoSuggestions'
import { videoCategoryLabel } from '@/data'

const props = defineProps({
  video: { type: Object, default: null },
})
const emit = defineEmits(['close'])

const active = ref(props.video)
const scroller = ref(null)

watch(
  () => props.video,
  (value) => {
    active.value = value
  },
)

const shown = computed(() => (active.value ? displayVideo(active.value) : null))
const categoryName = computed(() => (shown.value ? videoCategoryLabel(shown.value.category) : ''))
const suggestions = computed(() => suggestedVideos(active.value))

async function openSuggestion(item) {
  active.value = item
  await nextTick()
  scroller.value?.closest('.modal-body')?.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <Modal :open="Boolean(video)" :title="shown?.title || ''" wide cinema @close="emit('close')">
    <div v-if="video && shown && active" ref="scroller" class="cinema-body">
      <p v-if="categoryName || shown.displayDate" class="cinema-meta">
        {{ [categoryName, shown.displayDate, shown.speaker].filter(Boolean).join(' · ') }}
      </p>
      <VideoPlayer
        :key="active.id"
        :src="active.url"
        :youtube-id="active.youtubeId"
        :poster="shown.thumbnail"
        :title="shown.title"
        autoplay
      />

      <section v-if="suggestions.length" class="suggest">
        <h3>À regarder ensuite</h3>
        <ul>
          <li v-for="item in suggestions" :key="item.id">
            <VideoCard :video="item" @play="openSuggestion" />
          </li>
        </ul>
      </section>
    </div>
  </Modal>
</template>

<style scoped>
.cinema-body {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.cinema-meta {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.35;
  color: var(--color-muted);
}
.cinema-body :deep(.player) {
  flex: none;
}
.suggest {
  margin-top: 0.55rem;
  padding-bottom: 0.35rem;
}
.suggest h3 {
  margin: 0 0 0.7rem;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
}
.suggest ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
@media (min-width: 1024px) {
  .cinema-meta {
    font-size: 0.85rem;
  }
  .suggest ul {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.9rem;
  }
}
</style>
