<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import KindBadge from '@/components/common/KindBadge.vue'
import BeforeAfterSlider from '@/components/common/BeforeAfterSlider.vue'
import QuoteBlock from '@/components/common/QuoteBlock.vue'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import AccordionRow from '@/components/common/AccordionRow.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import { reconstruction, biblicalReferences, beforeAfterPairs, site } from '@/data'

const neh = biblicalReferences.find((b) => b.id === 'neh2')
const hag = biblicalReferences.find((b) => b.id === 'hag1')
</script>

<template>
  <div>
    <PageHero
      period="IV — 2026 →"
      title="Reconstruction"
      subtitle="De la cendre à la splendeur de l’Éternel. Expertise, décision de démolir, première pierre du 24 juillet 2026."
    />
    <PeriodNav />

    <div class="mobile-page">
      <EditorialIntro text="Expertise, décision de démolir, première pierre : le chapitre ouvert de rebâtir. Les médias suivent le récit." />
      <MobileSectionHead title="Étapes" />
      <SuggestList>
        <AccordionRow
          v-for="event in reconstruction.events"
          :key="event.id"
          :title="event.title"
          :subtitle="`${event.date} · ${event.description}`"
        >
          <p>{{ event.description }}</p>
        </AccordionRow>
      </SuggestList>
      <ChapterVideos category="reconstruction" />
      <div class="mt-4 space-y-4">
        <div v-for="pair in beforeAfterPairs" :key="`m-${pair.id}`">
          <h3 class="font-display text-base mb-2">{{ pair.title }}</h3>
          <p v-if="pair.beforeCaption" class="text-caption mb-2">{{ pair.beforeCaption }}</p>
          <BeforeAfterSlider>
            <template #before>
              <img :src="pair.before" :alt="pair.title" class="ba-img" />
            </template>
            <template #after>
              <img :src="pair.after" :alt="pair.title" class="ba-img" />
            </template>
          </BeforeAfterSlider>
          <p v-if="pair.afterCaption" class="text-caption mt-2">{{ pair.afterCaption }}</p>
        </div>
      </div>
      <div class="mobile-cta">
        <a :href="site.donationUrl" class="neu-btn-primary" target="_blank" rel="noopener noreferrer">Faire un don</a>
        <RouterLink to="/livre-de-memoire" class="neu-btn">Laisser un témoignage</RouterLink>
      </div>
    </div>

    <section class="hidden lg:block story-stack mx-auto max-w-3xl px-4 lg:px-5 py-4 lg:py-16 md:py-24 space-y-4 lg:space-y-16">
      <div>
        <SectionHeading eyebrow="Situation actuelle" title="Après l’expertise" />
        <KindBadge kind="fait" />
        <div class="mt-6 space-y-5 text-lg text-ink-soft leading-relaxed">
          <p v-for="(p, i) in reconstruction.situation.paragraphs" :key="i">{{ p }}</p>
        </div>
      </div>

      <div>
        <SectionHeading eyebrow="Vision" title="La mémoire et le nouveau lieu" />
        <KindBadge kind="narration" />
        <div class="mt-6 space-y-5 text-lg text-ink-soft leading-relaxed">
          <p v-for="(p, i) in reconstruction.vision.paragraphs" :key="i">{{ p }}</p>
        </div>
      </div>

      <div>
        <h2 class="font-display text-3xl mb-8">Étapes</h2>
        <ol>
          <li v-for="event in reconstruction.events" :key="event.id" class="neu-card mb-4">
            <p class="text-meta text-gold">{{ event.date }}</p>
            <h3 class="font-display text-2xl mt-2">{{ event.title }}</h3>
            <p class="mt-2 text-ink-soft">{{ event.description }}</p>
          </li>
        </ol>
      </div>

      <div>
        <h2 class="font-display text-3xl mb-6">Avant / après</h2>
        <div class="space-y-8">
          <div v-for="pair in beforeAfterPairs" :key="pair.id">
            <h3 class="font-display text-xl mb-2">{{ pair.title }}</h3>
            <p v-if="pair.beforeCaption" class="text-caption mb-3">{{ pair.beforeCaption }}</p>
            <BeforeAfterSlider>
              <template #before>
                <img :src="pair.before" :alt="`${pair.title}, avant`" class="ba-img" />
              </template>
              <template #after>
                <img :src="pair.after" :alt="`${pair.title}, après`" class="ba-img" />
              </template>
            </BeforeAfterSlider>
            <p v-if="pair.afterCaption" class="text-caption mt-2">{{ pair.afterCaption }}</p>
          </div>
        </div>
      </div>

      <div v-if="hag">
        <QuoteBlock :text="hag.text" :attribution="hag.reference" :note="hag.context" />
      </div>
      <div v-if="neh">
        <QuoteBlock :text="neh.text" :attribution="neh.reference" :note="neh.context" />
      </div>

      <div class="neu-card text-center">
        <p class="text-meta mb-3">{{ reconstruction.appeal.status }}</p>
        <h2 class="font-display text-3xl">{{ reconstruction.appeal.title }}</h2>
        <p class="mt-4 text-ink-soft leading-relaxed">{{ reconstruction.appeal.lead }}</p>
        <p class="mt-4 italic">« {{ reconstruction.appeal.blessing }} »</p>
        <a :href="reconstruction.appeal.url" class="neu-btn-primary mt-6 inline-flex" target="_blank" rel="noopener noreferrer">
          Accéder à la campagne de don
        </a>
      </div>

      <ChapterVideos category="reconstruction" />
    </section>

    <section class="hidden lg:block px-5 pb-20">
      <div class="neu-card-lg mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p class="text-meta mb-5">La mémoire continue</p>
          <h2 class="font-display text-3xl md:text-5xl">Transmettre aux générations futures</h2>
          <p class="mt-5 text-ink-soft max-w-xl mx-auto">
            Les archives, les témoignages et la reconstruction forment désormais un même héritage.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <RouterLink to="/archives" class="neu-btn-primary">Explorer les archives</RouterLink>
            <RouterLink to="/livre-de-memoire" class="neu-btn">Laisser un témoignage</RouterLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ba-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
