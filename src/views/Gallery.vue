<script setup>
import { computed, ref } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import SearchBar from '@/components/common/SearchBar.vue'
import CategoryFilter from '@/components/common/CategoryFilter.vue'
import PhotoGallery from '@/components/gallery/PhotoGallery.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import { photos, photoCategories } from '@/data'

const query = ref('')
const category = ref('all')
const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return photos.filter((p) => {
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
      subtitle="Catégories, années, événements, légendes. Plein écran et navigation lorsque les images seront versées."
    />
    <section class="mx-auto max-w-6xl px-4 lg:px-5 py-4 lg:py-16">
      <SearchBar v-model="query" placeholder="Rechercher une photographie" />
      <div class="mt-3">
        <CategoryFilter v-model="category" :items="photoCategories" />
      </div>
      <MobileSectionHead title="Suggéré pour vous" class="mt-4 lg:hidden" />
      <div class="mt-1 lg:mt-10">
        <PhotoGallery v-if="filtered.length" :photos="filtered" />
        <EmptyArchive
          v-else
          title="Photographies à verser"
          text="Les catégories Construction, Dédicace, Vie du Temple, Incendie, Après l’incendie, Visiteurs et Reconstruction sont prêtes."
        />
      </div>
    </section>
  </div>
</template>
