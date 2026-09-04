<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import PeriodNav from '@/components/navigation/PeriodNav.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MediaTextCard from '@/components/common/MediaTextCard.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
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
    <section class="page-body">
      <EditorialIntro
        text="Pasteurs, autorités et délégations sont venus prier et soutenir. Ici, le récit précède les images : qui est venu, pourquoi, puis les archives filmées."
      />
      <div v-if="consolationVisits.length" class="grid gap-4">
        <MediaTextCard
          v-for="visit in consolationVisits"
          :key="visit.id"
          :image="visit.photo || ''"
          :image-alt="visit.name"
          kicker="Consolation"
          :title="visit.name"
          :date="[visit.role, visit.origin, visit.date].filter(Boolean).join(' · ')"
          :excerpt="visit.motive || visit.message"
          :body="[visit.motive, visit.message].filter(Boolean).join('\n\n')"
        />
      </div>
      <EmptyArchive
        v-else
        title="Les visites de consolation"
        text="Les captations déjà versées suivent. Les noms manquants seront ajoutés lorsqu’ils seront établis."
      />
      <ChapterVideos category="consolation" />
    </section>
  </div>
</template>
