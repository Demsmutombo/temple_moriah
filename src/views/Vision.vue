<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MediaTextCard from '@/components/common/MediaTextCard.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import { CONTENT_KINDS } from '@/data'
import { photoSrc } from '@/utils/archiveImage'

const sections = [
  {
    title: 'Origine',
    kind: 'fait',
    photoId: 'ph-facade-avant',
    body: 'Shekinah Tabernacle est une assemblée de Kinshasa, sise au 18 boulevard Lumumba, commune de Matete. Le 3 juin 2013, elle célébrait son 23e anniversaire : l’assemblée existe donc bien avant le Temple Moriah. Le Temple est l’édifice élevé, de 2011 à 2018, pour abriter cette vie communautaire.',
  },
  {
    title: 'Vision',
    kind: 'narration',
    photoId: 'ph-dedicace-vue',
    body: 'Le Temple n’est pas présenté ici comme une simple construction. Il est le fruit d’une vision : donner à une assemblée une maison de rassemblement, un lieu de parole, de culte et de transmission. Les formulations officielles de cette vision, dans les termes du pasteur et de l’église, restent à verser aux archives.',
  },
  {
    title: 'Mission',
    kind: 'fait',
    photoId: 'ph-sanctuaire-avant',
    body: 'Shekinah Tabernacle se présente comme une église interdénominationnelle. Sur son site officiel, elle affirme croire au message prêché par William Marrion Branham, en lien avec Malachie 4:5-6, Luc 17:30 et Apocalypse 10:1-7. Aucune citation de William Branham n’est reproduite ici en l’absence d’une source fournie pour cette plateforme.',
  },
  {
    title: 'Contexte',
    kind: 'fait',
    photoId: 'ph-toiture-avant',
    body: 'Le Temple s’élève dans un quartier dense de la capitale, à Matete, près du pont N’Djili. Il devient, pour des milliers de fidèles venus de Kinshasa et d’autres provinces, un lieu emblématique de rassemblement. Le pasteur de l’assemblée est le Révérend Pasteur Richard Diyoka Nsanguluja.',
  },
  {
    title: 'Personnes importantes',
    kind: 'fait',
    photoId: 'ph-balcon-avant',
    body: 'Le pasteur Richard Diyoka est le responsable public de l’assemblée. Les autres personnes ayant porté la vision — responsables, bâtisseurs, familles, donateurs — seront nommées lorsque les archives le permettront. Aucun nom n’est ajouté par approximation.',
  },
  {
    title: 'Dimension spirituelle',
    kind: 'narration',
    photoId: 'ph-sanctuaire-avant',
    body: 'Le nom Moriah évoque, dans l’Écriture, le mont où Abraham se tint, et le lieu associé au temple de Jérusalem. Sur cette plateforme, ce nom n’est pas commenté au-delà de ce que l’église elle-même documentera. La dédicace de 2018 est associée, officiellement, au Psaume 122:1.',
  },
  {
    title: 'Transmission aux générations futures',
    kind: 'narration',
    photoId: 'ph-facade-avant',
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

    <section class="page-body">
      <EditorialIntro
        kicker="L’histoire"
        title="Une mémoire qui traverse les générations"
        text="Découvrez l’histoire du Temple Moriah, de sa vision à sa construction, de sa vie à l’épreuve de 2026. Chaque étape ouvre les archives correspondantes, sans inventer ce qui n’est pas établi."
      />
      <div class="story-cards">
        <MediaTextCard
          v-for="s in sections"
          :key="s.title"
          :image="photoSrc(s.photoId)"
          :image-alt="s.title"
          :kicker="CONTENT_KINDS[s.kind]"
          :title="s.title"
          :excerpt="s.body"
          :body="s.body"
        />
      </div>
      <EmptyArchive
        class="mt-6"
        title="Textes officiels de la vision"
        text="Les formulations originales de la vision, de la mission et des motivations du projet n’ont pas encore été transmises. Elles seront publiées sans réécriture."
      />
      <div class="story-cta">
        <RouterLink to="/construction" class="neu-btn-primary">Lire la construction</RouterLink>
        <RouterLink to="/dedicace" class="neu-btn">La dédicace</RouterLink>
        <RouterLink to="/epreuve" class="neu-btn">L’épreuve</RouterLink>
      </div>
    </section>
  </div>
</template>
