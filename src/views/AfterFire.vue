<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import KindBadge from '@/components/common/KindBadge.vue'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import AccordionRow from '@/components/common/AccordionRow.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import ChapterPhotos from '@/components/gallery/ChapterPhotos.vue'
import { afterFireEvents } from '@/data'

const featured = afterFireEvents.find((e) => e.featured)
</script>

<template>
  <div>
    <PageHero
      period="IV — Après le 17 mai 2026"
      title="Après l’incendie"
      subtitle="Les jours qui suivent : le culte dehors, le 24 mai 2026 à ciel ouvert, les remerciements."
    />
    <PeriodNav />

    <div class="mobile-page">
      <MobileSectionHead title="Les jours suivants" />
      <SuggestList>
        <AccordionRow
          v-for="event in afterFireEvents"
          :key="event.id"
          :title="event.title"
          :subtitle="`${event.displayDate} · ${event.description}`"
        >
          <p>{{ event.description }}</p>
        </AccordionRow>
      </SuggestList>
      <ChapterVideos category="apres-incendie" />
      <ChapterPhotos category="apres-incendie" />
      <ChapterPhotos category="culte-ciel-ouvert" />
      <div class="mobile-cta">
        <RouterLink to="/consolation" class="neu-btn-primary">Ils sont venus nous consoler</RouterLink>
      </div>
    </div>

    <section v-if="featured" class="hidden lg:block px-4 lg:px-5 py-4 lg:py-10">
      <div class="neu-card-lg mx-auto max-w-4xl">
        <p class="text-meta mb-4">24 mai 2026</p>
        <h2 class="font-display text-3xl md:text-5xl">Culte à ciel ouvert</h2>
        <p class="mt-5 max-w-2xl text-ink-soft text-lg leading-relaxed">{{ featured.description }}</p>
        <p v-if="featured.quote" class="mt-6 italic text-xl text-gold">« {{ featured.quote }} »</p>
        <p class="mt-6 italic text-lg">« {{ featured.sermon.title }} »</p>
        <p class="text-caption mt-3">{{ featured.sermon.speaker }} · parole · archive à verser</p>
        <div class="mt-8">
          <ChapterVideos category="apres-incendie" />
          <ChapterPhotos category="culte-ciel-ouvert" />
        </div>
      </div>
    </section>

    <section class="hidden lg:block mx-auto max-w-3xl px-4 lg:px-5 py-4 lg:py-16 md:py-24">
      <ol>
        <li v-for="event in afterFireEvents" :key="event.id" class="neu-card mb-4">
          <ScrollReveal>
            <p class="text-meta text-gold">{{ event.displayDate }}</p>
            <div class="flex flex-wrap items-center gap-3 mt-3">
              <h2 class="font-display text-3xl">{{ event.title }}</h2>
              <KindBadge :kind="event.kind" />
            </div>
            <p class="mt-4 text-ink-soft leading-relaxed">{{ event.description }}</p>
            <p v-if="event.quote" class="mt-4 italic text-gold">« {{ event.quote }} »</p>
          </ScrollReveal>
        </li>
      </ol>

      <ChapterPhotos category="apres-incendie" />

      <p class="mt-8">
        <RouterLink to="/voix/temoignages" class="text-meta text-gold">Lire les paroles d’encouragement →</RouterLink>
      </p>

      <p class="mt-12">
        <RouterLink to="/consolation" class="text-meta text-gold">Ils sont venus nous consoler →</RouterLink>
      </p>
    </section>
  </div>
</template>
