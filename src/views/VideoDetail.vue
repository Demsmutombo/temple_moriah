<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageHero from '@/components/layout/PageHero.vue'
import VideoPlayer from '@/components/video/VideoPlayer.vue'
import VideoCard from '@/components/video/VideoCard.vue'
import { videos, videoCategoryLabel } from '@/data'
import { displayVideo } from '@/composables/useYoutubeMeta'
import { suggestedVideos } from '@/composables/useVideoSuggestions'

const route = useRoute()
const router = useRouter()
const video = computed(() => videos.find((v) => v.id === route.params.id))
const shown = computed(() => (video.value ? displayVideo(video.value) : null))
const categoryName = computed(() => (shown.value ? videoCategoryLabel(shown.value.category) : ''))

const suggestions = computed(() => suggestedVideos(video.value))

function openSuggestion(item) {
  router.push(`/mediatheque/${item.id}`)
}

watch(
  () => route.params.id,
  () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
)
</script>

<template>
  <div v-if="video && shown">
    <PageHero :title="shown.title" :period="categoryName" :subtitle="shown.displayDate || shown.speaker" />
    <article class="video-page">
      <VideoPlayer :src="video.url" :youtube-id="video.youtubeId" :poster="shown.thumbnail" :title="shown.title" />

      <section v-if="suggestions.length" class="suggest">
        <h2>À regarder ensuite</h2>
        <p class="suggest-lead">
          {{
            suggestions.some((item) => item.category === video.category)
              ? 'D’autres captations de la même période, puis la suite des archives.'
              : 'D’autres captations déjà versées aux archives.'
          }}
        </p>
        <ul class="suggest-grid">
          <li v-for="item in suggestions" :key="item.id">
            <VideoCard :video="item" @play="openSuggestion" />
          </li>
        </ul>
      </section>

      <RouterLink to="/mediatheque" class="back">← Médiathèque</RouterLink>
    </article>
  </div>
  <div v-else class="mx-auto max-w-3xl px-5 py-32">
    <p class="font-display text-3xl">Vidéo introuvable</p>
    <RouterLink to="/mediatheque" class="text-meta text-gold mt-6 inline-block">Retour</RouterLink>
  </div>
</template>

<style scoped>
.video-page {
  max-width: 56rem;
  margin: 0 auto;
  padding: 1rem var(--page-gutter) 2rem;
}
.suggest {
  margin-top: 1.35rem;
}
.suggest h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}
.suggest-lead {
  margin: 0.35rem 0 0.9rem;
  font-size: 0.85rem;
  line-height: 1.45;
  color: var(--color-muted);
}
.suggest-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.back {
  display: inline-block;
  margin-top: 1.25rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--neu-blue);
  text-decoration: none;
}
@media (min-width: 1024px) {
  .video-page {
    padding: 2rem 1.25rem 3rem;
  }
  .suggest {
    margin-top: 2rem;
  }
  .suggest h2 {
    font-size: 1.45rem;
  }
  .suggest-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.15rem;
  }
}
</style>
