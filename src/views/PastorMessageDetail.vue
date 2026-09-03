<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '@/components/layout/PageHero.vue'
import KindBadge from '@/components/common/KindBadge.vue'
import QuoteBlock from '@/components/common/QuoteBlock.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import VideoPlayer from '@/components/video/VideoPlayer.vue'
import { pastorMessages } from '@/data'

const route = useRoute()
const message = computed(() => pastorMessages.find((m) => m.id === route.params.id))
</script>

<template>
  <div v-if="message">
    <PageHero :title="message.title || message.author" :subtitle="message.event" :period="message.displayDate" />
    <article class="mx-auto max-w-3xl px-4 lg:px-5 py-4 lg:py-16 space-y-6 lg:space-y-10">
      <p class="text-caption">{{ message.context }}</p>

      <div v-if="message.quoteOriginal">
        <KindBadge kind="parole" label="Citation originale" />
        <QuoteBlock class="mt-6" :text="message.quoteOriginal" :attribution="message.author" note="Citation présentée comme exacte. Ne pas modifier." />
      </div>

      <div>
        <KindBadge kind="narration" label="Résumé éditorial" />
        <p class="mt-4 text-lg text-ink-soft leading-relaxed">{{ message.editorialSummary }}</p>
      </div>

      <div v-if="message.body">
        <h2 class="font-display text-2xl mb-3">Lire le message</h2>
        <p class="whitespace-pre-line text-ink-soft">{{ message.body }}</p>
      </div>
      <EmptyArchive v-else title="Texte intégral" text="Le message complet n’a pas encore été versé." />

      <div>
        <h2 class="font-display text-2xl mb-4">Regarder la vidéo</h2>
        <VideoPlayer :src="message.video" :title="message.title || message.event" />
      </div>

      <p class="text-caption">Source : {{ message.source }}</p>
      <RouterLink to="/voix/pasteur" class="text-meta text-gold inline-block">← Toutes les paroles</RouterLink>
    </article>
  </div>
  <div v-else class="mx-auto max-w-3xl px-5 py-32">
    <p class="font-display text-3xl">Archive introuvable</p>
    <RouterLink to="/voix/pasteur" class="text-meta text-gold mt-6 inline-block">Retour</RouterLink>
  </div>
</template>
