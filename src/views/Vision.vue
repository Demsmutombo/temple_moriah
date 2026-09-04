<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import KindBadge from '@/components/common/KindBadge.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import AccordionRow from '@/components/common/AccordionRow.vue'
import SuggestList from '@/components/layout/SuggestList.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'

const sections = [
  {
    title: 'Origine',
    kind: 'fait',
    body: 'Shekinah Tabernacle est une assemblée de Kinshasa, sise au 18 boulevard Lumumba, commune de Matete. Le 3 juin 2013, elle célébrait son 23e anniversaire : l’assemblée existe donc bien avant le Temple Moriah. Le Temple est l’édifice élevé, de 2011 à 2018, pour abriter cette vie communautaire.',
  },
  {
    title: 'Vision',
    kind: 'narration',
    body: 'Le Temple n’est pas présenté ici comme une simple construction. Il est le fruit d’une vision : donner à une assemblée une maison de rassemblement, un lieu de parole, de culte et de transmission. Les formulations officielles de cette vision, dans les termes du pasteur et de l’église, restent à verser aux archives.',
  },
  {
    title: 'Mission',
    kind: 'fait',
    body: 'Shekinah Tabernacle se présente comme une église interdénominationnelle. Sur son site officiel, elle affirme croire au message prêché par William Marrion Branham, en lien avec Malachie 4:5-6, Luc 17:30 et Apocalypse 10:1-7. Aucune citation de William Branham n’est reproduite ici en l’absence d’une source fournie pour cette plateforme.',
  },
  {
    title: 'Contexte',
    kind: 'fait',
    body: 'Le Temple s’élève dans un quartier dense de la capitale, à Matete, près du pont N’Djili. Il devient, pour des milliers de fidèles venus de Kinshasa et d’autres provinces, un lieu emblématique de rassemblement. Le pasteur de l’assemblée est le Révérend Pasteur Richard Diyoka Nsanguluja.',
  },
  {
    title: 'Personnes importantes',
    kind: 'fait',
    status: 'to_complete',
    body: 'Le pasteur Richard Diyoka est le responsable public de l’assemblée. Les autres personnes ayant porté la vision — responsables, bâtisseurs, familles, donateurs — seront nommées lorsque les archives le permettront. Aucun nom n’est ajouté par approximation.',
  },
  {
    title: 'Dimension spirituelle',
    kind: 'narration',
    body: 'Le nom Moriah évoque, dans l’Écriture, le mont où Abraham se tint, et le lieu associé au temple de Jérusalem. Sur cette plateforme, ce nom n’est pas commenté au-delà de ce que l’église elle-même documentera. La dédicace de 2018 est associée, officiellement, au Psaume 122:1.',
  },
  {
    title: 'Transmission aux générations futures',
    kind: 'narration',
    body: 'Cette page existe pour que la vision ne disparaisse pas avec le bâtiment. Les textes officiels, les photographies de fondation et les témoignages des premiers jours pourront s’y inscrire, sans réécriture.',
  },
]
</script>

<template>
  <div>
    <PageHero
      period="I — La vision"
      title="Pourquoi le Temple ?"
      subtitle="Avant le chantier, une assemblée. Avant les archives, une vocation. Cette page rassemble uniquement ce qui est établi, et laisse ouvert ce qui reste à documenter."
    />
    <PeriodNav />

    <div class="mobile-page">
      <EditorialIntro
        kicker="L’histoire"
        title="Une mémoire qui traverse les générations"
        text="Découvrez l’histoire du Temple Moriah, de sa vision à sa construction, de sa vie à l’épreuve de 2026. Chaque étape ouvre les archives correspondantes, sans inventer ce qui n’est pas établi."
      />
      <div class="mobile-cta !mt-0 !mb-5">
        <RouterLink to="/construction" class="neu-btn">La construction</RouterLink>
        <RouterLink to="/dedicace" class="neu-btn">La dédicace</RouterLink>
        <RouterLink to="/epreuve" class="neu-btn">L’épreuve</RouterLink>
      </div>
      <MobileSectionHead title="La vision" />
      <SuggestList>
        <AccordionRow
          v-for="s in sections"
          :key="s.title"
          :title="s.title"
          :subtitle="s.body"
        />
      </SuggestList>
      <div class="mobile-cta">
        <RouterLink to="/construction" class="neu-btn-primary">Lire la construction</RouterLink>
      </div>
    </div>

    <article class="hidden lg:block story-stack mx-auto max-w-3xl px-4 lg:px-5 py-4 lg:py-16 md:py-24 space-y-4 lg:space-y-16">
      <ScrollReveal>
        <EditorialIntro
          kicker="L’histoire"
          title="Une mémoire qui traverse les générations"
          text="La vision, les débuts, la construction, la dédicace, la vie du Temple, l’épreuve, les jours qui ont suivi, puis la reconstruction. Chaque étape ouvre les archives correspondantes."
        />
        <div class="flex flex-wrap gap-3 mb-10">
          <RouterLink to="/construction" class="neu-btn">Construction</RouterLink>
          <RouterLink to="/dedicace" class="neu-btn">Dédicace</RouterLink>
          <RouterLink to="/vie-du-temple" class="neu-btn">Vie du Temple</RouterLink>
          <RouterLink to="/epreuve" class="neu-btn">L’épreuve</RouterLink>
          <RouterLink to="/reconstruction" class="neu-btn-primary">Reconstruction</RouterLink>
        </div>
      </ScrollReveal>
      <section v-for="s in sections" :key="s.title">
        <ScrollReveal>
          <div class="flex items-center gap-3 mb-4">
            <h2 class="font-display text-3xl md:text-4xl">{{ s.title }}</h2>
            <KindBadge :kind="s.kind" />
          </div>
          <p class="text-lg leading-relaxed text-ink-soft">{{ s.body }}</p>
        </ScrollReveal>
      </section>

      <EmptyArchive
        title="Textes officiels de la vision"
        text="Les formulations originales de la vision, de la mission et des motivations du projet n’ont pas encore été transmises. Elles seront publiées sans réécriture."
      />
    </article>

    <section class="hidden lg:block px-5 pb-16">
      <div class="neu-card mx-auto max-w-3xl">
        <SectionHeading eyebrow="Suite du récit" title="2011 : le chantier commence" />
        <p class="text-ink-soft mb-6">De la vision aux fondations. La construction du Temple Moriah s’étend de 2011 à 2018.</p>
        <RouterLink to="/construction" class="neu-btn-primary">Lire la construction</RouterLink>
      </div>
    </section>
  </div>
</template>
