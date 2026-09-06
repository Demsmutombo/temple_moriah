<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MediaTextCard from '@/components/common/MediaTextCard.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import ChapterPhotos from '@/components/gallery/ChapterPhotos.vue'
import { constructionStages, CONTENT_KINDS } from '@/data'
import { photoSrc } from '@/utils/archiveImage'
</script>

<template>
  <div>
    <PageHero
      period="II — 2011 — 2018"
      title="La construction"
      subtitle="Sept années pour élever le Temple Moriah : première pierre, charpente, maçonnerie, finitions et parvis."
    />
    <PeriodNav />

    <section class="page-body">
      <EditorialIntro text="Sept années, une pierre après l’autre. Le récit du chantier précède les images et les vidéos." />
      <div class="story-cards">
        <MediaTextCard
          v-for="stage in constructionStages"
          :key="stage.id"
          :image="photoSrc(stage.photoId)"
          :image-alt="stage.title"
          :kicker="CONTENT_KINDS[stage.kind]"
          :title="stage.title"
          :date="stage.date"
          :excerpt="stage.description"
          :body="stage.description"
        />
      </div>
      <ChapterPhotos category="construction" />
      <ChapterVideos category="construction" />
      <div class="story-cta">
        <RouterLink to="/dedicace" class="neu-btn-primary">Lire la dédicace</RouterLink>
      </div>
    </section>
  </div>
</template>
