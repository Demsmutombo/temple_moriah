<script setup>
import HeroSection from '@/components/hero/HeroSection.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import Timeline from '@/components/timeline/Timeline.vue'
import QuoteBlock from '@/components/common/QuoteBlock.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import PersonRow from '@/components/common/PersonRow.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import { historyEvents, periods, photos, site } from '@/data'

const introLines = [
  { title: 'Une vision.', text: 'Avant les murs, une assemblée et une vocation.', path: '/histoire' },
  { title: 'Une construction.', text: '2011 — 2018. Des années pour élever une maison.', path: '/construction' },
  { title: 'Une maison de rassemblement.', text: 'Le Temple devient lieu de culte, de parole et de rencontre.', path: '/vie-du-temple' },
  { title: 'Une mémoire.', text: 'Les personnes, les visites, les archives, les souvenirs.', path: '/archives' },
  { title: 'Une épreuve.', text: 'Le 17 mai 2026, le bâtiment est ravagé par le feu.', path: '/epreuve' },
  { title: 'Une reconstruction.', text: 'La mémoire continue. Un nouveau chapitre s’ouvre.', path: '/reconstruction' },
]

const gridTiles = [
  ...photos.slice(0, 6),
  ...periods.map((p) => ({
    id: `tile-${p.id}`,
    title: p.title,
    year: p.years,
    path: p.path,
    src: null,
  })),
].slice(0, 6)
</script>

<template>
  <div>
    <HeroSection />

    <section class="home-mobile lg:hidden">
      <div class="mobile-page !pt-1">
        <ul class="media-grid">
          <li v-for="tile in gridTiles" :key="tile.id">
            <RouterLink :to="tile.path || '/galerie'" class="media-tile">
              <img v-if="tile.src" :src="tile.src" :alt="tile.title" />
              <span v-else class="media-fallback">
                <span class="text-meta">{{ tile.year || tile.date }}</span>
                <span class="media-title">{{ tile.title }}</span>
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="mobile-page !pt-4">
        <MobileSectionHead title="Suggéré pour vous">
          <RouterLink to="/histoire" class="text-caption text-gold">Tout voir</RouterLink>
        </MobileSectionHead>
        <SuggestList>
          <PersonRow
            v-for="line in introLines"
            :key="line.title"
            :title="line.title"
            :subtitle="line.text"
            :to="line.path"
            action="Ouvrir"
          />
        </SuggestList>
      </div>
    </section>

    <div class="hidden lg:block">
      <section class="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <ScrollReveal>
          <div class="neu-card-lg text-center">
            <p class="text-meta mb-5">Le fil de l’histoire</p>
            <blockquote class="font-display italic text-xl md:text-4xl leading-tight text-ink">
              « {{ site.tagline }} »
            </blockquote>
          </div>
        </ScrollReveal>
      </section>

      <section class="mx-auto max-w-6xl px-4 pb-16">
        <div class="list-head">
          <h2 class="font-display text-lg lg:text-2xl">Le récit, étape par étape</h2>
        </div>
        <ol class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          <li v-for="(line, i) in introLines" :key="line.title">
            <ScrollReveal :delay="i * 40">
              <article class="neu-card h-full intro-card">
                <span class="intro-index" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
                <div>
                  <h2 class="font-display text-lg lg:text-3xl">{{ line.title }}</h2>
                  <p class="mt-1 lg:mt-3 text-sm lg:text-base text-ink-soft">{{ line.text }}</p>
                </div>
              </article>
            </ScrollReveal>
          </li>
        </ol>
        <ScrollReveal class="mt-10 text-center">
          <RouterLink to="/histoire" class="neu-btn-primary">Commencer le voyage historique</RouterLink>
        </ScrollReveal>
      </section>

      <PeriodNav />

      <section class="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          eyebrow="Quatre périodes"
          title="Lire le Temple comme une histoire"
          subtitle="Le bâtiment, les personnes, les paroles, les événements et les archives forment un même récit."
        />
        <div class="grid md:grid-cols-2 gap-5">
          <article v-for="p in periods" :key="p.id" class="neu-card period-card">
            <p class="text-meta">{{ p.roman }} · {{ p.years }}</p>
            <h3 class="font-display text-2xl mt-2">{{ p.title }}</h3>
            <p class="mt-3 text-ink-soft">{{ p.summary }}</p>
            <RouterLink :to="p.path" class="neu-btn mt-5">Entrer dans cette période</RouterLink>
          </article>
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-5 pb-16">
        <div class="neu-card-lg">
          <SectionHeading eyebrow="Chronologie" title="Les grandes dates" subtitle="Chaque jalon ouvre un chapitre. Ce qui n’est pas encore documenté reste ouvert, sans être inventé." />
          <Timeline :events="historyEvents" />
        </div>
      </section>

      <section class="mx-auto max-w-4xl px-5 pb-16">
        <ScrollReveal>
          <QuoteBlock
            text="Je suis joyeux quand on me dit : Allons à la maison de l’Éternel !"
            attribution="Psaume 122:1"
            note="Citation biblique associée, sur le site officiel, à la dédicace du Temple Moriah en 2018."
          />
        </ScrollReveal>
      </section>

      <section class="mx-auto max-w-5xl px-5 pb-20">
        <ScrollReveal>
          <div class="neu-card-lg text-center">
            <p class="text-meta mb-5">La mémoire continue</p>
            <h2 class="font-display text-3xl md:text-5xl">L’histoire ne s’arrête pas à l’incendie.</h2>
            <p class="mt-5 max-w-2xl mx-auto text-ink-soft">
              Elle continue avec les archives, les témoignages, les générations futures, la reconstruction et la transmission.
            </p>
            <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <RouterLink to="/archives" class="neu-btn-primary">Explorer les archives</RouterLink>
              <RouterLink to="/livre-de-memoire" class="neu-btn">Laisser un témoignage</RouterLink>
              <RouterLink to="/reconstruction" class="neu-btn">Découvrir la reconstruction</RouterLink>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  </div>
</template>

<style scoped>
.home-mobile {
  padding-bottom: 0.5rem;
}
.media-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.45rem;
}
.media-tile {
  display: block;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 18px;
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
}
.media-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.media-fallback {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 0.45rem;
}
.media-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.68rem;
  font-weight: 650;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-top: 0.2rem;
}
.list-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
  padding: 0 0.15rem;
}
.intro-card {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
}
.intro-index {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  border-radius: 50%;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--neu-blue);
  box-shadow: var(--neu-inset);
}
@media (min-width: 1024px) {
  .intro-card {
    display: block;
  }
  .intro-index {
    width: auto;
    height: auto;
    display: inline-flex;
    box-shadow: none;
    margin-bottom: 0.5rem;
  }
}
</style>
