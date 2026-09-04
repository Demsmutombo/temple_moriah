<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '@/components/layout/PageHero.vue'
import SearchBar from '@/components/common/SearchBar.vue'
import CategoryFilter from '@/components/common/CategoryFilter.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import { searchCategories, useGlobalSearch } from '@/composables/useGlobalSearch'

const route = useRoute()
const { query, category, grouped, total } = useGlobalSearch()

const filterItems = searchCategories.filter((c) => c.id !== 'all')

onMounted(() => {
  const q = route.query.q
  if (typeof q === 'string') query.value = q
})
</script>

<template>
  <div>
    <PageHero
      title="Recherche"
      subtitle="Parcourir l’ensemble de la mémoire : événements, personnes, paroles, photographies, vidéos et documents."
    />
    <section class="page-body">
      <EditorialIntro text="Tapez un mot, une année, un nom. La recherche parcourt les archives déjà versées sur cette plateforme." />
      <SearchBar v-model="query" placeholder="Rechercher dans toute la plateforme" />
      <div class="mt-3">
        <CategoryFilter v-model="category" :items="filterItems" all-label="Toutes" />
      </div>
      <p v-if="query.trim()" class="text-caption mt-4">{{ total }} résultat{{ total > 1 ? 's' : '' }}</p>

      <EmptyArchive
        v-if="query.trim() && !total"
        class="mt-6"
        title="Aucun résultat"
        text="Aucun élément versé ne correspond à cette recherche."
      />

      <section v-for="group in grouped" :key="group.label" class="search-group">
        <h2>{{ group.label }}</h2>
        <ul>
          <li v-for="item in group.items" :key="item.id">
            <RouterLink :to="item.to" class="search-row">
              <span>
                <strong>{{ item.title }}</strong>
                <em>{{ [item.date, item.excerpt].filter(Boolean).join(' — ') }}</em>
              </span>
              <span class="open">Ouvrir</span>
            </RouterLink>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<style scoped>
.search-group {
  margin-top: 1.4rem;
}
.search-group h2 {
  margin: 0 0 0.55rem;
  font-family: var(--font-display);
  font-size: 1.05rem;
}
.search-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 0.15rem;
  border-bottom: 1px solid color-mix(in srgb, var(--neu-blue) 10%, transparent);
  text-decoration: none;
}
.search-row strong {
  display: block;
  overflow-wrap: anywhere;
  line-height: 1.3;
}
.search-row em {
  display: block;
  margin-top: 0.2rem;
  font-style: normal;
  font-size: 0.8rem;
  line-height: 1.45;
  color: var(--color-ink-soft);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.open {
  flex-shrink: 0;
  font-size: 0.72rem;
  font-weight: 650;
  padding: 0.38rem 0.8rem;
  border-radius: 999px;
  border: 1.5px solid color-mix(in srgb, var(--color-ink) 16%, transparent);
}
</style>
