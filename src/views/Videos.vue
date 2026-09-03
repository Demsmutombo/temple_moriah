<script setup>
import { computed } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import SearchBar from '@/components/common/SearchBar.vue'
import CategoryFilter from '@/components/common/CategoryFilter.vue'
import VideoCard from '@/components/video/VideoCard.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import { useArchiveFilter } from '@/composables/useArchiveFilter'
import { videos, videoCategories } from '@/data'

const list = computed(() => videos)
const { query, category, filtered } = useArchiveFilter(list, {
  searchKeys: ['title', 'description', 'speaker'],
})
</script>

<template>
  <div>
    <PageHero
      title="Médiathèque"
      subtitle="Bibliothèque vidéo du Temple. Filtres, recherche et pages de détail. Les fichiers pourront être ajoutés plus tard depuis une administration."
    />
    <section class="mx-auto max-w-6xl px-4 lg:px-5 py-4 lg:py-16">
      <div class="flex flex-col gap-3 lg:gap-6 mb-4 lg:mb-12">
        <SearchBar v-model="query" placeholder="Rechercher une vidéo, un orateur, un événement" />
        <CategoryFilter v-model="category" :items="videoCategories" />
      </div>
      <MobileSectionHead title="Suggéré pour vous" class="lg:hidden" />
      <div v-if="filtered.length" class="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10">
        <VideoCard v-for="video in filtered" :key="video.id" :video="video" />
      </div>
      <EmptyArchive v-else title="Aucune vidéo pour ce filtre" text="D’autres captations pourront être ajoutées sans modifier l’interface." />
    </section>
  </div>
</template>
