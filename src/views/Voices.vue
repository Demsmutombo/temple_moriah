<script setup>
import { computed, ref } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import PastorMessageCard from '@/components/testimony/PastorMessageCard.vue'
import PersonRow from '@/components/common/PersonRow.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import SearchBar from '@/components/common/SearchBar.vue'
import { pastorMessages } from '@/data'

const categories = [
  { title: 'Paroles du pasteur', path: '/voix/pasteur', text: 'Interventions archivées, citations originales distinguées des résumés éditoriaux.' },
  { title: 'Témoignages des membres', path: '/voix/temoignages', text: 'Récits personnels : souvenirs, épreuve, espérance.' },
  { title: 'Visiteurs', path: '/voix/visiteurs', text: 'Visites contextualisées, pas une liste de noms.' },
  { title: 'Responsables religieux', path: '/consolation', text: 'Paroles et présences de responsables venus après l’épreuve.' },
  { title: 'Délégations', path: '/consolation', text: 'Communautés et délégations de soutien.' },
  { title: 'Messages de consolation', path: '/consolation', text: 'Textes reçus pour consoler l’assemblée.' },
]

const query = ref('')
const filteredCategories = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return categories
  return categories.filter((c) => `${c.title} ${c.text}`.toLowerCase().includes(q))
})
</script>

<template>
  <div>
    <PageHero
      title="Les voix du Temple"
      subtitle="Le bâtiment représente une histoire. Les personnes représentent la mémoire. Les paroles représentent l’héritage."
    />

    <section class="mobile-page">
      <EditorialIntro text="Paroles, témoignages, visites : les personnes portent la mémoire du Temple. Choisissez une voix, puis lisez." />
      <SearchBar v-model="query" placeholder="Rechercher une voix, un témoignage" />
      <MobileSectionHead title="Suggéré pour vous" class="mt-4" />
      <SuggestList>
        <PersonRow
          v-for="c in filteredCategories"
          :key="c.title"
          :title="c.title"
          :subtitle="c.text"
          :to="c.path"
          action="Ouvrir"
        />
      </SuggestList>
    </section>

    <section class="hidden lg:block mx-auto max-w-5xl px-5 py-16">
        <div class="list-head">
          <h2 class="font-display text-lg lg:text-2xl">Les voix à écouter</h2>
        </div>
        <div class="suggest-card">
          <article v-for="c in categories" :key="c.title" class="neu-card voice-row">
            <span class="voice-avatar" aria-hidden="true">{{ c.title.charAt(0) }}</span>
            <div class="min-w-0 flex-1">
              <h2 class="font-display text-base lg:text-2xl">{{ c.title }}</h2>
              <p class="mt-1 text-sm lg:text-base text-ink-soft line-clamp-2">{{ c.text }}</p>
            </div>
            <RouterLink :to="c.path" class="voice-follow">Ouvrir</RouterLink>
          </article>
        </div>
    </section>

    <section class="hidden lg:block px-5 pb-16">
      <div class="mx-auto max-w-6xl neu-card-lg">
        <SectionHeading eyebrow="Extrait" title="Paroles du pasteur" />
        <div class="grid md:grid-cols-3 gap-6">
          <PastorMessageCard v-for="m in pastorMessages.slice(0, 3)" :key="m.id" :message="m" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.list-head {
  margin-bottom: 0.7rem;
  padding: 0 0.15rem;
}
.suggest-card {
  background: var(--neu-bg);
  border-radius: 22px;
  box-shadow: var(--neu-raised-sm);
  padding: 0.2rem 0.55rem 0.35rem;
}
.suggest-card .neu-card {
  box-shadow: none;
  padding: 0.55rem 0.35rem;
  border-radius: 0;
}
.voice-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.voice-avatar {
  display: grid;
  place-items: center;
  width: 2.7rem;
  height: 2.7rem;
  flex-shrink: 0;
  border-radius: 50%;
  font-weight: 700;
  color: var(--neu-blue);
  box-shadow: var(--neu-inset);
}
.voice-follow {
  flex-shrink: 0;
  font-size: 0.75rem;
  font-weight: 650;
  color: var(--neu-blue);
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  box-shadow: var(--neu-raised-sm);
}
@media (min-width: 1024px) {
  .suggest-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    background: none;
    box-shadow: none;
    padding: 0;
    border-radius: 0;
  }
  .suggest-card .neu-card {
    box-shadow: var(--neu-raised);
    padding: 1.5rem;
    border-radius: 28px;
  }
  .voice-row {
    display: block;
  }
  .voice-avatar {
    display: none;
  }
  .voice-follow {
    display: inline-flex;
    margin-top: 1rem;
    padding: 0.7rem 1.2rem;
  }
}
</style>
