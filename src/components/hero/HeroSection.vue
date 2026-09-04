<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import SiteLogo from '@/components/common/SiteLogo.vue'
import { useReducedMotion } from '@/composables/useReducedMotion'
import { site } from '@/data'

const stats = [
  { value: '2011', label: 'Chantier' },
  { value: '2018', label: 'Dédicace' },
  { value: '2026', label: 'Mémoire' },
]

const slides = Object.entries(
  import.meta.glob('@/assets/images/hero/*.{jpg,jpeg,png,webp,JPG,JPEG}', {
    eager: true,
    import: 'default',
  }),
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src)

const index = ref(0)
const reduced = useReducedMotion()
const HOLD_MS = 5200
let timer = 0

function nextSlide() {
  if (slides.length < 2) return
  index.value = (index.value + 1) % slides.length
}

onMounted(() => {
  if (reduced.value || slides.length < 2) return
  timer = window.setInterval(nextSlide, HOLD_MS)
})

onUnmounted(() => {
  if (timer) window.clearInterval(timer)
})
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
        <RouterLink to="/mediatheque" class="hero-tab">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            <rect x="4" y="6" width="16" height="12" rx="2.5" stroke="currentColor" stroke-width="1.7" />
            <path d="m10 9 6 3-6 3V9Z" fill="currentColor" />
          </svg>
          Vidéos
        </RouterLink>
      </div>
    </div>

    <div class="hero-desk hidden lg:block">
      <div class="hero-desk-card">
        <div class="hero-desk-copy">
          <div class="hero-desk-inner">
            <p class="hero-bio">{{ site.church }} · {{ site.city }}</p>
            <h1 class="hero-desk-title">{{ site.name }}</h1>
            <p class="hero-desk-lead">
              Histoire, mémoire et archives d’une maison de rassemblement.
            </p>
            <div class="hero-desk-stats" role="list">
              <div v-for="stat in stats" :key="stat.label" class="hero-desk-stat" role="listitem">
                <p class="stat-value">{{ stat.value }}</p>
                <p class="stat-label">{{ stat.label }}</p>
              </div>
            </div>
            <div class="hero-desk-actions">
              <RouterLink to="/histoire" class="neu-btn-primary">Découvrir l’histoire</RouterLink>
              <RouterLink to="/mediatheque" class="neu-btn">Voir les vidéos</RouterLink>
            </div>
          </div>
        </div>
        <figure class="hero-desk-photo" aria-hidden="true">
          <img
            v-for="(src, i) in slides"
            :key="src"
            :src="src"
            alt=""
            class="hero-slide"
            :class="{ 'is-active': i === index }"
          />
        </figure>
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
.hero-desk {
  width: 100%;
  height: 100%;
}
.hero-desk-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  background: var(--neu-bg);
}
.hero-desk-copy {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  margin-right: -3.5rem;
  padding: 6.5rem 7% 4.5rem;
  background: linear-gradient(
    90deg,
    var(--neu-bg) 0%,
    var(--neu-bg) 74%,
    transparent 100%
  );
}
.hero-desk-inner {
  width: 100%;
  max-width: 32rem;
  text-align: center;
}
.hero-desk-title {
  margin: 0.45rem 0 0;
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 4vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1;
  color: var(--color-ink);
}
.hero-desk-lead {
  margin: 0.9rem auto 0;
  max-width: 24rem;
  font-size: 1.05rem;
  line-height: 1.55;
  color: var(--color-ink-soft);
}
.hero-desk-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  margin-top: 1.35rem;
  padding: 0.85rem 0.2rem;
  border-radius: 20px;
  box-shadow: var(--neu-inset);
}
.hero-desk-stat {
  text-align: center;
}
.hero-desk-actions {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  margin-top: 1.5rem;
  padding: 0.4rem 0.15rem 0.65rem;
}
.hero-desk-actions :deep(.neu-btn),
.hero-desk-actions :deep(.neu-btn-primary) {
  flex: 0 0 auto;
  white-space: nowrap;
}
.hero-desk-photo {
  position: relative;
  z-index: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
}
.hero-slide {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
  display: block;
  opacity: 0;
  transform: scale(1.04);
  transition: opacity 1.15s ease, transform 6.4s ease-out;
}
.hero-slide.is-active {
  opacity: 1;
  transform: scale(1);
  z-index: 0;
}
@media (min-width: 1024px) {
  .hero {
    height: 100dvh;
    padding: 0;
  }
  .hero-desk {
    position: fixed;
    inset: 0;
    z-index: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-avatar:hover :deep(.site-logo) {
    transform: none;
    filter: none;
  }
  .hero-slide {
    transform: none;
    transition: none;
  }
}
</style>
