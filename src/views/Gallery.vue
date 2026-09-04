<script setup>
import { computed, ref } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import SearchBar from '@/components/common/SearchBar.vue'
import CategoryFilter from '@/components/common/CategoryFilter.vue'
import PhotoGallery from '@/components/gallery/PhotoGallery.vue'
import VideoSections from '@/components/video/VideoSections.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import { photos, photoCategories, youtubeVideos } from '@/data'

const query = ref('')
const category = ref('all')
const visiblePhotos = computed(() => photos.filter((p) => p.src))
const filterItems = computed(() =>
  photoCategories.filter((c) => visiblePhotos.value.some((p) => p.category === c.id)),
)
const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return visiblePhotos.value.filter((p) => {
    const matchCat = category.value === 'all' || p.category === category.value
    const hay = `${p.title} ${p.caption || ''} ${p.context || ''}`.toLowerCase()
    return matchCat && (!q || hay.includes(q))
  })
})
</script>

<template>
  <div>
    <PageHero
      title="Galerie photographique"
      subtitle="Dédicace, façades, sanctuaire, et les jours qui ont suivi l’incendie."
    />
    <section class="mx-auto max-w-6xl px-4 lg:px-5 py-4 lg:py-16">
      <EditorialIntro
        class="lg:mb-8"
        text="La galerie rassemble les photographies déjà versées. Les vidéos associées viennent ensuite, pour ne pas commencer par une grille de lecteurs."
      />
      <SearchBar v-model="query" placeholder="Rechercher une photographie" />
      <div class="mt-3">
        <CategoryFilter v-model="category" :items="filterItems" />
      </div>
      <MobileSectionHead title="Photographies" class="mt-4 lg:hidden" />
      <div class="mt-1 lg:mt-8">
        <PhotoGallery v-if="filtered.length" :photos="filtered" />
        <EmptyArchive
          v-else
          title="Aucune photographie"
          text="Essayez une autre catégorie ou un autre mot."
        />
      </div>
      <MobileSectionHead title="Vidéos associées" class="mt-6 lg:hidden" />
      <div class="mt-1 lg:mt-10">
        <VideoSections :videos="youtubeVideos" />
      </div>
    </section>
  </div>
</template>
