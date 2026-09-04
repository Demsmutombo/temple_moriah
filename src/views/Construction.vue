<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import KindBadge from '@/components/common/KindBadge.vue'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import AccordionRow from '@/components/common/AccordionRow.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import { constructionStages, photos } from '@/data'

function stagePhoto(stage) {
  return photos.find((p) => p.id === stage.photoId && p.src) || null
}
</script>

<template>
  <div>
    <PageHero
      period="II — 2011 — 2018"
      title="La construction"
      subtitle="Sept années pour élever le Temple Moriah : première pierre, charpente, maçonnerie, finitions et parvis."
    />
    <PeriodNav />

    <div class="mobile-page">
      <EditorialIntro text="Sept années, une pierre après l’autre. Le récit du chantier précède les images et les vidéos." />
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
            <img
              v-if="stagePhoto(stage)"
              :src="stagePhoto(stage).src"
              :alt="stagePhoto(stage).title"
              class="mt-3 w-full rounded-2xl object-cover aspect-[16/10]"
            />
        </AccordionRow>
      </SuggestList>
      <ChapterVideos category="construction" />
      <div class="mobile-cta">
        <RouterLink to="/dedicace" class="neu-btn-primary">Lire la dédicace</RouterLink>
      </div>
    </div>

    <section class="hidden lg:block mx-auto max-w-4xl px-4 lg:px-5 py-4 lg:py-16 md:py-24">
      <SectionHeading
        eyebrow="Chronologie visuelle"
        title="Les étapes du chantier"
        subtitle="Le parcours officiel du chantier, avec les vues de l’édifice achevé."
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
            <figure v-if="stagePhoto(stage)" class="mt-5 overflow-hidden rounded-2xl">
              <img :src="stagePhoto(stage).src" :alt="stagePhoto(stage).caption || stagePhoto(stage).title" class="w-full aspect-[16/10] object-cover" />
            </figure>
            <p v-if="stage.people.length" class="mt-4 text-caption">Personnes : {{ stage.people.join(', ') }}</p>
          </ScrollReveal>
        </li>
      </ol>

      <ChapterVideos category="construction" />
    </section>

    <section class="hidden lg:block px-5 pb-16">
      <div class="neu-card mx-auto max-w-3xl">
        <SectionHeading eyebrow="Suite du récit" title="2018 : la dédicace" />
        <RouterLink to="/dedicace" class="neu-btn-primary">Lire la dédicace</RouterLink>
      </div>
    </section>
  </div>
</template>
