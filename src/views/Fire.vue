<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import KindBadge from '@/components/common/KindBadge.vue'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import QuoteBlock from '@/components/common/QuoteBlock.vue'
import AccordionRow from '@/components/common/AccordionRow.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import ChapterPhotos from '@/components/gallery/ChapterPhotos.vue'
import { fireRecord, pastorMessages, biblicalReferences, photos } from '@/data'

function firePhoto(id) {
  return photos.find((p) => p.id === id && p.src) || null
}

const firstQuote = pastorMessages.find((m) => m.id === 'pm-enquete-17-mai')
const lam = biblicalReferences.find((b) => b.id === 'lam2')

const fireItems = [
  {
    title: fireRecord.sections.jour.title,
    subtitle: fireRecord.sections.jour.paragraphs[0],
    paragraphs: fireRecord.sections.jour.paragraphs,
  },
  {
    title: fireRecord.sections.etabli.title,
    subtitle: fireRecord.sections.etabli.items[0].text,
    items: fireRecord.sections.etabli.items,
  },
  {
    title: fireRecord.sections.apres.title,
    subtitle: fireRecord.sections.apres.paragraphs[0],
    paragraphs: fireRecord.sections.apres.paragraphs,
  },
]
</script>

<template>
  <div>
    <PageHero
      tone="solemn"
      period="IV — 17 mai 2026"
      title="Sinistre majeur"
      subtitle="17 mai 2026. Un incendie ravage le Temple Moriah. Un récit documentaire : ce qui est établi, et les images du jour."
    />
    <PeriodNav />

    <div class="mobile-page">
      <MobileSectionHead title="Récit documentaire" />
      <SuggestList>
        <AccordionRow
          v-for="item in fireItems"
          :key="item.title"
          :title="item.title"
          :subtitle="item.subtitle"
        >
          <p v-for="(p, i) in item.paragraphs" :key="i" class="mb-2">{{ p }}</p>
          <p v-for="(entry, i) in item.items" :key="`i-${i}`" class="mb-2">{{ entry.text }}</p>
        </AccordionRow>
      </SuggestList>
      <ChapterVideos category="incendie" />
      <ChapterVideos category="epreuves" />
      <ChapterPhotos category="apres-incendie" />
      <div class="mobile-cta">
        <RouterLink to="/apres-incendie" class="neu-btn-primary">Les jours qui ont suivi</RouterLink>
      </div>
    </div>

    <article class="hidden lg:block story-stack mx-auto max-w-3xl px-4 lg:px-5 py-4 lg:py-16 md:py-24 space-y-4 lg:space-y-20">
      <section>
        <ScrollReveal>
          <p class="text-meta text-gold mb-3">{{ fireRecord.displayDate }}</p>
          <p class="text-caption mb-4">{{ fireRecord.location }}</p>
          <p class="mb-8 text-lg leading-relaxed">{{ fireRecord.officialLead }}</p>
          <div class="flex items-center gap-3 mb-6">
            <h2 class="font-display text-3xl md:text-4xl">{{ fireRecord.sections.jour.title }}</h2>
            <KindBadge kind="fait" />
          </div>
          <div class="space-y-5 text-lg text-ink-soft leading-relaxed">
            <p v-for="(p, i) in fireRecord.sections.jour.paragraphs" :key="i">{{ p }}</p>
          </div>
        </ScrollReveal>
      </section>

      <section>
        <ScrollReveal>
          <h2 class="font-display text-3xl md:text-4xl mb-8">{{ fireRecord.sections.etabli.title }}</h2>
          <ol class="space-y-6">
            <li v-for="(item, i) in fireRecord.sections.etabli.items" :key="i" class="grid grid-cols-[2rem_1fr] gap-4">
              <span class="text-meta text-gold pt-1">{{ String(i + 1).padStart(2, '0') }}</span>
              <p class="text-ink-soft leading-relaxed">{{ item.text }}</p>
            </li>
          </ol>
        </ScrollReveal>
      </section>

      <section v-if="firstQuote?.quoteOriginal">
        <QuoteBlock
          :text="firstQuote.quoteOriginal"
          :attribution="firstQuote.author"
          note="Citation originale — 17 mai 2026. Ne pas modifier."
        />
      </section>

      <section v-if="fireRecord.damages.length">
        <h2 class="font-display text-3xl mb-6">Ampleur des dégâts</h2>
        <ul class="space-y-6">
          <li v-for="d in fireRecord.damages" :key="d.id" class="neu-card">
            <h3 class="font-display text-2xl">{{ d.title }}</h3>
            <p class="mt-2 text-ink-soft">{{ d.text }}</p>
            <img
              v-if="firePhoto(d.photoId)"
              :src="firePhoto(d.photoId).src"
              :alt="d.title"
              class="mt-4 w-full rounded-2xl object-cover aspect-[16/10]"
            />
          </li>
        </ul>
      </section>

      <section>
        <ChapterPhotos category="apres-incendie" />
      </section>

      <section>
        <ChapterVideos category="incendie" />
        <ChapterVideos category="epreuves" />
      </section>

      <section>
        <h2 class="font-display text-3xl mb-6">Témoignages</h2>
        <p class="text-ink-soft leading-relaxed">
          Les paroles d’encouragement sont rassemblées à part, distinctes des faits du 17 mai.
        </p>
        <RouterLink to="/voix/temoignages" class="neu-btn mt-5">Lire les témoignages</RouterLink>
      </section>

      <section>
        <h2 class="font-display text-3xl mb-4">Réactions</h2>
        <p class="text-ink-soft leading-relaxed">
          Le gouverneur Daniel Bumba s’est rendu sur place. Des messages de solidarité ont afflué. Le contenu précis des déclarations officielles et des visites de consolation est rassemblé dans les pages suivantes, au fur et à mesure des archives.
        </p>
      </section>

      <section>
        <div class="flex items-center gap-3 mb-6">
          <h2 class="font-display text-3xl">Après l’événement</h2>
          <KindBadge kind="fait" />
        </div>
        <div class="space-y-5 text-lg text-ink-soft leading-relaxed">
          <p v-for="(p, i) in fireRecord.sections.apres.paragraphs" :key="i">{{ p }}</p>
        </div>
      </section>

      <p v-if="lam" class="text-caption">
        {{ lam.reference }} — {{ lam.context }} Le texte intégral n’est pas recopié ici ; il est lu dans l’Écriture.
      </p>
    </article>

    <section class="hidden lg:block px-5 pb-16">
      <div class="neu-card mx-auto max-w-3xl">
        <RouterLink to="/apres-incendie" class="neu-btn-primary">Les jours qui ont suivi</RouterLink>
      </div>
    </section>
  </div>
</template>
