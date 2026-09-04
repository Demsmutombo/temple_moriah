<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MediaTextCard from '@/components/common/MediaTextCard.vue'
import ChapterVideos from '@/components/video/ChapterVideos.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import { visitors } from '@/data'
</script>

<template>
  <div>
    <PageHero
      title="Visiteurs"
      subtitle="Les visites reçues après l’épreuve, racontées par les images du Temple."
    />
    <section class="page-body">
      <EditorialIntro
        text="Chaque visite est une présence : un nom, une fonction, un lieu, un contexte. Les captations viennent ensuite, lorsqu’elles existent."
      />
      <div v-if="visitors.length" class="grid gap-4">
        <MediaTextCard
          v-for="v in visitors"
          :key="v.id"
          :image="v.photo || ''"
          :image-alt="v.name"
          kicker="Visite"
          :title="v.name"
          :date="[v.role, v.origin, v.date].filter(Boolean).join(' · ')"
          :excerpt="v.motive || v.message"
          :body="[v.motive, v.message].filter(Boolean).join('\n\n')"
        />
      </div>
      <EmptyArchive
        v-else
        title="Les visites seront nommées ici"
        text="Les personnes et délégations documentées par les archives vidéo apparaissent ci-dessous. Aucun nom n’est ajouté par approximation."
      />
      <ChapterVideos category="consolation" />
    </section>
  </div>
</template>
