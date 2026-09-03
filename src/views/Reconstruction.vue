<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import KindBadge from '@/components/common/KindBadge.vue'
import BeforeAfterSlider from '@/components/common/BeforeAfterSlider.vue'
import QuoteBlock from '@/components/common/QuoteBlock.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import SiteLogo from '@/components/common/SiteLogo.vue'
import AccordionRow from '@/components/common/AccordionRow.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import { reconstruction, biblicalReferences } from '@/data'

const neh = biblicalReferences.find((b) => b.id === 'neh2')
</script>

<template>
  <div>
    <PageHero
      period="IV — 2026 →"
      title="Reconstruction"
      subtitle="Un nouveau chapitre. Pas de chiffres financiers. Uniquement ce qui est établi : expertise, décision de démolir, première pierre du 24 juillet 2026, continuité de l’assemblée."
    />
    <PeriodNav />

    <div class="mobile-page">
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
      <div class="mobile-cta">
        <RouterLink to="/livre-de-memoire" class="neu-btn-primary">Laisser un témoignage</RouterLink>
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
        <p class="text-caption mb-6">Comparaison documentaire. Les photographies réelles remplaceront ces silhouettes dès qu’elles seront versées.</p>
        <BeforeAfterSlider>
          <template #before>
            <div class="h-full grid place-items-center bg-ivory text-gold p-8">
              <SiteLogo size="xl" />
              <p class="text-meta mt-4">Façade — mémoire</p>
            </div>
          </template>
          <template #after>
            <div class="h-full grid place-items-center bg-ivory text-ink-soft p-8">
              <p class="font-display text-3xl">Chantier</p>
              <p class="text-meta mt-3">Archive photographique à verser</p>
            </div>
          </template>
        </BeforeAfterSlider>
      </div>

      <div v-if="neh">
        <QuoteBlock :text="neh.text" :attribution="neh.reference" :note="neh.context" />
      </div>

      <EmptyArchive title="Mobilisation et étapes futures" text="Les objectifs détaillés du chantier seront publiés lorsqu’ils seront communiqués officiellement, sans chiffres non fournis." />
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
