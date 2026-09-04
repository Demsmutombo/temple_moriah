<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MediaTextCard from '@/components/common/MediaTextCard.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import ChapterPhotos from '@/components/gallery/ChapterPhotos.vue'
import { afterFireEvents, CONTENT_KINDS } from '@/data'
import { photoSrc } from '@/utils/archiveImage'

function eventPhoto(event) {
  if (event.photoId) return photoSrc(event.photoId)
  if (event.id.includes('culte')) return photoSrc('ph-culte-ciel-ouvert')
  return photoSrc('ph-facade-apres')
}

function eventBody(event) {
  return [event.description, event.quote ? `« ${event.quote} »` : '', event.sermon?.title ? `Parole : « ${event.sermon.title} » — ${event.sermon.speaker}` : '']
    .filter(Boolean)
    .join('\n\n')
}
</script>

<template>
  <div>
    <PageHero
      period="IV — Après le 17 mai 2026"
      title="Après l’incendie"
      subtitle="Les jours qui suivent : le culte dehors, le 24 mai 2026 à ciel ouvert, les remerciements."
    />
    <PeriodNav />

    <section class="page-body">
      <EditorialIntro text="Après le sinistre, l’assemblée se rassemble dehors. Le récit des jours suivants précède les captations." />
      <div class="story-cards">
        <MediaTextCard
          v-for="event in afterFireEvents"
          :key="event.id"
          :image="eventPhoto(event)"
          :image-alt="event.title"
          :kicker="CONTENT_KINDS[event.kind]"
          :title="event.title"
          :date="event.displayDate"
          :excerpt="event.description"
          :body="eventBody(event)"
        />
      </div>
      <ChapterVideos category="apres-incendie" />
      <ChapterPhotos category="apres-incendie" />
      <ChapterPhotos category="culte-ciel-ouvert" />
      <div class="story-cta">
        <RouterLink to="/consolation" class="neu-btn-primary">Ils sont venus nous consoler</RouterLink>
        <RouterLink to="/voix/temoignages" class="neu-btn">Paroles d’encouragement</RouterLink>
      </div>
    </section>
  </div>
</template>
