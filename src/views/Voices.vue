<script setup>
import { computed, ref } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import PastorMessageCard from '@/components/testimony/PastorMessageCard.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MediaTextCard from '@/components/common/MediaTextCard.vue'
import SearchBar from '@/components/common/SearchBar.vue'
import { pastorMessages } from '@/data'
import { photoSrc } from '@/utils/archiveImage'

const categories = [
  { title: 'Paroles du pasteur', path: '/voix/pasteur', text: 'Interventions archivées, citations originales distinguées des résumés éditoriaux.', photoId: 'ph-sanctuaire-avant' },
  { title: 'Témoignages des membres', path: '/voix/temoignages', text: 'Récits personnels : souvenirs, épreuve, espérance.', photoId: 'ph-balcon-avant' },
  { title: 'Visiteurs', path: '/voix/visiteurs', text: 'Visites contextualisées, pas une liste de noms.', photoId: 'ph-dedicace-vue' },
  { title: 'Responsables religieux', path: '/consolation', text: 'Paroles et présences de responsables venus après l’épreuve.', photoId: 'ph-culte-ciel-ouvert' },
  { title: 'Délégations', path: '/consolation', text: 'Communautés et délégations de soutien.', photoId: 'ph-facade-avant' },
  { title: 'Messages de consolation', path: '/consolation', text: 'Textes reçus pour consoler l’assemblée.', photoId: 'ph-facade-apres' },
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

    <section class="page-body">
      <EditorialIntro text="Paroles, témoignages, visites : les personnes portent la mémoire du Temple. Choisissez une voix, puis lisez." />
      <SearchBar v-model="query" placeholder="Rechercher une voix, un témoignage" />
      <div class="story-cards mt-4">
        <MediaTextCard
          v-for="c in filteredCategories"
          :key="c.title"
          :image="photoSrc(c.photoId)"
          :image-alt="c.title"
          kicker="Les voix"
          :title="c.title"
          :excerpt="c.text"
          :body="c.text"
          :to="c.path"
          action="Ouvrir"
        />
      </div>
      <div class="mt-8">
        <SectionHeading eyebrow="Extrait" title="Paroles du pasteur" />
        <div class="grid gap-4 md:grid-cols-3">
          <PastorMessageCard v-for="m in pastorMessages.slice(0, 3)" :key="m.id" :message="m" />
        </div>
      </div>
    </section>
  </div>
</template>
