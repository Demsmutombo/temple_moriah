<script setup>
import { computed, ref } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import SearchBar from '@/components/common/SearchBar.vue'
import CategoryFilter from '@/components/common/CategoryFilter.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MediaTextCard from '@/components/common/MediaTextCard.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import { testimonials, testimonialCategories } from '@/data'

const query = ref('')
const category = ref('all')
const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return testimonials.filter((t) => {
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
    <section class="page-body">
      <EditorialIntro
        text="Chaque témoignage porte un nom, un lieu et une parole déjà rendue publique. Ouvrez-les un à un : l’extrait d’abord, le texte complet ensuite."
      />
      <div class="flex flex-col gap-3 lg:gap-6">
        <SearchBar v-model="query" placeholder="Rechercher un témoignage" />
        <CategoryFilter v-model="category" :items="testimonialCategories" />
      </div>
      <div class="mt-5 grid gap-4">
        <MediaTextCard
          v-for="t in filtered"
          :key="t.id"
          :image="''"
          :image-alt="t.name"
          kicker="Témoignage"
          :title="t.name"
          :date="[t.relation, t.date].filter(Boolean).join(' · ')"
          :excerpt="t.excerpt"
          :body="t.recit || t.excerpt"
        />
        <EmptyArchive
          v-if="!filtered.length"
          title="La bibliothèque est ouverte"
          text="Aucun témoignage ne correspond à ce filtre."
        />
      </div>
      <p class="mt-8">
        <RouterLink to="/livre-de-memoire" class="text-meta text-gold">Laisser un souvenir dans le livre de mémoire →</RouterLink>
      </p>
    </section>
  </div>
</template>
