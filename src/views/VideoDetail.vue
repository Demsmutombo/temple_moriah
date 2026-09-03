<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '@/components/layout/PageHero.vue'
import VideoPlayer from '@/components/video/VideoPlayer.vue'
import KindBadge from '@/components/common/KindBadge.vue'
import { videos } from '@/data'

const route = useRoute()
const video = computed(() => videos.find((v) => v.id === route.params.id))
</script>

<template>
  <div v-if="video">
    <PageHero :title="video.title" :period="video.displayDate" :subtitle="video.speaker" />
    <article class="mx-auto max-w-4xl px-4 lg:px-5 py-4 lg:py-12 space-y-6 lg:space-y-8">
      <VideoPlayer :src="video.url" :title="video.title" />
      <div class="flex items-center gap-3">
        <KindBadge kind="fait" />
        <span class="text-meta text-muted">{{ video.status === 'pending_archive' ? 'Captation à verser' : 'Archive' }}</span>
      </div>
      <p class="text-lg text-ink-soft leading-relaxed">{{ video.description }}</p>
      <RouterLink to="/mediatheque" class="text-meta text-gold inline-block">← Médiathèque</RouterLink>
    </article>
  </div>
  <div v-else class="mx-auto max-w-3xl px-5 py-32">
    <p class="font-display text-3xl">Vidéo introuvable</p>
    <RouterLink to="/mediatheque" class="text-meta text-gold mt-6 inline-block">Retour</RouterLink>
  </div>
</template>
