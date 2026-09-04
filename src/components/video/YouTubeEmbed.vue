<script setup>
import { computed, ref, watch } from 'vue'
import { youtubeEmbedUrl, youtubeThumb } from '@/utils/youtube'

const props = defineProps({
  youtubeId: { type: String, required: true },
  title: { type: String, default: 'Vidéo' },
  autoplay: { type: Boolean, default: false },
})

const playing = ref(props.autoplay)
const thumbBroken = ref(false)
const thumb = computed(() => youtubeThumb(props.youtubeId))
const embed = computed(() =>
  youtubeEmbedUrl(props.youtubeId, {
    autoplay: props.autoplay || playing.value,
    origin: typeof window !== 'undefined' ? window.location.origin : '',
  }),
)

watch(
  () => props.youtubeId,
  () => {
    playing.value = props.autoplay
  },
)
</script>

<template>
  <div class="yt">
    <iframe
      v-if="playing"
      :src="embed"
      :title="title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
    />
    <button v-else type="button" class="yt-poster" :aria-label="`Lire : ${title}`" @click="playing = true">
      <img
        v-if="!thumbBroken"
        :src="thumb"
        :alt="title"
        width="1280"
        height="720"
        loading="lazy"
        @error="thumbBroken = true"
      />
      <span class="yt-play" aria-hidden="true">▶</span>
    </button>
  </div>
</template>

<style scoped>
.yt {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 22px;
  background: var(--neu-dark);
}
.yt iframe,
.yt-poster,
.yt-poster img {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
  object-fit: cover;
}
.yt-poster {
  position: absolute;
  inset: 0;
  padding: 0;
  cursor: pointer;
  background: none;
}
.yt-play {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 3.4rem;
  height: 3.4rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #fff;
  background: color-mix(in srgb, var(--neu-blue) 88%, #000);
  font-size: 0.85rem;
  pointer-events: none;
}
</style>
