<script setup>
import { computed } from 'vue'
import YouTubeEmbed from '@/components/video/YouTubeEmbed.vue'
import { youtubeIdFromUrl } from '@/utils/youtube'

const props = defineProps({
  src: { type: String, default: '' },
  youtubeId: { type: String, default: '' },
  poster: { type: String, default: '' },
  title: { type: String, default: '' },
  autoplay: { type: Boolean, default: false },
  start: { type: Number, default: 0 },
  end: { type: Number, default: 0 },
})
const emit = defineEmits(['ended', 'play'])

const id = computed(() => props.youtubeId || youtubeIdFromUrl(props.src))
</script>

<template>
  <div class="player">
    <YouTubeEmbed
      v-if="id"
      :youtube-id="id"
      :title="title"
      :autoplay="autoplay"
      :start="start"
      :end="end"
      @ended="emit('ended')"
      @play="emit('play')"
    />
    <video
      v-else-if="src"
      :src="src"
      :poster="poster"
      controls
      playsinline
      controlslist="nodownload noplaybackrate"
      disablepictureinpicture
      :title="title"
      class="native"
      @ended="emit('ended')"
      @play="emit('play')"
    />
    <div v-else class="player-empty">
      <p class="text-meta">Captation à verser</p>
      <p class="font-display text-2xl mt-2">{{ title }}</p>
    </div>
  </div>
</template>

<style scoped>
.player {
  background: var(--neu-bg);
  box-shadow: var(--neu-raised);
  border-radius: 28px;
  padding: 0.75rem;
  color: var(--color-ink);
}
.native {
  width: 100%;
  border-radius: 22px;
  display: block;
  background: #10151c;
}
.player-empty {
  aspect-ratio: 16 / 9;
  display: grid;
  place-content: center;
  text-align: center;
  padding: 2rem;
  border-radius: 22px;
  box-shadow: var(--neu-inset);
}
</style>
