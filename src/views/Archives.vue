<script setup>
import { computed, ref } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import SearchBar from '@/components/common/SearchBar.vue'
import CategoryFilter from '@/components/common/CategoryFilter.vue'
import ArchiveCard from '@/components/archive/ArchiveCard.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import { documents, youtubeVideos, pastorMessages, videoCategoryLabel } from '@/data'

const query = ref('')
const type = ref('all')

const typeFilters = [
  { id: 'photographies', label: 'Photos' },
  { id: 'vidéos', label: 'Vidéos' },
  { id: 'discours', label: 'Discours' },
  { id: 'documents', label: 'Documents' },
]

const allArchives = computed(() => {
  const items = [
    ...documents.map((d) => ({ ...d, search: `${d.title} ${d.description}` })),
    ...youtubeVideos.map((v) => ({
      id: v.id,
      type: 'vidéos',
      title: v.title,
      date: v.displayDate,
      category: v.category,
      categoryLabel: videoCategoryLabel(v.category),
      description: v.description,
      search: `${v.title} ${v.speaker || ''} ${videoCategoryLabel(v.category)}`,
    })),
    ...pastorMessages.map((m) => ({
      id: m.id,
      type: 'discours',
      title: m.title || m.event,
      date: m.displayDate,
      category: 'messages',
      status: 'verified',
      description: m.editorialSummary,
      search: `${m.author} ${m.event} ${m.quoteOriginal || ''} ${m.editorialSummary}`,
    })),
  ]
  const q = query.value.trim().toLowerCase()
  return items.filter((i) => {
    const matchType = type.value === 'all' || i.type === type.value
    const matchQuery = !q || i.search.toLowerCase().includes(q)
    return matchType && matchQuery
  })
})
</script>

<template>
  <div>
    <PageHero
      title="Archives"
      subtitle="Photographies, vidéos, documents, discours, prédications, témoignages, chronologies, messages."
    />
    <section class="page-stack mx-auto max-w-3xl px-4 lg:px-5 py-4 lg:py-16">
      <SearchBar v-model="query" placeholder="Rechercher une archive" />
      <div class="mt-3 lg:mt-6">
        <CategoryFilter v-model="type" :items="typeFilters" all-label="Tout" />
      </div>
      <MobileSectionHead title="Suggéré pour vous" class="mt-4 lg:hidden">
        <RouterLink to="/galerie" class="neu-icon !w-8 !h-8" aria-label="Galerie">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
            <rect x="4" y="5" width="16" height="14" rx="2.5" stroke="currentColor" stroke-width="1.7" />
            <circle cx="9" cy="10" r="1.4" fill="currentColor" />
            <path d="m7 16 3.2-3.2 2.3 2.3 2.4-2.8L17 16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
        </RouterLink>
      </MobileSectionHead>
      <SuggestList class="mt-1 lg:hidden">
        <ArchiveCard v-for="item in allArchives" :key="item.id" :item="item" />
      </SuggestList>
      <div class="mt-8 space-y-4 hidden lg:block">
        <ArchiveCard v-for="item in allArchives" :key="`d-${item.id}`" :item="item" />
        <EmptyArchive v-if="!allArchives.length" title="Aucun résultat" text="Aucune archive ne correspond à cette recherche." />
      </div>
      <EmptyArchive v-if="!allArchives.length" class="lg:hidden mt-3" title="Aucun résultat" text="Aucune archive ne correspond à cette recherche." />
      <div class="mt-6 lg:mt-10 hidden lg:flex gap-3">
        <RouterLink to="/galerie" class="neu-btn shrink-0">Galerie photo</RouterLink>
        <RouterLink to="/mediatheque" class="neu-btn shrink-0">Médiathèque</RouterLink>
        <RouterLink to="/voix" class="neu-btn shrink-0">Les voix</RouterLink>
      </div>
    </section>
  </div>
</template>
