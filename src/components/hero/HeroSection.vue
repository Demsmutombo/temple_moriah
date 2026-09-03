<script setup>
import SiteLogo from '@/components/common/SiteLogo.vue'
import { site } from '@/data'

const stats = [
  { value: '2011', label: 'Chantier' },
  { value: '2018', label: 'Dédicace' },
  { value: '2026', label: 'Mémoire' },
]
</script>

<template>
  <section class="hero" aria-label="Ouverture">
    <div class="hero-mobile lg:hidden">
      <div class="hero-cover">
        <img src="/screempage.jfif" alt="" />
      </div>
      <div class="hero-identity">
        <RouterLink to="/" class="hero-avatar" aria-label="Temple Moriah — accueil">
          <SiteLogo size="md" />
          <span class="hero-badge" aria-hidden="true">+</span>
        </RouterLink>
        <h1 class="hero-name">{{ site.name }}</h1>
        <p class="hero-bio">{{ site.church }} · {{ site.city }}</p>
        <p class="hero-lead">
          Histoire, mémoire et archives d’une maison de rassemblement.
        </p>
      </div>

      <div class="hero-stats" role="list">
        <div v-for="(stat, i) in stats" :key="stat.label" class="hero-stat" role="listitem">
          <p class="stat-value">{{ stat.value }}</p>
          <p class="stat-label">{{ stat.label }}</p>
          <span v-if="i < stats.length - 1" class="hero-stat-div" aria-hidden="true" />
        </div>
      </div>

      <div class="hero-actions">
        <RouterLink to="/histoire" class="neu-btn-primary flex-1">Découvrir l’histoire</RouterLink>
        <RouterLink to="/livre-de-memoire" class="hero-plus" aria-label="Livre de mémoire">+</RouterLink>
      </div>

      <div class="hero-tabs" role="tablist" aria-label="Raccourcis">
        <RouterLink to="/histoire" class="hero-tab">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            <path d="M5 5.5h9.5A3.5 3.5 0 0 1 18 9v10.5H8.5A3.5 3.5 0 0 1 5 16V5.5Z" stroke="currentColor" stroke-width="1.7" />
          </svg>
          Histoire
        </RouterLink>
        <RouterLink to="/archives" class="hero-tab">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            <rect x="4" y="7" width="16" height="12.5" rx="2.5" stroke="currentColor" stroke-width="1.7" />
            <path d="M8 7V6.2A2.2 2.2 0 0 1 10.2 4h3.6A2.2 2.2 0 0 1 16 6.2V7" stroke="currentColor" stroke-width="1.7" />
          </svg>
          Archives
        </RouterLink>
        <RouterLink to="/voix" class="hero-tab">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            <circle cx="12" cy="8" r="3" stroke="currentColor" stroke-width="1.7" />
            <path d="M5.5 19c.7-3 3-4.6 6.5-4.6S17.8 16 18.5 19" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
          </svg>
          Voix
        </RouterLink>
      </div>
    </div>

    <div class="hero-card hidden lg:block">
      <RouterLink to="/" class="hero-logo" aria-label="Temple Moriah — accueil">
        <SiteLogo size="xl" class="mx-auto" />
      </RouterLink>
      <p class="text-meta mb-5">{{ site.church }} · {{ site.city }}</p>
      <h1 class="font-display text-4xl sm:text-5xl md:text-7xl text-ink">
        {{ site.name }}
      </h1>
      <p class="mt-5 max-w-xl mx-auto text-base md:text-lg text-ink-soft leading-relaxed">
        Histoire, mémoire et archives d’une maison de rassemblement.
      </p>
      <div class="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center justify-center">
        <RouterLink to="/histoire" class="neu-btn-primary">Découvrir l’histoire</RouterLink>
        <RouterLink to="/archives" class="neu-btn">Explorer les archives</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 0;
}
.hero-cover {
  position: relative;
  height: 14.5rem;
  overflow: hidden;
  background: linear-gradient(165deg, #7eb6f0 0%, #4a90e2 48%, #3a7bc8 100%);
}
.hero-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
}
.hero-identity {
  text-align: center;
  padding: 0 1.15rem 0.15rem;
}
.hero-avatar {
  position: relative;
  display: grid;
  place-items: center;
  width: 7.35rem;
  height: 7.35rem;
  margin: -3.7rem auto 0;
  border-radius: 50%;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised);
  border: 4px solid var(--neu-bg);
  outline: 3px solid var(--neu-blue);
  outline-offset: 0;
}
.hero-avatar :deep(.site-logo) {
  width: 4.7rem;
  height: 3.45rem;
}
.hero-badge {
  position: absolute;
  right: 0.15rem;
  bottom: 0.2rem;
  width: 1.65rem;
  height: 1.65rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  color: #fff;
  background: linear-gradient(180deg, #5aa0f0 0%, #4a90e2 100%);
  box-shadow: var(--neu-raised-sm);
  border: 3px solid var(--neu-bg);
}
.hero-avatar:hover :deep(.site-logo),
.hero-avatar:focus-visible :deep(.site-logo) {
  transform: scale(1.1);
  filter: drop-shadow(0 8px 16px rgba(74, 144, 226, 0.35));
}
.hero-name {
  margin: 0.7rem 0 0;
  font-family: var(--font-display);
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.15;
}
.hero-bio {
  margin: 0.2rem 0 0;
  font-size: 0.78rem;
  font-weight: 650;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--neu-blue);
}
.hero-lead {
  margin: 0.55rem auto 0;
  max-width: 20rem;
  font-size: 0.86rem;
  line-height: 1.45;
  color: var(--color-ink-soft);
}
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 1.05rem 1.1rem 0;
  padding: 0.8rem 0.3rem;
  border-radius: 18px;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
}
.hero-stat {
  position: relative;
  text-align: center;
}
.stat-value {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
}
.stat-label {
  margin: 0.28rem 0 0;
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--color-muted);
}
.hero-stat-div {
  position: absolute;
  right: 0;
  top: 16%;
  bottom: 16%;
  width: 1px;
  background: color-mix(in srgb, var(--neu-blue) 22%, transparent);
}
.hero-actions {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.95rem 1.1rem 0.2rem;
}
.hero-plus {
  display: grid;
  place-items: center;
  width: 3.05rem;
  height: 3.05rem;
  flex-shrink: 0;
  border-radius: 0.95rem;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1;
  color: #fff;
  background: linear-gradient(180deg, #5aa0f0 0%, #4a90e2 100%);
  box-shadow: var(--neu-fab-shadow);
}
.hero-tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.25rem;
  margin: 0.95rem 0.4rem 0.1rem;
  padding: 0.15rem 0 0.35rem;
  border-top: 1px solid color-mix(in srgb, var(--neu-blue) 12%, transparent);
}
.hero-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.28rem;
  text-align: center;
  font-size: 0.72rem;
  font-weight: 650;
  color: var(--color-muted);
  padding: 0.7rem 0.25rem 0.45rem;
}
.hero-tab.router-link-active {
  color: var(--neu-blue);
}
.hero-tab.router-link-active::after {
  content: '';
  width: 1.4rem;
  height: 3px;
  border-radius: 999px;
  background: var(--neu-blue);
}
.hero-card {
  width: min(920px, 100%);
  margin: 0 auto;
  text-align: center;
  background: var(--neu-bg);
  border-radius: 40px;
  box-shadow: var(--neu-raised);
  padding: 4rem 3.5rem 3.25rem;
}
.hero-logo {
  display: inline-block;
  margin: 0 auto 1.5rem;
}
.hero-logo:hover :deep(.site-logo),
.hero-logo:focus-visible :deep(.site-logo) {
  transform: scale(1.1) translateY(-4px);
  filter: drop-shadow(0 16px 28px rgba(74, 144, 226, 0.4));
}
@media (min-width: 1024px) {
  .hero {
    min-height: 100dvh;
    display: grid;
    place-items: center;
    padding: 8rem 1.25rem 2.5rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-avatar:hover :deep(.site-logo),
  .hero-logo:hover :deep(.site-logo) {
    transform: none;
    filter: none;
  }
}
</style>
