<script setup>
import PageHero from '@/components/layout/PageHero.vue'
</script>

<template>
  <div>
    <PageHero title="Page introuvable" subtitle="Ce chemin n’appartient pas encore aux archives." />
    <div class="mobile-page">
      <RouterLink to="/" class="neu-btn-primary">Retour à l’accueil</RouterLink>
    </div>
    <div class="hidden lg:block mx-auto max-w-3xl px-5 py-16">
      <RouterLink to="/" class="text-meta text-gold">Retour à l’accueil</RouterLink>
    </div>
  </div>
</template>
