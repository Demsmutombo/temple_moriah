<script setup>
import { computed, ref } from 'vue'
import { displayVideo } from '@/composables/useYoutubeMeta'
import { videoCategoryLabel } from '@/data'

const props = defineProps({
  video: { type: Object, required: true },
  variant: { type: String, default: 'card' },
})
const emit = defineEmits(['play'])

const shown = computed(() => displayVideo(props.video))
const categoryName = computed(() => videoCategoryLabel(shown.value.category))
const broken = ref(false)
const thumbSrc = computed(() => (broken.value ? '' : shown.value.thumbnail))
</script>

<template>
  <article class="video-card" :class="{ 'is-tile': variant === 'tile' }">
    <button type="button" class="video-hit" :aria-label="`Lire : ${shown.title}`" @click="emit('play', video)">
      <div class="thumb">
        <img
          v-if="thumbSrc"
          :src="thumbSrc"
          :alt="shown.title"
          width="480"
          height="360"
          loading="lazy"
          referrerpolicy="no-referrer"
          @error="broken = true"
        />
        <div v-else class="thumb-fallback">
          <span class="text-meta">{{ shown.displayDate || shown.title }}</span>
        </div>
        <span class="play" aria-hidden="true">▶</span>
      </div>
      <h3 class="font-display video-title">{{ shown.title }}</h3>
      <p v-if="variant !== 'tile'" class="text-caption video-meta">
        {{ [categoryName, shown.displayDate, shown.speaker].filter(Boolean).join(' · ') }}
      </p>
    </button>
  </article>
</template>

<style scoped>
.video-card {
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
  border-radius: 16px;
  overflow: visible;
  min-width: 0;
}
.video-hit {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  text-align: left;
  color: inherit;
  cursor: pointer;
}
.thumb {
  position: relative;
  aspect-ratio: 16 / 9;
  background: var(--neu-dark);
  overflow: hidden;
  border-radius: 16px 16px 0 0;
}
.thumb img,
.thumb-fallback {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.thumb-fallback {
  display: grid;
  place-content: center;
  color: var(--neu-blue);
}
.play {
  position: absolute;
  right: 0.55rem;
  bottom: 0.55rem;
  width: 2.1rem;
  height: 2.1rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #fff;
  background: color-mix(in srgb, var(--neu-blue) 90%, #000);
  font-size: 0.65rem;
  z-index: 1;
}
.video-title {
  padding: 0.65rem 0.7rem 0;
  font-size: 0.82rem;
  line-height: 1.35;
  overflow-wrap: anywhere;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.video-meta {
  padding: 0.28rem 0.7rem 0.75rem;
  overflow-wrap: anywhere;
}
.video-card.is-tile .video-title {
  font-size: 0.72rem;
  padding: 0.4rem 0.5rem 0.55rem;
}
@media (min-width: 1024px) {
  .video-card:not(.is-tile) {
    border-radius: 28px;
    padding: 0.75rem;
    box-shadow: var(--neu-raised);
  }
  .video-card:not(.is-tile) .thumb {
    border-radius: 18px;
  }
  .video-title {
    font-size: 1.05rem;
    padding: 0.7rem 0.2rem 0;
  }
  .video-meta {
    padding: 0.25rem 0.2rem 0.2rem;
  }
}
</style>
