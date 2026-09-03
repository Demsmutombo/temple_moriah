<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PastorMessageCard from '@/components/testimony/PastorMessageCard.vue'
import PersonRow from '@/components/common/PersonRow.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import PdfReader from '@/components/archive/PdfReader.vue'
import { pastorMessages, documents } from '@/data'

const pastorPdf = documents.find((d) => d.id === 'doc-pastor-message-pdf')
</script>

<template>
  <div>
    <PageHero
      title="Paroles du pasteur"
      subtitle="Chaque intervention est une archive. Les citations originales ne sont jamais réécrites. Les résumés éditoriaux sont clairement distingués."
    />
    <section class="mobile-page">
      <MobileSectionHead title="Suggéré pour vous" />
      <ChapterVideos category="predications" />
      <div v-if="pastorPdf" class="mt-4">
        <h2 class="font-display text-lg mb-2">{{ pastorPdf.title }}</h2>
        <PdfReader :src="pastorPdf.url" :title="pastorPdf.title" />
      </div>
      <SuggestList>
        <PersonRow
          v-for="m in pastorMessages"
          :key="m.id"
          :title="m.author"
          :subtitle="`${m.event} · ${m.displayDate}`"
          :to="`/voix/pasteur/${m.id}`"
          action="Lire"
        />
      </SuggestList>
    </section>
    <section class="hidden lg:block mx-auto max-w-6xl px-5 py-16">
      <ChapterVideos category="predications" />
      <div v-if="pastorPdf" class="mt-10">
        <h2 class="font-display text-3xl mb-4">{{ pastorPdf.title }}</h2>
        <PdfReader :src="pastorPdf.url" :title="pastorPdf.title" />
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <PastorMessageCard v-for="m in pastorMessages" :key="`d-${m.id}`" :message="m" />
      </div>
    </section>
  </div>
</template>
