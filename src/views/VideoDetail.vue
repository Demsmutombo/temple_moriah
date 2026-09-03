<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '@/components/layout/PageHero.vue'
import VideoPlayer from '@/components/video/VideoPlayer.vue'
import { videos, videoCategoryLabel } from '@/data'
import { displayVideo } from '@/composables/useYoutubeMeta'

const route = useRoute()
const video = computed(() => videos.find((v) => v.id === route.params.id))
const shown = computed(() => (video.value ? displayVideo(video.value) : null))
const categoryName = computed(() => (shown.value ? videoCategoryLabel(shown.value.category) : ''))
</script>

<template>
  <div v-if="video && shown">
    <PageHero :title="shown.title" :period="categoryName" :subtitle="shown.displayDate || shown.speaker" />
    <article class="mx-auto max-w-4xl px-4 lg:px-5 py-4 lg:py-12 space-y-6 lg:space-y-8">
      <VideoPlayer :src="video.url" :youtube-id="video.youtubeId" :title="shown.title" />
      <RouterLink to="/mediatheque" class="text-meta text-gold inline-block">← Médiathèque</RouterLink>
    </article>
  </div>
  <div v-else class="mx-auto max-w-3xl px-5 py-32">
    <p class="font-display text-3xl">Vidéo introuvable</p>
    <RouterLink to="/mediatheque" class="text-meta text-gold mt-6 inline-block">Retour</RouterLink>
  </div>
</template>
