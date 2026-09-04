<script setup>
import { computed, ref } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import SearchBar from '@/components/common/SearchBar.vue'
import CategoryFilter from '@/components/common/CategoryFilter.vue'
import TestimonialCard from '@/components/testimony/TestimonialCard.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import { testimonials, testimonialCategories } from '@/data'

const query = ref('')
const category = ref('all')
const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return testimonials
    .filter((t) => {
      const matchCat = category.value === 'all' || t.category === category.value
      const hay = `${t.name} ${t.excerpt || ''} ${t.recit || ''} ${t.relation || ''}`.toLowerCase()
      return matchCat && (!q || hay.includes(q))
    })
})
</script>

<template>
  <div>
    <PageHero
      title="Témoignages"
      subtitle="Récits personnels. Ils ne se substituent pas aux faits historiques."
    />
    <section class="mx-auto max-w-3xl px-4 lg:px-5 py-4 lg:py-16">
      <div class="flex flex-col gap-3 lg:gap-6">
        <SearchBar v-model="query" placeholder="Rechercher un témoignage" />
        <CategoryFilter v-model="category" :items="testimonialCategories" />
      </div>
      <MobileSectionHead title="Suggéré pour vous" class="mt-4 lg:hidden" />
      <SuggestList class="mt-1 lg:hidden">
        <TestimonialCard v-for="t in filtered" :key="t.id" :item="t" />
      </SuggestList>
      <div class="mt-10 space-y-4 hidden lg:block">
        <TestimonialCard v-for="t in filtered" :key="`d-${t.id}`" :item="t" />
        <EmptyArchive
          v-if="!filtered.length"
          class="mt-4"
          title="La bibliothèque est ouverte"
          text="Aucun témoignage n’a encore été versé. Les catégories sont prêtes : premier souvenir, ce que le Temple représentait, un moment marquant, après l’incendie, espérance pour la reconstruction."
        />
      </div>
      <EmptyArchive
        v-if="!filtered.length"
        class="mt-3 lg:hidden"
        title="La bibliothèque est ouverte"
        text="Aucun témoignage n’a encore été versé."
      />
      <p class="mt-8 lg:mt-10">
        <RouterLink to="/livre-de-memoire" class="text-meta text-gold">Laisser un souvenir dans le livre de mémoire →</RouterLink>
      </p>
    </section>
  </div>
</template>
