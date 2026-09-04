<script setup>
import { computed } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import SearchBar from '@/components/common/SearchBar.vue'
import CategoryFilter from '@/components/common/CategoryFilter.vue'
import VideoSections from '@/components/video/VideoSections.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import { useArchiveFilter } from '@/composables/useArchiveFilter'
import { youtubeVideos, videoCategories } from '@/data'

const list = computed(() => youtubeVideos)
const { query, category, filtered } = useArchiveFilter(list, {
  searchKeys: ['title', 'description', 'speaker'],
})
const filterItems = computed(() =>
  videoCategories.filter((c) => youtubeVideos.some((v) => v.category === c.id)),
)
</script>

<template>
  <div>
    <PageHero
      title="Médiathèque"
      subtitle="Les médias suivent le fil de l’histoire : construction, dédicace, épreuve, puis relèvement."
    />
    <section class="mx-auto max-w-6xl px-4 lg:px-5 py-4 lg:py-16">
      <div class="flex flex-col gap-3 lg:gap-6 mb-4 lg:mb-12">
        <SearchBar v-model="query" placeholder="Rechercher une vidéo" />
        <CategoryFilter v-model="category" :items="filterItems" />
      </div>
      <MobileSectionHead title="Médias" class="lg:hidden" />
      <VideoSections v-if="filtered.length" :videos="filtered" />
      <EmptyArchive v-else title="Aucune vidéo pour ce filtre" text="Essayez une autre catégorie ou un autre mot." />
    </section>
  </div>
</template>
