<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import VisitorCard from '@/components/testimony/VisitorCard.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import { visitors } from '@/data'
</script>

<template>
  <div>
    <PageHero
      title="Visiteurs"
      subtitle="Les visites reçues après l’épreuve, racontées par les images du Temple."
    />
    <section class="mobile-page">
      <MobileSectionHead title="Visites" />
      <ChapterVideos category="consolation" />
      <SuggestList>
        <VisitorCard v-for="v in visitors" :key="v.id" :visitor="v" />
      </SuggestList>
    </section>
    <section class="hidden lg:block mx-auto max-w-6xl px-5 py-16">
      <ChapterVideos category="consolation" />
      <div class="space-y-4 mt-8">
        <VisitorCard v-for="v in visitors" :key="`d-${v.id}`" :visitor="v" />
      </div>
    </section>
  </div>
</template>
