<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import VisitorCard from '@/components/testimony/VisitorCard.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import { visitors } from '@/data'
</script>

<template>
  <div>
    <PageHero
      title="Visiteurs"
      subtitle="Chaque visite est un événement contextualisé : nom, fonction, origine, date, motif, message. Cette page n’est pas un palmarès."
    />
    <section class="mobile-page">
      <MobileSectionHead title="Suggéré pour vous" />
      <SuggestList>
        <VisitorCard v-for="v in visitors" :key="v.id" :visitor="v" />
      </SuggestList>
      <EmptyArchive
        class="mt-4"
        title="Archives des visites"
        text="Les visites importantes — avant et après l’incendie — seront documentées ici dès que les sources seront transmises."
      />
    </section>
    <section class="hidden lg:block mx-auto max-w-3xl px-5 py-16">
      <div class="space-y-4">
        <VisitorCard v-for="v in visitors" :key="`d-${v.id}`" :visitor="v" />
      </div>
      <EmptyArchive
        class="mt-4"
        title="Archives des visites"
        text="Les visites importantes — avant et après l’incendie — seront documentées ici dès que les sources seront transmises."
      />
    </section>
  </div>
</template>
