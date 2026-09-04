<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MediaTextCard from '@/components/common/MediaTextCard.vue'
import BeforeAfterSlider from '@/components/common/BeforeAfterSlider.vue'
import QuoteBlock from '@/components/common/QuoteBlock.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import { reconstruction, biblicalReferences, beforeAfterPairs, site, CONTENT_KINDS } from '@/data'
import { photoSrc } from '@/utils/archiveImage'

const neh = biblicalReferences.find((b) => b.id === 'neh2')
const hag = biblicalReferences.find((b) => b.id === 'hag1')

const eventPhotos = {
  expertise: 'ph-facade-apres',
  'decision-demolition': 'ph-toiture-apres',
  'premiere-pierre-2026': 'ph-culte-ciel-ouvert',
}

const chapters = [
  {
    title: 'Après l’expertise',
    kind: reconstruction.situation.kind,
    photoId: 'ph-sanctuaire-apres',
    body: reconstruction.situation.paragraphs.join('\n\n'),
  },
  {
    title: 'La mémoire et le nouveau lieu',
    kind: reconstruction.vision.kind,
    photoId: 'ph-facade-avant',
    body: reconstruction.vision.paragraphs.join('\n\n'),
  },
]
</script>

<template>
  <div>
    <PageHero
      period="IV — 2026 →"
      title="Reconstruction"
      subtitle="De la cendre à la splendeur de l’Éternel. Expertise, décision de démolir, première pierre du 24 juillet 2026."
    />
    <PeriodNav />

    <section class="page-body">
      <EditorialIntro text="Expertise, décision de démolir, première pierre : le chapitre ouvert de rebâtir. Les médias suivent le récit." />
      <div class="story-cards">
        <MediaTextCard
          v-for="chapter in chapters"
          :key="chapter.title"
          :image="photoSrc(chapter.photoId)"
          :image-alt="chapter.title"
          :kicker="CONTENT_KINDS[chapter.kind]"
          :title="chapter.title"
          :excerpt="chapter.body"
          :body="chapter.body"
        />
        <MediaTextCard
          v-for="event in reconstruction.events"
          :key="event.id"
          :image="photoSrc(eventPhotos[event.id])"
          :image-alt="event.title"
          :kicker="CONTENT_KINDS[event.kind]"
          :title="event.title"
          :date="event.date"
          :excerpt="event.description"
          :body="event.description"
        />
      </div>
      <div class="mt-6 space-y-6">
        <div v-for="pair in beforeAfterPairs" :key="pair.id">
          <h3 class="font-display text-lg mb-2">{{ pair.title }}</h3>
          <p v-if="pair.beforeCaption" class="text-caption mb-2">{{ pair.beforeCaption }}</p>
          <BeforeAfterSlider>
            <template #before>
              <img :src="pair.before" :alt="pair.title" class="ba-img" />
            </template>
            <template #after>
              <img :src="pair.after" :alt="pair.title" class="ba-img" />
            </template>
          </BeforeAfterSlider>
          <p v-if="pair.afterCaption" class="text-caption mt-2">{{ pair.afterCaption }}</p>
        </div>
      </div>
      <QuoteBlock v-if="hag" class="mt-6" :text="hag.text" :attribution="hag.reference" :note="hag.context" />
      <QuoteBlock v-if="neh" class="mt-4" :text="neh.text" :attribution="neh.reference" :note="neh.context" />
      <article class="neu-card mt-6 text-center">
        <p class="text-meta mb-3">{{ reconstruction.appeal.status }}</p>
        <h2 class="font-display text-2xl">{{ reconstruction.appeal.title }}</h2>
        <p class="mt-4 text-ink-soft leading-relaxed">{{ reconstruction.appeal.lead }}</p>
        <p class="mt-4 italic">« {{ reconstruction.appeal.blessing }} »</p>
        <a :href="reconstruction.appeal.url" class="neu-btn-primary mt-6 inline-flex" target="_blank" rel="noopener noreferrer">
          Accéder à la campagne de don
        </a>
      </article>
      <ChapterVideos category="reconstruction" />
      <div class="story-cta">
        <a :href="site.donationUrl" class="neu-btn-primary" target="_blank" rel="noopener noreferrer">Faire un don</a>
        <RouterLink to="/livre-de-memoire" class="neu-btn">Laisser un témoignage</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ba-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
