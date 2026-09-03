<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import VisitorCard from '@/components/testimony/VisitorCard.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import { consolationVisits } from '@/data'
</script>

<template>
  <div>
    <PageHero
      period="IV — Solidarité"
      title="Ils sont venus nous consoler"
      subtitle="Les voix et les présences qui se sont levées après l’incendie."
    />
    <PeriodNav />

    <section class="mobile-page">
      <MobileSectionHead title="Consolation" />
      <ChapterVideos category="consolation" />
      <SuggestList>
        <VisitorCard v-for="visit in consolationVisits" :key="visit.id" :visitor="visit" />
      </SuggestList>
    </section>
    <section class="hidden lg:block mx-auto max-w-6xl px-5 py-16">
      <ChapterVideos category="consolation" />
      <div class="space-y-4 mt-8">
        <VisitorCard v-for="visit in consolationVisits" :key="`d-${visit.id}`" :visitor="visit" />
      </div>
    </section>
  </div>
</template>
