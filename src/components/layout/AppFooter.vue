<script setup>
import { periods, site } from '@/data'
import SiteLogo from '@/components/common/SiteLogo.vue'
</script>

<template>
  <footer class="mt-auto px-4 md:px-6 pb-6 hidden lg:block">
    <div class="neu-card-lg mx-auto max-w-7xl">
      <div class="grid gap-12 md:grid-cols-12">
        <div class="md:col-span-5">
          <RouterLink to="/" class="footer-logo" aria-label="Temple Moriah — accueil">
            <SiteLogo size="lg" />
          </RouterLink>
          <p class="font-display text-2xl md:text-3xl">{{ site.name }}</p>
          <p class="mt-3 max-w-sm text-ink-soft">{{ site.tagline }}</p>
        </div>
        <div class="md:col-span-3">
          <p class="text-meta mb-4">Parcours</p>
          <ul class="space-y-2 text-ink-soft">
            <li v-for="p in periods" :key="p.id">
              <RouterLink :to="p.path" class="hover:text-gold">{{ p.roman }}. {{ p.title }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="md:col-span-4">
          <p class="text-meta mb-4">Lieu</p>
          <p>{{ site.church }}</p>
          <p class="text-ink-soft mt-2">{{ site.address }}</p>
          <p class="text-ink-soft">{{ site.country }}</p>
          <p class="text-ink-soft mt-2">{{ site.phone }}</p>
          <p class="mt-3">
            <a :href="site.officialSite" class="hover:text-gold" target="_blank" rel="noopener noreferrer">shekinahgospel.org</a>
          </p>
          <p>
            <a :href="site.donationUrl" class="hover:text-gold" target="_blank" rel="noopener noreferrer">Campagne de reconstruction</a>
          </p>
          <p class="mt-4">
            <RouterLink to="/a-propos" class="hover:text-gold">À propos</RouterLink>
          </p>
          <p class="mt-4 text-caption">
            Plateforme mémorielle. Les faits non confirmés ne sont pas inventés.
          </p>
        </div>
      </div>
      <div class="mt-10 pt-5 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-caption">
        <span>{{ site.name }} · Mémoire et archives</span>
        <span>Shekinah Tabernacle · Kinshasa</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-logo {
  display: inline-block;
  margin-bottom: 1rem;
}
.footer-logo:hover :deep(.site-logo),
.footer-logo:focus-visible :deep(.site-logo) {
  transform: scale(1.12) translateY(-2px);
  filter: drop-shadow(0 12px 22px rgba(74, 144, 226, 0.38));
}
@media (prefers-reduced-motion: reduce) {
  .footer-logo:hover :deep(.site-logo),
  .footer-logo:focus-visible :deep(.site-logo) {
    transform: none;
    filter: none;
  }
}
</style>
