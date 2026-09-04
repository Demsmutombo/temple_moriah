<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MediaTextCard from '@/components/common/MediaTextCard.vue'
import QuoteBlock from '@/components/common/QuoteBlock.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import ChapterPhotos from '@/components/gallery/ChapterPhotos.vue'
import { dedication, CONTENT_KINDS } from '@/data'
import { photoSrc } from '@/utils/archiveImage'

const sectionPhotos = {
  contexte: 'ph-facade-avant',
  date: 'ph-dedicace-vue',
  recit: 'ph-sanctuaire-avant',
}
</script>

<template>
  <div>
    <PageHero
      tone="solemn"
      period="III — 8 — 12 août 2018"
      title="La dédicace"
      subtitle="Du 8 au 12 août 2018, le Temple Moriah est offert à l’Éternel. Les prédications et la cérémonie se suivent ici, une après l’autre."
    />
    <PeriodNav />

    <section class="page-body">
      <EditorialIntro text="La consécration clôt le chantier et ouvre la vie du Temple. Le récit d’abord, puis les quinze captations de la dédicace, jour par jour, puis les photographies." />
      <div class="story-cards">
        <MediaTextCard
          v-for="s in dedication.sections"
          :key="s.id"
          :image="photoSrc(sectionPhotos[s.id])"
          :image-alt="s.title"
          :kicker="CONTENT_KINDS[s.kind]"
          :title="s.title"
          :excerpt="s.body"
          :body="s.body"
        />
      </div>
      <QuoteBlock
        class="mt-6"
        :text="dedication.biblicalReference.text"
        :attribution="dedication.biblicalReference.reference"
        :note="dedication.biblicalReference.source"
      />
      <ChapterVideos category="dedicace" />
      <ChapterPhotos category="dedicace" />
      <div class="story-cta">
        <RouterLink to="/vie-du-temple" class="neu-btn-primary">Lire la vie du Temple</RouterLink>
      </div>
    </section>
  </div>
</template>
