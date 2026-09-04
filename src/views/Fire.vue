<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MediaTextCard from '@/components/common/MediaTextCard.vue'
import QuoteBlock from '@/components/common/QuoteBlock.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import ChapterPhotos from '@/components/gallery/ChapterPhotos.vue'
import { fireRecord, pastorMessages, biblicalReferences, CONTENT_KINDS } from '@/data'
import { photoSrc } from '@/utils/archiveImage'

const firstQuote = pastorMessages.find((m) => m.id === 'pm-enquete-17-mai')
const lam = biblicalReferences.find((b) => b.id === 'lam2')

const fireItems = [
  {
    title: fireRecord.sections.jour.title,
    kind: fireRecord.sections.jour.kind,
    photoId: 'ph-facade-apres',
    body: fireRecord.sections.jour.paragraphs.join('\n\n'),
  },
  {
    title: fireRecord.sections.etabli.title,
    kind: fireRecord.sections.etabli.kind,
    photoId: 'ph-sanctuaire-apres',
    body: fireRecord.sections.etabli.items
      .map((entry, i) => `${String(i + 1).padStart(2, '0')} — ${entry.text}`)
      .join('\n\n'),
  },
  {
    title: fireRecord.sections.apres.title,
    kind: fireRecord.sections.apres.kind,
    photoId: 'ph-culte-ciel-ouvert',
    body: fireRecord.sections.apres.paragraphs.join('\n\n'),
  },
]
</script>

<template>
  <div>
    <PageHero
      tone="solemn"
      period="IV — 17 mai 2026"
      title="Sinistre majeur"
      subtitle="17 mai 2026. Un incendie ravage le Temple Moriah. Un récit documentaire : ce qui est établi, et les images du jour."
    />
    <PeriodNav />

    <section class="page-body">
      <EditorialIntro
        kicker="Fait historique"
        :title="fireRecord.displayDate"
        :text="fireRecord.officialLead"
      />
      <p class="text-caption mb-4">{{ fireRecord.location }}</p>
      <div class="story-cards">
        <MediaTextCard
          v-for="item in fireItems"
          :key="item.title"
          :image="photoSrc(item.photoId)"
          :image-alt="item.title"
          :kicker="CONTENT_KINDS[item.kind]"
          :title="item.title"
          :excerpt="item.body"
          :body="item.body"
        />
        <MediaTextCard
          v-for="d in fireRecord.damages"
          :key="d.id"
          :image="photoSrc(d.photoId)"
          :image-alt="d.title"
          kicker="Ampleur des dégâts"
          :title="d.title"
          :excerpt="d.text"
          :body="d.text"
        />
      </div>
      <QuoteBlock
        v-if="firstQuote?.quoteOriginal"
        class="mt-6"
        :text="firstQuote.quoteOriginal"
        :attribution="firstQuote.author"
        note="Citation originale — 17 mai 2026. Ne pas modifier."
      />
      <ChapterVideos category="incendie" />
      <ChapterVideos category="epreuves" />
      <ChapterPhotos category="apres-incendie" />
      <p v-if="lam" class="text-caption mt-4">
        {{ lam.reference }} — {{ lam.context }} Le texte intégral n’est pas recopié ici ; il est lu dans l’Écriture.
      </p>
      <div class="story-cta">
        <RouterLink to="/apres-incendie" class="neu-btn-primary">Les jours qui ont suivi</RouterLink>
        <RouterLink to="/voix/temoignages" class="neu-btn">Lire les témoignages</RouterLink>
      </div>
    </section>
  </div>
</template>
