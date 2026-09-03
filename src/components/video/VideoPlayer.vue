<script setup>
import { computed } from 'vue'
import YouTubeEmbed from '@/components/video/YouTubeEmbed.vue'
import { youtubeIdFromUrl } from '@/utils/youtube'

const props = defineProps({
  src: { type: String, default: '' },
  youtubeId: { type: String, default: '' },
  title: { type: String, default: '' },
  autoplay: { type: Boolean, default: false },
})

const id = computed(() => props.youtubeId || youtubeIdFromUrl(props.src))
</script>

<template>
  <div class="player">
    <YouTubeEmbed v-if="id" :youtube-id="id" :title="title" :autoplay="autoplay" />
    <video v-else-if="src" :src="src" controls :title="title" class="w-full rounded-[22px]" />
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
