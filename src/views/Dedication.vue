<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import KindBadge from '@/components/common/KindBadge.vue'
import QuoteBlock from '@/components/common/QuoteBlock.vue'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import AccordionRow from '@/components/common/AccordionRow.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import ChapterPhotos from '@/components/gallery/ChapterPhotos.vue'
import { dedication } from '@/data'
</script>

<template>
  <div>
    <PageHero
      tone="solemn"
      period="III — 2018"
      title="La dédicace"
      subtitle="Le Temple Moriah est consacré. Une année établie. Un acte solennel. Un récit encore à documenter dans le détail."
    />
    <PeriodNav />

    <div class="mobile-page">
      <MobileSectionHead title="Pour vous" />
      <SuggestList>
        <AccordionRow
          v-for="s in dedication.sections"
          :key="s.id"
          :title="s.title"
          :subtitle="s.body"
        />
      </SuggestList>
      <ChapterVideos category="dedicace" />
      <ChapterPhotos category="dedicace" />
      <div class="mobile-cta">
        <RouterLink to="/vie-du-temple" class="neu-btn-primary">Lire la vie du Temple</RouterLink>
      </div>
    </div>

    <article class="hidden lg:block story-stack mx-auto max-w-3xl px-4 lg:px-5 py-4 lg:py-16 md:py-24 space-y-4 lg:space-y-16">
      <section v-for="s in dedication.sections" :key="s.id">
        <ScrollReveal>
          <div class="flex items-center gap-3 mb-4">
            <h2 class="font-display text-3xl">{{ s.title }}</h2>
            <KindBadge :kind="s.kind" />
          </div>
          <p class="text-lg text-ink-soft leading-relaxed">{{ s.body }}</p>
        </ScrollReveal>
      </section>

      <ScrollReveal>
        <QuoteBlock
          :text="dedication.biblicalReference.text"
          :attribution="dedication.biblicalReference.reference"
          :note="dedication.biblicalReference.source"
        />
      </ScrollReveal>

      <ChapterVideos category="dedicace" />
      <ChapterPhotos category="dedicace" />
    </article>

    <section class="hidden lg:block px-5 pb-16">
      <div class="neu-card mx-auto max-w-3xl">
        <p class="text-meta mb-3">Suite du récit</p>
        <h2 class="font-display text-2xl mb-4">La vie du Temple, 2018 — 2026</h2>
        <RouterLink to="/vie-du-temple" class="neu-btn-primary">Lire la vie du Temple</RouterLink>
      </div>
    </section>
  </div>
</template>
