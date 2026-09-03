<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import HistoryCard from '@/components/archive/HistoryCard.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import CategoryFilter from '@/components/common/CategoryFilter.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import { ref } from 'vue'
import { templeEvents, templeEventCategories } from '@/data'

const category = ref('all')
</script>

<template>
  <div>
    <PageHero
      period="III — 2018 — 17 mai 2026"
      title="La vie du Temple"
      subtitle="Huit années d’une maison de rassemblement : cultes, prédications, conventions, visites, cérémonies. Les archives de cette vie seront reçues ici, catégorie par catégorie."
    />
    <PeriodNav />

    <section class="mx-auto max-w-5xl px-4 lg:px-5 py-4 lg:py-16 md:py-24">
      <div class="hidden lg:block">
        <SectionHeading eyebrow="Catégories d’archives" title="Ce que le Temple a vécu" />
      </div>
      <CategoryFilter v-model="category" :items="templeEventCategories" all-label="Toutes" />

      <MobileSectionHead title="Suggéré pour vous" class="mt-4 lg:hidden" />
      <SuggestList class="mt-2 lg:hidden">
        <HistoryCard v-for="event in templeEvents" :key="event.id" :item="event" />
      </SuggestList>
      <div class="mt-10 space-y-4 hidden lg:block">
        <HistoryCard v-for="event in templeEvents" :key="`d-${event.id}`" :item="event" />
        <EmptyArchive
          class="mt-8"
          title="Cartes d’archives à venir"
          text="Cultes, conventions, visiteurs et moments particuliers n’ont pas encore été versés. Chaque carte pourra porter date, photographie, vidéo et contexte."
        />
      </div>
    </section>

    <section class="hidden lg:block px-5 pb-16">
      <div class="neu-card mx-auto max-w-3xl">
        <p class="text-meta mb-3">Suite du récit</p>
        <h2 class="font-display text-2xl mb-4">17 mai 2026</h2>
        <RouterLink to="/epreuve" class="neu-btn-primary">Lire le jour de l’épreuve</RouterLink>
      </div>
    </section>
  </div>
</template>
