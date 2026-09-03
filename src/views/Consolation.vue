<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import VisitorCard from '@/components/testimony/VisitorCard.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import { consolationVisits } from '@/data'
</script>

<template>
  <div>
    <PageHero
      period="IV — Solidarité"
      title="Ils sont venus nous consoler"
      subtitle="Personnes, responsables et délégations venus soutenir l’assemblée après l’incendie. Chaque visite sera contextualisée : nom, fonction, communauté, date, message."
    />
    <PeriodNav />

    <section class="mobile-page">
      <MobileSectionHead title="Suggéré pour vous" />
      <SuggestList>
        <VisitorCard v-for="visit in consolationVisits" :key="visit.id" :visitor="visit" />
      </SuggestList>
      <EmptyArchive
        class="mt-4"
        title="Visites à documenter"
        text="Le pasteur a publiquement remercié les personnalités religieuses et les autorités venues témoigner leur soutien. Leurs noms, photographies et messages seront ajoutés dès qu’ils seront transmis, sans liste approximative."
      />
    </section>
    <section class="hidden lg:block mx-auto max-w-3xl px-5 py-16">
      <div class="space-y-4">
        <VisitorCard v-for="visit in consolationVisits" :key="`d-${visit.id}`" :visitor="visit" />
      </div>
      <EmptyArchive
        class="mt-4"
        title="Visites à documenter"
        text="Le pasteur a publiquement remercié les personnalités religieuses et les autorités venues témoigner leur soutien. Leurs noms, photographies et messages seront ajoutés dès qu’ils seront transmis, sans liste approximative."
      />
    </section>
  </div>
</template>
