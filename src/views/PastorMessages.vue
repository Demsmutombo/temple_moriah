<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MediaTextCard from '@/components/common/MediaTextCard.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import PdfReader from '@/components/archive/PdfReader.vue'
import { pastorMessages, documents } from '@/data'
import { imageForEvent, photoSrc } from '@/utils/archiveImage'

const pastorPdf = documents.find((d) => d.id === 'doc-pastor-message-pdf')

function messageImage(m) {
  if (m.photo) return photoSrc(m.photo) || m.photo
  return imageForEvent(m.eventId)
}
</script>

<template>
  <div>
    <PageHero
      title="Paroles du pasteur"
      subtitle="Chaque intervention est une archive. Les citations originales ne sont jamais réécrites. Les résumés éditoriaux sont clairement distingués."
    />
    <section class="page-body">
      <EditorialIntro
        kicker="Les voix"
        title="Pourquoi ces paroles comptent"
        text="Elles documentent le choc, le calme demandé, la consolation et l’élan de rebâtir. Lire d’abord le contexte, puis les extraits, puis les captations lorsqu’elles existent."
      />
      <div class="voice-stack">
        <MediaTextCard
          v-for="m in pastorMessages"
          :key="m.id"
          :image="messageImage(m)"
          :image-alt="m.author"
          kicker="Parole"
          :title="m.title || m.event"
          :date="`${m.author} — ${m.displayDate}`"
          :excerpt="m.quoteOriginal || m.editorialSummary"
          :body="[m.quoteOriginal, m.editorialSummary, m.context].filter(Boolean).join('\n\n')"
          :to="`/voix/pasteur/${m.id}`"
          action="Lire la suite"
        />
      </div>
      <ChapterVideos category="predications" />
      <div v-if="pastorPdf" class="mt-6">
        <h2 class="font-display text-lg lg:text-2xl mb-2">{{ pastorPdf.title }}</h2>
        <PdfReader :src="pastorPdf.url" :title="pastorPdf.title" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.voice-stack {
  display: grid;
  gap: 0.9rem;
}
@media (min-width: 1024px) {
  .voice-stack {
    gap: 1.25rem;
  }
}
</style>
