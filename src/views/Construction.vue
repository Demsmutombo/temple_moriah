<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import KindBadge from '@/components/common/KindBadge.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import AccordionRow from '@/components/common/AccordionRow.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import { constructionStages } from '@/data'
</script>

<template>
  <div>
    <PageHero
      period="II — 2011 — 2018"
      title="La construction"
      subtitle="Sept années pour élever le Temple Moriah. Cette chronologie n’ajoute aucune étape non documentée : chaque case peut recevoir date, photographie, témoignage et document."
    />
    <PeriodNav />

    <div class="mobile-page">
      <MobileSectionHead title="Étapes du chantier" />
      <SuggestList>
        <AccordionRow
          v-for="stage in constructionStages"
          :key="stage.id"
          :title="stage.title"
          :subtitle="`${stage.date} · ${stage.description}`"
        >
          <p>{{ stage.description }}</p>
          <p class="mt-2 text-caption">{{ stage.date }}</p>
        </AccordionRow>
      </SuggestList>
      <div class="mobile-cta">
        <RouterLink to="/dedicace" class="neu-btn-primary">Lire la dédicace</RouterLink>
      </div>
    </div>

    <section class="hidden lg:block mx-auto max-w-4xl px-4 lg:px-5 py-4 lg:py-16 md:py-24">
      <SectionHeading
        eyebrow="Chronologie visuelle"
        title="Les étapes du chantier"
        subtitle="Galerie chronologique. Les photographies historiques seront versées au fur et à mesure."
      />

      <ol class="relative">
        <li
          v-for="stage in constructionStages"
          :key="stage.id"
          class="neu-card mb-4 grid md:grid-cols-[8rem_1fr] gap-4 md:gap-8"
        >
          <ScrollReveal>
            <p class="text-meta text-gold">{{ stage.date }}</p>
          </ScrollReveal>
          <ScrollReveal>
            <div class="flex flex-wrap items-center gap-3">
              <h2 class="font-display text-3xl">{{ stage.title }}</h2>
              <KindBadge :kind="stage.kind" />
            </div>
            <p class="mt-4 text-ink-soft leading-relaxed">{{ stage.description }}</p>
            <dl class="mt-6 grid sm:grid-cols-2 gap-3 text-caption">
              <div>Photo · {{ stage.photo ? 'disponible' : 'à verser' }}</div>
              <div>Vidéo · {{ stage.video ? 'disponible' : 'à verser' }}</div>
              <div>Témoignage · {{ stage.testimony ? 'disponible' : 'à verser' }}</div>
              <div>Document · {{ stage.document ? 'disponible' : 'à verser' }}</div>
            </dl>
            <p v-if="stage.people.length" class="mt-4 text-caption">Personnes : {{ stage.people.join(', ') }}</p>
          </ScrollReveal>
        </li>
      </ol>

      <EmptyArchive class="mt-10" title="Galerie photographique du chantier" text="Les images de la construction — fondations, élévation, colonnes, achèvement — n’ont pas encore été déposées dans cette plateforme." />
    </section>

    <section class="hidden lg:block px-5 pb-16">
      <div class="neu-card mx-auto max-w-3xl">
        <SectionHeading eyebrow="Suite du récit" title="2018 : la dédicace" />
        <RouterLink to="/dedicace" class="neu-btn-primary">Lire la dédicace</RouterLink>
      </div>
    </section>
  </div>
</template>
