<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '@/components/layout/PageHero.vue'
import PdfReader from '@/components/archive/PdfReader.vue'
import { documents } from '@/data'

const route = useRoute()
const document = computed(() => documents.find((d) => d.id === route.params.id && d.url))
</script>

<template>
  <div v-if="document">
    <PageHero :title="document.title" :subtitle="document.author" :period="document.date" />
    <article class="mx-auto max-w-4xl px-4 lg:px-5 py-4 lg:py-12 space-y-6">
      <p v-if="document.description" class="text-ink-soft">{{ document.description }}</p>
      <PdfReader :src="document.url" :title="document.title" />
      <RouterLink to="/archives" class="text-meta text-gold inline-block">← Archives</RouterLink>
    </article>
  </div>
  <div v-else class="mx-auto max-w-3xl px-5 py-32">
    <p class="font-display text-3xl">Document introuvable</p>
    <RouterLink to="/archives" class="text-meta text-gold mt-6 inline-block">Retour</RouterLink>
  </div>
</template>
